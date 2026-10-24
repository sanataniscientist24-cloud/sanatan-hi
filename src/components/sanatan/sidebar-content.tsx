"use client";

import { Library, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { BookIcon } from "./book-icons";
import { CORPUS } from "@/lib/corpus";
import { BOOKS } from "@/lib/corpus/books";

const TOPICS = [
  "Karma", "Dharma", "Atman", "Moksha", "Bhakti", "Yoga", "Maya",
  "Peace", "Death", "Guru", "Avatar", "Yugas", "Hanuman", "Krishna", "Rama", "Shiva", "Devi", "Ganga",
];

interface SidebarContentProps {
  onQuery: (q: string) => void;
  onNavigate?: () => void;
}

export function SidebarContent({ onQuery, onNavigate }: SidebarContentProps) {
  const ask = (q: string) => {
    onQuery(q);
    onNavigate?.();
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 px-4 pt-4 pb-2">
        <Library className="h-4 w-4 text-sanatan-saffron" aria-hidden />
        <h2 className="font-display text-lg font-semibold text-sanatan-maroon">Scripture Corpus</h2>
      </div>

      <ScrollArea className="sanatan-scroll min-h-0 flex-1 px-2">
        <div className="space-y-1 pb-2">
          {BOOKS.map((b) => {
            const count = CORPUS.filter((e) => e.bookId === b.id).length;
            return (
              <button
                key={b.id}
                onClick={() => ask(`Tell me about ${b.name}`)}
                className="group flex w-full items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-left transition-colors hover:border-sanatan-gold-2/60 hover:bg-sanatan-gold/10 active:bg-sanatan-gold/20"
                aria-label={`Ask about ${b.name}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-sanatan-gold-2/60 bg-sanatan-parchment">
                  <BookIcon icon={b.icon} className="h-4 w-4 text-sanatan-saffron" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.86rem] font-medium text-sanatan-maroon">
                    {b.name}
                  </span>
                  <span className="block truncate font-deva text-[0.68rem] text-foreground/55">{b.nameHi}</span>
                </span>
                <span className="shrink-0 text-[0.66rem] tabular-nums text-sanatan-gold/80 group-hover:text-sanatan-saffron">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <Separator className="my-2 bg-sanatan-gold-2/40" />

        <div className="px-3 pb-3">
          <div className="mb-2 flex items-center gap-1.5 text-[0.7rem] font-semibold text-sanatan-maroon">
            <Search className="h-3.5 w-3.5 text-sanatan-saffron" aria-hidden />
            <span>Explore topics</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {TOPICS.map((t) => (
              <button
                key={t}
                onClick={() => ask(t)}
                className="rounded-full border border-sanatan-gold-2/50 bg-sanatan-parchment px-2.5 py-1.5 text-[0.72rem] text-sanatan-maroon-2 transition-all active:scale-95 hover:border-sanatan-saffron hover:bg-sanatan-gold/15 dark:text-sanatan-maroon"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
