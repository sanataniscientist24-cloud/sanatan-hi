"use client";

import {
  BookOpen,
  Flame,
  Flower2,
  Landmark,
  Moon,
  Scroll,
  Shield,
  Sparkles,
  Star,
  Sun,
  Swords,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  scroll: Scroll,
  sun: Sun,
  sword: Swords,
  flame: Flame,
  moon: Moon,
  shield: Shield,
  book: BookOpen,
  lotus: Flower2,
  star: Star,
  sparkles: Sparkles,
  landmark: Landmark,
};

export function BookIcon({ icon, className }: { icon: string; className?: string }) {
  const Cmp = ICONS[icon] ?? BookOpen;
  return <Cmp className={className} aria-hidden />;
}

/** The Om sigil used in branding. */
export function OmSigil({ className }: { className?: string }) {
  return (
    <span
      className={`font-deva select-none ${className ?? ""}`}
      role="img"
      aria-label="Om"
    >
      ॐ
    </span>
  );
}
