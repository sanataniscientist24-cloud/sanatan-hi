"use client";

/**
 * SANATAN HI — Utsava Calendar (SanatanDoc Festivals view, ported).
 *
 * The sacred year ahead: major utsavas with dates, tithis and
 * descriptions; upcoming (within 60 days) highlighted in gold.
 */

import { useMemo } from "react";
import { CalendarDays, Sparkles } from "lucide-react";
import { FESTIVALS } from "@/lib/sanatan-voice";
import { Badge } from "@/components/ui/badge";

function daysUntil(iso?: string): number | null {
  if (!iso) return null;
  const target = new Date(`${iso}T00:00:00`);
  const now = new Date();
  const diff = Math.ceil((target.getTime() - now.getTime()) / 86400000);
  return diff;
}

export function FestivalsView() {
  const sorted = useMemo(() => {
    return [...FESTIVALS].sort((a, b) => {
      const da = daysUntil(a.dateISO);
      const db = daysUntil(b.dateISO);
      /* future dated first ascending; undated at end */
      if (da === null && db === null) return 0;
      if (da === null) return 1;
      if (db === null) return -1;
      return da - db;
    });
  }, []);

  return (
    <div className="sanatan-fade">
      <div className="mb-4">
        <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
          <CalendarDays className="h-4 w-4 text-sanatan-gold" />
          Utsava Calendar
        </h2>
        <p className="text-xs text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
          The sacred year ahead — lunar dates shown as per tradition; verify muhurta with your
          local panchang
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((f) => {
          const d = daysUntil(f.dateISO);
          const past = d !== null && d < 0;
          return (
            <div
              key={f.id}
              className={`relative overflow-hidden rounded-xl border p-4 transition ${
                !past && d !== null && d <= 60
                  ? "border-sanatan-saffron/70 bg-sanatan-gold/[0.08] shadow-[0_8px_24px_-10px_rgba(105,32,15,0.3)]"
                  : "border-sanatan-gold-2/60 bg-sanatan-parchment hover:border-sanatan-gold/70"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold leading-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
                    {f.name}
                  </h3>
                  <span className="font-deva text-[11px] text-sanatan-saffron-2/80 dark:text-sanatan-gold/80">
                    {f.sanskrit}
                  </span>
                </div>
                {d !== null && !past && (
                  <Badge className="shrink-0 bg-gradient-to-r from-sanatan-saffron to-sanatan-saffron-2 text-[9px] font-bold text-sanatan-parchment">
                    in {d} day{Math.abs(d) === 1 ? "" : "s"}
                  </Badge>
                )}
                {past && (
                  <Badge
                    variant="outline"
                    className="shrink-0 border-sanatan-gold-2/50 bg-sanatan-cream-2/60 text-[9px] font-normal text-sanatan-maroon/50 dark:text-sanatan-maroon/60"
                  >
                    passed
                  </Badge>
                )}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <span className="rounded-md bg-sanatan-gold/10 px-2 py-0.5 text-[10px] font-medium text-sanatan-maroon-2 dark:text-sanatan-maroon">
                  {f.dateLabel}
                </span>
                {!f.verified && (
                  <span className="rounded-md bg-sanatan-cream-2/70 px-2 py-0.5 text-[9px] italic text-sanatan-maroon/55 dark:text-sanatan-maroon/65">
                    tithi-based · panchang varies
                  </span>
                )}
              </div>

              <p className="mt-2 text-[11px] italic text-sanatan-saffron-2/80 dark:text-sanatan-gold/80">{f.tithi}</p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-sanatan-maroon/75 dark:text-sanatan-maroon/80">
                {f.desc}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[10px] text-sanatan-maroon/50 dark:text-sanatan-maroon/60">
        <Sparkles className="h-3 w-3" aria-hidden />
        Dates marked as tithi-based shift by a day across panchangs and regions — follow your
        family tradition and local temple calendar.
      </p>
    </div>
  );
}
