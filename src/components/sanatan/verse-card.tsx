"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Languages, Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookIcon } from "./book-icons";
import type { CorpusEntry } from "@/lib/corpus/types";
import { BOOK_MAP } from "@/lib/corpus/books";

interface VerseCardProps {
  entry: CorpusEntry;
  index?: number;
  compact?: boolean;
}

/**
 * The signature trilingual scripture card:
 * Sanskrit (Devanagari) · transliteration · Hindi · English.
 */
export function VerseCard({ entry, index = 0, compact }: VerseCardProps) {
  const [copied, setCopied] = useState(false);
  const book = BOOK_MAP[entry.bookId];
  const [showAll, setShowAll] = useState(!compact);

  const copyText = () => {
    const lines = [
      `${book?.nameSa ?? book?.name ?? ""} — ${entry.sectionHi ?? entry.section ?? ""} ${entry.verse ? `(${entry.verse})` : ""}`,
      entry.sanskrit ?? entry.titleHi ?? "",
      entry.translit ?? "",
      `हिंदी: ${entry.hindi}`,
      `English: ${entry.english}`,
    ].filter(Boolean);
    void navigator.clipboard?.writeText(lines.join("\n\n")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.06, 0.25), duration: 0.35 }}
      className="relative overflow-hidden rounded-xl border border-sanatan-gold-2/70 bg-sanatan-parchment shadow-[0_1px_3px_rgba(105,32,15,0.06)]"
      aria-label={
        (entry.sectionHi ?? entry.section ?? entry.titleHi ?? entry.title ?? "श्लोक") +
        (entry.verse ? `, श्लोक ${entry.verse}` : "")
      }
    >
      {/* gold accent spine */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sanatan-saffron via-sanatan-gold to-sanatan-saffron-2" />

      <div className="pl-4 pr-3 py-3 sm:pl-5 sm:pr-4">
        {/* header */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
          <Badge
            variant="outline"
            className="gap-1.5 border-sanatan-gold/50 bg-sanatan-gold/10 text-sanatan-maroon-2 dark:text-sanatan-maroon hover:bg-sanatan-gold/15"
          >
            {book && <BookIcon icon={book.icon} className="h-3.5 w-3.5" />}
            <span className="font-deva text-[0.78rem]">{book?.nameHi}</span>
          </Badge>
          <span className="text-[0.72rem] sm:text-xs text-sanatan-maroon/80 dark:text-sanatan-maroon/85 truncate max-w-full">
            {entry.sectionHi ?? entry.section}
          </span>
          {entry.verse && (
            <Badge className="ml-auto shrink-0 bg-sanatan-maroon text-sanatan-cream-2 hover:bg-sanatan-maroon-2 font-deva">
              श्लोक {entry.verse}
            </Badge>
          )}
        </div>

        {/* sanskrit */}
        {entry.sanskrit && (
          <div className="mt-3">
            <p className="font-deva text-[1.05rem] sm:text-[1.18rem] leading-[2] text-sanatan-maroon-2 dark:text-sanatan-gold whitespace-pre-line">
              {entry.sanskrit}
            </p>
            {entry.translit && (
              <p className="mt-1.5 text-[0.8rem] italic text-sanatan-saffron-2 dark:text-sanatan-gold leading-relaxed">
                {entry.translit}
              </p>
            )}
          </div>
        )}

        {entry.sanskrit && <Separator className="my-3 bg-sanatan-gold-2/40" />}

        {/* translations */}
        <div className="space-y-2.5">
          {(showAll || true) && (
            <>
              <LangRow
                label="हिंदी"
                text={entry.hindi}
                className="text-sanatan-maroon/95 dark:text-sanatan-maroon/95"
                fontClass="font-deva"
              />
              <LangRow
                label="English"
                text={entry.english}
                className="text-foreground/85"
              />
            </>
          )}
        </div>

        {/* footer actions */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[0.68rem] text-sanatan-gold">
            <Sparkle className="h-3 w-3" aria-hidden />
            <span className="font-deva">श्री</span>
          </div>
          <div className="flex items-center gap-1.5">
            {compact && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 gap-1 text-sanatan-maroon-2 dark:text-sanatan-maroon text-xs"
                onClick={() => setShowAll((v) => !v)}
              >
                <Languages className="h-3.5 w-3.5" />
                {showAll ? "संक्षिप्त" : "पूरा"}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1 text-sanatan-maroon-2 dark:text-sanatan-maroon text-xs"
              onClick={copyText}
              aria-label="श्लोक कॉपी करें"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "कॉपी हुआ" : "कॉपी"}
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function LangRow({
  label,
  text,
  className,
  fontClass,
}: {
  label: string;
  text: string;
  className?: string;
  fontClass?: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-2.5">
      <span className="mt-0.5 shrink-0 rounded bg-sanatan-cream-2 dark:bg-sanatan-cream-2/60 px-1.5 py-px text-[0.62rem] font-semibold tracking-wide text-sanatan-gold uppercase">
        {label}
      </span>
      <p className={`text-[0.86rem] leading-relaxed ${className ?? ""} ${fontClass ?? ""}`}>
        {text}
      </p>
    </div>
  );
}
