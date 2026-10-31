// ── SanatanDoc core data: categories, bookshelves, books ──────────────────────

export interface SanatanCategory {
  id: string;
  name: string;
  sanskrit: string;
  icon: string; // lucide icon key, resolved in component
  tagline: string;
  description: string;
  facts: string[];
  bookIds: string[];
  bankCategory?: string;
}

export const CATEGORIES: SanatanCategory[] = [
  {
    id: 'vedas',
    name: 'Vedas',
    sanskrit: 'वेद',
    icon: 'book-open-text',
    tagline: 'The four eternal wellsprings of knowledge',
    description:
      'The Vedas are the oldest scriptures of Sanatan Dharma — apaurusheya (not of human origin) in tradition, preserved for millennia through an unbroken oral tradition of extraordinary precision. Each Veda has four layers: Samhita (hymns), Brahmana (ritual guides), Aranyaka (forest teachings) and Upanishad (philosophy).',
    facts: [
      'Four Vedas: Rig, Yajur, Sama and Atharva',
      'Rig Veda: 10 mandalas, 1,028 suktas, ~10,600 verses',
      'Gayatri Mantra — Rig Veda 3.62.10',
      'Preserved orally with 11 patha recitation styles',
      '"Veda" derives from the root vid — to know',
    ],
    bookIds: ['rig-veda', 'yajur-veda', 'sama-veda', 'atharva-veda'],
    bankCategory: 'Vedas & Shruti',
  },
  {
    id: 'upanishads',
    name: 'Upanishads',
    sanskrit: 'उपनिषद्',
    icon: 'flame',
    tagline: 'The culminating wisdom of the Vedas — Vedanta',
    description:
      'The Upanishads are the philosophical crown of the Vedas, dialogues between teacher and disciple on the nature of the Self (Atman), Brahman, and liberation (moksha). Ten are traditionally honoured as principal (mukhya) Upanishads, and Adi Shankaracharya wrote commentaries on them.',
    facts: [
      'Traditionally 108 Upanishads listed in the Muktikā canon',
      '10 principal Upanishads carry Shankara’s bhashyas',
      'Four mahavakyas: Tat Tvam Asi, Aham Brahmasmi, Prajnanam Brahma, Ayam Atma Brahma',
      'Isha Upanishad opens: "Ishavasyam idam sarvam"',
      'Mandukya Upanishad analyses OM and the four states of consciousness',
    ],
    bookIds: ['isha', 'katha', 'mandukya', 'chandogya', 'brihadaranyaka'],
    bankCategory: 'Upanishads & Philosophy',
  },
  {
    id: 'gita',
    name: 'Bhagavad Gita',
    sanskrit: 'श्रीमद्भगवद्गीता',
    icon: 'scroll-text',
    tagline: 'The song of the divine — 700 verses, 18 chapters',
    description:
      'Spoken by Shri Krishna to Arjuna on the battlefield of Kurukshetra, the Gita distils the essence of the Upanishads into a practical manual of living. It weaves together Karma Yoga (action), Bhakti Yoga (devotion) and Jnana Yoga (knowledge) into one integrated path.',
    facts: [
      '18 chapters, 700 verses, part of the Bhishma Parva of the Mahabharata',
      'Chapter 2.47: "Karmanye vadhikaraste ma phaleshu kadachana"',
      'Chapter 11 reveals the Vishvarupa — the universal form',
      'Chapter 9 is called Raja-vidya Raja-guhya — the king of sciences, king of secrets',
      'Commentaries by Shankara, Ramanuja, Madhva, Tilak and Gandhi alike',
    ],
    bookIds: ['bhagavad-gita', 'vishnu-sahasranama'],
    bankCategory: 'Bhagavad Gita',
  },
  {
    id: 'puranas',
    name: 'Puranas',
    sanskrit: 'पुराण',
    icon: 'library',
    tagline: 'Ancient lore — 18 Mahapuranas of stories and dharma',
    description:
      'The Puranas carry the wisdom of the Vedas to every household through story, symbol and celebration. Eighteen Mahapuranas are traditionally counted, grouped around Brahma, Vishnu and Shiva, with the Srimad Bhagavatam beloved as the ripened fruit of Vedic literature.',
    facts: [
      '18 Mahapuranas grouped around Brahma, Vishnu and Shiva',
      'Srimad Bhagavatam: 18,000 verses, 12 cantos; Krishna-lila in the 10th canto',
      'Five characteristics (pancha-lakshana): creation, dissolution, genealogy, cosmic cycles, history',
      'Devi Mahatmya (Durga Saptashati) belongs to the Markandeya Purana',
      'Skanda Purana is the largest by volume',
    ],
    bookIds: ['bhagavata', 'vishnu-purana', 'shiva-purana', 'markandeya'],
    bankCategory: 'Puranas & Deities',
  },
  {
    id: 'ramayana',
    name: 'Ramayana',
    sanskrit: 'रामायण',
    icon: 'swords',
    tagline: 'The first poem — Maryada Purushottama Rama’s path',
    description:
      'Composed by Sage Valmiki, the Ramayana is the adi-kavya — the first epic poem. It follows Shri Rama’s fourteen-year exile, the abduction of Sita, the bridge to Lanka and the victory of dharma, teaching ideal conduct as son, brother, ruler and devotee.',
    facts: [
      '7 kandas (books), ~24,000 shlokas',
      'Valmiki is honoured as the Adi Kavi — the first poet',
      'Aditya Hridayam is taught by Agastya to Rama in the Yuddha Kanda',
      'Tulsidas retold it in Awadhi as the Ramcharitmanas (1574 CE)',
      'Recited during Navratri and Ram Navami across Bharat',
    ],
    bookIds: ['ramayana', 'ramcharitmanas', 'aditya-hridayam'],
    bankCategory: 'Itihasa',
  },
  {
    id: 'mahabharata',
    name: 'Mahabharata',
    sanskrit: 'महाभारत',
    icon: 'shield',
    tagline: 'The longest poem ever written — dharma in action',
    description:
      'Composed by Veda Vyasa, the Mahabharata is the story of the Kuru dynasty and the war at Kurukshetra — and much more: it contains the Bhagavad Gita, Vishnu Sahasranama, and discourses on statecraft and dharma. "What is here may be found elsewhere; what is not here is nowhere."',
    facts: [
      '~100,000 verses across 18 parvas — the longest epic poem',
      'Contains the Bhagavad Gita (Bhishma Parva) and Vishnu Sahasranama (Anushasana Parva)',
      'Shanti Parva is the longest book — Yudhishthira’s crowning discourse',
      'Also called Shatasahasri Samhita — the 100,000-verse compilation',
      'Vyasa is said to have composed it with Ganesha as scribe',
    ],
    bookIds: ['mahabharata', 'bhagavad-gita'],
    bankCategory: 'Itihasa',
  },
  {
    id: 'sanskrit',
    name: 'Sanskrit',
    sanskrit: 'संस्कृत',
    icon: 'languages',
    tagline: 'Devavani — the refined language of the scriptures',
    description:
      'Sanskrit is the sacred language of Sanatan Dharma — perfectly systematised by Panini’s Ashtadhyayi, the most complete grammar ever composed. Its sounds are said to vibrate in harmony with cosmic order, which is why mantras are preserved in the original.',
    facts: [
      'Panini’s Ashtadhyayi: ~4,000 sutras systematising the entire language',
      '49 sounds in the classical varnamala (13 vowels + 33 consonants + 3 others by counting)',
      'Root of countless words across Indian and Southeast Asian languages',
      'Sanskrit metres (chhandas) gave the epics their musical structure',
      'One of the 22 scheduled languages of India; ~13,000+ manuscripts added yearly',
    ],
    bookIds: ['ashtadhyayi', 'meghaduta', 'abhijnana-shakuntalam'],
    bankCategory: 'Vedas & Shruti',
  },
  {
    id: 'puja',
    name: 'Puja & Rituals',
    sanskrit: 'पूजा विधि',
    icon: 'lamp',
    tagline: 'Sacred action — offering the heart at the altar',
    description:
      'Puja is the art of turning everyday life into offering — through sixteen traditional steps (shodashopachara), the lighting of the lamp, flowers, incense, naivedya and aarti. Ritual in Sanatan Dharma is not superstition but yoga of the hands: action made sacred.',
    facts: [
      'Shodashopachara — the 16 traditional offerings in formal puja',
      'The deepak (lamp) symbolises the light of knowledge dispelling ignorance',
      'Aarti — waving light before the deity — closes most pujas',
      'Upanayana — the sacred thread ceremony marking the beginning of study',
      'Shraddha and tarpana — offerings of gratitude to ancestors',
    ],
    bookIds: ['manu-smriti'],
    bankCategory: 'Festivals & Rituals',
  },
  {
    id: 'festivals',
    name: 'Festivals',
    sanskrit: 'उत्सव',
    icon: 'sparkles',
    tagline: 'The calendar of joy — time itself made sacred',
    description:
      'Sanatan festivals follow the tithi (lunar day) and the solar cycle, aligning celebration with cosmic rhythm. From Diwali’s lamps to Holi’s colours, each utsava carries a story, a sadhana and a seasonal wisdom — renewing dharma in family and society.',
    facts: [
      'Diwali — five days from Dhanteras to Bhai Dooj, welcoming Rama’s return',
      'Holi — Holika Dahan on Purnima, colours the next dawn',
      'Maha Shivaratri — the great night of Shiva, Phalguna Krishna Chaturdashi',
      'Navratri — nine nights of the Navadurga, followed by Vijayadashami',
      'Makar Sankranti follows the solar calendar — hence a fixed January date',
    ],
    bookIds: ['bhagavata'],
    bankCategory: 'Festivals & Rituals',
  },
  {
    id: 'yoga',
    name: 'Yoga',
    sanskrit: 'योग',
    icon: 'person-standing',
    tagline: 'Union of the individual self with the Divine',
    description:
      'Yoga is not exercise but a complete science of consciousness. Patanjali’s eight limbs — from yama and niyama to samadhi — form Ashtanga Yoga, while the Gita teaches Karma, Bhakti and Jnana Yoga as parallel paths suited to each seeker’s nature.',
    facts: [
      'Patanjali’s Yoga Sutras: 196 sutras in 4 padas',
      'Yoga Sutras 1.2: "Yogah chitta vritti nirodhah" — yoga stills the mind’s fluctuations',
      'Ashtanga Yoga — 8 limbs: yama, niyama, asana, pranayama, pratyahara, dharana, dhyana, samadhi',
      '"Yuj" — to unite; yoga joins the jivatma to Paramatma',
      'Yoga is one of the six classical darshanas',
    ],
    bookIds: ['yoga-sutras', 'bhagavad-gita'],
    bankCategory: 'Yoga & Dhyana',
  },
  {
    id: 'dhyana',
    name: 'Dhyana',
    sanskrit: 'ध्यान',
    icon: 'moon-star',
    tagline: 'Meditation — the mind turned inward to the Self',
    description:
      'Dhyana is the seventh limb of yoga — sustained, effortless attention that ripens into samadhi. The Upanishads teach "Tat tvam asi" as the truth realised in stillness; the Gita promises the yogi "shanti shantvaram" — a peace beyond the senses.',
    facts: [
      'The syllable OM is the classical object of dhyana (Mandukya Upanishad)',
      'Gita 6.19: the steadfast yogi’s mind is like a lamp in a windless place',
      'Japa — repetition of a mantra or the divine name — is the simplest sadhana',
      'Vipassana-like insight and mantra meditation both trace to Vedic practice',
      'Dhyana travelled east as "Chan" and then "Zen"',
    ],
    bookIds: ['yoga-sutras', 'mandukya'],
    bankCategory: 'Yoga & Dhyana',
  },
  {
    id: 'ayurveda',
    name: 'Ayurveda',
    sanskrit: 'आयुर्वेद',
    icon: 'leaf',
    tagline: 'The science of life — body as temple',
    description:
      'Ayurveda, the upaveda of the Rig (and Atharva) Veda, treats health as the equilibrium of the three doshas and the harmony of body, senses, mind and soul. Its twin classics, the Charaka and Sushruta Samhitas, shaped medicine for millennia.',
    facts: [
      'Charaka Samhita — internal medicine; Sushruta Samhita — surgery (100+ procedures described)',
      'Three doshas: vata, pitta, kapha; seven dhatus; health as their balance',
      'Dinacharya and ritucharya — daily and seasonal routines',
      'Ayurveda aims at four aims of life: dharma, artha, kama, moksha',
      'Sushruta is honoured as the father of surgery',
    ],
    bookIds: ['charaka-samhita', 'sushruta-samhita'],
    bankCategory: 'Yoga & Dhyana',
  },
  {
    id: 'temples',
    name: 'Temples',
    sanskrit: 'मंदिर',
    icon: 'landmark',
    tagline: 'Sacred geometry — the body of the Divine in stone',
    description:
      'A mandir is not a meeting hall but a living embodiment of the deity — built on vastu and agamic principles, from garbhagriha to shikhara. The Char Dham, twelve Jyotirlingas and Shakti Peethas weave a sacred geography across the subcontinent.',
    facts: [
      'Char Dham: Badrinath, Dwarka, Puri, Rameswaram',
      '12 Jyotirlingas honour Shiva; 51 Shakti Peethas honour the Devi',
      'Garbhagriha — the womb-chamber where the murti resides',
      'Kashi (Varanasi) is among the world’s oldest continuously living cities',
      'Temple architecture: Nagara (north), Dravida (south), Vesara (Deccan) styles',
    ],
    bookIds: ['skanda-purana'],
    bankCategory: 'Puranas & Deities',
  },
  {
    id: 'deities',
    name: 'Deities',
    sanskrit: 'देवी-देवता',
    icon: 'sun',
    tagline: 'Many forms, one Divine — the ishta devata',
    description:
      'The devas are not separate gods but facets of one Brahman — "Ekam sat vipra bahudha vadanti" (Truth is one; the wise call it by many names). Ganesha removes obstacles, Saraswati grants learning, Lakshmi abundance, Shiva transforms, Vishnu preserves, Durga protects.',
    facts: [
      'Trimurti: Brahma creates, Vishnu preserves, Shiva transforms',
      '"Ekam sat vipra bahudha vadanti" — Rig Veda 1.164.46',
      'Dashavatara — ten avataras of Vishnu including Rama and Krishna',
      'Ganesha’s mushika (mouse) symbolises the tamed, focused mind',
      'Devi appears as Durga, Lakshmi and Saraswati during Navratri',
    ],
    bookIds: ['bhagavata', 'durga-saptashati'],
    bankCategory: 'Puranas & Deities',
  },
  {
    id: 'darshana',
    name: 'Darshana',
    sanskrit: 'षड्दर्शन',
    icon: 'compass',
    tagline: 'Six visions — the classical schools of philosophy',
    description:
      'Six darshanas give six lenses on reality, each a rigorous system: Nyaya (logic), Vaisheshika (atoms), Samkhya (cosmic principles), Yoga (discipline), Mimamsa (ritual exegesis) and Vedanta (Brahman). Together they form a complete map of Indian philosophy.',
    facts: [
      'Six schools: Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta',
      'Samkhya enumerates 25 tattvas; prakriti and purusha',
      'Vedanta’s three great acharyas: Shankara (Advaita), Ramanuja (Vishishtadvaita), Madhva (Dvaita)',
      'Brahma Sutras — 555 sutras systematising the Upanishads',
      'All six accept the authority of the Vedas (astika)',
    ],
    bookIds: ['brahma-sutras', 'samkhya-karika', 'yoga-sutras'],
    bankCategory: 'Upanishads & Philosophy',
  },
  {
    id: 'karma',
    name: 'Karma & Dharma',
    sanskrit: 'कर्म और धर्म',
    icon: 'scale',
    tagline: 'The law of action and the path of rightness',
    description:
      'Karma — every action returns; dharma — that which sustains. The Gita’s answer to fate versus freedom is nishkama karma: act rightly, offer the fruits to the Divine. Life’s four aims (purusharthas) — dharma, artha, kama, moksha — are its architecture.',
    facts: [
      'Gita 2.47 — act without attachment to results',
      'Four purusharthas: dharma, artha, kama, moksha',
      'Law of karma includes sanchita, prarabdha and agami (accumulated, in-motion, incoming)',
      '"Dharmo rakshati rakshitah" — dharma protects those who protect it',
      'Four yugas: Satya, Treta, Dvapara, Kali — the wheel of time',
    ],
    bookIds: ['bhagavad-gita', 'manu-smriti'],
    bankCategory: 'Bhagavad Gita',
  },
];

