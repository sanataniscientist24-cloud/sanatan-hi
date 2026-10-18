"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpenText, Flame, Languages, Sparkles, WifiOff } from "lucide-react";
import { VerseCard } from "./verse-card";
import { OmSigil } from "./book-icons";
import type { CorpusEntry } from "@/lib/corpus/types";

interface HeroProps {
  onSuggestion: (s: string) => void;
}

const STARTER_CHIPS = [
  "गीता 2.47 का अर्थ",
  "What is Karma Yoga?",
  "हनुमान चालीसा सुनाओ",
  "12 ज्योतिर्लिंग",
  "आज का श्लोक",
  "शिव के बारे में बताओ",
  "What happens after death?",
  "वेद क्या हैं?",
];

export function Hero({ onSuggestion }: HeroProps) {
  const [verse, setVerse] = useState<CorpusEntry | null>(null);

  useEffect(() => {
    let live = true;
    fetch("/api/daily")
      .then((r) => r.json())
      .then((d) => {
        if (live && d?.ok) setVerse(d.verse as CorpusEntry);
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="sanatan-fade mx-auto w-full max-w-3xl px-1 pb-2">
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
          भगवद्गीता · वाल्मीकि रामायण · महाभारत · भागवत व शिव पुराण · चारों वेद · उपनिषद् · हनुमान चालीसा —{" "}
          <span className="font-semibold text-sanatan-maroon">संस्कृत, हिंदी और English</span> में।
        </p>

        {/* stats */}
        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { icon: BookOpenText, label: "ग्रंथ-संग्रह", value: "11" },
            { icon: Sparkles, label: "श्लोक एवं कथाएँ", value: "150+" },
            { icon: Languages, label: "भाषाएँ", value: "3" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex min-w-[6.2rem] flex-col items-center rounded-xl border border-sanatan-gold-2/60 bg-sanatan-parchment px-3 py-2.5"
            >
              <Icon className="h-4 w-4 text-sanatan-saffron" aria-hidden />
              <span className="mt-1 text-base font-semibold text-sanatan-maroon">{value}</span>
              <span className="text-[0.62rem] text-foreground/60">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1.5 rounded-full border border-sanatan-gold-2/60 bg-sanatan-gold/10 px-3 py-1 text-[0.68rem] text-sanatan-gold">
          <WifiOff className="h-3.5 w-3.5" aria-hidden />
          <span>पूर्णतः ऑफ़लाइन · No internet · स्थानीय ग्रंथ-कोश</span>
        </div>
      </div>

      {/* verse of the day */}
      {verse && (
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-sanatan-maroon">
            <Flame className="h-4 w-4 text-sanatan-saffron flame-breathe" aria-hidden />
            <span className="font-deva">आज का दिव्य श्लोक</span>
            <span className="text-[0.68rem] font-normal text-foreground/55">Verse of the Day</span>
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
            className="rounded-full border border-sanatan-gold-2/70 bg-sanatan-parchment px-3.5 py-1.5 text-[0.78rem] text-sanatan-maroon-2 dark:text-sanatan-maroon shadow-sm transition-all hover:-translate-y-0.5 hover:border-sanatan-saffron hover:bg-sanatan-gold/15"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
