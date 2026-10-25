"use client";

/**
 * SANATAN HI — SANATANI BABAJI voice engine.
 *
 * Babaji speaks with an INDIAN accent, Hindi by default:
 *
 *   PRIMARY — Web Speech API (the browser's own Indian voices):
 *     • हिंदी / संस्कृत (Devanagari)  → best Indian male hi-IN voice
 *       (Microsoft Hemant / Madhur, Prabhat, Ravi …), deepened + slowed
 *     • English / Español            → Indian-accent en-IN voice first
 *       (Ravi / Madhur / Prabhat), then hi-IN, then en-GB/en as last picks
 *     • no Hindi voice on the device → Devanagari is romanized so Babaji
 *       reads it in his Indian-English accent instead of garbling it
 *
 *   LAST RESORT — POST /api/tts server narration (only when the device has
 *     no usable speech voices): deep, steady, and the route romanizes any
 *     Devanagari itself.
 *
 * The Babaji signature: pitch 0.72 (deep), rate 0.88 (calm, unhurried).
 * Long replies are chunked at sentence boundaries and played sequentially,
 * giving a natural pravachan rhythm. A tiny subscription API surfaces
 * loading/speaking state for the UI (avatar, pill, buttons).
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

/** Romanize Devanagari runs so a Latin-reading voice can handle them. */
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
 * Voice picking — Indian accent first, by design
 * ──────────────────────────────────────────────────────────── */

/** Known male Indian narration voices (Windows/Edge/Chrome/Android). */
const INDIAN_MALE = /hemant|madhur|prabhat|ravi\b|raja\b|ashwin|male\b/i;

interface ScoredVoice {
  voice: SpeechSynthesisVoice;
  score: number;
}

/**
 * Pick the most Babaji-like voice available:
 *   hi mode → Indian male Hindi voices first (Hemant, Madhur, Prabhat)
 *   latin   → Indian-accent English (en-IN) first, then a Hindi voice
 *            reading romanized text, then (only if hinted) es-*, en-*
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
      /* DEFAULT VOICE = HINDI — the device's best Hindi voice wins */
      if (lang.startsWith("hi")) consider(v, 40);
      else if (lang.startsWith("en-in")) consider(v, 24);
      else if (lang.startsWith("en")) consider(v, 8);
    } else {
      if (langHint === "es" && lang.startsWith("es")) {
        consider(v, 30);
        continue;
      }
      /* Indian-accent English is Babaji's English voice */
      if (lang.startsWith("en-in")) consider(v, 34);
      /* a Hindi voice reading romanized Sanskrit/Hindi keeps the accent */
      else if (lang.startsWith("hi")) consider(v, 26);
      else if (lang.startsWith("en-gb")) consider(v, 20);
      else if (lang.startsWith("en")) consider(v, 14);
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
    const timer = setTimeout(done, 900); /* Chrome populates asynchronously */
  });
}

/* ────────────────────────────────────────────────────────────
 * PRIMARY — Web Speech API (Indian-accent Babaji)
 * ──────────────────────────────────────────────────────────── */

type BrowserStatus = "spoken" | "no-voices" | "blocked" | "stopped";

/**
 * Speak with the browser's Indian voices — deep pitch (0.72), calm rate
 * (0.88). Utterances are kept ≤ ~220 chars: many engines hiccup on long
 * ones, and short utterances give Babaji natural breathing pauses.
 * Resolves with the outcome so the caller can fall back to the server.
 */
function speakViaBrowser(
  text: string,
  mode: "hi" | "latin",
  token: number,
  langHint?: string,
  onDone?: () => void
): Promise<BrowserStatus> {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (status: BrowserStatus) => {
      if (!settled) {
        settled = true;
        resolve(status);
      }
    };

    const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
    if (!synth) {
      finish("no-voices"); /* caller decides the fallback; state stays "loading" */
      return;
    }
    setState("loading");

    void voicesReady(synth).then((ready) => {
      if (token !== currentToken) {
        finish("stopped");
        return;
      }
      if (!ready) {
        finish("no-voices"); /* caller falls back to the server narration */
        return;
      }

      let speakMode = mode;
      let speakText = text;
      let picked = pickVoice(synth, speakMode, langHint);

      /* Hindi asked, but this device has no Hindi voice — Babaji reads the
         shloka romanized in his Indian-English accent instead of garbling it */
      if (speakMode === "hi" && (!picked || !picked.voice.lang.toLowerCase().startsWith("hi"))) {
        speakText = romanizeDevaRuns(speakText);
        speakMode = "latin";
        picked = pickVoice(synth, "latin", "en");
      }

      const chunks = chunkSpeech(speakText, 220);
      if (!chunks.length) {
        setState("idle");
        finish("spoken");
        onDone?.();
        return;
      }

      const speakNext = (i: number) => {
        if (token !== currentToken) {
          finish("stopped"); /* stopBabaji/new call already handled the state */
          return;
        }
        if (i >= chunks.length) {
          setState("idle");
          finish("spoken");
          onDone?.(); /* pravachan complete */
          return;
        }

        const u = new SpeechSynthesisUtterance(chunks[i]);
        if (picked) {
          u.voice = picked.voice;
          u.lang = picked.voice.lang || (speakMode === "hi" ? "hi-IN" : "en-IN");
        } else {
          u.lang = speakMode === "hi" ? "hi-IN" : "en-IN";
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
          if (token !== currentToken) {
            finish("stopped");
            return;
          }
          if (i === 0) finish("blocked"); /* nothing was spoken → server fallback */
          else {
            setState("idle");
            finish("spoken"); /* partial pravachan — end gracefully */
            onDone?.();
          }
        };

        try {
          synth.speak(u);
        } catch {
          finish(i === 0 ? "blocked" : "spoken");
          if (i > 0) {
            setState("idle");
            onDone?.();
          }
          return;
        }

        /* watchdog: if the very first utterance never starts (engine
           refused), hand over to the server narration */
        if (i === 0) {
          setTimeout(() => {
            if (!settled && token === currentToken && !started && !synth.speaking) {
              try {
                synth.cancel();
              } catch {
                /* ignore */
              }
              finish("blocked"); /* state stays "loading" — fallback takes over */
            }
          }, 2500);
        }
      };

      speakNext(0);
    });
  });
}

