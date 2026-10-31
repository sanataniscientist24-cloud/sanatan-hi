// ── SanatanDoc: shlokas for Voice, daily prescription, festivals ──────────────

export interface Shloka {
  id: string;
  title: string;
  sanskrit: string;
  translit: string; // what the TTS engine reads aloud
  meaning: string;
  source: string;
  benefit: string;
}

export const SHLOKAS: Shloka[] = [
  {
    id: 'gayatri',
    title: 'Gayatri Mantra',
    sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्',
    translit:
      'Om Bhur Bhuvah Svah, Tat Savitur Varenyam, Bhargo Devasya Dhimahi, Dhiyo Yo Nah Prachodayat',
    meaning:
      'We meditate on the radiant light of the divine Savitri; may that light illumine our intellect.',
    source: 'Rig Veda 3.62.10',
    benefit: 'Chanted at dawn and dusk — the daily consecration of the intellect to the inner Sun.',
  },
  {
    id: 'mahamrityunjaya',
    title: 'Mahamrityunjaya Mantra',
    sanskrit:
      'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्',
    translit:
      'Om Tryambakam Yajamahe, Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan, Mrityor Mukshiya Maamritat',
    meaning:
      'We worship the three-eyed One who nourishes all; may He liberate us from death’s bondage, as a ripe cucumber is freed from its stalk — for immortality.',
    source: 'Rig Veda 7.59.12',
    benefit: 'The great healing and protective mantra — chanted for strength in illness and fear.',
  },
  {
    id: 'asato-maa',
    title: 'Asato Maa Sadgamaya',
    sanskrit:
      'ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय । ॐ शान्तिः शान्तिः शान्तिः ॥',
    translit:
      'Om Asato Maa Sadgamaya, Tamaso Maa Jyotir Gamaya, Mrityor Ma Amritam Gamaya, Om Shantih Shantih Shantih',
    meaning:
      'Lead me from the unreal to the real; from darkness to light; from death to immortality. Om peace, peace, peace.',
    source: 'Brihadaranyaka Upanishad 1.3.28',
    benefit: 'The most beloved prayer of direction — sung at the close of gatherings and studies.',
  },
  {
    id: 'sahana-vavatu',
    title: 'Sahana Vavatu',
    sanskrit:
      'ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै ॥ ॐ शान्तिः शान्तिः शान्तिः ॥',
    translit:
      'Om Sahana Vavatu, Saha Nau Bhunaktu, Saha Viryam Karavavahai, Tejasvi Navadhitam Astu, Ma Vidvishavahai, Om Shantih Shantih Shantih',
    meaning:
      'May we be protected together, nourished together; may we work together with vigour; may our study be radiant; may we never quarrel.',
    source: 'Krishna Yajur Veda — Taittiriya Upanishad (invocation)',
    benefit: 'The teacher-and-student prayer — traditionally chanted before any study or learning.',
  },
  {
    id: 'sarve-bhavantu',
    title: 'Sarve Bhavantu Sukhinah',
    sanskrit:
      'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः । सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥ ॐ शान्तिः शान्तिः शान्तिः ॥',
    translit:
      'Sarve Bhavantu Sukhinah, Sarve Santu Niramayah, Sarve Bhadrani Pashyantu, Ma Kashchid Dukhah Bhagbhavet, Om Shantih Shantih Shantih',
    meaning:
      'May all beings be happy; may all be free from illness; may all see what is good; may no one suffer.',
    source: 'Traditional Shanti Path (peace invocation)',
    benefit: 'The prayer of universal welfare — a blessing offered for all living beings.',
  },
  {
    id: 'gita-2-47',
    title: 'Nishkama Karma',
    sanskrit:
      'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
    translit:
      'Karmanye Vadhikaraste Ma Phaleshu Kadachana, Ma Karma Phala Hetur Bhur Ma Te Sangostva Karmani',
    meaning:
      'Thy right is to the work alone, never to its fruits; let not the fruit motivate thee, nor let thy attachment be to inaction.',
    source: 'Bhagavad Gita 2.47',
    benefit: 'The seed verse of Karma Yoga — recited before beginning any important work.',
  },
  {
    id: 'gita-4-7',
    title: 'Yada Yada Hi Dharmasya',
    sanskrit:
      'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत । अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥',
    translit:
      'Yada Yada Hi Dharmasya Glanir Bhavati Bharata, Abhyutthanam Adharmasya, Tadatmanam Srijamyaham',
    meaning:
      'Whenever righteousness declines and unrighteousness rises, O Bharata, then I manifest Myself.',
    source: 'Bhagavad Gita 4.7',
    benefit: 'The promise of the avatara — hope recited in times of difficulty and confusion.',
  },
  {
    id: 'gita-18-66',
    title: 'Charama Shloka',
    sanskrit:
      'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज । अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥',
    translit:
      'Sarva Dharman Parityajya, Mam Ekam Sharanam Vraja, Aham Tva Sarva Papebhyo, Mokshayishyami Ma Shuchah',
    meaning:
      'Abandon all varieties of dharma and surrender unto Me alone; I shall deliver thee from all sin — grieve not.',
    source: 'Bhagavad Gita 18.66',
    benefit: 'The final assurance of the Gita — the complete resting of the heart in the Divine.',
  },
  {
    id: 'vakratunda',
    title: 'Vakratunda Mahakaya',
    sanskrit:
      'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
    translit:
      'Vakratunda Mahakaya, Surya Koti Samaprabha, Nirvighnam Kuru Me Deva, Sarva Karyeshu Sarvada',
    meaning:
      'O curved-trunked, vast-bodied One, radiant as a crore of suns — O Deva, make all my undertakings free of obstacles, always.',
    source: 'Traditional Ganesha invocation',
    benefit: 'Chanted at the start of any venture, journey, or writing.',
  },
  {
    id: 'om-namah-shivaya',
    title: 'Shiva Panchakshara',
    sanskrit: 'ॐ नमः शिवाय',
    translit: 'Om Namah Shivaya',
    meaning: 'Salutations to Shiva, the auspicious One — the Self of all.',
    source: 'Rooted in the Shvetashvatara Upanishad; central to Shaiva tradition',
    benefit: 'The five-syllable mantra — japa of the Panchakshara is the heart of Shaiva sadhana.',
  },
  {
    id: 'aditya-hridayam',
    title: 'Aditya Hridayam (opening)',
    sanskrit:
      'ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम् । रावणं चाग्रतो दृष्ट्वा युद्धाय समुपस्थितम् ॥',
    translit:
      'Tato Yuddha Parishrantam, Samare Chintaya Sthitam, Ravanam Chagrato Drishtva, Yuddhaya Samupasthitam',
    meaning:
      'Then, exhausted in battle and sunk in thought, Rama beheld Ravana standing ready for war — (and the sage Agastya taught him the Sun-hymn).',
    source: 'Valmiki Ramayana, Yuddha Kanda 105',
    benefit: 'The sunrise hymn of courage — taught to Rama on the eve of his hardest battle.',
  },
];

