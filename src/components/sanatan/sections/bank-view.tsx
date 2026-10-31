"use client";

/**
 * SANATAN HI — Sanatan Knowledge Bank (SanatanDoc view, ported).
 *
 * The verified question bank: browse with reveal-answers & source
 * citations, or take a shuffled quiz with instant feedback and a
 * scored review. ~112 questions across 8 streams of knowledge.
 */

import { useMemo, useState } from "react";
import { Search, BookMarked, Target, Check, X as XIcon, RotateCcw, ChevronRight, Trophy } from "lucide-react";
import {
  BANK_CATEGORIES,
  BANK_QUESTIONS,
  questionsByCategory,
  shuffle,
  type BankCategory,
  type BankQuestion,
} from "@/lib/sanatan-bank";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type Mode = "browse" | "quiz";

export function BankView() {
  const [mode, setMode] = useState<Mode>("browse");

  return (
    <div className="sanatan-fade">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-sanatan-maroon-2 dark:text-sanatan-maroon">
            <BookMarked className="h-4 w-4 text-sanatan-gold" />
            Sanatan Knowledge Bank
          </h2>
          <p className="text-xs text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
            {BANK_QUESTIONS.length} verified questions · {BANK_CATEGORIES.length} streams of knowledge
          </p>
        </div>

        {/* mode switch */}
        <div className="flex rounded-lg border border-sanatan-gold-2/60 bg-sanatan-parchment p-0.5">
          <button
            onClick={() => setMode("browse")}
            aria-pressed={mode === "browse"}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-semibold transition ${
              mode === "browse"
                ? "bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2"
                : "text-sanatan-maroon/65 hover:text-sanatan-maroon-2 dark:text-sanatan-maroon/75"
            }`}
          >
            <Search className="h-3 w-3" /> Browse
          </button>
          <button
            onClick={() => setMode("quiz")}
            aria-pressed={mode === "quiz"}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-semibold transition ${
              mode === "quiz"
                ? "bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-sanatan-gold-2"
                : "text-sanatan-maroon/65 hover:text-sanatan-maroon-2 dark:text-sanatan-maroon/75"
            }`}
          >
            <Target className="h-3 w-3" /> Quiz
          </button>
        </div>
      </div>

      {mode === "browse" ? <BrowseMode /> : <QuizMode />}
    </div>
  );
}

/* ── Browse mode ──────────────────────────────────────────────────────────── */

