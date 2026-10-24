"use client";

/**
 * SANATAN HI — Scripture Orbit.
 *
 * A 3D carousel ring of the major scriptures: cards stand on a circle
 * (rotateY(i·θ) translateZ(R)) and the whole ring slowly rotates. Visitors
 * can drag / swipe horizontally to spin it (with inertia), hover to pause,
 * and tap a card to ask the corpus about that scripture. The card facing
 * the viewer is highlighted each frame. Reduced-motion visitors get a
 * still, draggable ring.
 *
 * All per-frame work mutates DOM directly via refs — no React re-renders.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Orbit } from "lucide-react";
import { BookIcon } from "./book-icons";
import { CORPUS } from "@/lib/corpus";
import { BOOKS } from "@/lib/corpus/books";

/* the twelve scripture collections on the ring (the knowledge-base entry stays off) */
const RING_BOOK_IDS = [
  "bhagavad-gita",
  "ramayana",
  "mahabharata",
  "bhagavata",
  "shiv-puran",
  "vishnu-puran",
  "vedas",
  "upanishads",
  "ram-charit-manas",
  "yoga-sutras",
  "stotras",
  "mantras",
];

/* ring geometry in px — the whole scene scales down on narrow screens */
const RING_WIDTH = 700;
const RING_HEIGHT = 300;
const CARD_W = 148;
const CARD_H = 188;
const AUTO_SPEED = 14; /* degrees per second */
const IDLE_RESUME_MS = 2600;
const DRAG_DEG_PER_PX = 0.28;

interface ScriptureOrbitProps {
  onQuery: (q: string) => void;
}