// ── Bookshelves ────────────────────────────────────────────────────────────────

export type ShelfId = 'shruti' | 'smriti' | 'itihasa' | 'purana' | 'bhakti' | 'kavya';

export interface SanatanShelf {
  id: ShelfId;
  name: string;
  sanskrit: string;
  subtitle: string;
  colors: [string, string, string]; // spine gradient tones
}

export const SHELVES: SanatanShelf[] = [
  {
    id: 'shruti',
    name: 'Shruti',
    sanskrit: 'श्रुति',
    subtitle: 'That which is heard — the eternal Vedas and their Upanishads',
    colors: ['#f59e0b', '#d97706', '#b45309'],
  },
  {
    id: 'smriti',
    name: 'Smriti',
    sanskrit: 'स्मृति',
    subtitle: 'That which is remembered — dharma codes and the great sutras',
    colors: ['#10b981', '#059669', '#047857'],
  },
  {
    id: 'itihasa',
    name: 'Itihasa',
    sanskrit: 'इतिहास',
    subtitle: '“Thus it happened” — the epics of dharma in action',
    colors: ['#f43f5e', '#e11d48', '#be123c'],
  },
  {
    id: 'purana',
    name: 'Puranas',
    sanskrit: 'पुराण',
    subtitle: 'The 18 Mahapuranas — ancient lore for every home',
    colors: ['#a855f7', '#9333ea', '#7e22ce'],
  },
  {
    id: 'bhakti',
    name: 'Bhakti & Stotra',
    sanskrit: 'भक्ति',
    subtitle: 'Songs and hymns of the heart — the path of devotion',
    colors: ['#ef4444', '#dc2626', '#b91c1c'],
  },
  {
    id: 'kavya',
    name: 'Kavya & Shastra',
    sanskrit: 'काव्य',
    subtitle: 'Classical literature, drama, medicine and fable',
    colors: ['#14b8a6', '#0d9488', '#0f766e'],
  },
];