// ── Daily prescription verses (rotated by day-of-year) ─────────────────────────

export interface DailyVerse {
  id: string;
  sanskrit: string;
  translit: string;
  meaning: string;
  practice: string;
  source: string;
}

export const DAILY_VERSES: DailyVerse[] = [
  {
    id: 'd1',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ॥',
    translit: 'Karmanye Vadhikaraste Ma Phaleshu Kadachana',
    meaning: 'Your right is to the effort alone — never to its results.',
    practice: 'Do today’s duty wholeheartedly; offer the outcome to the Divine before sleep.',
    source: 'Bhagavad Gita 2.47',
  },
  {
    id: 'd2',
    sanskrit: 'योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ॥',
    translit: 'Yogasthah Kuru Karmani Sangam Tyaktva Dhananjaya',
    meaning: 'Established in yoga, perform your actions, relinquishing attachment.',
    practice: 'Pick one task you have been anxious about — do it steadily, without clutching at praise.',
    source: 'Bhagavad Gita 2.48',
  },
  {
    id: 'd3',
    sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ॥',
    translit: 'Yada Yada Hi Dharmasya Glanir Bhavati Bharata',
    meaning: 'Whenever dharma declines, I manifest Myself.',
    practice: 'Wherever you see adharmic behaviour today, be the quiet correction — a small avatara of patience.',
    source: 'Bhagavad Gita 4.7',
  },
  {
    id: 'd4',
    sanskrit: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ॥',
    translit: 'Ananyash Chintayanto Mam Ye Janah Paryupasate',
    meaning: 'Those who worship Me with single-minded devotion — I carry what they lack, I preserve what they have.',
    practice: 'Set a timer for 10 minutes of name-smaran (repetition of your chosen divine name).',
    source: 'Bhagavad Gita 9.22',
  },
  {
    id: 'd5',
    sanskrit: 'उद्धरेदात्मनात्मानं आत्मैव ह्यात्मनो बन्धुः ॥',
    translit: 'Uddhared Atmanatmanam Atmaiva Hyatmano Bandhuh',
    meaning: 'Lift up the self by the Self; the self is one’s own friend — and one’s own enemy.',
    practice: 'Do one thing today that your higher self will thank you for — study, exercise, or silence.',
    source: 'Bhagavad Gita 6.5',
  },
  {
    id: 'd6',
    sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ॥',
    translit: 'Sarva Dharman Parityajya Mam Ekam Sharanam Vraja',
    meaning: 'Abandon all anxieties of dharma and take refuge in Me alone.',
    practice: 'At the end of the day, hand over one worry to the Divine in writing — then let it rest.',
    source: 'Bhagavad Gita 18.66',
  },
  {
    id: 'd7',
    sanskrit: 'ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ॥',
    translit: 'Ishavasyam Idam Sarvam Yat Kincha Jagatyam Jagat',
    meaning: 'All this, whatever moves in this moving world, is pervaded by the Lord.',
    practice: 'Before consuming anything today — food, news, purchase — pause and see it as the Lord’s.',
    source: 'Isha Upanishad 1',
  },
  {
    id: 'd8',
    sanskrit: 'सत्यमेव जयते नानृतम् ॥',
    translit: 'Satyameva Jayate Nanritam',
    meaning: 'Truth alone triumphs, never untruth.',
    practice: 'Speak one difficult truth today — gently, and at the right time.',
    source: 'Mundaka Upanishad 3.1.6',
  },
  {
    id: 'd9',
    sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥',
    translit: 'Om Bhur Bhuvah Svah, Tat Savitur Varenyam, Bhargo Devasya Dhimahi, Dhiyo Yo Nah Prachodayat',
    meaning: 'May the radiant light of the divine Sun illumine our intellect.',
    practice: 'Rise ten minutes early and offer water to the rising sun with this mantra.',
    source: 'Rig Veda 3.62.10 — Gayatri Mantra',
  },
  {
    id: 'd10',
    sanskrit: 'असतो मा सद्गमय । तमसो मा ज्योतिर्गमय ॥',
    translit: 'Asato Maa Sadgamaya, Tamaso Maa Jyotir Gamaya',
    meaning: 'Lead me from the unreal to the real; from darkness to light.',
    practice: 'Name one habit that keeps you in tamas — replace fifteen minutes of it with a lamp and this prayer.',
    source: 'Brihadaranyaka Upanishad 1.3.28',
  },
  {
    id: 'd11',
    sanskrit: 'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥',
    translit: 'Sarve Bhavantu Sukhinah Sarve Santu Niramayah',
    meaning: 'May all beings be happy; may all beings be free from illness.',
    practice: 'Cook or buy a little extra today and share it — with a person, bird, or animal.',
    source: 'Traditional Shanti Path',
  },
  {
    id: 'd12',
    sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ॥',
    translit: 'Adveshta Sarvabhutanam Maitrah Karuna Eva Cha',
    meaning: 'He who hates no being, who is friendly and compassionate to all — such a devotee is dear to Me.',
    practice: 'Today, resolve one strained relationship with a kind word — no explanation needed.',
    source: 'Bhagavad Gita 12.13',
  },
  {
    id: 'd13',
    sanskrit: 'ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते ॥',
    translit: 'Dhyayato Vishayan Pumsah Sangasteshupajayate',
    meaning: 'Brooding on sense-objects, attachment is born; from attachment, desire; from desire, anger.',
    practice: 'Notice one trigger of anger today at its very first spark — and breathe through it once.',
    source: 'Bhagavad Gita 2.62',
  },
  {
    id: 'd14',
    sanskrit: 'योगः कर्मसु कौशलम् ॥',
    translit: 'Yogah Karmasu Kaushalam',
    meaning: 'Yoga is skill in action.',
    practice: 'Choose the most ordinary task of your day — washing, walking, typing — and make it an offering, done perfectly.',
    source: 'Bhagavad Gita 2.50',
  },
];

