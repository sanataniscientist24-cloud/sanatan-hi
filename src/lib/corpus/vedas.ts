import type { CorpusEntry } from "./types";

const V = "Rigveda";
const VH = "ऋग्वेद";

/** The Four Vedas — core hymns. */
export const VEDA_ENTRIES: CorpusEntry[] = [
  {
    id: "rv-agni-1-1-1",
    kind: "verse",
    bookId: "vedas",
    section: `${V} · Mandala 1 · Hymn 1`,
    sectionHi: `${VH} · मंडल 1 · सूक्त 1`,
    verse: "1.1.1",
    sanskrit:
      "अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्। होतारं रत्नधातमम् ॥",
    translit:
      "agnim īḷe purohitaṁ yajñasya deva-mṛtvijam, hotāraṁ ratna-dhātamam",
    hindi:
      "मैं यज्ञ का पुरोहित, देवताओं का हवी-भाजक और रत्न-भाजन रूप होता अग्नि की स्तुति करता हूँ। विश्व के प्रथम ग्रंथ ऋग्वेद का प्रथम ऋचा — सृष्टि के आरम्भ में सबसे पहले अग्नि का आह्वान।",
    english:
      "I laud Agni, the household priest of the sacrifice, the divine minister of the rite, the invoker, bestower of treasures. The very first verse of the Rigveda — the first book of humanity — invokes Fire at the beginning of creation.",
    tags: ["agni", "fire", "first verse", "rigveda opening", "अग्नि", "प्रथम ऋचा", "यज्ञ", "ऋग्वेद", "fire god"],
  },
  {
    id: "rv-gayatri-3-62-10",
    kind: "mantra",
    bookId: "vedas",
    section: `${V} · Mandala 3.62.10 — Gayatri Mantra`,
    sectionHi: `${VH} · मंडल 3.62.10 — गायत्री मंत्र`,
    verse: "3.62.10",
    sanskrit:
      "ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात् ॥",
    translit:
      "oṁ bhūr bhuvaḥ svaḥ — tat savitur vareṇyaṁ bhargo devasya dhīmahi, dhiyo yo naḥ pracodayāt",
    hindi:
      "ॐ — भूः (पृथ्वी), भुवः (अंतरिक्ष), स्वः (स्वर्ग)। हम उस प्रियतम, उत्तम तेजस्वी, दिव्य सविता (सूर्य-परमात्मा) के तेज का ध्यान करें; वह हमारी बुद्धि को प्रेरित एवं निर्देशित करे। संध्या-वंदन का मूल मंत्र — गायत्री, वेदों की माता।",
    english:
      "Om — earth, atmosphere, heaven. May we meditate on the adorable glory of the divine Sun (Savitr); may He illumine and guide our intellect. The Gayatri — mother of the Vedas and the heart of the daily sandhya prayer.",
    tags: ["gayatri", "sandhya", "sun", "savitur", "intellect", "गायत्री मंत्र", "संध्या", "सूर्य", "बुद्धि", "famous", "daily prayer"],
  },
  {
    id: "rv-purusha-10-90-1",
    kind: "verse",
    bookId: "vedas",
    section: `${V} · Mandala 10.90 — Purusha Sukta`,
    sectionHi: `${VH} · मंडल 10.90 — पुरुष सूक्त`,
    verse: "10.90.1-3",
    sanskrit:
      "सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात्। स भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥ पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम्। उतामृतत्वस्येशानो यदन्नेनातिरोहति ॥ एतावानस्य महिमातो ज्यायांश्च पूरुषः। पादोऽस्य विश्वा भूतानि त्रिपादस्यामृतं दिवि ॥",
    translit:
      "sahasra-śīrṣā puruṣaḥ sahasrākṣaḥ sahasra-pāt, sa bhūmiṁ viśvato vṛtvāty atiṣṭhad daśāṅgulam — puruṣa evedaṁ sarvaṁ yad bhūtaṁ yac ca bhavyam, utāmṛtatvasyeśāno yad annenātirohati — etāvān asya mahimāto jyāyāṁś ca pūruṣaḥ, pādo 'sya viśvā bhūtāni tripād asyāmṛtaṁ divi",
    hindi:
      "सहस्र सिर, सहस्र नेत्र और सहस्र पावों वाले पुरुष ने सम्पूर्ण पृथ्वी को व्याप्त कर दस अंगुल ऊपर ठहरे हैं। यह समस्त जगत् — जो रहा, जो है, जो होगा — पुरुष ही है; वही अमृतत्व के स्वामी हैं। समस्त प्राणी उनका एक चतुर्थांश (पाद) हैं — अमर तीन चतुर्थांश दिवि (परम धाम) में शोभित हैं। समस्त वेद-रूपों में विराजमान ईश्वर का वर्णन।",
    english:
      "The Cosmic Person has a thousand heads, a thousand eyes, a thousand feet; He pervades the whole earth and stands ten fingers beyond. All this universe — what was, is and shall be — is the Purusha; He is the lord of immortality. All beings are but one quarter of Him; three quarters are immortal in heaven. The grand Vedic vision of the all-pervading Lord.",
    tags: ["purusha sukta", "cosmic being", "virat", "पुरुष सूक्त", "विराट", "सहस्र शीर्ष", "ब्रह्मांड", "creation", "famous"],
  },
  {
    id: "rv-nasadiya-10-129-1",
    kind: "verse",
    bookId: "vedas",
    section: `${V} · Mandala 10.129 — Nasadiya Sukta`,
    sectionHi: `${VH} · मंडल 10.129 — नासदीय सूक्त`,
    verse: "10.129.1-2",
    sanskrit:
      "नासदासीन्नो सदासीत्तदानीमासीद्रजो नो व्योमा परो यत्। किमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम् ॥ न मृत्युरासीदमृतं न तर्हि न रात्र्या अह्न आसीत्प्रकेतः। आनीदवातं स्वधया तदेकं तस्माद्धान्यन्न परः किञ्चनास ॥",
    translit:
      "nāsad āsīn no sad āsīt tadānīm āsīd rajo no vyomā paro yat, kim āvarīvaḥ kuha kasya śarmann ambhaḥ kim āsīd gahanaṁ gabhīram — na mṛtyur āsīd amṛtaṁ na tarhi na rātryā ahna āsīt praketaḥ, ānīd avātaṁ svadhayā tad ekaṁ tasmād dhānyan na paraḥ kiñcanāsa",
    hindi:
      "उस समय न असत् था, न सत् था; न रज था, न व्योम — किसकी आश्रय-शक्ति थी, कहाँ था और किसका जल-सागर? न मृत्यु थी, न अमृत; न रात्रि, न दिवस — केवल वह एक तत्त्व अपनी स्वधा से निःश्वासवान् था; उसके सिवा और कुछ नहीं था। सृष्टि-पूर्व अवस्था का ऋषि-दर्शन — विश्व का सबसे प्राचीन दार्शनिक गीत।",
    english:
      "Then even non-being was not, nor being; no air, no sky beyond — what covered it, where, in whose shelter, was that water, the deep abyss? There was no death, no immortality; no night, no day — only That One breathed, self-supported, without wind; other than It, nothing existed. The seer's vision of the state before creation — the most ancient philosophical poem of the world.",
    tags: ["nasadiya", "creation", "philosophy", "before creation", "नासदीय सूक्त", "सृष्टि", "पूर्व", "असत्", "philosophy", "famous"],
  },
  {
    id: "rv-bhadra-1-89",
    kind: "verse",
    bookId: "vedas",
    section: `${V} · Mandala 1.89.1`,
    sectionHi: `${VH} · मंडल 1.89.1`,
    verse: "1.89.1",
    sanskrit:
      "आ नो भद्राः क्रतवो यन्तु विश्वतः।",
    translit:
      "ā no bhadrāḥ kratavo yantu viśvataḥ",
    hindi:
      "सब ओर से हमारे पास कल्याणकारी विचार आएँ — सत्य की खोज में किसी भी दिशा से आया अच्छा विचार ग्रहण करने योग्य है; इसी ऋचा से भारतीय ज्ञान-परम्परा की उदारता अभिव्यक्त होती है।",
    english:
      "Let noble thoughts come to us from every side — the verse that reveals the openness of Indian learning: truth is welcome from any direction.",
    tags: ["bhadra", "noble thoughts", "openness", "आ नो भद्रा", "उत्तम विचार", "ज्ञान", "उदारता", "famous"],
  },
  {
    id: "rv-mrityunjaya-7-59-12",
    kind: "mantra",
    bookId: "vedas",
    section: `${V} · Mandala 7.59.12 — Maha Mrityunjaya`,
    sectionHi: `${VH} · मंडल 7.59.12 — महामृत्युंजय मंत्र`,
    verse: "7.59.12",
    sanskrit:
      "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥",
    translit:
      "oṁ tryambakaṁ yajāmahe sugandhiṁ puṣṭi-vardhanam, urvārukam iva bandhanān mṛtyor mukṣīya māmṛtāt",
    hindi:
      "तीन नेत्रों वाले त्र्यम्बक (शिव) की हम उपासना करें; सुगंधित, पोषक (पुष्टि-वर्धक) परमेश्वर की — वे हमें फल की डाली के सदृश बंधन से (मृत्यु से) निर्लिप्त कर मृत्यु के पार अमृत में स्थापित करें। महामृत्युंजय जप रोग, भय और मृत्यु-भंजन के लिए शिव-उपासना का सर्वश्रेष्ठ मंत्र है।",
    english:
      "We worship the three-eyed Lord Tryambaka, the fragrant nourisher of all; may He liberate us from the bond of death, like a cucumber from its stalk, and grant us immortality. The great death-conquering mantra of Shiva — the supreme prayer for healing, fearlessness and liberation from mortality.",
    tags: ["mrityunjaya", "tryambakam", "shiva", "immortality", "death", "महामृत्युंजय", "त्र्यम्बकं", "मृत्यु", "शिव", "healing", "famous", "मंत्र"],
  },
  {
    id: "av-earth-mother-12-1-12",
    kind: "verse",
    bookId: "vedas",
    section: "Atharvaveda · 12.1.12 — Bhumi Sukta",
    sectionHi: "अथर्ववेद · 12.1.12 — भूमि सूक्त",
    verse: "12.1.12",
    sanskrit:
      "माता भूमिः पुत्रोऽहं पृथिव्याः।",
    translit:
      "mātā bhūmiḥ putro 'haṁ pṛthivyāḥ",
    hindi:
      "पृथ्वी मेरी माता है और मैं उस पृथ्वी का पुत्र हूँ। भूमि-सूक्त पृथ्वी को जीवंत माता के रूप में स्तुति करता है — पारिस्थितिक चेतना का वैदिक उद्गम।",
    english:
      "The Earth is my mother and I am her son. The Bhumi Sukta praises the planet as a living mother — the Vedic origin of ecological consciousness.",
    tags: ["earth", "mother", "bhumi", "ecology", "माता भूमि", "पृथ्वी", "पुत्र", "पर्यावरण", "environment"],
  },
  {
    id: "yv-rudram",
    kind: "mantra",
    bookId: "vedas",
    section: "Yajurveda · Shri Rudram (TS 4.5/4.8)",
    sectionHi: "यजुर्वेद · श्री रुद्रम्",
    sanskrit:
      "नमः शिवाय च शिवतराय च।",
    translit:
      "namaḥ śivāya ca śivatāraya ca",
    hindi:
      "कल्याण-स्वरूप शिव को नमस्कार और उनसे भी अधिक कल्याणकारी शिवतर को नमस्कार। श्रीरुद्रम् में रुद्र-देव का अनेक रूपों में स्तुति हुई है — 'नमः शिवाय' का मूल स्रोत यही श्रुति है।",
    english:
      "Salutations to Shiva, the auspicious, and to the Shiva-than-Shiva, the yet more auspicious. The Shri Rudram hymns Rudra in His countless forms — this very line is the scriptural source of the mantra Om Namah Shivaya.",
    tags: ["rudram", "namah shivaya", "shiva", "yajurveda", "रुद्रम्", "नमः शिवाय", "शिव", "यजुर्वेद", "shruti"],
  },
  {
    id: "yv-shanti-1",
    kind: "mantra",
    bookId: "vedas",
    section: "Yajurveda · Taittiriya 1.1.1 — Shanti Path",
    sectionHi: "यजुर्वेद · तैत्तिरीय 1.1.1 — शान्ति पाठ",
    sanskrit:
      "ॐ शं नो मित्रः शं वरुणः शं नो भवत्वमर्मा। शं न इन्द्रो बृहस्पतिः शं नो विष्णुरुरुक्रमः। नमो ब्रह्मणे नमस्ते वायो। त्वमेव प्रत्यक्षं ब्रह्मासि ॥",
    translit:
      "oṁ śaṁ no mitraḥ śaṁ varuṇaḥ śaṁ no bhavatva armā, śaṁ na indro bṛhaspatiḥ śaṁ no viṣṇur urukramaḥ, namo brahmaṇe namas te vāyo, tvam eva pratyakṣaṁ brahmāsi",
    hindi:
      "मित्र हमारे लिए कल्याणकारी हों, वरुण, भग (आदित्य), इन्द्र, बृहस्पति और विषाल-क्रमी विष्णु भी कल्याणकारी हों। ब्रह्म को नमस्कार, वायु को नमस्कार — तुम ही साक्षात् ब्रह्म हो। शास्त्र-अध्ययन से पूर्व पढ़ा जाने वाला प्रार्थना-सूक्त।",
    english:
      "May Mitra, Varuna, Bhaga, Indra, Brihaspati and the vast-striding Vishnu be auspicious to us. Salutation to Brahman, salutation to Vayu — You alone are the visible Brahman. The prayer recited before every scriptural study.",
    tags: ["shanti", "prayer", "study", "mitra", "varuna", "शान्ति पाठ", "प्रार्थना", "अध्ययन", "वायु", "ब्रह्म"],
  },
  {
    id: "sv-veda-meaning",
    kind: "concept",
    bookId: "vedas",
    title: "What is a Veda?",
    titleHi: "वेद क्या है?",
    hindi:
      "'वेद' शब्द 'विद्' (जानना) धातु से बना है — ज्ञान या जानने का साधन। वेद श्रुति हैं: ऋषियों ने ध्यान में जो ऋचाएँ 'सुनीं', वे गायत्री छंद में पीढ़ी-दर-पीढ़ी वेदांग-विधि से शुद्ध सुराखीं — इसलिए ये अपौरुषेय (मनुष्य-रचित नहीं) मानी जाती हैं। वेद के भाग: संहिता (मंत्र), ब्राह्मण (कर्मकांड-विधि), आरण्यक (वन-चिंतन), उपनिषद् (ब्रह्म-ज्ञान)। 'वेदोऽखिलो धर्ममूलम्' — समस्त धर्म का मूल वेद ही है।",
    english:
      "The word 'Veda' comes from 'vid', to know — knowledge itself. The Vedas are shruti: hymns 'heard' by rishi in meditation, then transmitted for millennia with faultless oral precision — hence called apaurusheya, not of human authorship. Each Veda has four strata: Samhita (mantras), Brahmana (ritual), Aranyaka (forest contemplation) and Upanishad (supreme knowledge). 'Vedo akhilo dharmamulam' — the whole of dharma is rooted in the Vedas.",
    tags: ["veda", "shruti", "apaurusheya", "structure", "वेद क्या है", "श्रुति", "अपौरुषेय", "संहिता", "what is veda"],
  },
  {
    id: "sv-samaveda",
    kind: "concept",
    bookId: "vedas",
    title: "Samaveda — the Veda of Song",
    titleHi: "सामवेद — संगीत का वेद",
    hindi:
      "सामवेद ऋग्वेद की ऋचाओं का साधु-संगीत रूप में गायन है — भारतीय संगीत (संगीत शब्द स्वयं 'साम' से बना) का उद्गम। गीता में कृष्ण ने कहा — 'वेदानां सामवेदोऽस्मि' (वेदों में मैं सामवेद हूँ)। यज्ञ में उद्गाता-पुरोहित साम-गान से देवताओं का आह्वान करते हैं।",
    english:
      "The Samaveda sings Rigvedic verses in sacred melody — the fountainhead of Indian music (the very word sangeet derives from sama). Krishna declares in the Gita: 'Among Vedas I am the Sama Veda.' In the sacrifice, the udgatri priest invokes the gods through saman chant.",
    tags: ["samaveda", "music", "sama", "सामवेद", "संगीत", "गान", "गीता", "music veda"],
  },
];

