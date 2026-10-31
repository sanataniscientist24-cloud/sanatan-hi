"use client";

/**
 * SANATAN HI — Shloka Voice (SanatanDoc view, ported).
 *
 * Listen to the mantras: server-side Babaji TTS rendered into the
 * global player (pause / resume / progress), with a slow pace for
 * practice and a normal pace for listening.
 */

import { useState } from "react";
import { Volume2, Loader2, Play, Pause, Square, Waves } from "lucide-react";
import { SHLOKAS, type Shloka } from "@/lib/sanatan-voice";
import { Button } from "@/components/ui/button";
import { usePlayerStore } from "@/lib/player-store";
import { useToast } from "@/hooks/use-toast";

function fmtTime(s: number): string {
  if (!Number.isFinite(s) || s <= 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function VoiceView() {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [speed, setSpeed] = useState<"slow" | "normal">("slow");
  const player = usePlayerStore();
  const { toast } = useToast();

  const listen = async (s: Shloka) => {
    if (loadingId) return;
    if (player.currentTitle === s.title) {
      player.toggle();
      return;
    }
    setLoadingId(s.id);
    /* switching track — stop the old one first */
    if (player.currentTitle) player.stop();
    try {
      const res = await fetch("/api/voice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: s.translit, speed: speed === "slow" ? 0.75 : 0.95 }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "The voice engine could not be reached.");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      player.play(s.title, url);
    } catch (e) {
      toast({
        title: "Recitation unavailable",
        description: e instanceof Error ? e.message : "Please try again in a moment.",
      });
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="sanatan-fade">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
            <Waves className="h-4 w-4 text-sanatan-gold" />
            Shloka Voice
          </h2>
          <p className="text-xs text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
            Listen to the mantras — Sanskrit with translation, recited for your practice
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-sanatan-maroon/55 dark:text-sanatan-maroon/65">
            Pace
          </span>
          <div className="flex rounded-lg border border-sanatan-gold-2/60 bg-sanatan-parchment p-0.5">
            {(["slow", "normal"] as const).map((sp) => (
              <button
                key={sp}
                onClick={() => setSpeed(sp)}
                aria-pressed={speed === sp}
                className={`rounded-md px-2.5 py-1 text-[11px] font-semibold capitalize transition ${
                  speed === sp
                    ? "bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2"
                    : "text-sanatan-maroon/65 hover:text-sanatan-maroon-2 dark:text-sanatan-maroon/75"
                }`}
              >
                {sp}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* now playing bar */}
      {player.currentTitle && (
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-sanatan-saffron/60 bg-sanatan-gold/10 px-4 py-3">
          <button
            onClick={player.toggle}
            className="om-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2"
            aria-label={player.isPlaying ? "Pause" : "Play"}
          >
            {player.isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : player.isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-sanatan-maroon-2 dark:text-sanatan-maroon">
              {player.currentTitle}
            </p>
            <div className="mt-1.5 flex items-center gap-2">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-sanatan-cream-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sanatan-saffron to-sanatan-gold transition-[width] duration-300"
                  style={{ width: `${player.progress}%` }}
                />
              </div>
              <span className="shrink-0 font-mono text-[10px] tabular-nums text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
                {fmtTime(player.currentTime)} / {fmtTime(player.duration)} · {Math.round(player.progress)}%
              </span>
            </div>
          </div>
          <button
            onClick={player.stop}
            className="rounded-lg p-2 text-sanatan-maroon/50 transition hover:bg-sanatan-gold/15 hover:text-sanatan-maroon"
            aria-label="Stop"
          >
            <Square className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* shloka cards */}
      <div className="grid gap-2.5 md:grid-cols-2">
        {SHLOKAS.map((s) => {
          const isThis = player.currentTitle === s.title;
          return (
            <div
              key={s.id}
              className={`rounded-xl border p-4 transition-colors ${
                isThis
                  ? "border-sanatan-saffron/70 bg-sanatan-gold/[0.08]"
                  : "border-sanatan-gold-2/60 bg-sanatan-parchment hover:border-sanatan-gold/70"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[13px] font-semibold text-sanatan-maroon-2 dark:text-sanatan-maroon">{s.title}</h3>
                <Button
                  size="sm"
                  onClick={() => listen(s)}
                  disabled={loadingId !== null}
                  className={`h-8 shrink-0 gap-1.5 rounded-lg text-[11px] font-semibold ${
                    isThis
                      ? "bg-sanatan-gold/15 text-sanatan-saffron-2 hover:bg-sanatan-gold/25 dark:text-sanatan-gold"
                      : "bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2 hover:from-sanatan-maroon-2 hover:to-sanatan-maroon"
                  }`}
                >
                  {loadingId === s.id ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" /> Generating
                    </>
                  ) : isThis && player.isPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5" /> Pause
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-3.5 w-3.5" /> Listen
                    </>
                  )}
                </Button>
              </div>

              <p className="font-deva mt-2.5 text-[14px] leading-relaxed text-sanatan-maroon-2 dark:text-sanatan-gold">
                {s.sanskrit}
              </p>
              <p className="mt-1.5 text-[11px] italic leading-relaxed text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
                {s.translit}
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-sanatan-maroon/85 dark:text-sanatan-maroon/85">
                “{s.meaning}”
              </p>

              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-sanatan-gold-2/40 pt-2.5 text-[10px]">
                <span className="text-sanatan-saffron-2/90 dark:text-sanatan-gold/90">— {s.source}</span>
                <span className="text-sanatan-maroon/50 dark:text-sanatan-maroon/60">· {s.benefit}</span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-center text-[10px] leading-relaxed text-sanatan-maroon/50 dark:text-sanatan-maroon/60">
        Recitation is computer-generated from the transliteration — for mantra diksha and precise
        swara, learn at the feet of a tradition-holder.
      </p>
    </div>
  );
}
