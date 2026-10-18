"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpenText, Flame, Languages, MessagesSquare, Sparkles, WifiOff } from "lucide-react";
import { VerseCard } from "./verse-card";
import { OmSigil } from "./book-icons";
import { dailyVerseSanatan } from "@/lib/client/ask";
import { CORPUS, CORPUS_STATS } from "@/lib/corpus";
import type { CorpusEntry } from "@/lib/corpus/types";

interface HeroProps {
  onSuggestion: (s: string) => void;
  /** shown when a previous conversation exists and the user returned to the menu */
  onResume?: () => void;
  resumeCount?: number;
}

const STARTER_CHIPS = [
  "Gita 2.47 meaning",
  "What is Karma Yoga?",
  "Hanuman Chalisa",
  "The 12 Jyotirlingas",
  "Verse of the day",
  "Tell me about Shiva",
  "¿Qué es el dharma?",
  "What are the Vedas?",
];

export function Hero({ onSuggestion, onResume, resumeCount = 0 }: HeroProps) {
  const [verse, setVerse] = useState<CorpusEntry | null>(null);

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

  return (
    <div className="sanatan-fade mx-auto w-full max-w-3xl px-1 pb-2">
      {/* resume the conversation the user left via ✕ / back button —
          placed first so it is immediately visible when returning from a chat */}
      {onResume && resumeCount > 0 && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onResume}
          className="group mb-1 flex w-full items-center gap-3 rounded-xl border border-sanatan-gold-2/70 bg-sanatan-parchment px-3.5 py-2.5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-sanatan-saffron hover:bg-sanatan-gold/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sanatan-saffron active:translate-y-0 active:scale-[0.99]"
          aria-label={`Continue last conversation, ${resumeCount} messages`}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sanatan-gold-2/60 bg-sanatan-gold/15 text-sanatan-maroon">
            <MessagesSquare className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold text-sanatan-maroon">Continue last conversation</span>
            <span className="block text-[0.7rem] text-foreground/60">
              {resumeCount} message{resumeCount === 1 ? "" : "s"} · वापस चैट में जाएँ
            </span>
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 text-sanatan-saffron transition-transform group-hover:translate-x-0.5" aria-hidden />
        </motion.button>
      )}

      {/* masthead */}
      <div className="relative flex flex-col items-center pt-4 pb-6 text-center">
        <div className="pointer-events-none absolute -top-2 select-none font-deva text-[7rem] leading-none text-sanatan-saffron/10 sm:text-[9rem]" aria-hidden>
          ॐ
        </div>
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-sanatan-gold-2 bg-gradient-to-b from-sanatan-parchment to-sanatan-cream-2 shadow-[0_8px_30px_rgba(105,32,15,0.12)]"
        >
          <OmSigil className="text-5xl text-sanatan-maroon om-glow" />
        </motion.div>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-wide text-sanatan-maroon sm:text-[2.75rem]">
          SANATAN <span className="text-sanatan-saffron">HI</span>
        </h1>
        <p className="mt-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sanatan-gold sm:text-xs">
          [ HUMAN INTELLIGENCE ]
        </p>
        <p className="mt-1 font-deva text-lg text-sanatan-gold">॥ धर्मो रक्षति रक्षितः ॥</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/75">
          Bhagavad Gita · Ramayana & Ram Charit Manas · Mahabharata · Bhagavata & Shiva Purana · The Four Vedas · Upanishads · Yoga Sutras · Hanuman Chalisa —{" "}
          <span className="font-semibold text-sanatan-maroon">in Sanskrit, Hindi, English & Spanish</span>.
        </p>

        {/* stats */}
        <div className="mt-5 grid w-full grid-cols-3 gap-2 sm:gap-3">
          {[
            { icon: BookOpenText, label: "Scripture collections", value: String(CORPUS_STATS.books) },
            { icon: Sparkles, label: "Verses & stories", value: `${CORPUS.length}+` },
            { icon: Languages, label: "Languages", value: String(CORPUS_STATS.languages) },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex min-w-0 flex-col items-center rounded-xl border border-sanatan-gold-2/60 bg-sanatan-parchment px-2 py-2.5 sm:px-3"
            >
              <Icon className="h-4 w-4 text-sanatan-saffron" aria-hidden />
              <span className="mt-1 text-base font-semibold text-sanatan-maroon">{value}</span>
              <span className="text-center text-[0.6rem] leading-tight sm:text-[0.62rem] text-foreground/60">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1.5 rounded-full border border-sanatan-gold-2/60 bg-sanatan-gold/10 px-3 py-1 text-[0.68rem] text-sanatan-gold">
          <WifiOff className="h-3.5 w-3.5" aria-hidden />
          <span>Fully offline · No internet · Local scripture corpus</span>
        </div>
      </div>

      {/* verse of the day */}
      {verse && (
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-sanatan-maroon">
            <Flame className="h-4 w-4 text-sanatan-saffron flame-breathe" aria-hidden />
            <span className="font-deva">Verse of the Day</span>
            <span className="text-[0.68rem] font-normal text-foreground/55">आज का दिव्य श्लोक</span>
          </div>
          <VerseCard entry={verse} />
        </div>
      )}

      {/* starter chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {STARTER_CHIPS.map((c) => (
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
