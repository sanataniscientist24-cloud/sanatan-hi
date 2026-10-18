import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

export const dynamic = "force-dynamic";

/* safety caps: 60 s of 16 kHz mono 16-bit WAV ≈ 1.9 MB → ~2.6 MB base64 */
const MAX_BASE64_LEN = 12 * 1024 * 1024;

interface AsrResult {
  text?: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const audio = typeof body.audio_base64 === "string" ? body.audio_base64 : "";

    if (!audio) {
      return NextResponse.json(
        { ok: false, error: "audio_base64 is required" },
        { status: 400 }
      );
    }
    if (audio.length > MAX_BASE64_LEN) {
      return NextResponse.json(
        { ok: false, error: "Recording is too long. Please keep it under a minute." },
        { status: 413 }
      );
    }
    if (!/^[A-Za-z0-9+/]+={0,2}$/.test(audio)) {
      return NextResponse.json(
        { ok: false, error: "Invalid audio data." },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();
    const result = (await zai.audio.asr.create({ file_base64: audio })) as AsrResult;
    const text = (result?.text ?? "").trim();

    if (!text) {
      return NextResponse.json(
        { ok: false, error: "No speech was detected in the recording." },
        { status: 422 }
      );
    }

    return NextResponse.json({ ok: true, text: text.slice(0, 600) });
  } catch (err) {
    console.error("[/api/transcribe] error:", err);
    return NextResponse.json(
      { ok: false, error: "Transcription failed. Please try again." },
      { status: 500 }
    );
  }
}
