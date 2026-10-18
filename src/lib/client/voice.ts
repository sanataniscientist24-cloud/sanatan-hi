"use client";

/**
 * SANATAN HI — voice input for the chat.
 *
 * Records microphone audio with the Web Audio API, encodes it as a compact
 * 16 kHz mono 16-bit WAV entirely in the browser, then POSTs it as base64 to
 * /api/transcribe where the server-side ASR (z-ai-web-dev-sdk) turns it into
 * text. WAV was chosen over MediaRecorder's webm/opus because every ASR
 * backend reliably accepts PCM WAV, and 16 kHz mono keeps the payload tiny
 * (~32 KB per second of speech).
 */

const TARGET_RATE = 16000;

/* ────────────────────────────────────────────────────────────
 * Feature detection
 * ──────────────────────────────────────────────────────────── */

export function isVoiceSupported(): boolean {
  if (typeof window === "undefined") return false;
  return (
    typeof navigator !== "undefined" &&
    !!navigator.mediaDevices?.getUserMedia &&
    !!(window.AudioContext ?? (window as unknown as { webkitAudioContext?: unknown }).webkitAudioContext)
  );
}

/* ────────────────────────────────────────────────────────────
 * PCM helpers (Float32 → downsample → 16-bit WAV)
 * ──────────────────────────────────────────────────────────── */

function downsample(input: Float32Array, fromRate: number, toRate: number): Float32Array {
  if (toRate >= fromRate) return input;
  const ratio = fromRate / toRate;
  const length = Math.floor(input.length / ratio);
  const output = new Float32Array(length);
  for (let i = 0; i < length; i++) {
    const pos = i * ratio;
    const idx = Math.floor(pos);
    const frac = pos - idx;
    const a = input[idx] ?? 0;
    const b = input[idx + 1] ?? a;
    output[i] = a + (b - a) * frac; /* linear interpolation */
  }
  return output;
}

function writeAscii(view: DataView, offset: number, text: string) {
  for (let i = 0; i < text.length; i++) view.setUint8(offset + i, text.charCodeAt(i));
}

function encodeWav(samples: Float32Array, sampleRate: number): Blob {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  writeAscii(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeAscii(view, 8, "WAVE");
  writeAscii(view, 12, "fmt ");
  view.setUint32(16, 16, true); /* PCM chunk size        */
  view.setUint16(20, 1, true); /* linear PCM            */
  view.setUint16(22, 1, true); /* mono                  */
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true); /* byte rate      */
  view.setUint16(32, 2, true); /* block align           */
  view.setUint16(34, 16, true); /* bits per sample       */
  writeAscii(view, 36, "data");
  view.setUint32(40, samples.length * 2, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return new Blob([buffer], { type: "audio/wav" });
}

async function blobToBase64(blob: Blob): Promise<string> {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let binary = "";
  const CHUNK = 0x8000; /* avoid String.fromCharCode arg limits */
  for (let i = 0; i < bytes.length; i += CHUNK) {
    binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
  }
  return btoa(binary);
}

/* ────────────────────────────────────────────────────────────
 * Recorder
 * ──────────────────────────────────────────────────────────── */

interface AudioContextCtor {
  new (opts?: AudioContextOptions): AudioContext;
}

export class VoiceRecorder {
  private ctx: AudioContext | null = null;
  private stream: MediaStream | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private processor: ScriptProcessorNode | null = null;
  private sink: GainNode | null = null;
  private chunks: Float32Array[] = [];
  private samples = 0;

  /** Live input level (0…1) for the UI meter — updated per audio block. */
  level = 0;

  get recording(): boolean {
    return this.processor !== null;
  }

  /**
   * Start capturing. Must be invoked directly from a user gesture so iOS
   * Safari lets the AudioContext run — create the context synchronously
   * *before* awaiting the permission prompt.
   */
  async start(): Promise<void> {
    const AC = (window.AudioContext ??
      (window as unknown as { webkitAudioContext: AudioContextCtor }).webkitAudioContext) as AudioContextCtor;

    this.ctx = new AC();
    if (this.ctx.state === "suspended") void this.ctx.resume();

    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });

    this.source = this.ctx.createMediaStreamSource(this.stream);
    this.processor = this.ctx.createScriptProcessor(4096, 1, 1);
    this.chunks = [];
    this.samples = 0;

    this.processor.onaudioprocess = (e) => {
      /* copy immediately — the browser reuses the underlying buffer */
      const block = e.inputBuffer.getChannelData(0);
      this.chunks.push(new Float32Array(block));
      this.samples += block.length;

      /* rough RMS level for the live meter */
      let sum = 0;
      for (let i = 0; i < block.length; i += 8) sum += block[i] * block[i];
      this.level = Math.min(1, Math.sqrt(sum / (block.length / 8)) * 4);
    };

    this.source.connect(this.processor);
    /* ScriptProcessor only fires when connected to a destination — route
       through a zero-gain node so nothing is played back. */
    this.sink = this.ctx.createGain();
    this.sink.gain.value = 0;
    this.processor.connect(this.sink);
    this.sink.connect(this.ctx.destination);
  }

  /** Stop and return the encoded WAV (base64) plus duration in seconds. */
  async stop(): Promise<{ base64: string; durationSec: number }> {
    const rate = this.ctx?.sampleRate ?? 48000;
    const collected = this.samples;
    const chunks = this.chunks;
    this.teardown();

    const merged = new Float32Array(collected);
    let offset = 0;
    for (const c of chunks) {
      merged.set(c, offset);
      offset += c.length;
    }

    const pcm = downsample(merged, rate, TARGET_RATE);
    const wav = encodeWav(pcm, TARGET_RATE);
    return {
      base64: await blobToBase64(wav),
      durationSec: collected / rate,
    };
  }

  /** Discard everything without encoding. */
  abort(): void {
    this.teardown();
  }

  private teardown(): void {
    if (this.processor) this.processor.onaudioprocess = null;
    try { this.source?.disconnect(); } catch { /* ignore */ }
    try { this.processor?.disconnect(); } catch { /* ignore */ }
    try { this.sink?.disconnect(); } catch { /* ignore */ }
    this.processor = null;
    this.source = null;
    this.sink = null;
    this.chunks = [];
    this.samples = 0;
    this.level = 0;

    this.stream?.getTracks().forEach((t) => t.stop());
    this.stream = null;
    if (this.ctx && this.ctx.state !== "closed") void this.ctx.close();
    this.ctx = null;
  }
}

/* ────────────────────────────────────────────────────────────
 * Transcription
 * ──────────────────────────────────────────────────────────── */

export interface TranscribeResult {
  text: string;
}

/** Human-friendly error for every failure mode the UI can hit. */
export class VoiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "VoiceError";
  }
}

export async function transcribeAudio(base64: string): Promise<string> {
  let res: Response;
  try {
    res = await fetch("/api/transcribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ audio_base64: base64 }),
    });
  } catch {
    throw new VoiceError("Voice input could not reach the server. Check your connection and try again.");
  }

  let data: { ok?: boolean; text?: string; error?: string } = {};
  try {
    data = (await res.json()) as typeof data;
  } catch {
    data = {};
  }

  if (res.ok && data.ok && data.text) return data.text;
  if (res.status === 422) throw new VoiceError("No speech was heard — hold the mic a little longer and speak clearly.");
  if (res.status === 404 || res.status === 405) {
    throw new VoiceError("Voice input is unavailable on this static deployment.");
  }
  throw new VoiceError(data.error ?? "Transcription failed. Please try again.");
}
