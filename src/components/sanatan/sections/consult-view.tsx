"use client";

/**
 * SANATAN HI — Consult the Guide (SanatanDoc view, ported).
 *
 * The LLM companion chat: where SANATANI BABAJI answers strictly from
 * the offline corpus in the Home tab, the Guide answers open questions
 * on Sanatan Dharma through the z-ai LLM (/api/consult) — grounded in
 * scripture citations, respectful of all sampradayas.
 */

import { useEffect, useRef, useState } from "react";
import { Send, User, Loader2, Trash2 } from "lucide-react";
import { OmSigil } from "@/components/sanatan/book-icons";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "What is the meaning of ॐ (Om)?",
  "Explain the four purusharthas of life",
  "What does the Gita say about doing one's duty?",
  "Difference between Shruti and Smriti?",
  "How do I begin a simple daily sadhana?",
  "Why is the Gayatri Mantra so important?",
];

export function ConsultView() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const ask = async (text?: string) => {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setInput("");
    setError(null);
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) {
        throw new Error(data.error || "Something went wrong.");
      }
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sanatan-fade">
      <div className="mb-4">
        <h2 className="text-lg font-bold tracking-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
          Consult the Guide
        </h2>
        <p className="text-xs text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
          Ask anything about Sanatan Dharma — answers grounded in scripture, given with reverence
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-sanatan-gold-2/70 bg-sanatan-parchment shadow-[0_10px_36px_-14px_rgba(74,21,9,0.25)]">
        {/* chat area */}
        <ScrollArea className="sanatan-scroll h-[52vh] min-h-[340px]">
          <div ref={scrollRef} className="flex flex-col gap-3.5 p-4">
            {messages.length === 0 && (
              <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
                <div className="om-glow flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 ring-1 ring-sanatan-gold/50">
                  <OmSigil className="text-2xl font-bold text-sanatan-gold-2" />
                </div>
                <h3 className="font-deva mt-3 text-sm font-semibold text-sanatan-maroon-2 dark:text-sanatan-maroon">
                  श्रद्धावान् लभते ज्ञानम्
                </h3>
                <p className="mt-1 max-w-sm text-[11px] leading-relaxed text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
                  “The faithful attain knowledge” — Gita 4.39. Ask about scripture, ritual,
                  philosophy or practice; the Guide answers with sources.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => ask(s)}
                      className="rounded-full border border-sanatan-gold-2/60 bg-sanatan-parchment px-3 py-1.5 text-[11px] text-sanatan-maroon/70 transition hover:border-sanatan-saffron/60 hover:bg-sanatan-gold/15 hover:text-sanatan-maroon-2 dark:text-sanatan-maroon/80"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${
                    m.role === "assistant"
                      ? "bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2"
                      : "bg-sanatan-gold/15 text-sanatan-maroon"
                  }`}
                  aria-hidden
                >
                  {m.role === "assistant" ? (
                    <OmSigil className="text-sm leading-none" />
                  ) : (
                    <User className="h-3.5 w-3.5" />
                  )}
                </div>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    m.role === "assistant"
                      ? "rounded-tl-sm border border-sanatan-gold/50 bg-sanatan-gold/[0.08] text-sanatan-maroon-2 dark:text-sanatan-maroon"
                      : "rounded-tr-sm border border-sanatan-gold-2/50 bg-sanatan-cream-2/70 text-sanatan-maroon-2 dark:text-sanatan-maroon"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5">
                <div className="om-glow flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2">
                  <OmSigil className="text-sm leading-none" />
                </div>
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-sanatan-gold/50 bg-sanatan-gold/[0.08] px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sanatan-saffron [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sanatan-saffron [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sanatan-saffron" />
                </div>
              </div>
            )}

            {error && (
              <div
                className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-3.5 py-2.5 text-[12px] text-rose-700 dark:text-rose-300"
                role="alert"
              >
                {error}
              </div>
            )}
          </div>
        </ScrollArea>

        {/* input */}
        <div className="border-t border-sanatan-gold-2/50 bg-sanatan-cream-2/60 p-3">
          <div className="flex items-end gap-2">
            {messages.length > 0 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setMessages([]);
                  setError(null);
                }}
                className="h-9 w-9 shrink-0 text-sanatan-maroon/45 hover:text-rose-500"
                aria-label="Clear conversation"
                title="Clear conversation"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  ask();
                }
              }}
              rows={1}
              placeholder="Ask about shastra, ritual, philosophy, sadhana…"
              aria-label="Your question for the Guide"
              className="max-h-28 min-h-[40px] flex-1 resize-none rounded-lg border-sanatan-gold-2/70 bg-sanatan-parchment px-3 py-2.5 text-[13px] text-sanatan-maroon-2 placeholder:text-sanatan-maroon/40 focus-visible:ring-sanatan-gold/50 dark:text-sanatan-maroon"
            />
            <Button
              onClick={() => ask()}
              disabled={loading || !input.trim()}
              size="icon"
              className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2 hover:from-sanatan-maroon-2 hover:to-sanatan-maroon"
              aria-label="Send question"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
          <p className="mt-2 text-center text-[10px] leading-relaxed text-sanatan-maroon/50 dark:text-sanatan-maroon/60">
            Educational guidance only — for personal rituals and diksha, honor your own guru and
            sampradaya.
          </p>
        </div>
      </div>
    </div>
  );
}
