/**
 * SANATAN HI — Offline AI Engine.
 * 100% local: intent detection + BM25-style ranked retrieval over the
 * scripture corpus + trilingual (Hindi / Sanskrit / English) response
 * composition. Zero network calls, zero external models.
 */
import { CORPUS, BOOKS, BOOK_MAP, CORPUS_STATS } from "@/lib/corpus";
import type { BookInfo, CorpusEntry } from "@/lib/corpus";
import {
  devanagariRatio,
  devanagariToRoman,
  expandToken,
  foldDiacritics,
  hasDevanagari,
  isStopword,
  tokenize,
} from "./translit";

export type ResponseLang = "hi" | "en" | "sa";

export interface ChatResult {
  reply: string;
  verses: CorpusEntry[];
  suggestions: string[];
  intent: string;
  lang: ResponseLang;
  meta: { matched: number; timeMs: number; corpusSize: number };
}

/* ──────────────────────────── book aliases ─────────────────────────── */

const BOOK_ALIASES: Record<string, string[]> = {
  "bhagavad-gita": [
    "gita", "geeta", "bhagavad", "bhagwad", "bhagawad", "gitopanishad", "गीता",
    "bhagavadgita", "bhagvatgita", "श्रीमद्भगवद्गीता",
  ],
  ramayana: ["ramayan", "ramayana", "रामायण", "valmiki", "वाल्मीकि", "katha of rama", "रामकथा"],
  mahabharata: ["mahabharat", "mahabharata", "महाभारत", "bharat", "भारत", "kuru"],
  bhagavata: ["bhagavata", "bhagavat puran", "bhagavatam", "भागवत", "skandha", "स्कन्ध"],
  "shiv-puran": ["shiv puran", "shiva puran", "शिव पुराण", "शिवपुराण", "shivpuran", "shaiv"],
  "vishnu-puran": ["vishnu puran", "विष्णु पुराण", "विष्णुपुराण", "vaishnav"],
  vedas: ["ved", "veda", "vedas", "वेद", "rigved", "rigveda", "ऋग्वेद", "samved", "सामवेद", "yajurved", "यजुर्वेद", "atharv", "अथर्ववेद", "shruti"],
  upanishads: ["upanishad", "upanishads", "उपनिषद्", "उपनिषद", "vedant", "vedanta", "वेदान्त", "brahmasutra"],
  stotras: ["stotra", "stotras", "स्तोत्र", "chalisa", "चालीसा", "aarti", "आरती", "sahasranama", "tandava", "ताण्डव"],
  mantras: ["mantra", "mantras", "मंत्र", "jaap", "japa", "जप", "peace mantra"],
  concepts: ["concept", "concepts", "अवधारणा", "dharma concept", "philosophy", "दर्शन"],
};

function detectBook(query: string): string | null {
  const q = " " + foldDiacritics(query.toLowerCase()) + " ";
  const qDev = query.toLowerCase();
  let best: { id: string; score: number } | null = null;
  for (const [id, aliases] of Object.entries(BOOK_ALIASES)) {
    for (const alias of aliases) {
      const needle = foldDiacritics(alias.toLowerCase());
      if (q.includes(" " + needle + " ") || q.includes(" " + needle + "s ") || q.startsWith(" " + needle) || q.includes(needle)) {
        const score = needle.length;
        if (!best || score > best.score) best = { id, score };
      }
      if (hasDevanagari(alias) && qDev.includes(alias.toLowerCase())) {
        if (!best || alias.length > best.score) best = { id, score: alias.length };
      }
    }
  }
  return best?.id ?? null;
}

/* ──────────────────────────── search index ─────────────────────────── */

interface FieldIndex {
  entry: CorpusEntry;
  // field → token frequencies
  fields: Array<{ tokens: Map<string, number>; weight: number }>;
}

const FIELD_WEIGHTS: Array<{ key: keyof CorpusEntry | "tags"; weight: number }> = [
  { key: "title", weight: 3.5 },
  { key: "titleHi", weight: 3.5 },
  { key: "tags", weight: 3 },
  { key: "section", weight: 1.4 },
  { key: "sectionHi", weight: 1.4 },
  { key: "english", weight: 1 },
  { key: "hindi", weight: 1 },
  { key: "translit", weight: 0.6 },
  { key: "sanskrit", weight: 0.55 },
  { key: "verse", weight: 0.5 },
];

