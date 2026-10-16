import type { CorpusEntry } from "./types";

const R = "Valmiki Ramayana";
const RH = "वाल्मीकि रामायण";

/** Ramayana — key shlokas, stories and teachings. */
export const RAMAYANA_ENTRIES: CorpusEntry[] = [
  {
    id: "ram-1-1-1",
    kind: "verse",
    bookId: "ramayana",
    section: `${R} · Bala Kanda 1.1`,
    sectionHi: `${RH} · बाल काण्ड 1.1`,
    chapter: "1",
    verse: "1.1.1",
    sanskrit:
      "तपःस्वाध्यायनिरतं तपस्वी वाक्विदां वरम्। नारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम् ॥",
    translit:
      "tapaḥ svādhyāya-nirataṁ tapasvī vāk-vidāṁ varam, nāradaṁ paripapracchha vālmīkir muni-puṅgavam",
    hindi:
      "तप और स्वाध्याय में तत्पर वचन-विद्या में श्रेष्ठ नारद मुनि से वाल्मीकि मुनि ने पूछा — इसी श्लोक से विश्व का पहला महाकाव्य आरम्भ होता है।",
    english:
      "The sage Valmiki, versed in penance and self-study, questioned Narada, best of eloquent sages — with this verse the world's first epic begins.",
    tags: ["valmiki", "narada", "first shloka", "origin", "वाल्मीकि", "नारद", "प्रथम श्लोक", "आदि काव्य"],
  },
  {
    id: "ram-krauncha",
    kind: "verse",
    bookId: "ramayana",
    section: `${R} · Bala Kanda 2 — the first shloka ever composed`,
    sectionHi: `${RH} · बाल काण्ड 2 — विश्व का प्रथम श्लोक`,
    chapter: "1",
    verse: "1.2.14",
    sanskrit:
      "मा निषाद प्रतिष्ठां त्वमगमः शाश्वतीः समाः। यत्क्रौञ्चमिथुनादेकमवधीः काममोहितम् ॥",
    translit:
      "mā niṣāda pratiṣṭhāṁ tvam agamaḥ śāśvatīḥ samāḥ, yat krauñca-mithunād ekam avadhīḥ kāma-mohitam",
    hindi:
      "हे निषाद! तू अनंत काल तक प्रतिष्ठा न पाएगा, क्योंकि तूने काम में मोहित क्रौंच-पक्षी के जोड़े का एक पक्षी मार डाला। शोक-क्रोध से वाल्मीकि के मुख से निकला यही संसार का प्रथम श्लोक बना — श्लोक का जन्म यहीं हुआ।",
    english:
      "O hunter, may you never find rest for endless years, for you slew one of the pair of krauncha birds absorbed in love. Uttered by Valmiki in grief-fueled compassion, this curse became the first shloka ever composed — the birth of poetry itself.",
    tags: ["first shloka", "krauncha bird", "valmiki", "origin of poetry", "प्रथम श्लोक", "क्रौंच", "वाल्मीकि शोक", "भाषा जन्म"],
  },
  {
    id: "ram-rama-mahima",
    kind: "verse",
    bookId: "ramayana",
    section: `${R} · Yuddha Kanda — Rama's glory`,
    sectionHi: `${RH} · युद्ध काण्ड — राम महिमा`,
    chapter: "6",
    sanskrit:
      "रामाय रामभद्राय रामचन्द्राय वेधसे। रघुनाथाय नाथाय सीतायाः पतये नमः ॥",
    translit:
      "rāmāya rāma-bhadrāya rāma-candrāya vedhase, raghu-nāthāya nāthāya sītāyāḥ pataye namaḥ",
    hindi:
      "राम को, रामभद्र को, रामचन्द्र को, वेधसे (सृष्टा रूप को), रघुनाथ को, स्वामी नाथ को और सीता के पति को नमस्कार। राम-नाम की चारों संज्ञाओं का अद्भुत समावेश है।",
    english:
      "Salutations to Rama, the auspicious one, Rama the moon-faced, the creator, lord of the Raghu clan, the lord of lords, and the husband of Sita — a compact treasury of Rama's names.",
    tags: ["rama", "r nama", "shloka", "राम नाम", "रामचन्द्र", "रघुनाथ", "सीतापति", "namaskara"],
  },
  {
    id: "ram-final",
    kind: "verse",
    bookId: "ramayana",
    section: `${R} · Uttara Kanda — final verse`,
    sectionHi: `${RH} · उत्तर काण्ड — अंतिम श्लोक`,
    chapter: "7",
    sanskrit:
      "यावत् स्थास्यन्ति गिरयः सरितश्च महीतले। तावद्रामायणकथा लोकेषु प्रचरिष्यति ॥",
    translit:
      "yāvat sthāsyanti girayaḥ saritaś ca mahī-tale, tāvad rāmāyaṇa-kathā lokeṣu pracariṣyati",
    hindi:
      "जब तक पृथ्वी पर पर्वत खड़े रहेंगे और नदियाँ बहती रहेंगी, तब तक लोकों में रामायण की कथा प्रचलित रहेगी।",
    english:
      "As long as mountains stand and rivers flow on this earth, so long the story of the Ramayana shall live among the worlds.",
    tags: ["ramayana eternal", "final verse", "अमर कथा", "पर्वत", "नदी", "रामायण कथा", "eternity"],
  },
  {
    id: "ram-dharma-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Ayodhya Kanda`,
    sectionHi: `${RH} · अयोध्या काण्ड`,
    title: "Rama's Exile — Word as Bond",
    titleHi: "राम का वनवास — वचन की प्रतिष्ठा",
    hindi:
      "राज्य के दिवस में ही कैकेयी के दो वरदानों ने चौदह वर्ष का वनवास माँग लिया। श्रीराम ने मुस्कुराकर कहा — 'पिता का वचन मेरे लिए वेद से बढ़कर है।' स्वयं सीता ने भी प्रस्थान किया — 'पत्नी का धर्म पति के साथ है', और लक्ष्मण ने पग-पग पर निरंतरता दी। भरत ने वन से पादुकाएँ लाकर सिंहासन पर रखीं और चौदह वर्ष नगर से बाहर निवास कर राम के नाम से राज किया। रामायण 'वचन के लिए त्याग' और 'मर्यादा' का विश्व-महाकाव्य है।",
    english:
      "In the very hour of coronation, Kaikeyi's two boons demanded fourteen years of exile. Rama smiled and said: 'A father's word stands above the Vedas themselves for me.' Sita insisted on accompanying him — 'the wife's dharma is where her husband is' — and Lakshmana followed every step. Bharata brought back Rama's wooden sandals, set them on the throne, and ruled outside the city in Rama's name. The Ramayana is the world's epic of sacrifice for one's word and of maryada — sacred boundary and decorum.",
    tags: ["rama", "exile", "word", "bharata", "kaikeyi", "वनवास", "वचन", "मर्यादा", "भरत", "पादुका", "exile", "sita", "lakshmana"],
  },
  {
    id: "ram-hanuman-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Sundara Kanda`,
    sectionHi: `${RH} · सुन्दर काण्ड`,
    title: "Hanuman's Leap of Devotion",
    titleHi: "हनुमान का भक्ति-प्रस्थान",
    hindi:
      "सागर के सामने खड़े हनुमान ने राम के नाम का स्मरण किया और एक छलाँग में सौ योजन समुद्र लाँघ डाला। लंका में मैथिली विदेहिनी सीता को अशोक वाटिका में खोजा, राम की मुद्रिका दिखाकर असीम विश्वास दिलाया, अक्ष-कुमार को वध किया और अपनी पूँछ से लंका जलाई। वापसी पर कहा — 'देख लिया सीता माता को!' श्रीराम ने उन्हें आलिंगन कर कहा — 'तुम मुझे भरत के समान प्रिय हो।' हनुमान की भक्ति यही सिखाती है — शक्ति भक्ति से जन्म लेती है।",
    english:
      "Before the boundless ocean Hanuman remembered Rama's name and leaped a hundred yojanas in a single bound. In Lanka he found Mother Sita in the Ashoka grove, showed her Rama's ring to restore her faith, slew the warrior Aksha, and set Lanka ablaze with his burning tail. Returning, he uttered the dearest of words: 'I have seen Janaki!' Rama embraced him: 'You are as dear to me as Bharata.' Hanuman's devotion teaches that power is born of love — where there is shraddha, there is shakti.",
    tags: ["hanuman", "devotion", "ocean leap", "sundara kanda", "हनुमान", "सीता", "लंका", "भक्ति", "छलाँग", "मुद्रिका"],
  },
  {
    id: "ram-shabari-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Aranya Kanda`,
    sectionHi: `${RH} · अरण्य काण्ड`,
    title: "Shabari's Berries — Love over Perfection",
    titleHi: "शबरी के बेर — भाव सर्वोपरि",
    hindi:
      "पंपा सरोवर के पास शबरी नाम की बूढ़ी भीलनी वर्षों से राम की प्रतीक्षा में जुटी थी। जब राम आए, उन्होंने पहले खुद चखकर मीठे बेर रख दिए — 'भगवान् को कड़वा तो न लग जाए!' राम ने उन बेरों को प्रेम से ग्रहण किया और कहा — नदी कितनी भी स्वच्छ हो, प्यासा कुएँ खोदता है; भक्ति में बाहरी योग्यता नहीं, भाव देखा जाता है।",
    english:
      "By Lake Pampa the aged tribal woman Shabari had waited for years with gathered berries for Rama's arrival. When He came, she had first tasted each berry to keep only the sweet ones for the Lord — 'what if the Lord finds one bitter!' Rama accepted those fruits with relish, teaching that devotion is measured not by ritual worthiness but by the love within.",
    tags: ["shabari", "berries", "bhakti", "love", "शबरी", "बेर", "भक्ति", "प्रेम", "राम", "pampa"],
  },
  {
    id: "ram-jatayu-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Aranya Kanda`,
    sectionHi: `${RH} · अरण्य काण्ड`,
    title: "Jatayu's Sacrifice",
    titleHi: "जटायु का बलिदान",
    hindi:
      "रावण सीता को हरण कर ऊपर उड़ रहा था, तब वृद्ध गृधराज जटायु ने डटकर सामना किया — 'राम-लक्ष्मण की सेवा का यही अवसर है।' अपनी नाचीज़ क्षमता से महाबली रावण के साथ युद्ध करते हुए कटी पंखों के बीच गिर पड़ा, किंतु राम को रावण की दिशा बताकर कार्य सिद्ध किया। राम ने उस पक्षी के लिये अपने हाथों से अग्नि-संस्कार किया — सेवा की सार्थकता वृद्धावस्था या शक्ति से नहीं, श्रद्धा से होती है।",
    english:
      "As Ravana flew away with Sita, the aged vulture-king Jatayu barred his path — 'This body is worth offering in Rama's service.' He fought the mighty rakshasa until his wings were severed, falling to earth, yet fulfilled his purpose by revealing Ravana's direction to Rama. Rama himself performed the funerary rites for the bird: service is measured by shraddha, not by strength or age.",
    tags: ["jatayu", "sacrifice", "ravana", "सीता हरण", "जटायु", "बलिदान", "रावण", "सेवा"],
  },
  {
    id: "ram-rajya-concept",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Yuddha Kanda — Rama Rajya`,
    sectionHi: `${RH} · युद्ध काण्ड — रामराज्य`,
    title: "Rama Rajya — The Ideal State",
    titleHi: "रामराज्य — आदर्श राज्य",
    hindi:
      "चौदह वर्ष बाद अयोध्या में श्रीराम का राज्याभिषेक हुआ। रामराज्य में न कोई शोकग्रस्त था, न अभावग्रस्त; वन-फल अमृत-सम थे, सब धर्म-परायण थे; चोर-लुटेरे दूर थे, वृद्ध अनाथों के रक्षक थे; स्त्रियाँ पति-परायण, पुत्र माता-पिता के आज्ञाकारी थे। 'रामराज्य' आज भी आदर्श शासन का पर्याय है — न्याय, समता, सुख और धर्म का प्रतीक।",
    english:
      "After fourteen years, Rama's coronation in Ayodhya ushered in Rama Rajya — no one grieved, none lacked; forest fruits were sweet as nectar; all turned to dharma; thieves vanished; the old and orphaned were protected; women and children lived unafraid. Even today 'Rama Rajya' is the Indian ideal of governance — the very synonym for justice, equality, prosperity and righteousness.",
    tags: ["rama rajya", "ideal state", "governance", "रामराज्य", "आदर्श", "न्याय", "शासन", "अयोध्या", "coronation"],
  },
  {
    id: "ram-raksha-stotra",
    kind: "stotra",
    bookId: "ramayana",
    section: "Ram Raksha Stotra",
    sectionHi: "राम रक्षा स्तोत्र",
    sanskrit:
      "श्रीराम राम रामेति रमे रामे मनोरमे। सहस्रनाम तत्तुल्यं रामनाम वरानने ॥",
    translit:
      "śrī rāma rāma rāmeti rame rāme manorame, sahasra-nāma tat-tulyaṁ rāma-nāma varānane",
    hindi:
      "हे सुमुखी! 'राम' नाम का तीन बार उच्चारण समस्त सहस्रनाम-पाठ के समान फल देता है — यह राम-रक्षा स्तोत्र का प्रसिद्ध वचन है। बुध कौशिक ऋषि द्वारा रचित इस स्तोत्र में राम-नाम की रक्षा-शक्ति का वर्णन है।",
    english:
      "O beautiful-faced one — the name of Rama, thrice repeated, equals the recitation of His thousand names: the celebrated verse of the Ram Raksha Stotra composed by Budha Kaushika, on the protective power of Rama's name.",
    tags: ["rama raksha", "protection", "stotra", "राम रक्षा", "राम नाम", "सहस्रनाम", "रक्षा", "protection mantra"],
  },
];
