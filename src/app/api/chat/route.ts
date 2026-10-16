import { NextResponse } from "next/server";
import { chat, type ResponseLang } from "@/lib/ai/engine";

export const dynamic = "force-dynamic";

const LANGS: ResponseLang[] = ["hi", "en", "sa"];

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const message = typeof body.message === "string" ? body.message.slice(0, 600) : "";
    const language = LANGS.includes(body.language) ? (body.language as ResponseLang | "auto") : "auto";

    if (!message.trim()) {
      return NextResponse.json(
        { ok: false, error: "message is required" },
        { status: 400 }
      );
    }

    // Fully offline computation — no network, no external model.
    const result = chat(message, language);
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    console.error("[/api/chat] error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal error while consulting the corpus." },
      { status: 500 }
    );
  }
}
