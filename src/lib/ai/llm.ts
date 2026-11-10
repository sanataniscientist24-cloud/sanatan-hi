/**
 * SANATAN HI — LLM-augmented chat helper.
 *
 * Wraps the z-ai-web-dev-sdk chat.completions endpoint so the main
 * `/api/chat` route can answer with a generative LLM (free z.ai model)
 * grounded in the offline scripture corpus.
 *
 * Design goals:
 *  - **Always answers.** If z.ai is unreachable / rate-limited / unconfigured,
 *    the caller falls back to the offline engine's reply — zero downtime.
 *  - **Scripture-grounded.** The offline retrieval engine runs first and
 *    feeds the most relevant verses (Sanskrit + translations + citations)
 *    into the LLM prompt as context, so answers cite real shlokas.
 *  - **Multilingual.** Replies in the user's chosen language; Devanagari
 *    for Sanskrit quotations.
 *  - **Free-tier friendly.** Uses the SDK's default (free) model unless
 *    `ZAI_CHAT_MODEL` overrides it; a 12 s timeout keeps the request snappy
 *    and lets the offline fallback take over on slow failures.
 *
 * Server-only. Never import this (or z-ai-web-dev-sdk) from a client module.
 */

import type { ChatResult, ResponseLang } from "./engine";

export interface LLMReplyOptions {
  /** override the default (free) model, e.g. "glm-4-flash" */
  model?: string;
  /** how many retrieved verses to feed as context (default 4) */
  maxVerses?: number;
  /** abort after this many ms (default 12000) */
  timeoutMs?: number;
}

const LANG_LABEL: Record<ResponseLang, string> = {
  hi: "Hindi (Devanagari)",
  en: "English",
  sa: "Sanskrit in Devanagari with a brief Hindi gloss",
  es: "Spanish",
};

const SYSTEM_PROMPT = `You are SANATANI BABAJI — the gentle, wise elder of SANATAN HI [ HUMAN INTELLIGENCE ], a guide on Sanatan Dharma (Hinduism).

Your conduct:
- Answer questions on the Vedas, Upanishads, Bhagavad Gita, Puranas, Ramayana, Mahabharata, Sanskrit, festivals, rituals, yoga, dhyana, darshanas, temples, deities, karma and dharma.
- When scripture context is provided below, ground your answer in it: quote the Sanskrit (in Devanagari) and cite the source precisely (e.g. "गीता २.४७", "Bhagavad Gita 2.47", "Chandogya Upanishad 6.8.7", "Rig Veda 3.62.10").
- Be respectful of ALL sampradayas (Vaishnava, Shaiva, Shakta, Smarta and others) and regional traditions. Where they differ, present the range with reverence instead of declaring one true.
- If a question has scholarly disagreement (dates, authorship, caste, politics), say so calmly — what is traditionally held vs what scholars say.
- For medical, legal or psychiatric matters, briefly advise seeing a qualified professional; you may share the traditional Ayurvedic / dharmic view as context only.
- Keep answers focused and readable: ~150–200 words, short paragraphs or a few bullets. Begin with the direct answer, then the scriptural basis.
- Write in the user's language (Hindi/English/Hinglish/Spanish). Always use Devanagari for Sanskrit quotations and add a short translation.
- Never insult any religion or path; Sanatan Dharma holds that truth is one, sages name it many ways ("एकं सद्विप्रा बहुधा वदन्ति" — Rig Veda 1.164.46).

Close with a single-line practical takeaway when it helps. No signatures or headers.`;

/**
 * Call the z.ai LLM with scripture-grounded context.
 *
 * @returns the LLM reply string, or `null` if z.ai is unavailable,
 *          unconfigured, rate-limited, or timed out — so the caller can
 *          fall back to the offline engine reply without surfacing an error.
 */
export async function generateLLMReply(
  message: string,
  lang: ResponseLang | "auto",
  context: ChatResult,
  opts: LLMReplyOptions = {}
): Promise<string | null> {
  const maxVerses = opts.maxVerses ?? 4;
  const timeoutMs = opts.timeoutMs ?? 12_000;

  // Allow operators to force the LLM off (pure-offline server) via env.
  if (process.env.ZAI_CHAT_ENABLED === "0") return null;

  try {
    const ZAI = (await import("z-ai-web-dev-sdk")).default;
    const zai = await ZAI.create();

    // Build the scripture-context block from the offline retrieval results.
    const verses = context.verses.slice(0, maxVerses);
    const ctxBlock = verses.length
      ? verses
          .map((v, i) => {
            const head = `${i + 1}. ${v.section ?? v.title ?? v.bookId}${v.chapter ? ` · ${v.chapter}` : ""}${v.verse ? ` · ${v.verse}` : ""}  [id: ${v.id}]`;
            const lines = [head];
            if (v.sanskrit) lines.push(`   संस्कृतम्: ${v.sanskrit}`);
            if (v.translit) lines.push(`   IAST: ${v.translit}`);
            // include both translations so the LLM can mirror the user's language
            lines.push(`   हिंदी: ${v.hindi}`);
            lines.push(`   English: ${v.english}`);
            return lines.join("\n");
          })
          .join("\n\n")
      : "(no directly matching verse was retrieved — answer from the broader tradition, citing scripture where you can.)";

    const langLine =
      lang === "auto"
        ? "Reply in the SAME language the user wrote in (Hindi, English, Hinglish, etc.). Always use Devanagari for Sanskrit quotations with a one-line translation."
        : `Reply primarily in ${LANG_LABEL[lang]}. Always use Devanagari for Sanskrit quotations with a one-line translation.`;

    const userContent = `Scripture context retrieved for this question (from the SANATAN HI offline corpus):
${ctxBlock}

User's question: ${message}

Instructions:
- Ground your answer in the verses above; quote the Sanskrit and cite the source.
- ${langLine}
- Keep it focused (~150–200 words). Begin with the direct answer, then the basis.
- If the verses only partially answer, share the traditional view and cite what you can. Do not invent verse numbers.`;

    // Race the completion against a timeout so a slow/stuck z.ai doesn't hang
    // the request — the offline fallback then takes over.
    const completion = await Promise.race([
      zai.chat.completions.create({
        messages: [
          { role: "assistant", content: SYSTEM_PROMPT },
          { role: "user", content: userContent },
        ],
        ...(opts.model ? { model: opts.model } : {}),
        thinking: { type: "disabled" },
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("z.ai timeout")), timeoutMs)
      ),
    ]);

    const reply = completion?.choices?.[0]?.message?.content?.trim();
    return reply && reply.length > 0 ? reply : null;
  } catch (err) {
    // Rate limit, quota, no .z-ai-config, network, or timeout — all land here.
    // Log once for the operator; the caller falls back to the offline reply
    // so the end user always gets an answer.
    console.error("[llm] z.ai chat failed — falling back to offline engine:", err);
    return null;
  }
}
