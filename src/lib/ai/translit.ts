/**
 * SANATAN HI — offline transliteration utilities.
 * Devanagari → roman, diacritic folding and multilingual token handling.
 * No network. Pure functions.
 */

const CONSONANTS: Record<string, string> = {
  "क": "k", "ख": "kh", "ग": "g", "घ": "gh", "ङ": "ng",
  "च": "ch", "छ": "chh", "ज": "j", "झ": "jh", "ञ": "ny",
  "ट": "t", "ठ": "th", "ड": "d", "ढ": "dh", "ण": "n",
  "त": "t", "थ": "th", "द": "d", "ध": "dh", "न": "n",
  "प": "p", "फ": "ph", "ब": "b", "भ": "bh", "म": "m",
  "य": "y", "र": "r", "ल": "l", "व": "v", "ळ": "l",
  "श": "sh", "ष": "sh", "स": "s", "ह": "h",
  "ज़": "z", "फ़": "f", "ख़": "kh", "ग़": "g", "ड़": "d", "ढ़": "dh",
  "क्ष": "ksh", "ज्ञ": "gy",
};

const VOWEL_SIGNS: Record<string, string> = {
  "ा": "a", "ि": "i", "ी": "i", "ु": "u", "ू": "u", "ृ": "ri",
  "े": "e", "ै": "ai", "ो": "o", "ौ": "au",
  "ं": "n", "ँ": "n", "ः": "h",
};

const INDEPENDENT_VOWELS: Record<string, string> = {
  "अ": "a", "आ": "a", "इ": "i", "ई": "i", "उ": "u", "ऊ": "u",
  "ऋ": "ri", "ए": "e", "ऐ": "ai", "ओ": "o", "औ": "au",
  "ॠ": "ri", "ऌ": "lri",
};

const VIRAMA = "\u094D"; // ्
const OM = "\u0950"; // ॐ

const DIACRITIC_FOLD: Record<string, string> = {
  "ā": "a", "ī": "i", "ū": "u", "ṛ": "ri", "ṝ": "ri", "ḷ": "lri",
  "ṭ": "t", "ḍ": "d", "ṇ": "n", "ś": "s", "ṣ": "s", "ḥ": "h",
  "ṃ": "m", "ñ": "n", "ğ": "g", "ṅ": "n", "ē": "e", "ō": "o",
  "ä": "a", "ï": "i",
};

/** Fold IAST diacritics to plain ASCII (karmaṇy → karmay...). */
export function foldDiacritics(s: string): string {
  return s
    .replace(/[āīūṛṝḷṭḍṇśṣḥṃñğṅēōäï]/g, (c) => DIACRITIC_FOLD[c] ?? c)
    .replace(/ṣ/g, "s");
}

/** Transliterate a Devanagari string into readable roman (loose). */
export function devanagariToRoman(text: string): string {
  let out = "";
  const chars = Array.from(text);
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch === OM) { out += "om"; continue; }
    if (ch === "।" || ch === "॥" || ch === "|" || ch === "\u0965") { continue; }
    if (INDEPENDENT_VOWELS[ch]) { out += INDEPENDENT_VOWELS[ch]; continue; }
    if (CONSONANTS[ch]) {
      const base = CONSONANTS[ch];
      const next = chars[i + 1];
      if (next && VOWEL_SIGNS[next]) {
        const vs = VOWEL_SIGNS[next];
        // consonant + explicit vowel sign (n/m/h are anusvara/visarga)
        out += vs === "n" || vs === "h" ? base + "a" + vs : base + vs;
        i++; // consume vowel sign
        continue;
      }
      if (next && next === VIRAMA) {
        out += base; // suppressed inherent a
        i++; // consume virama
        continue;
      }
      out += base + "a"; // inherent a
      continue;
    }
    if (VOWEL_SIGNS[ch]) {
      // stray vowel sign (after independent vowel) — append
      const vs = VOWEL_SIGNS[ch];
      out += vs === "n" || vs === "h" ? vs : "";
      continue;
    }
    if (ch === VIRAMA) continue;
    if (/\s/.test(ch)) { out += " "; continue; }
    if (/[0-9]/.test(ch)) { out += ch; continue; }
    out += ch;
  }
  return out;
}

/** True if string contains Devanagari letters. */
export function hasDevanagari(s: string): boolean {
  return /[\u0900-\u097F]/.test(s);
}

/** Rough proportion of Devanagari letters in the string. */
export function devanagariRatio(s: string): number {
  const letters = s.replace(/[^\p{L}]/gu, "");
  if (!letters.length) return 0;
  const dev = letters.match(/[\u0900-\u097F]/g)?.length ?? 0;
  return dev / letters.length;
}

/**
 * Tokenize a string for search:
 * returns lowercase word tokens plus their transliterated forms when Devanagari.
 */
