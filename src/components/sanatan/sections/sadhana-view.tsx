"use client";

/**
 * SANATAN HI — Sadhana Tracker (SanatanDoc view, ported).
 *
 * Your practice, kept privately on this device: a japa mala counter
 * (108 per round) and a dhyana minutes log with streak tracking.
 * योगः कर्मसु कौशलम्.
 */

import { useEffect, useMemo, useState } from "react";
import { Hand, Flame, Plus, Trash2, RotateCcw, CalendarCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface LogEntry {
  date: string; /* YYYY-MM-DD */
  meditation: number; /* minutes */
  japa: number;
}

interface SadhanaState {
  japa: number; /* count within current round */
  rounds: number; /* completed rounds (108) */
  totalJapa: number;
  logs: LogEntry[];
}

const STORAGE_KEY = "sanatan-hi-sadhana-v1";
const EMPTY: SadhanaState = { japa: 0, rounds: 0, totalJapa: 0, logs: [] };

function localDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function todayStr(): string {
  return localDateStr(new Date());
}

function loadState(): SadhanaState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as SadhanaState;
    return {
      japa: Number.isFinite(parsed.japa) ? parsed.japa : 0,
      rounds: Number.isFinite(parsed.rounds) ? parsed.rounds : 0,
      totalJapa: Number.isFinite(parsed.totalJapa) ? parsed.totalJapa : 0,
      logs: Array.isArray(parsed.logs) ? parsed.logs : [],
    };
  } catch {
    return EMPTY;
  }
}

