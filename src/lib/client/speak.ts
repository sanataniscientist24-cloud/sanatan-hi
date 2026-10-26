"use client";

/**
 * SANATAN HI — SANATANI BABAJI voice engine.
 *
 * Babaji speaks with an INDIAN accent, Hindi by default — and ALWAYS as a
 * MAN. MALE-FIRST voice selection, across language tiers:
 *
 *   हिंदी / संस्कृत (Devanagari):
 *     1. known MALE Hindi voice        → Hemant / Madhur / Prabhat / Ravi …
 *     2. known MALE Indian-English      → Rishi (en-IN), text romanized
 *     3. known MALE en-GB / en-US       → "Google UK English Male", David …
 *     4. unknown-gender voices (hi first — might be male)
 *     5. known FEMALE Hindi voice      → LAST browser resort, e.g. Chrome's
 *        lone "Google हिन्दी" on Android: kept only for script correctness,
 *        pitched down to 0.5 to masculinize as far as the engine allows
 *   A guaranteed-male voice ALWAYS beats a female one, even across accents;
 *   Devanagari is romanized for any Latin-script voice so nothing garbles.
 *
 *   English / Español: the same male-first ladder per answer language
 *     (en-IN male → hi-IN male → en-GB/en male; es male when hinted).
 *
 *   LAST RESORT — POST /api/tts server narration (only when the device has
 *     no speech voices at all): deep, steady, romanizes Devanagari itself.
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
 * Voice picking — MALE first, Indian accent first, by design
 * ──────────────────────────────────────────────────────────── */

export type BabajiVoiceGender = "male" | "female" | "unknown";

/**
 * Known MALE voices Babaji prefers — Hindi (Hemant/Madhur/Prabhat/Ravi/
 * Mohan/Kunal), Indian English (Rishi), the classic Windows/Edge men
 * (David/Mark/George…), Chrome's "Google UK English Male", the WebKit men
 * (Daniel/Liam/Arthur/Oliver/Ryan) and Spanish men (Jorge/Álvaro/Diego…).
 */
const MALE_VOICE_RE =
  /hemant|madhur|prabhat|ravi\b|mohan|kunal|ashwin|raja\b|rishi|amit\b|gaurav|david|mark\b|george|guy\b|james|daniel|liam|arthur|oliver|ryan|fred\b|alvaro|álvaro|jorge|diego|pablo|juan|carlos|male\b|पुरुष/i;

/**
 * Known FEMALE voices — Babaji never picks one of these while ANY male or
 * even unknown-gender voice exists. Chrome's only Hindi voice, "Google
 * हिन्दी", is female — that is exactly the trap this table exists to break.
 */
const FEMALE_VOICE_RE =
  /google\s*हिन्दी|google\s*hindi|swara|kalpana|lekha|heera|aditi|kajal|anisha|priya\b|shruti|veena|monica|mónica|paloma|elvira|sabina|paulina|isabela|cecilia|salome|salomé|marisol|sofia|sofía|lucia|lucía|maria|maría|zira|hazel|susan|samantha|victoria|karen|moira|tessa|fiona|serena|catherine|joana|luciana|ayla|eva\b|female|महिला|स्त्री/i;

/** Best guess at a voice's gender from its engine-assigned name. */
export function voiceGender(v: { name?: string }): BabajiVoiceGender {
  const n = `${v?.name ?? ""}`;
  if (FEMALE_VOICE_RE.test(n)) return "female"; /* female first — safety */
  if (MALE_VOICE_RE.test(n)) return "male";
  return "unknown";
}

/** Devanagari-capable BCP-47 prefixes (hi + the sister scripts). */
const DEVA_LANG_RE = /^(hi|mr|ne|sa|sd)(?:[-_]|$)/i;

/**
 * MALE-FIRST scoring, hi mode (हिंदी / संस्कृत). A known male voice of ANY
 * tier beats every unknown/female one; Devanagari is romanized for Latin
 * voices so the shloka still sounds right:
 *   male hi-IN 140 · male en-IN 125 · male en-GB 110 · male en-US 105 ·
 *   unknown hi 70 · female hi 55 · unknown en-IN 50 · unknown en-GB 45 ·
 *   unknown en 40 · male other-lang 30 · female en 12 · anything 10
 */
function hiModeScore(lang: string, gender: BabajiVoiceGender): number {
  const isHi = lang.startsWith("hi");
  const isEnIn = lang.startsWith("en-in");
  const isEnGb = lang.startsWith("en-gb");
  const isEn = lang.startsWith("en");
  if (gender === "male") {
    if (isHi) return 140; /* Hemant / Madhur — perfect Devanagari pravachan */
    if (isEnIn) return 125; /* Rishi — Indian-English male, romanized */
    if (isEnGb) return 110; /* Chrome's "Google UK English Male" */
    if (isEn) return 105; /* David / Mark — deep US male */
    return 30; /* a male voice in another language is not for Hindi */
  }
  if (gender === "female") {
    if (isHi) return 55; /* device's ONLY Hindi voice is female — last resort */
    return 12;
  }
  /* unknown gender — the engine won't tell us; Hindi first (might be male) */
  if (isHi) return 70;
  if (isEnIn) return 50;
  if (isEnGb) return 45;
  if (isEn) return 40;
  return 20;
}

