"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Cpu, Flame, MessagesSquare, Mic, Sparkles, Volume2, VolumeX } from "lucide-react";
import { VerseCard } from "./verse-card";
import { OmSigil } from "./book-icons";
import { BABAJI_FULL, BabajiAvatar } from "./babaji-avatar";
import { LangPicker } from "./lang-picker";
import { NeuralMantraField } from "./neural-field";
import { MantraMarquee } from "./mantra-marquee";
import { ScriptureOrbit } from "./scripture-orbit";
import { ScriptureIndex } from "./scripture-index";
import { dailyVerseSanatan } from "@/lib/client/ask";
import { starterChips, type AppLang } from "@/lib/client/langs";
import type { CorpusEntry } from "@/lib/corpus/types";

interface HeroProps {
  onSuggestion: (s: string) => void;
  /** shown when a previous conversation exists and the user returned to the menu */
  onResume?: () => void;
  resumeCount?: number;
  /** opens the voice assistant (triggered by the ॐ sigil / SANATAN HI title) */
  onOpenVoice?: () => void;
  /** active answer languages (multi-select console) */
  langs: AppLang[];
  onLangsChange: (langs: AppLang[]) => void;
  /** SANATANI BABAJI — spoken answers master toggle */
  voiceOn?: boolean;
  onToggleVoice?: () => void;
  /** hear Babaji introduce himself in his deep, calm voice */
  onHearBabaji?: () => void;
  /** Babaji is narrating right now (anywhere in the app) */
  speaking?: boolean;
  voiceLoading?: boolean;
}

/** bilingual corpus description — one line per active language */
function corpusLines(langs: AppLang[]): { glyph: string; text: string }[] {
  const lines: Partial<Record<AppLang, { glyph: string; text: string }>> = {
    hi: {
      glyph: "🪷",
      text: "भगवद्गीता · रामायण · महाभारत · वेद · उपनिषद् — हिंदी में उत्तर पाएँ",
    },
    sa: {
      glyph: "ॐ",
      text: "श्रीमद्भगवद्गीता · रामायणम् · महाभारतम् · वेदाः — संस्कृते उत्तराणि",
    },
    en: {
      glyph: "✦",
      text: "Bhagavad Gita · Ramayana · Mahabharata · Vedas · Upanishads — answered in English",
    },
    es: {
      glyph: "✧",
      text: "Bhagavad Gita · Ramayana · Mahabharata · Vedas — respuestas en español",
    },
  };
  return (["hi", "sa", "en", "es"] as AppLang[]).filter((l) => langs.includes(l)).map((l) => lines[l]!);
}

