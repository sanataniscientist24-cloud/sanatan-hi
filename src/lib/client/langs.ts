"use client";

/**
 * SANATAN HI — multi-language selection system.
 *
 * The site defaults to हिंदी + संस्कृत (Hindi & Sanskrit); English and
 * Español are opt-in via the homepage language console. One or more
 * languages may be active at once — answers are then composed in every
 * active language.
 */

import type { AskResult } from "./ask";
import { askSanatan, type AskLang } from "./ask";

export type AppLang = "hi" | "sa" | "en" | "es";

/** canonical order: Hindi & Sanskrit first (the site default), then opt-ins */
export const LANG_ORDER: readonly AppLang[] = ["hi", "sa", "en", "es"] as const;

export const DEFAULT_LANGS: AppLang[] = ["hi", "sa"];

export interface LangMeta {
  /** native name shown on the chip, e.g. "हिंदी" */
  native: string;
  /** latin label, e.g. "Hindi" */
  label: string;
  /** short code for the compact header pill, e.g. "हिं" / "EN" */
  short: string;
  /** emoji flag-ish glyph used as a section marker in composed answers */
  glyph: string;
}

export const LANG_META: Record<AppLang, LangMeta> = {
  hi: { native: "हिंदी", label: "Hindi", short: "हिं", glyph: "🪷" },
  sa: { native: "संस्कृत", label: "Sanskrit", short: "संस्कृत", glyph: "ॐ" },
  en: { native: "English", label: "English", short: "EN", glyph: "✦" },
  es: { native: "Español", label: "Spanish", short: "ES", glyph: "✧" },
};

export function isAppLang(v: unknown): v is AppLang {
  return v === "hi" || v === "sa" || v === "en" || v === "es";
}

/** validate a stored value into a legal selection (never empty) */
export function normalizeLangs(input: unknown): AppLang[] {
  if (Array.isArray(input)) {
    const cleaned = LANG_ORDER.filter((l) => input.includes(l));
    if (cleaned.length > 0) return cleaned;
  }
  return DEFAULT_LANGS;
}

/** the language that drives the UI, voice assistant and single-lang views */
export function primaryLang(langs: AppLang[]): AppLang {
  for (const l of LANG_ORDER) if (langs.includes(l)) return l;
  return "hi";
}

/** ask in every active language and compose one multi-language answer */
export async function askSanatanMulti(message: string, langs: AppLang[]): Promise<AskResult> {
  const ordered = LANG_ORDER.filter((l) => langs.includes(l));

  /* single language — plain reply, exactly as before */
  if (ordered.length <= 1) {
    return askSanatan(message, (ordered[0] ?? "hi") as AskLang);
  }

  /* multiple languages — reply section per language, primary first */
  const results: AskResult[] = [];
  for (const l of ordered) {
    try {
      results.push(await askSanatan(message, l as AskLang));
    } catch {
      /* skip a failing language rather than the whole answer */
    }
  }
  if (results.length === 0) return askSanatan(message, "hi");

  const sections = results.map((r) => {
    const meta = LANG_META[(r.lang ?? "hi") as AppLang] ?? LANG_META.hi;
    return `**${meta.glyph} ${meta.native} · ${meta.label}**\n\n${r.reply}`;
  });

  return {
    ...results[0],
    reply: sections.join("\n\n· · ·\n\n"),
    verses: results[0].verses ?? [],
    suggestions: results[0].suggestions ?? [],
    meta: { ...results[0].meta, timeMs: results.reduce((s, r) => s + (r.meta?.timeMs ?? 0), 0) },
  };
}

/** localized starter chips — one set per active language, merged + deduped */
export function starterChips(langs: AppLang[]): string[] {
  const perLang: Record<AppLang, string[]> = {
    hi: ["कर्म क्या है?", "गीता २.४७ का अर्थ", "शिव के बारे में बताएं", "आज का श्लोक"],
    sa: ["कर्म किम्?", "गीता २.४७", "शिवः कथं?", "अद्यः श्लोकः"],
    en: ["Gita 2.47 meaning", "What is Karma Yoga?", "Tell me about Shiva", "Verse of the day"],
    es: ["¿Qué es el dharma?", "Gita 2.47", "Háblame de Shiva", "Versículo del día"],
  };
  const seen = new Set<string>();
  const out: string[] = [];
  for (const l of LANG_ORDER) {
    if (!langs.includes(l)) continue;
    for (const chip of perLang[l]) {
      if (!seen.has(chip) && out.length < 10) {
        seen.add(chip);
        out.push(chip);
      }
    }
  }
  return out;
}
