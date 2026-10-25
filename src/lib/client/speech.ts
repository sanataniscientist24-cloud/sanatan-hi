"use client";

/**
 * SANATAN HI — voice assistant speech layer (browser-native, works on static hosts).
 *
 * Text-to-Speech: window.speechSynthesis — "pravachan" voice profile: a calm,
 * soothing MALE voice like Babaji giving discourse, MALE-FIRST by design
 * (see @/lib/client/speak — a known male voice of any tier always beats a
 * female one; the lone Hindi voice on Chrome, "Google हिन्दी", is female and
 * must never be the automatic pick while a male voice exists).
 * Speech-to-Text: SpeechRecognition / webkitSpeechRecognition with Indian
 * locales (en-IN, hi-IN) so Indian-accent English is recognised well.
 *
 * Everything degrades gracefully: if an API is missing we report capability
 * flags and the UI falls back to typing / silent display.
 */

import { devanagariToRoman } from "@/lib/ai/translit";
import { babajiPitch, pickBabajiVoice, voiceGender } from "@/lib/client/speak";

/* ────────────────────────── capability detection ────────────────────────── */

export function ttsSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

export function sttSupported(): boolean {
  if (typeof window === "undefined") return false;
  const w = window as unknown as Record<string, unknown>;
  return Boolean(w.SpeechRecognition || w.webkitSpeechRecognition);
}

/* ───────────────────────────── voice selection ───────────────────────────── */

export type SpeechLang = "en" | "hi" | "es";

export const DEFAULT_PACE = 0.86;

/** preference order — Indian accents first by design */
const VOICE_ORDER: Record<SpeechLang, string[]> = {
  en: ["en-in", "en-gb", "en-us", "en-au", "en"],
  hi: ["hi-in", "hi"],
  es: ["es-es", "es-mx", "es-us", "es-419", "es"],
};

/** known MALE voices — the shared gender tables live in speak.ts (single
 *  source of truth) so Babaji's male-first rules stay in lockstep */

export const SPEECH_LANG_LABEL: Record<SpeechLang, string> = {
  en: "English (India)",
  hi: "हिंदी / संस्कृत",
  es: "Español",
};

function normLang(lang: string): string {
  return lang.toLowerCase().replace(/_/g, "-");
}

/** best voice for a language — MALE first, Indian accents win ties */
export function pickVoice(voices: SpeechSynthesisVoice[], target: SpeechLang): SpeechSynthesisVoice | null {
  /* hi / en — delegate to the Babaji engine's male-first ladder: a known
     male voice (Indian English, en-GB, en-US…) beats a female or unknown
     Hindi voice, and Devanagari is romanized for Latin-script voices by
     speak() so the shloka still sounds right */
  if (target !== "es") {
    const picked = pickBabajiVoice(voices, target === "hi" ? "hi" : "latin", target === "en" ? "en" : undefined);
    return picked ? picked.voice : null;
  }
  /* es — the Spanish tier stays first (Babaji reads Español in Spanish),
     gender only re-orders voices inside the tier */
  for (const wanted of VOICE_ORDER[target]) {
    const tier = voices.filter((v) => normLang(v.lang) === wanted);
    if (tier.length) return bestOfTier(tier, target);
  }
  const base = target;
  const tier = voices.filter((v) => normLang(v.lang).split("-")[0] === base);
  return tier.length ? bestOfTier(tier, target) : null;
}

/** highest-ranked voice of a tier (male > natural > plain > female) */
function bestOfTier(tier: SpeechSynthesisVoice[], target: SpeechLang): SpeechSynthesisVoice {
  return tier.reduce((best, v) => (rankVoice(v, target) > rankVoice(best, target) ? v : best));
}

/** voices usable for a language, best (Indian) first — for the picker UI */
export function voicesForLang(voices: SpeechSynthesisVoice[], target: SpeechLang): SpeechSynthesisVoice[] {
  const base = target === "es" ? "es" : target;
  return voices
    .filter((v) => normLang(v.lang).split("-")[0] === base)
    .sort((a, b) => rankVoice(b, target) - rankVoice(a, target));
}

function rankVoice(v: SpeechSynthesisVoice, target: SpeechLang): number {
  const lang = normLang(v.lang);
  const idx = VOICE_ORDER[target].indexOf(lang);
  let score = idx >= 0 ? 100 - idx * 10 : 10;
  /* prefer natural / neural / google voices among equals */
  const name = v.name.toLowerCase();
  if (/natural|neural|google/.test(name)) score += 5;
  if (v.localService) score += 1; /* offline-reliable */
  /* Babaji is a man — male voices lead the picker, known female ones sink
     below every unknown so a female voice is never offered first */
  const gender = voiceGender(v);
  score += gender === "male" ? 12 : gender === "female" ? -35 : 0;
  return score;
}

