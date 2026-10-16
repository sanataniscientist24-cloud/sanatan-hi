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
    tags: ["rama mantra", "taraka", "राम जय राम", "तारक", "जप", "peace"],
  },
];
