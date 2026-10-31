/**
 * SANATAN HI — section navigation (the SanatanDoc vault).
 *
 * The app keeps the SANATANI BABAJI chat as its heart ("home");
 * every other section is one of the SanatanDoc experiences ported
 * from the uploaded workspace: Explore, Bookshelf, Bank, Shloka,
 * Utsava, Sadhana, Voice and the LLM Guide.
 */

export type SectionId =
  | "home"
  | "explore"
  | "bookshelf"
  | "bank"
  | "shloka"
  | "utsava"
  | "sadhana"
  | "voice"
  | "consult";

export interface SectionDef {
  id: SectionId;
  label: string;
  hi: string;
}

export const SECTIONS: SectionDef[] = [
  { id: "home", label: "Babaji", hi: "बाबाजी" },
  { id: "explore", label: "Explore", hi: "द्वार" },
  { id: "bookshelf", label: "Bookshelf", hi: "पुस्तकालय" },
  { id: "bank", label: "Bank", hi: "ज्ञान-बैंक" },
  { id: "shloka", label: "Shloka", hi: "आज का श्लोक" },
  { id: "utsava", label: "Utsava", hi: "उत्सव" },
  { id: "sadhana", label: "Sadhana", hi: "साधना" },
  { id: "voice", label: "Voice", hi: "ध्वनि" },
  { id: "consult", label: "Guide", hi: "पथ-प्रदर्शक" },
];