/** subscribe to the browser's async voice list */
export function subscribeVoices(onVoices: (voices: SpeechSynthesisVoice[]) => void): () => void {
  if (!ttsSupported()) return () => {};
  const synth = window.speechSynthesis;
  const load = () => onVoices(synth.getVoices());
  load();
  synth.addEventListener("voiceschanged", load);
  return () => synth.removeEventListener("voiceschanged", load);
}

/* ─────────────────────────── text preparation ─────────────────────────── */

/** reply language for TTS: Devanagari-heavy → hi, Spanish markers → es, else en */
export function detectSpeechLang(text: string, mode: string): SpeechLang {
  if (mode === "hi" || mode === "sa") return "hi";
  if (mode === "es") return "es";
  const dev = (text.match(/[\u0900-\u097F]/g) ?? []).length;
  const letters = (text.match(/[\p{L}]/gu) ?? []).length || 1;
  if (dev / letters > 0.35) return "hi";
  if (mode === "auto" && /[¿¡ñáéíóú]|Español|Dharma\?/i.test(text) && !/[\u0900-\u097F]/.test(text)) return "es";
  return "en";
}

/** clean markdown / formatting so speech sounds natural */
export function speakableText(s: string): string {
  return s
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\*\*([^*]*)\*\*/g, "$1")
    .replace(/\*([^*]*)\*/g, "$1")
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/\|/g, " ")
    .replace(/^>\s*/gm, "")
    .replace(/\(([^)]*(?:verse|श्लोक|adhyaya|chapter|kanda|skandha|sukta|canto|Upanishad|Gita|Purana|Veda|Ramayana|Manas|Sutra)[^)]*)\)/gi, " ")
    .replace(/\s+\|\s+/g, " — ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/**
 * Romanize Devanagari runs when the voice that will actually speak cannot
 * read Devanagari (an English/Spanish voice would skip or garble shlokas) —
 * e.g. "यदा यदा हि धर्मस्य" becomes "yada yada hi dharmasya", which a male
 * Indian-accent English voice pronounces beautifully.
 */
export function romanizeForVoice(text: string, voiceLang: string): string {
  /* Devanagari-capable voices (hi-IN and sister scripts) keep the script */
  if (/^(hi|mr|ne|sa|sd)(?:[-_]|$)/i.test(normLang(voiceLang))) return text;
  if (!/[\u0900-\u097F]/.test(text)) return text;
  return text.replace(/([\u0900-\u097F\s॥।]+)/g, (run) => ` ${devanagariToRoman(run.trim())} `).replace(/\s{2,}/g, " ");
}

/** split into speakable chunks — sentence-boundary queue keeps Chrome reliable;
 *  danda (।) and double-danda (॥) break shlokas so verses get their own breath */
export function splitUtterances(text: string, maxLen = 150): string[] {
  const sentences = text.match(/[^.!?।॥]+[.!?।॥]?/g) ?? [text];
  const out: string[] = [];
  for (const s of sentences) {
    const t = s.trim();
    if (!t) continue;
    const last = out[out.length - 1];
    /* a completed shloka (॥) always takes its own breath — never merged onward */
    const lastClosedVerse = last ? /॥$/.test(last) : false;
    /* short fragments merge with a neighbour so delivery stays smooth, not staccato */
    const mergeable =
      last && !lastClosedVerse && (last + " " + t).length <= maxLen && (t.length < 30 || last.length < 30);
    if (mergeable) out[out.length - 1] = `${last} ${t}`;
    else out.push(t);
  }
  return out.length ? out.slice(0, 24) : [text];
}

/* ─────────────────────────────── speak API ─────────────────────────────── */

export interface SpeakOptions {
  lang: SpeechLang;
  voice?: SpeechSynthesisVoice | null;
  rate?: number;
  onStart?: () => void;
  onEnd?: () => void;
}

/** Speak text in a calm pravachan cadence — gentle pauses between sentences
 *  (a touch longer after a shloka's ॥ danda); returns a cancel() you must
 *  call on unmount / interruption. */
export function speak(text: string, opts: SpeakOptions): () => void {
  if (!ttsSupported()) {
    opts.onEnd?.();
    return () => {};
  }
  const synth = window.speechSynthesis;
  synth.cancel(); /* clear anything queued */

  /* the voice that will actually speak decides whether Devanagari stays:
     a male en-GB/en-US Babaji voice reads the romanized shloka instead of
     garbling it, a Devanagari-capable voice keeps the script */
  const resolvedLang = opts.voice?.lang ?? (opts.lang === "en" ? "en-IN" : opts.lang === "hi" ? "hi-IN" : "es-ES");
  const clean = romanizeForVoice(speakableText(text), resolvedLang).slice(0, 1500);
  const chunks = splitUtterances(clean);
  let started = false;
  let ended = false;
  let cancelled = false;
  let pauseTimer: number | undefined;
  /* Babaji's pitch is gender-aware: men 0.72, unknown hedged deeper, a
     forced female voice pitched down hard to sound as masculine as it can */
  const pitch = babajiPitch(opts.voice ? voiceGender(opts.voice) : "unknown");

  const fireEnd = () => {
    if (!ended) {
      ended = true;
      opts.onEnd?.();
    }
  };

  const speakChunk = (i: number) => {
    if (cancelled || ended) return;
    if (i >= chunks.length) {
      fireEnd();
      return;
    }
    const chunk = chunks[i];
    const last = i === chunks.length - 1;
    const u = new SpeechSynthesisUtterance(chunk);
    u.lang = resolvedLang;
    if (opts.voice) {
      try {
        u.voice = opts.voice;
      } catch {
        /* incompatible voice object — let u.lang pick the engine voice */
      }
    }
    u.rate = opts.rate ?? DEFAULT_PACE; /* calm, measured pace */
    u.pitch = pitch; /* deep, warm, masculine pravachan voice */
    u.onstart = () => {
      if (!started) {
        started = true;
        opts.onStart?.();
      }
    };
    /* after each chunk, breathe — a longer pause closes a shloka (॥ / ।) */
    const breathe = () => {
      if (cancelled || ended) return;
      const gap = /[॥।]$/.test(chunk) ? 360 : 200;
      pauseTimer = window.setTimeout(() => speakChunk(i + 1), gap);
    };
    u.onend = last ? fireEnd : breathe;
    u.onerror = last ? fireEnd : breathe;
    synth.speak(u);
  };

  speakChunk(0);

  /* safety: some engines never fire events (headless / zero voices) */
  const guard = window.setTimeout(() => {
    if (!started) fireEnd();
  }, 2500);

  return () => {
    cancelled = true;
    if (pauseTimer !== undefined) window.clearTimeout(pauseTimer);
    window.clearTimeout(guard);
    try {
      synth.cancel();
    } catch {
      /* ignore */
    }
    fireEnd();
  };
}

export function stopSpeaking(): void {
  if (ttsSupported()) window.speechSynthesis.cancel();
}

/* ───────────────────────── speech recognition ───────────────────────── */

export type SttLang = "en-IN" | "hi-IN" | "es-ES";

export function sttLocaleFor(mode: string): SttLang {
  switch (mode) {
    case "hi":
      return "hi-IN";
    case "sa":
      return "hi-IN"; /* closest supported locale for Sanskrit */
    case "es":
      return "es-ES";
    default:
      return "en-IN"; /* Indian-accent English by default */
  }
}

interface RecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onerror: ((e: { error?: string }) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}

interface SpeechRecognitionEventLike {
  resultIndex: number;
  results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }>;
}

