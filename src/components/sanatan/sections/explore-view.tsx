"use client";

/**
 * SANATAN HI — Explore (SanatanDoc "Index" view, ported).
 *
 * Sixteen doors into the eternal: the category grid with detail
 * dialog — facts, bookshelf links and Bank practice counts.
 * Restyled from the original zinc-dark to the SANATAN HI palette.
 */

import { useState } from "react";
import {
  BookOpenText,
  Flame,
  ScrollText,
  Library,
  Swords,
  Shield,
  Languages,
  Lamp,
  Sparkles,
  PersonStanding,
  MoonStar,
  Leaf,
  Landmark,
  Sun,
  Compass,
  Scale,
  X,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { CATEGORIES, BOOKS_BY_ID, type SanatanCategory } from "@/lib/sanatan-data";
import { BANK_QUESTIONS } from "@/lib/sanatan-bank";
import type { SectionId } from "@/lib/sections";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const ICONS: Record<string, LucideIcon> = {
  "book-open-text": BookOpenText,
  flame: Flame,
  "scroll-text": ScrollText,
  library: Library,
  swords: Swords,
  shield: Shield,
  languages: Languages,
  lamp: Lamp,
  sparkles: Sparkles,
  "person-standing": PersonStanding,
  "moon-star": MoonStar,
  leaf: Leaf,
  landmark: Landmark,
  sun: Sun,
  compass: Compass,
  scale: Scale,
};

export function ExploreView({ onNavigate }: { onNavigate: (s: SectionId) => void }) {
  const [active, setActive] = useState<SanatanCategory | null>(null);

  return (
    <div className="sanatan-fade">
      {/* section heading */}
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
            Explore Sanatan
          </h2>
          <p className="text-xs text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
            Sixteen doors into the eternal — tap any path to begin
          </p>
        </div>
        <span className="font-deva hidden text-2xl text-sanatan-gold/50 sm:block" aria-hidden>
          ॐ
        </span>
      </div>

      {/* category grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {CATEGORIES.map((cat, i) => {
          const Icon = ICONS[cat.icon] ?? BookOpenText;
          return (
            <button
              key={cat.id}
              onClick={() => setActive(cat)}
              className="group relative overflow-hidden rounded-xl border border-sanatan-gold-2/60 bg-sanatan-parchment p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sanatan-saffron/70 hover:bg-sanatan-gold/10 hover:shadow-[0_10px_26px_-10px_rgba(105,32,15,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sanatan-saffron dark:bg-sanatan-parchment"
              style={{ animationDelay: `${i * 25}ms` }}
            >
              <div className="absolute -right-3 -top-3 text-5xl opacity-[0.06] transition group-hover:opacity-[0.14]" aria-hidden>
                <Icon className="h-14 w-14 text-sanatan-gold" strokeWidth={1.2} />
              </div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sanatan-gold/20 to-sanatan-saffron/20 text-sanatan-gold ring-1 ring-sanatan-gold/40 transition group-hover:from-sanatan-gold/30 group-hover:to-sanatan-saffron/30">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div className="relative mt-3">
                <div className="text-[13px] font-semibold leading-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
                  {cat.name}
                </div>
                <div className="font-deva mt-0.5 text-[11px] leading-tight text-sanatan-saffron-2 dark:text-sanatan-gold">
                  {cat.sanskrit}
                </div>
                <div className="mt-1 hidden text-[10px] leading-snug text-sanatan-maroon/55 dark:text-sanatan-maroon/65 lg:block lg:line-clamp-2">
                  {cat.tagline}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* category detail dialog */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-h-[85vh] gap-0 overflow-hidden rounded-2xl border-2 border-sanatan-gold-2/70 bg-sanatan-parchment p-0 shadow-[0_24px_80px_rgba(74,21,9,0.4)] sm:max-w-lg"
        >
          <DialogTitle className="sr-only">{active?.name}</DialogTitle>
          {active && (
            <CategoryDetail cat={active} onClose={() => setActive(null)} onNavigate={onNavigate} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CategoryDetail({
  cat,
  onClose,
  onNavigate,
}: {
  cat: SanatanCategory;
  onClose: () => void;
  onNavigate: (s: SectionId) => void;
}) {
  const Icon = ICONS[cat.icon] ?? BookOpenText;
  const books = cat.bookIds.map((id) => BOOKS_BY_ID[id]).filter(Boolean);
  const bankQs = cat.bankCategory
    ? BANK_QUESTIONS.filter((q) => q.category === cat.bankCategory).length
    : 0;

  return (
    <div className="flex max-h-[85vh] flex-col">
      {/* header banner */}
      <div className="relative overflow-hidden border-b border-sanatan-gold-2/60 bg-gradient-to-br from-sanatan-gold/15 via-sanatan-saffron/10 to-transparent px-5 pb-4 pt-5">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg p-1.5 text-sanatan-maroon/60 transition hover:bg-sanatan-gold/20 hover:text-sanatan-maroon"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-3">
          <div className="om-glow flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2">
            <Icon className="h-6 w-6" strokeWidth={1.8} />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold leading-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
              {cat.name}
            </h3>
            <div className="font-deva text-sm text-sanatan-saffron-2 dark:text-sanatan-gold">
              {cat.sanskrit}
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs italic text-sanatan-maroon/70 dark:text-sanatan-maroon/75">{cat.tagline}</p>
      </div>

      <ScrollArea className="slim-scroll flex-1 overflow-y-auto px-5 py-4">
        <p className="text-[13px] leading-relaxed text-sanatan-maroon/85 dark:text-sanatan-maroon/85">
          {cat.description}
        </p>

        <h4 className="mb-2 mt-5 text-[11px] font-semibold uppercase tracking-wider text-sanatan-saffron-2 dark:text-sanatan-gold">
          Key facts
        </h4>
        <ul className="space-y-1.5">
          {cat.facts.map((f) => (
            <li
              key={f}
              className="flex gap-2 text-[12px] leading-relaxed text-sanatan-maroon/85 dark:text-sanatan-maroon/85"
            >
              <span className="font-deva mt-0.5 shrink-0 text-[10px] text-sanatan-saffron" aria-hidden>
                •
              </span>
              {f}
            </li>
          ))}
        </ul>

        {books.length > 0 && (
          <>
            <h4 className="mb-2 mt-5 text-[11px] font-semibold uppercase tracking-wider text-sanatan-saffron-2 dark:text-sanatan-gold">
              On the bookshelf
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {books.map((b) => (
                <Badge
                  key={b.id}
                  variant="outline"
                  className="cursor-pointer border-sanatan-gold-2/60 bg-sanatan-gold/10 text-[11px] font-normal text-sanatan-maroon-2 hover:border-sanatan-saffron/70 hover:text-sanatan-maroon dark:text-sanatan-maroon"
                  onClick={() => {
                    onClose();
                    onNavigate("bookshelf");
                  }}
                >
                  {b.title}
                </Badge>
              ))}
            </div>
          </>
        )}
      </ScrollArea>

      {/* footer actions */}
      <div className="flex items-center justify-between gap-2 border-t border-sanatan-gold-2/60 bg-sanatan-cream-2/70 px-5 py-3">
        <span className="text-[11px] text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
          {bankQs > 0 ? `${bankQs} practice questions in the Bank` : "Practice in the Bank"}
        </span>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="h-8 gap-1 border-sanatan-gold-2/60 bg-sanatan-parchment text-[11px] text-sanatan-maroon-2 hover:bg-sanatan-gold/15 hover:text-sanatan-maroon dark:text-sanatan-maroon"
            onClick={() => {
              onClose();
              onNavigate("bookshelf");
            }}
          >
            Bookshelf <ArrowRight className="h-3 w-3" />
          </Button>
          <Button
            size="sm"
            className="h-8 gap-1 bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-[11px] font-semibold text-sanatan-gold-2 hover:from-sanatan-maroon-2 hover:to-sanatan-maroon"
            onClick={() => {
              onClose();
              onNavigate("bank");
            }}
          >
            Open Bank <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