function BrowseMode() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<BankCategory | "All">("All");
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return questionsByCategory(cat).filter((item) => {
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.explanation.toLowerCase().includes(q) ||
        item.source.toLowerCase().includes(q)
      );
    });
  }, [query, cat]);

  const toggleReveal = (id: string) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2.5 sm:flex-row">
        <div className="relative flex-1">
          <Search
            className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-sanatan-maroon/50"
            aria-hidden
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the bank — try “Gayatri”, “Tat tvam asi”, “18 parvas”…"
            aria-label="Search the knowledge bank"
            className="h-9 rounded-lg border-sanatan-gold-2/70 bg-sanatan-parchment pl-8 text-[12px] text-sanatan-maroon-2 placeholder:text-sanatan-maroon/40 focus-visible:ring-sanatan-gold/50 dark:text-sanatan-maroon"
          />
        </div>
      </div>

      {/* category chips */}
      <div className="slim-scroll -mx-1 mb-5 flex gap-1.5 overflow-x-auto px-1 pb-1">
        {(["All", ...BANK_CATEGORIES] as const).map((c) => (
          <button
            key={c}
            onClick={() => setCat(c as BankCategory | "All")}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
              cat === c
                ? "border-sanatan-saffron/70 bg-sanatan-gold/20 text-sanatan-maroon-2 dark:text-sanatan-maroon"
                : "border-sanatan-gold-2/60 bg-sanatan-parchment text-sanatan-maroon/65 hover:border-sanatan-saffron/50 hover:text-sanatan-maroon-2 dark:text-sanatan-maroon/75"
            }`}
          >
            {c}
            <span className="ml-1 text-[9px] opacity-60">
              {c === "All" ? BANK_QUESTIONS.length : questionsByCategory(c as BankCategory).length}
            </span>
          </button>
        ))}
      </div>

      {/* questions */}
      <div className="max-h-none space-y-2.5">
        {list.map((q) => {
          const open = revealed.has(q.id);
          return (
            <div
              key={q.id}
              className={`overflow-hidden rounded-xl border transition-colors ${
                open
                  ? "border-sanatan-saffron/60 bg-sanatan-gold/[0.07]"
                  : "border-sanatan-gold-2/60 bg-sanatan-parchment hover:border-sanatan-gold/70"
              }`}
            >
              <button
                onClick={() => toggleReveal(q.id)}
                className="flex w-full items-start gap-3 p-4 text-left"
                aria-expanded={open}
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-sanatan-gold/25 to-sanatan-saffron/25 text-sanatan-gold ring-1 ring-sanatan-gold/40">
                  <span className="font-deva text-[10px] font-bold" aria-hidden>ॐ</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium leading-snug text-sanatan-maroon-2 dark:text-sanatan-maroon">
                    {q.question}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    <Badge
                      variant="outline"
                      className="h-5 border-sanatan-gold-2/60 bg-sanatan-gold/10 px-1.5 text-[9px] font-normal text-sanatan-maroon/70 dark:text-sanatan-maroon/80"
                    >
                      {q.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`h-5 px-1.5 text-[9px] font-normal ${
                        q.difficulty === "Easy"
                          ? "border-emerald-600/40 bg-emerald-600/10 text-emerald-700 dark:text-emerald-400"
                          : q.difficulty === "Medium"
                            ? "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400"
                            : "border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-400"
                      }`}
                    >
                      {q.difficulty}
                    </Badge>
                  </div>
                </div>
                <ChevronRight
                  className={`mt-1 h-4 w-4 shrink-0 text-sanatan-maroon/40 transition-transform ${
                    open ? "rotate-90 text-sanatan-saffron-2" : ""
                  }`}
                  aria-hidden
                />
              </button>

              {open && (
                <div className="border-t border-sanatan-gold-2/50 px-4 pb-4 pt-3">
                  <div className="grid gap-1.5 sm:grid-cols-2">
                    {q.options.map((opt, i) => (
                      <div
                        key={opt}
                        className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 text-[12px] ${
                          i === q.answer
                            ? "border-emerald-600/50 bg-emerald-600/10 text-emerald-800 dark:text-emerald-300"
                            : "border-sanatan-gold-2/50 bg-sanatan-cream-2/60 text-sanatan-maroon/65 dark:text-sanatan-maroon/75"
                        }`}
                      >
                        <span
                          className={`flex shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                            i === q.answer
                              ? "bg-emerald-600/25 text-emerald-800 dark:text-emerald-300"
                              : "bg-sanatan-gold/15 text-sanatan-maroon/60 dark:text-sanatan-maroon/70"
                          }`}
                          style={{ height: 18, width: 18 }}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        {opt}
                        {i === q.answer && <Check className="ml-auto h-3.5 w-3.5 shrink-0" aria-hidden />}
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-[12px] leading-relaxed text-sanatan-maroon/85 dark:text-sanatan-maroon/85">
                    <span className="font-semibold text-sanatan-saffron-2 dark:text-sanatan-gold">Why: </span>
                    {q.explanation}
                  </p>
                  <p className="mt-1.5 text-[10px] italic text-sanatan-maroon/50 dark:text-sanatan-maroon/60">
                    — {q.source}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {list.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-sanatan-gold-2/60 py-14 text-center">
            <span className="font-deva text-3xl text-sanatan-gold/50" aria-hidden>?</span>
            <p className="mt-2 text-sm text-sanatan-maroon/70 dark:text-sanatan-maroon/80">
              Nothing found for “{query}”
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Quiz mode ────────────────────────────────────────────────────────────── */

interface QuizState {
  questions: BankQuestion[];
  idx: number;
  selected: number | null;
  answers: (number | null)[];
  finished: boolean;
}

function QuizMode() {
  const [cat, setCat] = useState<BankCategory | "All">("All");
  const [state, setState] = useState<QuizState | null>(null);

  const start = () => {
    const pool = shuffle(questionsByCategory(cat));
    setState({
      questions: pool,
      idx: 0,
      selected: null,
      answers: pool.map(() => null),
      finished: false,
    });
  };

  if (!state) {
    return (
      <div className="rounded-xl border border-sanatan-gold-2/70 bg-sanatan-parchment p-6">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sanatan-gold/25 to-sanatan-saffron/25 ring-1 ring-sanatan-gold/40">
            <Target className="h-7 w-7 text-sanatan-gold" />
          </div>
          <h3 className="mt-4 text-base font-bold text-sanatan-maroon-2 dark:text-sanatan-maroon">
            Test your knowledge
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-sanatan-maroon/65 dark:text-sanatan-maroon/75">
            Choose a stream — every question answered with instant feedback and the source behind it.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {(["All", ...BANK_CATEGORIES] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c as BankCategory | "All")}
                className={`rounded-lg border px-2 py-2.5 text-[11px] font-medium leading-tight transition ${
                  cat === c
                    ? "border-sanatan-saffron/70 bg-sanatan-gold/20 text-sanatan-maroon-2 dark:text-sanatan-maroon"
                    : "border-sanatan-gold-2/60 bg-sanatan-parchment text-sanatan-maroon/65 hover:border-sanatan-saffron/50 hover:text-sanatan-maroon-2 dark:text-sanatan-maroon/75"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <Button
            onClick={start}
            className="mt-5 h-10 w-full rounded-lg bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-[13px] font-semibold text-sanatan-gold-2 hover:from-sanatan-maroon-2 hover:to-sanatan-maroon"
          >
            Begin quiz · {questionsByCategory(cat).length} questions
          </Button>
        </div>
      </div>
    );
  }

  const { questions, idx, selected, answers, finished } = state;
  const q = questions[idx];
  const score = answers.filter((a, i) => a !== null && a === questions[i].answer).length;

  if (finished) {
    const pctScore = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-xl border border-sanatan-gold-2/70 bg-sanatan-parchment p-6">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sanatan-gold/30 to-sanatan-saffron/30 ring-1 ring-sanatan-gold/50">
            <Trophy className="h-8 w-8 text-sanatan-gold" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-sanatan-maroon-2 dark:text-sanatan-maroon">
            {pctScore >= 80 ? "शाबाश! Outstanding" : pctScore >= 50 ? "Well practised" : "The journey continues"}
          </h3>
          <p className="mt-1 text-sm text-sanatan-maroon/70 dark:text-sanatan-maroon/80">
            You scored <span className="font-bold text-sanatan-saffron-2 dark:text-sanatan-gold">{score}</span> of{" "}
            {questions.length} · {pctScore}%
          </p>
          <Progress
            value={pctScore}
            className="mt-4 h-2 bg-sanatan-cream-2 [&>div]:bg-gradient-to-r [&>div]:from-sanatan-saffron [&>div]:to-sanatan-gold"
          />

          {/* review list */}
          <div className="mt-5 max-h-72 space-y-2 overflow-y-auto pr-1 text-left slim-scroll">
            {questions.map((qq, i) => {
              const right = answers[i] === qq.answer;
              return (
                <div
                  key={qq.id}
                  className={`rounded-lg border px-3 py-2.5 ${
                    right
                      ? "border-emerald-600/40 bg-emerald-600/[0.06]"
                      : "border-rose-500/40 bg-rose-500/[0.06]"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {right ? (
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
                    ) : (
                      <XIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-500" aria-hidden />
                    )}
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium leading-snug text-sanatan-maroon-2 dark:text-sanatan-maroon">
                        {qq.question}
                      </p>
                      {!right && (
                        <p className="mt-1 text-[11px] text-emerald-700 dark:text-emerald-400">
                          Answer: {qq.options[qq.answer]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex gap-2">
            <Button
              variant="outline"
              onClick={() => setState(null)}
              className="h-10 flex-1 rounded-lg border-sanatan-gold-2/60 bg-sanatan-parchment text-[12px] text-sanatan-maroon-2 hover:bg-sanatan-gold/15 dark:text-sanatan-maroon"
            >
              Change stream
            </Button>
            <Button
              onClick={start}
              className="h-10 flex-1 rounded-lg bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 text-[12px] font-semibold text-sanatan-gold-2 hover:from-sanatan-maroon-2 hover:to-sanatan-maroon"
            >
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Play again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const answered = selected !== null;
  const isLast = idx === questions.length - 1;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-3 flex items-center justify-between text-[11px] text-sanatan-maroon/60 dark:text-sanatan-maroon/70">
        <span>
          Question {idx + 1} of {questions.length} ·{" "}
          <span className="text-sanatan-saffron-2 dark:text-sanatan-gold">{q.category}</span>
        </span>
        <span>
          Score: <span className="font-semibold text-sanatan-saffron-2 dark:text-sanatan-gold">{score}</span>
        </span>
      </div>
      <Progress
        value={((idx + (answered ? 1 : 0)) / questions.length) * 100}
        className="mb-5 h-1.5 bg-sanatan-cream-2 [&>div]:bg-gradient-to-r [&>div]:from-sanatan-saffron [&>div]:to-sanatan-gold"
      />

      <div className="rounded-xl border border-sanatan-gold-2/70 bg-sanatan-parchment p-5">
        <p className="text-[15px] font-medium leading-snug text-sanatan-maroon-2 dark:text-sanatan-maroon">
          {q.question}
        </p>

        <div className="mt-4 space-y-2">
          {q.options.map((opt, i) => {
            let cls =
              "border-sanatan-gold-2/60 bg-sanatan-cream-2/60 text-sanatan-maroon-2 hover:border-sanatan-saffron/60 hover:bg-sanatan-gold/10 dark:text-sanatan-maroon";
            if (answered) {
              if (i === q.answer) cls = "border-emerald-600/60 bg-emerald-600/10 text-emerald-800 dark:text-emerald-300";
              else if (i === selected) cls = "border-rose-500/60 bg-rose-500/10 text-rose-700 dark:text-rose-300";
              else cls = "border-sanatan-gold-2/40 bg-sanatan-cream-2/40 text-sanatan-maroon/45 dark:text-sanatan-maroon/50";
            }
            return (
              <button
                key={opt}
                disabled={answered}
                onClick={() =>
                  setState((s) =>
                    s
                      ? {
                          ...s,
                          selected: i,
                          answers: s.answers.map((a, ai) => (ai === s.idx ? i : a)),
                        }
                      : s
                  )
                }
                className={`flex w-full items-center gap-2.5 rounded-lg border px-3.5 py-3 text-left text-[13px] transition ${cls}`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sanatan-gold/15 text-[10px] font-bold">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-4 rounded-lg border border-sanatan-gold/50 bg-sanatan-gold/[0.08] p-3.5">
            <p className="text-[12px] leading-relaxed text-sanatan-maroon/85 dark:text-sanatan-maroon/85">
              <span
                className={`font-semibold ${
                  selected === q.answer
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-rose-600 dark:text-rose-400"
                }`}
              >
                {selected === q.answer ? "Correct. " : "Not quite. "}
              </span>
              {q.explanation}
            </p>
            <p className="mt-1.5 text-[10px] italic text-sanatan-maroon/50 dark:text-sanatan-maroon/60">
              — {q.source}
            </p>
          </div>
        )}

        <div className="mt-4 flex justify-end">
          <Button
            disabled={!answered}
            onClick={() =>
              setState((s) =>
                s
                  ? s.idx === s.questions.length - 1
                    ? { ...s, finished: true }
                    : { ...s, idx: s.idx + 1, selected: null }
                  : s
              )
            }
            className="h-9 rounded-lg bg-gradient-to-b from-sanatan-maroon to-sanatan-maroon-2 px-5 text-[12px] font-semibold text-sanatan-gold-2 hover:from-sanatan-maroon-2 hover:to-sanatan-maroon"
          >
            {isLast ? "See results" : "Next question"}
          </Button>
        </div>
      </div>
    </div>
  );
}
