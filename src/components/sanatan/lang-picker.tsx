"use client";

import { motion } from "framer-motion";
import { Check, Languages } from "lucide-react";
import { LANG_META, LANG_ORDER, type AppLang } from "@/lib/client/langs";

interface LangPickerProps {
  langs: AppLang[];
  onChange: (langs: AppLang[]) => void;
  /** compact chips (header popover) vs the full homepage console */
  compact?: boolean;
}

/**
 * Futuristic tick-toggle language console.
 * हिंदी + संस्कृत default ON · English / Español opt-in · one or more allowed.
 * The last active language cannot be unticked.
 */
export function LangPicker({ langs, onChange, compact }: LangPickerProps) {
  const toggle = (l: AppLang) => {
    if (langs.includes(l)) {
      if (langs.length === 1) return; /* never zero languages */
      onChange(langs.filter((x) => x !== l));
    } else {
      onChange(LANG_ORDER.filter((x) => langs.includes(x) || x === l));
    }
  };

  return (
    <div
      role="group"
      aria-label="Answer languages — choose one or more"
      className={
        compact
          ? "flex flex-wrap items-center gap-1.5"
          : /* phones: a tidy 2×2 grid (avoids the awkward 2+1 wrap) · sm+: centered row */
            "grid grid-cols-2 items-stretch gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-2.5"
      }
    >
      {LANG_ORDER.map((l) => {
        const meta = LANG_META[l];
        const active = langs.includes(l);
        return (
          <motion.button
            key={l}
            type="button"
            whileTap={{ scale: 0.94 }}
            onClick={() => toggle(l)}
            aria-pressed={active}
            aria-label={`${meta.label} — ${active ? "on" : "off"}`}
            className={`group relative flex items-center gap-2 rounded-full border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sanatan-saffron ${
              compact ? "h-9 px-3 text-[0.72rem]" : "h-11 w-full justify-center px-4 text-[0.82rem] sm:h-12 sm:w-auto sm:justify-start sm:px-5 sm:text-sm"
            } ${
              active
                ? "border-sanatan-gold bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2 shadow-[0_4px_18px_rgba(105,32,15,0.35)]"
                : "border-sanatan-gold-2/70 bg-sanatan-parchment text-sanatan-maroon/60 hover:border-sanatan-saffron/80 hover:text-sanatan-maroon"
            }`}
          >
            {/* tick box */}
            <span
              aria-hidden
              className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
                active ? "border-sanatan-gold-2 bg-sanatan-gold text-sanatan-maroon-2" : "border-sanatan-gold-2/70 bg-transparent"
              }`}
            >
              {active && <Check className="h-3 w-3" strokeWidth={3.2} />}
            </span>
            <span className={`font-semibold tracking-wide ${l === "hi" || l === "sa" ? "font-deva" : ""}`}>{meta.native}</span>
            <span className={`hidden text-[0.6rem] uppercase tracking-[0.14em] sm:inline ${active ? "text-sanatan-gold-2/70" : "text-sanatan-gold/70"}`}>
              {meta.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

/** compact summary pill for the header — shorts of the active languages */
export function LangPillSummary({ langs }: { langs: AppLang[] }) {
  return (
    <span className="flex items-center gap-1.5">
      <Languages className="h-3.5 w-3.5 text-sanatan-gold-2" aria-hidden />
      <span className="max-w-[7.5rem] truncate text-xs font-semibold text-sanatan-cream-2">
        {LANG_ORDER.filter((l) => langs.includes(l))
          .map((l) => LANG_META[l].short)
          .join(" · ")}
      </span>
    </span>
  );
}