/* ────────────────────────────────────────────────────────────
 * LAST RESORT — server TTS narration (/api/tts)
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
      () => done("blocked") /* autoplay denied */
    );
  });
}

/**
 * Narrate via the server (used only when the browser has no usable Indian
 * voices). The route romanizes any Devanagari itself. Chunks are kept at
 * ~500 chars and prefetched one ahead so synthesis latency overlaps with
 * playback and the first audio starts as soon as possible.
 * Returns true when handled; false when the server is unavailable too.
 */
async function speakViaServer(text: string, token: number, onDone?: () => void): Promise<boolean> {
  const chunks = chunkSpeech(text, 500);
  if (!chunks.length) return true;
  setState("loading");

  const fetchChunk = async (chunk: string): Promise<Blob | "failed" | "stopped"> => {
    if (token !== currentToken) return "stopped";
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: chunk }),
      });
      if (!res.ok) return "failed"; /* static host / server error */
      return await res.blob();
    } catch {
      return "failed";
    }
  };

  try {
    let nextBlob = await fetchChunk(chunks[0]);

    for (let i = 0; i < chunks.length; i++) {
      if (nextBlob === "stopped") return true;
      if (nextBlob === "failed") {
        if (i === 0) return false; /* nothing played yet → caller gives up gracefully */
        break; /* mid-pravachan server hiccup — end what was spoken */
      }
      const current: Blob = nextBlob;

      /* prefetch the next chunk while this one plays */
      const prefetch = i + 1 < chunks.length ? fetchChunk(chunks[i + 1]) : null;

      const result = await playBlob(current, token);
      if (result === "stopped") return true;
      if (result === "blocked" && i === 0) return false;

      if (!prefetch) break; /* last chunk played */
      nextBlob = await prefetch;
    }

    if (token === currentToken) {
      setState("idle");
      onDone?.();
    }
    return true;
  } catch {
    return token !== currentToken; /* stopped counts as handled */
  }
}

/* ────────────────────────────────────────────────────────────
 * Entry point
 * ──────────────────────────────────────────────────────────── */

export interface SpeakOptions {
  /** Answer language hint ("hi" | "en" | "sa" | "es" | "auto") — routes voice choice. */
  langHint?: string;
  /** invoked when the narration finishes naturally (not when stopped). */
  onDone?: () => void;
}

/**
 * SANATANI BABAJI speaks the text in his Indian accent — Hindi by default.
 * Re-entrant: a new call stops any pravachan already in progress.
 */
export async function speakBabaji(raw: string, opts: SpeakOptions = {}): Promise<void> {
  stopBabaji();
  const token = currentToken;

  const clean = cleanForSpeech(raw);
  if (!clean) return;

  const hint = opts.langHint;
  const hiMode = hint === "hi" || hint === "sa" || devanagariRatio(clean) >= 0.3;

  /* PRIMARY — the device's Indian voice: hi-IN for हिंदी/संस्कृत,
     en-IN (Indian English) for Latin scripts */
  const status = await speakViaBrowser(
    clean,
    hiMode ? "hi" : "latin",
    token,
    hiMode ? undefined : hint,
    opts.onDone
  );

  if (status === "spoken" || status === "stopped") return;

  /* LAST RESORT — no usable browser voices: server narration
     (still deep and calm; the route romanizes Devanagari itself) */
  if (token === currentToken) {
    const handled = await speakViaServer(clean, token, opts.onDone);
    if (!handled && token === currentToken) {
      /* neither engine can speak on this host — end gracefully */
      setState("idle");
      opts.onDone?.();
    }
  }
}
