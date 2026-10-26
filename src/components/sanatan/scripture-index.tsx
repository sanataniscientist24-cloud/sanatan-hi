"use client";

/**
 * SANATAN HI — Scripture Index.
 *
 * A numbered index of the twelve scripture collections. Each row reveals
 * with a staggered slide-up as it scrolls into view (whileInView), lifts and
 * slides its arrow on hover, and sends a question to the corpus on click.
 * Doubles as the accessible list alternative to the Scripture Orbit ring.
 */

import { motion } from "framer-motion";
import { ArrowRight, ListOrdered } from "lucide-react";
import { BookIcon } from "./book-icons";
import { CORPUS } from "@/lib/corpus";
import { BOOKS } from "@/lib/corpus/books";

const INDEX_BOOK_IDS = [
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

interface ScriptureIndexProps {
  onQuery: (q: string) => void;
}

export function ScriptureIndex({ onQuery }: ScriptureIndexProps) {
  const books = INDEX_BOOK_IDS.map((id) => BOOKS.find((b) => b.id === id))
    .filter((b): b is NonNullable<typeof b> => Boolean(b))
    .map((b) => ({ ...b, count: CORPUS.filter((e) => e.bookId === b.id).length }));

  return (
    <section aria-label="Scripture index" className="mb-5">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-sanatan-maroon">
        <ListOrdered className="h-4 w-4 text-sanatan-saffron" aria-hidden />
        <span className="font-display tracking-wide">Scripture Index</span>
        <span className="font-deva text-[0.72rem] font-normal text-foreground/55">ग्रंथ सूची · सभी संग्रह</span>
      </div>

      <div className="overflow-hidden rounded-xl border border-sanatan-gold-2/60 bg-sanatan-parchment/80 shadow-[0_6px_24px_rgba(105,32,15,0.10)]">
        {books.map((b, i) => (
          <motion.button
            key={b.id}
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.05 }}
            onClick={() => onQuery(`Tell me about ${b.name}`)}
            aria-label={`${b.name} — ${b.nameHi}, by ${b.author}, ${b.count} entries. Ask about ${b.name}`}
            className={`group flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition-colors hover:bg-sanatan-gold/12 focus-visible:bg-sanatan-gold/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sanatan-saffron active:bg-sanatan-gold/20 ${
              i > 0 ? "border-t border-sanatan-gold-2/40" : ""
            }`}
          >
            <span className="w-6 shrink-0 font-display text-[0.8rem] font-semibold tabular-nums text-sanatan-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-sanatan-gold-2/60 bg-sanatan-cream-2">
              <BookIcon icon={b.icon} className="h-4 w-4 text-sanatan-saffron" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[0.84rem] font-semibold leading-snug text-sanatan-maroon">
                {b.name}
                <span className="ml-2 font-deva text-[0.74rem] font-normal text-foreground/60">{b.nameHi}</span>
              </span>
              <span className="block truncate text-[0.66rem] text-foreground/55">
                {b.author} · {b.count} उल्लेख
              </span>
            </span>
            <span className="shrink-0 rounded-full border border-sanatan-gold-2/60 bg-sanatan-gold/10 px-2 py-0.5 text-[0.6rem] font-medium tabular-nums text-sanatan-gold">
              {b.count}
            </span>
            <ArrowRight
              className="h-4 w-4 shrink-0 text-sanatan-saffron opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100"
              aria-hidden
            />
          </motion.button>
        ))}
      </div>
    </section>
  );
}