export function ScriptureOrbit({ onQuery }: ScriptureOrbitProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [scale, setScale] = useState(1);
  const [reduced, setReduced] = useState(false);

  const books = useMemo(
    () =>
      RING_BOOK_IDS.map((id) => BOOKS.find((b) => b.id === id))
        .filter((b): b is NonNullable<typeof b> => Boolean(b))
        .map((b) => ({ ...b, count: CORPUS.filter((e) => e.bookId === b.id).length })),
    []
  );

  const n = books.length;
  const step = 360 / Math.max(n, 1);
  const radius = Math.round((CARD_W + 34) / (2 * Math.tan(Math.PI / Math.max(n, 3))));

  /* responsive down-scale of the fixed-size scene */
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      setScale(Math.min(1, Math.max(0.5, w / RING_WIDTH)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* reduced-motion preference */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  /* ── rotation state (refs only — the rAF loop owns it) ── */
  const angle = useRef(0);
  const lastApplied = useRef(-1); /* skip frames that change nothing (init −1 so the first frame always applies) */
  const vel = useRef(0);
  const dragging = useRef(false);
  const hovering = useRef(false);
  const lastPointer = useRef({ x: 0, moved: 0 });
  const lastInteraction = useRef(0);

  const applyFrame = useCallback(() => {
    const ring = ringRef.current;
    if (!ring) return;
    ring.style.transform = `translateZ(-${radius}px) rotateY(${angle.current}deg)`;
    for (let i = 0; i < n; i++) {
      const card = cardRefs.current[i];
      if (!card) continue;
      const d = Math.cos(((i * step + angle.current) % 360) * (Math.PI / 180));
      const front = Math.max(0, d);
      card.style.opacity = (0.32 + 0.68 * front).toFixed(3);
      const isFront = d > 0.965;
      card.classList.toggle("orbit-front", isFront);
      card.setAttribute("aria-current", isFront ? "true" : "false");
    }
  }, [n, step, radius]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    let raf = 0;
    let prev = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      const idle = now - lastInteraction.current > IDLE_RESUME_MS;
      if (!dragging.current && !hovering.current && idle && !reduced) {
        angle.current += AUTO_SPEED * dt;
      } else if (!dragging.current && Math.abs(vel.current) > 0.02) {
        /* inertia after a fling */
        angle.current += vel.current * dt;
        vel.current *= 0.94;
      }
      /* reduced-motion / paused ring: rewriting identical transforms every frame is wasted work */
      if (Math.abs(angle.current - lastApplied.current) > 0.001) {
        applyFrame();
        lastApplied.current = angle.current;
      }
      raf = requestAnimationFrame(tick);
    };

    /* perf: the loop only runs while the ring is on screen — an IntersectionObserver
       starts/stops it, so a scrolled-away ring costs zero CPU instead of writing
       12 card transforms per frame forever. */
    const start = () => {
      if (!raf) {
        prev = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    applyFrame(); /* paint the ring once even before it scrolls into view */
    lastApplied.current = angle.current;
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "90px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
  }, [applyFrame, reduced]);

  /* ── drag / swipe to spin ── */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    vel.current = 0;
    lastPointer.current = { x: e.clientX, moved: 0 };
    lastInteraction.current = performance.now();
    sceneRef.current?.setAttribute("data-dragging", "true");
    /* pointer capture is an optimisation (keeps the drag alive when the pointer
       leaves the scene) — guard it: synthetic / keyboard-activated events and some
       touch edge cases have no active pointer and would otherwise throw. */
    try {
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    } catch {
      /* drag still works without capture while the pointer stays inside */
    }
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastPointer.current.x;
    lastPointer.current.x = e.clientX;
    lastPointer.current.moved += Math.abs(dx);
    angle.current -= dx * DRAG_DEG_PER_PX;
    vel.current = -dx * DRAG_DEG_PER_PX * 60; /* approx deg/s for inertia */
    lastInteraction.current = performance.now();
    applyFrame();
  };
  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    sceneRef.current?.setAttribute("data-dragging", "false");
    lastInteraction.current = performance.now();
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      /* nothing captured — fine */
    }
  };

  /* tap vs drag — only treat as a card tap when the pointer barely moved.
     e.detail > 0 = real pointer tap; keyboard activation (Enter) and synthetic
     clicks carry detail 0 and must not be punished by a previous drag's mileage. */
  const onCardClick = (idx: number, e: React.MouseEvent) => {
    if (e.detail > 0 && lastPointer.current.moved > 8) return;
    onQuery(`Tell me about ${books[idx].name}`);
  };

  return (
    <section aria-label="Scripture orbit" className="mb-5">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-sanatan-maroon">
        <Orbit className="h-4 w-4 text-sanatan-saffron" aria-hidden />
        <span className="font-display tracking-wide">Scripture Orbit</span>
        <span className="font-deva text-[0.72rem] font-normal text-foreground/55">ग्रंथ मंडल · ब्रह्मांड-चक्र</span>
        <span className="ml-auto hidden text-[0.58rem] uppercase tracking-[0.18em] text-sanatan-gold sm:inline">
          drag to spin
        </span>
      </div>

      <div
        ref={sceneRef}
        className="orbit-scene relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-sanatan-gold-2/50 bg-gradient-to-b from-sanatan-parchment/70 via-sanatan-cream to-sanatan-cream-2/60 py-2"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={() => {
          hovering.current = false;
        }}
        onPointerEnter={() => {
          hovering.current = true;
        }}
      >
        <div className="orbit-glow pointer-events-none absolute inset-0" aria-hidden />

        {/* fixed-size 3D scene, scaled to fit — preserve-3d so scaling does not flatten the ring */}
        <div
          style={{
            width: RING_WIDTH,
            height: RING_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
          }}
          className="relative"
          aria-hidden={false}
        >
          <div
            ref={ringRef}
            className="orbit-ring absolute left-1/2 top-1/2"
            style={{ width: 0, height: 0, transformStyle: "preserve-3d" }}
          >
            {books.map((b, i) => (
              <button
                key={b.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                type="button"
                onClick={(e) => onCardClick(i, e)}
                tabIndex={0}
                aria-label={`${b.name} — ${b.nameHi}, ${b.count} entries. Ask about ${b.name}`}
                className="orbit-card absolute flex flex-col items-center rounded-xl border-2 border-sanatan-gold-2/70 bg-sanatan-parchment px-2 py-3 text-center shadow-[0_10px_30px_rgba(74,21,9,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sanatan-saffron"
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  left: -CARD_W / 2,
                  top: -CARD_H / 2,
                  transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
                }}
              >
                <span className="self-start font-display text-[0.66rem] font-semibold tracking-[0.14em] text-sanatan-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1.5 flex h-11 w-11 items-center justify-center rounded-full border border-sanatan-gold-2/60 bg-sanatan-gold/15">
                  <BookIcon icon={b.icon} className="h-5 w-5 text-sanatan-saffron" />
                </span>
                <span className="mt-2 px-1 text-[0.78rem] font-semibold leading-tight text-sanatan-maroon">{b.name}</span>
                <span className="mt-0.5 px-1 font-deva text-[0.7rem] leading-tight text-foreground/65">{b.nameHi}</span>
                <span className="mt-auto rounded-full border border-sanatan-gold-2/60 bg-sanatan-gold/10 px-2 py-0.5 text-[0.6rem] font-medium text-sanatan-gold">
                  {b.count} · श्लोक
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-1.5 text-center text-[0.62rem] text-foreground/55">
        बारह ग्रंथ · एक मंडल · खींचकर घुमाएँ
        <span className="mx-1.5 text-sanatan-gold/60" aria-hidden>◈</span>
        Twelve scriptures · one orbit · drag to spin
      </p>
    </section>
  );
}