const INDEX: FieldIndex[] = CORPUS.map((entry) => ({
  entry,
  fields: FIELD_WEIGHTS.map(({ key, weight }) => {
    const val = entry[key as keyof CorpusEntry];
    let tokens: Map<string, number>;
    if (Array.isArray(val)) {
      tokens = freq(val.flatMap((v) => tokenize(String(v))));
    } else if (typeof val === "string") {
      tokens = freq(tokenize(val));
    } else {
      tokens = new Map();
    }
    return { tokens, weight };
  }),
}));

const DF = new Map<string, number>();
for (const idx of INDEX) {
  const seen = new Set<string>();
  for (const f of idx.fields) {
    for (const t of f.tokens.keys()) seen.add(t);
  }
  for (const t of seen) DF.set(t, (DF.get(t) ?? 0) + 1);
}
const N = CORPUS.length;

function freq(tokens: string[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const t of tokens) m.set(t, (m.get(t) ?? 0) + 1);
  return m;
}

function idf(term: string): number {
  const df = DF.get(term) ?? 0;
  return Math.log(1 + (N - df + 0.5) / (df + 0.5));
}

/** BM25-ish ranked search over the corpus (with Devanagari & inflection awareness). */
export function search(query: string, limit = 6): Array<{ entry: CorpusEntry; score: number }> {
  const rawTokens = tokenize(query).filter((t) => !isStopword(t) && t.length > 1);
  const expanded = new Map<string, number>();
  for (const t of rawTokens) {
    for (const s of expandToken(t)) {
      if (!isStopword(s) && s.length > 1 && !expanded.has(s)) expanded.set(s, 1);
    }
  }
  // stem tolerance for inflected Sanskrit/Hindi (कर्मण → karmana → karma)
  for (const t of rawTokens) {
    const rom = foldDiacritics(
      hasDevanagari(t) ? devanagariToRoman(t) : t
    ).split(/\s+/)[0];
    if (rom && rom.length >= 6) {
      for (let cut = 1; cut <= 3; cut++) {
        const stem = rom.slice(0, -cut);
        if (stem.length >= 4 && !isStopword(stem) && !expanded.has(stem)) {
          expanded.set(stem, 0.45);
        }
      }
    }
  }
  if (expanded.size === 0) return [];
  const results: Array<{ entry: CorpusEntry; score: number }> = [];
  for (const idx of INDEX) {
    let score = 0;
    for (const [term, weight] of expanded) {
      let termScore = 0;
      for (const f of idx.fields) {
        const tf = f.tokens.get(term) ?? 0;
        if (tf > 0) {
          const norm = 2 + Array.from(f.tokens.values()).reduce((a, b) => a + b, 0) / 40;
          termScore += (tf / norm) * f.weight;
        }
      }
      if (termScore > 0) score += termScore * idf(term) * weight;
    }
    // exact verse-label boost e.g. "2.47"
    if (idx.entry.verse) {
      for (const t of rawTokens) {
        if (idx.entry.verse.includes(t)) score += 3;
      }
    }
    if (score > 0) results.push({ entry: idx.entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}

/* ──────────────────────────── intent detection ─────────────────────────── */

const GREETING_RE =
  /^(hi+|hello+|hey+|yo|namaste+|namaskar+|namaskaram+|pranam+|pranaam+|jai+ *(shri|shree|siya)? *ram+|radhe+ *radhe+|hari+ *om+|hari+har+|jai+ *shiv+|jai+ *maa+|vanakkam|नमस्ते|नमस्कार|प्रणाम|जय श्री राम|जय श्रीराम|राधे राधे|हरि ॐ|हरिः ओम्|हेलो|हाय|दंडवत|जय जय|hello ji|namaskar ji)(?![\p{L}\p{N}])/iu;

const THANKS_RE = /(\bthank(s| you)\b|dhanya?vad|धन्यवाद|शुक्रिया|shukriya|आभार)/i;
const HELP_RE = /(help|what can you|how to use|कैसे इस्तेमाल|कैसे use|क्या कर सकते|मदद|उपयोग|कैसे पूछूँ|कैसे पूछे|guide|बताओ कैसे)/i;
const RANDOM_RE = /(random|any (shloka|verse|sloka)|koi (shloka|sloka|doha|chaupai|verse|वचन)|कोई (श्लोक|दोहा|चौपाई|प्रेरणा|वचन)|verse of the day|shloka of the day|aaj ka|आज का|दैनिक|daily|inspire|motivat|प्रेरणा|बेस्ट श्लोक|best verse)/i;
const STATS_RE = /(kitne|कितने|कुल|how many (verse|shlok|book|entries)|stats|statistics|आँकड़|आकड़|कोरपस|corpus|कितनी|किता|total)/i;
const BOOKLIST_RE = /(list (of )?books|all books|सभी (ग्रंथ|किताब|पुस्तक)|book list|ग्रंथ सूची|कौन कौन से|which books)/i;

const ABOUT_RE = /(about|परिचय|introduction|intro|summary|सारांश|के बारे|बारे में|क्या है|क्या हैं|what is the|kya hai|का परिचय)/i;
const CHAPTER_RE = /(chapter|adhyay|अध्याय|canto|skandh|स्कन्ध|kand|काण्ड|parv|पर्व|samhita|संहिता)\s*(number)?\s*(\d+|[एक|दो|तीन|चार|पाँच|छह|सात|आठ|नौ|दस]+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen)/i;
const VERSE_RE = /(\d+)\s*[.\/:—-]\s*(\d+)/;
const CH_VERSE_RE = /(chapter|adhyay|अध्याय)\s*(\d+)\D*(verse|shlok|shloka|श्लोक)\s*(\d+)/i;

const HINDI_NUM: Record<string, string> = { एक: "1", दो: "2", तीन: "3", चार: "4", पाँच: "5", छह: "6", सात: "7", आठ: "8", नौ: "9", दस: "10" };
const EN_NUM: Record<string, string> = { one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "10", eleven: "11", twelve: "12", thirteen: "13", fourteen: "14", fifteen: "15", sixteen: "16", seventeen: "17", eighteen: "18" };

/* ──────────────────────────── response strings ─────────────────────────── */

const GREETING: Record<ResponseLang, string> = {
  hi: "॥ ॐ नमः शिवाय ॥\n🙏 **नमस्ते! मैं SANATAN HI हूँ** — आपका पूर्णतः **ऑफ़लाइन** सनातन-ज्ञान सहायक।\nमेरे ग्रंथ-कोश में **भगवद्गीता, वाल्मीकि रामायण, महाभारत, भागवत एवं शिव पुराण, वेद, उपनिषद्, हनुमान चालीसा** आदि शास्त्रों के श्लोक **संस्कृत, हिंदी और अंग्रेज़ी** — तीनों भाषाओं में सुरक्षित हैं।\n\nआप पूछ सकते हैं — कर्म, आत्मा, धर्म, मोक्ष, भक्ति के विषय पर; किसी अध्याय की जानकारी; या सीधा **\"गीता 2.47\"** जैसे संदर्भ। 🙏",
  en: "॥ Om Namah Shivaya ॥\n🙏 **Namaste! I am SANATAN HI** — your fully **offline** Sanatan-knowledge companion.\nMy scripture corpus holds verses from the **Bhagavad Gita, Valmiki Ramayana, Mahabharata, Bhagavata & Shiva Purana, the Vedas, Upanishads, Hanuman Chalisa** and more — each in **Sanskrit, Hindi and English**.\n\nAsk me about karma, atman, dharma, moksha or bhakti; request any chapter's summary; or cite a reference directly, like **\"Gita 2.47\"**. 🙏",
  sa: "॥ ॐ नमः शिवाय ॥\n🙏 **नमस्ते। अहं सनातन HI अस्मि** — सम्पूर्णतः **निरपेक्ष-जाल (offline) शास्त्र-कोशः**।\nगीता-रामायण-महाभारत-पुराण-वेद-उपनिषद्-चालीसादीनां श्लोकाः **संस्कृत-हिन्दी-आङ्ग्लभाषासु** सन्निहिताः सन्ति।\nपृच्छतु — कर्म, आत्मा, धर्म, मोक्ष, भक्ति विषये; अध्याय-परिचय; किंवा **\"गीता 2.47\"** इति संदर्भ। 🙏",
};

const SUGGESTIONS: Record<ResponseLang, string[]> = {
  hi: ["गीता 2.47 का अर्थ", "कर्म योग क्या है?", "हनुमान चालीसा सुनाओ", "12 ज्योतिर्लिंग बताओ", "आज का श्लोक", "मृत्यु पर गीता क्या कहती है?"],
  en: ["Gita 2.47 meaning", "What is Karma Yoga?", "Tell me about Shiva", "The 12 Jyotirlingas", "Verse of the day", "What happens after death?"],
  sa: ["गीता २.४७", "कर्म योगः किम्?", "शिवः कः?", "अद्य श्लोकः", "आत्मा का?", "ज्योतिर्लिङ्गानि ब्रूहि"],
};

const FOUND_INTRO: Record<ResponseLang, string> = {
  hi: "इस विषय पर मेरे ग्रंथ-कोश से ये प्रमाण मिले —",
  en: "Here is what the scriptures of my corpus hold on this —",
  sa: "अस्मिन् विषये शास्त्र-कोशात् इदं लभ्यते —",
};

const NOT_FOUND: Record<ResponseLang, string> = {
  hi: "🙏 इस विषय पर मेरे वर्तमान ग्रंथ-कोश में स्पष्ट प्रमाण नहीं मिला।\n\n**मैं इन विषयों में सहायक हूँ** — कर्म · धर्म · आत्मा · ब्रह्म · मोक्ष · भक्ति · योग · माया · गुरु · युग · अवतार · मृत्यु · शान्ति · राम · कृष्ण · शिव · हनुमान · देवी · गंगा · ज्योतिर्लिंग ...\n\nकुछ और शब्दों में पूछने का प्रयास करें, या नीचे के सुझाव चुनें।",
  en: "🙏 I could not find clear references on this in my current corpus.\n\n**I can help with** — karma · dharma · atman · Brahman · moksha · bhakti · yoga · maya · guru · yugas · avatars · death · peace · Rama · Krishna · Shiva · Hanuman · Devi · Ganga · jyotirlingas ...\n\nTry rephrasing, or pick a suggestion below.",
  sa: "🙏 अस्मिन् विषये मम कोशे स्पष्टं प्रमाणं न लभ्यते।\n\n**अहं एतेषु विषयेषु साहाय्यं करोमि** — कर्म · धर्म · आत्मा · ब्रह्म · मोक्ष · भक्ति · योग · माया · गुरुः · युगानि · अवताराः · मृत्युः · रामः · कृष्णः · शिवः ...\n\nअन्येन शब्देन पृच्छतु।",
};

/* ──────────────────────────── helpers ─────────────────────────── */

function detectLang(query: string, forced: ResponseLang | "auto"): ResponseLang {
  if (forced !== "auto") return forced;
  return devanagariRatio(query) > 0.25 ? "hi" : "en";
}

function pickSuggestions(lang: ResponseLang, used: string[] = []): string[] {
  const pool = SUGGESTIONS[lang];
  return pool.filter((s) => !used.includes(s)).slice(0, 4);
}

function dayIndex(): number {
  const d = new Date();
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

const FAMOUS_IDS = ["bg-2-47", "bg-4-7-8", "bg-2-20", "bg-18-66", "rv-gayatri-3-62-10", "up-brihad-asato", "up-chand-tattvamasi", "mbh-yaksha-ashcharya", "bp-dharma-bhakti", "shiv-jyotirlinga-stotra", "chalisa-budhihin", "rv-mrityunjaya-7-59-12", "up-purnamadah", "bg-2-22", "bg-12-13-14"];

export function dailyVerse(): CorpusEntry {
  const pool = FAMOUS_IDS.map((id) => CORPUS.find((e) => e.id === id)).filter(Boolean) as CorpusEntry[];
  return pool[dayIndex() % pool.length];
}

function randomVerse(): CorpusEntry {
  const pool = CORPUS.filter((e) => e.sanskrit && e.kind !== "concept");
  return pool[Math.floor(Math.random() * pool.length)];
}

function bookReply(book: BookInfo, lang: ResponseLang): { text: string; verses: CorpusEntry[] } {
  const bookEntries = CORPUS.filter((e) => e.bookId === book.id);
  const sample = bookEntries.filter((e) => e.sanskrit).slice(0, 2);
  const verses = sample.length ? sample : bookEntries.slice(0, 2);
  if (lang === "en") {
    const sectionsPreview = book.sections.slice(0, 4).map((s, i) => `${i + 1}. **${s.name}** — ${s.descEn}`).join("\n");
    const more = book.sections.length > 4 ? `\n*…and ${book.sections.length - 4} more chapters.*` : "";
    return {
      text: `📖 **${book.name}** (${book.nameSa})\n${book.descEn}\n\n**Author:** ${book.author} · **Era:** ${book.era}\n\n**Structure:**\n${sectionsPreview}${more}\n\nMy corpus holds **${bookEntries.length} reference entries** from this scripture. Ask for any chapter — e.g. *"${book.id === "bhagavad-gita" ? "Gita chapter 2" : book.name + " chapters"}"*.`,
      verses,
    };
  }
  if (lang === "sa") {
    return {
      text: `📖 **${book.nameSa}**\n${book.descHi}\n\nकर्ता: ${book.authorHi}\nअध्यायाः: ${book.sections.map((s) => s.name).slice(0, 6).join(" · ")}\n\nविस्तारेण पृच्छतु।`,
      verses,
    };
  }
  const sectionsPreview = book.sections.slice(0, 4).map((s, i) => `${i + 1}. **${s.name}** — ${s.descHi}`).join("\n");
  const more = book.sections.length > 4 ? `\n*…और ${book.sections.length - 4} अध्याय।*` : "";
  return {
    text: `📖 **${book.nameHi}** (${book.nameSa})\n${book.descHi}\n\n**रचयिता:** ${book.authorHi} · **काल:** ${book.era}\n\n**संरचना:**\n${sectionsPreview}${more}\n\nइस ग्रंथ के **${bookEntries.length} प्रविष्टियाँ** मेरे कोश में हैं। कोई भी अध्याय पूछें — जैसे *"गीता अध्याय 2"*।`,
    verses,
  };
}

function chapterReply(book: BookInfo, chapterNo: number, lang: ResponseLang): { text: string; verses: CorpusEntry[] } {
  const idx = chapterNo - 1;
  const sec = book.sections[idx];
  if (!sec) {
    const en = lang === "en";
    return {
      text: en
        ? `Chapter ${chapterNo} — I could not find this chapter. ${book.name} has **${book.sections.length} chapters**.`
        : `अध्याय ${chapterNo} — यह अध्याय नहीं मिला। ${book.nameHi} में **${book.sections.length} अध्याय** हैं।`,
      verses: [],
    };
  }
  const verses = CORPUS.filter((e) => e.bookId === book.id && e.chapter === String(chapterNo)).slice(0, 3);
  const label = sec.label ?? "";
  if (lang === "en") {
    return {
      text: `📖 **${book.name} — ${label ? label + " · " : ""}${sec.name}** (${sec.nameEn})\n\n${sec.descEn}\n\n${verses.length ? "Key verses from this chapter:" : "Ask me for specific verses, e.g. 'Gita 2.47'."}`,
      verses,
    };
  }
  if (lang === "sa") {
    return {
      text: `📖 **${book.nameSa} — ${sec.name}**\n\n${sec.descHi}\n\n${verses.length ? "अस्मिन् अध्याये मुख्यश्लोकाः:" : "श्लोकान् पृच्छतु।"}`,
      verses,
    };
  }
  return {
    text: `📖 **${book.nameHi} — ${label ? label + " · " : ""}${sec.name}**\n\n${sec.descHi}\n\n${verses.length ? "इस अध्याय के प्रमुख श्लोक:" : "श्लोक का संदर्भ पूछें, जैसे 'गीता 2.47'।"}`,
    verses,
  };
}

function verseLookup(bookId: string | null, ch: number, vs: number, lang: ResponseLang): { text: string; verses: CorpusEntry[] } {
  const targetBook = bookId ?? "bhagavad-gita";
  const candidates = CORPUS.filter((e) => {
    if (!e.chapter || !e.verse) return false;
    if (e.bookId !== targetBook) return false;
    const chapterNum = parseInt(e.chapter, 10);
    if (chapterNum !== ch) return false;
    // verse may be "47", "47-48", "4.7" or "1.1.1"
    const nums = e.verse.split(/[.\-]/).map((x) => parseInt(x.replace(/\D/g, ""), 10)).filter((n) => !isNaN(n));
    return nums.includes(vs);
  });
  if (candidates.length > 0) {
    const v = candidates[0];
    const t = { hi: `📜 **${v.sectionHi ?? v.section}** — श्लोक ${v.verse}\n\nनीचे संस्कृत, हिंदी अर्थ और अंग्रेज़ी अनुवाद प्रस्तुत है —`, en: `📜 **${v.section} — verse ${v.verse}**\n\nSanskrit text, Hindi meaning and English translation below —`, sa: `📜 **${v.sectionHi} — श्लोकः ${v.verse}**\n\nसंस्कृतम्, हिन्दी-अर्थः, आङ्ग्लानुवादः अधः —` };
    return { text: t[lang], verses: [v] };
  }
  // fallback to chapter
  const book = BOOK_MAP[targetBook];
  if (book) {
    const r = chapterReply(book, ch, lang);
    const t = { hi: `इस ग्रंथ में अध्याय ${ch} का श्लोक ${vs} मेरे कोश में विशेष रूप से संकलित नहीं है — किंतु अध्याय का परिचय यह रहा:`, en: `Verse ${vs} of chapter ${ch} is not individually compiled in my corpus — here is the chapter's overview:`, sa: `अध्याय ${ch} श्लोकः ${vs} कोशे नास्ति — अध्याय-परिचयः:` };
    return { text: t[lang] + "\n\n" + r.text, verses: r.verses };
  }
  return { text: NOT_FOUND[lang], verses: [] };
}

/* ──────────────────────────── main entry ─────────────────────────── */

export function chat(message: string, forced: ResponseLang | "auto" = "auto"): ChatResult {
  const started = Date.now();
  const query = message.trim();
  const lang = detectLang(query, forced);
  const used: string[] = [];

  if (!query) {
    return finish("greeting", GREETING[lang], [], pickSuggestions(lang), lang, 0, started);
  }

  // 1. greetings & basics
  if (GREETING_RE.test(query)) {
    return finish("greeting", GREETING[lang], [], pickSuggestions(lang), lang, 0, started);
  }
  if (THANKS_RE.test(query)) {
    const t = {
      hi: "🙏 आपका सेवा में। शास्त्र-ज्ञान की यही साधना है — पूछते रहिए, बढ़ते रहिए।\n\n*असतो मा सद्गमय — असत्य से सत्य की ओर बढ़ते रहें।*",
      en: "🙏 Ever at your service. This is the sadhana of scripture — keep asking, keep growing.\n\n*Asato ma sadgamaya — from the unreal, lead me to the Real.*",
      sa: "🙏 सेवायै सदा तत्परः। पृच्छतु, वर्धतु।",
    };
    return finish("thanks", t[lang], [], pickSuggestions(lang), lang, 0, started);
  }
  if (HELP_RE.test(query)) {
    const t = {
      hi: "🪔 **SANATAN HI के साथ —**\n\n• **विषय पूछें** — कर्म, आत्मा, भक्ति, मोक्ष, मृत्यु, मन की शान्ति...\n• **संदर्भ दें** — *गीता 2.47, गीता अध्याय 12*\n• **ग्रंथ का परिचय** — *रामायण के बारे में बताओ*\n• **स्तोत्र-मंत्र** — *हनुमान चालीसा, गायत्री मंत्र, ज्योतिर्लिंग स्तोत्र*\n• **कथाएँ** — *प्रह्लाद, गजेन्द्र मोक्ष, समुद्र मन्थन, ध्रुव*\n• **आज का श्लोक** — *daily verse*\n\nमैं पूर्णतः ऑफ़लाइन चलता हूँ — तीन भाषाओं (हिंदी · संस्कृत · English) में उत्तर देता हूँ।",
      en: "🪔 **With SANATAN HI you can —**\n\n• **Ask a topic** — karma, atman, bhakti, moksha, death, peace of mind...\n• **Cite a reference** — *Gita 2.47, Gita chapter 12*\n• **Get a book overview** — *tell me about Ramayana*\n• **Stotras & mantras** — *Hanuman Chalisa, Gayatri, Jyotirlinga Stotra*\n• **Stories** — *Prahlada, Gajendra Moksha, Samudra Manthan, Dhruva*\n• **Verse of the day** — *daily verse*\n\nI run fully offline — answering in three languages (Hindi · Sanskrit · English).",
      sa: "🪔 **सनातन HI सह — विषयः, संदर्भः, ग्रन्थ-परिचयः, स्तोत्राणि, कथाः, अद्यश्लोकः च।**",
    };
    return finish("help", t[lang], [], pickSuggestions(lang), lang, 0, started);
  }

  // 2. stats
  if (STATS_RE.test(query)) {
    const t = {
      hi: `📊 **मेरा ग्रंथ-कोश (offline corpus)**\n\n• **ग्रंथ-संग्रह:** ${CORPUS_STATS.books}\n• **कुल प्रविष्टियाँ:** ${CORPUS_STATS.entries}\n• **संस्कृत श्लोक/स्तोत्र:** ${CORPUS_STATS.versesWithSanskrit}\n• **दार्शनिक अवधारणाएँ:** ${CORPUS_STATS.concepts}\n• **कथाएँ:** ${CORPUS_STATS.stories}\n• **भाषाएँ:** संस्कृत · हिंदी · English\n\n*ग्रंथ: भगवद्गीता · वाल्मीकि रामायण · महाभारत · भागवत पुराण · शिव पुराण · विष्णु पुराण · चारों वेद · 10 प्रमुख उपनिषद् · स्तोत्र-संग्रह (हनुमान चालीसा आदि) · धार्मिक अवधारणाएँ*`,
      en: `📊 **My scripture corpus (offline)**\n\n• **Scripture collections:** ${CORPUS_STATS.books}\n• **Total reference entries:** ${CORPUS_STATS.entries}\n• **Sanskrit verses/hymns:** ${CORPUS_STATS.versesWithSanskrit}\n• **Philosophical concepts:** ${CORPUS_STATS.concepts}\n• **Stories:** ${CORPUS_STATS.stories}\n• **Languages:** Sanskrit · Hindi · English\n\n*Books: Bhagavad Gita · Valmiki Ramayana · Mahabharata · Bhagavata Purana · Shiva Purana · Vishnu Purana · Four Vedas · 10 major Upanishads · Stotras (Hanuman Chalisa…) · Dharma concepts*`,
      sa: `📊 **कोशः — ${CORPUS_STATS.books} ग्रन्थाः, ${CORPUS_STATS.entries} प्रविष्टयः। संस्कृत-हिन्दी-आङ्ग्लभाषाः।**`,
    };
    return finish("stats", t[lang], [], pickSuggestions(lang), lang, 0, started);
  }

  // 3. book list
  if (BOOKLIST_RE.test(query)) {
    const lines = BOOKS.map((b) => `• **${b.nameHi}** (${b.name}) — ${CORPUS.filter((e) => e.bookId === b.id).length} प्रविष्टियाँ`).join("\n");
    const t = {
      hi: `📚 **SANATAN HI का ग्रंथ-कोश**\n\n${lines}\n\nकिसी भी ग्रंथ पर क्लिक करें या उसका नाम पूछें।`,
      en: `📚 **The SANATAN HI corpus**\n\n${BOOKS.map((b) => `• **${b.name}** (${b.nameHi}) — ${CORPUS.filter((e) => e.bookId === b.id).length} entries`).join("\n")}\n\nOpen any book from the sidebar, or ask for it by name.`,
      sa: `📚 **ग्रन्थकोशः**\n\n${lines}`,
    };
    return finish("book-list", t[lang], [], pickSuggestions(lang), lang, 0, started);
  }

  // 4. verse of the day / random
  if (RANDOM_RE.test(query)) {
    const v = query.toLowerCase().includes("daily") || query.includes("आज") || query.includes("of the day") ? dailyVerse() : randomVerse();
    const t = {
      hi: `🕉️ **आज का दिव्य श्लोक** — *${v.sectionHi ?? v.section}*`,
      en: `🕉️ **Divine verse of the day** — *${v.section}*`,
      sa: `🕉️ **अद्य श्लोकः** — *${v.sectionHi}*`,
    };
    return finish("daily", t[lang], [v], pickSuggestions(lang), lang, 1, started);
  }

  // 5. explicit verse reference  (e.g. "2.47", "geeta 2.47", "अध्याय 2 श्लोक 47")
  const bookId = detectBook(query);
  const cv = query.match(CH_VERSE_RE);
  const vm = query.match(VERSE_RE);
  if (vm) {
    const ch = parseInt(vm[1], 10);
    const vs = parseInt(vm[2], 10);
    if (ch >= 1 && ch <= 18 && vs >= 1 && vs <= 800) {
      const r = verseLookup(bookId, ch, vs, lang);
      return finish("verse-lookup", r.text, r.verses, pickSuggestions(lang), lang, r.verses.length, started);
    }
  } else if (cv) {
    const ch = parseInt(cv[2], 10);
    const vs = parseInt(cv[4], 10);
    const r = verseLookup(bookId, ch, vs, lang);
    return finish("verse-lookup", r.text, r.verses, pickSuggestions(lang), lang, r.verses.length, started);
  }

  // 6. chapter request
  const chm = query.match(CHAPTER_RE);
  if (chm && !VERSE_RE.test(query)) {
    let numTok = (chm[3] ?? "").trim().toLowerCase();
    const num = parseInt(numTok, 10) || parseInt(HINDI_NUM[numTok] ?? EN_NUM[numTok] ?? "0", 10);
    if (num >= 1 && num <= 20) {
      const target = bookId ?? "bhagavad-gita";
      const book = BOOK_MAP[target];
      if (book) {
        const r = chapterReply(book, num, lang);
        return finish("chapter", r.text, r.verses, pickSuggestions(lang), lang, r.verses.length, started);
      }
    }
  }

  // 7. about a book
  if (bookId && ABOUT_RE.test(query)) {
    const r = bookReply(BOOK_MAP[bookId], lang);
    return finish("book-info", r.text, r.verses, pickSuggestions(lang), lang, r.verses.length, started);
  }

  // 8. book mentioned alone with short query → book info
  if (bookId && tokenize(query).filter((t) => !isStopword(t)).length <= 2 && !VERSE_RE.test(query)) {
    const r = bookReply(BOOK_MAP[bookId], lang);
    return finish("book-info", r.text, r.verses, pickSuggestions(lang), lang, r.verses.length, started);
  }

  // 9. default: semantic-ish topic search
  const results = search(query, 6);
  if (results.length === 0 || results[0].score < 0.35) {
    return finish("not-found", NOT_FOUND[lang], [], pickSuggestions(lang), lang, results.length, started);
  }
  const topEntries = results.slice(0, 5).map((r) => r.entry);
  const concept = topEntries.find((e) => e.kind === "concept" || e.kind === "story");
  const verses = topEntries.slice(0, 4);

  let text = "";
  if (lang === "en") {
    text = concept
      ? `🕯️ **${concept.title ?? concept.titleHi}**\n\n${concept.english}\n\n${FOUND_INTRO[lang]}`
      : `${FOUND_INTRO[lang]}`;
  } else if (lang === "sa") {
    text = concept
      ? `🕯️ **${concept.titleHi ?? concept.title}**\n\n${concept.hindi}\n\n${FOUND_INTRO[lang]}`
      : `${FOUND_INTRO[lang]}`;
  } else {
    text = concept
      ? `🕯️ **${concept.titleHi ?? concept.title}**\n\n${concept.hindi}\n\n${FOUND_INTRO[lang]}`
      : `${FOUND_INTRO[lang]}`;
  }

  used.push(query);
  return finish("search", text, verses, pickSuggestions(lang), lang, results.length, started);

  function finish(
    intent: string,
    reply: string,
    v: CorpusEntry[],
    sug: string[],
    l: ResponseLang,
    matched: number,
    start: number
  ): ChatResult {
    return {
      reply,
      verses: v,
      suggestions: sug,
      intent,
      lang: l,
      meta: { matched, timeMs: Date.now() - start, corpusSize: CORPUS_STATS.entries },
    };
  }
}