/**
 * MALE-FIRST scoring, latin mode (English default). es-hinted answers keep
 * Spanish voices at the top of the ladder (gender only breaks ties within
 * the es tier) so Babaji never reads Español in an English accent.
 */
function latinModeScore(lang: string, gender: BabajiVoiceGender, langHint?: string): number {
  const isEnIn = lang.startsWith("en-in");
  const isHi = lang.startsWith("hi");
  const isEnGb = lang.startsWith("en-gb");
  const isEn = lang.startsWith("en");
  if (langHint === "es") {
    if (lang.startsWith("es")) {
      if (gender === "male") return 140;
      if (gender === "unknown") return 75;
      return 60; /* female es still says the Spanish right */
    }
    if (gender === "male") return isEn ? 50 : 25;
    return isEn ? 20 : 10;
  }
  if (gender === "male") {
    if (isEnIn) return 140; /* Rishi — Babaji's English voice */
    if (isHi) return 125; /* Hemant reads English with a Hindi accent */
    if (isEnGb) return 110;
    if (isEn) return 105;
    return 30;
  }
  if (gender === "female") {
    if (isEnIn) return 25;
    if (isHi) return 15;
    if (isEn) return 12;
    return 8;
  }
  if (isEnIn) return 60;
  if (isHi) return 45;
  if (isEnGb) return 40;
  if (isEn) return 35;
  if (langHint && lang.startsWith(langHint)) return 30;
  return 10;
}

export interface PickedBabajiVoice {
  voice: SpeechSynthesisVoice;
  gender: BabajiVoiceGender;
  score: number;
}

/**
 * The one true Babaji voice for this device and mode: male-first across
 * language tiers, Indian accent preferred among equals.
 */
export function pickBabajiVoice(
  voices: SpeechSynthesisVoice[],
  mode: "hi" | "latin",
  langHint?: string
): PickedBabajiVoice | null {
  let best: PickedBabajiVoice | null = null;
  for (const v of voices) {
    const lang = (v.lang || "").toLowerCase().replace(/_/g, "-");
    const gender = voiceGender(v);
    const name = (v.name || "").toLowerCase();
    let score = mode === "hi" ? hiModeScore(lang, gender) : latinModeScore(lang, gender, langHint);
    if (/natural|neural|google/.test(name)) score += 4; /* best quality within a tier */
    if (v.localService) score += 1; /* offline-reliable within a tier */
    if (!best || score > best.score) best = { voice: v, gender, score };
  }
  return best;
}

/**
 * The Babaji pitch by gender: men get the 0.72 pravachan depth, unknown
 * voices hedge deeper, and a forced-female voice is pitched down to 0.5 —
 * as deep as engines render cleanly — to sound as masculine as possible.
 */
export function babajiPitch(gender: BabajiVoiceGender): number {
  if (gender === "male") return 0.72;
  if (gender === "female") return 0.5;
  return 0.62;
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

      const picked = pickBabajiVoice(synth.getVoices(), mode, langHint);
      /* support beacon: which voice Babaji chose on this device, and why */
      console.debug(
        `[babaji] voice: ${picked ? `${picked.voice.name} (${picked.voice.lang}) · ${picked.gender} · ${mode}${langHint ? "@" + langHint : ""}` : "none"}`
      );

      /* Devanagari survives only under a Devanagari-capable voice (male Hindi
         voices keep the script); every Latin voice reads it romanized so a
         male en-GB/en-US voice never garbles the shloka */
      const voiceLang = (picked?.voice.lang || "").toLowerCase();
      const spoken =
        picked && !DEVA_LANG_RE.test(voiceLang) && /[\u0900-\u097F]/.test(text)
        ? romanizeDevaRuns(text)
        : text;

      const chunks = chunkSpeech(spoken, 220);
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
          try {
            u.voice = picked.voice;
          } catch {
            /* some engines reject the voice object — fall back to lang-only */
          }
          u.lang = picked.voice.lang || (mode === "hi" ? "hi-IN" : "en-IN");
        } else {
          u.lang = mode === "hi" ? "hi-IN" : "en-IN";
        }
        /* the Babaji signature: deep and unhurried — men at 0.72, a forced
           female voice pitched down hard to sound like Babaji */
        u.pitch = babajiPitch(picked?.gender ?? "unknown");
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
