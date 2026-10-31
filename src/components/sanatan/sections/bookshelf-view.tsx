"use client";

/**
 * SANATAN HI — Bookshelf (SanatanDoc view, ported).
 *
 * The signature library: six shelves (Shruti · Smriti · Itihasa ·
 * Purana · Bhakti · Kavya) of book spines on wooden boards, with
 * search, shelf filters and a rich book detail dialog. Spine tones
 * come from the shelf color data itself — covers keep their look,
 * like real volumes on a shelf.
 */

import { useMemo, useState } from "react";
import { Search, BookOpen, X, MessageCircleQuestion } from "lucide-react";
import { SHELVES, BOOKS, type SanatanBook, type ShelfId } from "@/lib/sanatan-data";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

function darken(hex: string, amount = 0.35): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.round(((n >> 16) & 255) * (1 - amount)));
  const g = Math.max(0, Math.round(((n >> 8) & 255) * (1 - amount)));
  const b = Math.max(0, Math.round((n & 255) * (1 - amount)));
  return `rgb(${r}, ${g}, ${b})`;
}

function BookSpine({
  book,
  colors,
  onOpen,
}: {
  book: SanatanBook;
  colors: [string, string, string];
  onOpen: () => void;
}) {
  const base = colors[(book.tone ?? 0) % 3];
  const long = book.title.length > 21;
  const veryLong = book.title.length > 26;
  return (
    <button
      onClick={onOpen}
      title={`${book.title} — ${book.author}`}
      className="group relative h-44 w-10 shrink-0 overflow-hidden rounded-t-md rounded-b-sm border border-black/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_24px_-8px_rgba(74,21,9,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sanatan-saffron sm:h-52 sm:w-11"
      style={{
        background: `linear-gradient(155deg, ${base} 0%, ${darken(base, 0.3)} 55%, ${darken(base, 0.5)} 100%)`,
      }}
    >
      {/* spine bands */}
      <span className="absolute inset-x-0 top-0 h-1.5 bg-black/25" aria-hidden />
      <span className="absolute inset-x-0 top-1.5 h-0.5 bg-white/20" aria-hidden />
      <span className="absolute inset-x-0 bottom-0 h-1.5 bg-black/25" aria-hidden />
      {/* hover sheen */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      {/* vertical title */}
      <span
        className={`spine-text absolute inset-0 flex items-center justify-center overflow-hidden p-1 pt-3 font-semibold leading-none tracking-wide text-white/95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] ${
          veryLong ? "text-[8px]" : long ? "text-[9px]" : "text-[10px]"
        }`}
      >
        <span className="block max-h-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_85%,transparent)]">
          {book.title}
        </span>
      </span>
    </button>
  );
}

export function BookshelfView({ onAsk }: { onAsk: (question: string) => void }) {
  const [query, setQuery] = useState("");
  const [shelfFilter, setShelfFilter] = useState<ShelfId | "all">("all");
  const [activeBook, setActiveBook] = useState<SanatanBook | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BOOKS.filter((b) => {
      if (shelfFilter !== "all" && b.shelfId !== shelfFilter) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.sanskrit.includes(query.trim()) ||
        b.author.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q)
      );
    });
  }, [query, shelfFilter]);

  return (
    <div className="sanatan-fade">
      {/* heading */}
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
            <BookOpen className="h-4 w-4 text-sanatan-gold" />
            The Sanatan Bookshelves
          </h2>
          <p className="text-xs text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
            {BOOKS.length} volumes across six shelves — tap a spine to open
          </p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-sanatan-maroon/50" aria-hidden />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the library…"
            aria-label="Search the library"
            className="h-9 rounded-lg border-sanatan-gold-2/70 bg-sanatan-parchment pl-8 text-[12px] text-sanatan-maroon-2 placeholder:text-sanatan-maroon/40 focus-visible:ring-sanatan-gold/50 dark:text-sanatan-maroon"
          />
        </div>
      </div>

      {/* shelf filter chips */}
      <div className="slim-scroll -mx-1 mb-5 flex gap-1.5 overflow-x-auto px-1 pb-1">
        <button
          onClick={() => setShelfFilter("all")}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
            shelfFilter === "all"
              ? "border-sanatan-saffron/70 bg-sanatan-gold/20 text-sanatan-maroon-2 dark:text-sanatan-maroon"
              : "border-sanatan-gold-2/60 bg-sanatan-parchment text-sanatan-maroon/65 hover:border-sanatan-saffron/50 hover:text-sanatan-maroon-2 dark:text-sanatan-maroon/75"
          }`}
        >
          All shelves
        </button>
        {SHELVES.map((s) => (
          <button
            key={s.id}
            onClick={() => setShelfFilter(s.id)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
              shelfFilter === s.id
                ? "border-sanatan-saffron/70 bg-sanatan-gold/20 text-sanatan-maroon-2 dark:text-sanatan-maroon"
                : "border-sanatan-gold-2/60 bg-sanatan-parchment text-sanatan-maroon/65 hover:border-sanatan-saffron/50 hover:text-sanatan-maroon-2 dark:text-sanatan-maroon/75"
            }`}
          >
            <span className="font-deva mr-1">{s.sanskrit}</span>
            {s.name}
          </button>
        ))}
      </div>

      {/* shelves */}
      {SHELVES.map((shelf) => {
        const books = filtered.filter((b) => b.shelfId === shelf.id);
        if (books.length === 0) return null;
        return (
          <section key={shelf.id} className="mb-8" aria-label={shelf.name}>
            <div className="mb-2.5 flex items-baseline gap-2.5">
              <span className="font-deva text-base text-sanatan-saffron-2 dark:text-sanatan-gold">{shelf.sanskrit}</span>
              <h3 className="text-sm font-bold tracking-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
                {shelf.name}
              </h3>
              <span className="hidden text-[11px] italic text-sanatan-maroon/55 sm:inline dark:text-sanatan-maroon/65">
                — {shelf.subtitle}
              </span>
              <Badge
                variant="outline"
                className="ml-auto shrink-0 border-sanatan-gold-2/60 bg-sanatan-gold/10 text-[10px] font-normal text-sanatan-maroon/70 dark:text-sanatan-maroon/80"
              >
                {books.length}
              </Badge>
            </div>

            <div className="relative">
              <div className="slim-scroll flex items-end gap-1.5 overflow-x-auto pb-2 pt-2">
                {books.map((b) => (
                  <BookSpine
                    key={b.id}
                    book={b}
                    colors={shelf.colors}
                    onOpen={() => setActiveBook(b)}
                  />
                ))}
              </div>
              {/* wooden shelf board */}
              <div className="h-2.5 w-full rounded-b-sm bg-gradient-to-b from-amber-900 via-[#3a2312] to-amber-950 shadow-[0_6px_14px_-4px_rgba(74,21,9,0.55)]" aria-hidden />
            </div>
          </section>
        );
      })}

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-sanatan-gold-2/60 py-16 text-center">
          <span className="font-deva text-3xl text-sanatan-gold/50" aria-hidden>॥</span>
          <p className="mt-2 text-sm text-sanatan-maroon/70 dark:text-sanatan-maroon/80">
            No volumes found for “{query}”
          </p>
          <Button
            size="sm"
            variant="outline"
            className="mt-3 h-8 border-sanatan-gold-2/60 bg-sanatan-parchment text-[11px] text-sanatan-maroon-2 hover:bg-sanatan-gold/15 dark:text-sanatan-maroon"
            onClick={() => {
              setQuery("");
              setShelfFilter("all");
            }}
          >
            Clear search
          </Button>
        </div>
      )}

      {/* book dialog */}
      <Dialog open={!!activeBook} onOpenChange={(o) => !o && setActiveBook(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-h-[85vh] gap-0 overflow-hidden rounded-2xl border-2 border-sanatan-gold-2/70 bg-sanatan-parchment p-0 shadow-[0_24px_80px_rgba(74,21,9,0.4)] sm:max-w-md"
        >
          {activeBook && (
            <BookDetail book={activeBook} onClose={() => setActiveBook(null)} onAsk={onAsk} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function BookDetail({
  book,
  onClose,
  onAsk,
}: {
  book: SanatanBook;
  onClose: () => void;
  onAsk: (question: string) => void;
}) {
  const shelf = SHELVES.find((s) => s.id === book.shelfId);
  const base = shelf?.colors[(book.tone ?? 0) % 3] ?? "#b98224";

  return (
    <div className="flex max-h-[85vh] flex-col">
      {/* cover header */}
      <div
        className="relative overflow-hidden border-b border-black/40 px-5 pb-5 pt-6"
        style={{ background: `linear-gradient(155deg, ${base}, ${darken(base, 0.55)})` }}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg bg-black/20 p-1.5 text-white/80 transition hover:bg-black/40 hover:text-white"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="max-w-[85%]">
          <div className="font-deva text-sm font-medium text-white/85">{book.sanskrit}</div>
          <DialogTitle asChild>
            <h3 className="mt-1 text-xl font-bold leading-tight text-white drop-shadow">{book.title}</h3>
          </DialogTitle>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {book.size && (
            <span className="rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-medium text-white/90">
              {book.size}
            </span>
          )}
          <span className="rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-medium text-white/90">
            {shelf?.name} · <span className="font-deva">{shelf?.sanskrit}</span>
          </span>
        </div>
      </div>

      <ScrollArea className="slim-scroll flex-1 overflow-y-auto px-5 py-4">
        <div className="space-y-1">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-sanatan-saffron-2 dark:text-sanatan-gold">
            Author / tradition
          </div>
          <p className="text-[13px] text-sanatan-maroon-2 dark:text-sanatan-maroon">{book.author}</p>
        </div>
        <div className="mt-3 space-y-1">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-sanatan-saffron-2 dark:text-sanatan-gold">
            Period
          </div>
          <p className="text-[13px] text-sanatan-maroon-2 dark:text-sanatan-maroon">{book.era}</p>
        </div>

        <Separator className="my-4 bg-sanatan-gold-2/40" />

        <p className="text-[13px] leading-relaxed text-sanatan-maroon/85 dark:text-sanatan-maroon/85">
          {book.summary}
        </p>

        <div className="mt-4 space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-sanatan-saffron-2 dark:text-sanatan-gold">
            What it holds
          </div>
          <ul className="space-y-1.5">
            {book.teachings.map((t) => (
              <li
                key={t}
                className="flex gap-2 text-[12px] leading-relaxed text-sanatan-maroon/85 dark:text-sanatan-maroon/85"
              >
                <span className="font-deva mt-0.5 shrink-0 text-[10px] text-sanatan-saffron" aria-hidden>॥</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </ScrollArea>

      <div className="flex items-center justify-between gap-2 border-t border-sanatan-gold-2/60 bg-sanatan-cream-2/70 px-5 py-3">
        <p className="text-[10px] text-sanatan-maroon/55 dark:text-sanatan-maroon/65">
          From the SANATAN HI bookshelf — educational and devotional use
        </p>
        <Button
          size="sm"
          className="h-8 shrink-0 gap-1.5 bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-[11px] font-semibold text-sanatan-gold-2 hover:from-sanatan-maroon-2 hover:to-sanatan-maroon"
          onClick={() => {
            onClose();
            onAsk(`Tell me about the ${book.title} (${book.sanskrit})`);
          }}
        >
          <MessageCircleQuestion className="h-3.5 w-3.5" />
          Ask Babaji
        </Button>
      </div>
    </div>
  );
}
