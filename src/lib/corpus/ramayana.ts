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
    spanish:
      "El sabio Valmiki, versado en la penitencia y el estudio de sí mismo, interrogó a Narada, el mejor de los sabios elocuentes — con este verso comienza la primera epopeya del mundo.",
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
    spanish:
      "Oh cazador, que nunca encuentres reposo durante años sin fin, porque diste muerte a uno de la pareja de aves krauncha absortas en el amor. Pronunciada por Valmiki en una compasión avivada por el duelo, esta maldición se convirtió en el primer shloka jamás compuesto — el nacimiento mismo de la poesía.",
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
    spanish:
      "Salutaciones a Rama, el auspicioso; a Rama, el de rostro de luna; al creador; al señor del linaje Raghu; al señor de los señores; y al esposo de Sita — un tesoro compacto de los nombres de Rama.",
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
    spanish:
      "Mientras las montañas se yergan y los ríos fluyan sobre esta tierra, tanto tiempo vivirá entre los mundos la historia del Ramayana.",
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
    spanish:
      "En la mismísima hora de la coronación, los dos dones de Kaikeyi exigieron catorce años de destierro. Rama sonrió y dijo: 'La palabra de un padre está para mí por encima de los propios Vedas.' Sita insistió en acompañarlo — 'el dharma de la esposa está donde está su esposo' — y Lakshmana lo siguió paso a paso. Bharata trajo de regreso las sandalias de madera de Rama, las puso sobre el trono y gobernó desde fuera de la ciudad en nombre de Rama. El Ramayana es la epopeya del mundo del sacrificio por la palabra empeñada y de la maryada — frontera sagrada y decoro.",
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
    spanish:
      "Ante el océano sin orillas, Hanuman evocó el nombre de Rama y saltó cien yojanas de un solo brinco. En Lanka halló a la madre Sita en el bosque de Ashoka, le mostró el anillo de Rama para devolverle la fe, dio muerte al guerrero Aksha e incendió Lanka con su cola ardiendo. Al regresar, pronunció las más queridas de las palabras: '¡He visto a Janaki!' Rama lo abrazó: 'Eres para mí tan querido como Bharata.' La devoción de Hanuman enseña que el poder nace del amor — donde hay shraddha, hay shakti.",
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
    spanish:
      "Junto al lago Pampa, la anciana mujer tribal Shabari había esperado años, con bayas recogidas, la llegada de Rama. Cuando Él llegó, había probado antes cada baya para guardar al Señor solo las dulces — '¡no vaya a encontrar el Señor una amarga!' Rama aceptó aquellos frutos con deleite, enseñando que la devoción no se mide por la dignidad ritual sino por el amor que hay dentro.",
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
    spanish:
      "Mientras Ravana alzaba el vuelo con Sita, el anciano rey de los buitres Jatayu le cerró el paso — 'Este cuerpo bien vale ofrecerse al servicio de Rama.' Combatió al poderoso rakshasa hasta que le cercenaron las alas y cayó a tierra, mas cumplió su propósito señalando a Rama la dirección de Ravana. El propio Rama celebró los ritos funerarios del ave: el servicio se mide por la shraddha, no por la fuerza ni por la edad.",
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
    spanish:
      "Tras catorce años, la coronación de Rama en Ayodhya inauguró el Rama Rajya — nadie estaba de duelo, a nadie le faltaba nada; los frutos del bosque eran dulces como el néctar; todos se volcaban al dharma; los ladrones desaparecieron; los ancianos y los huérfanos quedaban protegidos; mujeres y niños vivían sin temor. Aun hoy el 'Rama Rajya' es el ideal indio de gobierno — el sinónimo mismo de justicia, igualdad, prosperidad y rectitud.",
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
    spanish:
      "Oh, la de hermoso rostro — el nombre de Rama, repetido tres veces, equivale a la recitación de Sus mil nombres: el celebrado verso del Ram Raksha Stotra, compuesto por Budha Kaushika, sobre el poder protector del nombre de Rama.",
    tags: ["rama raksha", "protection", "stotra", "राम रक्षा", "राम नाम", "सहस्रनाम", "रक्षा", "protection mantra"],
  },
  {
    id: "ram-ahalya-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Bala Kanda — Ahalya's redemption`,
    sectionHi: `${RH} · बाल काण्ड — अहल्या उद्धार`,
    title: "Ahalya's Redemption — Grace Restores Honour",
    titleHi: "अहल्या का उद्धार — कृपा से सम्मान की पुनर्स्थापना",
    hindi:
      "गौतम मुनि की पत्नी अहल्या को इन्द्र ने मुनि का वेश धरकर छला; मुनि की तप-दृष्टि ने सब देख लिया और अहल्या को वर्षों तक अदृश्य रहकर वायु भक्षण करते, राख में शयन करते रहने का दंड मिला। किंतु शाप में ही मुक्ति का द्वार लिखा था — जिस दिन राघव उस आश्रम में पग रखेंगे, उसी दिन शाप भंग हो जाएगा। विश्वामित्र के साथ आते हुए राम ने उस निर्जन आश्रम में प्रवेश किया और अहल्या वर्षों की तपस्या से दिव्य तेज के साथ प्रकट हुईं। राम ने उन्हें माता समान सम्मान दिया, और गौतम ने पवित्र हो चुकी पत्नी को पुनः स्वीकार किया — भगवान् के दर्शन से केवल पाप नहीं, अपितु अज्ञान भी नष्ट हो जाता है।",
    english:
      "The sage Gautama's wife Ahalya was deceived by Indra, who came wearing the sage's very form; the sage's eye of penance saw through it, and Ahalya was sentenced to ages unseen, living on air and lying in ashes. Yet the curse carried its own release — the day Raghava sets foot in that hermitage, she would stand cleansed. Entering the desolate ashrama with Vishvamitra, Rama's arrival broke the spell, and Ahalya emerged radiant from her long austerity. Rama honoured her as a mother, and Gautama received back his purified wife: the Lord's sight destroys not sin alone but the very ignorance that bred it.",
    spanish:
      "Ahalya, esposa del sabio Gautama, fue engañada por Indra, que llegó con la propia forma del sabio; el ojo de penitencia del sabio lo descubrió, y Ahalya fue condenada a siglos sin ser vista, viviendo de aire y durmiendo sobre cenizas. Pero la maldición traía su propia liberación — el día en que Raghava pusiera el pie en aquel ermitorio, ella quedaría purificada. Entrando en el ashrama desolado junto a Vishvamitra, la llegada de Rama rompió el encantamiento, y Ahalya surgió radiante de su larga austeridad. Rama la honró como a una madre y Gautama recibió de nuevo a su esposa purificada: la mirada del Señor destruye no solo el pecado, sino la misma ignorancia que lo engendró.",
    tags: ["ahalya", "gautama", "indra", "redemption", "अहल्या", "गौतम", "शाप विमोक्ष", "राम कृपा", "बाल काण्ड", "grace"],
  },
  {
    id: "ram-parashurama-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Bala Kanda — Parasurama at Mithila`,
    sectionHi: `${RH} · बाल काण्ड — मिथिला में परशुराम`,
    title: "Rama Meets Parasurama — Two Bows, One Lord",
    titleHi: "राम-परशुराम संमुख — दो धनुष, एक स्वामी",
    hindi:
      "शिव-धनुष के टूटने का प्रचंड शब्द सुनते ही महेन्द्राचल से तपस्वी परशुराम मिथिला उपस्थित हुए और रौद्र रूप धरकर राम से ललकारे — 'इस विष्णु-धनुष पर प्रत्यंचा चढ़ाओ, तब देखें तुम्हारा शौर्य।' राम ने तपस्वी को 'भगवान्' कहकर सम्मान दिया, फिर विनम्रता से वह महान् धनुष उठाया और क्षण-भर में प्रत्यंचा चढ़ा दी। उसी क्षण परशुराम का तप से प्राप्त समस्त तेज अंतर्ध्यान हो गया — सामने वही विष्णु खड़े थे जिनसे उनकी सारी शक्ति उधार थी। हाथ जोड़कर उन्होंने निवेदन किया कि राम का बाण उनके तप के फल को ही भक्षण करे, और इस प्रकार अपना अहं चूर-चूर होने देकर वे शांत हृदय से महेन्द्र पर्वत लौट गए।",
    english:
      "The thunderous crack of Shiva's broken bow reached Parasurama's penance on Mount Mahendra, and the axe-bearing seer stormed into Mithila, challenging Rama to string Vishnu's own bow — 'then you shall see true valour.' Rama received the seer with reverence, addressing him as bhagavan for his austerities, then calmly raised the great bow and bent its string in a trice. In that instant the sage's entire blazing power of penance drained away — before him stood the very Vishnu from whom all his might was borrowed. With folded hands he begged that Rama's arrow consume the fruits of his tapas; his ego shattered, he returned serene to Mount Mahendra.",
    spanish:
      "El estruendo del arco de Shiva quebrado llegó a la penitencia de Parasurama en el monte Mahendra, y el sabio del hacha irrumpió en Mithila desafiando a Rama a tender el propio arco de Vishnu — 'entonces verás el verdadero valor.' Rama lo recibió con reverencia, llamándolo bhagavan por sus austeridades, y luego alzó serenamente el gran arco y tensó su cuerda en un instante. En ese mismo instante, todo el ardiente poder penitencial del sabio se desvaneció — ante él estaba el propio Vishnu de quien toda su fuerza era prestada. Con las manos juntas, rogó que la flecha de Rama consumiera los frutos de su tapas; con el ego deshecho, regresó sereno al monte Mahendra.",
    tags: ["parashurama", "mithila", "vishnu bow", "shiva bow", "परशुराम", "मिथिला", "विष्णु धनुष", "शिव धनुष", "तप", "bala kanda"],
  },
  {
    id: "ram-farewell-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Ayodhya Kanda — the dawn departure`,
    sectionHi: `${RH} · अयोध्या काण्ड — भोर का प्रस्थान`,
    title: "The Last Night in Ayodhya",
    titleHi: "अयोध्या की अंतिम रात्रि",
    hindi:
      "वन-गमन का समाचार पाकर सारी अयोध्या नागरिक राम के रथ के पीछे-पीछे चल पड़े — कोई कुछ नहीं बोलता, सब नेत्रों से आँसू बहाते नगर छोड़ आए। नगर की सीमा पर राम ने एक रात्रि विश्राम किया, और थक-हारकर सारी प्रजा रथ के चारों ओर सो गई। निद्रित प्रजा को विछोह का यह दुःख न देना चाहते हुए राम ने भोर में सुमन्त्र से कहा — 'अश्वों को मृदु गति से चलाओ, कहीं शब्द न हो।' जब नागरिक जागे तो रथ बहुत दूर निकल चुका था — धरा खोखली लगी और वे शोक-सागर में डूबे हुए लौट आए। गंगा-तट पर निषादराज गुह ने प्रेम से सेवा कर पार उतारा; दूसरे तट पर राम-लक्ष्मण ने जटाएँ धारण कीं — राजकीय वैभव स्वेच्छा से त्यागकर वनवासी जीवन स्वीकार किया गया।",
    english:
      "When word spread that Rama was leaving for the forest, the citizens of Ayodhya walked behind his chariot — no one spoke; eyes streaming, they left the city behind. On its outskirts Rama halted for a night, and the exhausted people fell asleep all around the chariot. To spare the sleeping population the agony of a parting glance, Rama told Sumantra at dawn: 'Drive the horses gently, without a sound.' By the time the people awoke the chariot was far away — the earth felt hollow, and they returned drowning in grief. At the Ganga the Nishada king Guha lovingly served them and ferried them across; on the farther bank Rama and Lakshmana bound their hair in matted locks — royal splendour freely surrendered, the forester's life freely embraced.",
    spanish:
      "Cuando corrió la voz de que Rama partía al bosque, los ciudadanos de Ayodhya caminaron tras su carro — nadie hablaba; con los ojos desbordados, dejaron la ciudad atrás. En sus afueras Rama se detuvo una noche, y el pueblo agotado quedó dormido alrededor del carro. Para ahorrarle a la gente dormida la agonía de una última mirada, Rama dijo a Sumantra al alba: 'Guía los caballos suavemente, sin ruido.' Cuando despertaron, el carro estaba muy lejos — la tierra se sintió vacía, y volvieron sumergidos en duelo. En el Ganges, el rey nishada Guha los sirvió con amor y los cruzó; en la otra orilla, Rama y Lakshmana se ciñeron los cabellos en trenzas de asceta — el esplendor real renunciado por propia voluntad, la vida del bosque abrazada por propia voluntad.",
    tags: ["exile", "ayodhya", "sumantra", "guha", "tamasa", "वनवास", "अयोध्या", "गुह", "सुमन्त्र", "विदाई"],
  },
  {
    id: "ram-lakshmana-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Ayodhya Kanda — Lakshmana's devotion`,
    sectionHi: `${RH} · अयोध्या काण्ड — लक्ष्मण की सेवा`,
    title: "Lakshmana — Devotion Made Flesh",
    titleHi: "लक्ष्मण — सेवा के धरातल पर उतरी भक्ति",
    hindi:
      "वन-यात्रा के आरम्भ में ही लक्ष्मण ने सुमन्त्र से कहा — 'राम और सीता जी जो भोजन कर जाएँ, उसका शेष ही मेरा भोजन है; जब तक वे जागती-जागते हैं, नींद मेरे लिए वर्जित है।' वे प्रतिदिन फल-मूल एकत्र करते, पहले राम-सीता का भोजन कराते और रात्रि-भर धनुष-बाण धारण कर जागते रहते। जिसने अपने लिए कोई स्वतंत्र आहार, विश्राम या सुख नहीं रखा, उसने राम के होने का पूर्ण अर्थ जीकर दिखाया। यह भ्रातृ-प्रेम से भी अधिक शुद्ध भक्ति थी — लक्ष्मण के लिए सेवा ही साधना और सेवा ही सिद्धि थी। परंपरा उन्हें आदर्श सेवक मानती है — शेषनाग, जो मानव-देह धरकर स्वयं को भुलाकर प्रभु की सेवा में लीन रहा।",
    english:
      "At the very start of the forest journey Lakshmana told Sumantra: 'Whatever remains after Rama and Sita have eaten, that alone is my food; while they wake, sleep is forbidden to me.' Day after day he gathered fruits and roots, served their meal first, and stood watch all night, bow strung. Claiming no independent hunger, rest or joy, he lived out the full meaning of belonging to Rama. This was devotion purer than brotherly love — for Lakshmana, service itself was the practice and its perfection. Tradition honours him as the ideal servant — Shesha the serpent-king, who wearing a human body forgot himself utterly in the Lord's service.",
    spanish:
      "Al comienzo mismo de la marcha al bosque, Lakshmana dijo a Sumantra: 'Lo que quede después de que Rama y Sita hayan comido, solo eso es mi alimento; mientras ellos velan, el sueño me está prohibido.' Día tras día recogía frutas y raíces, servía primero su comida y montaba guardia toda la noche, con el arco tensado. Sin reclamar hambre, descanso ni dicha propios, vivió plenamente el significado de pertenecer a Rama. Era una devoción más pura que el amor fraterno — para Lakshmana, el servicio mismo era la práctica y su perfección. La tradición lo honra como el servidor ideal — Shesha, el rey serpiente, que en cuerpo humano se olvidó de sí por completo en el servicio del Señor.",
    tags: ["lakshmana", "seva", "devotion", "vigil", "लक्ष्मण", "सेवा", "भक्ति", "जागरण", "शेषनाग", "chitrakoot"],
  },
  {
    id: "ram-sita-hanuman-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Sundara Kanda — Ashoka grove`,
    sectionHi: `${RH} · सुन्दर काण्ड — अशोक वाटिका`,
    title: "The Ring and the Chudamani",
    titleHi: "मुद्रिका और चूडामणि",
    hindi:
      "समुद्र लाँघकर रात-भर लंका खोजते हुए हनुमान को भोर में अशोक-वाटिका के शिंशुपा वृक्ष तले एक तपस्विनी-सी कृश प्राण दिखाई दीं — ये सीता थीं, रावण की धमकियों से व्यथित, राम-वियोग में अनशन पर अटल। विश्वास जोड़ने हेतु हनुमान वृक्ष की डाल पर छोटे रूप में बैठकर मधुर स्वर में राम-कथा सुनाने लगे, जिसे सुन सीता ने चकित होकर ऊपर देखा। उन्होंने राम की भेजी मुद्रिका सामने रखी — उसके स्पर्श से सीता का दीर्घ विषाद टूट गया। जब हनुमान ने उन्हें कंधे पर बिठाकर वापस ले जाने का प्रस्ताव दिया, तो सीता ने विनम्रता से मना किया — उनका उद्धार राम के अपने पराक्रम से ही होना चाहिए, दूत के ज़रिए लौटना उनकी मर्यादा को जीवित नहीं रख सकता। विदा में उन्होंने अपनी चूड़ा-मणि देते हुए कहा — 'इसे राम-लक्ष्मण के समक्ष रखना, मेरा जीवन-प्रमाण यही है।'",
    english:
      "After crossing the ocean Hanuman searched Lanka through the night; at dawn, beneath a shimshupa tree in the Ashoka grove, he beheld a wasted woman vowed as to penance — Sita herself, wounded by Ravana's threats, unbroken on her fast of separation from Rama. To win her trust he perched small upon a branch and softly sang the story of Rama, until her startled eyes looked up. He set before her the signet ring Rama had sent — at its touch her long despair broke. When Hanuman offered to bear her back across the sea on his shoulders, Sita gently refused: her rescue must come by Rama's own might — returning by a messenger's way would not keep her honour alive. In farewell she gave him her crest-jewel, the chudamani: 'Place this before Rama and Lakshmana — this is the proof of my life.'",
    spanish:
      "Tras cruzar el océano, Hanuman buscó por Lanka toda la noche; al alba, bajo un árbol shimshupa en el bosque de Ashoka, contempló a una mujer demacrada como una asceta — la propia Sita, herida por las amenazas de Ravana, inquebrantable en su ayuno de separación de Rama. Para ganarse su confianza se posó pequeño en una rama y entonó suavemente la historia de Rama, hasta que sus ojos asombrados se alzaron. Puso ante ella el anillo-sello que Rama había enviado — al tocarlo, su larga desesperación se quebró. Cuando Hanuman se ofreció a llevarla de regreso sobre sus hombros, Sita se negó con gentileza: su rescate debía llegar por el poderío del propio Rama — volver por vía de un mensajero no mantendría vivo su honor. En la despedida le entregó su joya de cresta, el chudamani: 'Ponla ante Rama y Lakshmana — esta es la prueba de mi vida.'",
    tags: ["sita", "hanuman", "chudamani", "mudrika", "ashoka grove", "सीता", "हनुमान", "मुद्रिका", "चूडामणि", "अशोक वाटिका"],
  },
  {
    id: "ram-lanka-burning-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Sundara Kanda — Lanka in flames`,
    sectionHi: `${RH} · सुन्दर काण्ड — लंका-दहन`,
    title: "The Burning of Lanka",
    titleHi: "लंका-दहन",
    hindi:
      "सीता से विदा लेकर हनुमान ने अशोक-वाटिका उजाड़ डाली और अक्श-कुमार सहित अनेक राक्षस-वीर संहार डाले; तब इन्द्रजित ने ब्रह्मास्त्र चलाया। ब्रह्म-महिमा का आदर करते हुए हनुमान ने उस अस्त्र के प्रभाव में बंधन स्वीकार किया — पर साधारण बंधन उन्हें बाँध ही नहीं सका। रावण की सभा में उपस्थित होकर उन्होंने स्पष्ट शब्दों में संदेश सुनाया — 'सीता को लौटाओ, अन्यथा राघव का क्रोध लंका के लिए प्रलय बनेगा।' विभीषण के समझाने पर दूत-वध से रावण बचा, किंतु उसने हनुमान की पूँछ में तेल-डूबी पट्टियाँ लपेटकर आग लगवा दी। उसी जलती पूँछ से हनुमान ने छोटा रूप धरकर बंधन तोड़ा और भवन-दर-भवन लंका को जलाते चले गए — स्वर्ण-नगरी अंगार हो गई। तभी मन में कंपन उठा — 'कहीं सीता जी भी न जल जाएँ!' — शिंशुपा तले उन्हें सुरक्षित देखकर ही वानर-हृदय को विश्राम मिला; समुद्र में पूँछ शीतल कर वे उड़ खड़े हुए।",
    english:
      "After taking leave of Sita, Hanuman wrecked the Ashoka grove and cut down Ravana's warriors along with the young prince Aksha; then Indrajit let fly the Brahmastra. Out of reverence for Brahma Hanuman honoured that weapon and accepted bondage — though no ordinary bond could hold him. Led into Ravana's court, he delivered his message in plain words: 'Return Sita, or the wrath of Raghu's son will become the deluge of Lanka.' At Vibhishana's plea Ravana spared the envoy's life, yet had Hanuman's tail wrapped in oil-soaked rags and set on fire. With that burning tail Hanuman shrank his form, snapped the bonds, and went from mansion to mansion firing the city — golden Lanka turned to embers. Then a trembling seized him — 'what if Sita too has burned!' — and only at the sight of her safe beneath the shimshupa did the servant's heart find rest; cooling his tail in the sea, he soared away.",
    spanish:
      "Tras despedirse de Sita, Hanuman arrasó el bosque de Ashoka y derribó a los guerreros de Ravana junto con el joven príncipe Aksha; entonces Indrajit disparó el Brahmastra. En reverencia a Brahma, Hanuman honró esa arma y aceptó la cautividad — aunque ningún lazo ordinario podía sujetarlo. Llevado a la corte de Ravana, dio su mensaje con palabras claras: 'Devuelve a Sita, o la ira del hijo de Raghu será el diluvio de Lanka.' Por la súplica de Vibhishana, Ravana perdonó la vida del emisario, pero mandó envolver la cola de Hanuman en trapos empapados de aceite y prenderle fuego. Con esa cola ardiente, Hanuman empequeñeció su forma, rompió las ataduras y fue de mansión en mansión incendiando la ciudad — la Lanka dorada se volvió brasas. Entonces lo invadió un temblor — '¡y si Sita también ha ardido!' — y solo al verla a salvo bajo el shimshupa halló descanso el corazón del siervo; enfriando su cola en el mar, alzó el vuelo.",
    tags: ["lanka burning", "hanuman", "ravana court", "tail fire", "लंका दहन", "हनुमान", "पूँछ", "रावण", "अक्श कुमार", "सुन्दर काण्ड"],
  },
  {
    id: "ram-sharanagati",
    kind: "verse",
    bookId: "ramayana",
    section: `${R} · Yuddha Kanda 18 — Rama's vow of refuge`,
    sectionHi: `${RH} · युद्ध काण्ड 18 — शरणागति का व्रत`,
    chapter: "6",
    verse: "6.18.3",
    sanskrit:
      "सकृदेव प्रपन्नाय तावस्मीति च याचते। अभयं सर्वभूतेभ्यो ददाम्येतद्व्रतं मम ॥",
    translit:
      "sakṛd eva prapannāya tāv asmīti ca yācate, abhayaṁ sarva-bhūtebhyo dadāmy etad vratam mama",
    hindi:
      "जो कोई एक बार शरण आकर 'मैं आपका हूँ' ऐसी विनती करता है, उसे मैं समस्त प्राणियों से अभय — निर्भयता — प्रदान करता हूँ; यह मेरा व्रत है। रावण का भाई विभीषण अपमान सहकर राम की शरण में आया, और सशंक वानर-सेना के संदेह के उत्तर में श्रीराम ने यही अभय-वचन देकर उसे गले लगा लिया। शरणागत की रक्षा राम-धर्म का केंद्र है — यही श्लोक प्रपत्ति, पूर्ण शरणागति, का प्रमाण-पत्र बन गया है।",
    english:
      "To one who has surrendered but once and prays \"I am Yours\", I grant fearlessness from all beings — this is My vow. Vibhishana, Ravana's own brother, fled insult and fell at Rama's feet; to the doubting vanara host Rama declared this eternal promise and embraced him. The protection of the surrendered is the very heart of Rama's dharma — this shloka has become the charter of prapatti, complete self-surrender.",
    spanish:
      "A quien se ha rendido una sola vez y suplica \"soy Tuyo\", le concedo la intrepidez frente a todos los seres — este es Mi voto. Vibhishana, hermano del propio Ravana, huyó del insulto y cayó a los pies de Rama; ante la recelosa hueste vanara, Rama proclamó esta promesa eterna y lo abrazó. La protección del rendido es el corazón mismo del dharma de Rama — este shloka se ha vuelto la carta de la prapatti, la entrega total de sí.",
    tags: ["sharanagati", "prapatti", "vibhishana", "abhaya", "शरणागति", "प्रपत्ति", "विभीषण", "अभय", "राम व्रत", "surrender"],
  },
  {
    id: "ram-aditya-hridaya",
    kind: "stotra",
    bookId: "ramayana",
    section: `${R} · Yuddha Kanda — Aditya Hridayam`,
    sectionHi: `${RH} · युद्ध काण्ड — आदित्य हृदय`,
    sanskrit:
      "आदित्यहृदयं पुण्यं सर्वशत्रुविनाशनम्। जयावहं जपेन्नित्यमक्षय्यं परमं शिवम् ॥",
    translit:
      "āditya-hṛdayaṁ puṇyaṁ sarva-śatru-vināśanam, jayāvahaṁ japen nityam akṣayyaṁ paramaṁ śivam",
    hindi:
      "राम-रावण युद्ध के उत्कर्ष में श्रम और विषाद से उपन्हत राम की प्रतीक्षा में अगस्त्य मुनि देवगणों सहित आए और उन्हें 'आदित्य हृदय' का उपदेश दिया — सूर्य-मंडल में विराजमान, समस्त लोकों के हृदयेश्वर भगवान् की स्तुति। स्तोत्र का प्रथम श्लोक घोषित करता है कि यह हृदय-रहस्य पवित्र है, समस्त शत्रुओं का नाश करने वाला और विजय प्रदान करने वाला है — इसका नित्य जप अक्षय और परम कल्याणकारी है। इसके पाठ से राम का तेज और धैर्य लौट आया और रावण का अंत निश्चित हुआ — आज भी साधक प्रातःकाल विजय और आरोग्य के लिए इस स्तोत्र का पाठ करते हैं।",
    english:
      "In the thick of the Rama-Ravana war, seeing weariness and gloom gather over Rama, the sage Agastya came with the hosts of heaven and taught him the Aditya Hridayam — the secret of the Sun's heart, praise of the Lord of all hearts who presides within that orb. Its opening verse proclaims: this heart is sacred, the destroyer of every foe, the bestower of victory; its daily repetition is unfailing and supremely auspicious. Reciting it, Rama's radiance and resolve returned and the doom of Ravana was sealed — to this day devotees recite the hymn each morning for vigour, victory over darkness and well-being.",
    spanish:
      "En lo más recio de la guerra entre Rama y Ravana, viendo el cansancio y el desaliento que se cernían sobre Rama, el sabio Agastya llegó con las huestes celestiales y le enseñó el Aditya Hridayam — el secreto del corazón del Sol, alabanza del Señor de todos los corazones que preside en ese orbe. Su verso inicial proclama: este corazón es sagrado, destructor de todo enemigo, otorgador de la victoria; su repetición diaria es infalible y sumamente auspiciosa. Recitándolo, volvieron a Rama el resplandor y la resolución, y la ruina de Ravana quedó sellada — aún hoy los devotos recitan el himno cada mañana por vigor, victoria sobre la oscuridad y bienestar.",
    tags: ["aditya hridayam", "agastya", "surya", "stotra", "आदित्य हृदय", "अगस्त्य", "सूर्य", "स्तोत्र", "विजय", "yuddha kanda"],
  },
  {
    id: "ram-ravana-duel-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Yuddha Kanda — the final duel`,
    sectionHi: `${RH} · युद्ध काण्ड — अंतिम द्वंद्व`,
    title: "The Fall of Ravana",
    titleHi: "रावण-वध",
    hindi:
      "सेनापतियों, पुत्रों और भाई के गिर जाने पर रावण स्वयं दस सिर और बीस भुजाओं का समस्त अस्त्र-ज्ञान लेकर रण-भूमि में उतरा — वह अग्नि-वर्षा सम प्रतिशोध बन गया। राम के बाण उसके शिरों को काटते गए, किंतु नए शिर उग आते रहे — तब राम ने ब्रह्मा के प्रदत्त दिव्य ब्रह्मास्त्र का स्मरण किया। अग्नि-माला-सम दीप्त वह अस्त्र रावण के हृदय-भाग पर लगा और लंकापति पर्वत-सम गर्जना करता भूमि पर आ गिरा। देवताओं ने पुष्प-वर्षा किया, ऋषिगणों ने राम की स्तुति की; रोते हुए विभीषण से राम बोले — 'अपने भाई का अंत्य-संस्कार पूर्ण मर्यादा से करो, वह वीर था।' विजयी राम की वेदना-हीन शांति बताती है कि रावण का वध बाण ने नहीं — उसका अहंकार युगों-युगों पहले कर दिया था।",
    english:
      "With his commanders, sons and brother fallen, Ravana himself plunged into battle with ten heads, twenty arms and all his occult lore — he became a rain of fire and vengeance. Rama's arrows severed his heads, yet fresh ones sprouted again and again — until Rama invoked the Brahmastra, the supreme missile of Brahma. Blazing like a garland of flame, it struck the rakshasa lord's heart and the lord of Lanka crashed to earth like a felled mountain. The gods rained flowers, the sages blessed Rama; to the weeping Vibhishana Rama said: 'Perform your brother's funeral rites in full honour — he was a hero.' The victor's serene freedom from rancour shows that it was not the arrow that slew Ravana, but a pride that had killed him ages before.",
    spanish:
      "Caidos sus capitanes, hijos y hermano, Ravana se lanzó él mismo al combate con diez cabezas, veinte brazos y todo su saber arcano — se volvió una lluvia de fuego y venganza. Las flechas de Rama cercenaban sus cabezas, mas nuevas brotaban una y otra vez — hasta que Rama invocó el Brahmastra, el arma suprema de Brahma. Relampagueante como una guirnalda de llama, hirió el corazón del señor de los rakshasas, y el señor de Lanka se desplomó sobre la tierra como un monte derribado. Los dioses llovieron flores, los sabios bendijeron a Rama; al lloroso Vibhishana, Rama dijo: 'Celebra los ritos funerarios de tu hermano con pleno honor — fue un héroe.' La serena ausencia de rencor del vencedor muestra que no fue la flecha la que mató a Ravana, sino un orgullo que lo había matado eras antes.",
    tags: ["ravana vadha", "final battle", "brahmastra", "युद्ध काण्ड", "रावण वध", "ब्रह्मास्त्र", "दशानन", "विभीषण", "अहंकार", "yuddha kanda"],
  },
  {
    id: "ram-agni-pariksha-story",
    kind: "story",
    bookId: "ramayana",
    section: `${R} · Yuddha Kanda — Sita's fire ordeal`,
    sectionHi: `${RH} · युद्ध काण्ड — सीता का अग्नि परीक्षण`,
    title: "Sita's Ordeal by Fire",
    titleHi: "सीता का अग्नि-परीक्षण",
    hindi:
      "रावण-वध के पश्चात् सभा के मध्य राम ने सीता से कठोर शब कहे — यह युद्ध वे अपमान का प्रतिकार करने के लिए लड़े थे, स्वार्थ-स्नेह के लिए नहीं; रावण के घर कठिन काल व्यतीत करके आई पत्नी की शुद्धि का प्रमाण प्रजा चाहती है। इस वचन से व्यथित सीता ने लक्ष्मण से अग्नि-चिता रचवाई — 'पति ने त्याग दिया है, अब अग्नि ही मेरा उपाय है।' वे प्रज्वलित अग्नि में समर्पण-भाव से उतरीं और समस्त सभा अपलक देखती रही। तभी अग्निदेव स्वयं प्रकट हुए, सीता को साक्षात् अग्नि से उठाकर राम के समक्ष रखा और देवताओं के साक्ष्य में वचन बोले — 'ये स्त्री मन से भी अपराध नहीं करतीं।' राम ने तब प्रकट किया कि उन्हें सीता की निर्लेपता का ज्ञान सदा था — यह परीक्षा लोक-संदेह के निवारण के लिए थी; अग्नि, विश्व की साक्षी, ने जनक-नंदिनी के सतीत्व को सिद्ध कर दिया।",
    english:
      "After Ravana's fall, in the midst of the assembly, Rama spoke harsh words to Sita: this war had been fought to avenge a family's honour, not out of longing for her; a wife who had endured so long beneath a stranger's roof must prove her purity before the world. Shattered, Sita bade Lakshmana raise a pyre: 'My lord has cast me off — fire itself is my refuge now.' She entered the blazing flames in utter surrender before a speechless assembly; and then Agni, the Fire-god, appeared in his own form, lifted Sita out unscorched, set her before Rama and testified before the gods: 'This woman has not sinned even in thought.' Rama then disclosed what he had never doubted — her stainlessness; the ordeal had been staged only to remove the world's suspicion. Fire, the cosmic witness, had sealed the chastity of Janaka's daughter.",
    spanish:
      "Tras la caída de Ravana, en medio de la asamblea, Rama dirigió a Sita palabras severas: esta guerra se había librado para vengar el honor de un linaje, no por anhelo de ella; la esposa que había vivido tanto bajo el techo de un extraño debía probar su pureza ante el mundo. Deshecha, Sita pidió a Lakshmana que levantara una pira: 'Mi señor me ha rechazado — el fuego mismo es ahora mi refugio.' Entró en las llamas encendidas en total entrega ante una asamblea muda; y entonces Agni, el dios del Fuego, apareció en su propia forma, alzó a Sita ilesa, la puso ante Rama y testificó delante de los dioses: 'Esta mujer no ha pecado ni siquiera en pensamiento.' Rama reveló entonces lo que jamás había dudado — su impecabilidad; la ordalía se había escenificado solo para disipar la sospecha del mundo. El fuego, testigo cósmico, había sellado la castidad de la hija de Janaka.",
    tags: ["agni pariksha", "sita", "fire ordeal", "agni deva", "अग्नि परीक्षा", "सीता", "अग्निदेव", "शुद्धि", "लोक मर्यादा", "purity"],
  },
];