export function Hero({ onSuggestion, onResume, resumeCount = 0, onOpenVoice, langs, onLangsChange, voiceOn = true, onToggleVoice, onHearBabaji, speaking, voiceLoading }: HeroProps) {
  const [verse, setVerse] = useState<CorpusEntry | null>(null);
  /* users who prefer reduced motion get a still frame instead of an autoplaying video */
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    let live = true;
    dailyVerseSanatan()
      .then((v) => {
        if (live && v) setVerse(v);
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  /* perf: stop decoding the hero film once it scrolls out of view — an
     autoplaying 3 MB loop otherwise keeps the video pipeline warm at every
     scroll position for nothing. */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!reducedMotion && v.paused) void v.play().catch(() => {});
        } else if (!v.paused) {
          v.pause();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reducedMotion]);

  const chips = starterChips(langs);

  return (
    <div className="sanatan-fade mx-auto w-full max-w-3xl px-1 pb-2">
      {/* ── the user's "sanatan ai" film — the 4D neural cortex ── */}
      <motion.figure
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-0"
      >
        <div className="hud-panel overflow-hidden rounded-xl border-2 border-sanatan-gold-2/70 bg-sanatan-maroon-2 shadow-[0_14px_44px_rgba(74,21,9,0.28)]">
          <video
            ref={videoRef}
            className="block aspect-[1132/696] w-full"
            autoPlay={!reducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
            poster="videos/sanatan-hero-poster.jpg"
            aria-label="SANATAN HI — 4D Neural Cortex agentic AI animation"
          >
            <source src="videos/sanatan-hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* neural-net caption strip — FOUNDER credit below the neural cortex */}
        <figcaption className="scan-sweep flex flex-wrap items-center justify-between gap-x-3 gap-y-0.5 rounded-b-xl border-2 border-t-0 border-sanatan-gold-2/70 bg-gradient-to-r from-sanatan-maroon-2 via-sanatan-maroon to-sanatan-maroon-2 px-3.5 py-2">
          <span className="flex min-w-0 items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-sanatan-gold-2/90">
            <Cpu className="h-3.5 w-3.5 shrink-0 text-sanatan-gold" aria-hidden />
            <span className="truncate">4D Neural Cortex · Agentic AI</span>
            <span className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-sanatan-gold" aria-hidden />
          </span>
          <span className="flex items-center gap-1.5 text-[0.66rem] text-sanatan-cream-2/85">
            <span className="uppercase tracking-[0.14em] text-sanatan-gold-2/70">Founder</span>
            <span className="font-display text-[0.78rem] font-semibold tracking-wide text-sanatan-gold-2">DR. KARTIK YADAV</span>
          </span>
        </figcaption>
      </motion.figure>

      {/* ── mantra marquee — infinite sacred ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3"
      >
        <MantraMarquee />
      </motion.div>

      {/* ── LANGUAGE MATRIX console — हिंदी + संस्कृत default, en/es opt-in ── */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        aria-label="Language console"
        className="hud-panel relative mt-4 overflow-hidden rounded-xl border-2 border-sanatan-gold-2/70 bg-sanatan-parchment shadow-[0_6px_24px_rgba(105,32,15,0.10)]"
      >
        <div className="futuristic-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative px-3.5 py-3 sm:px-5 sm:py-4">
          <div className="mb-2.5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-center">
            <span className="flex items-center gap-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-sanatan-gold">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sanatan-saffron" aria-hidden />
              Language Matrix
            </span>
            <span className="font-deva text-[0.72rem] font-semibold text-sanatan-maroon">भाषा कंसोल</span>
          </div>
          <LangPicker langs={langs} onChange={onLangsChange} />
          <p className="mt-2.5 text-center text-[0.62rem] leading-relaxed text-foreground/55">
            एक या अधिक भाषा टिक करें · उत्तर हर चुनी हुई भाषा में मिलेंगे
            <span className="mx-1.5 text-sanatan-gold/60" aria-hidden>◈</span>
            <span className="inline-flex items-center gap-1">
              <Check className="h-3 w-3 text-sanatan-saffron" aria-hidden />
              Tick one or more — answers arrive in every selected language
            </span>
          </p>
        </div>
      </motion.section>

      {/* resume the conversation the user left via ✕ / back button —
          placed first so it is immediately visible when returning from a chat */}
      {onResume && resumeCount > 0 && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onResume}
          className="group mt-3 flex w-full items-center gap-3 rounded-xl border border-sanatan-gold-2/70 bg-sanatan-parchment px-3.5 py-2.5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-sanatan-saffron hover:bg-sanatan-gold/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sanatan-saffron active:translate-y-0 active:scale-[0.99]"
          aria-label={`Continue last conversation, ${resumeCount} messages`}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sanatan-gold-2/60 bg-sanatan-gold/15 text-sanatan-maroon">
            <MessagesSquare className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold text-sanatan-maroon">Continue last conversation</span>
            <span className="block truncate text-[0.7rem] text-foreground/60">
              {resumeCount} message{resumeCount === 1 ? "" : "s"} · पिछली बातचीत जारी रखें
            </span>
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 text-sanatan-saffron transition-transform group-hover:translate-x-0.5" aria-hidden />
        </motion.button>
      )}

      {/* ── masthead over the neural mantra field ── */}
      <div className="relative mt-4 flex flex-col items-center overflow-hidden rounded-2xl border border-sanatan-gold-2/50 bg-gradient-to-b from-sanatan-parchment/60 to-sanatan-cream px-3 pb-6 pt-5 text-center sm:pt-6">
        <NeuralMantraField className="pointer-events-none absolute inset-0 h-full w-full" />

        {/* drifting mantra glyphs (pure decoration) */}
        <span className="glyph-drift pointer-events-none absolute left-[8%] top-8 select-none font-deva text-2xl text-sanatan-saffron/15 sm:text-3xl" aria-hidden>ॐ</span>
        <span className="glyph-drift pointer-events-none absolute right-[9%] top-16 select-none font-deva text-xl text-sanatan-gold/20 sm:text-2xl" style={{ animationDelay: "-2.5s" }} aria-hidden>धर्म</span>
        <span className="glyph-drift pointer-events-none absolute bottom-10 left-[16%] select-none font-deva text-lg text-sanatan-maroon/10 sm:text-xl" style={{ animationDelay: "-4s" }} aria-hidden>राम</span>

        <div className="pointer-events-none absolute -top-2 select-none font-deva text-[7rem] leading-none text-sanatan-saffron/10 sm:text-[9rem]" aria-hidden>
          ॐ
        </div>

        <motion.button
          type="button"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={onOpenVoice}
          aria-label="Open the SANATAN HI voice assistant — SANATANI BABAJI"
          title="Tap to talk — SANATANI BABAJI, voice assistant"
          className="group relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-sanatan-gold-2 bg-gradient-to-b from-sanatan-parchment to-sanatan-cream-2 shadow-[0_8px_30px_rgba(105,32,15,0.12)] outline-none transition-all hover:border-sanatan-saffron hover:shadow-[0_10px_40px_rgba(227,130,30,0.25)] focus-visible:ring-2 focus-visible:ring-sanatan-saffron active:scale-95"
        >
          {/* SANATANI BABAJI — the face of the voice assistant */}
          <BabajiAvatar
            size={72}
            mood={speaking ? "speaking" : "idle"}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-sanatan-gold-2 bg-sanatan-maroon shadow-sm">
            <Mic className="h-3.5 w-3.5 text-sanatan-gold-2" aria-hidden />
          </span>
        </motion.button>
        <button type="button" onClick={onOpenVoice} className="relative mt-4 py-1 outline-none" aria-label="Open the SANATAN HI voice assistant" title="Tap to talk — voice assistant">
          <h1 className="font-display text-4xl font-semibold tracking-wide text-sanatan-maroon transition-colors hover:text-sanatan-saffron sm:text-[2.75rem]">
            SANATAN <span className="text-sanatan-saffron">HI</span>
          </h1>
        </button>
        <p className="text-shimmer relative mt-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] sm:text-xs">
          [ Human Intelligence ]
        </p>
        <button
          type="button"
          onClick={onOpenVoice}
          className="relative mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-sanatan-gold-2/60 bg-sanatan-gold/10 px-3.5 py-2 text-[0.7rem] font-medium text-sanatan-gold backdrop-blur-sm transition-all hover:border-sanatan-saffron hover:bg-sanatan-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sanatan-saffron active:scale-95 sm:px-3 sm:py-1.5"
          aria-label="Open the voice assistant and ask by voice"
        >
          <Mic className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {/* phone label kept short so the pill never wraps · full list on sm+ */}
          <span className="sm:hidden">Tap to talk · बोलकर पूछें</span>
          <span className="hidden sm:inline">Tap to talk · बोलकर पूछें · वाचा · Hindi · English · Español</span>
        </button>
        <p className="relative mt-1 font-deva text-lg text-sanatan-gold">॥ धर्मो रक्षति रक्षितः ॥</p>

        {/* ── SANATANI BABAJI — the voice-assistant persona card ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="babaji-rise relative mt-4 flex w-full items-center gap-3 rounded-xl border-2 border-sanatan-gold-2/70 bg-sanatan-parchment p-2.5 text-left shadow-[0_6px_24px_rgba(105,32,15,0.10)]"
        >
          <div className="relative h-[4.5rem] w-16 shrink-0 overflow-hidden rounded-lg border border-sanatan-gold-2/60 bg-sanatan-cream-2 shadow-[inset_0_0_12px_rgba(105,32,15,0.08)]">
            <img
              src={BABAJI_FULL}
              alt="SANATANI BABAJI — सनातनी बाबाजी, your voice assistant"
              className="h-full w-full object-cover object-[50%_18%]"
              draggable={false}
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display text-[0.86rem] font-semibold tracking-wide text-sanatan-maroon">
              SANATANI BABAJI <span className="font-deva text-sanatan-gold">सनातनी बाबाजी</span>
            </p>
            <p className="mt-0.5 text-[0.68rem] leading-snug text-foreground/65">
              Every answer is spoken aloud in his deep, calm Indian voice — <span className="font-deva">गहरी, शांत भारतीय वाणी · हिंदी में।</span>
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-1.5">
            {onHearBabaji && (
              <button
                type="button"
                onClick={onHearBabaji}
                className="inline-flex h-9 items-center gap-1.5 rounded-full bg-gradient-to-br from-sanatan-saffron to-sanatan-saffron-2 px-3.5 text-[0.7rem] font-semibold text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
                aria-label="Hear Sanatani Babaji speak his introduction"
              >
                {voiceLoading ? (
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden />
                ) : (
                  <Volume2 className="h-3.5 w-3.5" aria-hidden />
                )}
                {voiceLoading ? "…" : "Hear Babaji"}
              </button>
            )}
            {onToggleVoice && (
              <button
                type="button"
                onClick={onToggleVoice}
                aria-pressed={voiceOn}
                aria-label={voiceOn ? "Babaji's spoken answers are on. Turn off." : "Babaji's spoken answers are off. Turn on."}
                className={
                  "inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-[0.66rem] font-medium transition-all active:scale-95 " +
                  (voiceOn
                    ? "border-sanatan-saffron/70 bg-sanatan-gold/15 text-sanatan-maroon"
                    : "border-sanatan-gold-2/60 bg-transparent text-foreground/55 hover:bg-sanatan-gold/10")
                }
              >
                {voiceOn ? <Volume2 className="h-3.5 w-3.5" aria-hidden /> : <VolumeX className="h-3.5 w-3.5" aria-hidden />}
                {voiceOn ? "Voice on" : "Muted"}
              </button>
            )}
          </div>
        </motion.div>

        {/* corpus description — one line per active language */}
        <div className="relative mt-3 max-w-xl space-y-0.5">
          {corpusLines(langs).map((l) => (
            <p key={l.glyph + l.text} className="text-[0.8rem] leading-relaxed text-foreground/75">
              <span className="mr-1.5 text-sanatan-saffron" aria-hidden>{l.glyph}</span>
              {l.text}
            </p>
          ))}
        </div>

      </div>

      {/* ── verse of the day ── */}
      {verse && (
        <div className="mb-5 mt-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-sanatan-maroon">
            <Flame className="h-4 w-4 text-sanatan-saffron flame-breathe" aria-hidden />
            <span className="font-deva">Verse of the Day</span>
            <span className="text-[0.68rem] font-normal text-foreground/55">आज का दिव्य श्लोक</span>
          </div>
          <VerseCard entry={verse} />
        </div>
      )}

      {/* ── epic vision gallery (Armonian-inspired cosmic visuals) ── */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.12 }}
        aria-label="Epic vision gallery"
        className="mb-5"
      >
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-sanatan-maroon">
          <Sparkles className="h-4 w-4 text-sanatan-saffron" aria-hidden />
          <span className="font-display tracking-wide">Epic Vision</span>
          <span className="font-deva text-[0.72rem] font-normal text-foreground/55">दिव्य दृष्टि · मंत्र-शक्ति</span>
        </div>
        <div className="group relative mb-2 overflow-hidden rounded-xl border-2 border-sanatan-gold-2/70 shadow-[0_10px_36px_rgba(74,21,9,0.22)]">
          <img
            src="images/cosmic-temple.png"
            alt="Epic futuristic temple gate glowing with golden mantra energy under a cosmic sky"
            loading="lazy"
            className="palette-warm block aspect-[2/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sanatan-maroon-2/70 via-transparent to-transparent" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 px-3.5 py-2">
            <span className="font-deva text-[0.78rem] font-semibold text-sanatan-gold-2">॥ मंत्र-शक्ति · Mantra Engine ॥</span>
            <span className="hidden text-[0.58rem] uppercase tracking-[0.2em] text-sanatan-cream-2/80 sm:inline">Cosmic Dharma</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="group relative overflow-hidden rounded-xl border-2 border-sanatan-gold-2/70 shadow-[0_8px_28px_rgba(74,21,9,0.18)]">
            <img
              src="images/neural-om.png"
              alt="Golden Om symbol formed by a glowing neural network of light circuits"
              loading="lazy"
              className="block aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sanatan-maroon-2/60 to-transparent" aria-hidden />
            <span className="absolute bottom-0 left-0 right-0 px-2.5 py-1.5 text-center text-[0.66rem] font-semibold tracking-wide text-sanatan-gold-2">
              Neural ॐ · न्यूरल ओम्
            </span>
          </div>
          <div className="group relative overflow-hidden rounded-xl border-2 border-sanatan-gold-2/70 shadow-[0_8px_28px_rgba(74,21,9,0.18)]">
            <img
              src="images/divine-core.png"
              alt="Cosmic divine energy core with a glowing golden lotus and circuit patterns"
              loading="lazy"
              className="block aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sanatan-maroon-2/60 to-transparent" aria-hidden />
            <span className="absolute bottom-0 left-0 right-0 px-2.5 py-1.5 text-center text-[0.66rem] font-semibold tracking-wide text-sanatan-gold-2">
              Divine Core · दिव्य-केंद्र
            </span>
          </div>
        </div>
      </motion.section>

      {/* ── scripture orbit — 3D rotating ring of the collections ── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        aria-label="Scripture orbit ring"
      >
        <ScriptureOrbit onQuery={onSuggestion} />
      </motion.section>

      {/* ── scripture index — numbered reveal list ── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        aria-label="Scripture index list"
      >
        <ScriptureIndex onQuery={onSuggestion} />
      </motion.section>

      {/* ── starter chips (localized to the active languages) ── */}
      <div className="flex flex-wrap justify-center gap-2">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => onSuggestion(c)}
            className="rounded-full border border-sanatan-gold-2/70 bg-sanatan-parchment px-3.5 py-2 text-[0.78rem] text-sanatan-maroon-2 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sanatan-saffron hover:bg-sanatan-gold/15 active:translate-y-0 active:scale-95 dark:text-sanatan-maroon"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
