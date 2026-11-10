import { NextResponse } from "next/server";
import { chat, type ResponseLang } from "@/lib/ai/engine";
import { generateLLMReply } from "@/lib/ai/llm";

/**
 * SANATAN HI — /api/chat
 *
 * The main scripture-chat route. Two layers of resilience:
 *
 *   1. The offline retrieval engine ALWAYS runs first — it is instant,
 *      free, and returns the relevant verses + citations + intent +
 *      language detection + a baseline reply. This guarantees the user
 *      gets a real, scripture-grounded answer no matter what.
 *
 *   2. The z.ai LLM (free model) is then called with those verses as
 *      grounding context. If it succeeds, its reply replaces the offline
 *      reply (the verses / suggestions / lang from step 1 are kept, so
 *      the UI's verse cards and chips still render). If z.ai is
 *      unavailable, rate-limited, unconfigured or times out, the offline
 *      reply is returned as-is — zero downtime.
 *
 * The response carries an `engine` field: "llm" when z.ai answered,
 * "offline" when it fell back. The shape otherwise matches ChatResult so
 * the existing client (src/lib/client/ask.ts) needs no changes.
 *
 * On a static export (GitHub Pages) this route is stripped — the client's
 * askSanatan() then falls back to running the offline engine in the browser.
 * For z.ai-powered 24×7 answers, serve this route from the Coolify / VPS
 * deploy (see DEPLOY-COOLIFY.md).
 */
export const dynamic = "force-dynamic";

const LANGS: ResponseLang[] = ["hi", "en", "sa", "es"];

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const message = typeof body.message === "string" ? body.message.slice(0, 600) : "";
    const language = LANGS.includes(body.language)
      ? (body.language as ResponseLang | "auto")
      : "auto";

    if (!message.trim()) {
      return NextResponse.json(
        { ok: false, error: "message is required" },
        { status: 400 }
      );
    }

    // 1 — offline engine: scripture retrieval + intent + lang + baseline reply
    const result = chat(message, language);

    // 2 — z.ai LLM, grounded in the retrieved verses (free model by default).
    //    Operator can pin a model via ZAI_CHAT_MODEL, or disable via
    //    ZAI_CHAT_ENABLED=0 for a pure-offline server.
    const model = process.env.ZAI_CHAT_MODEL || undefined;
    const llmReply = await generateLLMReply(message, language, result, { model });

    if (llmReply) {
      return NextResponse.json({
        ok: true,
        ...result,
        reply: llmReply,
        engine: "llm",
      });
    }

    // 3 — z.ai unavailable / rate-limited → offline reply (always works)
    return NextResponse.json({
      ok: true,
      ...result,
      engine: "offline",
    });
  } catch (err) {
    console.error("[/api/chat] error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal error while consulting the corpus." },
      { status: 500 }
    );
  }
}
