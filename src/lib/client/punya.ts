"use client";

/**
 * SANATAN HI — Sanatan Bank punya (पुण्य) ledger.
 *
 * A playful-but-respectful "spiritual wealth" tracker for the Sanatan Bank:
 * every shloka you open, listen to or copy is a deposit of punya — merit.
 * The balance lives in localStorage and survives reloads. Purely local,
 * zero network — like everything else in this app.
 */

const KEY = "sanatan-hi-punya-v1";

type Listener = (balance: number) => void;

const listeners = new Set<Listener>();

function read(): number {
  try {
    const raw = localStorage.getItem(KEY);
    const n = raw ? parseInt(raw, 10) : 0;
    return Number.isFinite(n) && n > 0 ? n : 0;
  } catch {
    return 0;
  }
}

function write(n: number): void {
  try {
    localStorage.setItem(KEY, String(n));
  } catch {
    /* private mode — in-memory only this session */
  }
}

/** Current punya balance (0 before hydration). */
export function punyaBalance(): number {
  return read();
}

/** Subscribe to balance changes — returns an unsubscribe fn. */
export function onPunya(l: Listener): () => void {
  listeners.add(l);
  return () => listeners.delete(l);
}

/** Deposit punya (defaults +1). Returns the new balance. */
export function depositPunya(amount = 1): number {
  const next = read() + Math.max(0, amount);
  write(next);
  for (const l of listeners) l(next);
  return next;
}

/** Withdraw punya (defaults 1, never below 0). Returns the new balance. */
export function withdrawPunya(amount = 1): number {
  const next = Math.max(0, read() - Math.max(0, amount));
  write(next);
  for (const l of listeners) l(next);
  return next;
}

/** Reset the passbook. */
export function resetPunya(): number {
  write(0);
  for (const l of listeners) l(0);
  return 0;
}
