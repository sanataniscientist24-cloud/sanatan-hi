"use client";

/**
 * SANATAN HI — SANATANI BABAJI voice engine.
 *
 * Speaks an answer in the deep, calm voice of SANATANI BABAJI:
 *
 *   1. Latin-script text (English / Spanish / romanized Sanskrit)
 *      → server TTS  POST /api/tts  (xiaochen @ 0.85 speed — deep, steady)
 *      → fallback: Web Speech API with deep pitch (0.72) + calm rate (0.88)
 *
 *   2. Devanagari-dominant text (हिंदी / संस्कृत)
 *      → Web Speech API directly with the browser's best Indian voice
 *        (Hemant / Madhur / Prabhat / Ravi …), deepened + slowed, because
 *        the server narration engine cannot pronounce Devanagari.
 *
 * Long replies are chunked at sentence boundaries and played sequentially,
 * giving Babaji a natural, unhurried pravachan rhythm. A tiny subscription
 * API surfaces loading/speaking state for the UI (avatar, pill, buttons).
 */

import { devanagariRatio, devanagariToRoman } from "@/lib/ai/translit";

/* ────────────────────────────────────────────────────────────
 * Public types & state
 * ──────────────────────────────────────────────────────────── */

export type BabajiState = "idle" | "loading" | "speaking";

type Listener = (state: BabajiState) => void;

const listeners = new Set<Listener>();
let currentToken = 0; /* bumped on every stop → stale async chains die out */
const liveAudio = new Set<HTMLAudioElement>();

