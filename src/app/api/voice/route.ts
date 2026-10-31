import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

/**
 * SANATAN HI [ HUMAN INTELLIGENCE ] — /api/voice
 *
 * Shloka recitation TTS for the Voice section (player-store based).
 * Uses the SANATANI BABAJI voice parameters (steady, deep narration)
 * with an adjustable pace for practice: slow (0.75) or normal (0.95).
 * Reads the Roman transliteration — the narration engine speaks Latin
 * script reliably.
 */

const MAX_TEXT_LEN = 1024;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text: string = typeof body?.text === "string" ? body.text.trim() : "";
    const speed: number = typeof body?.speed === "number" ? body.speed : 0.9;

    if (!text) {
      return NextResponse.json({ error: "Text is required." }, { status: 400 });
    }
    if (text.length > MAX_TEXT_LEN) {
      return NextResponse.json(
        { error: `Text exceeds the ${MAX_TEXT_LEN}-character limit for one recitation.` },
        { status: 400 }
      );
    }
    const safeSpeed = Math.min(2.0, Math.max(0.5, speed));

    const zai = await ZAI.create();
    const response = await zai.audio.tts.create({
      input: text,
      voice: "xiaochen", /* SANATANI BABAJI — deep, steady pravachan timbre */
      speed: safeSpeed,
      response_format: "wav",
      stream: false,
    });

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(new Uint8Array(arrayBuffer));

    if (buffer.length === 0) {
      return NextResponse.json({ error: "Empty audio was generated." }, { status: 502 });
    }

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/wav",
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("[/api/voice] error:", err);
    return NextResponse.json(
      { error: "The voice engine could not be reached. Please try again." },
      { status: 500 }
    );
  }
}