export interface SanatanBook {
  id: string;
  title: string;
  sanskrit: string;
  author: string;
  era: string;
  size?: string;
  summary: string;
  teachings: string[];
  shelfId: ShelfId;
  tone?: 0 | 1 | 2;
}

export const BOOKS: SanatanBook[] = [
  // ── Shruti: Vedas ──
  {
    id: 'rig-veda',
    title: 'Rig Veda',
    sanskrit: 'ऋग्वेद',
    author: 'Seers of the Rishi families; compiled by Vyasa',
    era: 'Composed ~1500–1200 BCE; oral tradition far older',
    size: '10 mandalas · 1,028 suktas · ~10,600 verses',
    summary:
      'The oldest scripture of humanity still in living worship — a collection of over a thousand hymns to Agni, Indra, Surya, Ushas and the devas, transmitted orally with astonishing fidelity for three thousand years.',
    teachings: [
      'Gayatri Mantra (3.62.10) and Nasadiya Sukta (10.129) both shine here',
      '"Ekam sat vipra bahudha vadanti" — Truth is one, sages name it variously (1.164.46)',
      'The Sandhya-vandana tradition is built on its mantras',
    ],
    shelfId: 'shruti',
    tone: 0,
  },
  {
    id: 'yajur-veda',
    title: 'Yajur Veda',
    sanskrit: 'यजुर्वेद',
    author: 'Traditional seers; transmitted in Shukla and Krishna recensions',
    era: 'Vedic period',
    size: 'Two recensions with multiple shakhas',
    summary:
      'The Veda of the altar — prose formulas and verses chanted by the adhvaryu priest to perform the yajna step by step. The Isha Upanishad crowns its Shukla recension; the Taittiriya school belongs to its Krishna recension.',
    teachings: [
      'The how-to of Vedic ritual — karma kanda in action',
      'Isha Upanishad is its closing jewel',
      'Taittiriya Upanishad taught to this day in traditional gurukulas',
    ],
    shelfId: 'shruti',
    tone: 1,
  },
  {
    id: 'sama-veda',
    title: 'Sama Veda',
    sanskrit: 'सामवेद',
    author: 'Seers of the Sama tradition',
    era: 'Vedic period',
    size: '~1,875 verses (largely drawn from the Rig Veda), set to melody',
    summary:
      'The Veda of song — Rig verses woven into musical samans for the udgatri priest to sing. It is the fountainhead of Indian classical music; the Chandogya and Kena Upanishads belong to its tradition.',
    teachings: [
      'The seven swaras of Indian music trace to the Sama scale',
      'Chandogya Upanishad’s "Tat tvam asi" arises from this musical stream',
      'The Gita calls Krishna "Sama-veda among the Vedas" (10.22)',
    ],
    shelfId: 'shruti',
    tone: 2,
  },
  {
    id: 'atharva-veda',
    title: 'Atharva Veda',
    sanskrit: 'अथर्ववेद',
    author: 'Sages Atharvan and Angiras',
    era: 'Vedic period',
    size: '20 books · 730 hymns · ~6,000 verses',
    summary:
      'The Veda of everyday life — hymns for healing, marriage, agriculture, protection and peace, rich in the folk wisdom of ancient Bharat. The Mandukya, Mundaka and Prashna Upanishads are attached to it.',
    teachings: [
      'Medicine, herbs and bhashajaya — root of Ayurvedic thought',
      'Shanti path — invocations for peace in home, sky and earth',
      'Mundukya and Mandukya wisdom on OM and knowledge',
    ],
    shelfId: 'shruti',
    tone: 0,
  },
  // ── Shruti: Principal Upanishads ──
  {
    id: 'isha',
    title: 'Isha Upanishad',
    sanskrit: 'ईशोपनिषद्',
    author: 'Yajnavalkya tradition',
    era: '~700–600 BCE (pre-Buddhist)',
    size: '18 verses — the shortest of the principal Upanishads',
    summary:
      'The closing chapter of the Shukla Yajur Veda’s Samhita — a mere eighteen verses that unite karma, jnana and bhakti: "All this is pervaded by the Lord... enjoy through renunciation."',
    teachings: [
      'Verse 1: "Ishavasyam idam sarvam" — the Lord dwells in all',
      'Action and renunciation are reconciled, not opposed',
      'He who sees all beings in the Self never turns away',
    ],
    shelfId: 'shruti',
    tone: 1,
  },
  {
    id: 'kena',
    title: 'Kena Upanishad',
    sanskrit: 'केनोपनिषद्',
    author: 'Sama Veda tradition (Talavakara school)',
    era: 'Ancient; pre-Buddhist period',
    size: '4 sections',
    summary:
      'Opens with the question "By whom willed and directed does the mind fall on its objects?" — and answers that Brahman is the eye of the eye, the ear of the ear, known only when it is not objectified.',
    teachings: [
      'Brahman is the power behind every faculty',
      '"That which is not uttered by speech..." — the paradox of knowing',
      'Ends with a fable of the devas humbled by Brahman',
    ],
    shelfId: 'shruti',
    tone: 2,
  },
  {
    id: 'katha',
    title: 'Katha Upanishad',
    sanskrit: 'कठोपनिषद्',
    author: 'Krishna Yajur Veda tradition',
    era: 'Ancient',
    size: '6 vallis (chapters)',
    summary:
      'The story of young Nachiketa who walks to Death’s door and wins three boons — and the secret of what survives the body. Home of the famous chariot image: the Self is the rider, the body the chariot.',
    teachings: [
      '"Arise, awake, and stop not till the goal is reached" — 1.3.14, quoted by Swami Vivekananda',
      'The razor’s edge — the path to the Self is sharp and narrow (1.3.14)',
      'The good (shreya) versus the pleasant (preya) — life’s eternal choice',
    ],
    shelfId: 'shruti',
    tone: 0,
  },
  {
    id: 'prashna',
    title: 'Prashna Upanishad',
    sanskrit: 'प्रश्नोपनिषद्',
    author: 'Atharva Veda tradition',
    era: 'Ancient',
    size: '6 questions',
    summary:
      'Six seekers bring six questions to Sage Pippalada — on creation, prana, the syllable OM and the person in the sun. A structured path from the gross to the supreme Purusha.',
    teachings: [
      'Prana (life-force) is honoured as the eldest and foremost',
      'Meditation on OM up to its final quarter leads to Brahman',
    ],
    shelfId: 'shruti',
    tone: 1,
  },
  {
    id: 'mundaka',
    title: 'Mundaka Upanishad',
    sanskrit: 'मुण्डकोपनिषद्',
    author: 'Atharva Veda tradition',
    era: 'Ancient',
    size: '3 mundakas',
    summary:
      'Distinguishes the higher knowledge (para) that liberates from the lower (apara) that sustains the world — and gives Bharat its national motto: "Satyameva jayate" — Truth alone triumphs.',
    teachings: [
      '"Satyameva jayate nanritam" — Truth alone triumphs (3.1.6)',
      'Two birds on one tree — the witness Self and the enjoying ego (3.1.1)',
      'Satya-yajna-dana-tapas — the daily disciplines of the seeker',
    ],
    shelfId: 'shruti',
    tone: 2,
  },
  {
    id: 'mandukya',
    title: 'Mandukya Upanishad',
    sanskrit: 'माण्डूक्योपनिषद्',
    author: 'Atharva Veda tradition',
    era: 'Ancient',
    size: '12 verses — smallest, yet complete',
    summary:
      'Twelve verses on the syllable OM mapping the four states of consciousness — waking (jagrat), dream (svapna), deep sleep (sushupti) and turiya, the fourth, the Self itself.',
    teachings: [
      'OM = A + U + M : the three states plus the silence beyond',
      'Turiya — "not conscious of the internal, not of the external... the Self" (7)',
      'The Mandukya alone, meditated upon, is said to suffice for liberation',
    ],
    shelfId: 'shruti',
    tone: 0,
  },
  {
    id: 'taittiriya',
    title: 'Taittiriya Upanishad',
    sanskrit: 'तैत्तिरीयोपनिषद्',
    author: 'Krishna Yajur Veda tradition',
    era: 'Ancient',
    size: '3 vallis',
    summary:
      'The gurukula classic — from the graduate’s farewell charge ("Speak the truth, walk dharma") through the five sheaths (koshas) to the ecstasy of Brahman: "Raso vai sah" — Brahman is rapture.',
    teachings: [
      '"Satyam vada, dharmam chara" — Speak truth, practise dharma (1.11)',
      'Pancha-kosha — the five sheaths from food-bliss to Ananda',
      'Anandamaya kosha — the innermost sheath of bliss',
    ],
    shelfId: 'shruti',
    tone: 1,
  },
  {
    id: 'aitareya',
    title: 'Aitareya Upanishad',
    sanskrit: 'ऐतरेयोपनिषद्',
    author: 'Rig Veda tradition; sage Mahidasa Aitareya',
    era: 'Ancient',
    size: '3 chapters',
    summary:
      'A meditation on creation and consciousness, carrying the mahavakya "Prajnanam Brahma" — Brahman is pure consciousness — and teaching that the Self entered the bodies and took possession of names and forms.',
    teachings: [
      'Mahavakya: "Prajnanam Brahma" — Brahman is consciousness (3.3)',
      'Consciousness alone is the light of all experience',
    ],
    shelfId: 'shruti',
    tone: 2,
  },
  {
    id: 'chandogya',
    title: 'Chandogya Upanishad',
    sanskrit: 'छान्दोग्योपनिषद्',
    author: 'Sama Veda tradition',
    era: 'Ancient; among the oldest Upanishads',
    size: '8 prapathakas — one of the two longest',
    summary:
      'The song-school’s treasury: Satyakama’s quest for truth, the city of Brahman in the lotus of the heart, and Shvetaketu’s nine-day teaching — "Tat tvam asi", That thou art — repeated nine times.',
    teachings: [
      'Mahavakya: "Tat tvam asi" — That thou art (6.8.7)',
      'The upasana of OM as the ferry across fear (1.4 ff.)',
      '"As one leads a well-watered garden..." — the Self as the essence of all',
    ],
    shelfId: 'shruti',
    tone: 0,
  },
  {
    id: 'brihadaranyaka',
    title: 'Brihadaranyaka Upanishad',
    sanskrit: 'बृहदारण्यकोपनिषद्',
    author: 'Yajnavalkya tradition',
    era: 'Ancient; among the oldest (~700 BCE)',
    size: '6 chapters — the longest Upanishad',
    summary:
      'The forest Upanishad of Sage Yajnavalkya — the great debate of Janaka’s court, Maitreyi’s immortal question on immortality, and the final teaching of the lightless light of the Self.',
    teachings: [
      'Mahavakya: "Aham Brahmasmi" — I am Brahman (1.4.10)',
      'Maitreyi: "Not for the beloved’s sake is the beloved dear, but for the Self’s sake" (2.4)',
      'The famous prayer "Asato maa sadgamaya" (1.3.28)',
    ],
    shelfId: 'shruti',
    tone: 1,
  },
  // ── Smriti ──
  {
    id: 'manu-smriti',
    title: 'Manu Smriti',
    sanskrit: 'मनुस्मृति',
    author: 'Attributed to Manu',
    era: 'Composed ~200 BCE–200 CE (estimates vary)',
    size: '12 chapters · ~2,700 verses',
    summary:
      'The most cited of the dharma-shastras — a compendium on law, duties of life-stages, kingship and conduct that shaped Bharatiya jurisprudence for two millennia and is studied today with critical scholarship.',
    teachings: [
      'Framework of the four ashramas and varna duties',
      '"Dharmo rakshati rakshitah" — dharma protects its protector',
      'Studied alongside Narada, Yajnavalkya and Parashara smritis',
    ],
    shelfId: 'smriti',
    tone: 0,
  },
  {
    id: 'yoga-sutras',
    title: 'Yoga Sutras',
    sanskrit: 'पातञ्जलयोगसूत्र',
    author: 'Maharshi Patanjali',
    era: '~200 BCE–200 CE (scholarly estimate)',
    size: '196 sutras · 4 padas',
    summary:
      'The complete grammar of yoga in 196 aphorisms — defining yoga as the stilling of the mind’s waves, laying the eight-limbed path, and cataloguing the siddhis and final kaivalya with scientific calm.',
    teachings: [
      '1.2 "Yogah chitta vritti nirodhah" — the definition of yoga',
      'Ashtanga — the eight limbs from yama to samadhi (2.29)',
      '2.46 "Sthira sukham asanam" — steady and comfortable posture',
    ],
    shelfId: 'smriti',
    tone: 1,
  },
  {
    id: 'samkhya-karika',
    title: 'Samkhya Karika',
    sanskrit: 'सांख्यकारिका',
    author: 'Ishvarakrishna',
    era: '~5th century CE',
    size: '72 verses',
    summary:
      'The surviving classic of Samkhya — the enumeration of 25 tattvas from prakriti to purusha, the oldest systematic philosophy of the subcontinent and the metaphysical spine of the Gita.',
    teachings: [
      'Purusha (witness) and prakriti (nature) — duality without a creator',
      'Three gunas — sattva, rajas, tamas — compose all nature',
      'Discriminative knowledge (viveka) as the sole route to liberation',
    ],
    shelfId: 'smriti',
    tone: 2,
  },
  {
    id: 'nyaya-sutras',
    title: 'Nyaya Sutras',
    sanskrit: 'न्यायसूत्र',
    author: 'Gautama (Akshapada)',
    era: '~2nd century BCE–2nd century CE',
    size: '5 books',
    summary:
      'The science of logic and valid knowledge — the sixteen padarthas, the anatomy of inference, and the debate rules that made Indian philosophy a discipline of rigorous argument.',
    teachings: [
      'Pramanas — the sources of right knowledge',
      'The five-membered syllogism (pratijna to nigamana)',
    ],
    shelfId: 'smriti',
    tone: 0,
  },
  {
    id: 'vaisheshika-sutras',
    title: 'Vaisheshika Sutras',
    sanskrit: 'वैशेषिकसूत्र',
    author: 'Kanada',
    era: '~2nd century BCE or earlier',
    size: '10 chapters',
    summary:
      'Kanada’s atomic theory of reality — padarthas, dravya, and the paramanu, the indivisible atom — a natural philosophy worked out centuries before modern atomism.',
    teachings: [
      'Seven categories of reality, including atomistic analysis of matter',
      'Later fused with Nyaya into the Nyaya-Vaisheshika school',
    ],
    shelfId: 'smriti',
    tone: 1,
  },
  {
    id: 'mimamsa-sutras',
    title: 'Mimamsa Sutras',
    sanskrit: 'पूर्वमीमांसासूत्र',
    author: 'Jaimini',
    era: '~3rd–1st century BCE',
    size: '12 chapters · ~2,700 sutras',
    summary:
      'The hermeneutics of Vedic ritual — Purva Mimamsa establishes the eternity and authority of the Veda and the sacred power of the mantra, forming the ritual backbone of the tradition.',
    teachings: [
      'The self-validity of the Veda (svatah pramanya)',
      'Dharma as the imperative that the Veda commands',
    ],
    shelfId: 'smriti',
    tone: 2,
  },
  {
    id: 'brahma-sutras',
    title: 'Brahma Sutras',
    sanskrit: 'ब्रह्मसूत्र',
    author: 'Badarayana (identified with Vyasa)',
    era: 'Compiled ~400 BCE–200 CE',
    size: '4 chapters · 555 sutras',
    summary:
      'The logical skeleton of Vedanta — 555 aphorisms knitting the Upanishads into one system, commented upon by Shankara, Ramanuja, Madhva and every major Vedantin.',
    teachings: [
      'The first sutra: "Athato brahma-jijnasa" — now, therefore, the inquiry into Brahman',
      'The battleground of Advaita, Vishishtadvaita and Dvaita commentaries',
    ],
    shelfId: 'smriti',
    tone: 0,
  },
  {
    id: 'ashtadhyayi',
    title: 'Ashtadhyayi',
    sanskrit: 'अष्टाध्यायी',
    author: 'Panini',
    era: '~5th–4th century BCE',
    size: '8 chapters · ~4,000 sutras',
    summary:
      'The complete grammar of classical Sanskrit in about four thousand algebraic sutras — a generative system so complete that modern linguistics (Bloomfield called it “one of the greatest monuments of human intelligence”) still studies it.',
    teachings: [
      'A complete generative grammar — 2,000+ years before Noam Chomsky',
      'The shiva-sutras: the sound inventory of Sanskrit in 14 pratyaharas',
    ],
    shelfId: 'smriti',
    tone: 1,
  },
  {
    id: 'arthashastra',
    title: 'Arthashastra',
    sanskrit: 'अर्थशास्त्र',
    author: 'Kautilya (Chanakya)',
    era: '~3rd century BCE (base text)',
    size: '15 books · 180 chapters',
    summary:
      'The science of polity and statecraft of the Mauryan age — administration, law, espionage, economics and diplomacy, rediscovered in 1905 and still studied in war colleges and business schools.',
    teachings: [
      'Raja-dharma — the ruler’s duty as service to the realm’s welfare',
      'Saptanga theory — the seven limbs of the state',
    ],
    shelfId: 'smriti',
    tone: 2,
  },
  // ── Itihasa ──
  {
    id: 'ramayana',
    title: 'Valmiki Ramayana',
    sanskrit: 'वाल्मीकि रामायण',
    author: 'Maharshi Valmiki',
    era: 'Composed ~500–100 BCE (traditional: Treta Yuga)',
    size: '7 kandas · ~24,000 shlokas · 500+ sargas',
    summary:
      'The adi-kavya, the first poem: Rama’s exile, Sita’s abduction, Hanuman’s leap, the bridge of Nala and Neela, and the victory of dharma — the story that shaped the moral imagination of Asia.',
    teachings: [
      'Maryada Purushottama — Rama as the ideal of perfected conduct',
      'The Sundara Kanda is recited for courage and grace in every home',
      '"Ram banavasi" gave Bharat its archetype of sacrifice and duty',
    ],
    shelfId: 'itihasa',
    tone: 0,
  },
  {
    id: 'mahabharata',
    title: 'Mahabharata',
    sanskrit: 'महाभारत',
    author: 'Krishna Dvaipayana Veda Vyasa',
    era: 'Compiled ~400 BCE–400 CE',
    size: '18 parvas (+ Harivamsha) · ~100,000 verses',
    summary:
      'The longest poem on earth — the tale of the Kurus and Pandavas that contains the Bhagavad Gita, the Vishnu Sahasranama, Nala-Damayanti and Savitri-Satyavan. Vyasa’s own claim: “What is here may be found elsewhere; what is not here is nowhere.”',
    teachings: [
      'The Gita — the divine dialogue within the storm of war',
      'Dharma is subtle (sukshma) — its eternal dilemma in Yudhishthira’s story',
      'Vishnu Sahasranama — the thousand names sung by Bhishma',
    ],
    shelfId: 'itihasa',
    tone: 1,
  },
  {
    id: 'ramcharitmanas',
    title: 'Ramcharitmanas',
    sanskrit: 'रामचरितमानस',
    author: 'Goswami Tulsidas',
    era: '1574 CE, Kashi (Varanasi)',
    size: '7 kandas · ~10,700 chaupais-dohas (Awadhi)',
    summary:
      'The lake of Rama’s deeds — the Ramayana retold in the people’s tongue of Awadhi, which made Tulsidas the poet-saint of the Hindi heartland and the Manas the daily parayana of millions of homes.',
    teachings: [
      'The Sundarkand path — Tuesday recitations across North India',
      'Bhakti made simple — name-smaran as the Kali Yuga dharma',
      'The Hanuman Chalisa flows from the same devotional stream',
    ],
    shelfId: 'itihasa',
    tone: 2,
  },
  {
    id: 'yoga-vasistha',
    title: 'Yoga Vasistha',
    sanskrit: 'योगवासिष्ठ',
    author: 'Attributed to Valmiki (dialogue of Rama & Vasistha)',
    era: 'Composed ~500–1000 CE',
    size: '~32,000 verses (traditionally)',
    summary:
      'A vast philosophical poem in which the young Rama’s world-weariness is healed by Sage Vasistha’s teaching — the world as mind-made (jalpati-drishtanta), consciousness as the only reality, and the seven bhumi path to liberation.',
    teachings: [
      'The world is as you see it — the rope and the water-mirage analogies',
      'Seven stages (bhumikas) of the seeker’s ascent',
    ],
    shelfId: 'itihasa',
    tone: 0,
  },
  // ── Puranas (18 Mahapuranas) ──
  {
    id: 'vishnu-purana',
    title: 'Vishnu Purana',
    sanskrit: 'विष्णुपुराण',
    author: 'Parashara tradition',
    era: 'Composed ~400–900 CE',
    size: '6 amshas · ~23,000 verses',
    summary:
      'The classic Vaishnava Purana — the five-fold lore of cosmology crowned by the devotion to Vishnu, with the beautiful story of Dhruva and Prahlada and the framing of Bhakti Yoga.',
    teachings: ['Dhruva’s unwavering single-pointedness', 'Bhakti as supreme among spiritual paths'],
    shelfId: 'purana',
    tone: 0,
  },
  {
    id: 'narada-purana',
    title: 'Narada Purana',
    sanskrit: 'नारदपुराण',
    author: 'Narada tradition',
    era: 'Composed over centuries (recensions vary)',
    size: 'Among the larger Puranas',
    summary: 'A compendium of Vaishnava lore, mahatmyas, and the Narada-pancharatra teachings on worship and the great festivals of Vishnu.',
    teachings: ['Pratima and temple worship elaborated', 'The glory of Vaishakha and Kartika months'],
    shelfId: 'purana',
    tone: 1,
  },
  {
    id: 'bhagavata',
    title: 'Srimad Bhagavatam',
    sanskrit: 'श्रीमद्भागवत',
    author: 'Veda Vyasa (as tradition holds)',
    era: 'Composed ~500–1000 CE',
    size: '12 cantos · 18,000 verses',
    summary:
      'Called the ripened fruit of the Vedic tree — the Bhagavata carries Krishna’s full story in the tenth canto, the Prahlada and Dhruva narratives, and the highest rasa of pure bhakti in the eleventh.',
    teachings: [
      'The 10th canto — Krishna’s birth, Vrindavana, and the Bhagavata dharma',
      'Prahlada’s teaching: nine limbs of bhakti, beginning with shravana',
      'Uddhava-gita — the final instructions of Krishna',
    ],
    shelfId: 'purana',
    tone: 2,
  },
  {
    id: 'garuda-purana',
    title: 'Garuda Purana',
    sanskrit: 'गरुडपुराण',
    author: 'Vaishnava tradition',
    era: 'Composed over centuries',
    size: 'Two khandas',
    summary:
      'Vishnu’s answers to Garuda — cosmology, dharma and the soul’s journey after death. Traditionally read during the shraddha period as a map of the unseen realms.',
    teachings: ['The preta-kanda — the journey of the subtle body', 'The merit of shraddha rites for ancestors'],
    shelfId: 'purana',
    tone: 0,
  },
  {
    id: 'padma-purana',
    title: 'Padma Purana',
    sanskrit: 'पद्मपुराण',
    author: 'Vaishnava tradition',
    era: 'Composed over centuries',
    size: 'Among the largest Puranas (~55,000 verses in recensions)',
    summary:
      'Named for the lotus of creation — an encyclopaedic Purana of tirthas, vratas and stories, including the geography of Bharata’s sacred places in great detail.',
    teachings: ['The sanctity of tirtha-yatra — pilgrimage', 'Detail of Kartika vrata and Ekadashi observances'],
    shelfId: 'purana',
    tone: 1,
  },
  {
    id: 'varaha-purana',
    title: 'Varaha Purana',
    sanskrit: 'वराहपुराण',
    author: 'Vaishnava tradition',
    era: 'Composed over centuries',
    size: 'Large compendium',
    summary: 'Teaches through Varaha’s dialogue with Prithvi — the rescue of the Earth, tirtha-mahatmya, vratas and dana-dharma.',
    teachings: ['The Earth’s own questions answered by Vishnu', 'The glories of Mathura and Setu'],
    shelfId: 'purana',
    tone: 2,
  },
  {
    id: 'brahma-purana',
    title: 'Brahma Purana',
    sanskrit: 'ब्रह्मपुराण',
    author: 'Brahma tradition',
    era: 'Composed over centuries',
    size: 'Large compendium',
    summary: 'Opens with creation and gives the celebrated geography of Purushottama Kshetra — Jagannatha Puri — alongside Krishna’s story in brief.',
    teachings: ['Jagannatha Puri’s mahatmya', 'The sacred circuit of Odisha’s kshetras'],
    shelfId: 'purana',
    tone: 0,
  },
  {
    id: 'brahmanda-purana',
    title: 'Brahmanda Purana',
    sanskrit: 'ब्रह्माण्डपुराण',
    author: 'Brahma tradition',
    era: 'Composed over centuries',
    size: '~12,000 verses in recensions',
    summary:
      'The Purana of the cosmic egg — of the fourteen worlds and the future manvantaras, and the original home of the Lalita Sahasranama, the thousand names of the Divine Mother.',
    teachings: ['Lalita Sahasranama — the Devi’s thousand names', 'Cosmic cycles: kalpas and manvantaras'],
    shelfId: 'purana',
    tone: 1,
  },
  {
    id: 'brahma-vaivarta',
    title: 'Brahma Vaivarta Purana',
    sanskrit: 'ब्रह्मवैवर्तपुराण',
    author: 'Brahma tradition',
    era: 'Composed ~1000 CE (Bengal region)',
    size: '~18,000 verses',
    summary:
      'Centred on Krishna and Radha’s Vrindavana — the Goloka cosmology and the devotional world of Gaudiya Vaishnavism that Chaitanya Mahaprabhu’s movement would carry across Bengal and beyond.',
    teachings: ['Goloka — Krishna’s supreme abode', 'Radha-bhakti and the madhura rasa tradition'],
    shelfId: 'purana',
    tone: 2,
  },
  {
    id: 'markandeya',
    title: 'Markandeya Purana',
    sanskrit: 'मार्कण्डेयपुराण',
    author: 'Sage Markandeya tradition',
    era: 'Composed ~250–550 CE (estimate)',
    size: '~9,000 verses',
    summary:
      'A treasure within a treasure: it holds the Devi Mahatmya (Durga Saptashati) — the 700-verse epic of the Goddess — the story of the immortal boy Markandeya, and the dialogue of the birds.',
    teachings: [
      'Devi Mahatmya — the recitation for Navratri (Durga Saptashati)',
      '"When righteousness declines, I manifest" — the avatara idea in seed',
    ],
    shelfId: 'purana',
    tone: 0,
  },
  {
    id: 'bhavishya-purana',
    title: 'Bhavishya Purana',
    sanskrit: 'भविष्यपुराण',
    author: 'Brahma tradition',
    era: 'Layered text, expanded over centuries',
    size: 'Medium compendium',
    summary: 'The Purana of “what is to come” — royal genealogies, dynasties of the Kali Yuga and prophetic sections, much expanded across recensions.',
    teachings: ['The framework of yugas deepens here', 'Surya worship and royal dharma'],
    shelfId: 'purana',
    tone: 1,
  },
  {
    id: 'vamana-purana',
    title: 'Vamana Purana',
    sanskrit: 'वामनपुराण',
    author: 'Brahma tradition',
    era: 'Composed over centuries',
    size: '~10,000 verses in recensions',
    summary: 'The dwarf avatara’s Purana — Vamana’s three strides that covered the worlds, Mahabali’s devotion, and the tirthas of the Kurukshetra region.',
    teachings: ['Vamana and Mahabali — Onam’s living memory in Kerala', 'Devotion outweighs dominion'],
    shelfId: 'purana',
    tone: 2,
  },
  {
    id: 'shiva-purana',
    title: 'Shiva Purana',
    sanskrit: 'शिवपुराण',
    author: 'Shaiva tradition',
    era: 'Composed/expanded ~400–1300 CE',
    size: '~24,000 verses (recensions vary)',
    summary:
      'The great Shaiva compendium — the meaning of the linga, the twelve Jyotirlingas, Shiva’s marriage and tandava, and the all-surpassing glory of "Om Namah Shivaya".',
    teachings: [
      'The twelve Jyotirlingas and their mahatmya',
      'Rudra-samhita — the devotional core of the text',
    ],
    shelfId: 'purana',
    tone: 0,
  },
  {
    id: 'linga-purana',
    title: 'Linga Purana',
    sanskrit: 'लिङ्गपुराण',
    author: 'Shaiva tradition',
    era: 'Composed ~500–1000 CE',
    size: '~11,000 verses',
    summary:
      'Where the linga itself instructs the sages — creation, the yugas and the great Shiva tirthas, with detailed puja-vidhi of the anushthanas of Shaiva worship.',
    teachings: ['The linga as the column of infinite light', 'Detailed Shaiva consecration and puja rites'],
    shelfId: 'purana',
    tone: 1,
  },
  {
    id: 'skanda-purana',
    title: 'Skanda Purana',
    sanskrit: 'स्कन्दपुराण',
    author: 'Shaiva tradition (Kartikeya-centric)',
    era: 'Layered over centuries',
    size: 'The largest Mahapurana (~81,000+ verses)',
    summary:
      'The ocean of tirthas — the largest of all Puranas, holding the Kashi Khanda (Varanasi’s endless glories), the Kartika Mahatmya, and the Stories of Skanda, the commander of the devas.',
    teachings: ['Kashi Khanda — the complete sacred geography of Varanasi', 'The vrata of Kartika month in full detail'],
    shelfId: 'purana',
    tone: 2,
  },
  {
    id: 'agni-purana',
    title: 'Agni Purana',
    sanskrit: 'अग्निपुराण',
    author: 'Agni tradition',
    era: 'Composed/expanded ~700–1300 CE',
    size: '~15,400 verses',
    summary:
      'An encyclopaedia in Purana form — Agni instructs Vasishtha on everything from the Gita’s summary and temple architecture to medicine, weaponry and the science of gems.',
    teachings: ['The Purana as a shastra-sangraha — a library within a book', 'Iconography and vastu summarized'],
    shelfId: 'purana',
    tone: 0,
  },
  {
    id: 'matsya-purana',
    title: 'Matsya Purana',
    sanskrit: 'मत्स्यपुराण',
    author: 'Vaishnava tradition',
    era: 'Composed ~250–500 CE (estimate)',
    size: '~14,000 verses',
    summary:
      'The fish avatara’s Purana — Manu, the great flood and the ship of life, plus the most detailed ancient manual of temple architecture and vratas that we possess.',
    teachings: ['Matsya saves the Vedas — dharma carried across the flood', 'The prasada-lakshana — ancient temple design'],
    shelfId: 'purana',
    tone: 1,
  },
  {
    id: 'kurma-purana',
    title: 'Kurma Purana',
    sanskrit: 'कूर्मपुराण',
    author: 'Vaishnava tradition',
    era: 'Composed ~550–850 CE (estimate)',
    size: '~17,000 verses',
    summary: 'The tortoise avatara’s teaching — the churning of the ocean, the Ishvara-gita’s rendering of yoga, and the discipline of the eighteen-versed recitation.',
    teachings: ['Samudra manthan — the churning within every seeker', 'Ishvara-gita — the Shiva discourse to the sages'],
    shelfId: 'purana',
    tone: 2,
  },
  // ── Bhakti & Stotra ──
  {
    id: 'bhagavad-gita',
    title: 'Bhagavad Gita',
    sanskrit: 'श्रीमद्भगवद्गीता',
    author: 'Spoken by Shri Krishna; set down by Vyasa',
    era: 'Within the Mahabharata tradition',
    size: '18 chapters · 700 verses',
    summary:
      'The heart of Hindu scripture — seven hundred verses where the divine charioteer turns Arjuna’s despair into a complete philosophy of fearless, devoted action. Translated into every major language of the world.',
    teachings: [
      '2.47 — "Thy right is to the work alone, never to its fruits"',
      '9.22 — "I carry what they lack; I preserve what they have"',
      '18.66 — "Surrender to me alone; I shall free you"',
    ],
    shelfId: 'bhakti',
    tone: 0,
  },
  {
    id: 'vishnu-sahasranama',
    title: 'Vishnu Sahasranama',
    sanskrit: 'विष्णुसहस्रनाम',
    author: 'Bhishma’s counsel to Yudhishthira (Mahabharata)',
    era: 'Within the Anushasana Parva',
    size: '1,008 names in 107 verses',
    summary:
      'On the bed of arrows, Bhishma answers the dying Yudhishthira’s question — “Who is the one God?” — with the thousand names of Vishnu, each a doorway of meditation.',
    teachings: [
      'Each name is a dhyana — a facet of the Infinite',
      'Recited daily across Bharat; the Bhishma-stuti precedes it',
    ],
    shelfId: 'bhakti',
    tone: 1,
  },
  {
    id: 'hanuman-chalisa',
    title: 'Hanuman Chalisa',
    sanskrit: 'हनुमान चालीसा',
    author: 'Goswami Tulsidas',
    era: '16th century CE',
    size: '40 chaupais + 2 dohas',
    summary:
      'Forty couplets in effortless Awadhi rhythm that carry Hanuman’s shakti — strength, devotion, humility and service in one stream. Among the most recited texts on earth.',
    teachings: [
      '“Buddhi, bal, yash, tejas” — the four gifts of Hanuman',
      'Seva-bhakti — devotion as service to Rama',
    ],
    shelfId: 'bhakti',
    tone: 2,
  },
  {
    id: 'shiv-mahimnah',
    title: 'Shiv Mahimnah Stotra',
    sanskrit: 'शिवमहिम्नःस्तोत्र',
    author: 'Pushpadanta',
    era: 'Classical period',
    size: '43 verses',
    summary:
      'The gandharva Pushpadanta’s hymn of repentance and wonder — praised by Shiva himself, whose phala-shruti declares it greater than all offerings. A jewel of Sanskrit poetry (chitrakavya).',
    teachings: ['Verse 7: the limits of speech before the Infinite', 'Devotion turns even transgression into a hymn'],
    shelfId: 'bhakti',
    tone: 0,
  },
  {
    id: 'aditya-hridayam',
    title: 'Aditya Hridayam',
    sanskrit: 'आदित्यहृदयम्',
    author: 'Sage Agastya’s counsel to Rama (Valmiki Ramayana, Yuddha Kanda)',
    era: 'Within the Ramayana',
    size: '~31 verses',
    summary:
      'On the eve of battle with Ravana, Agastya teaches Rama the “heart of the Sun” — a hymn that restores courage and grants victory; recited at sunrise to this day.',
    teachings: ['Surya as the self of all beings', 'Victory through mantra in the hour of crisis'],
    shelfId: 'bhakti',
    tone: 1,
  },
  {
    id: 'soundarya-lahari',
    title: 'Soundarya Lahari',
    sanskrit: 'सौन्दर्यलहरी',
    author: 'Sri Adi Shankaracharya',
    era: '~8th century CE',
    size: '100 verses',
    summary:
      'The “Waves of Beauty” — Shankara’s tantric-devotional hymn to Devi: the first 41 verses map the Sri Chakra’s mystic geometry, the remaining 59 sing the Goddess’s beauty.',
    teachings: ['The Sri Yantra as the Goddess’s body', 'Bhakti and shakti — head and heart united'],
    shelfId: 'bhakti',
    tone: 2,
  },
  {
    id: 'rama-raksha',
    title: 'Rama Raksha Stotra',
    sanskrit: 'रामरक्षास्तोत्र',
    author: 'Budha Koushika (traditional)',
    era: 'Classical period',
    size: '~38 verses',
    summary:
      'The armour of Rama’s names — a kavacha (shield) recited for protection, each verse placing a name of Rama over a part of the body.',
    teachings: ['Nama as armour — the protective power of the divine name', 'Systematic use of Rama-nama in daily life'],
    shelfId: 'bhakti',
    tone: 0,
  },
  {
    id: 'durga-saptashati',
    title: 'Durga Saptashati (Devi Mahatmya)',
    sanskrit: 'दुर्गासप्तशती',
    author: 'Within the Markandeya Purana',
    era: 'Composed ~400–600 CE',
    size: '700 verses · 13 chapters',
    summary:
      'The Shakta scripture par excellence — the Goddess slays Madhu-Kaitabha, Mahishasura and Shumbha-Nishumbha in three mighty acts. Its full recitation crowns every Navratri.',
    teachings: [
      'The Devi as the sole shakti behind all the devas',
      'Argala, Keelaka and the Devi-kavacham preliminaries',
    ],
    shelfId: 'bhakti',
    tone: 1,
  },
  {
    id: 'madhurashtakam',
    title: 'Madhurashtakam',
    sanskrit: 'मधुराष्टकम्',
    author: 'Sri Vallabhacharya',
    era: '~15th–16th century CE',
    size: '8 verses',
    summary:
      'Everything of Krishna is madhura — sweet: his lips, his flute, his gait. The philosopher-saint of Pushti Marg turns doctrine into honey in eight verses.',
    teachings: ['Pushti-bhakti — grace-fed devotion', 'The aesthetic path — seeing sweetness everywhere'],
    shelfId: 'bhakti',
    tone: 2,
  },
  // ── Kavya & Shastra ──
  {
    id: 'abhijnana-shakuntalam',
    title: 'Abhijnanashakuntalam',
    sanskrit: 'अभिज्ञानशाकुन्तलम्',
    author: 'Kalidasa',
    era: '~4th–5th century CE (Gupta court)',
    size: '7 acts (nataka)',
    summary:
      'The recognition of Shakuntala — the play that entranced Goethe and introduced Sanskrit drama to the world; love, separation and reunion in perfect kavya.',
    teachings: ['The classical ideal of the nataka — rasa in every scene', 'Dharma of the heart versus the word of the king'],
    shelfId: 'kavya',
    tone: 0,
  },
  {
    id: 'meghaduta',
    title: 'Meghaduta',
    sanskrit: 'मेघदूतम्',
    author: 'Kalidasa',
    era: '~4th–5th century CE',
    size: '~111 verses (mandakranta metre)',
    summary:
      'An exiled yaksha sends a love-message to his wife by a passing cloud — the poem that made the monsoon itself a courier of longing, and the archetype of Sanskrit lyric.',
    teachings: ['Vibhatsa to shringara — landscapes as feeling', 'The mandakranta metre — music built into the verse'],
    shelfId: 'kavya',
    tone: 1,
  },
  {
    id: 'raghuvamsha',
    title: 'Raghuvamsha',
    sanskrit: 'रघुवंशम्',
    author: 'Kalidasa',
    era: '~4th–5th century CE',
    size: '19 cantos',
    summary: 'The dynasty of Raghu — from Dilipa to Rama and beyond in nineteen cantos of mahakavya, where kingship is yoga and the epic past becomes polished art.',
    teachings: ['The ideal of the raja-rishi — the royal sage', 'Classical mahakavya at its perfection'],
    shelfId: 'kavya',
    tone: 2,
  },
  {
    id: 'charaka-samhita',
    title: 'Charaka Samhita',
    sanskrit: 'चरकसंहिता',
    author: 'Agnivesha’s treatise redacted by Charaka',
    era: 'Base text ~400 BCE–200 CE',
    size: '8 sections · 120 chapters',
    summary:
      'The foundation of Ayurvedic medicine — the dialogue of Atreya and Agnivesha on diagnosis, the doshas, ethics of the physician and the treatment of disease as the restoration of harmony.',
    teachings: [
      '"Vaidyo narayano harih" — the physician as the divine healer',
      'The definition of health as equilibrium of dosha, agni, dhatu and soul at ease',
    ],
    shelfId: 'kavya',
    tone: 0,
  },
  {
    id: 'sushruta-samhita',
    title: 'Sushruta Samhita',
    sanskrit: 'सुश्रुतसंहिता',
    author: 'Sushruta',
    era: '~600 BCE–200 CE (layers)',
    size: '6 sections · 186 chapters',
    summary:
      'The world’s first great surgical treatise — 300+ procedures, 120+ instruments, cataract surgery, rhinoplasty and the ethics of the knife, written millennia before modern surgery.',
    teachings: ['Sushruta — honoured as the father of surgery', 'Shalya-tantra — the science of the surgical art'],
    shelfId: 'kavya',
    tone: 1,
  },
  {
    id: 'natya-shastra',
    title: 'Natya Shastra',
    sanskrit: 'नाट्यशास्त्र',
    author: 'Bharata Muni',
    era: '~200 BCE–200 CE',
    size: '36 chapters · ~6,000 sutras',
    summary:
      'The fifth Veda of drama and dance — stagecraft, music, and the theory of the eight rasas and bhavas; the root of Bharatanatyam, Kathak, Odissi and every classical performing art of India.',
    teachings: ['The rasa theory — aesthetics as a science of taste', 'Angika-abhinaya — the body as the instrument of art'],
    shelfId: 'kavya',
    tone: 2,
  },
  {
    id: 'panchatantra',
    title: 'Panchatantra',
    sanskrit: 'पञ्चतन्त्रम्',
    author: 'Vishnu Sharma',
    era: '~300 BCE (base text)',
    size: '5 tantras · ~80 fables',
    summary:
      'The world’s most travelled storybook — animal fables of niti (practical wisdom) that journeyed through Panchatantra → Kalila wa Dimna → Aesop’s heirs into world literature.',
    teachings: ['Nitishastra — wisdom for statecraft and daily life', '“Mitra-bheda” and the four other tantras of friendship and wit'],
    shelfId: 'kavya',
    tone: 0,
  },
  {
    id: 'hitopadesha',
    title: 'Hitopadesha',
    sanskrit: 'हितोपदेशः',
    author: 'Narayana',
    era: '~8th–12th century CE',
    size: '4 books',
    summary: '“Beneficial counsel” — Narayana’s recasting of Panchatantra fables as a gentle mirror for young minds, still a first reader of Sanskrit across India.',
    teachings: ['The four purusharthas taught through story', 'Sanskrit study through memorable fable'],
    shelfId: 'kavya',
    tone: 1,
  },
];

export const BOOKS_BY_ID: Record<string, SanatanBook> = Object.fromEntries(
  BOOKS.map((b) => [b.id, b])
);