export function SadhanaView() {
  const [state, setState] = useState<SadhanaState>(EMPTY);
  const [minutes, setMinutes] = useState("10");
  const [hydrated, setHydrated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        /* private mode */
      }
    }
  }, [state, hydrated]);

  const countJapa = () => {
    setState((s) => {
      const next = s.japa + 1;
      const total = s.totalJapa + 1;
      if (next >= 108) {
        return { ...s, japa: 0, rounds: s.rounds + 1, totalJapa: total };
      }
      return { ...s, japa: next, totalJapa: total };
    });
  };

  const resetRound = () => {
    setState((s) => ({ ...s, japa: 0 }));
  };

  const addMeditation = () => {
    const m = Math.max(0, Math.min(600, parseInt(minutes || "0", 10) || 0));
    if (m <= 0) return;
    const t = todayStr();
    setState((s) => {
      const existing = s.logs.find((l) => l.date === t);
      const logs = existing
        ? s.logs.map((l) => (l.date === t ? { ...l, meditation: l.meditation + m } : l))
        : [...s.logs, { date: t, meditation: m, japa: s.totalJapa }];
      return { ...s, logs };
    });
    toast({
      title: "Sadhana logged",
      description: `${m} minutes of dhyana recorded for today.`,
    });
  };

  const removeLog = (date: string) => {
    setState((s) => ({ ...s, logs: s.logs.filter((l) => l.date !== date) }));
  };

  /* stats */
  const daysLogged = state.logs.length;
  const totalMeditation = state.logs.reduce((a, l) => a + l.meditation, 0);
  const streak = useMemo(() => {
    const dates = new Set(state.logs.map((l) => l.date));
    let streakCount = 0;
    const d = new Date();
    for (;;) {
      const key = localDateStr(d);
      if (dates.has(key)) {
        streakCount++;
        d.setDate(d.getDate() - 1);
      } else if (streakCount === 0 && key === todayStr()) {
        /* allow today not yet logged; check yesterday */
        d.setDate(d.getDate() - 1);
      } else {
        break;
      }
    }
    return streakCount;
  }, [state.logs]);

  const todayLog = state.logs.find((l) => l.date === todayStr());

  return (
    <div className="sanatan-fade">
      <div className="mb-4">
        <h2 className="text-lg font-bold tracking-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
          Sadhana Tracker
        </h2>
        <p className="text-xs text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
          Your practice, kept privately in this device — योगः कर्मसु कौशलम्
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* japa card */}
        <div className="relative overflow-hidden rounded-xl border border-sanatan-gold-2/70 bg-gradient-to-br from-sanatan-gold/10 to-transparent p-5">
          <span
            className="font-deva pointer-events-none absolute -right-2 -top-4 select-none text-[100px] leading-none text-sanatan-gold/10"
            aria-hidden
          >
            ॐ
          </span>
          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2">
                <Hand className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-[13px] font-semibold text-sanatan-maroon-2 dark:text-sanatan-maroon">Japa Mala</h3>
                <p className="text-[10px] text-sanatan-maroon/55 dark:text-sanatan-maroon/65">
                  Tap for each repetition · 108 per mala
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-5">
              <button
                onClick={countJapa}
                className="group relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-sanatan-gold/40 bg-sanatan-gold/10 transition active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sanatan-saffron"
                aria-label="Count one japa"
              >
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 96 96" aria-hidden>
                  <circle
                    cx="48"
                    cy="48"
                    r="44"
                    fill="none"
                    stroke="url(#japaGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 44}
                    strokeDashoffset={2 * Math.PI * 44 * (1 - state.japa / 108)}
                    className="transition-all duration-200"
                  />
                  <defs>
                    <linearGradient id="japaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e3821e" />
                      <stop offset="100%" stopColor="#b98224" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-center">
                  <div className="text-2xl font-bold tabular-nums text-sanatan-saffron-2 dark:text-sanatan-gold">
                    {state.japa}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-sanatan-maroon/55 dark:text-sanatan-maroon/65">
                    / 108
                  </div>
                </div>
              </button>

              <div className="min-w-0 flex-1 space-y-2.5">
                <div className="flex items-center justify-between rounded-lg border border-sanatan-gold-2/60 bg-sanatan-parchment px-3 py-2">
                  <span className="text-[11px] text-sanatan-maroon/65 dark:text-sanatan-maroon/75">Malas completed</span>
                  <span className="text-sm font-bold tabular-nums text-sanatan-saffron-2 dark:text-sanatan-gold">
                    {state.rounds}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-sanatan-gold-2/60 bg-sanatan-parchment px-3 py-2">
                  <span className="text-[11px] text-sanatan-maroon/65 dark:text-sanatan-maroon/75">Lifetime count</span>
                  <span className="text-sm font-bold tabular-nums text-sanatan-saffron-2 dark:text-sanatan-gold">
                    {state.totalJapa}
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={resetRound}
                  className="h-7 w-full gap-1 border-sanatan-gold-2/50 bg-sanatan-parchment text-[10px] text-sanatan-maroon/50 hover:border-rose-500/40 hover:text-rose-500 dark:text-sanatan-maroon/60"
                >
                  <RotateCcw className="h-3 w-3" /> Reset current round
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* meditation log card */}
        <div className="rounded-xl border border-sanatan-gold-2/70 bg-sanatan-parchment p-5">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2">
              <Flame className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-[13px] font-semibold text-sanatan-maroon-2 dark:text-sanatan-maroon">Dhyana Log</h3>
              <p className="text-[10px] text-sanatan-maroon/55 dark:text-sanatan-maroon/65">
                Minutes of stillness, day by day
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Input
              type="number"
              min={1}
              max={600}
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="h-9 w-24 rounded-lg border-sanatan-gold-2/70 bg-sanatan-cream-2/60 text-[13px] text-sanatan-maroon-2 focus-visible:ring-sanatan-gold/50 dark:text-sanatan-maroon"
              aria-label="Meditation minutes"
            />
            <span className="self-center text-[11px] text-sanatan-maroon/55 dark:text-sanatan-maroon/65">
              minutes today
            </span>
            <Button
              size="sm"
              onClick={addMeditation}
              className="ml-auto h-9 gap-1 rounded-lg bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-[11px] font-semibold text-sanatan-gold-2 hover:from-sanatan-maroon-2 hover:to-sanatan-maroon"
            >
              <Plus className="h-3.5 w-3.5" /> Log
            </Button>
          </div>
          {todayLog && (
            <p className="mt-2 text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
              Today so far: {todayLog.meditation} min · keep going
            </p>
          )}

          {/* stats row */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-sanatan-gold-2/50 bg-sanatan-cream-2/60 px-2 py-2.5 text-center">
              <CalendarCheck className="mx-auto h-3.5 w-3.5 text-sanatan-gold/80" aria-hidden />
              <div className="mt-1 text-base font-bold tabular-nums text-sanatan-maroon-2 dark:text-sanatan-maroon">
                {daysLogged}
              </div>
              <div className="text-[9px] uppercase tracking-wider text-sanatan-maroon/50 dark:text-sanatan-maroon/60">
                days
              </div>
            </div>
            <div className="rounded-lg border border-sanatan-gold-2/50 bg-sanatan-cream-2/60 px-2 py-2.5 text-center">
              <Flame className="mx-auto h-3.5 w-3.5 text-sanatan-gold/80" aria-hidden />
              <div className="mt-1 text-base font-bold tabular-nums text-sanatan-maroon-2 dark:text-sanatan-maroon">
                {totalMeditation}
              </div>
              <div className="text-[9px] uppercase tracking-wider text-sanatan-maroon/50 dark:text-sanatan-maroon/60">
                minutes
              </div>
            </div>
            <div className="rounded-lg border border-sanatan-gold-2/50 bg-sanatan-cream-2/60 px-2 py-2.5 text-center">
              <Award className="mx-auto h-3.5 w-3.5 text-sanatan-gold/80" aria-hidden />
              <div className="mt-1 text-base font-bold tabular-nums text-sanatan-maroon-2 dark:text-sanatan-maroon">
                {streak}
              </div>
              <div className="text-[9px] uppercase tracking-wider text-sanatan-maroon/50 dark:text-sanatan-maroon/60">
                streak
              </div>
            </div>
          </div>

          {/* recent logs */}
          <div className="slim-scroll sanatan-scroll mt-4 max-h-36 space-y-1.5 overflow-y-auto pr-1">
            {state.logs.length === 0 && (
              <p className="py-4 text-center text-[11px] text-sanatan-maroon/45 dark:text-sanatan-maroon/55">
                No entries yet — log your first minutes of stillness
              </p>
            )}
            {[...state.logs]
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .slice(0, 12)
              .map((l) => (
                <div
                  key={l.date}
                  className="group flex items-center justify-between rounded-lg border border-sanatan-gold-2/50 bg-sanatan-cream-2/50 px-3 py-2"
                >
                  <span className="text-[11px] text-sanatan-maroon/65 dark:text-sanatan-maroon/75">{l.date}</span>
                  <span className="text-[11px] font-medium text-sanatan-saffron-2 dark:text-sanatan-gold">
                    {l.meditation} min dhyana
                  </span>
                  <button
                    onClick={() => removeLog(l.date)}
                    className="text-sanatan-maroon/30 opacity-0 transition group-hover:opacity-100 hover:text-rose-500"
                    aria-label={`Remove ${l.date}`}
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* quote strip */}
      <div className="mt-4 rounded-xl border border-sanatan-gold-2/60 bg-sanatan-parchment px-4 py-3 text-center">
        <p className="font-deva text-[13px] text-sanatan-maroon-2 dark:text-sanatan-gold">
          योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय
        </p>
        <p className="mt-1 text-[10px] text-sanatan-maroon/55 dark:text-sanatan-maroon/65">
          “Established in yoga, perform your actions” — Bhagavad Gita 2.48
        </p>
      </div>
    </div>
  );
}