export interface RecognizerHandle {
  stop: () => void;
}

export function listen(
  locale: SttLang,
  handlers: {
    onInterim?: (text: string) => void;
    onError?: (kind: "no-speech" | "not-allowed" | "network" | "aborted" | "unknown") => void;
    /** fired once the recognizer finishes; carries the accumulated final transcript (or null) */
    onEnd?: (finalText: string | null) => void;
  }
): RecognizerHandle | null {
  if (!sttSupported()) return null;
  const w = window as unknown as Record<string, new () => RecognitionLike>;
  const SR = (w.SpeechRecognition || w.webkitSpeechRecognition) as new () => RecognitionLike;

  let finalText: string | null = null;

  const rec = new SR();
  rec.lang = locale;
  rec.continuous = false;
  rec.interimResults = true;
  rec.maxAlternatives = 1;

  rec.onresult = (e) => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const res = e.results[i];
      const alt = res[0];
      if (!alt) continue;
      if (res.isFinal) {
        finalText = (finalText ? `${finalText} ` : "") + alt.transcript.trim();
      } else {
        interim += alt.transcript;
      }
    }
    if (interim) handlers.onInterim?.(interim.trim());
  };
  rec.onerror = (e) => {
    const kind = e.error;
    if (kind === "no-speech") handlers.onError?.("no-speech");
    else if (kind === "not-allowed" || kind === "service-not-allowed") handlers.onError?.("not-allowed");
    else if (kind === "network") handlers.onError?.("network");
    else if (kind === "aborted") handlers.onError?.("aborted");
    else handlers.onError?.("unknown");
  };
  rec.onend = () => handlers.onEnd?.(finalText && finalText.trim() ? finalText.trim() : null);

  try {
    rec.start();
  } catch {
    return null;
  }
  return {
    stop: () => {
      try {
        rec.stop();
      } catch {
        try {
          rec.abort();
        } catch {
          /* ignore */
        }
      }
    },
  };
}
