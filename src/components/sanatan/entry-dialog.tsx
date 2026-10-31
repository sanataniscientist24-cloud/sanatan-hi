"use client";

/**
 * SANATAN HI — shared scripture entry detail dialog.
 *
 * Used by both the Bookshelf (per-book reading) and the Sanatan Bank
 * (vault browsing): shows the full trilingual VerseCard plus the action
 * row — Listen (Babaji's pravachan), Ask Babaji (jump into chat with a
 * question about this entry) — and deposits punya the first time an
 * entry is opened in the Bank.
 */

import { useEffect, useState } from "react";
import { Landmark, MessageCircleQuestion, Volume2, Square } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VerseCard } from "./verse-card";
import type { CorpusEntry } from "@/lib/corpus/types";
import { speakBabaji, stopBabaji, onBabajiState, type BabajiState } from "@/lib/client/speak";
import { depositPunya } from "@/lib/client/punya";

interface EntryDialogProps {
  entry: CorpusEntry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** builds the chat question for "Ask Babaji" from the entry */
  askFor: (e: CorpusEntry) => string;
  /** called with the chat question when the user taps "Ask Babaji" */
  onAsk: (question: string) => void;
}

export function EntryDialog({ entry, open, onOpenChange, askFor, onAsk }: EntryDialogProps) {
  const [babaji, setBabaji] = useState<BabajiState>("idle");

  useEffect(() => onBabajiState((s) => setBabaji(s)), []);

  /* silence Babaji whenever the dialog closes or the entry switches */
  useEffect(() => {
    if (!open) stopBabaji();
  }, [open]);

  /* opening an entry deposits +1 punya (once per dialog open) */
  useEffect(() => {
    if (open && entry) depositPunya(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, entry?.id]);

  if (!entry) return null;

  const listen = () => {
    if (babaji !== "idle") {
      stopBabaji();
      return;
    }
    /* Babaji narrates the Hindi rendering (his mother tongue); falls back
       internally to English text if the device has no Hindi voice. */
    void speakBabaji(entry.hindi || entry.english, { langHint: "hi" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85dvh] max-w-lg gap-0 overflow-y-auto overscroll-contain rounded-2xl border-2 border-sanatan-gold-2/70 bg-sanatan-parchment p-0 shadow-[0_24px_80px_rgba(74,21,9,0.4)]">
        <DialogHeader className="sr-only">
          <DialogTitle>
            {(entry.title ?? entry.section ?? "Scripture entry")}
          </DialogTitle>
          <DialogDescription>Full trilingual scripture entry.</DialogDescription>
        </DialogHeader>

        <div className="p-3 sm:p-4">
          <VerseCard entry={entry} />

          {/* action row */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button
              onClick={listen}
              aria-label={babaji !== "idle" ? "Stop Babaji's narration" : "Listen — Babaji narrates this entry"}
              className={
                "h-10 flex-1 gap-2 rounded-full border border-sanatan-gold-2/60 bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-xs font-medium text-sanatan-gold-2 hover:from-sanatan-maroon-2 hover:to-sanatan-maroon " +
                (babaji !== "idle" ? "ring-2 ring-sanatan-saffron/70" : "")
              }
            >
              {babaji !== "idle" ? <Square className="h-3.5 w-3.5" /> : <Volume2 className="h-4 w-4" />}
              {babaji === "idle" ? "सुनें · Listen" : "रोकें · Stop"}
            </Button>
            <Button
              onClick={() => {
                onOpenChange(false);
                onAsk(askFor(entry));
              }}
              aria-label="Ask Babaji about this entry in the chat"
              className="h-10 flex-1 gap-2 rounded-full border border-sanatan-gold-2/70 bg-sanatan-gold/20 text-xs font-medium text-sanatan-maroon-2 hover:bg-sanatan-gold/30"
            >
              <MessageCircleQuestion className="h-4 w-4 text-sanatan-maroon" />
              बाबाजी से पूछें · Ask Babaji
            </Button>
          </div>

          <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[0.62rem] text-sanatan-gold">
            <Landmark className="h-3 w-3" aria-hidden />
            <span className="font-deva">+१ पुण्य जमा · punya deposited</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
