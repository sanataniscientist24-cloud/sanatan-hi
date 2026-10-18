"use client";

/**
 * SANATAN HI — resilient answer client.
 *
 * Primary path: POST /api/chat (server route, used in dev / Node deployments).
 * Fallback path: the offline engine runs directly in the browser via dynamic
 * import — this makes the app work on any static host (GitHub Pages, CDN,
 * file://) with zero backend. The whole corpus ships with the page, so the
 * static deployment is still 100% offline.
 */

import type { CorpusEntry } from "@/lib/corpus/types";
import type { ChatResult, ResponseLang } from "@/lib/ai/engine";

export interface AskResult extends ChatResult {
  source: "api" | "browser";
}

export type AskLang = ResponseLang | "auto";

export async function askSanatan(message: string, language: AskLang): Promise<AskResult> {
  /* 1 — try the server route (dev + full-stack deploys) */
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, language }),
    });
    if (res.ok) {
      const data = (await res.json()) as { ok?: boolean } & ChatResult;
      if (data?.ok) return { ...data, source: "api" };
    }
  } catch {
    /* static host: route unavailable — fall through to the browser engine */
  }

  /* 2 — run the engine right here in the browser (fully offline) */
  const started = performance.now();
  const { chat } = await import("@/lib/ai/engine");
  const result = chat(message, language);
  return {
    ...result,
    meta: { ...result.meta, timeMs: Math.round(performance.now() - started) },
    source: "browser",
  };
}

/** Verse of the day — API first, browser fallback on static hosts. */
export async function dailyVerseSanatan(): Promise<CorpusEntry | null> {
  try {
    const res = await fetch("/api/daily");
    if (res.ok) {
      const data = (await res.json()) as { ok?: boolean; verse?: CorpusEntry };
      if (data?.ok && data.verse) return data.verse;
    }
  } catch {
    /* fall through */
  }
  const { dailyVerse } = await import("@/lib/ai/engine");
  return dailyVerse();
}
