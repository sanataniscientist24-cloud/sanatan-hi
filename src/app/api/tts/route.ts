import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import { devanagariToRoman, hasDevanagari } from "@/lib/ai/translit";

export const dynamic = "force-dynamic";

/**
 * SANATANI BABAJI voice — server-side text-to-speech.
 *
 * Narrates an answer in the deep, calm "pravachan" voice:
 *   voice  = xiaochen  (steady, deep narration timbre)
 *   speed  = 0.85      (calm, unhurried delivery)
 *
 * The narration engine speaks Latin script, so any Devanagari runs in the
 * text are romanized first (कर्म → "karma") — Hindi/Sanskrit-dominant text
 * is instead spoken client-side via the browser's Hindi voice
 * (see src/lib/client/speak.ts).
 */

const MAX_TEXT_LEN = 1024; /* TTS backend limit */
const BABAJI_VOICE = "xiaochen";
const BABAJI_SPEED = 0.85;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    let text = typeof body.text === "string" ? body.text : "";

    if (!text.trim()) {
      return NextResponse.json({ ok: false, error: "text is required" }, { status: 400 });
    }
    if (text.length > MAX_TEXT_LEN) {
      text = text.slice(0, MAX_TEXT_LEN);
    }

    /* scripture punctuation → soft pauses */
    text = text.replace(/[॥।]/g, ". ");

    /* romanize stray Devanagari so Sanskrit terms are voiced, not garbled */
    if (hasDevanagari(text)) {
      text = text.replace(/[\u0900-\u097F]+(?:\s+[\u0900-\u097F]+)*/g, (m) => devanagariToRoman(m));
    }

    text = text.replace(/\s+/g, " ").trim();
    if (!text) {
      return NextResponse.json(
        { ok: false, error: "Nothing speakable in the text." },
        { status: 422 }
      );
    }

    const zai = await ZAI.create();
    const response = await zai.audio.tts.create({
      input: text,
      voice: BABAJI_VOICE,
      speed: BABAJI_SPEED,
      response_format: "wav",
      stream: false,
    });

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(new Uint8Array(arrayBuffer));

    if (!buffer.length) {
      return NextResponse.json(
        { ok: false, error: "Voice synthesis returned no audio." },
        { status: 502 }
      );
    }

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/wav",
        "Content-Length": String(buffer.length),
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("[/api/tts] error:", err);
    return NextResponse.json(
      { ok: false, error: "Voice synthesis failed." },
      { status: 500 }
    );
  }
}
