import { BOOKS, BOOK_MAP } from "./books";
import { GITA_VERSES } from "./gita";
import { RAMAYANA_ENTRIES } from "./ramayana";
import { MAHABHARATA_ENTRIES } from "./mahabharata";
import { VEDA_ENTRIES, UPANISHAD_ENTRIES } from "./vedas";
import { SHIV_PURAN_ENTRIES, BHAGAVATA_ENTRIES, VISHNU_PURANA_ENTRIES } from "./puranas";
import { STOTRA_ENTRIES } from "./stotras";
import { CONCEPT_ENTRIES } from "./concepts";
import { RCM_ENTRIES } from "./ram-charit-manas";
import { YOGA_SUTRA_ENTRIES } from "./yoga-sutras";
import type { CorpusEntry } from "./types";

/** The complete offline corpus of SANATAN HI. */
export const CORPUS: CorpusEntry[] = [
  ...GITA_VERSES,
  ...RAMAYANA_ENTRIES,
  ...MAHABHARATA_ENTRIES,
  ...BHAGAVATA_ENTRIES,
  ...SHIV_PURAN_ENTRIES,
  ...VISHNU_PURANA_ENTRIES,
  ...VEDA_ENTRIES,
  ...UPANISHAD_ENTRIES,
  ...STOTRA_ENTRIES,
  ...CONCEPT_ENTRIES,
  ...RCM_ENTRIES,
  ...YOGA_SUTRA_ENTRIES,
];

export const CORPUS_MAP: Record<string, CorpusEntry> = Object.fromEntries(
  CORPUS.map((e) => [e.id, e])
);

export function entriesByBook(bookId: string): CorpusEntry[] {
  return CORPUS.filter((e) => e.bookId === bookId);
}

export const CORPUS_STATS = {
  entries: CORPUS.length,
  books: BOOKS.length,
  languages: 4 as const,
  versesWithSanskrit: CORPUS.filter((e) => e.sanskrit).length,
  concepts: CORPUS.filter((e) => e.kind === "concept").length,
  stories: CORPUS.filter((e) => e.kind === "story").length,
};

export { BOOKS, BOOK_MAP };
export type { CorpusEntry, BookInfo, SectionInfo, CorpusKind };
