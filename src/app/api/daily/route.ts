import { NextResponse } from "next/server";
import { dailyVerse } from "@/lib/ai/engine";
import { CORPUS_STATS } from "@/lib/corpus";

export const dynamic = "force-dynamic";

/** Verse of the day — deterministic, fully offline. */
export async function GET() {
  try {
    const verse = dailyVerse();
    return NextResponse.json({ ok: true, verse, stats: CORPUS_STATS });
  } catch (err) {
    console.error("[/api/daily] error:", err);
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}
