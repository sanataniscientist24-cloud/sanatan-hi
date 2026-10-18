import type { CorpusEntry } from "./types";

const M = "Ram Charit Manas";
const MH = "श्रीरामचरितमानस";

/** Ram Charit Manas — Tulsidas's Awadhi epic: key dohas, chaupais and teachings. */
export const RCM_ENTRIES: CorpusEntry[] = [
  {
    id: "rcm-mangal",
    kind: "verse",
    bookId: "ram-charit-manas",
    section: `${M} · Bal Kand · Mangalacharan`,
    sectionHi: `${MH} · बाल कांड · मंगलाचरण`,
    chapter: "1",
    sanskrit:
      "मंगल भवन अमंगल हारी। द्रवउ सो दसरथ अति दुखारी॥\nचरन सरोज बंदउँ हरि राई। राम अनुज सुभग बिलोचन भाई॥",
    translit:
      "maṅgala bhavana amaṅgala hārī, dravau so dasaratha ati dukhārī\ncharana saroja bandau̐ hari rāī, rāma anuja subhaga bilochana bhāī",
    hindi:
      "रामचरितमानस का प्रसिद्ध मंगलाचरण — 'शुभ करने वाला और अशुभ को हरने वाला, सुख-दुःख में समान रहने वाला वही राम सबके दुःख दूर करता है।' तुलसीदास जी राम, लक्ष्मण, भरत, शत्रुघ्न के चरणों को नमस्कार कर कथा का आरम्भ करते हैं।",
    english:
      "The celebrated opening invocation of the Manas: 'May the Lord of auspiciousness, who wards off all inauspiciousness, who abides equally in joy and sorrow, melt away all grief.' Tulsidas bows to Rama and to his brothers Lakshmana, Bharata and Shatrughna before beginning the divine story.",
    spanish:
      "La celebrada invocación de apertura del Manas: 'Que el Señor de lo auspicioso, que aparta todo lo inauspicioso, que mora igualmente en la alegría y la tristeza, disuelva todo dolor.' Tulsidas se inclina ante Rama y ante sus hermanos Lakshmana, Bharata y Shatrughna antes de comenzar la historia divina.",
    tags: ["mangalacharan", "tulsidas", "manas opening", "मंगलाचरण", "तुलसीदास", "मंगल भवन", "रामचरितमानस", "invocation"],
  },
  {
    id: "rcm-siyavar",
    kind: "verse",
    bookId: "ram-charit-manas",
    section: `${M} · Bal Kand · refrain`,
    sectionHi: `${MH} · बाल कांड · धारा वाक्य`,
    chapter: "1",
    sanskrit:
      "सियावर रामचन्द्र की जय। भक्ति भाव विनय निज गुरु की जय॥\nबार बार बिनती करऊँ करहु कृपा रघुराई। भव भय बिनासक राम नाम गुन गाई॥",
    translit:
      "siyāvara rāmachandra kī jaya, bhakti bhāva vinaya nija guru kī jaya\nbāra bāra binatī karau̐ karahu kṛpā raghurāī, bhava bhaya bināsaka rāma nāma guṇa gāī",
    hindi:
      "मानस का धारा-वाक्य — 'सीतापति श्रीरामचन्द्र की जय!' तुलसीदास बार-बार रघुराई से विनती करते हैं कि राम-नाम की महिमा गाने की अनुकम्पा करें, जो संसार-भय का नाश करने वाला है। कथा-वाचन के बीच यही जय-घोष मंगल की स्थापना करता है।",
    english:
      "The recurring refrain of the Manas — 'Victory to Sita's lord, Sri Ramachandra!' Tulsidas begs Raghunatha again and again for the grace to sing the name of Rama, which destroys the fear of existence itself. This cry of victory sanctifies every pause in the recitation.",
    spanish:
      "El estribillo recurrente del Manas — '¡Victoria al señor de Sita, Sri Ramachandra!' Tulsidas implora una y otra vez a Raghunatha la gracia de cantar el nombre de Rama, que destruye el miedo a la existencia misma. Este grito de victoria santifica cada pausa de la recitación.",
    tags: ["siyavar", "jai", "rama name", "सियावर रामचन्द्र की जय", "राम नाम", "जय", "refrain", "मंगल"],
  },
  {
    id: "rcm-kaal-kare",
    kind: "quote",
    bookId: "ram-charit-manas",
    section: `${M} · Tulsidas dohas`,
    sectionHi: `${MH} · तुलसीदास दोहे`,
    sanskrit:
      "काल करे सो आज कर, आज करे सो अब।\nपल में परलय होएगी, बहुरि करेगा कब॥",
    translit:
      "kāla kare so āja kare, āja kare so aba\npala me̐ paralaya hoegī, bahuri karega kaba",
    hindi:
      "तुलसीदास जी का विश्व-प्रसिद्ध दोहा — कल का काम आज करो, आज का काम अभी। क्षण-भर में प्रलय हो सकती है, तब फिर काम कब करोगे? कर्म-योग का सार — टालना नहीं, अब करना।",
    english:
      "Tulsidas's world-famous doha: 'What you plan to do tomorrow, do today; what you plan to do today, do now.' Calamity can strike in a moment — then when will you do the work? The essence of karma yoga: never defer.",
    spanish:
      "El doha mundialmente famoso de Tulsidas: 'Lo que planeas hacer mañana, hazlo hoy; lo que planeas hacer hoy, hazlo ahora.' La calamidad puede llegar en un instante — ¿cuándo harás entonces el trabajo? La esencia del karma yoga: nunca posponer.",
    tags: ["tulsidas doha", "kab", "procrastination", "काल करे सो आज कर", "तुलसी दोहा", "कर्तव्य", "समय", "practical wisdom"],
  },
  {
    id: "rcm-birth",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Bal Kand`,
    sectionHi: `${MH} · बाल कांड`,
    chapter: "1",
    title: "The Birth of Rama",
    titleHi: "श्रीराम का अवतरण",
    hindi:
      "चैत्र शुक्ल नवमी को अयोध्या में कौसल्या के गर्भ से रघुनाथ प्रकट हुए। तुलसीदास लिखते हैं कि जिस क्षण भगवान ने देह धारी, उसी क्षण वे रोते हुए शिशु-रूप में सबका मन मोह लिया — वाल्मीकि रामायण के सूक्ष्म तत्व तुलसी जी ने सरल अवधी में ढाले। महर्षि वशिष्ठ ने नामकरण किया — 'राम', जो इन्द्रियों को रमाने वाला और सब हृदयों में वास करने वाला नाम है।",
    english:
      "On Chaitra Shukla Navami, the Lord of Raghus appeared in Ayodhya from Kaushalya's womb. Tulsidas writes that the moment the Lord took a body, he won every heart as a crying infant — he recast the subtle Valmiki Ramayana into simple Awadhi. Sage Vasishtha performed the naming: 'Rama', the name that delights the senses and dwells in every heart.",
    spanish:
      "En Chaitra Shukla Navami, el Señor de los Raghus apareció en Ayodhya del vientre de Kaushalya. Tulsidas escribe que en el instante en que el Señor tomó un cuerpo, conquistó cada corazón como un infante que llora — reinterprete el sutil Ramayana de Valmiki en awadhi sencillo. El sabio Vasishtha realizó el nombramiento: 'Rama', el nombre que deleita los sentidos y mora en cada corazón.",
    tags: ["rama birth", "ram navami", "kaushalya", "वाल्मीकि", "राम जन्म", "राम नवमी", "कौसल्या", "अयोध्या", "vasishtha", "बाल कांड"],
  },
  {
    id: "rcm-swayamvar",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Bal Kand`,
    sectionHi: `${MH} · बाल कांड`,
    chapter: "1",
    title: "Sita's Swayamvar — Shiva's Bow",
    titleHi: "सीता स्वयंवर — शिव-धनुष",
    hindi:
      "जनकपुरी में सीता जी के स्वयंवर में शिव-धनुष को चढ़ाना था — वही धनुष जिसके भार को अनेक राजा नहीं उठा सके। राम जी ने विनम्रता से प्रनाम किया, धनुष उठाया, और कथाकार कहते हैं — भगवान शंकर की धनुषी चढ़ाते ही टूट पड़ी। जानकी ने वरमाला राम के गले में डाली; विश्वामित्र और जनक ने आनंद से विवाह संपन्न कराया।",
    english:
      "At Sita's swayamvar in Janakpuri, the suitors had to string the bow of Shiva — a bow so heavy that many kings could not even lift it. Rama bowed in humility, raised the bow, and — says the poet — it snapped as he strung it. Janaki placed the garland around Rama's neck, and Vishwamitra and Janaka joyfully solemnized the marriage.",
    spanish:
      "En el swayamvar de Sita en Janakpuri, los pretendientes debían tensar el arco de Shiva — un arco tan pesado que muchos reyes no podían ni alzarlo. Rama se inclinó con humildad, alzó el arco y — dice el poeta — se quebró al tensarlo. Janaki colocó la guirnalda alrededor del cuello de Rama, y Vishwamitra y Janaka celebraron con gozo el matrimonio.",
    tags: ["sita swayamvar", "shiva bow", "janaki", "सीता स्वयंवर", "शिव धनुष", "जानकी", "विवाह", "जनकपुरी", "बाल कांड"],
  },
  {
    id: "rcm-vanavas",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Ayodhya Kand`,
    sectionHi: `${MH} · अयोध्या कांड`,
    chapter: "2",
    title: "The Exile — Rama's Maryada",
    titleHi: "वन-गमन — राम की मर्यादा",
    hindi:
      "कैकेयी ने दशरथ से दो वर माँगे — भरत का राज्य और राम का चौदह वर्ष का वनवास। राम ने न क्रोध किया, न शोक — मुस्कुराकर माता से आशीर्वाद लिया और खाली हाथ वन को चल पड़े। तुलसीदास इसे 'मर्यादा' का शिखर बताते हैं: पिता के वचन और माता की प्रसन्नता के धर्म के आगे राज्य, ऐश्वर्य और युवावस्था — सब तुच्छ थे। सीता और लक्ष्मण ने भी साथ चलने की जिद ठानी।",
    english:
      "Kaikeyi asked Dasharatha for two boons — the throne for Bharata, and fourteen years of exile for Rama. Rama showed neither anger nor grief: smiling, he took his mother's blessing and set out for the forest empty-handed. Tulsidas presents this as the summit of maryada (righteous conduct): beside the dharma of a father's word and a mother's joy, kingdom, wealth and youth were all trifles. Sita and Lakshmana insisted on going with him.",
    spanish:
      "Kaikeyi pidió a Dasharatha dos dones — el trono para Bharata y catorce años de destierro para Rama. Rama no mostró ira ni tristeza: sonriendo, tomó la bendición de su madre y partió hacia el bosque con las manos vacías. Tulsidas presenta esto como la cumbre del maryada (conducta justa): junto al dharma de la palabra del padre y la alegría de la madre, el reino, la riqueza y la juventud eran bagatelas. Sita y Lakshmana insistieron en acompañarlo.",
    tags: ["exile", "kaikeyi", "vanvas", "वनवास", "कैकेयी", "मर्यादा", "चौदह वर्ष", "अयोध्या कांड", "maryada purushottam"],
  },
  {
    id: "rcm-bharata-paduka",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Ayodhya Kand`,
    sectionHi: `${MH} · अयोध्या कांड`,
    chapter: "2",
    title: "Bharata and the Wooden Sandals",
    titleHi: "भरत और राम-पादुका",
    hindi:
      "चित्रकूट में भरत ने राम से अयोध्या लौटने की विनती की, पर राम ने पिता के वचन को प्रमाण बनाकर मना कर दिया। तब भरत ने राम की खादि की पादुका राज-सिंहासन पर विराजमान कर दीं और स्वयं नंदीग्राम में तपस्वी के समान रहते हुए चौदह वर्ष तक पादुका के नाम से राज किया। भक्ति-भाव की यह मूर्ति — 'प्रभु के चरण राज करें, मैं सेवक रहूँ' — तुलसी जी के मन की रचना है।",
    english:
      "At Chitrakoot Bharata begged Rama to return to Ayodhya, but Rama refused, holding fast to his father's word. Bharata then placed Rama's wooden sandals on the royal throne and, living like an ascetic at Nandigram, ruled for fourteen years in the sandals' name. This image of devotion — 'let the Lord's feet rule; I remain the servant' — is Tulsidas's own invention of the heart.",
    spanish:
      "En Chitrakoot Bharata rogó a Rama que regresara a Ayodhya, pero Rama se negó, fiel a la palabra de su padre. Bharata entonces colocó las sandalias de madera de Rama en el trono real y, viviendo como asceta en Nandigram, gobernó durante catorce años en nombre de las sandalias. Esta imagen de devoción — 'que los pies del Señor gobiernen; yo permanezco el siervo' — es la invención del corazón de Tulsidas.",
    tags: ["bharata", "paduka", "chitrakoot", "भरत", "पादुका", "चित्रकूट", "नंदीग्राम", "भक्ति", "अयोध्या कांड"],
  },
  {
    id: "rcm-chitrakoot",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Ayodhya Kand`,
    sectionHi: `${MH} · अयोध्या कांड`,
    chapter: "2",
    title: "Rama's Grief Counsel at Chitrakoot",
    titleHi: "चित्रकूट में राम का शोक-उपदेश",
    hindi:
      "दशरथ के निधन की बात सुनकर राम ने जल में पिता का तर्पण किया। भरत के आगमन पर उन्होंने गुरु वशिष्ठ और जनक के साथ बैठकर वैराग्य का उपदेश दिया — यहीं प्रसिद्ध भेंट 'भरत-मिलाप' हुई। तुलसीदास बताते हैं कि राम ने भाई को समझाया: जो माया के बंधन में जकड़ा है, उसे ही शोक सताता है; सब कुछ क्षणभंगुर है, इसलिए धर्म और भगति में मन लगा।",
    english:
      "Hearing of Dasharatha's passing, Rama offered tarpana to his father in the waters. When Bharata arrived, the famous meeting — Bharata Milapa — took place, and Rama, seated with Guru Vasishtha and Janaka, taught detachment: grief grips only one bound by maya; all things are momentary, therefore fix the mind on dharma and devotion. Tulsidas frames this as one of the poem's tenderest councils.",
    spanish:
      "Al saber del fallecimiento de Dasharatha, Rama ofreció tarpana a su padre en las aguas. Cuando llegó Bharata, ocurrió el famoso encuentro — Bharata Milapa — y Rama, sentado con el guru Vasishtha y Janaka, enseñó el desapego: el duelo sólo aferra a quien está atado por maya; todas las cosas son momentáneas, por eso fija la mente en el dharma y la devoción. Tulsidas lo presenta como uno de los consejos más tiernos del poema.",
    tags: ["bharata milap", "chitrakoot", "vairagya", "भरत मिलाप", "चित्रकूट", "तर्पण", "वैराग्य", "दशरथ", "अयोध्या कांड"],
  },
  {
    id: "rcm-panchvati",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Aranya Kand`,
    sectionHi: `${MH} · अरण्य कांड`,
    chapter: "3",
    title: "Panchvati and the Golden Deer",
    titleHi: "पंचवटी और स्वर्ण-मृग",
    hindi:
      "पंचवटी में शूर्पणखा ने राम से विवाह की इच्छा प्रकट की; अपमानित होकर सीता पर आक्रमण करने पर लक्ष्मण ने उसके नाक-कान काट दिए। भाई की शिकायत लेकर आया खर चौदह हजार राक्षसों सहित मारा गया। फिर रावण ने मारीच को स्वर्ण-मृग बनाया — सीता ने मृग का आग्रह किया, राम उसके पीछे गए, और मृग के रूप में मारीच ने 'हा लक्ष्मण!' राम-ध्वनि निकाली। धोखा खाकर सीता लक्ष्मण को भेज देती हैं — उसी क्षण रावण सीता का हरण कर ले जाता है।",
    english:
      "At Panchvati Shurpanakha proposed marriage to Rama; when humiliated and then attacking Sita, Lakshmana cut her nose and ears. Her brother Khara came with fourteen thousand demons and was slain. Then Ravana had Maricha become the golden deer — Sita begged for it, Rama chased it, and as he died Maricha cried out 'Ha Lakshmana!' in Rama's voice. Deceived, Sita sent Lakshmana after Rama — and in that very moment Ravana carried her away.",
    spanish:
      "En Panchvati Shurpanakha propuso matrimonio a Rama; humillada y luego atacando a Sita, Lakshmana le cortó la nariz y las orejas. Su hermano Khara llegó con catorce mil demonios y fue muerto. Entonces Ravana hizo que Maricha se convirtiera en el ciervo dorado — Sita lo pidió, Rama lo persiguió, y al morir Maricha gritó '¡Ay, Lakshmana!' con la voz de Rama. Engañada, Sita envió a Lakshmana tras Rama — y en ese preciso instante Ravana la raptó.",
    tags: ["panchvati", "golden deer", "shurpanakha", "सीता हरण", "पंचवटी", "स्वर्ण मृग", "मारीच", "रावण", "खर", "अरण्य कांड"],
  },
  {
    id: "rcm-hanuman-milan",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Kishkindha Kand`,
    sectionHi: `${MH} · किष्किन्धा कांड`,
    chapter: "4",
    title: "The Meeting of Rama and Hanuman",
    titleHi: "राम-हनुमान मिलन",
    hindi:
      "सीता की खोज में भटकते राम-लक्ष्मण ऋश्यमूक पर्वत की ओर बढ़े। सुग्रीव ने भेजा अपना दूत — ब्रह्मचारी वेश में हनुमान। चतुर कपि ने विनम्र और वाक्पटु स्वागत किया; राम ने लक्ष्मण से कहा — इसके वचन सुनकर ही संकट में भी कोई निराश नहीं होता। हनुमान ने अपने प्रभु के चरण देखते ही अपने कारण का ज्ञान पा लिया और सुग्रीव-राम मैत्री कराई।",
    english:
      "Searching for Sita, Rama and Lakshmana moved toward Mount Rishyamuka. Sugriva sent his envoy — Hanuman in the guise of a brahmachari. The clever monkey offered a humble, eloquent welcome; Rama told Lakshmana that hearing such speech, none could despair even in calamity. The moment Hanuman saw his Lord's feet, says Tulsidas, he knew his life's purpose, and he brought about the alliance of Sugriva and Rama.",
    spanish:
      "Buscando a Sita, Rama y Lakshmana se dirigieron al monte Rishyamuka. Sugriva envió a su emisario — Hanuman con el aspecto de un brahmachari. El astuto mono ofreció una bienvenida humilde y elocuente; Rama dijo a Lakshmana que al oír tales palabras, nadie desesperaría ni siquiera en la calamidad. En cuanto Hanuman vio los pies de su Señor, dice Tulsidas, comprendió el propósito de su vida, y propició la alianza entre Sugriva y Rama.",
    tags: ["hanuman meets rama", "rishyamuka", "sugriva", "हनुमान मिलन", "सुग्रीव", "ऋष्यमूक", "राम मैत्री", "किष्किन्धा कांड"],
  },
  {
    id: "rcm-samudra-leap",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Sundar Kand`,
    sectionHi: `${MH} · सुन्दर कांड`,
    chapter: "5",
    title: "Hanuman's Leap Across the Ocean",
    titleHi: "हनुमान का समुद्र-लंघन",
    hindi:
      "जामवंत के उपदेश से हनुमान ने स्मरण किया अपनी वायु-शक्ति, और महेंद्र पर्वत से सौ योजन विस्तीर्ण सागर पार कूद पड़े। मार्ग में सुरसा ने परीक्षा ली — हनुमान विशाल रूप धरकर उसके बड़े होते मुख से निकल गए; सिंधु में मैनाक पर्वत को रास्ते में टेका। संकट उनके लिए साधन बन गया। सुन्दर कांड में तुलसी कहते हैं — जहाँ प्रभु का कार्य हो, वहाँ भक्त की शक्ति अपने आप प्रगट होती है।",
    english:
      "Jambavan's counsel reminded Hanuman of his wind-born might, and from Mount Mahendra he leapt across the hundred-yojana ocean. On the way Surasa tested him — Hanuman grew vast and slipped past her ever-widening mouth; he rested on a mountain rising from the sea. Obstacles became his instruments. In Sundar Kand Tulsidas teaches: where the Lord's work is at stake, the servant's power reveals itself on its own.",
    spanish:
      "El consejo de Jambavan recordó a Hanuman su poder nacido del viento, y desde el monte Mahendra saltó a través del océano de cien yojanas. En el camino Surasa lo puso a prueba — Hanuman creció inmenso y pasó de largo ante su boca cada vez más ancha; descansó en una montaña que se alzaba del mar. Los obstáculos se volvieron sus instrumentos. En Sundar Kand Tulsidas enseña: donde está en juego la obra del Señor, el poder del siervo se manifiesta por sí mismo.",
    tags: ["hanuman leap", "ocean crossing", "sundar kand", "समुद्र लंघन", "जामवंत", "सुरसा", "महेंद्र पर्वत", "हनुमान", "सुन्दर कांड"],
  },
  {
    id: "rcm-ashoka-vatika",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Sundar Kand`,
    sectionHi: `${MH} · सुन्दर कांड`,
    chapter: "5",
    title: "The Ring in the Ashoka Grove",
    titleHi: "अशोक-वाटिका में मुद्रिका",
    hindi:
      "लंका में छोटे रूप में प्रविष्ट हनुमान ने अशोक-वाटिका में सीता जी को देखा — वृक्ष-मूल में बैठी, एकमात्र चिता-वस्त्र धारण, सुख-सुधा बिसारे। रावण की धमकियों से व्याकुल सीता को राम की वाणी सुनकर अत्यंत आश्वासन मिला। हनुमान ने मुद्रिका भेंट की और प्रभु का संदेश सुनाया; सीता ने विदा करते समय अपना चूडामणि राम के लिए दिया।",
    english:
      "Entering Lanka in a tiny form, Hanuman found Sita in the Ashoka grove — seated under a tree, wearing bark alone, all joy forgotten. Terrified by Ravana's threats, she was comforted by Rama's message. Hanuman presented the ring (mudrika) and delivered his Lord's words; at parting, Sita gave her chudamani jewel for Rama.",
    spanish:
      "Entrando en Lanka en una forma diminuta, Hanuman encontró a Sita en el bosque de Ashoka — sentada bajo un árbol, vistiendo solo corteza, todo gozo olvidado. Aterrada por las amenazas de Ravana, fue reconfortada por el mensaje de Rama. Hanuman presentó el anillo (mudrika) y transmitió las palabras de su Señor; al despedirse, Sita entregó su joya chudamani para Rama.",
    tags: ["ashoka vatika", "mudrika", "chudamani", "अशोक वाटिका", "मुद्रिका", "चूडामणि", "सीता", "हनुमान", "लंका", "सुन्दर कांड"],
  },
  {
    id: "rcm-lanka-dahan",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Sundar Kand`,
    sectionHi: `${MH} · सुन्दर कांड`,
    chapter: "5",
    title: "The Burning of Lanka",
    titleHi: "लंका-दहन",
    hindi:
      "सीता-दर्शन के बाद हनुमान ने लंका में विध्वंस डाला — मेघनाद के ब्रह्मास्त्र से बँधकर भी भक्त बिना कातर हुए उसे भक्ति-भाव से समेट लिया। बँधे हुए पूँछ में अग्नि लगाकर उन्होंने पूरी लंका जला डाली, पर सीता की छाया तक को धक्का नहीं पहुँचने दिया। अंत में माता के दर्शन-स्मरण से उनका शरीर शीतल हुआ — तुलसी संकेत देते हैं: भक्त का आवेश भी विवेक से परिपूर्ण होता है।",
    english:
      "After seeing Sita, Hanuman wrecked Lanka — even bound by Meghanada's Brahmastra, the devotee, unafraid, folded it with devotional feeling. With fire tied to his tail he burned the whole city, yet did not let even Sita's shadow be disturbed. At the end, the sight and remembrance of his Mother cooled his body — Tulsidas hints: even a devotee's fury is full of discernment.",
    spanish:
      "Después de ver a Sita, Hanuman devastó Lanka — incluso atado por el Brahmastra de Meghanada, el devoto, sin miedo, lo plegó con sentimiento devocional. Con fuego atado a su cola quemó toda la ciudad, pero no dejó que ni la sombra de Sita fuera tocada. Al final, la visión y el recuerdo de su Madre enfrió su cuerpo — Tulsidas sugiere: incluso la furia del devoto está llena de discernimiento.",
    tags: ["lanka burning", "hanuman", "sundar kand", "लंका दहन", "मेघनाद", "ब्रह्मास्त्र", "पूँछ में अग्नि", "हनुमान", "सुन्दर कांड"],
  },
  {
    id: "rcm-ravana-vadh",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Lanka Kand`,
    sectionHi: `${MH} · लंका कांड`,
    chapter: "6",
    title: "The Fall of Ravana",
    titleHi: "रावण-वध",
    hindi:
      "युद्ध में कुम्भकर्ण और मेघनाद गिरे; अंत में राम के बाणों ने दशानन का सिर भूमि पर गिराया। उसके भाई विभीषण ने शरण पाकर राम की ओर से लंका का राज्य पाया। तुलसी दोहे में सार देते हैं — अहंकार के भाई दम्भ-लोभ-मोह-क्रोध जिनके संग रहे, वे शेषनाग जैसे फन उठाकर भी अंत में नष्ट होते हैं; राम-बाण अर्थात विवेक-भक्ति का निशाना अचूक है।",
    english:
      "In the war Kumbhakarna and Meghanada fell; at last Rama's arrows brought the ten-headed king's heads to the ground. His brother Vibhishana, having taken refuge with Rama, received the kingdom of Lanka. Tulsidas distills it in a doha: he whose brothers are vanity's kin — hypocrisy, greed, delusion, wrath — raises his hood like Shesha yet perishes; the arrow of Rama — discrimination joined to devotion — never misses.",
    spanish:
      "En la guerra cayeron Kumbhakarna y Meghanada; al final las flechas de Rama llevaron las cabezas del rey de diez cabezas al suelo. Su hermano Vibhishana, habiendo tomado refugio en Rama, recibió el reino de Lanka. Tulsidas lo destila en un doha: aquel cuyos hermanos son los parientes de la vanidad — hipocresía, avaricia, engaño, ira — alza su capucha como Shesha y sin embargo perece; la flecha de Rama — discernimiento unido a devoción — nunca falla.",
    tags: ["ravana vadha", "vibhishana", "kumbhakarna", "रावण वध", "विभीषण", "कुम्भकर्ण", "मेघनाद", "लंका कांड", "ahankara"],
  },
  {
    id: "rcm-ramrajya",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Uttar Kand`,
    sectionHi: `${MH} · उत्तर कांड`,
    chapter: "7",
    title: "Rama Rajya in the Manas",
    titleHi: "मानस में रामराज्य",
    hindi:
      "लंका-विजय के बाद पुष्पक विमान से राम-सीता-लक्ष्मण अयोध्या लौटे और भरत की विनती से राम ने राज-तिलक स्वीकार किया। तुलसीदास वर्णन करते हैं — राम के राज्य में सभी अपने-अपने धर्म में संतुष्ट थे: कोई रोगी नहीं, कोई दरिद्र नहीं, वृक्ष सदा फलते थे, वर्षा समय पर होती थी। यही 'रामराज्य' आदर्श-राज्य का पर्याय बन गया — जहाँ राजा निष्काम सेवा और धर्म में स्थित राज-धर्म निभाता है।",
    english:
      "After the conquest of Lanka, Rama, Sita and Lakshmana returned to Ayodhya in the Pushpaka chariot, and at Bharata's entreaty Rama accepted coronation. Tulsidas describes the reign: everyone was content in their own dharma — none sick, none poor, trees bore fruit perpetually, rains came in season. This 'Rama Rajya' became the byword for the ideal state — where the king, free of selfish desire, upholds the royal dharma of service and righteousness.",
    spanish:
      "Tras la conquista de Lanka, Rama, Sita y Lakshmana regresaron a Ayodhya en el carro Pushpaka, y a la súplica de Bharata, Rama aceptó la coronación. Tulsidas describe el reinado: todos estaban contentos en su propio dharma — nadie enfermo, nadie pobre, los árboles daban fruto perpetuamente, las lluvias llegaban en sazón. Este 'Rama Rajya' se convirtió en el sinónimo del estado ideal — donde el rey, libre de deseo egoísta, sostiene el dharma real del servicio y la rectitud.",
    tags: ["rama rajya", "pushpaka", "coronation", "रामराज्य", "पुष्पक विमान", "राजतिलक", "आदर्श राज्य", "उत्तर कांड"],
  },
  {
    id: "rcm-dheere-dheere",
    kind: "quote",
    bookId: "ram-charit-manas",
    section: `${M} · Tulsidas dohas`,
    sectionHi: `${MH} · तुलसीदास दोहे`,
    sanskrit:
      "धीरे-धीरे रे मना, धीरे सब कुछ होय।\nमाली सींचे सौ घड़ा, ऋतु आए फल होय॥",
    translit:
      "dhīre-dhīre re manā, dhīre saba kucha hoy\nmālī sīñche sau ghaṛā, ritu āe phala hoy",
    hindi:
      "तुलसीदास का प्रसिद्ध दोहा — 'मन, धीरज रखो! सब धीरे-धीरे होता है। माली सौ घड़े पानी सींच दे, पर फल तब लगेगा जब ऋतु आएगी।' साधना, शिक्षा या जीवन की बड़ी मंज़िल — जल्दबाजी फल नहीं देती; निरंतर प्रयास के साथ भी समय की परिपक्वता अनिवार्य है।",
    english:
      "Tulsidas's beloved doha: 'Slowly, slowly, O mind — everything happens slowly. The gardener may water with a hundred pots, yet fruit comes only when the season arrives.' Whether practice, study, or life's great goals — haste bears no fruit; along with steady effort, the ripening of time is essential.",
    spanish:
      "El querido doha de Tulsidas: 'Despacio, despacio, oh mente — todo sucede despacio. El jardinero puede regar con cien jarros, pero el fruto llega sólo cuando llega la estación.' Ya sea la práctica, el estudio o las grandes metas de la vida — la prisa no da fruto; junto con el esfuerzo constante, la maduración del tiempo es esencial.",
    tags: ["patience", "doha", "dheere dheere", "धीरे धीरे रे मना", "धैर्य", "तुलसी दोहा", "माली", "क्रम", "patience doha"],
  },
  {
    id: "rcm-name-glory",
    kind: "story",
    bookId: "ram-charit-manas",
    section: `${M} · Uttar Kand`,
    sectionHi: `${MH} · उत्तर कांड`,
    chapter: "7",
    title: "The Glory of the Name of Rama",
    titleHi: "राम-नाम की महिमा",
    hindi:
      "मानस के अनेक स्थलों में तुलसीदास राम-नाम को सब साधनों से बड़ा बताते हैं — इसी नाम ने अहल्या को जगाया, गजराज को बाँध से मुक्त किया और कलियुग में सहज उपाय बन गया। कथा-प्रसंग में शिव जी पार्वती से कहते हैं — राम नाम 'तरक' और 'मनन' दोनों से बढ़कर है; नाम में ही नामी रहता है, इसलिए कलौ कलुष में डूबे जीव के लिए नाम-जप ही सरल राह है।",
    english:
      "Throughout the Manas Tulsidas exalts the name of Rama above all means — this name awakened Ahalya, freed Gajendra from the crocodile's grip, and became the easy path for the Kali age. In one famous exchange Shiva tells Parvati that the name of Rama surpasses both reasoning and reflection; the Named One ever dwells in his name, so for souls drowning in the age's stain, repetition of the name is the simplest road.",
    spanish:
      "A lo largo del Manas Tulsidas exalta el nombre de Rama sobre todos los medios — este nombre despertó a Ahalya, liberó a Gajendra del agarre del cocodrilo, y se convirtió en el sendero sencillo para la era de Kali. En un célebre intercambio Shiva dice a Parvati que el nombre de Rama supera tanto al razonamiento como a la reflexión; el Nombrado mora siempre en su nombre, por eso para las almas que se ahogan en la mancha de la era, la repetición del nombre es el camino más simple.",
    tags: ["rama name", "nam japa", "kali yuga", "राम नाम", "नाम जप", "महिमा", "कलियुग", "अहल्या", "गजराज", "उत्तर कांड"],
  },
];
