"use client";

/**
 * SANATANI BABAJI — 3D motion character stage.
 *
 * A holographic diorama of the Babaji character:
 *   • real CSS-3D depth — sacred mandala rings orbit BEHIND the figure,
 *     the figure floats mid-scene, mantra motes rise in FRONT of it
 *   • pointer parallax — the whole scene tilts in 3D toward the pointer
 *     (rotateX/rotateY on springs); touch devices get a slow autonomous drift
 *   • mood-driven motion — idle float, thinking breathe, speaking aura +
 *     ground ripples + equalizer, listening badge
 *   • tap the stage → opens the voice assistant
 *
 * Reduced-motion users get the still layered composition (all keyframes
 * are disabled by the prefers-reduced-motion guard in globals.css and the
 * JS-driven loops are skipped here).
 */

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mic } from "lucide-react";
import { BABAJI_HERO, type BabajiMood } from "./babaji-avatar";
import { cn } from "@/lib/utils";

/* ── mandala — two counter-rotating rings of sacred geometry ── */

function MandalaPetals({ count, r1, r2 }: { count: number; r1: number; r2: number }) {
  const cx = 110;
  return (
    <g>
      {Array.from({ length: count }, (_, i) => {
        const a = (i * 360) / count;
        return (
          <line
            key={i}
            x1={cx}
            y1={cx - r1}
            x2={cx}
            y2={cx - r2}
            transform={`rotate(${a} ${cx} ${cx})`}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}

function MandalaRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden focusable="false">
      <circle cx="110" cy="110" r="104" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 7" />
      <circle cx="110" cy="110" r="88" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="14 22" />
      <MandalaPetals count={12} r1={104} r2={92} />
      <circle cx="110" cy="110" r="64" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 5" />
      <circle cx="110" cy="110" r="40" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="6 10" />
    </svg>
  );
}

/* ── rising mantra motes (front layer, per-mote CSS vars drive the keyframes) ── */

interface Mote {
  glyph: string;
  x: string; /* left % */
  y: string; /* top %  — rises upward from here */
  z: number; /* translateZ px — front-of-scene depth */
  dur: number;
  delay: number;
  drift: number;
  opacity: number;
  cls: string;
}

const MOTES: Mote[] = [
  { glyph: "ॐ", x: "13%", y: "64%", z: 52, dur: 8.2, delay: 0, drift: 10, opacity: 0.8, cls: "text-lg" },
  { glyph: "धर्म", x: "85%", y: "58%", z: 44, dur: 9.4, delay: -3, drift: -12, opacity: 0.6, cls: "text-sm" },
  { glyph: "✦", x: "22%", y: "74%", z: 66, dur: 7.2, delay: -1.6, drift: 14, opacity: 0.9, cls: "text-xs" },
  { glyph: "राम", x: "78%", y: "72%", z: 60, dur: 8.8, delay: -4.4, drift: -9, opacity: 0.55, cls: "text-base" },
  { glyph: "ॐ", x: "9%", y: "82%", z: 36, dur: 9.8, delay: -2.4, drift: 12, opacity: 0.5, cls: "text-xl" },
  { glyph: "✧", x: "91%", y: "80%", z: 38, dur: 7.6, delay: -5.2, drift: -13, opacity: 0.85, cls: "text-xs" },
  { glyph: "कर्म", x: "30%", y: "86%", z: 70, dur: 10.2, delay: -6.6, drift: -7, opacity: 0.45, cls: "text-sm" },
  { glyph: "✦", x: "68%", y: "88%", z: 74, dur: 7.8, delay: -7.4, drift: 8, opacity: 0.7, cls: "text-sm" },
];

/* twinkling star-dots sprinkled across the scene */
const STARS = [
  { x: "18%", y: "20%", s: 3, d: 0 },
  { x: "80%", y: "14%", s: 2, d: -1.1 },
  { x: "64%", y: "30%", s: 2.5, d: -2.2 },
  { x: "34%", y: "12%", s: 2, d: -0.6 },
  { x: "90%", y: "44%", s: 2, d: -1.7 },
  { x: "8%", y: "40%", s: 2.5, d: -2.9 },
];

const MOOD_LABEL: Record<BabajiMood, string> = {
  idle: "3D Motion · त्रिविमीय बाबाजी",
  thinking: "Consulting the scriptures · शास्त्रों से पूछ रहा हूँ…",
  speaking: "Babaji is speaking · बोल रहा हूँ…",
  listening: "Listening · सुन रहा हूँ…",
};

interface BabajiStageProps {
  /** current character mood — driven by the live voice state */
  mood?: BabajiMood;
  /** tap the character → open the voice assistant */
  onOpen?: () => void;
  className?: string;
}

export function BabajiStage({ mood = "idle", onOpen, className }: BabajiStageProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  /* ── pointer parallax — the scene tilts toward the pointer in 3D ── */
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-1, 1], [-11, 11]), { stiffness: 110, damping: 16, mass: 0.6 });
  const rotateX = useSpring(useTransform(py, [-1, 1], [7, -7]), { stiffness: 110, damping: 16, mass: 0.6 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || e.pointerType === "touch") return;
    const rect = sceneRef.current?.getBoundingClientRect();
    if (!rect) return;
    px.set(Math.max(-1, Math.min(1, (e.clientX - rect.left) / rect.width - 0.5) * 2));
    py.set(Math.max(-1, Math.min(1, (e.clientY - rect.top) / rect.height - 0.5) * 2));
  };
  const resetParallax = () => {
    px.set(0);
    py.set(0);
  };

  /* ── mood-driven float loop (skipped for reduced-motion users) ── */
  const float = mood === "speaking" ? [0, -10, 0] : mood === "thinking" ? [0, -4, 0] : [0, -7, 0];
  const floatDur = mood === "speaking" ? 3.4 : mood === "thinking" ? 6 : 4.6;
  const sway = mood === "thinking" ? [-1.3, 0.7, -1.3] : [0, 1.1, 0];
  const active = mood === "speaking" || mood === "listening";

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="SANATANI BABAJI, 3D motion character — tap to open the voice assistant and talk"
      title="Tap to talk — SANATANI BABAJI"
      className={cn(
        "group relative block w-full cursor-pointer overflow-hidden rounded-xl border-2 border-sanatan-gold-2/80 bg-sanatan-maroon-2 text-left outline-none transition-shadow duration-300",
        "shadow-[0_14px_44px_rgba(74,21,9,0.32)] hover:border-sanatan-saffron/90 hover:shadow-[0_18px_58px_rgba(227,130,30,0.22)]",
        "focus-visible:ring-2 focus-visible:ring-sanatan-saffron active:scale-[0.99]",
        className
      )}
    >
      {/* ── the 3D scene ── */}
      <div
        ref={sceneRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetParallax}
        className="relative h-64 w-full select-none sm:h-72"
        style={{ perspective: "1100px" }}
      >
        {/* cosmic backdrop */}
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(130% 100% at 50% -10%, rgba(227,130,30,0.16) 0%, transparent 55%)," +
              "radial-gradient(160% 130% at 50% 115%, #3a0f06 0%, #210703 55%, #150401 100%)",
          }}
        />
        <div className="futuristic-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        {/* horizon glow */}
        <div
          className="absolute bottom-[16%] left-1/2 h-px w-[70%]"
          aria-hidden
          style={{ translate: "-50% 0", background: "linear-gradient(90deg, transparent, rgba(239,177,65,0.55), transparent)" }}
        />

        {/* parallax rig — everything below tilts in 3D with the pointer */}
        <motion.div
          className="absolute inset-0"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          aria-hidden
        >
          {/* autonomous drift keeps the diorama alive on touch screens */}
          <div className={cn("absolute inset-0", !reducedMotion && "babaji-drift")} style={{ transformStyle: "preserve-3d" }}>

            {/* back layer · saffron aura glow */}
            <div className="absolute inset-0" style={{ transform: "translateZ(-58px)" }}>
              <div
                className={cn(
                  "absolute left-1/2 top-[46%] h-[72%] w-[64%] rounded-full",
                  mood === "speaking" ? "babaji-aura" : "opacity-40"
                )}
                style={{
                  translate: "-50% -50%",
                  background: "radial-gradient(closest-side, rgba(227,130,30,0.5), rgba(239,177,65,0.18) 55%, transparent 75%)",
                }}
              />
            </div>

            {/* back layer · counter-rotating sacred mandala */}
            <div className="absolute inset-0" style={{ transform: "translateZ(-38px)" }}>
              <div className="absolute left-1/2 top-[44%] aspect-square h-[118%]" style={{ translate: "-50% -50%" }}>
                <MandalaRing className="babaji-mandala-fwd absolute inset-0 h-full w-full text-sanatan-gold/20" />
                <MandalaRing className="babaji-mandala-rev absolute inset-[11%] h-[78%] w-[78%] text-sanatan-saffron/15" />
              </div>
            </div>

            {/* ground layer · breathing shadow beneath the floating figure */}
            <div className="absolute inset-0" style={{ transform: "translateZ(-14px)" }}>
              <div
                className={cn("absolute bottom-[12.5%] left-1/2 h-3 w-40 rounded-[100%] bg-black blur-[7px]", !reducedMotion && "babaji-shadow")}
                style={{ translate: "-50% 0", opacity: 0.44 }}
              />
              {/* ground ripples while speaking */}
              {mood === "speaking" && (
                <>
                  <span className="babaji-speak-ring absolute bottom-[10%] left-1/2 h-14 w-14 rounded-full border-2 border-sanatan-saffron/60" style={{ translate: "-50% 0" }} />
                  <span className="babaji-speak-ring absolute bottom-[10%] left-1/2 h-14 w-14 rounded-full border border-sanatan-gold/50" style={{ translate: "-50% 0", animationDelay: "0.75s" }} />
                </>
              )}
            </div>

            {/* mid layer · the floating character — transparent full-body cutout */}
            <div className="absolute inset-0" style={{ transform: "translateZ(6px)" }}>
              <div className="absolute bottom-[15.5%] left-1/2" style={{ translate: "-50% 0" }}>
                <motion.div
                  animate={reducedMotion ? undefined : { y: float, rotate: sway }}
                  transition={{ duration: floatDur, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <img
                    src={BABAJI_HERO}
                    alt=""
                    draggable={false}
                    className={cn(
                      "block h-48 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:h-56",
                      "drop-shadow-[0_18px_30px_rgba(0,0,0,0.6)]",
                      mood === "thinking" && "babaji-breathe",
                      mood === "speaking" && "drop-shadow-[0_0_30px_rgba(227,130,30,0.55)]"
                    )}
                  />
                  {/* equalizer badge — Babaji's voice is in flight */}
                  {active && (
                    <span
                      className="absolute -bottom-1 -right-2 flex h-5 w-5 items-center justify-center gap-[2px] rounded-full border border-sanatan-gold-2/70 bg-sanatan-maroon shadow-md"
                      aria-hidden
                    >
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="babaji-eq h-[9px] w-[2px] origin-bottom rounded-full bg-sanatan-gold-2"
                          style={{ animationDelay: `${i * 0.16}s` }}
                        />
                      ))}
                    </span>
                  )}
                </motion.div>
              </div>
            </div>

            {/* star layer · twinkling dots */}
            <div className="absolute inset-0" style={{ transform: "translateZ(26px)" }}>
              {STARS.map((s, i) => (
                <span
                  key={i}
                  className="babaji-twinkle absolute rounded-full bg-sanatan-gold"
                  style={{ left: s.x, top: s.y, width: s.s, height: s.s, animationDelay: `${s.d}s` }}
                />
              ))}
            </div>

            {/* front layer · rising mantra motes */}
            {!reducedMotion &&
              MOTES.map((m, i) => (
                <div key={i} className="absolute inset-0" style={{ transform: `translateZ(${m.z}px)` }}>
                  <span
                    className={cn("babaji-mote absolute font-deva leading-none text-sanatan-gold-2", m.cls)}
                    style={
                      {
                        left: m.x,
                        top: m.y,
                        "--mote-dur": `${m.dur}s`,
                        "--mote-delay": `${m.delay}s`,
                        "--mote-x": `${m.drift}px`,
                        "--mote-opacity": m.opacity,
                      } as React.CSSProperties
                    }
                  >
                    {m.glyph}
                  </span>
                </div>
              ))}
          </div>
        </motion.div>

        {/* ── HUD chips (flat overlays, above the 3D rig) ── */}
        <span className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-full border border-sanatan-gold-2/50 bg-black/35 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-sanatan-gold-2 backdrop-blur-sm" aria-hidden>
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sanatan-saffron" />
          3D Motion Character
        </span>
        <span className="absolute right-2.5 top-2.5 rounded-full border border-sanatan-gold-2/50 bg-black/35 px-2.5 py-1 font-deva text-[0.6rem] font-semibold tracking-wide text-sanatan-gold-2/90 backdrop-blur-sm" aria-hidden>
          सनातनी बाबाजी
        </span>

        {/* status strip along the bottom edge */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-3 pb-1.5 pt-4">
          <span className="flex min-w-0 items-center gap-1.5 text-[0.62rem] font-medium tracking-wide text-sanatan-cream-2/90">
            {active ? (
              <span className="flex h-3 items-end gap-[2px]" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="babaji-eq w-[2px] origin-bottom rounded-full bg-sanatan-gold-2"
                    style={{ height: "100%", animationDelay: `${i * 0.16}s` }}
                  />
                ))}
              </span>
            ) : (
              <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full bg-sanatan-gold", mood === "thinking" ? "animate-pulse" : "pulse-dot")} aria-hidden />
            )}
            <span className="truncate">{MOOD_LABEL[mood]}</span>
          </span>
          <span className="flex shrink-0 items-center gap-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-sanatan-gold-2/90">
            <Mic className="h-3 w-3" aria-hidden />
            <span className="hidden sm:inline">Tap to talk · बोलकर पूछें</span>
            <span className="sm:hidden">Tap to talk</span>
          </span>
        </div>
      </div>
    </button>
  );
}
