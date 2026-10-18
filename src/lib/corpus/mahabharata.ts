import type { CorpusEntry } from "./types";

const M = "Mahabharata";
const MH = "महाभारत";

/** Mahabharata — invocation, famous quotes, Yaksha Prashna, teachings. */
export const MAHABHARATA_ENTRIES: CorpusEntry[] = [
  {
    id: "mbh-invocation",
    kind: "verse",
    bookId: "mahabharata",
    section: `${M} · Traditional invocation`,
    sectionHi: `${MH} · पारंपरिक मंगलाचरण`,
    sanskrit:
      "नारायणं नमस्कृत्य नरं चैव नरोत्तमम्। देवीं सरस्वतीं व्यासं ततो जयमुदीरयेत् ॥",
    translit:
      "nārāyaṇaṁ namaskṛtya naraṁ caiva narottamam, devīṁ sarasvatīṁ vyāsaṁ tato jayam udīrayet",
    hindi:
      "नारायण को नमस्कार कर, नर और श्रेष्ठ नर (अर्जुन) को तथा देवी सरस्वती और व्यास देव को प्रणाम करके जय (महाभारत) का उच्चारण करना चाहिए — महाभारत का मंगलाचरण।",
    english:
      "Having bowed to Narayana, to Nara and the foremost of men, to the goddess Saraswati and to Vyasa, one should recite the Jaya — the traditional invocation of the Mahabharata.",
    spanish:
      "Habiéndose postrado ante Narayana, ante Nara y el más excelso de los hombres, ante la diosa Saraswati y ante Vyasa, debe uno recitar el Jaya — la invocación tradicional del Mahabharata.",
    tags: ["narayana", "saraswati", "vyasa", "invocation", "मंगलाचरण", "नारायण", "व्यास", "जय", "invocation"],
  },
  {
    id: "mbh-yaksha-ashcharya",
    kind: "verse",
    bookId: "mahabharata",
    section: `${M} · Vana Parva — Yaksha Prashna`,
    sectionHi: `${MH} · वन पर्व — यक्ष-प्रश्न`,
    chapter: "3",
    verse: "313.116",
    sanskrit:
      "अहन्यहनि भूतानि गच्छन्ति यमालयम्। शेषाः स्थावरमिच्छन्ति किमाश्चर्यमतः परम् ॥",
    translit:
      "ahany ahani bhūtāni gacchanti yamālayam, śeṣāḥ sthāvaram icchanti kim āścaryam ataḥ param",
    hindi:
      "यक्ष ने पूछा — संसार में सबसे बड़ा आश्चर्य क्या है? युधिष्ठिर ने उत्तर दिया — दिन-प्रतिदिन प्राणी यम के घर (मृत्यु की ओर) जा रहे हैं, फिर भी जीवित लोग अमर होने की कामना से स्थिर रहना चाहते हैं — इससे बढ़कर आश्चर्य क्या होगा? यह मृत्यु-दर्शन का विलक्षण सूत्र है।",
    english:
      "The Yaksha asked: What is the greatest wonder in the world? Yudhishthira answered: Day after day creatures depart to the abode of Yama, yet those who remain wish to live forever — what can be more wonderful than this? The most celebrated answer on the blindness of mortals to death.",
    spanish:
      "El Yaksha preguntó: ¿Cuál es el mayor asombro del mundo? Yudhishthira respondió: Día tras día las criaturas parten hacia la morada de Yama, y sin embargo quienes permanecen desean vivir para siempre — ¿qué puede haber más asombroso que esto? La respuesta más celebrada sobre la ceguera de los mortales ante la muerte.",
    tags: ["yaksha", "yudhishthira", "wonder", "death", "यक्ष प्रश्न", "युधिष्ठिर", "आश्चर्य", "मृत्यु", "wonder"],
  },
  {
    id: "mbh-yaksha-dharma",
    kind: "verse",
    bookId: "mahabharata",
    section: `${M} · Vana Parva — Yaksha Prashna`,
    sectionHi: `${MH} · वन पर्व — यक्ष-प्रश्न`,
    chapter: "3",
    sanskrit:
      "दण्डो धर्मः समो लोके दण्डाद् धर्मः प्रवर्तते। दण्डे धर्मं समास्थाय देवा दानवमानवाः ॥",
    translit:
      "daṇḍo dharmaḥ samo loke daṇḍād dharmaḥ pravartate, daṇḍe dharmaṁ samāsthāya devā dānava-mānavāḥ",
    hindi:
      "यक्ष ने पूछा — धर्म का आश्रय क्या है? युधिष्ठिर ने कहा — संसार में दण्ड (न्याय-शासन) ही धर्म का सम-भाव वाला आधार है; दण्ड से ही धर्म चलता है, दण्ड को धर्म का आश्रय बनाकर देव, दानव और मनुष्य टिके हैं। न्यायपालना ही व्यवस्था का मूल सूत्र है।",
    english:
      "Asked what upholds dharma, Yudhishthira answered: Justice (danda) — equal for all — is the very home of dharma; by justice dharma functions, and leaning on it do gods, demons and humans stand. Righteous enforcement is the root of order.",
    spanish:
      "Preguntado qué sostiene al dharma, Yudhishthira respondió: la justicia (danda) — igual para todos — es la mismísima morada del dharma; por la justicia funciona el dharma, y apoyados en ella se sostienen dioses, demonios y humanos. La aplicación recta de la justicia es la raíz del orden.",
    tags: ["yaksha", "dharma", "justice", "यक्ष", "धर्म", "दण्ड", "न्याय", "justice"],
  },
  {
    id: "mbh-vidura-niti",
    kind: "quote",
    bookId: "mahabharata",
    section: `${M} · Shanti/Udyoga Parva — Vidura Niti`,
    sectionHi: `${MH} · शान्ति/उद्योग पर्व — विदुर-नीति`,
    title: "Vidura's Counsel on the Foolish and the Wise",
    titleHi: "विदुर-नीति — मूर्ख और पंडित के लक्षण",
    hindi:
      "विदुर ने धृतराष्ट्र से कहा — जो पहले निश्चय न करके पीछे पछताता है, जो सुयोग्य समय पर उपाय नहीं अपनाता, जो क्रोध में काम सिद्ध करने लगता है — वह मूर्ख है। सबके साथ अभेद-भाव रखने वाला, राग-द्वेष से परे सत्य बोलने वाला और पराई स्त्री में निष्काम दृष्टि रखने वाला पंडित है। विदुर-नीति राजनीति, सदाचरण और जीवन-नीति का अमूल्य ग्रंथ है।",
    english:
      "Vidura told Dhritarashtra: He who decides without deliberation and repents afterwards, who misses the fitting hour for action, and who acts out of blind passion — such a one is a fool. The wise are equal in vision to all beings, truthful beyond liking and disliking, and look upon another's wife as a mother. Vidura Niti remains an immortal manual of statecraft, ethics and daily conduct.",
    spanish:
      "Vidura dijo a Dhritarashtra: quien decide sin deliberar y después se arrepiente, quien deja pasar la hora oportuna de actuar y quien actúa movido por pasión ciega, ese es un necio. Los sabios miran con igualdad de visión a todos los seres, dicen la verdad por encima del agrado y el desagrado, y ven en la esposa ajena a una madre. La Vidura Niti sigue siendo un manual inmortal de arte de gobernar, ética y conducta cotidiana.",
    tags: ["vidura", "niti", "ethics", "counsel", "विदुर नीति", "धृतराष्ट्र", "मूर्ख", "पंडित", "राजनीति", "ethics"],
  },
  {
    id: "mbh-vasudhaiva",
    kind: "verse",
    bookId: "mahabharata",
    section: `${M} · (also Maha Upanishad 6.71) — Hitopadesha lineage`,
    sectionHi: `${MH} · (महोपनिषद् 6.71 सहित) — हितोपदेश परम्परा`,
    sanskrit:
      "अयं निजः परो वेति गणना लघुचेतसाम्। उदारचरितानां तु वसुधैव कुटुम्बकम् ॥",
    translit:
      "ayaṁ nijaḥ para iti gaṇanā laghu-cetasām, udāra-caritānāṁ tu vasudhaiva kuṭumbakam",
    hindi:
      "'यह अपना है, यह पराया है' — यह संकीर्ण मन की गणना है; उदार हृदय वालों के लिए तो समस्त पृथ्वी ही परिवार है। संकीर्णता और उदारता का यह अमर वचन महाभारत-परम्परा और महोपनिषद् में विराजमान है।",
    english:
      "'This one is mine, that one is a stranger' — so count the small-minded; for the noble-hearted, the whole earth is one family. This deathless line on narrowness versus magnanimity shines in the Mahabharata tradition and the Maha Upanishad.",
    spanish:
      "'Este es mío, aquel es un extraño' — así cuentan los de mente pequeña; para los de corazón noble, la tierra entera es una sola familia. Esta línea inmortal sobre la estrechez frente a la magnanimidad resplandece en la tradición del Mahabharata y en el Maha Upanishad.",
    tags: ["vasudhaiva kutumbakam", "world family", "unity", "वसुधैव कुटुम्बकम्", "विश्व परिवार", "उदार", "एकता", "world family", "famous"],
  },
  {
    id: "mbh-gita-context",
    kind: "story",
    bookId: "mahabharata",
    section: `${M} · Bhishma Parva`,
    sectionHi: `${MH} · भीष्म पर्व`,
    title: "The Setting of the Bhagavad Gita",
    titleHi: "भगवद्गीता का युद्ध-प्रसंग",
    hindi:
      "दो सेनाएँ सामने थीं — एक ओर गांधार की शंखनाद करती विशाल कौरव सेना, दूसरी ओर पांडवों का श्रीकृष्ण-दिव्य नेतृत्व। अर्जुन ने रथ से शत्रु-पंक्तियाँ देखने की इच्छा प्रकट की, किंतु स्वजनों — भीष्म, द्रोण, कृप — के सामने उसका धनुष हाथ से रुक गया। वहीं दो रथों के बीच से विश्व का सबसे गहरा संवाद उठा — श्रीकृष्ण और अर्जुन की गीता, जो 700 श्लोकों में जीवन का सम्पूर्ण उत्तर बन गई।",
    english:
      "Two armies faced each other — the vast Kaurava host roaring with conches, and the Pandavas led by the divine Krishna. Arjuna asked to survey the enemy lines, but beholding his own elders — Bhishma, Drona, Kripa — his bow slipped from his hand. Between two chariots then rose the deepest dialogue ever spoken — the Gita of Krishna and Arjuna, 700 verses that became the complete answer to life itself.",
    spanish:
      "Dos ejércitos se encaraban — la ingente hueste kaurava que retumbaba con sus caracolas, y los Pandavas conducidos por el divino Krishna. Arjuna pidió recorrer con la mirada las líneas enemigas, pero al contemplar a sus propios mayores — Bhishma, Drona, Kripa — el arco se le escapó de las manos. Entre dos carros se alzó entonces el diálogo más hondo jamás pronunciado — la Gita de Krishna y Arjuna, 700 versos que se convirtieron en la respuesta completa a la vida misma.",
    tags: ["gita context", "arjuna", "krishna", "conches", "गीता प्रसंग", "अर्जुन", "कृष्ण", "भीष्म", "द्रोण", "setting"],
  },
  {
    id: "mbh-karna-story",
    kind: "story",
    bookId: "mahabharata",
    section: `${M} · Karna's tragedy`,
    sectionHi: `${MH} · कर्ण की त्रासदी`,
    title: "Karna — Loyalty over Blood",
    titleHi: "कर्ण — रक्त से बड़ी निष्ठा",
    hindi:
      "कुंती के कर्ण में जन्मे सूर्यपुत्र को झूठा ब्राह्मण बनकर परशुराम से शिक्षा लेनी पड़ी; 'सूत-पुत्र' कहकर उपहास सहना पड़ा; द्रौपदी-स्वयंवर में अयोग्य कहा गया। दुर्योधन ने जब अंग देकर राज्य दिया, जीवन-भर उसी का ऋण चुकाने का व्रत लिया। युद्ध से पूर्व कुंती ने सच बताकर पांडवों में शामिल होने को कहा — कर्ण ने इनकार किया: 'माँ, मैं स्वधर्म से भटकूँगा नहीं; पर तेरे पुत्रों में अर्जुन को छोड़ बाकी सब जीवित रहेंगे।' दानवीर कर्ण युद्ध के दिन भी अपना कवच-कुंडल इंद्र को दान कर गया — भले शत्रु जीते, निष्ठा न हारती।",
    english:
      "Born of Kunti and Surya, Karna bore a lifetime of rejection — trained under Parashurama by a falsehood, mocked as a charioteer's son, refused at Draupadi's swayamvara. When Duryodhana gave him the kingdom of Anga, Karna vowed lifelong loyalty to him. On the eve of war Kunti revealed his birth and begged him to join the Pandavas — he refused: 'Mother, I will not betray my dharma; but of your sons, all but Arjuna shall live.' On the battlefield he gave away his armor and earrings to Indra himself — the daanveera who would lose everything but his integrity.",
    spanish:
      "Nacido de Kunti y Surya, Karna cargó toda una vida de rechazos — formado bajo Parashurama mediante una falsedad, escarnecido como hijo de un auriga, rechazado en el swayamvara de Draupadi. Cuando Duryodhana le dio el reino de Anga, Karna le juró lealtad de por vida. En vísperas de la guerra Kunti le reveló su nacimiento y le rogó que se uniera a los Pandavas — él se negó: 'Madre, no traicionaré mi dharma; pero de tus hijos, todos menos Arjuna seguirán con vida.' En el campo de batalla regaló su armadura y sus pendientes al propio Indra — el daanveera que lo perdería todo menos su integridad.",
    tags: ["karna", "loyalty", "danveera", "kunti", "कर्ण", "दानवीर", "निष्ठा", "कुंती", "सूर्यपुत्र", "tragedy"],
  },
  {
    id: "mbh-draupadi-story",
    kind: "story",
    bookId: "mahabharata",
    section: `${M} · Sabha Parva — Dice & Divine Grace`,
    sectionHi: `${MH} · सभा पर्व — द्यूत और दिव्य कृपा`,
    title: "Draupadi in the Assembly — 'Krishna, I have no one but You'",
    titleHi: "सभा में द्रौपदी — 'कृष्ण! तुम सिवा मेरा कोई नहीं'",
    hindi:
      "द्यूत-क्रीड़ा में युधिष्ठिर ने स्वयं को, भाइयों को और अंत में द्रौपदी को भी हार दिया। दुःशासन सभा में उसकी साड़ी खींचने लगा। राजा-लोक मौन था, भीष्म भी उत्तर से बचा। तब द्रौपदी ने दिव्य आसक्ति छोड़ हाथ जोड़ लिए — 'गोविंद! तुम सिवा मेरा कोई नहीं।' उसी क्षण द्रौपदी की साड़ी अनंत हो गई — दुःशासन थक गया, लज्जा नहीं हारती। श्रीकृष्ण का उद्धार-स्मरण भक्ति-साहित्य का अटल स्तम्भ बन गया।",
    english:
      "In the game of dice Yudhishthira staked and lost himself, his brothers, and at last Draupadi. Dushasana began dragging her sari before the assembly; kings kept silence, even Bhishma evaded. Then Draupadi let go of every human support and folded her hands — 'Govinda, I have no one but You.' In that instant her sari became endless: Dushasana collapsed exhausted, but honor did not fall. Krishna's rescue became an immortal pillar of bhakti literature — complete surrender draws divine grace.",
    spanish:
      "En el juego de dados Yudhishthira apostó y perdió su propia persona, a sus hermanos y, al final, a Draupadi. Dushasana empezó a arrastrar su sari delante de la asamblea; los reyes guardaron silencio, y hasta Bhishma eludió. Entonces Draupadi soltó todo sostén humano y juntó las manos — 'Govinda, no tengo a nadie sino a Ti.' En ese instante su sari se volvió sin fin: Dushasana se desplomó agotado, pero el honor no cayó. El rescate de Krishna se convirtió en pilar inmortal de la literatura de bhakti — la entrega completa atrae la gracia divina.",
    tags: ["draupadi", "vastraharan", "krishna grace", "surrender", "द्रौपदी", "वस्त्रहरण", "कृष्ण कृपा", "शरणागति", "द्यूत", "dice"],
  },
  {
    id: "mbh-bhishma-story",
    kind: "story",
    bookId: "mahabharata",
    section: `${M} · Bhishma's vow & Shanti Parva`,
    sectionHi: `${MH} · भीष्म प्रतिज्ञा और शान्ति पर्व`,
    title: "Bhishma — The Vow that Outlived an Age",
    titleHi: "भीष्म — युग तक जीवित रही प्रतिज्ञा",
    hindi:
      "पिता शांतनु के प्रेम हेतु देवव्रत ने आजीवन ब्रह्मचर्य का प्रण लिया — इसी से वे 'भीष्म' (भीषण व्रत करने वाले) कहलाए। वरदान-स्वरूप उन्हें स्वेच्छा-मृत्यु का अधिकार मिला। शर-शय्या पर 58 दिन उन्होंने युधिष्ठिर को राजधर्म, दान-धर्म और मोक्ष-धर्म सिखाया। अपने संकल्प के अतिक्रमण की वेदना झेलते भी शास्त्र-सत्य को अंत तक अखंड रखा — भीष्म संकल्प-शक्ति का दिव्य और दुखद प्रतीक हैं।",
    english:
      "For the sake of his father Shantanu's love, Devavrata took the vow of lifelong celibacy — earning the very name Bhishma, 'the terrible-vowed' — and the boon of death at will. For fifty-eight days on his bed of arrows he taught Yudhishthira the duties of kings, charity and liberation. He bore the anguish of his own resolution yet kept the truth of the shastras intact to his last breath — Bhishma remains the awesome and tragic emblem of the power of a vow.",
    spanish:
      "Por el amor de su padre Shantanu, Devavrata asumió el voto de celibato de por vida — ganándose el mismísimo nombre de Bhishma, 'el de terrible voto' — y la gracia de morir a voluntad. Durante cincuenta y ocho días, sobre su lecho de flechas, enseñó a Yudhishthira los deberes de los reyes, la caridad y la liberación. Soportó la angustia de su propia resolución y mantuvo intacta la verdad de los shastras hasta su último aliento — Bhishma sigue siendo el emblema, imponente y trágico, del poder de un voto.",
    tags: ["bhishma", "vow", "bhishma pratigna", "शर-शय्या", "भीष्म प्रतिज्ञा", "शांतनु", "गंगा पुत्र", "राजधर्म", "vow", "arrows"],
  },
  {
    id: "mbh-draupadi-vai",
    kind: "verse",
    bookId: "mahabharata",
    section: `${M} · Vana Parva — Krishna's words`,
    sectionHi: `${MH} · वन पर्व — कृष्ण-वचन`,
    sanskrit:
      "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ॥",
    translit:
      "na hi jñānena sadṛśaṁ pavitram iha vidyate, tat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati",
    hindi:
      "इस जगत् में ज्ञान के समान पवित्र कोई दूसरा तत्त्व नहीं; योग-सिद्ध पुरुष को वह ज्ञान यथासमय आत्मा में ही प्रकट होता है। (गीता 4.38 के समान भाव वाला महाभारत-वचन)",
    english:
      "Nothing in this world is as purifying as knowledge; one perfected in yoga discovers it in the Self in due time. (A Mahabharata verse echoing the Gita's declaration.)",
    spanish:
      "Nada hay en este mundo tan purificante como el conocimiento; quien está perfeccionado en el yoga lo descubre en el Ser a su debido tiempo. (Un verso del Mahabharata que hace eco a la declaración de la Gita.)",
    tags: ["knowledge", "purity", "jnana", "ज्ञान", "पवित्र", "योग सिद्ध", "purification"],
  },
  {
    id: "mbh-vidura-kaka",
    kind: "quote",
    bookId: "mahabharata",
    section: `${M} · Vidura Niti — the crow and the fruit`,
    sectionHi: `${MH} · विदुर नीति — काक और फल`,
    title: "The Crow's Lesson — Drop the Attachment",
    titleHi: "काक की सीख — आसक्ति का त्याग",
    hindi:
      "विदुर बोले — जैसे एक कौआ गिरे हुए फल के लिये वृक्ष से उतरा, पर उस फल में ग्रसित विषाल सर्प को देखकर हड़बड़ा कर फल छोड़ उड़ गया — त्याग ने उसे विनाश से बचा लिया। वैसे ही जो पुरुष देखता है कि विषय के फल में काल सर्प लिपटा है, वह त्याग करके सुखी होता है।",
    english:
      "Vidura said: A crow swooped from its tree for a fallen fruit, but seeing a great serpent coiled within it, dropped the fruit at once and flew to safety — renunciation saved him. Likewise the wise, perceiving the serpent of time coiled in the fruits of sense-pleasure, abandon them and live in peace.",
    spanish:
      "Dijo Vidura: un cuervo se lanzó desde su árbol por un fruto caído, pero al ver una gran serpiente enroscada dentro de él, soltó al instante el fruto y voló a salvo — el desapego lo salvó. Igual los sabios, que perciben la serpiente del tiempo enroscada en los frutos del placer de los sentidos, los abandonan y viven en paz.",
    tags: ["vidura", "crow", "renunciation", "त्याग", "कौआ", "विष", "आसक्ति", "detachment", "parable"],
  },
];
