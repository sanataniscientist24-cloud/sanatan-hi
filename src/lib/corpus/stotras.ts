import type { CorpusEntry } from "./types";

/** Stotras, Chalisa, Mantras & Aartis. */
export const STOTRA_ENTRIES: CorpusEntry[] = [
  {
    id: "chalisa-full",
    kind: "stotra",
    bookId: "stotras",
    section: "Hanuman Chalisa — Tulsidas",
    sectionHi: "हनुमान चालीसा — गोस्वामी तुलसीदास",
    sanskrit:
      "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि। बरनउँ रघुबर बिमल जसु जो दायकु फल चारि॥ बुद्धिहीन तनु जानिके सुमिरौं पवन कुमार। बल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार॥\n\nजय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥\nराम दूत अतुलित बल धामा। अंजनि पुत्र पवनसुत नामा॥\nमहाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥\nकंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥\nहाथ बज्र औ ध्वजा बिराजै। काँधे मूँज जनेऊ साजै॥\nसंकर सुवन केसरीनंदन। तेज प्रताप महा जग बंदन॥\nविद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥\nप्रभु चरित सुनिबे को रसिया। राम लखन सीता मन बसिया॥\nसूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥\nभीम रूप धरि असुर संहारे। रामचन्द्र के काज सँवारे॥\nलाय संजीवन लखन जियाए। श्रीरघुबीर हरषि उर लाए॥\nरघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥\nसहस बदन तुम्हारो जस गावैं। अस कहि श्रीपति कन्ठ लगावैं॥\nसनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥\nजम कुबेर दिगपाल जहाँ ते। कबि कोबिद कहि सके कहाँ ते॥\nतुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥\nतुम्हारो मंत्र बिभीषन माना। लंकेस्वर भए सब जग जाना॥\nजुग सहस्र जोजन पर भानु। लील्यो ताहि मधुर फल जानू॥\nप्रभु मुद्रिका मेलि मुख माहीं। जालधि लाँघि गये अचरज नाहीं॥\nदुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥\nराम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥\nसब सुख लहै तुम्हारी सरना। तुम रख्छक काहू को डर ना॥\nआपन तेज सम्भारो आपै। तीनों लोक हाँक तें काँपै॥\nभूत पिशाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥\nनासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥\nसंकट तें हनुमान छुरावै। मन क्रम बचन ध्यान जो लावै॥\nअष्टसिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥\nराम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥\nतुम्हारे भजन राम को पावै। जनम जनम के दुख बिसरावै॥\nअंत काल रघुबर पुर जाई। जहाँ जनम हरिभक्त कहाई॥\nऔर देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥\nसंकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥\nजै जै जै हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥\nजो शत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥\nजो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥\nतुलसी दास सदा हरि चेरा। किजै नाथ हृदय महँ डेरा॥\n\nपवन तनय संकट हरन, मंगल मूरति रूप।\nराम लखन सीता सहित, हृदय बसहिँ सूर भूप॥",
    translit:
      "śrī guru charana saroja raja, nija manu mukuru sudhāri... jaya hanumāna jñāna guña sāgara, jaya kapīsa tihu loka ujāgara — rāma dūta atulita bala dhāmā, añjani putra pavanasuta nāmā... māhāvīra vikrama bajarangī, kumati nivāra sumati ke sangī... (40 chaupais + dohas — राम लखन सीता सहित हृदय बसहिँ सूर भूप)",
    hindi:
      "गोस्वामी तुलसीदास जी द्वारा रचित हनुमान चालीसा — विश्व में सर्वाधिक पढ़ी जाने वाली भक्ति-रचना। 40 चौपाइयों में श्रीहनुमान जी का परिचय है: ज्ञान-गुण का सागर, तीन लोकों का उजागरक, अतुलित बल का धाम, संकट-मोचन, नासै रोग हरै सब पीरा, जो सुमिरै हनुमत बलबीरा। बुद्धि, बल, विद्या और निरोग कामना से पढ़ी जाती है।",
    english:
      "The Hanuman Chalisa of Goswami Tulsidas — the most recited devotional hymn on earth. In forty chaupais it sings Hanuman's glory: ocean of wisdom and virtue, light of the three worlds, home of matchless strength, reliever of all afflictions — 'all ills vanish, every pain is destroyed, for whoever remembers the mighty son of the wind.' Recited for intellect, strength, learning and healing.",
    spanish:
      "El Hanuman Chalisa de Goswami Tulsidas — el himno devocional más recitado de la tierra. En cuarenta chaupais canta la gloria de Hanuman: océano de sabiduría y virtud, luz de los tres mundos, morada de una fuerza sin igual, aliviador de todas las aflicciones — 'toda enfermedad se desvanece, todo dolor es destruido, para quien recuerda al poderoso hijo del viento.' Se recita para el intelecto, la fuerza, el aprendizaje y la sanación.",
    tags: ["hanuman chalisa", "tulsidas", "40 chaupais", "हनुमान चालीसा", "तुलसीदास", "चालीसा", "संकटमोचन", "हनुमान", "famous", "hanuman"],
  },
  {
    id: "chalisa-budhihin",
    kind: "verse",
    bookId: "stotras",
    section: "Hanuman Chalisa · opening",
    sectionHi: "हनुमान चालीसा · आरम्भ",
    sanskrit:
      "बुद्धिहीन तनु जानिके सुमिरौं पवन कुमार। बल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार॥",
    translit:
      "buddhihīna tanu jānike sumirauṁ pavana kumāra, bala budhi bidyā dehu mohiṁ harahu kalesa bikāra",
    hindi:
      "मैं शरीर-मन को बुद्धि-हीन जानकर पवन-पुत्र हनुमान जी का स्मरण करता हूँ — वे बल, बुद्धि और विद्या दें और मेरे दुःख-दोष दूर करें। चालीसा का यह दोहा छात्रों का सर्वप्रिय वाक्य है।",
    english:
      "Knowing my body-mind to be wanting in wisdom, I remember the son of the wind — grant me strength, intellect and knowledge, and remove my afflictions. The most beloved couplet of the Chalisa, especially cherished by students.",
    spanish:
      "Sabiendo que mi cuerpo-mente carece de sabiduría, recuerdo al hijo del viento — concédeme fuerza, intelecto y conocimiento, y aparta mis aflicciones. El dístico más querido del Chalisa, especialmente atesorado por los estudiantes.",
    tags: ["buddhi", "vidya", "student prayer", "बुद्धिहीन", "बल बुधि विद्या", "छात्र", "स्मरण"],
  },
  {
    id: "chalisa-jap-nirantar",
    kind: "verse",
    bookId: "stotras",
    section: "Hanuman Chalisa",
    sectionHi: "हनुमान चालीसा",
    sanskrit:
      "नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥",
    translit:
      "nāsai roga harai saba pīrā, japata nirantara hanumata bīrā",
    hindi:
      "वीर हनुमान जी का निरंतर जप करने से रोग नष्ट होते हैं और समस्त पीड़ा हर ली जाती है।",
    english:
      "Diseases are destroyed and every pain is dispelled by ceaselessly repeating the name of the valiant Hanuman.",
    spanish:
      "Las enfermedades se destruyen y todo dolor se disipa al repetir sin cesar el nombre del valiente Hanuman.",
    tags: ["healing", "japa", "नासै रोग", "जप", "आरोग्य", "healing"],
  },
  {
    id: "ganesh-vakratunda",
    kind: "mantra",
    bookId: "stotras",
    section: "Ganesha Vandana",
    sectionHi: "श्रीगणेश वंदना",
    sanskrit:
      "वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    translit:
      "vakra-tuṇḍa mahā-kāya sūrya-koṭi-sama-prabha, nirvighnaṁ kuru me deva sarva-kāryeṣu sarvadā",
    hindi:
      "हे वक्रतुण्ड (मोड़ी सूँड वाले) महाकाय (विशाल शरीर वाले) देव! जो कोटि सूर्यों के समान प्रभामय हैं — मेरे समस्त कार्यों में सदा निर्विघ्नता दें। शुभ-आरम्भ का मंगल मंत्र।",
    english:
      "O curved-trunked, colossal Lord, radiant as ten million suns — remove all obstacles from my undertakings, always. The auspicious mantra of new beginnings.",
    spanish:
      "Oh Señor colosal de la trompa curva, radiante como diez millones de soles — aparta siempre todos los obstáculos de mis empresas. El mantra auspicioso de los nuevos comienzos.",
    tags: ["ganesha", "obstacles", "vakratunda", "गणेश", "वक्रतुण्ड", "निर्विघ्न", "शुभ आरम्भ", "beginnings"],
  },
  {
    id: "ganesh-shuklambara",
    kind: "verse",
    bookId: "stotras",
    section: "Ganesha Dhyana Shloka",
    sectionHi: "गणेश ध्यान श्लोक",
    sanskrit:
      "शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम्। प्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये॥",
    translit:
      "śuklāmbara-dharaṁ viṣṇuṁ śaśi-varṇaṁ catur-bhujam, prasanna-vadanaṁ dhyāyet sarva-vighnopa-śāntaye",
    hindi:
      "श्वेत वस्त्र धारण करते, चंद्रमा के समान गौर वर्ण वाले, चार भुजाओं वाले और प्रसन्न मुख वाले विनायक का ध्यान करें — समस्त विघ्नों की शान्ति के लिए। हर शुभ कार्य से पहले विनायक-स्मरण।",
    english:
      "One meditates on Vinayaka clad in white, moon-complexioned, four-armed and serenely faced, for the pacification of every obstacle — the first remembrance before every auspicious act.",
    spanish:
      "Se medita en Vinayaka, vestido de blanco, de tez lunar, de cuatro brazos y rostro sereno, para la pacificación de todo obstáculo — el primer recuerdo antes de cada acto auspicioso.",
    tags: ["ganesha", "dhyana", "vinayaka", "गणेश ध्यान", "विनायक", "शुक्लाम्बर", "prayer before work"],
  },
  {
    id: "ganesh-beej",
    kind: "mantra",
    bookId: "stotras",
    section: "Ganesha Beej Mantra",
    sectionHi: "गणेश बीज मंत्र",
    sanskrit: "ॐ गं गणपतये नमः",
    translit: "oṁ gaṁ gaṇapataye namaḥ",
    hindi:
      "ॐ गं गणपतये नमः — गणों के स्वामी गणपति को नमस्कार। मंगल-आरम्भ, विद्या-प्राप्ति और विघ्न-नाश का बीज-मंत्र।",
    english:
      "Om Gam Ganapataye Namah — salutations to the lord of hosts. The seed-mantra for auspicious beginnings, learning and the removal of obstacles.",
    spanish:
      "Om Gam Ganapataye Namah — salutaciones al señor de las huestes. El mantra-semilla para los comienzos auspiciosos, el aprendizaje y la remoción de los obstáculos.",
    tags: ["ganesh beej", "gam", "गणपति", "बीज मंत्र", "जप"],
  },
  {
    id: "devi-ya-devi",
    kind: "stotra",
    bookId: "stotras",
    section: "Devi Stuti (Durga Saptashati)",
    sectionHi: "देवी स्तुति (दुर्गा सप्तशती)",
    sanskrit:
      "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
    translit:
      "yā devī sarva-bhūteṣu śakti-rūpeṇa saṁsthitā, namas tasyai namas tasyai namas tasyai namo namaḥ",
    hindi:
      "जो देवी समस्त प्राणियों में शक्ति के रूप में स्थित हैं — उन दुर्गा को बार-बार नमस्कार। देवी-उपासना का सबसे रहस्यमयी और प्रिय स्तुति-सूत्र: शक्ति केवल मंदिर में नहीं, प्रत्येक कण में है।",
    english:
      "To that Devi who abides in all beings as power — salutations, salutations, salutations again and again. The most beloved verse of Goddess worship: Shakti lives not only in the shrine but in every particle of existence.",
    spanish:
      "A aquella Devi que mora en todos los seres como poder — salutaciones, salutaciones, salutaciones una y otra vez. El verso más querido del culto a la Diosa: Shakti no vive solo en el santuario, sino en cada partícula de la existencia.",
    tags: ["devi", "shakti", "durga", "या देवी", "शक्ति", "दुर्गा", "नवरात्रि", "famous", "goddess"],
  },
  {
    id: "devi-durga-mantra",
    kind: "mantra",
    bookId: "stotras",
    section: "Durga Beej Mantra",
    sectionHi: "दुर्गा बीज मंत्र",
    sanskrit: "ॐ दुं दुर्गायै नमः",
    translit: "oṁ duṁ durgāyai namaḥ",
    hindi:
      "ॐ दुं दुर्गायै नमः — दुर्ग (संकट) को दूर करने वाली माँ दुर्गा को नमस्कार। संकट-नाश और रक्षा-कवच का मंत्र।",
    english:
      "Om Dum Durgayai Namah — salutations to Mother Durga, who carries across every fortress of distress. The mantra of protection and the removal of danger.",
    spanish:
      "Om Dum Durgayai Namah — salutaciones a la Madre Durga, que nos conduce a través de toda fortaleza de aflicción. El mantra de la protección y la remoción del peligro.",
    tags: ["durga mantra", "protection", "दुर्गा मंत्र", "रक्षा", "दुं", "sankat"],
  },
  {
    id: "devi-lakshmi-mantra",
    kind: "mantra",
    bookId: "stotras",
    section: "Lakshmi Beej Mantra",
    sectionHi: "लक्ष्मी बीज मंत्र",
    sanskrit: "ॐ श्रीं महालक्ष्म्यै नमः",
    translit: "oṁ śrīṁ mahā-lakṣmyai namaḥ",
    hindi:
      "ॐ श्रीं महालक्ष्म्यै नमः — समृद्धि-स्वरूपा महालक्ष्मी को नमस्कार। श्री-वृद्धि, ऐश्वर्य और सकारात्मकता का बीज-मंत्र।",
    english:
      "Om Shreem Mahalakshmyai Namah — salutations to Mahalakshmi, the embodiment of prosperity. The seed-syllable of abundance, wealth and positivity.",
    spanish:
      "Om Shreem Mahalakshmyai Namah — salutaciones a Mahalakshmi, la encarnación de la prosperidad. La sílaba-semilla de la abundancia, la riqueza y la positividad.",
    tags: ["lakshmi", "shreem", "wealth", "लक्ष्मी", "श्रीं", "समृद्धि", "धन"],
  },
  {
    id: "devi-saraswati",
    kind: "stotra",
    bookId: "stotras",
    section: "Saraswati Vandana",
    sectionHi: "सरस्वती वंदना",
    sanskrit:
      "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता। या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना॥ या ब्रह्माच्युतशंकरप्रभृतिभिर्देवैः सदा वन्दिता। सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥",
    translit:
      "yā kunda-endu-tuṣāra-hāra-dhavalā yā śubhra-vastrāvṛtā, yā vīṇā-vara-daṇḍa-maṇḍita-karā yā śveta-padmāsanā — yā brahmācyuta-śaṅkara-prabhṛtibhir devaiḥ sadā vanditā, sā māṁ pātu sarasvatī bhagavatī niḥśeṣa-jāḍyāpahā",
    hindi:
      "जो देवी कुमुद-कुसुम, चंद्र, हिम-राशि और मोती के हार जैसी धवल हैं, शुभ्र वस्त्र पहनती हैं, वीणा-वर-दण्ड से युक्त हाथों वाली हैं, श्वेत कमल पर आसीन हैं और ब्रह्मा-विष्णु-शंकर आदि देवों द्वारा सदा वंदित हैं — वही भगवती सरस्वती हमारी रक्षा करें और अज्ञान-जड़ता को हर लें। विद्या-प्राप्ति का सर्वप्रिय स्तोत्र।",
    english:
      "White as the jasmine, the moon, an icicle and a string of pearls; robed in purity, her hands gracing the veena and blessing; seated on the white lotus; eternally worshipped by Brahma, Vishnu and Shiva — may that supreme Saraswati protect me and remove all ignorance. The most beloved prayer for learning.",
    spanish:
      "Blanca como el jazmín, la luna, un carámbano y una sarta de perlas; vestida de pureza, con las manos engalanando la veena y bendiciendo; sentada sobre el loto blanco; eternamente adorada por Brahma, Vishnu y Shiva — que esa suprema Saraswati me proteja y disipe toda ignorancia. La plegaria más querida para el aprendizaje.",
    tags: ["saraswati", "knowledge", "veena", "सरस्वती", "या कुन्देन्दु", "वीणा", "विद्या", "students", "famous"],
  },
  {
    id: "mahamantra",
    kind: "mantra",
    bookId: "stotras",
    section: "Hare Krishna Mahamantra",
    sectionHi: "हरे कृष्ण महामंत्र",
    sanskrit:
      "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥",
    translit:
      "hare kṛṣṇa hare kṛṣṇa kṛṣṇa kṛṣṇa hare hare, hare rāma hare rāma rāma rāma hare hare",
    hindi:
      "हरे कृष्ण महामंत्र — कलियुग में सर्वश्रेष्ठ साधन बताया गया मंत्र (कलिसंतरण उपनिषद्): 16 नामों-शब्दों का जप हृदय-शुद्धि और परम-प्रेम-प्राप्ति का सर्व-सुलभ द्वार है। 'हरे' — ऊर्जा (राधा/सीता), 'कृष्ण' — सर्वाकर्षक परमात्मा, 'राम' — परम-आनन्द-स्रोत।",
    english:
      "The Hare Krishna Mahamantra — declared the supreme means for the age of Kali (Kalisantarna Upanishad). Sixteen words whose chanting is the simplest gate to purification and divine love: 'Hare' — the divine energy; 'Krishna' — the all-attractive Lord; 'Rama' — the reservoir of joy.",
    spanish:
      "El Hare Krishna Mahamantra — declarado el medio supremo para la era de Kali (Kalisantarna Upanishad). Dieciséis palabras cuyo canto es la puerta más sencilla a la purificación y el amor divino: 'Hare' — la energía divina; 'Krishna' — el Señor todo-atractivo; 'Rama' — el manantial de la alegría.",
    tags: ["mahamantra", "hare krishna", "chanting", "हरे कृष्ण", "महामंत्र", "जप", "kaliyuga", "famous", "chant"],
  },
  {
    id: "aarti-jagdish",
    kind: "stotra",
    bookId: "stotras",
    section: "Om Jai Jagadish Hare · Aarti",
    sectionHi: "ॐ जय जगदीश हरे · आरती",
    sanskrit:
      "ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।\nभक्त जनों के संकट, क्षण में दूर करे॥\nजो ध्यावे फल पावे, दुख बिनसे मन का।\nसुख सम्पत्ति घर आवे, कष्ट मिटे तन का॥\nमाता पिता तुम मेरे, शरण गहूँ तुम्हारी।\nविपति में तुम ही सहारे, कोई नहिं तुम्हारा॥\nविषय विकार मिटावो, पाप हरो देवा।\nश्रद्धा भक्ति बढ़ावो, संतन की सेवा॥",
    translit:
      "oṁ jaya jagadīśa hare, svāmī jaya jagadīśa hare, bhakta janoṁ ke saṅkaṭa, kṣaṇa meṁ dūra kare...",
    hindi:
      "ॐ जय जगदीश हरे — विश्व की सर्वाधिक गाई जाने वाली आरती। 'हे जगत के स्वामी! भक्तों के संकट क्षण-भर में मिटा देने वाले, जो ध्यान करे उसे फल मिलता है, मन का दुःख बिनस जाता है।' तुम मेरे माता-पिता हो, विपत्ति में तुम्हीं सहारा हो — यह रहस्यमय आरती संध्या-पूजा का समापन है।",
    english:
      "Om Jai Jagadish Hare — the most sung aarti of the world. 'Victory to the Lord of the universe, who removes the devotee's afflictions in an instant; whoever meditates on Him receives the fruit, and sorrow perishes.' You are my mother and father, my only refuge in adversity — with this mystic prayer ends every evening worship.",
    spanish:
      "Om Jai Jagadish Hare — la aarti más cantada del mundo. 'Victoria al Señor del universo, que elimina en un instante las aflicciones del devoto; quien medita en Él recibe el fruto, y la pena perece.' Tú eres mi madre y mi padre, mi único refugio en la adversidad — con esta mística plegaria concluye todo culto vespertino.",
    tags: ["aarti", "jagadish", "evening prayer", "आरती", "जगदीश", "पूजा", "evening", "famous"],
  },
  {
    id: "krishna-mantra",
    kind: "mantra",
    bookId: "stotras",
    section: "Krishna Ashtakshari",
    sectionHi: "कृष्ण अष्टाक्षरी मंत्र",
    sanskrit: "ॐ नमो भगवते वासुदेवाय",
    translit: "oṁ namo bhagavate vāsudevāya",
    hindi:
      "ॐ नमो भगवते वासुदेवाय — वासुदेव (कृष्ण) को नमस्कार। चारों वेदों का सार कहा गया अष्टाक्षरी मंत्र: 'अहं भगवत्-स्वरूप को प्रणाम करता हूँ।' ध्रुव ने इसी के जप से विष्णु-दर्शन पाया।",
    english:
      "Om Namo Bhagavate Vasudevaya — salutations to Vasudeva (Krishna). The eight-syllabled mantra called the essence of all four Vedas. It was by its japa that the child Dhruva attained the vision of Vishnu.",
    spanish:
      "Om Namo Bhagavate Vasudevaya — salutaciones a Vasudeva (Krishna). El mantra de ocho sílabas, llamado la esencia de los cuatro Vedas. Fue mediante su japa que el niño Dhruva alcanzó la visión de Vishnu.",
    tags: ["krishna mantra", "ashtakshari", "वासुदेवाय", "ध्रुव", "जप", "अष्टाक्षरी"],
  },
  {
    id: "rama-mantra",
    kind: "mantra",
    bookId: "stotras",
    section: "Rama Taraka Mantra",
    sectionHi: "राम तारक मंत्र",
    sanskrit: "श्री राम जय राम जय जय राम",
    translit: "śrī rāma jaya rāma jaya jaya rāma",
    hindi:
      "श्री राम जय राम जय जय राम — तारक मंत्र, जो संसार-सागर से तारता है। 'राम' शब्द में ही 24 देवताओं का निवास माना गया है; संकट-नाश और मन-शान्ति हेतु सबसे सरल उपासना।",
    english:
      "Shri Ram Jai Ram Jai Jai Ram — the taraka mantra that carries across the ocean of worldly existence. The single word 'Rama' is held to contain the presence of the gods themselves: the simplest sadhana for peace and the removal of distress.",
    spanish:
      "Shri Ram Jai Ram Jai Jai Ram — el mantra taraka que lleva a través del océano de la existencia mundana. La sola palabra 'Rama' se considera que contiene la presencia de los propios dioses: la sadhana más sencilla para la paz y la remoción de la angustia.",
    tags: ["rama mantra", "taraka", "राम जय राम", "तारक", "जप", "peace"],
  },
  {
    id: "aditya-1",
    kind: "stotra",
    bookId: "stotras",
    section: "Aditya Hridayam · opening",
    sectionHi: "आदित्य हृदयम् · आरम्भ",
    sanskrit:
      "ततो युद्धपरिष्रान्तं समरे चिन्तया स्थितम् । रावणं दृष्ट्वा संक्रुद्धमरिमर्दनातुष्टितः ॥ राम राम महाबाहो श्रृणु गुह्यं सनातनम् ॥",
    translit:
      "tato yuddha-pariṣrāntaṁ samare cintayā sthitam, rāvaṇaṁ dṛṣṭvā saṅkruddhaṁ arimardanātuṣṭitaḥ — rāma rāma mahābāho śṛṇu guhyam sanātanam",
    hindi:
      "वाल्मीकि रामायण (युद्धकाण्ड) का अमर सूर्य-स्तोत्र — युद्ध से थके, चिन्ता में डूबे श्रीराम को क्रोधित रावण को देखकर अगस्त्य ऋषि ने सनातन गुह्य कहा: 'हे महाबाहो राम! सूर्य के हृदय — आदित्य हृदय — का उपदेश सुनो।' इसके जप से शत्रु नष्ट होते हैं, विजय, आरोग्य और निर्भयता की प्राप्ति होती है — फल-श्रुति में वर्णित है कि इसी स्तोत्र के जप से राम ने रावण का वध किया। सूर्य-उपासना का सर्वाधिक प्रसिद्ध स्तोत्र, प्रातः-पूजा में नित्य गाया जाता है।",
    english:
      "The immortal hymn to the Sun from Valmiki's Ramayana (Yuddha Kanda) — seeing battle-weary Rama sunk in thought before the enraged Ravana, the sage Agastya imparted the eternal secret: 'O Rama of mighty arms, hear the heart of the Sun — the Aditya Hridaya.' Its japa destroys enemies and grants victory, health and fearlessness; the phala-shruti recounts that by this hymn Rama slew Ravana. The most famous of all Surya stotras, sung daily at morning worship.",
    spanish:
      "El inmortal himno al Sol del Ramayana de Valmiki (Yuddha Kanda) — al ver a Rama, agotado por la batalla, sumido en el pensamiento ante el furioso Ravana, el sabio Agastya le confió el secreto eterno: 'Oh Rama de poderosos brazos, escucha el corazón del Sol — el Aditya Hridaya.' Su japa destruye a los enemigos y otorga victoria, salud e intrepidez; el phala-shruti relata que mediante este himno Rama mató a Ravana. El más famoso de los estotras al Sol, cantado a diario en el culto matutino.",
    tags: ["aditya hridayam", "surya", "ramayana", "आदित्य हृदय", "सूर्य", "अगस्त्य", "युद्धकाण्ड", "victory", "sun god", "famous"],
  },
  {
    id: "surya-namaskara-1",
    kind: "mantra",
    bookId: "stotras",
    section: "Surya Namaskara Mantras · 12 names",
    sectionHi: "सूर्य नमस्कार मंत्र · १२ नाम",
    sanskrit:
      "मित्राय नमः । रवये नमः । सूर्याय नमः । भानवे नमः । खगाय नमः । पूष्णे नमः । हिरण्यगर्भाय नमः । मारिचये नमः । आदित्याय नमः । सवित्रे नमः । अर्काय नमः । भास्कराय नमः ॥",
    translit:
      "mitrāya namaḥ, ravaye namaḥ, sūryāya namaḥ, bhānave namaḥ, khagāya namaḥ, puṣṇe namaḥ, hiraṇyagarbhāya namaḥ, māricaye namaḥ, ādityāya namaḥ, savitre namaḥ, arkāya namaḥ, bhāskarāya namaḥ",
    hindi:
      "सूर्य-नमस्कार के बारह वैदिक मंत्र — प्रत्येक आसन के साथ एक नाम: मित्र (मित्र-रूप), रवि, सूर्य, भानु, खग (आकाश में विचरणशील), पूषन (पोषणकर्ता), हिरण्यगर्भ (स्वर्ण-गर्भ), मारीचि, आदित्य, सविता, अर्क और भास्कर — सूर्य के बारह विलक्षण स्वरूप। शारीरिक योग और मंत्र-जप का सुंदरतम संगम; प्रातःकालीन साधना का प्राण।",
    english:
      "The twelve Vedic mantras of Surya Namaskara — one name with each posture: Mitra the friend, Ravi, Surya, Bhanu, Khaga who moves through the sky, Pushan the nourisher, Hiranyagarbha the golden womb, Marichi, Aditya, Savita, Arka and Bhaskara — twelve facets of the one Sun. The loveliest wedding of bodily yoga and mantra-japa; the very breath of morning sadhana.",
    spanish:
      "Los doce mantras védicos del Surya Namaskara — un nombre por cada postura: Mitra el amigo, Ravi, Surya, Bhanu, Khaga el que se mueve por el cielo, Pushan el nutridor, Hiranyagarbha el vientre dorado, Marichi, Aditya, Savita, Arka y Bhaskara — doce facetas del único Sol. El más bello matrimonio del yoga corporal con el japa de mantras; el aliento mismo de la práctica matutina.",
    tags: ["surya namaskara", "12 names", "मित्राय नमः", "सूर्य नमस्कार", "भास्कराय", "सूर्य", "sun salutation", "yoga", "morning prayer"],
  },
  {
    id: "shri-suktam-1",
    kind: "stotra",
    bookId: "stotras",
    section: "Shri Suktam · opening",
    sectionHi: "श्री सूक्तम् · आरम्भ",
    sanskrit:
      "हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम् । चन्द्रां हिरण्यमयीं लक्ष्मीं जातवेदो ममाहर ॥",
    translit:
      "hiraṇya-varṇāṁ harinīṁ suvarṇa-rajata-srajām, candrāṁ hiraṇmayīṁ lakṣmīṁ jātavedo mama āhara",
    hindi:
      "श्री सूक्तम् का आरम्भिक मंत्र — ऋग्वेद की खिल-सूक्त परंपरा की लक्ष्मी-स्तुति: 'हे जातवेदो (वेदों के जनक अग्नि)! उस लक्ष्मी को मेरे पास ले आओ जो स्वर्ण-वर्ण है, हरिण-की-भाँति कोमल-चंचल है, स्वर्ण-रजत की माला धारण करती है और चंद्रमा-सी प्रसन्न, सोने-सी निर्मल है।' लक्ष्मी-पूजन, दीपावली और समृद्धि-साधना का प्रसिद्ध वैदिक मंत्र — बाहरी ऐश्वर्य के साथ आंतरिक श्री-संपन्नता भी माँगता है।",
    english:
      "The opening mantra of the Shri Suktam — the hymn to Lakshmi from the Rig Veda's khila tradition: 'O Jataveda (fire, knower of all births), bring to me that Lakshmi of golden hue, gentle and swift as the doe, garlanded with gold and silver, moon-radiant and pure as gold.' The celebrated Vedic mantra of Lakshmi worship, Diwali and prosperity-sadhana — asking not only outer wealth but the inner fullness of Shri.",
    spanish:
      "El mantra de apertura del Shri Suktam — el himno a Lakshmi de la tradición khila del Rig Veda: 'Oh Jataveda (fuego, conocedor de todos los nacimientos), tráeme a esa Lakshmi de tez dorada, suave y veloz como la cierva, enjoyada con guirnaldas de oro y plata, radiante como la luna y pura como el oro.' El célebre mantra védico del culto a Lakshmi, de Diwali y de la sadhana de la prosperidad — que pide no solo la riqueza externa sino la plenitud interior de Shri.",
    tags: ["shri suktam", "lakshmi", "prosperity", "हिरण्यवर्णां", "श्री सूक्त", "लक्ष्मी", "समृद्धि", "diwali", "vedic", "abundance"],
  },
  {
    id: "mahishasura-mardini-1",
    kind: "stotra",
    bookId: "stotras",
    section: "Mahishasura Mardini Stotra · opening",
    sectionHi: "महिषासुरमर्दिनी स्तोत्र · आरम्भ",
    sanskrit: "अयि गिरिनन्दिनि नन्दितमेदिनि । महिषासुरमर्दिनि ॥",
    translit: "ayi giri-nandinī nandita-medini — mahiṣāsura-mardinī",
    hindi:
      "शक्त-परंपरा का विश्व-प्रसिद्ध स्तोत्र — 'हे गिरि-नन्दिनि! हे मेदिनी को नन्दित करने वाली! हे महिषासुर का मर्दन करने वाली माँ!' दुर्गा की महिषासुर पर विजय (देवी-माहात्म्य की कथा) का गेय वर्णन, जिसका धृत-वाक्य 'महिषासुरमर्दिनि' ही नाम बन गया। महालय की भोर में लगभग सौ वर्षों से रेडियो से प्रसारित यह स्तुति नवरात्रि-पक्ष का आह्वान है — बंगाल की सुबह इसी से जागती है।",
    english:
      "The world-famous hymn of the Shakta tradition — 'O daughter of the mountain, O you who delight the earth, O crusher of the buffalo-demon Mahisha!' A lyrical celebration of Durga's victory over Mahishasura (the story of the Devi Mahatmya), whose refrain 'Mahishasura Mardini' became the hymn's very name. Broadcast on Mahalaya dawn for nearly a century, it is the summons of the Navaratri fortnight — Bengal's morning awakens to it.",
    spanish:
      "El himno mundialmente célebre de la tradición Shakta — '¡Oh hija de la montaña, oh tú que alegras la tierra, oh trituradora del demonio búfalo Mahisha!' Una celebración lírica de la victoria de Durga sobre Mahishasura (la historia del Devi Mahatmya), cuyo estribillo 'Mahishasura Mardini' se volvió el nombre mismo del himno. Transmitido en el alba de Mahalaya desde hace casi un siglo, es el llamado de la quincena de Navaratri — la mañana de Bengala despierta con él.",
    tags: ["mahishasura mardini", "durga", "navaratri", "महिषासुरमर्दिनि", "दुर्गा", "अयि गिरिनन्दिनि", "mahalaya", "devi", "शक्ति"],
  },
  {
    id: "narasimha-1",
    kind: "mantra",
    bookId: "stotras",
    section: "Narasimha Mantra",
    sectionHi: "नृसिंह मंत्र",
    sanskrit:
      "उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम् । नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम् ॥",
    translit:
      "ugraṁ vīraṁ mahā-viṣṇuṁ jvalantaṁ sarvato-mukham, nṛ-siṁhaṁ bhīṣaṇaṁ bhadraṁ mṛtyu-mṛtyuṁ namāmy aham",
    hindi:
      "'मैं नमस्कार करता हूँ उस नृसिंह को — जो उग्र और वीर, महाविष्णु-स्वरूप, समस्त दिशाओं में ज्वलंत, भयंकर और भद्र (कल्याणकारी) हैं — मृत्यु की मृत्यु हैं।' भक्त प्रह्लाद की रक्षा का स्मरण कराने वाला यह प्रसिद्ध मंत्र भय-नाश और अभय-प्राप्ति के लिए जपा जाता है।",
    english:
      "'I bow to Narasimha — the fierce and the heroic, the great Vishnu himself, blazing on every side, terrible and auspicious at once, the very death of death.' The celebrated mantra recalling the rescue of the devotee Prahlada, chanted for the removal of fear and the gift of fearlessness.",
    spanish:
      "'Me inclino ante Narasimha — el feroz y el heroico, el propio Vishnu supremo, ardiente en todas las direcciones, terrible y auspicioso a la vez, la muerte misma de la muerte.' El célebre mantra que recuerda el rescate del devoto Prahlada, recitado para disipar el miedo y otorgar intrepidez.",
    tags: ["narasimha", "ugram viram", "नृसिंह", "उग्रं वीरं", "प्रह्लाद", "मृत्युमृत्युं", "vishnu", "protection", "fear removal"],
  },
  {
    id: "rama-namavali-1",
    kind: "mantra",
    bookId: "stotras",
    section: "Rama Namavali Mantra",
    sectionHi: "राम नामावली मंत्र",
    sanskrit:
      "रामाय रामभद्राय रामचन्द्राय वेधसे । राघुनाथाय नाथाय सीतायाः पतये नमः ॥",
    translit:
      "rāmāya rāma-bhadrāya rāma-candrāya vedhase, rāghu-nāthāya nāthāya sītāyāḥ pataye namaḥ",
    hindi:
      "राम-नाम की प्रिय नामावली — 'रामाय, रामभद्राय, रामचन्द्राय वेधसे (सृष्टि के धाम को), राघुनाथाय, नाथाय, सीता-पति को नमस्कार।' षोडशाक्षरी राम-मंत्र के रूप में प्रसिद्ध यह नामावली रामनवमी और नित्य राम-जप का अंग है; अनुष्ठुप छंद की लय में गाई जाती है।",
    english:
      "The beloved namavali of Rama's names — 'Salutations to Rama, to Rama the all-auspicious, to Ramachandra the glory of the creator, to the Lord of the Raghus, to the Lord of lords, to the husband of Sita.' Famous as a sixteen-syllable Rama-mantra, it graces Ramanavami and the daily japa of Rama's name.",
    spanish:
      "La amada namavali de los nombres de Rama — 'Salutaciones a Rama, al auspicioso Rama, a Ramachandra gloria del creador, al Señor de los Raghus, al Señor de señores, al esposo de Sita.' Famosa como mantra de dieciséis sílabas de Rama, adorna el Ramanavami y el japa diario del nombre de Rama.",
    tags: ["rama namavali", "रामाय रामभद्राय", "राम नाम", "रामनवमी", "राम", "namavali", "japa", "ramanavami"],
  },
  {
    id: "hanuman-dhyana-1",
    kind: "verse",
    bookId: "stotras",
    section: "Hanuman Dhyana Shloka",
    sectionHi: "हनुमान ध्यान श्लोक",
    sanskrit:
      "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम् । वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये ॥",
    translit:
      "manojavam māruta-tulya-vegaṁ jitendriyaṁ buddhimatāṁ variṣṭham, vātātmajam vānara-yūtha-mukhyaṁ śrī-rāma-dūtaṁ śaraṇaṁ prapadye",
    hindi:
      "'मैं शरण ग्रहण करता हूँ उस श्रीराम-दूत की — जो मन के समान वेग से दौड़ते हैं, वायु के समान गतिशील हैं, इंद्रियों को जीत चुके हैं, बुद्धिमानों में श्रेष्ठ हैं, वायु के पुत्र और वानर-सेना के मुख्य सेनापति हैं।' हनुमान-चालीसा, सुन्दरकाण्ड या हनुमान-उपासना से पहले ध्यान हेतु बोला जाने वाला प्रसिद्ध श्लोक।",
    english:
      "'I take refuge in the messenger of Shri Rama — swift as the mind, matching the wind in speed, conqueror of the senses, foremost among the wise, son of the wind and general of the vanara host.' The classic dhyana-shloka recited before the Hanuman Chalisa, Sundara Kanda parayana or any worship of Hanuman.",
    spanish:
      "'Me refugio en el mensajero de Shri Rama — veloz como la mente, tan rápido como el viento, conquistador de los sentidos, el primero entre los sabios, hijo del viento y general de las huestes vanara.' El clásico dhyana-shloka recitado antes del Hanuman Chalisa, de la lectura del Sundara Kanda o de cualquier culto a Hanuman.",
    tags: ["hanuman dhyana", "manojavam", "मनोजवं", "हनुमान ध्यान", "हनुमान", "राम दूत", "सुन्दरकाण्ड", "jai hanuman"],
  },
  {
    id: "madhurashtakam-1",
    kind: "stotra",
    bookId: "stotras",
    section: "Madhurashtakam · verse 1",
    sectionHi: "मधुराष्टकम् · प्रथम पद",
    sanskrit:
      "अधरं मधुरं वदनं मधुरं नयनं मधुरं हसितं मधुरम् । हृदयं मधुरं गमनं मधुरं मधुराधिपतेरखिलं मधुरम् ॥",
    translit:
      "adharaṁ madhuraṁ, vadanaṁ madhuraṁ, nayanaṁ madhuraṁ, hasitaṁ madhuram — hṛdayaṁ madhuraṁ, gamanaṁ madhuraṁ, madhurādhipater akhilaṁ madhuram",
    hindi:
      "वल्लभाचार्य-विरचित मधुराष्टकम् का प्रथम पद — 'मधुर हैं अधर, मुख, नयन, हास, हृदय और चाल; व्रजाधिपति श्रीकृष्ण का समस्त कुछ मधुर है।' आठ पदों में कृष्ण का नाम, रूप, गुण, वेश, वंदन, समीरन, वचन और क्रीड़ा — सब कुछ एक ही 'मधुर' विशेषण में घुल जाता है। शास्त्रीय गायन और भक्ति-संगीत का अति-प्रिय पद।",
    english:
      "The first verse of Vallabhacharya's Madhurashtakam — 'Sweet are His lips, His face, His eyes, His smile, His heart and His gait: everything of the Lord of sweetness is sweet.' In eight verses, Krishna's name, form, virtues, attire, offerings, the breeze around Him, His words and His play — all dissolve into the single adjective madhura. A darling of classical and devotional music.",
    spanish:
      "El primer verso del Madhurashtakam de Vallabhacharya — 'Dulces son Sus labios, Su rostro, Sus ojos, Su sonrisa, Su corazón y Su caminar: todo del Señor de la dulzura es dulce.' En ocho versos, el nombre, la forma, las virtudes, el atuendo, las ofrendas, la brisa a Su alrededor, las palabras y el juego de Krishna — todo se disuelve en el único adjetivo madhura. Predilecto de la música clásica y devocional.",
    tags: ["madhurashtakam", "vallabhacharya", "krishna", "मधुराष्टकम", "वल्लभाचार्य", "मधुरम्", "कृष्ण", "vraja", "bhakti"],
  },
  {
    id: "bhaja-govindam-1",
    kind: "stotra",
    bookId: "stotras",
    section: "Bhaja Govindam · verse 1 & refrain",
    sectionHi: "भज गोविन्दम् · आरम्भ एवं धृत-पंक्ति",
    sanskrit:
      "मूढ जहीहि धनागमतृष्णां कुरु सद्बुद्धिं मनसि वितृष्णाम् । यल्लभसे निजकर्मोपात्तं वित्तं तेन विनोदय चित्तम् ॥ भज गोविन्दं भज गोविन्दं गोविन्दं भज मूढमते । सम्प्राप्ते सन्निहिते काले नहि नहि रक्षति डुकृञ्करणे ॥",
    translit:
      "mūḍha jahīhi dhanāgama-tṛṣṇāṁ, kuru sad-buddhiṁ manasi vitṛṣṇām, yallabhase nija-karmopāttaṁ vittam tena vinodaya cittam — bhaja govindaṁ bhaja govindaṁ govindaṁ bhaja mūḍha-mate, samprāpte sannihite kāle nahi nahi rakṣati ḍukṛñ karaṇe",
    hindi:
      "आदि शंकराचार्य का विख्यात 'भज गोविन्दम्' (मोह-मुद्गर) — 'हे मूढ़! धन की तृष्णा त्याग दे; मन में शुद्ध बुद्धि धारण कर। अपने कर्म से जो कुछ मिले, उसी से चित्त को विनोदित (संतुष्ट) रख।' और धृत-पंक्ति — 'काल के समीप आ पहुँचने पर व्याकरण का डुकृञ्-कारक नहीं बचाएगा — गोविन्द को भजो!' कथा है कि काशी में शंकर ने पण्डित को यांत्रिक ढंग से व्याकरण रटते देख यही रचा था — ज्ञान-वैराग्य का अमर गीत।",
    english:
      "Adi Shankaracharya's famous Bhaja Govindam (the 'Moha Mudgara') — 'Fool, abandon the thirst for acquiring wealth; create in your mind pure discrimination. With whatever comes by your own karma, therewith delight your heart.' And the refrain: 'When the appointed hour stands near, the grammatical endings ḍukṛñ karaṇe will not save you — worship Govinda!' Tradition says Shankara composed it on seeing a pundit in Kashi mechanically reciting grammar — the immortal song of wisdom and dispassion.",
    spanish:
      "El célebre Bhaja Govindam (el 'Moha Mudgara') de Adi Shankaracharya — 'Necio, abandona la sed de acumular riquezas; crea en tu mente la recta comprensión. Con lo que llegue por tu propio karma, con eso alegra tu corazón.' Y el estribillo: 'Cuando la hora señalada se acerque, las desinencias gramaticales ḍukṛñ karaṇe no te salvarán — ¡adora a Govinda!' La tradición dice que Shankara lo compuso al ver en Kashi a un pandit recitando mecánicamente la gramática — la canción inmortal de la sabiduría y el desapego.",
    tags: ["bhaja govindam", "adi shankaracharya", "moha mudgara", "भज गोविन्दम्", "आदि शंकराचार्य", "मूढमते", "वैराग्य", "kashi", "famous"],
  },
  {
    id: "annapurna-1",
    kind: "stotra",
    bookId: "stotras",
    section: "Annapurna Stotra · key verses",
    sectionHi: "अन्नपूर्णा स्तोत्र · प्रमुख श्लोक",
    sanskrit:
      "अन्नपूर्णे सदापूर्णे शंकरप्राणवल्लभे । ज्ञानवैराग्यसिद्ध्यर्थं भिक्षां देहि च पार्वती ॥ माता च पार्वती देवी पिता देवो महेश्वरः । बन्धवः शिवभक्ताश्च स्वदेशो भुवनत्रयम् ॥",
    translit:
      "annapūrṇe sadā-pūrṇe śaṅkara-prāṇa-vallabhe, jñāna-vairāgya-siddhy-arthaṁ bhikṣāṁ dehi ca pārvatī — mātā ca pārvatī devī pitā devo maheśvaraḥ, bandhavaḥ śiva-bhaktāś ca sva-deśo bhuvana-trayam",
    hindi:
      "काशी-विराजमान अन्नपूर्णा देवी के स्तोत्र (परंपरा में आदि शंकराचार्य-रचित) के दो सुविख्यात श्लोक — 'हे अन्नपूर्णे! हे सदा पूर्णे! हे शंकर के प्राणों की प्रिये पार्वती! ज्ञान और वैराग्य की सिद्धि के लिए मुझे भिक्षा दें।' दूसरा श्लोक संन्यासियों का जीवन-दर्शन बन गया — 'मेरी माता पार्वती, पिता महादेव; बंधु शिव-भक्त और तीनों लोक ही मेरी जन्मभूमि।' अन्न-दान और तृप्ति की देवी का स्मरण।",
    english:
      "Two celebrated verses from the hymn to Annapurna of Kashi (attributed to Adi Shankaracharya) — 'O Annapurna, ever-full, beloved as the life-breath of Shiva: grant me the alms of wisdom and dispassion.' The second became the very creed of India's wandering monks — 'My mother is Parvati, my father is Lord Maheshvara; my kinsmen are Shiva's devotees, and the three worlds are my homeland.' An invocation of the goddess of food and fullness.",
    spanish:
      "Dos versos célebres del himno a Annapurna de Kashi (atribuido a Adi Shankaracharya) — 'Oh Annapurna, siempre plena, amada como el aliento mismo de Shiva: concédeme la limosna de la sabiduría y el desapego.' El segundo se volvió el credo de los monjes errantes de la India — 'Mi madre es Parvati, mi padre es el Señor Maheshvara; mis parientes son los devotos de Shiva, y los tres mundos son mi patria.' Invocación a la diosa del alimento y la plenitud.",
    tags: ["annapurna", "kashi", "अन्नपूर्णे", "अन्नपूर्णा", "काशी", "माता च पार्वती", "parvati", "food", "bhiksha"],
  },
  {
    id: "guru-1",
    kind: "stotra",
    bookId: "stotras",
    section: "Guru Stotra · Gurur Brahma",
    sectionHi: "गुरु स्तोत्र · गुरुर्ब्रह्मा",
    sanskrit:
      "गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः । गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः ॥",
    translit:
      "gurur brahmā gurur viṣṇur gurur devo maheśvaraḥ, guruḥ sākṣāt paraṁ brahma tasmai śrī-gurave namaḥ",
    hindi:
      "'गुरु ही ब्रह्मा हैं, गुरु ही विष्णु, गुरु ही महेश्वर; गुरु साक्षात् परब्रह्म हैं — उन श्रीगुरु को नमस्कार।' शिक्षा-परंपरा का शाश्वत श्लोक — गुरु-गीता और गुरु-स्तोत्र में आता है, गुरु-पूर्णिमा पर और हर विद्या-आरम्भ के पूजन में गाया जाता है: सृष्टि, पालन, संहार और अनुग्रह — चारों गुरु में ही देखे जाते हैं।",
    english:
      "'The Guru is Brahma, the Guru is Vishnu, the Guru is Maheshvara; the Guru is verily the supreme Brahman — salutations to that Sri Guru.' The timeless verse of the teaching tradition — found in the Guru Gita and Guru Stotra, sung on Guru Purnima and at the invocation of every branch of learning: creation, preservation, dissolution and grace are all seen in the teacher.",
    spanish:
      "'El Guru es Brahma, el Guru es Vishnu, el Guru es Maheshvara; el Guru es en verdad el Brahman supremo — salutaciones a ese Sri Guru.' El verso atemporal de la tradición de la enseñanza — presente en la Guru Gita y el Guru Stotra, cantado en Guru Purnima y en la invocación de toda rama del saber: creación, preservación, disolución y gracia se ven todas en el maestro.",
    tags: ["guru stotra", "gurur brahma", "guru purnima", "गुरुर्ब्रह्मा", "गुरु स्तोत्र", "गुरु", "teacher", "विद्या", "famous"],
  },
  {
    id: "guru-2",
    kind: "stotra",
    bookId: "stotras",
    section: "Guru Stotra · Akhanda Mandala",
    sectionHi: "गुरु स्तोत्र · अखण्ड मण्डल",
    sanskrit:
      "अखण्डमण्डलाकारं व्याप्तं येन चराचरम् । तत्पदं दर्शितं येन तस्मै श्रीगुरवे नमः ॥",
    translit:
      "akhanda-maṇḍalākāraṁ vyāptaṁ yena carācaram, tat-padaṁ darśitaṁ yena tasmai śrī-gurave namaḥ",
    hindi:
      "'जिस सत्य ने समस्त चर-अचर जगत् को अखण्ड मण्डल (एक अविभाजित गोले) की भाँति व्याप रखा है — उस परम-पद को जिसने मुझे दिखाया, उस श्रीगुरु को नमस्कार।' गुरु-स्तोत्र का सर्वाधिक गाया जाने वाला ध्यान-श्लोक: गुरु अनन्त को प्रकट करने वाले अनन्त रूप हैं।",
    english:
      "'That truth which has pervaded the whole world, moving and unmoving, as one unbroken sphere — that supreme abode he has shown me: salutations to that Sri Guru.' The most-sung dhyana verse of the Guru Stotra: the teacher as the infinite revealing the infinite.",
    spanish:
      "'Aquella verdad que ha impregnado el mundo entero, móvil e inmóvil, como una esfera inquebrantable — esa suprema morada me la ha mostrado él: salutaciones a ese Sri Guru.' El dhyana-shloka más cantado del Guru Stotra: el maestro como lo infinito que revela lo infinito.",
    tags: ["akhanda mandala", "guru dhyana", "अखण्डमण्डलाकारं", "गुरु स्तोत्र", "गुरु ध्यान", "infinite", "guru", "चराचरम्"],
  },
  {
    id: "guru-3",
    kind: "stotra",
    bookId: "stotras",
    section: "Guru Vandana · Brahmānandam",
    sectionHi: "गुरु वंदना · ब्रह्मानन्दम्",
    sanskrit:
      "ब्रह्मानन्दं परमसुखदं केवलं ज्ञानमूर्तिम् । द्वन्द्वातीतं गगनसदृशं तत्त्वमस्यादिलक्ष्यम् ॥ एकं नित्यं विमलमचलं सर्वधीसाक्षिभूतम् । भावातीतं त्रिगुणरहितं सद्गुरुं तं नमामि ॥",
    translit:
      "brahmānandaṁ paramasukhadaṁ kevalaṁ jñāna-mūrtim, dvandvātītaṁ gagana-sadṛśaṁ tattvamasyādi-lakṣyam — ekaṁ nityaṁ vimalam acalaṁ sarva-dhī-sākṣibhūtam, bhāvātītaṁ triguṇa-rahitaṁ sad-guruṁ tam namāmi",
    hindi:
      "'मैं उस सद्गुरु को नमस्कार करता हूँ जो ब्रह्मानन्द-स्वरूप, परम-सुख के दाता, शुद्ध ज्ञान की मूर्ति, द्वन्द्वों से अतीत, आकाश के समान, तत्त्वमसि आदि महावाक्यों का लक्ष्य, एक, नित्य, निर्मल, अचल, समस्त बुद्धियों के साक्षी, भावों से अतीत और तीनों गुणों से रहित हैं।' भारत की शास्त्रीय संगीत-नृत्य परंपराओं के आरम्भ में गाया जाने वाला प्रसिद्ध मंगलाचरण-श्लोक।",
    english:
      "'I bow to that Sadguru who is the bliss of Brahman, the giver of supreme joy, the very form of pure knowledge; beyond duality, sky-like, the goal of the great sayings like Tat tvam asi — one, eternal, immaculate, unshakable, the witness of every intellect, beyond all states and free of the three gunas.' The famous invocatory verse sung at the opening of India's classical music and dance.",
    spanish:
      "'Me inclino ante aquel Sadguru que es la dicha de Brahman, el dador de la alegría suprema, la forma misma del conocimiento puro; más allá de la dualidad, semejante al cielo, meta de los grandes dichos como Tat tvam asi — uno, eterno, inmaculado, inconmovible, testigo de todo intelecto, más allá de los estados y libre de los tres gunas.' El célebre verso de invocación con el que se abren la música y la danza clásicas de la India.",
    tags: ["brahmanandam", "sadguru", "ब्रह्मानन्दं", "सद्गुरु", "मंगलाचरण", "tat tvam asi", "guru vandana", "classical arts"],
  },
];