// ── Festivals ──────────────────────────────────────────────────────────────────

export interface Festival {
  id: string;
  name: string;
  sanskrit: string;
  dateLabel: string;
  dateISO?: string; // ISO date for countdown (only where widely published)
  tithi: string;
  desc: string;
  verified: boolean;
}

export const FESTIVALS: Festival[] = [
  {
    id: 'diwali-2026',
    name: 'Diwali — Lakshmi Puja',
    sanskrit: 'दीपावलि',
    dateLabel: '8 November 2026 (Sunday)',
    dateISO: '2026-11-08',
    tithi: 'Kartika Amavasya',
    desc: 'The festival of lights — five days from Dhanteras to Bhai Dooj. Lamps welcome Rama’s return to Ayodhya and invite Maa Lakshmi into cleaned and illumined homes.',
    verified: true,
  },
  {
    id: 'gita-jayanti-2026',
    name: 'Gita Jayanti',
    sanskrit: 'गीता जयंती',
    dateLabel: '20 December 2026 (Sunday)',
    dateISO: '2026-12-20',
    tithi: 'Shukla Ekadashi of Margashirsha (Mokshada Ekadashi)',
    desc: 'The birthday of the Bhagavad Gita — the day Krishna spoke it at Kurukshetra. Devotees recite all 18 chapters; many observe the Mokshada Ekadashi vrata.',
    verified: true,
  },
  {
    id: 'makar-sankranti-2027',
    name: 'Makar Sankranti',
    sanskrit: 'मकर संक्रान्ति',
    dateLabel: '15 January 2027 (Friday)',
    dateISO: '2027-01-15',
    tithi: 'Solar transit into Makara Rashi (Uttarayan begins)',
    desc: 'The Sun turns northward — celebrated as Pongal in Tamil Nadu, Lohri in Punjab, Magh Bihu in Assam, Uttarayan in Gujarat. Holy dips, til-gud sweets and kite-filled skies.',
    verified: true,
  },
  {
    id: 'shivaratri-2027',
    name: 'Maha Shivaratri',
    sanskrit: 'महाशिवरात्रि',
    dateLabel: '26 February 2027 (Friday)',
    dateISO: '2027-02-26',
    tithi: 'Phalguna Krishna Chaturdashi',
    desc: 'The great night of Shiva — a full night’s vigil with abhisheka of the linga, “Om Namah Shivaya” japa, and fasting. Said to be the night Shiva danced the tandava.',
    verified: true,
  },
  {
    id: 'holi-2027',
    name: 'Holi',
    sanskrit: 'होली',
    dateLabel: '22 March 2027 (Monday) · Holika Dahan on the eve',
    dateISO: '2027-03-22',
    tithi: 'Phalguna Purnima',
    desc: 'The festival of colours and spring’s arrival. The Holika bonfire remembers Prahlad’s faith; the morning of colours dissolves all barriers in gulal and song.',
    verified: true,
  },
  {
    id: 'ram-navami-2027',
    name: 'Ram Navami',
    sanskrit: 'राम नवमी',
    dateLabel: 'April 2027 · as per local panchang',
    tithi: 'Chaitra Shukla Navami',
    desc: 'The appearance day of Shri Rama — the ninth day of Chaitra’s bright half, concluding Chaitra Navratri. Akhand path of the Ramayana and kirtan mark the day.',
    verified: false,
  },
  {
    id: 'guru-purnima-2027',
    name: 'Guru Purnima',
    sanskrit: 'गुरु पूर्णिमा',
    dateLabel: 'July 2027 · as per local panchang',
    tithi: 'Ashadha Purnima',
    desc: 'The full moon of the guru — honouring Vyasa and one’s own teachers. Sadhaks begin chaturmasya, four months of intensified practice.',
    verified: false,
  },
  {
    id: 'raksha-bandhan-2027',
    name: 'Raksha Bandhan',
    sanskrit: 'रक्षाबन्धन',
    dateLabel: 'August 2027 · as per local panchang',
    tithi: 'Shravan Purnima',
    desc: 'Sisters tie the rakhi — a thread of protection and love — and brothers vow lifelong care. The sacred thread, like all bonds, binds by love, not by rope.',
    verified: false,
  },
  {
    id: 'janmashtami-2027',
    name: 'Krishna Janmashtami',
    sanskrit: 'कृष्ण जन्माष्टमी',
    dateLabel: 'August–September 2027 · as per local panchang',
    tithi: 'Shravana Krishna Ashtami (Rohini nakshatra)',
    desc: 'Midnight birth of Krishna in Mathura — a day of fasting, dahi-handi, jhulan and the reading of the Bhagavatam’s tenth canto.',
    verified: false,
  },
  {
    id: 'ganesh-chaturthi-2027',
    name: 'Ganesh Chaturthi',
    sanskrit: 'गणेश चतुर्थी',
    dateLabel: '3–4 September 2027 (regional calendars differ)',
    dateISO: '2027-09-04',
    tithi: 'Bhadrapada Shukla Chaturthi',
    desc: 'The arrival of Ganesha — ten days of murti-sthapana, aarti and modak, culminating in Ganesh Visarjan with the cry “Ganapati Bappa Morya!”',
    verified: true,
  },
  {
    id: 'kumbh-2027',
    name: 'Kumbh Mela — Nashik–Trimbakeshwar',
    sanskrit: 'कुम्भ मेला',
    dateLabel: '17 July – 17 August 2027',
    dateISO: '2027-07-17',
    tithi: 'Shravan month cycle (12-year tradition)',
    desc: 'The Simhastha Kumbh at Trimbakeshwar–Nashik, once in twelve years — the largest gathering of humanity on earth, drawn to the sacred Godavari.',
    verified: true,
  },
  {
    id: 'navratri-2027',
    name: 'Sharadiya Navratri & Dussehra',
    sanskrit: 'नवरात्रि',
    dateLabel: 'September–October 2027 · as per local panchang',
    tithi: 'Ashwin Shukla Pratipada to Dashami',
    desc: 'Nine nights of the Navadurga — fasting, garba and Durga Puja pandals — crowned by Vijayadashami: dharma’s victory, Rama’s and the Devi’s.',
    verified: false,
  },
  {
    id: 'diwali-2027',
    name: 'Diwali — Deepavali',
    sanskrit: 'दीपोत्सव',
    dateLabel: '28 October 2027 (Thursday)',
    dateISO: '2027-10-28',
    tithi: 'Kartika Amavasya',
    desc: 'The next festival of lights — rows upon rows of deepaks, Lakshmi Puja in the pradosh kaal, and the victory of light made visible.',
    verified: true,
  },
];
