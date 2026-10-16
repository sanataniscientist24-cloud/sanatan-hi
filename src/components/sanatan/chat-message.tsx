"use client";

import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import { renderMarkdown } from "./markdown";
import { VerseCard } from "./verse-card";
import { OmSigil } from "./book-icons";
import type { CorpusEntry } from "@/lib/corpus/types";

export interface ChatMessageData {
  id: string;
  role: "user" | "assistant";
  text: string;
  verses?: CorpusEntry[];
  suggestions?: string[];
  intent?: string;
  timeMs?: number;
}

interface ChatMessageProps {
  message: ChatMessageData;
  onSuggestion?: (s: string) => void;
}

export function ChatMessage({ message, onSuggestion }: ChatMessageProps) {
  if (message.role === "user") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-end"
      >
        <div className="max-w-[85%] sm:max-w-[72%]">
          <div className="rounded-2xl rounded-tr-sm bg-gradient-to-br from-sanatan-saffron to-sanatan-saffron-2 px-4 py-2.5 text-white shadow-sm">
            <p className="text-[0.92rem] leading-relaxed [text-wrap:pretty]">{message.text}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start gap-2.5"
    >
      {/* avatar */}
      <div className="relative mt-1 hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sanatan-gold-2/70 bg-sanatan-parchment shadow-sm">
        <OmSigil className="text-lg text-sanatan-maroon om-glow" />
      </div>

      <div className="w-full max-w-[92%] sm:max-w-[82%] space-y-3">
        <div className="relative rounded-2xl rounded-tl-sm border border-sanatan-gold-2/50 bg-sanatan-parchment px-4 py-3 shadow-[0_1px_2px_rgba(105,32,15,0.05)]">
          <div className="absolute left-0 top-4 h-0 w-0.5" aria-hidden />
          <div className="prose-sm text-[0.9rem] text-foreground/90 [text-wrap:pretty]">
            {renderMarkdown(message.text)}
          </div>
          {(message.intent || message.timeMs !== undefined) && (
            <div className="mt-2 flex items-center gap-2 text-[0.62rem] text-sanatan-gold/80">
              <Sparkles className="h-3 w-3" aria-hidden />
              <span className="font-deva">
                सनातन HI · {message.intent ?? "उत्तर"}
                {message.timeMs !== undefined && message.timeMs >= 0
                  ? ` · ${(message.timeMs < 1 ? 1 : message.timeMs) + "ms · ऑफ़लाइन कोश"}`
                  : " · ऑफ़लाइन कोश"}
              </span>
            </div>
          )}
        </div>

        {/* verse cards */}
        {message.verses && message.verses.length > 0 && (
          <div className="space-y-3">
            {message.verses.map((v, i) => (
              <VerseCard key={v.id} entry={v} index={i} />
            ))}
          </div>
        )}

        {/* suggestion chips */}
        {message.suggestions && message.suggestions.length > 0 && onSuggestion && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {message.suggestions.map((s) => (
              <button
                key={s}
                onClick={() => onSuggestion(s)}
                className="rounded-full border border-sanatan-gold-2/60 bg-sanatan-parchment px-3 py-1 text-[0.72rem] text-sanatan-maroon-2 dark:text-sanatan-maroon transition-colors hover:border-sanatan-saffron hover:bg-sanatan-gold/15"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/** Animated typing indicator with breathing Om. */
export function TypingIndicator() {
  return (
    <div className="flex justify-start gap-2.5">
      <div className="relative mt-1 hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sanatan-gold-2/70 bg-sanatan-parchment shadow-sm">
        <OmSigil className="text-lg text-sanatan-maroon om-glow" />
      </div>
      <div className="flex items-center gap-2.5 rounded-2xl rounded-tl-sm border border-sanatan-gold-2/50 bg-sanatan-parchment px-4 py-3">
        <span className="font-deva text-sanatan-saffron text-xl flame-breathe">ॐ</span>
        <div className="flex items-center gap-1" aria-label="सोच रहा है">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-sanatan-gold"
              style={{
                animation: `flame-breathe 1.1s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
          ))}
        </div>
        <span className="text-[0.72rem] text-sanatan-gold font-deva">ग्रंथ-कोश से खोज रहा हूँ…</span>
      </div>
    </div>
  );
}