export function onBabajiState(l: Listener): () => void {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

function setState(state: BabajiState): void {
  for (const l of listeners) l(state);
}

/** Stop Babaji mid-pravachan (or mid-synthesis). Always safe to call. */
export function stopBabaji(): void {
  currentToken++;
  try {
    window.speechSynthesis?.cancel();
  } catch {
    /* ignore */
  }
  for (const a of liveAudio) {
    try {
      a.pause();
      a.removeAttribute("src");
    } catch {
      /* ignore */
    }
  }
  liveAudio.clear();
  setState("idle");
}

/* ────────────────────────────────────────────────────────────
 * Text preparation
 * ──────────────────────────────────────────────────────────── */

/** Markdown / emoji / scripture punctuation → clean spoken prose. */
export function cleanForSpeech(raw: string): string {
  let t = raw;

  /* code blocks & tables carry nothing speakable */
  t = t.replace(/```[\s\S]*?```/g, " ");
  t = t.replace(/^\s*\|.*\|\s*$/gm, " "); /* table rows */

  /* links → their text */
  t = t.replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1");

  /* markdown decorations & brackets */
  t = t.replace(/[*_~`#>|[\]()]/g, " ");

  /* list bullets at line starts */
  t = t.replace(/^\s*[-•–—]\s+/gm, "");

  /* scripture punctuation → sentence pauses */
  t = t.replace(/॥+/g, ". ");
  t = t.replace(/।/g, ". ");

  /* the Om glyph → the word "Om" */
  t = t.replace(/ॐ/g, " Om ");

  /* emoji & decorative symbols */
  t = t.replace(
    /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{2728}\u{1F329}]/gu,
    " "
  );

  return t.replace(/\s+/g, " ").trim();
}

/** Romanize Devanagari runs so the narration engine can voice them. */
function romanizeDevaRuns(t: string): string {
  return t.replace(
    /[\u0900-\u097F]+(?:\s+[\u0900-\u097F]+)*/g,
    (m) => devanagariToRoman(m)
  );
}

/** Split into chunks ≤ maxLen, cutting only at sentence boundaries. */
function chunkSpeech(t: string, maxLen: number): string[] {
  if (t.length <= maxLen) return [t];
  const sentences = t.match(/[^.!?…]+[.!?…]+["»]?|\S[^.!?…]*$/g) ?? [t];
  const parts: string[] = [];
  let cur = "";
  for (const s of sentences) {
    if (cur && (cur + s).length > maxLen) {
      parts.push(cur.trim());
      cur = s;
    } else {
      cur += s;
    }
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts.filter(Boolean);
}

/* ────────────────────────────────────────────────────────────
 * Path 1 — server TTS (deep, steady narration)
 * ──────────────────────────────────────────────────────────── */

function playBlob(blob: Blob, token: number): Promise<"played" | "stopped" | "blocked"> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(blob);
    const audio = new Audio();
    audio.src = url;
    audio.volume = 1;
    liveAudio.add(audio);

    const done = (result: "played" | "stopped" | "blocked") => {
      liveAudio.delete(audio);
      try {
        URL.revokeObjectURL(url);
      } catch {
        /* ignore */
      }
      resolve(result);
    };

    audio.onended = () => done(token === currentToken ? "played" : "stopped");
    audio.onerror = () => done(token === currentToken ? "played" : "stopped"); /* treat as chunk done */

    audio.play().then(
      () => {
        if (token !== currentToken) {
          audio.pause();
          done("stopped");
        } else {
          setState("speaking");
        }
      },
      () => done("blocked") /* autoplay denied → let caller fall back */
    );
  });
}

/**
 * Speak via /api/tts, chunk by chunk.
 * Returns true when handled (spoken or stopped); false when the server
 * path failed and the caller should fall back to Web Speech.
 */
async function speakViaServer(text: string, token: number): Promise<boolean> {
  const chunks = chunkSpeech(text, 900);
  if (!chunks.length) return true;
  setState("loading");

  try {
    let first = true;
    for (const chunk of chunks) {
      if (token !== currentToken) return true;

      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: chunk }),
      });
      if (!res.ok) return false; /* static host / server error → fallback */

      const blob = await res.blob();
      if (token !== currentToken) return true;

      const result = await playBlob(blob, token);
      if (result === "stopped") return true;
      if (result === "blocked" && first) return false; /* autoplay denied → fallback */
      first = false;
    }
    return true;
  } catch {
    return token !== currentToken; /* stopped counts as handled */
  }
}

/* ────────────────────────────────────────────────────────────
 * Path 2 — Web Speech API (Devanagari + universal fallback)
 * ──────────────────────────────────────────────────────────── */

/** Names of known male Indian narration voices, best first. */
const INDIAN_MALE = /hemant|madhur|prabhat|ravi\b|raja\b|kumar|ashwin|male\b/i;

interface ScoredVoice {
  voice: SpeechSynthesisVoice;
  score: number;
}

/**
 * Pick the most Babaji-like voice available:
 *   hi mode → Indian male Hindi voices first (Hemant, Madhur, Prabhat, Ravi)
 *   latin   → English (India) male voices, then es-* if hinted, then en-*
 */
function pickVoice(synth: SpeechSynthesis, mode: "hi" | "latin", langHint?: string): ScoredVoice | null {
  const voices = synth.getVoices();
  if (!voices.length) return null;
  let best: ScoredVoice | null = null;

  const consider = (voice: SpeechSynthesisVoice, score: number) => {
    const maleBonus = INDIAN_MALE.test(voice.name) ? 6 : 0;
    const total = score + maleBonus;
    if (!best || total > best.score) best = { voice, score: total };
  };

  for (const v of voices) {
    const lang = (v.lang || "").toLowerCase().replace("_", "-");
    if (mode === "hi") {
      if (lang.startsWith("hi")) consider(v, 40);
      else if (lang.startsWith("en-in")) consider(v, 24);
      else if (lang.startsWith("en")) consider(v, 8);
    } else {
      if (langHint === "es" && lang.startsWith("es")) {
        consider(v, lang.startsWith("es-in") ? 20 : 30);
        continue;
      }
      if (lang.startsWith("en-in")) consider(v, 34);
      else if (lang.startsWith("en-gb")) consider(v, 20);
      else if (lang.startsWith("en")) consider(v, 14);
      else if (lang.startsWith("hi")) consider(v, 26); /* Hindi voice can read romanized Sanskrit */
      else if (langHint && lang.startsWith(langHint)) consider(v, 18);
    }
  }
  return best;
}

async function voicesReady(synth: SpeechSynthesis): Promise<boolean> {
  if (synth.getVoices().length) return true;
  return new Promise((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(synth.getVoices().length > 0);
    };
    const cleanup = () => {
      synth.removeEventListener?.("voiceschanged", done);
      clearTimeout(timer);
    };
    synth.addEventListener?.("voiceschanged", done);
    const timer = setTimeout(done, 700); /* Chrome populates asynchronously */
  });
}

/**
 * Speak with the browser's speech synthesis — deep pitch, calm rate.
 * Utterances are kept ≤ ~220 chars: many engines hiccup on long ones,
 * and short utterances give Babaji natural breathing pauses.
 */
function speakViaBrowser(text: string, mode: "hi" | "latin", token: number, langHint?: string): void {
  const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
  if (!synth) {
    setState("idle");
    return;
  }
  setState("loading");

  void voicesReady(synth).then((ready) => {
    if (token !== currentToken) return;
    if (!ready) {
      setState("idle");
      return;
    }

    const picked = pickVoice(synth, mode, langHint);
    const chunks = chunkSpeech(text, 220);
    if (!chunks.length) {
      setState("idle");
      return;
    }

    const speakNext = (i: number) => {
      if (token !== currentToken) return; /* stopped */
      if (i >= chunks.length) {
        setState("idle");
        return;
      }
      const u = new SpeechSynthesisUtterance(chunks[i]);
      if (picked) {
        u.voice = picked.voice;
        u.lang = picked.voice.lang || (mode === "hi" ? "hi-IN" : "en-IN");
      } else {
        u.lang = mode === "hi" ? "hi-IN" : "en-IN";
      }
      /* the Babaji signature: deep and unhurried */
      u.pitch = 0.72;
      u.rate = 0.88;
      u.volume = 1;

      let started = false;
      u.onstart = () => {
        started = true;
        setState("speaking");
      };
      u.onend = () => {
        if (token !== currentToken) return;
        speakNext(i + 1);
      };
      u.onerror = () => {
        if (token !== currentToken) return;
        setState("idle");
      };

      synth.speak(u);

      /* watchdog: some engines silently refuse after non-gesture contexts;
         if nothing starts in 2.5 s, stop gracefully */
      setTimeout(() => {
        if (token === currentToken && !started && !synth.speaking) {
          try {
            synth.cancel();
          } catch {
            /* ignore */
          }
          setState("idle");
        }
      }, 2500);
      void started;
    };

    speakNext(0);
  });
}

/* ────────────────────────────────────────────────────────────
 * Entry point
 * ──────────────────────────────────────────────────────────── */

export interface SpeakOptions {
  /** Answer language hint ("hi" | "en" | "sa" | "es" | "auto") — routes fallbacks. */
  langHint?: string;
}

/**
 * SANATANI BABAJI speaks the text. Re-entrant: a new call stops any
 * pravachan already in progress.
 */
export async function speakBabaji(raw: string, opts: SpeakOptions = {}): Promise<void> {
  stopBabaji();
  const token = currentToken;

  const clean = cleanForSpeech(raw);
  if (!clean) return;

  const hint = opts.langHint;
  const hiMode = hint === "hi" || hint === "sa" || devanagariRatio(clean) >= 0.3;

  if (hiMode) {
    speakViaBrowser(clean, "hi", token);
    return;
  }

  const speakable = romanizeDevaRuns(clean);
  const handled = await speakViaServer(speakable, token);
  if (!handled && token === currentToken) {
    speakViaBrowser(speakable, "latin", token, hint);
  }
}
