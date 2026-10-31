"use client";

/**
 * SANATAN HI — Daily Shloka (SanatanDoc view, ported).
 *
 * The "prescription" card: a verse a day from the Gita & Upanishad
 * stream, with transliteration, meaning, practice guidance, copy and
 * "another verse" refresh.
 */

import { useMemo, useState } from "react";
import { Copy, Check, RefreshCw, ScrollText, Sunrise } from "lucide-react";
import { DAILY_VERSES } from "@/lib/sanatan-voice";
import { Button } from "@/components/ui/button";

function dayOfYear(d: Date): number {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d.getTime() - start.getTime()) / 86400000);
}

export function ShlokaView() {
  const [offset, setOffset] = useState(0);
  const [copied, setCopied] = useState(false);

  const today = useMemo(() => new Date(), []);
  const verse = useMemo(() => {
    const base = dayOfYear(today);
    return DAILY_VERSES[(base + offset) % DAILY_VERSES.length];
  }, [today, offset]);

  const dateStr = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const copy = async () => {
    const text = `${verse.sanskrit}\n${verse.translit}\n\nMeaning: ${verse.meaning}\n— ${verse.source}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="sanatan-fade">
      <div className="mb-4">
        <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
          <ScrollText className="h-4 w-4 text-sanatan-gold" />
          Daily Shloka
        </h2>
        <p className="text-xs text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
          A verse a day — prescribed for reflection and practice
        </p>
      </div>

      {/* prescription card */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-sanatan-gold-2/70 bg-gradient-to-br from-sanatan-gold/10 via-sanatan-saffron/[0.06] to-transparent shadow-[0_14px_44px_rgba(74,21,9,0.15)]">
        {/* watermark */}
        <span
          className="font-deva pointer-events-none absolute -right-4 -top-6 select-none text-[130px] leading-none text-sanatan-gold/10"
          aria-hidden
        >
          ॐ
        </span>

        <div className="relative p-5 sm:p-7">
          {/* rx header */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2">
                <Sunrise className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-sanatan-saffron-2 dark:text-sanatan-gold">
                  SANATAN HI · Prescription
                </div>
                <div className="text-[11px] text-sanatan-maroon/60 dark:text-sanatan-maroon/70">{dateStr}</div>
              </div>
            </div>
            <span className="font-deva rounded-full border border-sanatan-gold/60 bg-sanatan-gold/10 px-3 py-1 text-[11px] text-sanatan-saffron-2 dark:text-sanatan-gold">
              {offset === 0 ? "आज का श्लोक" : "Another drop"}
            </span>
          </div>

          {/* verse */}
          <div className="mt-6 text-center">
            <p className="font-deva mx-auto max-w-xl text-lg leading-relaxed text-sanatan-maroon-2 dark:text-sanatan-gold sm:text-xl">
              {verse.sanskrit}
            </p>
            <p className="mx-auto mt-3 max-w-md text-[12px] italic text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
              {verse.translit}
            </p>
          </div>

          <div className="mx-auto mt-5 max-w-lg rounded-xl border border-sanatan-gold-2/60 bg-sanatan-cream-2/70 px-4 py-3 text-center">
            <p className="text-[13px] leading-relaxed text-sanatan-maroon-2 dark:text-sanatan-maroon">
              “{verse.meaning}”
            </p>
            <p className="mt-1.5 text-[10px] text-sanatan-saffron-2/90 dark:text-sanatan-gold/90">— {verse.source}</p>
          </div>

          {/* practice */}
          <div className="mx-auto mt-4 max-w-lg">
            <div className="rounded-xl border border-sanatan-gold/50 bg-sanatan-gold/[0.08] px-4 py-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-sanatan-saffron-2 dark:text-sanatan-gold">
                Practise today
              </div>
              <p className="mt-1 text-[12px] leading-relaxed text-sanatan-maroon/85 dark:text-sanatan-maroon/85">
                {verse.practice}
              </p>
            </div>
          </div>

          {/* actions */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={copy}
              className="h-9 gap-1.5 border-sanatan-gold-2/60 bg-sanatan-parchment text-[11px] text-sanatan-maroon-2 hover:bg-sanatan-gold/15 dark:text-sanatan-maroon"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy verse"}
            </Button>
            <Button
              size="sm"
              onClick={() => setOffset((o) => o + 1)}
              className="h-9 gap-1.5 bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-[11px] font-semibold text-sanatan-gold-2 hover:from-sanatan-maroon-2 hover:to-sanatan-maroon"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Another verse
            </Button>
          </div>
        </div>
      </div>

      {/* note */}
      <p className="mt-4 text-center text-[10px] text-sanatan-maroon/50 dark:text-sanatan-maroon/60">
        One verse is prescribed per day; “Another verse” draws the next from the same stream of
        Gita and Upanishad wisdom.
      </p>
    </div>
  );
}
