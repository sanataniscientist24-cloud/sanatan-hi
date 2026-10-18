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
    spanish:
      "Elogio a Agni, el sacerdote del hogar del sacrificio, el divino ministro del rito, el invocador, otorgador de tesoros. El primer verso del Rig Veda — el primer libro de la humanidad — invoca al Fuego en el comienzo de la creación.",
    tags: ["agni", "fire", "first verse", "rigveda opening", "अग्नि", "प्रथम ऋचा", "यज्ञ", "ऋग्वेद", "fire god"],
  },
  {
    id: "rv-ganapati-2-23-1",
    kind: "mantra",
    bookId: "vedas",
    section: `${V} · Mandala 2.23.1 — Ganapati Mantra`,
    sectionHi: `${VH} · मंडल 2.23.1 — गणपति मंत्र`,
    verse: "2.23.1",
    sanskrit:
      "गणानां त्वा गणपतिं हवामहे कविं कवीनामुपमश्रवस्तिनम्। ज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पते आ नः श्र्ण्वन्नूतिभिः सीद सादनम् ॥",
    translit:
      "gaṇānāṁ tvā gaṇapatiṁ havāmahe kaviṁ kavīnām upamaśravastinam, jyeṣṭharājaṁ brahmaṇāṁ brahmaṇas pate, ā naḥ śṛṇvan nūtibhiḥ sīda sādanam",
    hindi:
      "हम समस्त गणों के स्वामी गणपति (ब्रह्मणस्पति) का आह्वान करते हैं — कवियों में श्रेष्ठ कवि, उत्तम कीर्ति-संपन्न और ब्राह्मण-भावों के ज्येष्ठ राजा को। हे मंत्र-स्वामी! हमारी स्तुति सुनकर सहायकों सहित यज्ञ-सदन में आसीन हों। गणेश-उपासना का वैदिक मूल यही ऋचा है — आज भी शुभ कार्य का आरम्भ इसी मंत्र से होता है।",
    english:
      "We invoke you, O Ganapati, Lord of the hosts, the seer of seers, of most exalted fame; the eldest king of sacred prayers, O Brahmanaspati — hearing our hymns with their offerings, come and be seated in this sacrificial hall. The Vedic root of Ganesha worship, this Rigvedic verse still opens every auspicious rite today.",
    spanish:
      "Te invocamos, oh Ganapati, señor de las huestes, vidente entre videntes, de excelsa fama; el rey supremo de las sagradas plegarias, oh Brahmanaspati — escuchando nuestros himnos con sus ofrendas, ven y siéntate en este recinto del sacrificio. La raíz védica del culto a Ganesha: este verso del Rig Veda todavía abre todo rito auspicioso.",
    tags: ["ganapati", "ganesh", "brahmanaspati", "invocation", "गणानां त्वा गणपतिं", "गणेश", "ब्रह्मणस्पति", "विघ्ननाश", "mantra", "famous"],
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
    spanish:
      "Om — tierra, atmósfera, cielo. Meditemos en la adorable gloria del Sol divino (Savitr); que Él ilumine y guíe nuestro intelecto. El Gayatri — madre de los Vedas y corazón de la oración diaria del sandhya.",
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
    spanish:
      "La Persona Cósmica tiene mil cabezas, mil ojos, mil pies; Él penetra la tierra entera y se alza diez dedos más allá. Todo este universo — lo que fue, es y será — es el Purusha; Él es el señor de la inmortalidad. Todos los seres son apenas un cuarto de Él; tres cuartos son inmortales en el cielo. La grandiosa visión védica del Señor que todo lo penetra.",
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
    spanish:
      "Entonces ni siquiera el no-ser era, ni el ser; ni aire, ni cielo más allá — ¿qué lo cubría, dónde, bajo el abrigo de quién, estaba aquella agua, el abismo profundo? No había muerte, ni inmortalidad; ni noche, ni día — solo Aquel Uno respiraba, sosteniéndose a sí mismo, sin viento; aparte de Eso, nada existía. La visión del vidente del estado previo a la creación — el poema filosófico más antiguo del mundo.",
    tags: ["nasadiya", "creation", "philosophy", "before creation", "नासदीय सूक्त", "सृष्टि", "पूर्व", "असत्", "philosophy", "famous"],
  },
  {
    id: "rv-hiranyagarbha-10-121",
    kind: "verse",
    bookId: "vedas",
    section: `${V} · Mandala 10.121 — Hiranyagarbha Sukta`,
    sectionHi: `${VH} · मंडल 10.121 — हिरण्यगर्भ सूक्त`,
    verse: "10.121.1",
    sanskrit:
      "हिरण्यगर्भः समवर्तताग्रे भूतस्य जातः पतिरेक आसीत्। स दधार पृथिवीं द्यामुतेमां कस्मै देवाय हविषा विधेम ॥",
    translit:
      "hiraṇyagarbhaḥ samavartatāgre bhūtasya jātaḥ patir eka āsīt, sa dadhāra pṛthivīṁ dyām utemāṁ — kasmai devāya haviṣā vidhema",
    hindi:
      "आदि में हिरण्यगर्भ (सुनहरा बीज-ब्रह्मांड) प्रकट हुआ; वही समस्त भूत-जगत् को जन्म देकर एक-अद्वितीय स्वामी हुआ। उसी ने इस पृथ्वी और द्युलोक को धारण किया है। हम उस किस देवता को हवि से अर्पण करें? दशम मंडल का विराट सृष्टि-सूक्त — ब्रह्मांड के सुनहरे गर्भ से उदित होने का प्राचीनतम ऋषि-चित्र।",
    english:
      "In the beginning arose the Golden Seed — Hiranyagarbha; born of the world, he became the one lord of all beings. He upholds this earth and this heaven. To which god shall we offer our oblation? The majestic creation hymn of Mandala Ten — the earliest vision of the universe hatching from a cosmic golden womb.",
    spanish:
      "En el comienzo surgió la Semilla Dorada — Hiranyagarbha; nacido del mundo, se convirtió en el único señor de todos los seres. Él sostiene esta tierra y este cielo. ¿A qué dios ofreceremos nuestra oblación? El majestuoso himno de la creación del Mandala Diez — la visión más antigua del universo brotando de un útero cósmico dorado.",
    tags: ["hiranyagarbha", "golden embryo", "creation", "cosmic egg", "हिरण्यगर्भ", "सृष्टि सूक्त", "ब्रह्मांड", "प्रजापति", "famous"],
  },
  {
    id: "rv-rita-satya-10-190",
    kind: "verse",
    bookId: "vedas",
    section: `${V} · Mandala 10.190.1`,
    sectionHi: `${VH} · मंडल 10.190.1`,
    verse: "10.190.1",
    sanskrit:
      "ऋतं च सत्यं चाभीद्धात् तपसोऽध्यजायत। ततो रात्र्यजायत ततः समुद्रो अर्णवः ॥",
    translit:
      "ṛtaṁ ca satyaṁ cābhīddhāt tapaso 'dhy ajāyata, tato rātry ajāyata tataḥ samudro arṇavaḥ",
    hindi:
      "आदि की महान् तपस्या से ऋत (ब्रह्मांडीय व्यवस्था) और सत्य का जन्म हुआ; उसी से रात्रि उत्पन्न हुई और उसी से सागर की लहरें। ऋत और सत्य — वैदिक जगत्-दृष्टि के दो आधार-स्तंभ, जिनसे समस्त धर्म-परम्परा की नदी प्रवाहित हुई है।",
    english:
      "From the mighty tapas of the beginning were born Rita (cosmic order) and Satya (truth); from them the night was born, and from that the ocean's rolling waves. Rita and Satya — the twin pillars of the Vedic worldview, from which the whole river of dharma has flowed.",
    spanish:
      "Del poderoso tapas del origen nacieron Rita (el orden cósmico) y Satya (la verdad); de ellos nació la noche, y de ella las olas rodantes del océano. Rita y Satya — los dos pilares de la cosmovisión védica, de los cuales ha fluido todo el río del dharma.",
    tags: ["rita", "satya", "truth", "cosmic order", "tapas", "ऋत", "सत्य", "तपस्या", "धर्म", "creation"],
  },
  {
    id: "rv-sangathan-10-191",
    kind: "verse",
    bookId: "vedas",
    section: `${V} · Mandala 10.191.2-4 — Sangathan Sukta`,
    sectionHi: `${VH} · मंडल 10.191.2-4 — संघठन सूक्त (एकता-सूक्त)`,
    verse: "10.191.2-4",
    sanskrit:
      "सं गच्छध्वं सं वदध्वं सं वो मनांसि जानताम् ॥ ... समानी व आकूतिः समाना हृदयानि वः। समानमस्तु वो मनो यथा वः सुसहासति ॥",
    translit:
      "saṁ gacchadhvaṁ saṁ vadadhvaṁ saṁ vo manāṁsi jānatām — samānī va ākūtiḥ samānā hṛdayāni vaḥ, samānam astu vo mano yathā vaḥ susahāsati",
    hindi:
      "मिलकर चलो, मिलकर बोलो, तुम्हारे मन एक-भाव से जानें — जैसे प्राचीन देवता एक होकर साझा भाग अर्पित करते हैं। तुम्हारा संकल्प एक हो, हृदय एक हों और मन एक हो, ताकि तुम सब साथ-साथ रह सको। सामूहिक जीवन और राष्ट्रीय एकता का शाश्वत वैदिक महामंत्र।",
    english:
      "Walk together, speak together, let your minds be of one accord — as the gods of old, being of one mind, accepted their shared portion. Common be your purpose, common your hearts, common your minds, that you may all dwell together in unity — the eternal Vedic charter of fellowship and national oneness.",
    spanish:
      "Caminad juntos, hablad juntos, que vuestras mentes sean unánimes — como los dioses de antaño, siendo de una sola mente, aceptaron su porción compartida. Común sea vuestro propósito, comunes vuestros corazones, común vuestra mente, para que todos habitéis juntos en unidad — la eterna carta védica de la fraternidad y la unidad nacional.",
    tags: ["unity", "sangathan", "harmony", "sam gacchadhvam", "सं गच्छध्वं", "एकता", "सामूहिकता", "समानमस्तु वो मनः", "together", "famous"],
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
    spanish:
      "Que los pensamientos nobles lleguen a nosotros desde todas partes — el verso que revela la apertura del saber indio: la verdad es bienvenida desde cualquier dirección.",
    tags: ["bhadra", "noble thoughts", "openness", "आ नो भद्रा", "उत्तम विचार", "ज्ञान", "उदारता", "famous"],
  },
  {
    id: "rv-ekam-sat-1-164-46",
    kind: "verse",
    bookId: "vedas",
    section: `${V} · Mandala 1.164.46`,
    sectionHi: `${VH} · मंडल 1.164.46`,
    verse: "1.164.46",
    sanskrit:
      "इन्द्रं मित्रं वरुणमग्निमाहुरथो दिव्यः स सुपर्णो गरुत्मान्। एकं सद्विप्रा बहुधा वदन्त्यग्निं यमं मातरिश्वानमाहुः ॥",
    translit:
      "indraṁ mitraṁ varuṇam agnim āhur atho divyaḥ sa suparṇo garutmān, ekaṁ sad viprā bahudhā vadanti — agniṁ yamaṁ mātariśvānam āhuḥ",
    hindi:
      "विद्वान् विप्र उस एक सत् को अनेक नामों से पुकारते हैं — इन्द्र, मित्र, वरुण, अग्नि, दिव्य सुपर्ण गरुत्मान्, यम, मातरिश्वान् — वे सब उसी अद्वितीय सत्य के ही नाम हैं। सहिष्णुता और अनेक-मार्ग स्वीकृति का शाश्वत वैदिक उद्घोष — भारत की आत्मा का दर्शन।",
    english:
      "The wise call the One Being by many names — they call it Indra, Mitra, Varuna, Agni, the heavenly Garutman of shining wings, Yama and Matarishvan. The eternal Vedic proclamation of one Truth behind many names — the philosophical heart of India's religious tolerance.",
    spanish:
      "Los sabios llaman al único Ser con muchos nombres — lo llaman Indra, Mitra, Varuna, Agni, el celestial Garutman de brillantes alas, Yama y Matarishvan. La proclamación védica eterna de la única Verdad tras los muchos nombres — el corazón filosófico de la tolerancia religiosa de la India.",
    tags: ["ekam sad", "one truth many names", "pluralism", "tolerance", "एकं सत्", "बहुधा वदन्ति", "एकता", "सहिष्णुता", "famous", "unity"],
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
    spanish:
      "Adoramos al señor de tres ojos Tryambaka, el fragante nutridor de todo; que Él nos libere del vínculo de la muerte, como un pepino de su tallo, y nos conceda la inmortalidad. El gran mantra vencedor de la muerte de Shiva — la suprema plegaria por la sanación, la intrepidez y la liberación de la mortalidad.",
    tags: ["mrityunjaya", "tryambakam", "shiva", "immortality", "death", "महामृत्युंजय", "त्र्यम्बकं", "मृत्यु", "शिव", "healing", "famous", "मंत्र"],
  },
  {
    id: "rv-soma-8-48-3",
    kind: "mantra",
    bookId: "vedas",
    section: `${V} · Mandala 8.48.3 — Soma Pavamana`,
    sectionHi: `${VH} · मंडल 8.48.3 — सोम पवमान`,
    verse: "8.48.3",
    sanskrit:
      "अपाम सोमममृता अभूमागन्म ज्योतिरवदान् देवान् ॥",
    translit:
      "apāma somam amṛtā abhūma, āganma jyotir avadān devān",
    hindi:
      "हमने सोम-रस पिया है — अमृतता को प्राप्त हुए हैं; हम तेजस्वी ज्योति में जा पहुँचे हैं और देवताओं को पा लिया है। अमर पंक्ति का यह उद्घोष — ऋत्विक की सर्वोच्च दिव्य-अवस्था, अमृत-पान और ज्योति-दर्शन की वैदिक मस्ती का वर्णन है।",
    english:
      "We have drunk Soma; we have become immortal; we have gone to the light; we have found the gods. The opening of the immortal Soma verse — the priest's ecstatic vision of divine light and deathlessness, the highest experience of the Vedic mystic.",
    spanish:
      "Hemos bebido Soma; nos hemos vuelto inmortales; hemos ido a la luz; hemos encontrado a los dioses. El inicio del inmortal verso del Soma — la visión extática del sacerdote: la luz divina y la inmortalidad, la suprema experiencia del místico védico.",
    tags: ["soma", "immortality", "light", "amrita", "अपाम सोमम्", "सोम", "अमृत", "ज्योति", "ecstasy", "famous"],
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
    spanish:
      "La Tierra es mi madre y yo soy su hijo. El Bhumi Sukta alaba al planeta como a una madre viva — el origen védico de la conciencia ecológica.",
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
    spanish:
      "Salutaciones a Shiva, el auspicioso, y al más-que-Shiva, el aún más auspicioso. El Shri Rudram ensalza a Rudra en sus incontables formas — esta misma línea es la fuente escritural del mantra Om Namah Shivaya.",
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
    spanish:
      "Que Mitra, Varuna, Bhaga, Indra, Brihaspati y el Vishnu de vasto paso nos sean auspiciosos. Salutación a Brahman, salutación a Vayu — Tú solo eres el Brahman visible. La plegaria recitada antes de todo estudio escritural.",
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
    spanish:
      "La palabra 'Veda' proviene de 'vid', conocer — el conocimiento mismo. Los Vedas son shruti: himnos 'escuchados' por los rishis en meditación, transmitidos luego durante milenios con impecable precisión oral — por eso se los llama apaurusheya, no de autoría humana. Cada Veda tiene cuatro estratos: Samhita (mantras), Brahmana (ritual), Aranyaka (contemplación del bosque) y Upanishad (conocimiento supremo). 'Vedo akhilo dharmamulam' — todo el dharma está enraizado en los Vedas.",
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
    spanish:
      "El Samaveda canta en sagrada melodía los versos del Rig Veda — la fuente de la música india (la propia palabra sangeet deriva de sama). Krishna declara en el Gita: 'Entre los Vedas, yo soy el Sama Veda.' En el sacrificio, el sacerdote udgatri invoca a los dioses mediante el canto saman.",
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
    spanish:
      "Todo esto — cuanto se mueve en este mundo en movimiento — está penetrado por el Señor. Disfruta lo que Él da, ofreciéndoselo de vuelta; no codicies, ¿de quién es acaso esta riqueza? El mantra inicial del Isha Upanishad — la fórmula incomparable de disfrutar mediante la renunciación.",
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
    spanish:
      "Quien ve a todos los seres en el Sí mismo, y el Sí mismo en todos los seres, no siente repulsión hacia nadie. La ley eterna de ver la unidad.",
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
    spanish:
      "El rostro de la verdad está cubierto por un recipiente dorado; oh Sustentador, retira ese velo para el buscador de la verdad. ... ¡oh Fuego!, condúcenos por el buen camino hacia la dicha; abrasa nuestros pecados torcidos — te ofrecemos nuestras salutaciones una y otra vez.",
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
    spanish:
      "El Sí mismo es más pequeño que lo más pequeño, más grande que lo más grande; mora en la cueva de cada corazón. El vidente sin deseos y sereno, por la gracia del Creador, contempla la gloria del Sí mismo. La respuesta de Yama al joven Nachiketa.",
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
    spanish:
      "Conoce al Sí mismo como el auriga y al cuerpo como el carro; el intelecto es el conductor, la mente las riendas; los sentidos son los caballos y los objetos de los sentidos sus caminos. El Sí mismo unido a los sentidos y a la mente se convierte en el experimentador. La célebre analogía del carro — una psicología completa de la vida en dos versos.",
    tags: ["chariot", "katha", "psychology", "रथ", "सारथि", "लगाम", "घोड़े", "बुद्धि", "मन", "analogy", "famous"],
  },
  {
    id: "up-katha-uttishtha",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Katha Upanishad 1.3.14`,
    sectionHi: `${UH} · कठोपनिषद् 1.3.14`,
    verse: "Katha 1.3.14",
    sanskrit:
      "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत। क्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्ति ॥",
    translit:
      "uttiṣṭhata jāgrata prāpya varān nibodhata, kṣurasya dhārā niśitā duratyayā durgaṁ pathas tat kavayo vadanti",
    hindi:
      "उठो, जागो! जागरण द्वारा वरदानों को प्राप्त करके जानो। यह मार्ग तीक्ष्ण उस्तरे की धार के समान — अत्यंत दुर्गम है; ऐसा विद्वान् कहते हैं। यमराज द्वारा नचिकेता को दिया गया जागरण-प्रतिज्ञा — वही आह्वान जिसे स्वामी विवेकानंद ने भारत का जागरण-नाद बनाया।",
    english:
      "Arise! Awake! Approach the great ones and learn, for the path is sharp like a razor's edge — hard to cross, difficult to tread, say the wise. Yama's clarion call to young Nachiketa — the same awakening that Swami Vivekananda thundered to a sleeping nation: 'Arise, awake, and stop not till the goal is reached.'",
    spanish:
      "¡Levántate! ¡Despierta! Acércate a los grandes y aprende, pues el sendero es afilado como el filo de una navaja — difícil de cruzar, arduo de transitar, dicen los sabios. La llamada de clarín de Yama al joven Nachiketa — el mismo despertar que Swami Vivekananda tronó a una nación dormida: 'Levántate, despierta y no te detengas hasta alcanzar la meta.'",
    tags: ["uttishthata jagrata", "awakening", "katha", "nachiketa", "उत्तिष्ठत जाग्रत", "जागरण", "विवेकानंद", "उस्तरे की धार", "famous", "vigilance"],
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
    spanish:
      "Sin sonido, sin tacto, sin forma, imperecedero; igualmente sin sabor, constante, inodoro; sin comienzo ni fin, más allá del gran elemento — mediante tal discernimiento, el Sí mismo debe conocerse a través de la práctica.",
    tags: ["self qualities", "formless", "अशब्द", "अरूप", "अनादि", "आत्म-धर्म", "discrimination"],
  },
  {
    id: "up-chand-sarvam",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Chandogya Upanishad 3.14.1`,
    sectionHi: `${UH} · छान्दोग्योपनिषद् 3.14.1`,
    verse: "Chandogya 3.14.1",
    sanskrit:
      "सर्वं खल्विदं ब्रह्म तज्जलानिति शान्त उपासीत ॥",
    translit:
      "sarvaṁ khalv idaṁ brahma tajjalān iti śānta upāsīta",
    hindi:
      "यह समस्त जगत् वस्तुतः ब्रह्म ही है। 'तज्जलान्' — जिससे जगत् उत्पन्न होता है (ज), जिसमें जीता है (ला), जिसमें लय को प्राप्त होता (अन्) — उस एक ब्रह्म को शांत भाव से उपासना करो। यह एक वाक्य अद्वैत-दर्शन का सूत्र-बीज बन गया — सृष्टि, स्थिति और लय सब उसी एक ब्रह्म में।",
    english:
      "All this universe is verily Brahman. Meditate on It calmly as tajjalān — that from which the world is born, in which it lives, and into which it dissolves. One sentence that became the seed-formula of Advaita philosophy: creation, existence and dissolution are all the one Brahman.",
    spanish:
      "Todo este universo es en verdad Brahman. Contémplalo serenamente como tajjalān — aquello de lo cual el mundo nace, en lo cual vive y en lo cual se disuelve. Una sola frase que se convirtió en la fórmula-semilla de la filosofía Advaita: creación, existencia y disolución son el único Brahman.",
    tags: ["sarvam khalvidam brahma", "advaita", "brahman", "tajjalan", "सर्वं खल्विदं ब्रह्म", "ब्रह्म", "अद्वैत", "उपासना", "famous", "meditation"],
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
    spanish:
      "Eso eres tú, oh Shvetaketu. El gran dicho (mahavakya) pronunciado por el padre Uddalaka a su hijo — la declaración fundacional del Advaita: el Sí mismo más íntimo y el Absoluto son uno.",
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
    spanish:
      "En el comienzo, querido mío, esto era el Ser, solo — uno único, sin segundo. La proclamación de la Unidad primordial con la que comenzó la enseñanza de Uddalaka.",
    tags: ["sat", "one without second", "creation", "सदेव", "एकमेवाद्वितीयम्", "अद्वैत", "सृष्टि", "unity"],
  },
  {
    id: "up-chand-bhuma",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Chandogya Upanishad 7.23-24 — Bhuma Vidya`,
    sectionHi: `${UH} · छान्दोग्योपनिषद् 7.23-24 — भूमा विद्या`,
    verse: "Chandogya 7.23-24",
    sanskrit:
      "यत्र नान्यत् पश्यति नान्यच्छृणोति नान्यद्विजानाति स भूमा। अथ यत्रान्यत् पश्यत्यन्यच्छृणोत्यन्यद्विजानाति तदल्पम् ॥",
    translit:
      "yatra nānyat paśyati nānyac chṛṇoti nānyad vijānāti sa bhūmā, atha yatrānyat paśyaty anyac chṛṇoty anyad vijānāti tad alpam",
    hindi:
      "जहाँ न कुछ और दिखता है, न सुनाई देता है, न और कुछ जाना जाता — वही भूमा (अनंत) है; और जहाँ दूसरा कुछ दिखता, सुनाई देता और जाना जाता है — वह अल्प (सीमित) है। सनत्कुमार-नारद संवाद का चरम — जो अनंत है वही अमृत है, जो सीमित है वही मर्त्य।",
    english:
      "Where one sees nothing else, hears nothing else, knows nothing else — that is the Infinite (bhūmā); where one sees, hears and knows something else — that is the finite (alpa). The climax of the Sanatkumara-Narada dialogue: the Infinite alone is immortal, the finite is mortal.",
    spanish:
      "Donde no se ve nada más, no se oye nada más, no se conoce nada más — eso es lo Infinito (bhūmā); donde se ve, se oye y se conoce algo más — eso es lo finito (alpa). El clímax del diálogo entre Sanatkumara y Narada: solo lo Infinito es inmortal, lo finito es mortal.",
    tags: ["bhuma", "infinite", "finite", "sanatkumara", "narada", "भूमा", "अनंत", "अल्प", "अमृत", "meditation"],
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
    spanish:
      "Yo soy Brahman. El gran dicho surgido del diálogo entre Yajnavalkya y Maitreyi — el Sí mismo de cada ser no es otro que el Absoluto; la culminación del conocimiento es esta realización.",
    tags: ["aham brahmasmi", "mahavakya", "self", "अहं ब्रह्मास्मि", "याज्ञवल्क्य", "महावाक्य", "ब्रह्म", "famous"],
  },
  {
    id: "up-brihad-priya",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Brihadaranyaka Upanishad 2.4.5`,
    sectionHi: `${UH} · बृहदारण्यकोपनिषद् 2.4.5`,
    verse: "Brihad 2.4.5",
    sanskrit:
      "आत्मनस्तु कामाय सर्वं प्रियं भवति ॥",
    translit:
      "ātmanas tu kāmāya sarvaṁ priyaṁ bhavati",
    hindi:
      "पति, पत्नी, पुत्र, धन और लोक — न कोई अपने लिए प्रिय है; सब कुछ आत्मा के लिए ही प्रिय है। याज्ञवल्क्य ने मैत्रेयी को समझाया कि सारा संसार-प्रेम वस्तुतः स्व-प्रेम का ही प्रतिबिंब है — इसलिए आत्मा का दर्शन ही सर्वाधिक प्रिय है। उपनिषदों का प्रेम-मनोविज्ञान की गहनतम देन।",
    english:
      "It is for the sake of the Self that everything becomes dear. Yajnavalkya's teaching to Maitreyi: not for the husband's sake is the husband dear, nor the wife, son or wealth for their own sake — all love is ultimately the love of the Self. The profoundest psychology of love in the Upanishads.",
    spanish:
      "Es por el Sí mismo por lo que todo se vuelve querido. La enseñanza de Yajnavalkya a Maitreyi: no por el esposo mismo es querido el esposo, ni la esposa, el hijo o la riqueza por sí mismos — todo amor es en última instancia el amor al Sí mismo. La psicología del amor más profunda de los Upanishads.",
    tags: ["atmanas tu kamaya", "love", "self", "maitreyi", "yajnavalkya", "आत्मनस्तु कामाय", "प्रेम", "आत्मा", "मैत्रेयी", "famous"],
  },
  {
    id: "up-brihad-antaryami",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Brihadaranyaka Upanishad 3.7.3 — Antaryami`,
    sectionHi: `${UH} · बृहदारण्यकोपनिषद् 3.7.3 — अन्तर्यामी`,
    verse: "Brihad 3.7.3",
    sanskrit:
      "यः पृथिव्यां तिष्ठन् पृथिवीमन्तरो यं पृथिवी न वेद यस्य पृथिवी शरीरं यः पृथिवीमन्तरो यमयति। एष त आत्मान्तर्याम्यमृतः ॥",
    translit:
      "yaḥ pṛthivyāṁ tiṣṭhan pṛthivīm antaro yaṁ pṛthivī na veda yasya pṛthivī śarīraṁ, yaḥ pṛthivīm antaro yamayati — eṣa ta ātmāntaryāmy amṛtaḥ",
    hindi:
      "जो पृथ्वी में स्थित होकर भी पृथ्वी से भिन्न है, जिसे पृथ्वी नहीं जानती, जिसका शरीर पृथ्वी है और जो पृथ्वी को भीतर से शासन करता है — वही तेरा आत्मा, अंतर्यामी अमर है। यही सूत्र जल, अग्नि, आकाश और समस्त प्राणियों तक दोहराया गया — ईश्वर सबके भीतर अदृश्य शासक रूप में विराजमान है।",
    english:
      "He who dwells in the earth, yet is other than the earth, whom the earth does not know, whose body the earth is, who controls the earth from within — He is your Self, the Inner Controller, the Immortal. The same refrain is repeated for the waters, fire, sky and every being — the celebrated Antaryami doctrine of God ruling all from within as the unseen dweller.",
    spanish:
      "Aquel que mora en la tierra, y sin embargo es distinto de ella, a quien la tierra no conoce, de quien la tierra es cuerpo, quien gobierna la tierra desde dentro — Él es tu Sí mismo, el Controlador Interno, el Inmortal. El mismo estribillo se repite para las aguas, el fuego, el cielo y todo ser — la célebre doctrina del Antaryami: Dios gobernando todo desde dentro como el morador invisible.",
    tags: ["antaryami", "inner controller", "immanent", "yajnavalkya", "अन्तर्यामी", "अंतरात्मा", "अमृत", "ईश्वर", "साक्षी", "famous"],
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
    spanish:
      "Guíame de lo irreal a lo real; guíame de la oscuridad a la luz; guíame de la muerte a la inmortalidad. Om, paz, paz, paz — la línea de plegaria más amada del mundo.",
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
    spanish:
      "Que todos sean felices, que todos estén libres de enfermedad, que todos vean el bien, que nadie sufra — la suprema plegaria por el bienestar colectivo.",
    tags: ["sarve bhavantu", "well-being", "peace", "सर्वे भवन्तु सुखिनः", "कल्याण", "निरामय", "famous", "welfare"],
  },
  {
    id: "up-mundaka-vidya",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Mundaka Upanishad 1.1.4-5`,
    sectionHi: `${UH} · मुण्डकोपनिषद् 1.1.4-5`,
    verse: "Mundaka 1.1.4-5",
    sanskrit:
      "द्वे विद्ये वेदितव्ये इति ह स्म यद्ब्रह्मविदो वदन्ति परा चैवापरा च ॥ तत्रापरा ऋग्वेदो यजुर्वेदः सामवेदोऽथर्ववेदः शिक्षा कल्पो व्याकरणं निरुक्तं छन्दो ज्योतिषमिति। अथ परा यया तदक्षरमधिगम्यते ॥",
    translit:
      "dve vidye veditavye iti ha sma yad brahmavido vadanti parā caivāparā ca — tatrāparā ṛgvedo yajurvedaḥ sāmavedo 'tharvavedaḥ śikṣā kalpo vyākaraṇaṁ niruktaṁ chando jyotiṣam iti, atha parā yayā tad akṣaram adhigamyate",
    hindi:
      "ब्रह्मवेत्ता कहते हैं — जानने योग्य दो विद्याएँ हैं: परा और अपरा। अपरा में चारों वेद तथा शिक्षा, कल्प, व्याकरण, निरुक्त, छन्द और ज्योतिष आते हैं; परा विद्या वह है जिससे अक्षर (अविनाशी ब्रह्म) को जाना जाता है। स्वयं वेद घोषणा करते हैं कि उनका अंतिम उद्देश्य उस परम ज्ञान तक पहुँचाना ही है।",
    english:
      "Two kinds of knowledge are to be known, say the knowers of Brahman — the higher (para) and the lower (apara). The lower comprises the four Vedas and their six limbs — phonetics, ritual, grammar, etymology, metrics and astronomy; but by the higher one attains the Imperishable. The Vedas themselves declare that their final goal is that supreme knowledge.",
    spanish:
      "Dos clases de conocimiento deben conocerse, dicen los conocedores de Brahman — el superior (para) y el inferior (apara). El inferior comprende los cuatro Vedas y sus seis miembros — fonética, ritual, gramática, etimología, métrica y astronomía; pero mediante el superior se alcanza lo Imperecedero. Los propios Vedas declaran que su meta final es ese conocimiento supremo.",
    tags: ["para vidya", "apara vidya", "two knowledges", "vedanta", "परा विद्या", "अपरा विद्या", "अक्षर", "ब्रह्मविद्", "education", "famous"],
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
    spanish:
      "Dos aves, compañeras siempre unidas, se aferran al mismo árbol; una come el dulce fruto mientras la otra simplemente observa — la imagen atemporal del alma individual y el testigo divino compartiendo un mismo cuerpo.",
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
    spanish:
      "Cuando lo supremo — inmanente y trascendente — es contemplado, el nudo del corazón se desata, todas las dudas se cortan y todo el karma se disuelve — el fruto final de la realización.",
    tags: ["realization", "doubts", "knot of heart", "हृदयग्रन्थि", "संशय", "कर्म नाश", "liberation"],
  },
  {
    id: "up-mundaka-satyameva",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Mundaka Upanishad 3.1.6`,
    sectionHi: `${UH} · मुण्डकोपनिषद् 3.1.6`,
    verse: "Mundaka 3.1.6",
    sanskrit:
      "सत्यमेव जयते नानृतम् ॥",
    translit:
      "satyam eva jayate nānṛtaṁ",
    hindi:
      "सत्य की ही विजय होती है, असत्य की नहीं। भारत सरकार का राष्ट्रीय प्रतीक-वाक्य इसी उपनिषद्-पंक्ति से लिया गया है — जो राजपत्र के सिंह-शिखर के नीचे अंकित है। ऋत के मार्ग पर चलने की वेद-परम्परा की चिरंतन आज्ञा।",
    english:
      "Truth alone triumphs, not falsehood. India's national motto, inscribed beneath the Lion Capital of the state emblem, comes from this very line of the Mundaka — the timeless Vedic command to walk the path of truth alone.",
    spanish:
      "Solo la verdad triunfa, no la falsedad. El lema nacional de la India, inscrito bajo el Capitel del León del emblema del Estado, proviene de esta misma línea del Mundaka — el mandato védico eterno de caminar únicamente por la senda de la verdad.",
    tags: ["satyameva jayate", "truth", "national motto", "सत्यमेव जयते", "सत्य", "राष्ट्रीय वाक्य", "भारत", "famous", "victory"],
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
    spanish:
      "Om — esta sílaba imperecedera es todo este universo; su explicación: el pasado, el futuro y cuanto existe más allá — todo es Om, el Absoluto no dual. El Mandukya de doce mantras es honrado como el Vedanta entero en miniatura.",
    tags: ["om", "mandukya", "nondual", "ॐ", "माण्डूक्य", "अद्वैत", "प्रणव", "famous"],
  },
  {
    id: "up-mandukya-turiya",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Mandukya Upanishad 7 — Turiya`,
    sectionHi: `${UH} · माण्डूक्योपनिषद् 7 — तुरीय`,
    verse: "Mandukya 7",
    sanskrit:
      "नान्तःप्रज्ञं न बहिष्प्रज्ञं नोभयतःप्रज्ञं न प्रज्ञानघनं नाप्रज्ञम् ॥ ... प्रपञ्चोपशमं शान्तं शिवमद्वैतं चतुर्थं मन्यन्ते। स आत्मा। स विज्ञेयः ॥",
    translit:
      "nāntaḥprajñaṁ na bahiṣprajñaṁ nobhayataḥprajñaṁ na prajñānaghanaṁ nāprajñaṁ — prapañcopaśamaṁ śāntaṁ śivam advaitaṁ caturtham manyante, sa ātmā, sa vijñeyaḥ",
    hindi:
      "तुरीय — चौथी अवस्था — न अंतःप्रज्ञ (स्वप्न-सी) है, न बहिष्प्रज्ञ (जाग्रत-सी), न उभयतःप्रज्ञ, न चेतना-घन, न अचेतन; वह समस्त प्रपंच के शमन का धाम — शांत, शिव और अद्वैत बताया गया है। वही आत्मा है, उसी को जानना है। जाग्रत-स्वप्न-सुषुप्ति से परे चौथे पद का प्रसिद्ध निरूपण।",
    english:
      "The fourth (turiya) is not inward-cognitive like dream, not outward-cognitive like waking, not both, not a mass of cognition, not knowing nor unknowing — it is the stilling of all appearance, peaceful, auspicious and nondual. That is the Self, and it is to be realized. The celebrated description of the fourth state beyond waking, dream and deep sleep.",
    spanish:
      "El cuarto (turiya) no es cognición hacia adentro como el sueño, ni hacia afuera como la vigilia, ni ambas, ni masa de cognición, ni conocer ni no-conocer — es el aquietamiento de toda apariencia, pacífico, auspicioso y no dual. Ese es el Sí mismo, y debe ser realizado. La célebre descripción del cuarto estado, más allá de la vigilia, el sueño y el sueño profundo.",
    tags: ["turiya", "fourth state", "consciousness", "mandukya", "तुरीय", "चौथी अवस्था", "शान्तं शिवमद्वैतम्", "अवस्था", "nondual", "famous"],
  },
  {
    id: "up-taittiriya-convocation",
    kind: "mantra",
    bookId: "upanishads",
    section: `${U} · Taittiriya Upanishad 1.11.1-2 — Convocation Address`,
    sectionHi: `${UH} · तैत्तिरीयोपनिषद् 1.11.1-2 — विदा-उपदेश`,
    verse: "Taittiriya 1.11.1-2",
    sanskrit:
      "सत्यं वद। धर्मं चर। स्वाध्यायान्मा प्रमदः ॥ ... मातृदेवो भव। पितृदेवो भव। आचार्यदेवो भव। अतिथिदेवो भव ॥",
    translit:
      "satyaṁ vada, dharmam cara, svādhyāyān mā pramadaḥ — mātṛdevo bhava, pitṛdevo bhava, ācāryadevo bhava, atithidevo bhava",
    hindi:
      "सत्य बोलो, धर्म का आचरण करो, स्वाध्याय से कभी प्रमाद मत करो; माता को देवता समझो, पिता को देवता, आचार्य को देवता और अतिथि को देवता। गुरुकुल से विदा लेते समय आचार्य द्वारा शिष्यों को दिया गया अंतिम उपदेश — भारत का शाश्वत विदा-भाषण।",
    english:
      "Speak the truth, practise dharma, never swerve from self-study; revere your mother as a god, your father as a god, your teacher as a god, your guest as a god. The final charge given by the guru to students leaving the gurukula — India's eternal convocation address.",
    spanish:
      "Habla la verdad, practica el dharma, nunca te apartes del estudio de uno mismo; venera a tu madre como a un dios, a tu padre como a un dios, a tu maestro como a un dios, a tu huésped como a un dios. La última exhortación del gurú a los discípulos que dejan el gurukula — la eterna alocución de graduación de la India.",
    tags: ["satyam vada", "dharmam chara", "ethics", "matru devo bhava", "सत्यं वद", "धर्मं चर", "मातृदेवो भव", "गुरुकुल", "convocation", "famous"],
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
    spanish:
      "Verdad, Conocimiento, Infinito — eso es Brahman; quien lo conoce, depositado en la cueva del corazón en el espacio supremo, disfruta de todos los deseos junto con Brahman. El Taittiriya regala además la enseñanza de los cinco envoltorios, del envoltorio del alimento al envoltorio de la dicha.",
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
    spanish:
      "Rudra es uno, sin segundo; Él rige todos estos mundos. Erguido como centinela sobre todo, con el arma en la mano, Él penetra y protege el universo entero.",
    tags: ["rudra", "one", "shiva", "एको हि रुद्रो", "शिव", "एकत्व", "shaiva"],
  },
  {
    id: "up-shvet-maya",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Shvetashvatara Upanishad 4.10`,
    sectionHi: `${UH} · श्वेताश्वतरोपनिषद् 4.10`,
    verse: "Shvet 4.10",
    sanskrit:
      "मायां तु प्रकृतिं विद्यान्मायिनं तु महेश्वरम्। तस्यावयवभूतेषु व्याप्तं सर्वमिदं जगत् ॥",
    translit:
      "māyāṁ tu prakṛtiṁ vidyān māyinaṁ tu maheśvaram, tasyāvayavabhūteṣu vyāptaṁ sarvam idaṁ jagat",
    hindi:
      "माया को प्रकृति (प्रकृति-शक्ति) जानो और मायावी — उस शक्ति के स्वामी — को महेश्वर शिव; उसके अवयव-भूत रूपों में यह समस्त जगत् व्याप्त है। ऊर्जा और उसे संचालित करने वाले चेतन पुरुष का स्पष्ट वैज्ञानिक विवेचन — आधुनिक दर्शन को भी प्रेरित करने वाला सूत्र।",
    english:
      "Know Maya to be prakriti (nature), and the wielder of Maya to be the great Lord Maheshvara; this whole world is pervaded by His forms, which are its parts. A precise analysis of energy and the conscious Purusha who wields it — a formula that has inspired modern philosophy as well.",
    spanish:
      "Conoce a Maya como prakriti (la naturaleza), y al que maneja Maya como el gran Señor Maheshvara; este mundo entero está penetrado por Sus formas, que son sus partes. Un análisis preciso de la energía y del consciente Purusha que la maneja — una fórmula que también ha inspirado a la filosofía moderna.",
    tags: ["maya", "prakriti", "maheshvara", "shvetashvatara", "माया", "प्रकृति", "महेश्वर", "शिव", "jagat", "famous"],
  },
  {
    id: "up-shvet-eko-deva",
    kind: "verse",
    bookId: "upanishads",
    section: `${U} · Shvetashvatara Upanishad 6.11`,
    sectionHi: `${UH} · श्वेताश्वतरोपनिषद् 6.11`,
    verse: "Shvet 6.11",
    sanskrit:
      "एको देवः सर्वभूतेषु गूढो सर्वव्यापी सर्वभूतान्तरात्मा। कर्माध्यक्षः सर्वभूताधिवासः साक्षी चेता केवलो निर्गुणश्च ॥",
    translit:
      "eko devaḥ sarvabhūteṣu gūḍho sarvavyāpī sarvabhūtāntarātmā, karmādhyakṣaḥ sarvabhūtādhivāsaḥ sākṣī cetā kevalo nirguṇaś ca",
    hindi:
      "एक ही देव है — सब प्राणियों में गुप्त, सर्वव्यापी, सबका अंतरात्मा, सबकर्मों का अध्यक्ष, सब प्राणियों में निवास करने वाला, साक्षी, चेतन, केवल (एकमात्र) और निर्गुण। एकेश्वर-दर्शन का उपनिषदों में सर्वाधिक स्पष्ट और विस्तृत वर्णन — नव-वेदांत का प्रिय सूत्र।",
    english:
      "One God, hidden in all beings, all-pervading, the inner Self of all beings, presiding over each one's karma, dwelling in everything, the witness, the thinker, the only one, free of qualities. The clearest and fullest statement of monotheism in the Upanishads — a favorite verse of Neo-Vedanta.",
    spanish:
      "Un solo Dios, oculto en todos los seres, omnipenetrante, el Sí mismo interno de todos los seres, presidiendo el karma de cada uno, morando en todo, el testigo, el pensador, el único, libre de cualidades. La afirmación más clara y completa del monoteísmo en los Upanishads — un verso favorito del Neo-Vedanta.",
    tags: ["one god", "sarvantaratma", "witness", "monotheism", "एको देवः", "अंतरात्मा", "साक्षी", "निर्गुण", "ईश्वर", "famous"],
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
    spanish:
      "La conciencia es Brahman — el cuarto de los grandes dichos. Aquello que ve, oye y conoce todo — la conciencia-testigo — es la suprema Realidad.",
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
    spanish:
      "Es distinto de lo conocido y está más allá de lo desconocido — el conocedor gracias al cual todo se conoce no puede, en sí mismo, ser conocido como objeto.",
    tags: ["kena", "knower", "beyond knowledge", "केन", "विज्ञाता", "ज्ञान से परे"],
  },
  {
    id: "up-nrsimha-ugra",
    kind: "mantra",
    bookId: "upanishads",
    section: `${U} · Nrsimha Tapini Upanishad`,
    sectionHi: `${UH} · नृसिंह तापिनी उपनिषद्`,
    verse: "Nrsimha Tapini",
    sanskrit:
      "उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतो मुखम्। नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम् ॥",
    translit:
      "ugraṁ vīraṁ mahāviṣṇuṁ jvalantaṁ sarvato mukham, nṛsiṁhaṁ bhīṣaṇaṁ bhadraṁ mṛtyu-mṛtyuṁ namāmy aham",
    hindi:
      "उग्र, वीर, महाविष्णु, सब ओर मुख वाले ज्वलंत नृसिंह — भीषण और भद्र — मृत्यु की भी मृत्यु (मृत्युमृत्यु) को मैं नमस्कार करता हूँ। राक्षसी अहंकार के संहार और भक्त-रक्षा का अमर उद्घोष — वैष्णव परम्परा के सर्वाधिक शक्तिशाली रक्षा-मंत्रों में से एक।",
    english:
      "To the fierce, valiant Mahavishnu, blazing on every side, Narasimha — terrible and benign — the death of death itself, I bow. The immortal proclamation of the destruction of demonic pride and the protection of the devotee — one of the most powerful protective mantras of the Vaishnava tradition.",
    spanish:
      "Al feroz, valiente Mahavishnu, resplandeciente por todos lados, Narasimha — terrible y benigno — la muerte de la muerte misma, me inclino. La proclamación inmortal de la destrucción del orgullo demoníaco y la protección del devoto — uno de los mantras protectores más poderosos de la tradición vaishnava.",
    tags: ["nrsimha", "narasimha", "protection", "mritamrityu", "उग्रं वीरं", "नृसिंह", "मृत्युमृत्यु", "विष्णु", "mantra", "devotion"],
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
    spanish:
      "Om — Aquello es pleno; esto es pleno; de la plenitud emerge la plenitud; tomando la plenitud de la plenitud, solo la plenitud permanece. El mantra de paz (shanti) más hermoso de la matemática no dual.",
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
    spanish:
      "Que ambos seamos protegidos juntos, que ambos seamos nutridos juntos, que ambos actuemos con vigor juntos; que nuestro estudio sea radiante, que nunca riñamos. La invocación atemporal entre maestro y discípulo.",
    tags: ["sahanavavatu", "together", "study", "सह नाववतु", "गुरु शिष्य", "अध्ययन", "famous", "invocation"],
  },
];
