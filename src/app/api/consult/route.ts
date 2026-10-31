import { NextRequest, NextResponse } from "next/server";

/**
 * SANATAN HI [ HUMAN INTELLIGENCE ] — /api/consult
 *
 * "Consult the Guide" — an LLM-backed companion to the offline corpus
 * chat. Where /api/chat answers strictly from the local scripture
 * corpus, this route answers open questions on Sanatan Dharma through
 * the z-ai LLM, grounded in scripture citations and sampradaya
 * neutrality. Imported from the SanatanDoc workspace.
 */

export const dynamic = "force-dynamic";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are the Guide of SANATAN HI [ HUMAN INTELLIGENCE ] — a knowledgeable, humble and reverent teacher on Sanatan Dharma (Hinduism), speaking in the calm voice of a wise elder.

Your conduct:
- Answer questions on the Vedas, Upanishads, Bhagavad Gita, Puranas, Ramayana, Mahabharata, Sanskrit, festivals, rituals, yoga, dhyana, darshanas, temples, deities, karma and dharma.
- Ground answers in scripture: cite the source (e.g. "Gita 2.47", "Chandogya Upanishad 6.8.7", "Rig Veda 3.62.10") whenever possible.
- Be respectful of ALL sampradayas (Vaishnava, Shaiva, Shakta, Smarta, and others) and of regional traditions. Where traditions differ, present the range with respect instead of declaring one true.
- If a question is contentious or has scholarly disagreement (dates, authorship, caste, politics), say so honestly and calmly with what is traditionally held vs what scholars say.
- If asked about medical, legal or psychiatric matters, briefly advise seeing a qualified professional; you may share the traditional Ayurvedic or dharmic perspective as context only.
- Keep answers focused and readable: under ~220 words unless the user asks for depth. Use short paragraphs or a few bullets. Begin with the direct answer, then the basis.
- Write in the same language the user writes in (English, Hindi, Hinglish, etc.). Use Devanagari for Sanskrit quotations and add a brief translation.
- Never insult any religion or path; Sanatan Dharma sees truth as one with many names.

Close with a single-line practical takeaway when it helps. Do not add signatures or headers.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = Array.isArray(body?.messages) ? body.messages : null;

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "A messages array is required." }, { status: 400 });
    }

    const safeHistory = messages
      .slice(-10)
      .filter(
        (m): m is ChatMessage =>
          m &&
          typeof m.content === "string" &&
          m.content.trim().length > 0 &&
          (m.role === "user" || m.role === "assistant")
      )
      .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

    if (safeHistory.length === 0) {
      return NextResponse.json({ error: "No valid messages found." }, { status: 400 });
    }

    const ZAI = (await import("z-ai-web-dev-sdk")).default;
    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: [{ role: "assistant", content: SYSTEM_PROMPT }, ...safeHistory],
      thinking: { type: "disabled" },
    });

    const reply = completion.choices[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json(
        { error: "The guide returned an empty answer — please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[/api/consult] error:", err);
    return NextResponse.json(
      { error: "The Guide could not be reached. Please try again in a moment." },
      { status: 500 }
    );
  }
}