export function tokenize(text: string): string[] {
  const raw = text
    .replace(/[।॥.,;:!?()\[\]{}"'—–\-_/\\]/g, " ")
    .split(/\s+/)
    .map((w) => w.trim().toLowerCase())
    .filter((w) => w.length > 0);
  const tokens = new Set<string>();
  for (const w of raw) {
    if (hasDevanagari(w)) {
      // strip trailing visarga/anusvara for matching: शिवः → शिव
      const stripped = w.replace(/[ःंँ]+$/u, "");
      for (const word of stripped === w ? [w] : [w, stripped]) {
        const roman = foldDiacritics(devanagariToRoman(word));
        for (const part of roman.split(/\s+/)) {
          if (part.length > 1) tokens.add(part);
        }
      }
    } else {
      tokens.add(foldDiacritics(w));
    }
  }
  return Array.from(tokens).filter((t) => t.length > 1 || t === "om");
}

/** Common synonyms: query words → canonical corpus tokens. */
export const SYNONYMS: Record<string, string[]> = {
  "gita": ["geeta", "gitа", "bhagavad", "bhagwat", "bhagavat", "गीता", "gita"],
  "krishna": ["कृष्ण", "kanhaiya", "kanha", "kanhaiya", "madhav", "gopal", "govinda", "murali", "shyam"],
  "rama": ["राम", "ram", "ramchandra", "ramachandra", "raghava", "ramji", "shriram"],
  "shiva": ["शिव", "mahadev", "महादेव", "shankar", "शंकर", "bholenath", "rudra", "nilkanth", "shambhu"],
  "hanuman": ["हनुमान", "bajrang", "bajrangbali", "pavanputra", "maruti", "anjanisut", "balbir"],
  "parvati": ["पार्वती", "uma", "gauri", "durga", "दुर्गा", "shakti", "देवी", "ambe", "jagdamba"],
  "ganesha": ["गणेश", "ganesh", "ganapati", "विनायक", "vinayaka", "gajanan", "ekadanta"],
  "karma": ["कर्म", "karm", "action", "deed", "karmyog"],
  "dharma": ["धर्म", "dharm", "duty", "religion"],
  "moksha": ["मोक्ष", "mukti", "मुक्ति", "liberation", "nirvana", "salvation"],
  "atman": ["आत्मा", "aatma", "atma", "soul", "self", "jeev"],
  "brahman": ["ब्रह्म", "brahma tatva", "absolute", "paramatma", "परमात्मा"],
  "bhakti": ["भक्ति", "devotion", "prem", "प्रेम", "love"],
  "death": ["मृत्यु", "mrityu", "maut", "die", "died", "deathlike", "narahara"],
  "yoga": ["योग", "yog", "meditation", "dhyan", "ध्यान"],
  "maya": ["माया", "illusion", "moh", "मोह"],
  "peace": ["शान्ति", "shanti", "shaanti", "calm", "peaceful", "tranquility"],
  "mind": ["मन", "mana", "chit", "मानस"],
  "soul": ["atman", "आत्मा", "aatma"],
  "world": ["jagat", "जगत", "world", "samsar", "संसार", "vishva"],
  "avatar": ["अवतार", "incarnation", "avtar"],
  "guru": ["गुरु", "teacher", "master", "acharya", "आचार्य"],
  "yug": ["युग", "yuga", "age", "kali", "कलि", "kalyug"],
  "jyotirlinga": ["ज्योतिर्लिंग", "jyotirling", "linga", "लिंग", "somnath", "केदारनाथ"],
  "chalisa": ["चालीसा", "chaleza", "hanuman chalisa"],
  "mantra": ["मंत्र", "जाप", "japa", "chant", "chanting"],
  "gayatri": ["गायत्री"],
  "mrityunjaya": ["मृत्युंजय", "mahamrityunjaya", "tryambakam"],
};

/** Expand a token with its synonyms (both directions). */
export function expandToken(token: string): string[] {
  const t = foldDiacritics(token.toLowerCase());
  const out = new Set<string>([t]);
  const roman = hasDevanagari(token) ? foldDiacritics(devanagariToRoman(token)) : t;
  out.add(roman);
  for (const [key, values] of Object.entries(SYNONYMS)) {
    const group = [key, ...values];
    if (group.some((g) => g.toLowerCase() === t || g.toLowerCase() === roman)) {
      for (const g of group) {
        out.add(foldDiacritics(devanagariToRoman(g.toLowerCase())));
        out.add(g.toLowerCase());
      }
    }
  }
  return Array.from(out).filter(Boolean);
}

const STOPWORDS = new Set([
  // English
  "the", "a", "an", "is", "are", "was", "what", "who", "whom", "which", "of", "in", "on",
  "to", "for", "and", "or", "but", "do", "does", "did", "can", "could", "you", "your",
  "me", "my", "i", "we", "our", "it", "its", "this", "that", "these", "those", "tell",
  "about", "please", "how", "why", "when", "where", "give", "show", "find", "search",
  "from", "by", "with", "as", "at", "be", "been", "will", "would", "should", "shall",
  "there", "their", "some", "any", "all", "get", "let", "us", "am", "hi", "hello",
  // Hindi / Hinglish (in roman + devanagari)
  "का", "के", "की", "में", "से", "है", "हैं", "था", "थी", "को", "ने", "पर", "और",
  "एक", "यह", "वह", "ये", "वे", "मुझे", "हमें", "क्या", "कैसे", "कब", "कहाँ", "कौन",
  "बताओ", "बता", "बताइए", "बतायें", "बताओ", "सुनाओ", "सुनाइए", "चाहिए", "करो", "करें",
  "का", "मे", "se", "hai", "hain", "kya", "kaun", "kaise", "kab", "kahan", "batao",
  "bata", "sunao", "chahiye", "karo", "kare", "kya", "mujhe", "hamen", "aur", "ek",
  "yahi", "wah", "ye", "vo", "na", "nahi", "nhi", "par", "pe", "ko", "ne", "ka", "ki", "ke",
  "arthur", "thonn",
]);

export function isStopword(t: string): boolean {
  return STOPWORDS.has(t);
}