const U = "Upanishads";
const UH = "उपनिषद्";

/** Upanishads — great verses of Vedanta. */
export const UPANISHAD_ENTRIES: CorpusEntry[] = [
  {
    id: "up-isha-1",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Isha Upanishad 1`,
    sectionHi: `${UH} · ईशावास्योपनिषद् 1`,
    verse: "Isha 1",
    sanskrit:
      "ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्। तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥",
    translit:
      "īśā vāsyam idaṁ sarvaṁ yat kiñca jagatyāṁ jagat, tena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam",
    hindi:
      "इस चराचर जगत् में जो कुछ है, वह सब ईश (भगवान्) का निवास-रूप है — इस ज्ञान से त्याग करके भोग कर, और इस ज्ञान-भाव से युक्त होकर भुंज; किसका धन है, इस प्रकार 'माँगने' वाली कामना रखना उचित नहीं। ईशोपनिषद् का प्रथम मंत्र — त्याग-भाव से भोग का अनुपम सूत्र।",
    english:
      "All this — whatever moves in this moving world — is pervaded by the Lord. Enjoy what He gives, offering it back to Him; do not covet, for whose is this wealth? The opening mantra of the Isha Upanishad — the matchless formula of enjoying through renunciation.",
    tags: ["isha", "renunciation", "enjoy", "ईशा वास्यम्", "त्याग", "ईश", "जगत्", "renounce", "famous"],
  },
  {
    id: "up-isha-6",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Isha Upanishad 6`,
    sectionHi: `${UH} · ईशावास्योपनिषद् 6`,
    verse: "Isha 6",
    sanskrit:
      "यस्तु सर्वाणि भूतान्यात्मन्येवानुपश्यति। सर्वभूतेषु चात्मानं ततो न विजुगुप्सते ॥",
    translit:
      "yas tu sarvāṇi bhūtāny ātmany evānupaśyati, sarva-bhūteṣu cātmānaṁ tato na vijugupsate",
    hindi:
      "जो पुरुष समस्त प्राणियों को अपने आत्मा में देखता है और समस्त प्राणियों में अपने आत्मा को, वह किसी से घृणा नहीं करता। एकता-दर्शन का शाश्वत सूत्र।",
    english:
      "One who sees all beings in the Self, and the Self in all beings, feels revulsion toward none. The eternal law of seeing oneness.",
    tags: ["unity", "self in all", "oneness", "एकता", "सर्वभूत", "आत्म-दर्शन", "oneness"],
  },
  {
    id: "up-isha-15-18",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Isha Upanishad 15-18`,
    sectionHi: `${UH} · ईशावास्योपनिषद् 15-18`,
    verse: "Isha 15,18",
    sanskrit:
      "हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम्। तत्त्वं पूषन्नपावृणु सत्यधर्माय दृष्टये ॥ ... अग्ने नय सुपथा राये अस्मान् विश्वानि देव वयुनानि विद्वान्। युयोध्यस्मज्जुहुराणमेनो भूयिष्ठां ते नमउक्तिं विधेम ॥",
    translit:
      "hiraṇmayena pātreṇa satyasyāpihitaṁ mukham, tat tvaṁ pūṣan apāvṛṇu satya-dharmāya dṛṣṭaye — agne naya supathā rāye asmān viśvāni deva vayunāni vidvān, yuyodhy asmaj juhurāṇam eno bhūyiṣṭhāṁ te nama-uktiṁ vidhema",
    hindi:
      "सत्य का मुख सुनहरे पात्र से ढका है; हे पूषन! तू उस आवरण को भक्त के सत्य-धर्म दर्शन के लिये हटा दे। ... हे अग्ने! तू हमें सुख-मार्ग से ने के लिये ले चल; हमसे समस्त लोभ-दोष दूर कर — हम तुझ पर बहुत नमस्कार करते हैं।",
    english:
      "The face of truth is covered with a golden vessel; O Nourisher, remove that veil for the seeker of truth. ... O Fire, lead us by the good path to felicity; burn away our crooked sins — we offer you our salutations again and again.",
    tags: ["truth", "veil", "final prayer", "सत्य", "हिरण्मय", "पात्र", "आवरण", "अग्ने नय", "supatha"],
  },
  {
    id: "up-katha-20",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Katha Upanishad 1.2.20`,
    sectionHi: `${UH} · कठोपनिषद् 1.2.20`,
    verse: "Katha 1.2.20",
    sanskrit:
      "अणोरणीयान्महतो महीयानात्मास्य जन्तोर्निहितो गुहायाम्। तमक्रतुः पश्यति वीतशोको धातुःप्रसादान्महिमानमात्मनः ॥",
    translit:
      "aṇor aṇīyān mahato mahīyān ātmāsya jantor nihito guhāyām, tam akratuḥ paśyati vīta-śoko dhātuḥ prasādān mahimānam ātmanaḥ",
    hindi:
      "आत्मा अणु से भी सूक्ष्म और महत् से भी बड़ा है; यह जीव के हृदय-गुफा में विराजमान है। वीतशोक (शोक-रहित) और संयत-इंद्रिय पुरुष ईश्वर-कृपा से उस आत्मा के यथार्थ महिमा को देखता है। नचिकेता को यमराज का उत्तर।",
    english:
      "The Self is smaller than the smallest, greater than the greatest; it dwells in the cave of every heart. The desireless, tranquil seer, by the grace of the Creator, beholds the glory of the Self. Yama's answer to young Nachiketa.",
    tags: ["katha", "nachiketa", "yama", "subtle", "self", "कठ", "नचिकेता", "यम", "आत्मा", "सूक्ष्म", "famous"],
  },
  {
    id: "up-katha-chariot",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Katha Upanishad 1.3.3-4`,
    sectionHi: `${UH} · कठोपनिषद् 1.3.3-4`,
    verse: "Katha 1.3.3-4",
    sanskrit:
      "आत्मनं रथिनं विद्धि शरीरं रथमेव तु। बुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥ इन्द्रियाणि हयानाहुर्विषयांस्तेषु गोचरान्। आत्मेन्द्रियमनोयुक्तं भोक्तेत्याहुरुत्तमम् ॥",
    translit:
      "ātmanaṁ rathinaṁ viddhi śarīraṁ ratham eva tu, buddhiṁ tu sārathiṁ viddhi manaḥ pragraham eva ca — indriyāṇi hayān āhur viṣayāṁs teṣu gocarān, ātmendriya-mano-yuktaṁ bhoktety āhur uttamam",
    hindi:
      "आत्मा को रथी जानो, शरीर रथ है, बुद्धि सारथि, मन लगाम; इंद्रियाँ घोड़े हैं और विषय उनके विचरण-भूमि। इंद्रिय-मन से युक्त आत्मा भोक्ता कहलाता है। ज्ञान-यात्रा का प्रसिद्ध रथ-कल्पना — जीवन की संपूर्ण मनोविज्ञान-दृष्टि।",
    english:
      "Know the Self as the charioteer, the body as the chariot; the intellect is the driver, the mind the reins; the senses are the horses, the sense-objects their roads. The Self joined with senses and mind becomes the enjoyer. The celebrated chariot analogy — a complete psychology of life in two verses.",
    tags: ["chariot", "katha", "psychology", "रथ", "सारथि", "लगाम", "घोड़े", "बुद्धि", "मन", "analogy", "famous"],
  },
  {
    id: "up-katha-15",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Katha Upanishad 1.3.15`,
    sectionHi: `${UH} · कठोपनिषद् 1.3.15`,
    verse: "Katha 1.3.15",
    sanskrit:
      "अशब्दमस्पर्शमरूपमव्ययं तथारसम् नित्यमगन्धवच्च यत्। अनाद्यनन्तमेव च नित्यं बुद्ध्या तत् शब्दादनुव्यपन्नमभ्यासत् ॥",
    translit:
      "aśabdam asparśam arūpam avyayaṁ tathārasam nityam agandhava cca yat, anādyanantameva ca nityaṁ buddhyā tat śabdād anuvyapannam abhyāsat",
    hindi:
      "जो अशब्द, अस्पर्श, अरूप, अव्यय, रस-रहित, नित्य, अगन्ध है; जो अनादि-अनन्त है और शब्द-महा-भूत से परे है — उस आत्मा को बुद्धि और अभ्यास से विचार कर जानना चाहिए।",
    english:
      "Soundless, touchless, formless, imperishable; likewise tasteless, constant, odorless; without beginning and end, beyond the great element — by such discrimination the Self is to be known through practice.",
    tags: ["self qualities", "formless", "अशब्द", "अरूप", "अनादि", "आत्म-धर्म", "discrimination"],
  },
  {
    id: "up-chand-tattvamasi",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Chandogya Upanishad 6.8.7`,
    sectionHi: `${UH} · छान्दोग्योपनिषद् 6.8.7`,
    verse: "Chandogya 6.8.7",
    sanskrit:
      "तत् त्वम् असि श्वेतकेतो।",
    translit:
      "tat tvam asi, śvetaketo",
    hindi:
      "हे श्वेतकेतु! तत् (वह परम तत्त्व) त्वम् (तू) असि (ही है)। पिता उद्दालक ने पुत्र से जो महावाक्य कहा — वह अद्वैत का आधार-सूत्र बन गया। सत् से सृष्टि, तत् में लय — 'तू स्वयं वही है।'",
    english:
      "That thou art, O Shvetaketu. The great saying (mahavakya) spoken by father Uddalaka to his son — the foundational declaration of Advaita: the innermost Self and the Absolute are one.",
    tags: ["tat tvam asi", "mahavakya", "advaita", "shvetaketu", "तत् त्वम् असि", "महावाक्य", "अद्वैत", "श्वेतकेतु", "famous", "mahavakya"],
  },
  {
    id: "up-chand-sadeva",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Chandogya Upanishad 6.2.1-2`,
    sectionHi: `${UH} · छान्दोग्योपनिषद् 6.2.1-2`,
    verse: "Chandogya 6.2.1",
    sanskrit:
      "सदेव सोम्येदमग्र आसीदेकमेवाद्वितीयम्।",
    translit:
      "sadeva somyedam agrā āsīd ekamevādvitīyam",
    hindi:
      "हे सुमुख! आदि में एक 'सत्' ही था, एक ही — दूसरा कुछ नहीं था। सृष्टि-पूर्व एकमात्र सत् का अस्तित्व — उद्दालक-श्वेतकेतु संवाद का उद्घोष।",
    english:
      "In the beginning, my dear, this was Being alone — one only, without a second. The proclamation of the primal Unity that began Uddalaka's teaching.",
    tags: ["sat", "one without second", "creation", "सदेव", "एकमेवाद्वितीयम्", "अद्वैत", "सृष्टि", "unity"],
  },
  {
    id: "up-brihad-aham",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Brihadaranyaka Upanishad 1.4.10`,
    sectionHi: `${UH} · बृहदारण्यकोपनिषद् 1.4.10`,
    verse: "Brihad 1.4.10",
    sanskrit:
      "अहं ब्रह्मास्मि।",
    translit:
      "ahaṁ brahmāsmi",
    hindi:
      "मैं ब्रह्म हूँ। याज्ञवल्क्य-मैत्रेयी संवाद से उद्भूत यह महावाक्य घोषणा करता है कि जीव का स्वरूप परम ब्रह्म ही है — ज्ञान का उत्कर्ष यही अनुभूति है।",
    english:
      "I am Brahman. The great saying arising from the Yajnavalkya-Maitreyi dialogue — the Self of every being is none other than the Absolute; the culmination of knowledge is this realization.",
    tags: ["aham brahmasmi", "mahavakya", "self", "अहं ब्रह्मास्मि", "याज्ञवल्क्य", "महावाक्य", "ब्रह्म", "famous"],
  },
  {
    id: "up-brihad-asato",
    kind: "mantra",
    bookId: "upanishads",
    section: `${U} · Brihadaranyaka Upanishad 1.3.28`,
    sectionHi: `${UH} · बृहदारण्यकोपनिषद् 1.3.28`,
    verse: "Brihad 1.3.28",
    sanskrit:
      "असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय। ॐ शान्तिः शान्तिः शान्तिः ॥",
    translit:
      "asato mā sadgamaya, tamaso mā jyotirgamaya, mṛtyor mā amṛtaṁ gamaya, oṁ śāntiḥ śāntiḥ śāntiḥ",
    hindi:
      "मुझे असत्य से सत्य की ओर ले चलो, अंधकार से प्रकाश की ओर ले चलो, मृत्यु से अमरता की ओर ले चलो। ॐ शान्तिः शान्तिः शान्तिः — विश्व की सर्वाधिक प्रार्थित मंत्र-पंक्ति।",
    english:
      "Lead me from the unreal to the real; lead me from darkness to light; lead me from death to immortality. Om, peace, peace, peace — the most beloved prayer-line of the world.",
    tags: ["asato ma sadgamaya", "prayer", "light", "immortality", "असतो मा सद्गमय", "तमसो मा ज्योतिर्गमय", "मृत्योर्मा", "famous", "peace"],
  },
  {
    id: "up-brihad-sarve",
    kind: "mantra",
    bookId: "upanishads",
    section: `${U} · Shanti mantra (Brihadaranyaka tradition)`,
    sectionHi: `${UH} · शान्ति मंत्र (बृहदारण्यक परम्परा)`,
    sanskrit:
      "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥",
    translit:
      "sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ, sarve bhadrāṇi paśyantu mā kaścid duḥkha-bhāg bhavet",
    hindi:
      "सब सुखी हों, सब निरोगी हों, सब का कल्याण हो और कोई दुःखी न हो — सामूहिक कल्याण की सर्वोत्तम प्रार्थना।",
    english:
      "May all be happy, may all be free from illness, may all see goodness, may none suffer — the supreme prayer for collective well-being.",
    tags: ["sarve bhavantu", "well-being", "peace", "सर्वे भवन्तु सुखिनः", "कल्याण", "निरामय", "famous", "welfare"],
  },
  {
    id: "up-mundaka-dva",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Mundaka Upanishad 3.1.1`,
    sectionHi: `${UH} · मुण्डकोपनिषद् 3.1.1`,
    verse: "Mundaka 3.1.1",
    sanskrit:
      "द्वा सुपर्णा सयुजा सखाया समानं वृक्षं परिषस्वजाते। तयोरन्यः पिप्पलं स्वाद्वत्त्यनश्नन्नन्यो अभिचाकशीति ॥",
    translit:
      "dvā suparṇā sayujā sakhāyā samānaṁ vṛkṣaṁ pariṣasvajāte, tayor anyaḥ pippalaṁ svādv atty anaśnann anyo abhicākaśīti",
    hindi:
      "एक ही वृक्ष पर दो पक्षी — सखा-सम — परस्पर आश्रित हैं; उनमें एक स्वादिष्ट फल खाता है, दूसरा (आत्मा) उसकी त्रुटि के बिना ज्ञान-दृष्टि से देखता है। जीव-परमात्मा का अमर कल्पना।",
    english:
      "Two birds, companions ever-united, cling to the same tree; one eats the sweet fruit while the other simply watches — the timeless image of the individual soul and the divine witness sharing one body.",
    tags: ["two birds", "mundaka", "witness", "द्वा सुपर्णा", "पक्षी", "साक्षी", "witness", "famous"],
  },
  {
    id: "up-mundaka-jnana",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Mundaka Upanishad 2.2.8`,
    sectionHi: `${UH} · मुण्डकोपनिषद् 2.2.8`,
    verse: "Mundaka 2.2.8",
    sanskrit:
      "भिद्यते हृदयग्रन्थिश्च्छिद्यन्ते सर्वसंशयाः। क्षीयन्ते चास्य कर्माणि तस्मिन्दृष्टे परावरे ॥",
    translit:
      "bhidyate hṛdaya-granthiś chidyante sarva-saṁśayāḥ, kṣīyante cāsya karmāṇi tasmin dṛṣṭe parāvare",
    hindi:
      "उस परम तत्त्व के दर्शन से (जो परे और अपरे दोनों है) हृदय की ग्रंथि खुल जाती है, समस्त संशय कट जाते हैं और कर्म लय हो जाते हैं — ज्ञान के परम फल का वर्णन।",
    english:
      "When the supreme — immanent and transcendent — is beheld, the knot of the heart is untied, all doubts are severed, and all karma melts away — the final fruit of realization.",
    tags: ["realization", "doubts", "knot of heart", "हृदयग्रन्थि", "संशय", "कर्म नाश", "liberation"],
  },
  {
    id: "up-mandukya-om",
    kind: "mantra",
    bookId: "upanishads",
    section: `${U} · Mandukya Upanishad 1`,
    sectionHi: `${UH} · माण्डूक्योपनिषद् 1`,
    verse: "Mandukya 1",
    sanskrit:
      "ॐ इत्येतदक्षरमिदं सर्वं। ज्ञाति तं वा अप्यन्तं ह्यद्वयम्॥",
    translit:
      "oṁ ity etad akṣaraṁ idaṁ sarvaṁ — jñāti taṁ vāpy antaṁ hy advayam",
    hindi:
      "ॐ — यही अक्षर (अविनाशी शब्द-ब्रह्म) समस्त जगत् है; वही विगत-अतीत, वही अद्वितीय परम तत्त्व है। बारह मंत्रों की माण्डूक्य उपनिषद् समस्त वेदांत का सार मानी जाती है।",
    english:
      "Om — this imperishable syllable is all this universe; its explanation: the past, the future and what exists beyond — all is Om, the nondual Absolute. The twelve-mantra Mandukya is honored as the whole of Vedanta in miniature.",
    tags: ["om", "mandukya", "nondual", "ॐ", "माण्डूक्य", "अद्वैत", "प्रणव", "famous"],
  },
  {
    id: "up-taittiriya-ananda",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Taittiriya Upanishad 2.1-2.6`,
    sectionHi: `${UH} · तैत्तिरीयोपनिषद् 2.1-2.6`,
    verse: "Taittiriya 2.1",
    sanskrit:
      "सत्यं ज्ञानमनन्तं ब्रह्म। यो वेद निहितं गुहायां परमे व्योमन्। सोऽश्नुते सर्वान्कामान्सह। ब्रह्मणा विपश्चितेति ॥",
    translit:
      "satyaṁ jñānam anantaṁ brahma — yo veda nihitaṁ guhāyāṁ parame vyoman, so 'śnute sarvān kāmān saha brahmaṇā vipaściteti",
    hindi:
      "सत्य, ज्ञान और अनंत — यही ब्रह्म है। जो हृदय-गुफा में, परम आकाश में निहित उसे जानता है, वह ब्रहम-सहित समस्त भोग्यों को भोगता है। पंच-कोश विद्या (अन्नमय से आनन्दमय) भी तैत्तिरीय की देन है।",
    english:
      "Truth, Knowledge, Infinity — that is Brahman; one who knows It, lodged in the cave of the heart in the supreme space, enjoys all desires together with Brahman. The Taittiriya also gifts the five-sheath teaching from the food-sheath to the bliss-sheath.",
    tags: ["satyam jnanam anantam", "brahman", "bliss", "सत्यं ज्ञानमनन्तं", "ब्रह्म", "पंच कोश", "आनन्दमय", "famous"],
  },
  {
    id: "up-shvet-eko",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Shvetashvatara Upanishad 3.2`,
    sectionHi: `${UH} · श्वेताश्वतरोपनिषद् 3.2`,
    verse: "Shvet 3.2",
    sanskrit:
      "एको हि रुद्रो न द्वितीयाय तस्थुर्य इमांल्लोकानीशत। ईशते च निष्कलङ्क ईशवेभिः समाहितो विश्वमवतिष्ठतो वासवः ॥",
    translit:
      "eko hi rudro na dvitīyāya tasthur ya imāṁl lokānīśata, īśate ca niṣkalaṅka īśavebhiḥ samāhito viśvam avatiṣṭhato vāsavaḥ",
    hindi:
      "वह एक ही रुद्र है, उनके समान दूसरा कोई नहीं; इन सब लोकों का शासक वही है। आयुधों में अग्रेसर बनकर, रक्षक बनकर वह समस्त विश्व में समाहित विराजमान है।",
    english:
      "Rudra is one, without a second; He rules all these worlds. Standing sentinel over all, weapon in hand, He pervades and protects the whole universe.",
    tags: ["rudra", "one", "shiva", "एको हि रुद्रो", "शिव", "एकत्व", "shaiva"],
  },
  {
    id: "up-prajnanam",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Aitareya Upanishad 3.3`,
    sectionHi: `${UH} · ऐतरेयोपनिषद् 3.3`,
    verse: "Aitareya 3.3",
    sanskrit:
      "प्रज्ञानं ब्रह्म।",
    translit:
      "prajñānaṁ brahma",
    hindi:
      "प्रज्ञान (चेतना, विज्ञान-रूप ज्ञान) ही ब्रह्म है — चार महावाक्यों में चौथा। जो सब देखता, सुनता और जानता है, साक्षी-चेतना वही परम तत्त्व है।",
    english:
      "Consciousness is Brahman — the fourth of the great sayings. That which sees, hears and knows all — the witness-consciousness — is the supreme Reality.",
    tags: ["prajnanam brahma", "mahavakya", "consciousness", "प्रज्ञानं ब्रह्म", "चेतना", "महावाक्य", "witness"],
  },
  {
    id: "up-kena-sumer",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Kena Upanishad 2.3-4`,
    sectionHi: `${UH} · केनोपनिषद् 2.3-4`,
    verse: "Kena 2.3",
    sanskrit:
      "अन्यदेव तद्वितु विजानाति यद्वितु न विजानाति। विज्ञातारमरेकेन विजानीयाः विज्ञातृं विज्ञातृं न विजानीयाः ॥",
    translit:
      "anyad eva tad vita vijānāti yad vitu na vijānāti, vijñātāram ara kena vijānīyāt — vijñātṛ taṁ vijñātṛṁ na vijānīyāt",
    hindi:
      "वह अन्य है जो जाना जाने वाला है; जो जानने वाला है वह वस्तु ही नहीं जाना जा सकता — जानने वाले को कौन जान सकता है? चेतना के पार का चेतन-तत्त्व।",
    english:
      "It is other than the known and beyond the unknown — the knower by whom all is known cannot itself be known as an object.",
    tags: ["kena", "knower", "beyond knowledge", "केन", "विज्ञाता", "ज्ञान से परे"],
  },
  {
    id: "up-purnamadah",
    kind: "mantra",
    bookId: "upanishads",
    section: `${U} · Isha Upanishad invocation`,
    sectionHi: `${UH} · ईशावास्योपनिषद् — शान्ति पाठ`,
    sanskrit:
      "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते। पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    translit:
      "oṁ pūrṇam adaḥ pūrṇam idaṁ pūrṇāt pūrṇam udacyate, pūrṇasya pūrṇam ādāya pūrṇam evāvaśiṣyate — oṁ śāntiḥ śान्तiḥ śāntiḥ",
    hindi:
      "ॐ वह पूर्ण है, यह पूर्ण है; पूर्ण से पूर्ण निकलता है और पूर्ण से पूर्ण लेने पर भी पूर्ण ही शेष रहता है। अद्वैत-गणित का सुंदरतम शान्ति-मंत्र।",
    english:
      "Om — That is full; this is full; from the full the full emerges; taking the full from the full, the full alone remains. The most beautiful peace-shanti mantra of nondual mathematics.",
    tags: ["purnamadah", "fullness", "peace", "पूर्णमदः", "शान्ति मंत्र", "पूर्ण", "famous", "invocation"],
  },
  {
    id: "up-sahanavavatu",
    kind: "mantra",
    bookId: "upanishads",
    section: `${U} · Study invocation (Krishna Yajurveda)`,
    sectionHi: `${UH} · अध्ययन-मंगल (कृष्ण यजुर्वेद परम्परा)`,
    sanskrit:
      "ॐ सह नाववतु। सह नौ भुनक्तु। सह वीर्यं करवावहै। तेजस्वि नावधीतमस्तु मा विद्विषावहै ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
    translit:
      "oṁ saha nā avatu, saha nau bhunaktu, saha vīryaṁ karavāvahai, tejasvi nau adhītam astu mā vidviṣāvahai — oṁ śāntiḥ śāntiḥ śāntiḥ",
    hindi:
      "हम दोनों की साथ-साथ रक्षा हो, साथ-साथ भोग हो, साथ-साथ पराक्रम करें; हमारा अध्ययन तेजस्वी हो, हम आपस में द्वेष न करें। गुरु-शिष्य संवाद की शाश्वत मंगलाचरण।",
    english:
      "May we both be protected together, may we both be nourished together, may we both work with vigor together; may our study be radiant, may we never quarrel. The timeless invocation between master and student.",
    tags: ["sahanavavatu", "together", "study", "सह नाववतु", "गुरु शिष्य", "अध्ययन", "famous", "invocation"],
  },
];
