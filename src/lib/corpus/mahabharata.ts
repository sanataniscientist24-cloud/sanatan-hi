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
  {
    id: "mbh-yaksha-path",
    kind: "verse",
    bookId: "mahabharata",
    section: `${M} · Vana Parva — Yaksha Prashna`,
    sectionHi: `${MH} · वन पर्व — यक्ष-प्रश्न`,
    chapter: "3",
    verse: "313.117",
    sanskrit:
      "तर्कोऽप्रतिष्ठः श्रुतयो विभिन्ना नैको ऋषिर्यस्य मतं प्रमाणम्। धर्मस्य तत्त्वं निहितं गुहायां महाजनो येन गतः स पन्थाः ॥",
    translit:
      "tarko 'pratiṣṭhaḥ śrutayo vibhinnā naiko ṛṣir yasya mataṁ pramāṇam, dharmasya tattvaṁ nihitaṁ guhāyāṁ mahājano yena gataḥ sa panthāḥ",
    hindi:
      "यक्ष ने पूछा — धर्म का पन्था (मार्ग) कौन-सा है? युधिष्ठिर ने उत्तर दिया — तर्क की कोई स्थिर नींव नहीं, श्रुतियाँ भिन्न-भिन्न मत रखती हैं, किसी एक ऋषि का मत भी अंतिम प्रमाण नहीं; धर्म का तत्त्व गुप्त गुहा में निहित है — जिस पन्था से महाजन (महापुरुष) गए हैं, वही पन्था है। यह सूत्र बताता है: शास्त्र-वाद से बढ़कर सिद्ध पुरुषों का आचरण ही धर्म का जीवित प्रमाण है।",
    english:
      "The Yaksha asked: What is the path? Yudhishthira answered: Logic has no sure foundation, the revealed texts differ, and no single seer's word is the final authority; the essence of dharma lies hidden in a cave — the path is that which the great ones have trodden. The verse teaches that the conduct of the great is dharma's living proof, beyond all argument.",
    spanish:
      "El Yaksha preguntó: ¿Cuál es el camino? Yudhishthira respondió: la lógica no tiene fundamento firme, los textos revelados difieren y la palabra de ningún vidente aislado es la autoridad final; la esencia del dharma yace oculta en una caverna — el camino es aquel que los grandes han recorrido. El verso enseña que la conducta de los grandes es la prueba viviente del dharma, más allá de todo argumento.",
    tags: ["yaksha", "path", "mahajana", "dharma", "यक्ष प्रश्न", "पन्था", "महाजन", "तर्क", "श्रुति", "great souls"],
  },
  {
    id: "mbh-yaksha-mother",
    kind: "quote",
    bookId: "mahabharata",
    section: `${M} · Vana Parva — Yaksha Prashna`,
    sectionHi: `${MH} · वन पर्व — यक्ष-प्रश्न`,
    title: "Weightier than the Earth — the Mother",
    titleHi: "पृथ्वी से भारी — माता",
    hindi:
      "यक्ष ने पूछा — पृथ्वी से अधिक भारी क्या है? युधिष्ठिर बोले — माता। आकाश से ऊँचा क्या है? — पिता। वायु से तीव्र क्या है? — मन। और घास की कणिकाओं से अधिक संख्या में क्या है? — जीवित मनुष्य के मन में उठते विचार। माता-पिता-मन के ये उत्तर विश्व-साहित्य के सबसे प्रेमणीय प्रश्नोत्तरों में गिने जाते हैं — संबंधों की गरिमा यक्ष-संवाद का हृदय है।",
    english:
      "The Yaksha asked: What is weightier than the earth? — The mother. What is higher than the heavens? — The father. What is swifter than the wind? — The mind. What is more numerous than blades of grass? — The thoughts rising in the mind of the living. These answers of Yudhishthira rank among the most tender question-and-answer exchanges in world literature — the sanctity of bonds is the heart of the Yaksha dialogue.",
    spanish:
      "El Yaksha preguntó: ¿Qué es más pesado que la tierra? — La madre. ¿Qué es más alto que los cielos? — El padre. ¿Qué es más veloz que el viento? — La mente. ¿Qué es más numeroso que las briznas de hierba? — Los pensamientos que surgen en la mente del viviente. Estas respuestas de Yudhishthira figuran entre los intercambios de preguntas y respuestas más tiernos de la literatura universal — la santidad de los vínculos es el corazón del diálogo con el Yaksha.",
    tags: ["yaksha", "mother", "father", "mind", "यक्ष प्रश्न", "माता", "पिता", "मन", "विचार", "parents"],
  },
  {
    id: "mbh-vidura-dice",
    kind: "quote",
    bookId: "mahabharata",
    section: `${M} · Sabha Parva — Vidura's counsel`,
    sectionHi: `${MH} · सभा पर्व — विदुर-सलाह`,
    title: "Vidura's Warning — Do Not Play the Dice",
    titleHi: "विदुर-चेतावनी — द्यूत मत खेलो",
    hindi:
      "दुर्योधन के द्यूत-प्रस्ताव पर विदुर ने धृतराष्ट्र से स्पष्ट कहा — यह खेल सूखे वन की वह चिंगारी है जो पूरे कुरु-कुल को भस्म कर देगी; जुएँ में जीता राज्य अमित्रों का भोजन बनता है और द्यूत मित्रता, धन तथा कुल का विनाशक है। उन्होंने आग्रह किया — पुत्र को रोको, पांडवों को उनका अधिकार लौटाओ। धृतराष्ट्र के अंधे मोह ने चेतावनी नकार दी — और क्रमशः वही हुआ जो विदुर ने कहा था: सभा-अपमान, वन-निर्वासन और अंततः कुरुक्षेत्र। विदुर-नीति का यह सूत्र सदा की चेतावनी है — मोह पहले बुद्धि को अंधा करता है, फिर वंश को।",
    english:
      "When Duryodhana proposed the game of dice, Vidura warned Dhritarashtra plainly: this game is a spark in a dry forest that will burn the whole Kuru line; a kingdom won at gambling becomes the food of enemies — dice destroy friendship, wealth and family alike. He begged the king to restrain his son and restore the Pandavas' due. Blind fondness refused — and everything Vidura foretold came to pass: the outrage in the assembly, exile, and Kurukshetra at the end. Vidura Niti's enduring warning: infatuation first blinds the intellect, then the dynasty.",
    spanish:
      "Cuando Duryodhana propuso el juego de dados, Vidura advirtió claramente a Dhritarashtra: este juego es una chispa en un bosque seco que abrasará todo el linaje Kuru; un reino ganado al juego se vuelve pasto de los enemigos — los dados destruyen por igual la amistad, la riqueza y la familia. Suplicó al rey que contuviera a su hijo y devolviera a los Pandavas lo suyo. El amor ciego se negó — y todo lo que Vidura predijo se cumplió: el ultraje en la asamblea, el exilio y, al final, Kurukshetra. La advertencia perdurable de la Vidura Niti: la infatuación primero ciega al intelecto, después a la dinastía.",
    tags: ["vidura", "dice", "warning", "vidura niti", "विदुर", "द्यूत", "जुआ", "धृतराष्ट्र", "दुर्योधन", "gambling"],
  },
  {
    id: "mbh-ahimsa-parama",
    kind: "quote",
    bookId: "mahabharata",
    section: `${M} · the epic's recurring declaration`,
    sectionHi: `${MH} · महाभारत का उद्घोष`,
    title: "Ahimsa Paramo Dharmaḥ",
    titleHi: "अहिंसा परमो धर्मः",
    sanskrit: "अहिंसा परमो धर्मः",
    translit: "ahiṁsā paramo dharmaḥ",
    hindi:
      "'अहिंसा परमो धर्मः' — महाभारत में बार-बार लौटता यह उद्घोष है: शरीर, वचन और मन से किसी प्राणी को कष्ट न पहुँचाना सर्वोच्च धर्म है। युद्ध की महागाथा होकर भी इसका शीर्ष-सूत्र अहिंसा रहा — इसी से भारतीय मनीषा ने प्राण की पवित्रता जानी और गांधी तक इसी ने प्रेरणा दी। विवेक यह कि दूसरों की रक्षा में शस्त्र-धारण भी धर्म बन जाती है, पर मापदंड सदा अहिंसा ही रहती है।",
    english:
      "'Non-injury is the highest dharma' — the declaration that returns again and again through the Mahabharata: to cause no hurt to any living being in body, word or mind is the supreme dharma. Even as an epic of war, its summit remained ahimsa — the sanctity of life that inspired Indian thought down to Gandhi. The caveat is discrimination: force taken up to protect others may become dharma, but the measure remains non-injury.",
    spanish:
      "'La no-injuria es el dharma supremo' — la declaración que regresa una y otra vez a lo largo del Mahabharata: no causar daño a ser vivo alguno con el cuerpo, la palabra o la mente es el dharma supremo. Aun siendo una epopeya de guerra, su cima siguió siendo la ahimsa — la santidad de la vida que inspiró al pensamiento indio hasta Gandhi. La salvedad es el discernimiento: la fuerza asumida para proteger a otros puede volverse dharma, pero la medida sigue siendo la no-injuria.",
    tags: ["ahimsa", "nonviolence", "highest dharma", "अहिंसा", "अहिंसा परमो धर्मः", "परमो धर्म", "non-injury", "compassion", "famous"],
  },
  {
    id: "mbh-dharma-dharana",
    kind: "verse",
    bookId: "mahabharata",
    section: `${M} · Shanti/Karna Parva — what dharma is`,
    sectionHi: `${MH} · शान्ति/कर्ण पर्व — धर्म का स्वरूप`,
    sanskrit:
      "धारणाद्धर्ममित्याहुर्धर्मो धारयते प्रजाः। यत्स्याद्धारणसंयुक्तं स धर्म इति निश्चयः ॥",
    translit:
      "dhāraṇād dharmam ity āhur dharmo dhārayate prajāḥ, yat syād dhāraṇa-saṁyuktaṁ sa dharma iti niścayaḥ",
    hindi:
      "शान्ति पर्व में भीष्म ने युधिष्ठिर को धर्म का स्वरूप समझाया — 'धृ' धातु से धर्म शब्द बना है: जो धारण करे और प्रजाओं को धारयते — धरकर टिकाए — वही धर्म है; जिसमें संसार को धारण करने की शक्ति हो, वह निश्चित धर्म है। सत्य, दया, संयम, दान — जो जीवन को उत्थान और आधार दे, वही धर्म — महाभारत का सबसे प्रसिद्ध परिभाषा-श्लोक।",
    english:
      "In the Shanti Parva, Bhishma explains the nature of dharma to Yudhishthira: the very word comes from the root 'dhri', to hold — that which upholds; dharma bears the peoples of the world. Whatever carries the power of sustaining, that verily is dharma — truth, compassion, restraint and giving: whatever supports and uplifts life. The epic's most celebrated definition-verse.",
    spanish:
      "En el Shanti Parva, Bhishma explica a Yudhishthira la naturaleza del dharma: la misma palabra viene de la raíz 'dhri', sostener — aquello que sostiene; el dharma carga a los pueblos del mundo. Lo que posee la fuerza de sostener, eso es con certeza el dharma — verdad, compasión, templanza y generosidad: lo que apoya y eleva la vida. El verso-definición más celebrado de la epopeya.",
    tags: ["dharma", "definition", "sustains", "धारणाद् धर्म", "धर्म परिभाषा", "धारयते", "भीष्म", "धृ", "famous"],
  },
  {
    id: "mbh-shanti-conduct",
    kind: "quote",
    bookId: "mahabharata",
    section: `${M} · Shanti Parva — Bhishma to Yudhishthira`,
    sectionHi: `${MH} · शान्ति पर्व — भीषम-उपदेश`,
    title: "By Conduct, Not by Birth",
    titleHi: "जन्म से नहीं — आचरण से",
    hindi:
      "शान्ति पर्व में युधिष्ठिर के खोज-भरे प्रश्नों पर भीष्म ने शास्त्र का गहरा निर्णय सुनाया — ब्राह्मण वह नहीं जो केवल गर्भ-परंपरा से जन्मा, वह है जिसमें सत्य, दान, क्षमा, तप, शील, दया और संयम विद्यमान हैं; आचरण ही परीक्षा है, जन्म नहीं। वन पर्व में युधिष्ठिर ने नहुष-सर्प से यही कहा था — गुण ही व्यक्ति का वास्तविक लक्षण है। महाभारत का यह घोष समाज को स्मरण कराता है: ऊँचा आचरण ही ऊँची पहचान है।",
    english:
      "Pressed by Yudhishthira's searching questions in the Shanti Parva, Bhishma declared the shastras' deeper verdict: a true brahmin is not made by birth alone — he in whom truth, charity, forgiveness, austerity, purity, compassion and self-restraint dwell is the brahmin; conduct is the test, not the womb. Yudhishthira had told the serpent Nahusha the same in the forest — character is a person's real mark. The epic's declaration reminds society: noble conduct alone is noble identity.",
    spanish:
      "Ante las preguntas incisivas de Yudhishthira en el Shanti Parva, Bhishma declaró el veredicto más hondo de las escrituras: un verdadero brahmín no lo hace el nacimiento — es brahmín aquel en quien moran la verdad, la caridad, el perdón, la austeridad, la pureza, la compasión y el dominio de sí; la conducta es la prueba, no el vientre. Yudhishthira había dicho lo mismo a la serpiente Nahusha en el bosque — el carácter es la verdadera marca de la persona. La declaración de la epopeya recuerda a la sociedad: solo la conducta noble es identidad noble.",
    tags: ["conduct", "birth", "caste", "brahmin", "आचरण", "जन्म", "वर्ण", "गुण", "भीष्म", "character"],
  },
  {
    id: "mbh-ekalavya",
    kind: "story",
    bookId: "mahabharata",
    section: `${M} · Adi Parva — Ekalavya`,
    sectionHi: `${MH} · आदि पर्व — एकलव्य`,
    title: "Ekalavya's Thumb — the Guru's Price",
    titleHi: "एकलव्य का अंगूठा — गुरु-दक्षिणा",
    hindi:
      "निषाद-कुमार एकलव्य द्रोणाचार्य के आश्रम में शिष्या होने आया, पर राजकुमारों के शिक्षक ने वनवासी बालक को अस्वीकार कर दिया। उसने वन में द्रोण की मिट्टी की मूर्ति गढ़ी, उसे गुरु मानकर धनुर्विद्या में ऐसी पराकाष्ठा पाई कि भौंकते कुत्ते का मुँह बाणों की झिलमिल से बिना घायल किए बंद कर सकता था। अर्जुन से बढ़ जाने की बात सुन द्रोण वन पहुँचे; एकलव्य ने उन्हें गुरुवत् प्रणाम किया। दक्षिणा में द्रोण ने दाहिने हाथ का अंगूठा माँग लिया — एकलव्य ने बिना कँपे उसे काटकर अर्पण कर दिया, और त्याग के उस दान से उसकी असाधारण विद्या अंगुल भर रह गई। गुरु-श्रद्धा की पराकाष्ठा और सामाजिक व्यवस्था का कठोर दंश — यह कथा दोनों साथ रखती है।",
    english:
      "The Nishada prince Ekalavya sought archery from Drona, but the royal teacher refused a forest boy. Undaunted, Ekalavya made a clay image of Drona, worshipped it as his guru, and practised until he could seal a barking dog's mouth with a fan of arrows without drawing blood. Alarmed that Arjuna might be surpassed, Drona went to the forest, and Ekalavya greeted him with a disciple's bow. As guru-dakshina Drona asked for his right thumb — and without a tremor Ekalavya cut it off and offered it, his matchless skill shrinking by one finger's breadth. The story holds both the summit of devotion to the guru and the harsh price of the social order.",
    spanish:
      "El príncipe nishada Ekalavya pidió a Drona que le enseñara arquería, pero el maestro de príncipes rechazó a un muchacho del bosque. Sin desanimarse, Ekalavya hizo una imagen de arcilla de Drona, la adoró como su gurú y practicó hasta poder sellar con un abanico de flechas la boca de un perro ladrador sin herirlo. Preocupado de que Arjuna fuera superado, Drona fue al bosque, y Ekalavya lo saludó con la reverencia del discípulo. Como guru-dakshina, Drona pidió su pulgar derecho — y sin un temblor Ekalavya lo cortó y lo ofreció, y su destreza incomparable quedó menguada por el ancho de un dedo. La historia guarda a la vez la cumbre de la devoción al gurú y el duro precio del orden social.",
    tags: ["ekalavya", "drona", "gurudakshina", "thumb", "एकलव्य", "द्रोणाचार्य", "गुरु दक्षिणा", "अंगूठा", "निषाद", "archery"],
  },
  {
    id: "mbh-abhimanyu",
    kind: "story",
    bookId: "mahabharata",
    section: `${M} · Drona Parva — the thirteenth day`,
    sectionHi: `${MH} · द्रोण पर्व — तेरहवाँ दिन`,
    title: "Abhimanyu and the Chakravyuha",
    titleHi: "अभिमन्यु और चक्रव्यूह",
    hindi:
      "तेरहवें दिन द्रोण ने युधिष्ठिर को बंदी बनाने के लिये अभेद्य चक्रव्यूह रचा; उसे भेदने का रहस्य केवल अर्जुन जानते थे, और अर्जुन संशप्तकों से लड़ते हुए दूर सरक गए थे। माता की कोख में पिता के वचन सुनकर अभिमन्यु को व्यूह में प्रवेश का ज्ञान मिला था — निर्गमन का नहीं। सोलह वर्ष के बालक ने रास्ता खोला, भाइयों को जयद्रथ ने रोक लिया, और वह अकेला भीतर घुसा। द्रोण, कर्ण, कृप, अश्वत्थामा, दुर्योधन आदि महारथियों के घेरे में उसका धनुष कटा, रथ टूटा, तलवार भी छूटी; अंत में युद्ध के समस्त नियम त्यागकर सब मिलकर निःशस्त्र बालक पर टूट पड़े। सांझ को लौटे अर्जुन ने शपथ ली — कल सूर्यास्त से पूर्व जयद्रथ का वध होगा। युद्ध-धर्म का विच्छेद ही अभिमन्यु के शोक का सबसे गहरा पक्ष है।",
    english:
      "On the thirteenth day Drona wove the unbreakable chakravyuha to capture Yudhishthira; only Arjuna knew its secret, and Arjuna had been drawn far away fighting the samsaptakas. From his father's words heard in the womb, Abhimanyu knew the way in — but never the way out. The sixteen-year-old broke through, Jayadratha barred the uncles behind him, and he stood alone at the formation's heart. Ringed by Drona, Karna, Kripa, Ashwatthama, Duryodhana and other maharathis, his bow was cut, his chariot shattered, his sword struck away; at the last, casting aside every rule of war, they fell together upon the unarmed boy. Returning at dusk, Arjuna swore Jayadratha would die before the next sunset. The breach of the code of battle is the deepest side of Abhimanyu's grief.",
    spanish:
      "En el decimotercer día, Drona tejió el intrincable chakravyuha para capturar a Yudhishthira; solo Arjuna conocía su secreto, y Arjuna había sido llevado lejos, combatiendo a los samsaptakas. De las palabras de su padre oídas en el vientre, Abhimanyu sabía la entrada — pero jamás la salida. El muchacho de dieciséis años abrió paso, Jayadratha frenó a sus tíos tras él, y quedó solo en el corazón de la formación. Cercado por Drona, Karna, Kripa, Ashwatthama, Duryodhana y otros maharathis, le cortaron el arco, le destrozaron el carro y le arrebataron la espada; al final, abandonando toda regla de guerra, cayeron todos juntos sobre el muchacho desarmado. Al volver al anochecer, Arjuna juró que Jayadratha moriría antes del siguiente ocaso. La ruptura del código de batalla es el lado más hondo del duelo de Abhimanyu.",
    tags: ["abhimanyu", "chakravyuha", "arjuna", "jayadratha", "अभिमन्यु", "चक्रव्यूह", "द्रोण", "जयद्रथ", "courage", "war dharma"],
  },
  {
    id: "mbh-savitri",
    kind: "story",
    bookId: "mahabharata",
    section: `${M} · Vana Parva — Markandeya's tale of Savitri`,
    sectionHi: `${MH} · वन पर्व — मार्कण्डेय की सावित्री-कथा`,
    title: "Savitri — the Wife who Followed Yama",
    titleHi: "सावित्री — यम का पीछा करती पत्नी",
    hindi:
      "वन-पर्व में मार्कण्डेय ने युधिष्ठिर को सावित्री की कथा सुनाई। मद्र-कन्या सावित्री ने स्वयं वर चुना — नेत्रहीन, निर्वासित राजा द्युमत्सेन के पुत्र सत्यवान को — यह जानते हुए भी कि नारद ने उसकी आयु एक वर्ष बताई थी। नियत दिन वन में सत्यवान गिरा और यम स्वयं पाश लेकर उसकी आत्मा ले चले; सावित्री पीछे-पीछे चलती रही। उसके तप से प्रसन्न यम ने वर माँगने को कहा — उसने सासूर को नेत्र-राज्य, पिता को सौ पुत्र माँगे; फिर अपने लिये सौ पुत्र माँगकर पूछा — इनका जन्म सत्यवान के बिना कैसे होगा? अपने ही वचन में बँध यम ने सत्यवान का प्राण लौटा दिया। पतिव्रत-धर्म मृत्यु से भी श्रेष्ठ सिद्ध हुआ — यही भारतीय स्त्री-धर्म का शिखर-प्रसंग है।",
    english:
      "In the Vana Parva, Markandeya told Yudhishthira the tale of Savitri. The princess of Madra chose for her husband Satyavan, son of the blind exiled king Dyumatsena — knowing full well that Narada had foretold he would die within a year. On the fated day Satyavan fell in the forest, and Yama himself came with his noose to lead the soul away; Savitri simply followed. Pleased by her steadfastness, Yama offered boons — sight and kingdom for her father-in-law, a hundred sons for her father; then she asked a hundred sons for herself and asked how they could ever be without Satyavan. Bound by his own word, Yama gave the prince back his life. The fidelity of the pativrata proved greater than death — the crown jewel of Indian teaching on marriage.",
    spanish:
      "En el Vana Parva, Markandeya contó a Yudhishthira la historia de Savitri. La princesa de Madra eligió por esposo a Satyavan, hijo del rey ciego y desterrado Dyumatsena — sabiendo plenamente que Narada había predicho que moriría antes de un año. En el día señalado, Satyavan cayó en el bosque y el propio Yama vino con su lazo a llevarse el alma; Savitri simplemente lo siguió. Complacido por su constancia, Yama le ofreció gracias — vista y reino para su suegro, cien hijos para su padre; entonces ella pidió cien hijos para sí y preguntó cómo podrían darse sin Satyavan. Atado por su propia palabra, Yama devolvió la vida al príncipe. La fidelidad de la pativrata resultó mayor que la muerte — la joya suprema de la enseñanza india sobre el matrimonio.",
    tags: ["savitri", "satyavan", "yama", "pativrata", "सावित्री", "सत्यवान", "यम", "पतिव्रता", "marriage", "fidelity"],
  },
  {
    id: "mbh-nala",
    kind: "story",
    bookId: "mahabharata",
    section: `${M} · Vana Parva — Nala and Damayanti`,
    sectionHi: `${MH} · वन पर्व — नल-दमयंती`,
    title: "Nala and Damayanti — Fortune's Wheel",
    titleHi: "नल-दमयंती — भाग्य का चक्र",
    hindi:
      "दुःखी युधिष्ठिर को सांत्वना देने मार्कण्डेय ने नल-दमयंती की कथा सुनाई। निषध-नरेश धर्मात्मा नल को विदर्भ-कन्या दमयंती ने स्वयंवर में देवताओं को छोड़कर मानव-वर के रूप में चुना। विलंब से आया कलि अपमान से क्रुद्ध हो नल के शरीर में समा गया — कपट-द्यूत में नल ने राज्य, धन, राजपाठ सब हारा और दमयंती सहित वन को चला गया। प्रिया का भविष्य देखकर उसने सोती दमयंती को वन में छोड़ दिया; कर्कोटक नाग के दंश से कुरूप 'बहुक' बन वह राजा रितुपर्ण का सारथी बना और अश्व-विद्या के बदले अक्ष-विद्या (द्यूत-ज्ञान) सीखी। दमयंती की युक्ति से पुनर्मिलन हुआ, और नल ने द्यूत-विद्या से भाई पुष्कर से राज्य फिर जीत लिया। संदेश स्पष्ट है — विपरीत काल घूमकर लौटता है; धर्म-निष्ठ पुरुष का धैर्य उसे पुनः सिंहासन दिलाता है।",
    english:
      "To console the grieving Yudhishthira, Markandeya told the tale of Nala. The righteous king of Nishadha won Damayanti of Vidarbha, who at her swayamvara chose the mortal Nala even with the gods standing as suitors. The spirit Kali, arriving late and slighted, possessed him — through a rigged game of dice Nala lost kingdom, wealth and throne, and went to the forest with Damayanti. For her sake he left her sleeping in the woods; stung by the serpent Karkotaka he became the misshapen charioteer Bahuka, served king Rituparna, and learned the science of dice in exchange for the science of horses. By Damayanti's clever test the two were reunited, and Nala won back his kingdom from his brother Pushkara with his new mastery. The message is clear — adverse fortune turns again; the patience of the righteous restores them to the throne.",
    spanish:
      "Para consolar al afligido Yudhishthira, Markandeya contó la historia de Nala. El justo rey de Nishadha ganó a Damayanti de Vidarbha, que en su swayamvara eligió al mortal Nala aun con los dioses mismos como pretendientes. El espíritu Kali, llegado tarde y desairado, lo poseyó — mediante un juego de dados amañado, Nala perdió reino, riqueza y trono, y se fue al bosque con Damayanti. Por amor a ella la dejó dormida en el bosque; mordido por la serpiente Karkotaka se convirtió en el deforme auriga Bahuka, sirvió al rey Rituparna y aprendió la ciencia de los dados a cambio de la ciencia de los caballos. Por la astuta prueba de Damayanti ambos se reunieron, y Nala recuperó su reino de manos de su hermano Pushkara con la nueva maestría. El mensaje es claro — la fortuna adversa vuelve a girar; la paciencia del justo lo devuelve al trono.",
    tags: ["nala", "damayanti", "dice", "kali", "नल", "दमयंती", "द्यूत", "रितुपर्ण", "कर्कोटक", "fortune"],
  },
  {
    id: "mbh-krishna-embassy",
    kind: "story",
    bookId: "mahabharata",
    section: `${M} · Udyoga Parva — Krishna's embassy`,
    sectionHi: `${MH} · उद्योग पर्व — कृष्ण-दूत्व`,
    title: "The Peace Mission — Five Villages",
    titleHi: "शांति-दूत्व — पाँच ग्राम",
    hindi:
      "युद्ध से पूर्व युधिष्ठिर ने शांति की अंतिम चेष्टा की और श्रीकृष्ण स्वयं हस्तिनापुर के दूत बनकर गए। कुरु-सभा में उन्होंने विनम्र और निर्भीक संदेश रखा — पाँच भाई केवल पाँच ग्राम माँगते हैं; इतना देने से वंश-युद्ध टल जाएगा। धृतराष्ट्र के मोह और दुर्योधन के अहंकार ने इनकार कर दिया — 'सूई की नोक भर भूमि भी युद्ध के बिना नहीं मिलेगी।' जब दुर्योधन-गण दूत को बंदी बनाने उठे, श्रीकृष्ण ने सभा में विश्वरूप-दर्शन कर दिया — दिव्य भीमता के सामने सब दृष्टियाँ झुक गईं। लौटते समय उन्होंने कर्ण को उसका जन्म-रहस्य बताकर पांडवों में आने का निमंत्रण दिया — कर्ण ने कृतज्ञता-धर्म के कारण इनकार किया। सारे शांति-द्वार बंद हो गए; धर्म की स्थापना के लिये युद्ध अब अपरिहार्य था।",
    english:
      "Before the war, Yudhishthira made one last attempt at peace, and Krishna himself went to Hastinapura as envoy. In the Kuru assembly he laid down a humble, fearless message — the five brothers ask only five villages; grant this and a war of the whole clan is averted. Dhritarashtra's fondness and Duryodhana's pride refused — 'not a needle-point of land without war.' When Duryodhana and his party rose to seize the envoy, Krishna revealed his cosmic form to the assembled court, and every eye bowed before the divine terror. On his way back he told Karna the secret of his birth and invited him among the Pandavas — Karna refused out of the dharma of gratitude. Every door of peace was now shut; for dharma's establishment, war alone remained.",
    spanish:
      "Antes de la guerra, Yudhishthira hizo un último intento de paz, y el propio Krishna fue a Hastinapura como emisario. En la asamblea Kura dejó un mensaje humilde y sin miedo — los cinco hermanos piden solo cinco aldeas; concédelas y se evita una guerra de todo el clan. El apego de Dhritarashtra y el orgullo de Duryodhana se negaron — 'ni la punta de una aguja de tierra sin guerra.' Cuando Duryodhana y los suyos se alzaron para apresar al emisario, Krishna reveló su forma cósmica ante la corte reunida, y todo ojo se inclinó ante el terror divino. De regreso, reveló a Karna el secreto de su nacimiento y lo invitó a los Pandavas — Karna se negó por el dharma de la gratitud. Toda puerta de paz quedó cerrada; para el establecimiento del dharma, solo quedaba la guerra.",
    tags: ["krishna", "peace embassy", "udyoga", "duryodhana", "कृष्ण दूत्व", "उद्योग पर्व", "पाँच ग्राम", "दुर्योधन", "vishvarupa", "peace"],
  },
  {
    id: "mbh-gandhari-curse",
    kind: "story",
    bookId: "mahabharata",
    section: `${M} · Stri Parva — Gandhari's grief`,
    sectionHi: `${MH} · स्त्री पर्व — गांधारी का शोक`,
    title: "Gandhari's Curse — a Mother's Grief",
    titleHi: "गांधारी का शाप — माता का शोक",
    hindi:
      "युद्ध के पश्चात हस्तिनापुर की विधवाएँ शवों के मैदान में उतरीं। पट्टी-बंध गांधारी ने अपने सौ पुत्रों का अंत देखा, और सांत्वना देने आए श्रीकृष्ण से व्यथित होकर बोलीं — तुम सर्व-शक्तिमान होकर भी इस नर-संहार के साक्षी बने रहे; छत्तीस वर्षों के बाद तुम्हारा अपना वंश भी इसी प्रकार परस्पर लड़कर विनष्ट होगा और तुम उसके प्रत्यक्ष साक्षी बनोगे। श्रीकृष्ण ने शाप शांत भाव से स्वीकार किया — यादवों का यह अंत काल में लिखा जा चुका था। छत्तीस वर्ष बाद प्रभास-तीर पर मद्य के विवाद से यादव उन्मत्त होकर दूब-तृण से एक-दूसरे का संहार कर बैठे, और जरा व्याध के बाण से श्रीकृष्ण ने दिव्य शरीर त्यागा। गांधारी का वचन सत्य हुआ — मातृ-शोक भी एक शक्ति है, और कर्म अपना फल स्वयं चुकाता है।",
    english:
      "After the war, the widows of Hastinapura walked out upon the field of the dead. The blindfolded Gandhari beheld the end of her hundred sons, and to Krishna, who had come to console her, she spoke her grief as a curse: though all-powerful, he had stood witness to the slaughter; after thirty-six years his own kinsmen too would destroy one another in mutual strife, and he would watch it happen. Krishna received the curse with calm — the Yadavas' end was already written in time. Thirty-six years later at Prabhasa, a drunken quarrel made the Yadavas slay one another with the eraka grass, and Krishna gave up his divine body to a hunter's arrow. Gandhari's word came true — a mother's grief is also a power, and karma pays its own fruit.",
    spanish:
      "Tras la guerra, las viudas de Hastinapura salieron al campo de los muertos. Gandhari, con los ojos vendados, contempló el fin de sus cien hijos, y a Krishna, que había venido a consolarla, le dirigió su duelo como maldición: siendo todopoderoso, había sido testigo de la masacre; a los treinta y seis años, sus propios parientes se destruirían también mutuamente en lucha intestina, y él lo contemplaría. Krishna recibió la maldición con calma — el fin de los Yadavas ya estaba escrito en el tiempo. Treinta y seis años más tarde, en la playa de Prabhasa, una pendencia de borrachos hizo que los Yadavas se mataran entre sí con la hierba eraka, y Krishna entregó su cuerpo divino a la flecha de un cazador. La palabra de Gandhari se cumplió — el duelo de una madre también es un poder, y el karma paga su propio fruto.",
    tags: ["gandhari", "curse", "krishna", "yadavas", "गांधारी", "शाप", "कृष्ण", "यादव", "mausala", "grief"],
  },
];
