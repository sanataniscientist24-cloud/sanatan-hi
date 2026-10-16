/**
 * SANATAN HI — Corpus types
 * Offline scripture corpus: Bhagavad Gita, Ramayana, Mahabharata,
 * Puranas, Vedas, Upanishads, Stotras, Mantras & Dharma concepts —
 * all with Sanskrit, transliteration, Hindi & English.
 */

export type CorpusKind =
  | "verse" // शास्त्र श्लोक / scripture verse (has sanskrit + translit)
  | "chapter" // अध्याय / काण्ड / पर्व / संहिता — section summary
  | "book" // ग्रंथ परिचय — book overview
  | "concept" // धार्मिक अवधारणा — dharma concept / glossary
  | "story" // कथा — story / katha summary
  | "mantra" // मंत्र — mantra
  | "stotra" // स्तोत्र / चालीसा / आरती — hymn
  | "quote"; // प्रसिद्ध कथन / सूक्ति — famous quote

export interface CorpusEntry {
  /** unique id, e.g. "bg-2-47" */
  id: string;
  kind: CorpusKind;
  /** book id, e.g. "bhagavad-gita" */
  bookId: string;
  /** e.g. "Bhagavad Gita · Chapter 2 · Sankhya Yoga" */
  section?: string;
  sectionHi?: string;
  /** chapter number label e.g. "2" */
  chapter?: string;
  /** verse label e.g. "47" or "2.47" */
  verse?: string;
  /** title (en) for concept/story/quote entries */
  title?: string;
  titleHi?: string;
  /** Devanagari original (for verse/mantra/stotra) */
  sanskrit?: string;
  /** Roman transliteration with diacritics */
  translit?: string;
  /** Hindi explanation / translation */
  hindi: string;
  /** English explanation / translation */
  english: string;
  /** searchable keywords (roman + devanagari) */
  tags: string[];
}

export interface SectionInfo {
  id: string;
  /** sanskrit name, e.g. "अर्जुन विषाद योग" */
  name: string;
  /** english meaning of the name */
  nameEn: string;
  /** short label e.g. "अध्याय 1" */
  label?: string;
  descHi: string;
  descEn: string;
}

export interface BookInfo {
  id: string;
  name: string;
  nameHi: string;
  nameSa: string;
  author: string;
  authorHi: string;
  era: string;
  descHi: string;
  descEn: string;
  sections: SectionInfo[];
  /** tailwind accent classes */
  accent: string;
  accentText: string;
  icon: string;
  order: number;
}
