"use client";

/**
 * SANATANI BABAJI — the voice assistant persona.
 *
 * Round avatar cropped from the character sheet
 * (saffron robes, white beard, tilak) with mood-based presentation:
 *   idle     — still, ringed in gold
 *   thinking — gentle breathing (while consulting the scriptures)
 *   speaking — pulsing halo ring + equalizer badge
 *   listening — equalizer badge (mic open)
 */

import { cn } from "@/lib/utils";

/* central asset path (production serves at the domain root) */
export const BABAJI_FACE = "/babaji/babaji-face.png";
export const BABAJI_FULL = "/babaji/babaji-full.webp";

export type BabajiMood = "idle" | "thinking" | "speaking" | "listening";

interface BabajiAvatarProps {
  /** rendered size in px (default 36 — matches the chat avatar slot) */
  size?: number;
  mood?: BabajiMood;
  /** decorative gold border ring (default true) */
  ring?: boolean;
  className?: string;
}

export function BabajiAvatar({ size = 36, mood = "idle", ring = true, className }: BabajiAvatarProps) {
  const active = mood === "speaking" || mood === "listening";

  return (
    <div
      className={cn("relative shrink-0 select-none", className)}
      style={{ width: size, height: size }}
    >
      {/* expanding halo while speaking */}
      {mood === "speaking" && (
        <span
          className="babaji-speak-ring pointer-events-none absolute inset-0 rounded-full border-2 border-sanatan-saffron"
          aria-hidden
        />
      )}

      <img
        src={BABAJI_FACE}
        alt="SANATANI BABAJI — सनातनी बाबाजी"
        width={size}
        height={size}
        draggable={false}
        className={cn(
          "h-full w-full rounded-full object-cover",
          ring && "border border-sanatan-gold-2/80",
          mood === "thinking" && "babaji-breathe",
          mood === "speaking" && "babaji-glow"
        )}
      />

      {/* equalizer badge — sound in flight */}
      {active && (
        <span
          className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center gap-[2px] rounded-full border border-sanatan-gold-2/70 bg-sanatan-maroon shadow-sm"
          aria-hidden
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="babaji-eq w-[2px] origin-bottom rounded-full bg-sanatan-gold-2"
              style={{ height: "62%", animationDelay: `${i * 0.16}s` }}
            />
          ))}
        </span>
      )}
    </div>
  );
}
