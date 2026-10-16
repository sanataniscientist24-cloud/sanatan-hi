import type { CorpusEntry } from "./types";

const SP = "Shiva Purana";
const SPH = "शिव पुराण";

/** Shiv Puran — stories, jyotirlingas, glory of Shiva. */
export const SHIV_PURAN_ENTRIES: CorpusEntry[] = [
  {
    id: "shiv-halahala",
    kind: "story",
    bookId: "shiv-puran",
    section: `${SP} · Rudra Samhita — Samudra Manthan`,
    sectionHi: `${SPH} · रुद्र संहिता — समुद्र मन्थन`,
    title: "Shiva Drinks the Halahala Poison",
    titleHi: "शिव हलाहल-पान करते हैं",
    hindi:
      "देवता-दानवों ने मेरु पर्वत को मंथन-दण्ड और वासुकि नाग को रस्सी बनाकर समुद्र मथा। सबसे पहले विष के समुद्र से काल-कुट गरल-रूप हलाहल निकला जिससे सृष्टि हिल गई। ब्रह्मा-विष्णु ने आग्रह किया तो महादेव ने उस विष को हाथ-पात्र में लेकर 'नीलकंठ' बन जाने की कीमत पर पी गए। पार्वती ने गले में उतार रोक दिया। संत विष-पान बोध देता है: विष बाहर से कठिन होता है, जो समाज के लिए पिया जाए वह पुरुषार्थ बन जाता है।",
    english:
      "Gods and demons churned the ocean with Mount Mandara and serpent Vasuki. First to arise was the dreadful halahala poison that shook all creation. At Brahma's and Vishnu's pleading, Mahadeva gathered it and drank it — turning blue-throated, Neelakantha — while Parvati held it at his throat. The drinker of universal poison teaches: when suffering is voluntarily borne for the sake of the world, it becomes nectar for the soul.",
    tags: ["samudra manthan", "halahala", "neelakantha", "poison", "समुद्र मन्थन", "हलाहल", "नीलकंठ", "विष पान", "शिव", "churning"],
  },
  {
    id: "shiv-ganga",
    kind: "story",
    bookId: "shiv-puran",
    section: `${SP} · Ganga's descent`,
    sectionHi: `${SPH} · गंगा-अवतरण`,
    title: "Ganga Falls on Shiva's Locks",
    titleHi: "गंगा शिव की जटाओं में उतरती है",
    hindi:
      "भगीरथ के घोर तप से ब्रह्मा-विष्णु ने गंगा को स्वर्ग से पृथ्वी पर उतरने का वरदान दिया; पर उसका वेग पृथ्वी नहीं सह सकती थी। भगीरथ ने शिव की आराधना की — महादेव ने अपनी जटाओं को फैलाकर गंगा के पूरे वेग-प्रपात को स्वीकार किया और उसे वर्षों मानव-कल्याण के लिए मंद सरिता के रूप में धरती पर विराजमान कर दिया। शिव वह आश्रय हैं जो जीवन के आंधी-प्रपात को अमृत-धारा में बदल देता है।",
    english:
      "By Bhagiratha's fierce penance Ganga consented to descend from heaven — but her plunge would shatter the earth. Bhagiratha worshipped Shiva, and Mahadeva spread His matted locks, received the river's entire fury, and released her gently as the redeeming stream. Shiva is the refuge who transforms life's torrents into nectar for the world.",
    tags: ["ganga", "bhagiratha", "descent", "jata", "गंगा", "भगीरथ", "जटा", "अवतरण", "shiva refuge"],
  },
  {
    id: "shiv-parvati-tapasya",
    kind: "story",
    bookId: "shiv-puran",
    section: `${SP} · Rudra Samhita — Parvati's penance`,
    sectionHi: `${SPH} · रुद्र संहिता — पार्वती का तप`,
    title: "Parvati's Penance for Shiva",
    titleHi: "पार्वती का तप — शिव-पति की प्राप्ति",
    hindi:
      "सती के दाह के पश्चात शिव ने वैराग्य लिया। हिमवान्-पुत्री पार्वती ने नारद के उपदेश से शिव-पति की प्राप्ति का अद्भुत व्रत धारण किया — ऋतु-त्यागकर शूल-कठोर सेवा, युगों का तपस्वी-धैर्य। अंत में शिव ने ब्रह्मचारी रूप में परीक्षा ली और शिव के समक्ष ही शिव की निंदा सुनकर पार्वती ने उनका पक्ष लिया। तृप्त होकर शिव ने स्वयं वर माँगने को कहा — 'स्वयं त्वया सह विवाह'। तप ही प्रेम का अंतिम परिपक्वता है।",
    english:
      "After Sati's self-immolation Shiva turned utterly renunciant. Himavana's daughter Parvati took up a staggering vow — seasons of one-pointed austerities, serve forests, silence and fire. Shiva came as a brahmachari to test her and, slandered in his presence, found Parvati defending Him alone. Pleased, He bade her ask a boon — and she asked for none other than the Lord himself. Penance is love's final ripening.",
    tags: ["parvati", "penance", "marriage", "tapasya", "पार्वती", "तप", "विवाह", "सती", "शिव पति"],
  },
  {
    id: "shiv-markandeya",
    kind: "story",
    bookId: "shiv-puran",
    section: `${SP} · Markandeya & Maha Mrityunjaya`,
    sectionHi: `${SPH} · मार्कण्डेय और महामृत्युंजय`,
    title: "Markandeya Conquers Death",
    titleHi: "मार्कण्डेय काल को जीतते हैं",
    hindi:
      "मृगंध मुनि को मात्र बारह वर्ष का आयु-वरदान मिला। बालक मार्कण्डेय ने शिवलिंग को आलिंगन कर तप किया। बारहवें वर्ष पर यम का फंदा पँहुँचा — शिव 'मृत्युंजय' रूप में शिवलिंग से प्रकट हुए और यम-पाश काट डाला; बालक सोलह वर्ष का होकर दीर्घायु तपस्वी बना। महामृत्युंजय मंत्र का मूल-प्रसंग यही है।",
    english:
      "Sage Mrikandu was granted a son with but twelve years of life. The boy Markandeya embraced the Shiva-linga in unbroken devotion. On the appointed day Yama's noose descended — Shiva burst forth as Mritunjaya, severed the noose, and the boy grew to be a deathless sage of sixteen. This is the origin of the Maha Mrityunjaya mantra.",
    tags: ["markandeya", "yama", "mrityunjaya", "death conquered", "मार्कण्डेय", "यम", "मृत्यु जय", "बालक", "linga"],
  },
  {
    id: "shiv-jyotirlinga-stotra",
    kind: "stotra",
    bookId: "shiv-puran",
    section: `${SP} · Kotirudra Samhita — Jyotirlinga Stotra`,
    sectionHi: `${SPH} · कोटिरुद्र संहिता — ज्योतिर्लिंग स्तोत्र`,
    sanskrit:
      "सौराष्ट्रे सोमनाथं च श्रीशैले मल्लिकार्जुनम्। उज्जयिन्यां महाकालमोंकारममलेश्वरम् ॥ परल्यां वैद्यनाथं च डाकिन्यां भीमशङ्करम्। सेतुबन्धे रामेशं नागेशं दारुकावने ॥ वाराणस्यां च विश्वेशं त्र्यम्बकं गौतमीतटे। हिमालये केदारं घुश्मेशं च शिवालये ॥ एतानि ज्योतिर्लिङ्गानि सायंप्रातः पठेन्नरः। सप्तजन्मसमुद्भूतं पापं स्मरणेन विनश्यति ॥",
    translit:
      "saurāṣṭre somanāthaṁ ca śrī-śaile mallikārjunam, ujjayinyāṁ mahākālam oṁkāram amaleśvaram — paralyāṁ vaidyanāthaṁ ca ḍākinyāṁ bhīma-śaṅkaram, setu-bandhe rāmeśaṁ nāgeśaṁ dārukā-vane — vārāṇasyāṁ ca viśveśaṁ tryambakaṁ gautamī-taṭe, himālaye kedāraṁ ghuśmeśaṁ ca śivālaye — etāni jyotir-liṅgāni sāyaṁ prātaḥ paṭhen naraḥ, sapta-janma-samudbhūtaṁ pāpaṁ smaraṇena vinaśyati",
    hindi:
      "सौराष्ट्र में सोमनाथ, श्रीशैल में मल्लिकार्जुन, उज्जयिनी में महाकाल, ओंकार-अमलेश्वर; परली में वैद्यनाथ, डाकिनी में भीमशंकर, सेतुबन्ध पर रामेश्वर, दारुकावन में नागेश; काशी में विश्वनाथ, गौतमी तट पर त्र्यम्बकेश्वर, हिमालय में केदारनाथ और शिवालय (वेरुल) में घृष्णेश्वर — ये बारह ज्योतिर्लिंग हैं; जो नर प्रातः-सायं इनका स्मरण करता है, उसके सात जन्मों का पाप नष्ट हो जाता है।",
    english:
      "Somnath in Saurashtra, Mallikarjuna on Shrishaila, Mahakala at Ujjain, Omkara-Amaleshwara; Vaidyanatha at Parli, Bhimashankara in Dakini, Rameshwara at Setubandha, Nagesha in Darukavana; Vishveshwara at Varanasi, Tryambaka on the Gautami banks, Kedara in the Himalaya and Ghushmesha at Shivayala — twelve jyotirlingas. One who recites them morning and evening is cleansed of seven lifetimes of karma.",
    tags: ["jyotirlinga", "stotra", "12 lingas", "ज्योतिर्लिंग स्तोत्र", "सोमनाथ", "महाकालेश्वर", "काशी विश्वनाथ", "केदारनाथ", "रामेश्वरम्", "twelve", "famous"],
  },
  {
    id: "shiv-jyotirlinga-list",
    kind: "story",
    bookId: "shiv-puran",
    section: `${SP} · The Twelve Jyotirlingas`,
    sectionHi: `${SPH} · बारह ज्योतिर्लिंग`,
    title: "The Twelve Jyotirlingas — Light-Pillars of Shiva",
    titleHi: "बारह ज्योतिर्लिंग — शिव के दिव्य प्रकाश-स्तम्भ",
    hindi:
      "(1) सोमनाथ — प्रभास पाटन, गुजरात · (2) मल्लिकार्जुन — श्रीशैल, आंध्र · (3) महाकालेश्वर — उज्जैन, मप्र · (4) ओंकारेश्वर-ममलेश्वर — नर्मदा के ओंकार बिंदु, मप्र · (5) वैद्यनाथ (बैजनाथ) — देवघर, झारखंड · (6) भीमाशंकर — पुणे के निकट, महाराष्ट्र · (7) रामेश्वरम् — तमिलनाडु का द्वीप-मंदिर जहाँ राम ने लिंग स्थापित किया · (8) नागेश्वर — द्वारका के निकट · (9) विश्वनाथ — काशी (वाराणसी) · (10) त्र्यम्बकेश्वर — नासिक, गोदावरी-उद्गम · (11) केदारनाथ — हिमालय · (12) घृष्णेश्वर — औरंगाबाद (वेरुल) के निकट।",
    english:
      "(1) Somnath — Prabhas Patan, Gujarat · (2) Mallikarjuna — Srisailam, Andhra · (3) Mahakaleshwar — Ujjain, MP · (4) Omkareshwar-Mamaleshwar — Narmada's Om-shaped island, MP · (5) Vaidyanath — Deoghar, Jharkhand · (6) Bhimashankar — near Pune, Maharashtra · (7) Rameshwaram — Tamil island where Rama installed the linga · (8) Nageshwar — near Dwarka · (9) Vishwanath — Kashi (Varanasi) · (10) Trimbakeshwar — Nasik, source of Godavari · (11) Kedarnath — Himalaya · (12) Grishneshwar — near Aurangabad.",
    tags: ["jyotirlinga", "somnath", "kedarnath", "kashi", "rameshwaram", "बारह ज्योतिर्लिंग", "मंदिर", "स्थान", "pilgrimage", "temples"],
  },
  {
    id: "shiv-tandava",
    kind: "stotra",
    bookId: "shiv-puran",
    section: "Shiva Tandava Stotra (Ravana) · opening",
    sectionHi: "शिव ताण्डव स्तोत्र (रावण रचित) · आरम्भ",
    sanskrit:
      "जटाटवीगलजज्जलप्रवाहपावितास्थले गलेऽवलम्ब्य समितभुजङ्गतुण्डः । करालभालभाल निभगणिकापरिष्कृतदेहः शिवो विरिञ्चि निचयमहिषद्भिर्द्यौततु भूः ॥",
    translit:
      "jaṭāṭavīgalaj-jala-pravāha-pāvitā-sthale gale 'valambya samita-bhujaṅga-tuṇḍaḥ, karāla-bhāla-bhāla-nibha-gaṇikā-pariṣkṛta-dehaḥ śivo viriñci-nicaya-mahiṣad-bhir-dyautatu bhūḥ",
    hindi:
      "जिनकी जटाओं से गिरता गंगा-जल उनके हृदय को पवित्र करता है, जिनके गले में विषधर सर्प लिपटा है, जिनका भाल चंद्रमा से शोभित है — रावण रचित इस अद्भुत स्तोत्र में नटराज के ताण्डव का वर्णन है; शिव की जटा-गंगा का निरूपण अद्वितीय है।",
    english:
      "The water flowing from His matted locks purifies His being; serpents coil about His neck; the crescent moon adorns His brow — Ravana's thunderous hymn describes the tandava of Nataraja, Lord of the cosmic dance. The imagery of Ganga in Shiva's hair is without parallel.",
    tags: ["tandava", "ravana", "nataraja", "dance", "ताण्डव", "रावण", "नटराज", "नृत्य", "जटा", "cosmic dance"],
  },
  {
    id: "shiv-puran-om-namah",
    kind: "mantra",
    bookId: "shiv-puran",
    section: "Panchakshari — the five-syllable mantra",
    sectionHi: "पंचाक्षरी मंत्र",
    sanskrit:
      "ॐ नमः शिवाय",
    translit:
      "oṁ namaḥ śivāya",
    hindi:
      "ॐ नमः शिवाय — 'शिव को नमस्कार'। शास्त्रों में सर्वश्रेष्ठ मंत्रों में एक: ॐ ब्रह्म-स्मरण, नमः अहं-भाव का समर्पण, शि+वा+य शिव-कल्याण-तत्त्व का आलिंगन। इस मंत्र का निरंतर जप चित्त को संतुलित और शुद्ध करता है।",
    english:
      "Om Namah Shivaya — 'Salutations to Shiva'. Among the most supreme mantras of the shastras: Om invokes the Absolute, namah offers the ego, shi-va-ya embraces the auspicious reality. Constant japa of it steadies and purifies the mind.",
    tags: ["om namah shivaya", "panchakshari", "japa", "ॐ नमः शिवाय", "पंचाक्षरी", "जप", "famous", "shiva mantra"],
  },
  {
    id: "shiv-karpuragauram",
    kind: "stotra",
    bookId: "shiv-puran",
    section: "Karpura Gauram Karunavtaram · dhyana shloka",
    sectionHi: "कर्पूरगौरं करुणावतारम् · ध्यान श्लोक",
    sanskrit:
      "कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्। सदा वसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि ॥",
    translit:
      "karpūra-gauraṁ karuṇāvatāraṁ saṁsāra-sāraṁ bhujagendra-hāram, sadā vasantaṁ hṛdayāravinde bhavaṁ bhavānī-sahitaṁ namāmi",
    hindi:
      "कर्पूर के समान गौर, करुणा के अवतार, संसार का सार-तत्त्व, भुजगेन्द्र (विषधर नागों के स्वामी) का हार धारण करने वाले, हृदय-कमल में सदा निवास करने वाले भव (शिव) को भवानी के सहित नमस्कार। आरती और पूजा का प्रसिद्ध ध्यान-श्लोक।",
    english:
      "White as camphor, embodiment of compassion, the essence of the world, wearing the king of serpents as a garland, ever dwelling in the lotus of the heart — I bow to Bhava together with Bhavani. The beloved dhyana shloka sung at every Shiva aarti.",
    tags: ["karpuragauram", "aarti", "bhavani", "dhyana", "कर्पूरगौरं", "भवानी", "आरती", "ध्यान", "famous"],
  },
  {
    id: "shiv-mahimna",
    kind: "stotra",
    bookId: "shiv-puran",
    section: "Shiva Mahimna Stotra (Pushpadanta) · opening",
    sectionHi: "शिव महिम्न स्तोत्र (पुष्पदंत) · आरम्भ",
    sanskrit:
      "महादेवाय नमस्तुभ्यं। ... असितगिरिसमं स्यात् कज्जलं सिन्धुपात्रेः सुरतरुवरशाखा लेखनी पत्रमुर्वी । लिखति यदि गृहीत्वा शारदा सर्वकालं तदपि तव गुणानामीश पारं न याति ॥",
    translit:
      "asita-giri-samaṁ syāt kajjalaṁ sindhu-pātreḥ sura-taru-vara-śākhā lekhanī patram urvī, likhati yadi gṛhītvā śāradā sarva-kālaṁ tad api tava guṇānām īśa pāraṁ na yāti",
    hindi:
      "यदि समुद्र के जल को स्याही, काले पर्वत को लेखनी, स्वर्ग के कल्प-वृक्ष की शाखा को कलम और पृथ्वी को पत्र बनाकर सरस्वती सदा लिखती रह जाएँ, तो भी हे ईश! तेरे गुणों का पार नहीं पाया जा सकता — पुष्पदंत की अतुलनीय स्तुति।",
    english:
      "If the ocean were ink, the black mountain a pen, the branch of heaven's wish-tree the stylus, and the earth the page; were Sharada to write forever — still, O Lord, the limit of Your glories would never be reached. Pushpadanta's incomparable praise.",
    tags: ["mahimna", "pushpadanta", "glories", "शिव महिम्न", "पुष्पदंत", "स्तुति", "महिमा", "infinite"],
  },
  {
    id: "shiv-rudrashtakam",
    kind: "stotra",
    bookId: "shiv-puran",
    section: "Rudrashtakam (Tulsidas) · opening",
    sectionHi: "रुद्राष्टकम् (तुलसीदास) · आरम्भ",
    sanskrit:
      "नमामीशमीशान निर्वाणरूपं विभुं व्यापकं ब्रह्मवेदस्वरूपम्। निजं निर्गुणं निर्विकल्पं निरीहं चिदाकाशमाकाशवासं भजेऽहम् ॥",
    translit:
      "namāmīśam īśāna nirvāṇa-rūpaṁ vibhuṁ vyāpakaṁ brahma-veda-svarūpam, nijaṁ nirguṇaṁ nirvikalpaṁ nirīhaṁ cidākāśam ākāśa-vāsaṁ bhaje 'ham",
    hindi:
      "मैं उस ईशान-परमेश्वर का भजन करता हूँ जो निर्वाण-स्वरूप, व्यापक, ब्रह्म-वेद-स्वरूप, निर्गुण, निर्विकल्प, निरीह, चिदाकाश-रूप और आकाश के समान वासी हैं — तुलसीदास विरचित रुद्राष्टकम् का उद्घोष।",
    english:
      "I adore Ishana, the form of nirvana, the all-pervading, the very form of Brahman and the Vedas — attributeless, beyond conception, desireless, the space of consciousness dwelling as space. The opening of Tulsidas's Rudrashtakam.",
    tags: ["rudrashtakam", "tulsidas", "nirguna", "रुद्राष्टकम", "तुलसीदास", "निर्गुण", "भजन"],
  },
  {
    id: "shiv-nirvana-shatakam",
    kind: "stotra",
    bookId: "shiv-puran",
    section: "Nirvana Shatakam (Adi Shankaracharya)",
    sectionHi: "निर्वाण षटकम् (आदि शंकराचार्य)",
    sanskrit:
      "मनोबुद्ध्यहंकार चित्तानि नाहं न च श्रोत्रजिह्वे न घ्राणनेत्रे। न च व्योम भूमिर्न तेजो न वायुः चिदानन्दरूपः शिवोऽहम् शिवोऽहम् ॥",
    translit:
      "mano-buddhy-ahaṅkāra cittāni nāhaṁ na ca śrotra-jihve na ghrāṇa-netre, na ca vyoma bhūmir na tejo na vāyuḥ — cidānanda-rūpaḥ śivo 'ham śivo 'ham",
    hindi:
      "मन, बुद्धि, अहंकार, चित्त — मैं नहीं हूँ; न सुनने-चखने-सूँघने-देखने की इंद्रियाँ, न आकाश-पृथ्वी-अग्नि-वायु। मैं चिदानन्द-स्वरूप हूँ — मैं शिव हूँ, मैं शिव हूँ। आदि शंकराचार्य का अद्वैत-घोष।",
    english:
      "I am not the mind, intellect, ego or memory; not the ears, tongue, nose or eyes; nor ether, earth, fire or wind — I am the form of consciousness-bliss: I am Shiva, I am Shiva. Adi Shankaracharya's thunderbolt declaration of Advaita.",
    tags: ["nirvana shatakam", "shivo aham", "advaita", "shankara", "शिवोऽहम्", "चिदानन्द", "अद्वैत", "शंकराचार्य", "famous"],
  },
  {
    id: "shiv-lingashtakam",
    kind: "stotra",
    bookId: "shiv-puran",
    section: "Lingashtakam · opening verse",
    sectionHi: "लिङ्गाष्टकम् · प्रथम श्लोक",
    sanskrit:
      "ब्रह्ममुरारिस्त्रिपुरान्तकारि भानुमातःशाम्भवीदर्पहारि च। अस्मद् गुरो भवसिखातरायि स्वस्वरूपं नित्यमेव जग्रते ॥",
    translit:
      "brahma-murāri-tripurāntakāri bhānu-mātaḥ śāmbhavī-darpa-hāri ca, asmad-guro bhava-sikhā-tarāyi sva-sva-rūpaṁ nityam eva jagrate",
    hindi:
      "लिंग-पूजा के रहस्य पर आधारित स्तोत्र — लिंग निराकार ब्रह्म का साकार प्रतीक है; जो अनादि-निराकार परमेश्वर का अर्चा-रूप है, उसी के दर्शन-स्पर्श से भक्त निर्वाण पाता है।",
    english:
      "The hymn on the mystery of linga worship — the linga is the form-symbol of the formless Brahman: touching and beholding that archa-form of the beginningless Lord, the devotee attains liberation.",
    tags: ["lingashtakam", "linga", "worship", "लिङ्गाष्टकम", "शिवलिंग", "पूजा", "निराकार", "symbol"],
  },
  {
    id: "shiv-puran-structure",
    kind: "chapter",
    bookId: "shiv-puran",
    section: `${SP} · Overview`,
    sectionHi: `${SPH} · संरचना`,
    title: "What the Shiva Purana Contains",
    titleHi: "शिव पुराण में क्या है",
    hindi:
      "शिव पुराण सात संहिताओं में विभाजित है — विद्येश्वर, रुद्र, शतरुद्र, कोटिरुद्र, उमा, कैलास और वायवीय। इसमें शिव-महिमा, 12 ज्योतिर्लिंग-माहात्म्य, शिव-पार्वती विवाह, गणेश-कार्तिकेय जन्म, समुद्र-मन्थन, गंगा-अवतरण, रुद्र-अवतार, लिंग-प्रतिष्ठा और भक्ति-विधि का विस्तृत निरूपण है। शैव-धर्म का आधार-ग्रंथ।",
    english:
      "The Shiva Purana is divided into seven samhitas — Vidyeshvara, Rudra, Shatarudra, Kotirudra, Uma, Kailasa and Vayaviya. It contains the glory of Shiva, the twelve jyotirlinga magnificences, the wedding of Shiva and Parvati, the births of Ganesha and Kartikeya, the churning of the ocean, the descent of Ganga, the Rudra incarnations, linga installation and the complete method of bhakti — the foundational scripture of Shaivism.",
    tags: ["structure", "samhita", "overview", "शिव पुराण संहिता", "संरचना", "शैव", "overview"],
  },
];

const BP = "Bhagavata Purana";
const BPH = "भागवत पुराण";

/** Bhagavata Purana — the sweetest of Puranas. */
export const BHAGAVATA_ENTRIES: CorpusEntry[] = [
  {
    id: "bp-1-1-1",
    kind: "verse",
    bookId: "bhagavata",
    section: `${BP} · Skandha 1.1.1`,
    sectionHi: `${BPH} · स्कन्ध 1.1.1`,
    verse: "1.1.1",
    sanskrit:
      "जन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञः स्वराट्। तेने ब्रह्म हृदा य आदिकवये मुह्यन्ति यत्सूरयः ॥",
    translit:
      "janmādy asya yato 'nvayād itarataś cārtheṣv abhijñaḥ svarāṭ, tene brahma hṛdā ya ādi-kavaye muhyanti yat sūrayaḥ",
    hindi:
      "उस परमेश्वर से यह जगत् उत्पन्न होता-स्थित-लीन होता है, जो सब अर्थों में प्रत्यक्ष-परमेष्ट्ठी है; जिसने हृदय से आदिकवि ब्रह्मा को वेद दिए और जिसमें सूरगण भी मोहित हो जाते हैं — भागवत का मंगलाचरण-सूत्र।",
    english:
      "From that Supreme Being this universe emanates, in Him it rests and dissolves; He is directly conscious of every creation; He inspired the Vedas in the heart of Brahma the first seer, and in Him even the gods are bewildered — the auspicious opening thread of the Bhagavata.",
    tags: ["bhagavata opening", "creation", "supreme", "जन्माद्यस्य", "भागवत आरम्भ", "ब्रह्मा", "वेद", "famous"],
  },
  {
    id: "bp-dharma-bhakti",
    kind: "verse",
    bookId: "bhagavata",
    section: `${BP} · Skandha 1.2.6`,
    sectionHi: `${BPH} · स्कन्ध 1.2.6`,
    verse: "1.2.6",
    sanskrit:
      "स वै पुंसां परो धर्मो यतो भक्तिरधोक्षजे। अहैतुक्यप्रतिहता ययात्मा सुप्रसीदति ॥",
    translit:
      "sa vai puṁsāṁ paro dharmo yato bhaktir adhokṣaje, ahaituky apratihatā yayātmā suprasīdati",
    hindi:
      "पुरुषों का वही परम धर्म है जिससे अधोक्षज (इंद्रियों से परे परमात्मा) में अहेतुक (बिना किसी स्वार्थ के) और अव्याहत (निरंतर बहती) भक्ति हो और जिससे आत्मा परम-प्रसन्न हो जाए। भागवत का केंद्रीय घोषणा।",
    english:
      "That alone is the highest dharma of humanity by which devotion to the transcendent Lord arises — causeless and unobstructed — through which the Self becomes supremely content. The central proclamation of the Bhagavata.",
    tags: ["dharma", "bhakti", "highest", "परो धर्मो", "अहेतुक भक्ति", "धर्म", "प्रसन्नता", "famous"],
  },
  {
    id: "bp-krishna-birth",
    kind: "story",
    bookId: "bhagavata",
    section: `${BP} · Skandha 10 — Krishna Janma`,
    sectionHi: `${BPH} · स्कन्ध 10 — कृष्ण-जन्म`,
    title: "The Birth of Krishna",
    titleHi: "श्रीकृष्ण का जन्म",
    hindi:
      "मथुरा के कारागार में आषाढ़ी अंधेरी रात्रि थी; देवकी की आठवीं गर्भ-रेखा कंस के भय से साँस रोके थी। आधी रात यमुना के निकट कालाबली घनघोर वातावरण में छोटा शिशु प्रकट हुआ — कारागार के द्वार स्वतः खुल गए, प्रहरी सो गए, वसुदेव के हाथ में शिशु सुरक्षित रेखा से यमुना ने रास्ता दिया। गोकुल में यशोदा-नंद की झूली में विश्व-आनंद उतर आया। गोविंद बन बालक ने वत्स-भाव से विश्व को ओत प्रोत कर दिया।",
    english:
      "In Mathura's dungeon, on the black midnight of Shravana, Devaki's eighth pregnancy trembled under Kamsa's terror. At the appointed hour the divine infant appeared — chains snapped open, guards fell asleep, and the river Yamuna parted in flood to make way for Vasudeva carrying the child to Gokula, where the lap of Yashoda received the joy of the worlds. The child who would be Govinda filled the universe with the tenderness of the herdsman's love.",
    tags: ["krishna birth", "devaki", "vasudeva", "yashoda", "कृष्ण जन्म", "देवकी", "वसुदेव", "यशोदा", "कंस", "mathura", "gokula"],
  },
  {
    id: "bp-govardhan",
    kind: "story",
    bookId: "bhagavata",
    section: `${BP} · Skandha 10 — Govardhan Lila`,
    sectionHi: `${BPH} · स्कन्ध 10 — गोवर्धन लीला`,
    title: "Lifting of Mount Govardhan",
    titleHi: "गिरिराज गोवर्धन-धारण",
    hindi:
      "इंद्र-पूजा के स्थान पर बाल-कृष्ण ने कहा — वर्षा, घास, गौ, ब्रज सब गोवर्धन और कर्म का सहारा है; पर-पूजा से ग्राम्य-देवता की पूजा श्रेष्ठ। इंद्र के अहंकार ने सप्ताह-भर अति-वृष्टि की — तब सात वर्ष के बालक ने गोवर्धन को कनी पर उठा लिया; साढ़े सात दिन ब्रज ने पर्वत-छाता के नीचे निवास किया। इंद्र ने अभिषेक कर क्षमा माँगी — अहंकार जितना बड़ा, विनम्रता उतनी ही गहरी गिरती है।",
    english:
      "In place of Indra's worship, boy Krishna proposed the worship of Govardhan — the hill that gave rain, grass and grazing to the herds. Indra's offended ego poured seven days of devastating rain — whereupon the seven-year-old lifted Govardhan on his little finger, and all Vraja lived beneath the mountain-umbrella. Indra himself came down to bathe the boy in reverence: the greater the pride, the deeper the fall into humility.",
    tags: ["govardhan", "indra", "lift", "vrindavan", "गोवर्धन", "इंद्र", "वृन्दावन", "कनी", "mountain"],
  },
  {
    id: "bp-rasa",
    kind: "story",
    bookId: "bhagavata",
    section: `${BP} · Skandha 10 — Rasa Lila`,
    sectionHi: `${BPH} · स्कन्ध 10 — रास-लीला`,
    title: "The Rasa Dance of Autumn",
    titleHi: "शरद-पूर्णिमा की रास-लीला",
    hindi:
      "शरद-पूर्णिमा की चाँदनी रात यमुना-तट पर गोपियों के प्रेम-स्वर थे। एक कृष्ण अनेक रूपों में प्रत्येक गोपी के बीच नृत्य करता हुआ प्रत्यक्ष हुआ — जैसे एक ही आत्मा सब हृदयों में है। गर्व दिखाकर एक गोपी के नाच का भार पूरे गिरि-राज जैसा अनुभव हुआ — भक्ति में अहंकार और अद्वैत दोनों का गूढ़ दर्शन। रास-लीला निर्मल प्रेम-तत्त्व का सर्वोच्च काव्य है।",
    english:
      "Under the full-moon of autumn, on the banks of the Yamuna, the gopis' songs of love rose in the night. One Krishna became present between every pair of dancing gopis — as the one Self dwells in all hearts. When one gopi grew proud, her partner's weight became the burden of a mountain — the rasa lila is a profound mystic teaching on ego and nondual love, and the supreme poetry of devotion.",
    tags: ["rasa lila", "gopis", "vrindavan", "रास लीला", "गोपियाँ", "प्रेम", "यमुना", "full moon", "devotion"],
  },
  {
    id: "bp-prahlada",
    kind: "story",
    bookId: "bhagavata",
    section: `${BP} · Skandha 7 — Prahlada & Narasimha`,
    sectionHi: `${BPH} · स्कन्ध 7 — प्रह्लाद और नृसिंह`,
    title: "Prahlada's Faith and the Man-Lion",
    titleHi: "प्रह्लाद का श्रद्धा और नृसिंह-अवतार",
    hindi:
      "हिरण्यकशिपु ने पुत्र प्रह्लाद से ईश्वर-नाम छुड़वाने को सर्पों, गजों, जहर और अग्नि तक परीक्षण किया — बालक बिना भय उसी का स्मरण करता रहा: 'विष्णु सर्वत्र है।' स्तम्भ में भी? होने लगे होने — स्तम्भ विदीर्ण हुआ और नृसिंह प्रकट: दिन-रात संधि पर, द्वार-पर, नाखूनों से — न देव, न मनुष्य, न अस्त्र। भक्त-रक्षा के लिए भगवान् सीमाओं को भी तोड़ देते हैं।",
    english:
      "Hiranyakashipu tried serpents, elephants, poison and fire to pry the Lord's name from his son Prahlada — the boy only repeated: 'Vishnu is everywhere.' Even in this pillar? Then let Him come — the pillar burst open and Narasimha appeared: at twilight, on the threshold, slaying with nails — neither god nor man, no weapon at all. For the protection of His devotee, the Lord breaks every category.",
    tags: ["prahlada", "narasimha", "hiranyakashipu", "devotion", "प्रह्लाद", "नृसिंह", "हिरण्यकशिपु", "भक्त रक्षा", "avatar"],
  },
  {
    id: "bp-ajamila",
    kind: "story",
    bookId: "bhagavata",
    section: `${BP} · Skandha 6 — Ajamila`,
    sectionHi: `${BPH} · स्कन्ध 6 — अजामिल`,
    title: "Ajamila and the Power of the Name",
    titleHi: "अजामिल और नाम-शक्ति",
    hindi:
      "ब्राह्मण अजामिल वृद्धावस्था में व्यसन-ग्रस्त जीवन जी रहा था। मृत्यु-पथ पर तीन यमदूत दिखे — मरणासन्न अजामिल ने अपने पुत्र 'नारायण' को पुकारा, और वही नाम भगवान् का स्मरण बन गया। विष्णुदूत आए और बोले — नाम-स्मरण की शक्ति से अब वध्य नहीं। अजामिल ने शेष जीवन शुद्ध भक्ति में बिताया। स्मरण रूप में गुँथा नाम भी अपने उद्धारक लिए पधारता है।",
    english:
      "The brahmin Ajamila had wasted his life in vice. At death's threshold he beheld the three messengers of Yama — and in terror called out for his son, 'Narayana!' — the name itself became remembrance of the Lord. Vishnu's messengers arrived and declared the power of the divine name. Ajamila spent his remaining days in pure devotion: even a name uttered by habit can summon the Redeemer.",
    tags: ["ajamila", "nama", "narayana", "yama", "अजामिल", "नारायण", "नाम-स्मरण", "यमदूत", "power of name"],
  },
  {
    id: "bp-gajendra",
    kind: "story",
    bookId: "bhagavata",
    section: `${BP} · Skandha 8 — Gajendra Moksha`,
    sectionHi: `${BPH} · स्कन्ध 8 — गजेन्द्र मोक्ष`,
    title: "The Elephant King's Surrender",
    titleHi: "गजेन्द्र की शरणागति",
    hindi:
      "गजेन्द्र से मगर ने गोड़ पकड़ लिया; सहस्र वर्षों के संघर्ष में सारी शक्ति, सारा परिवार भी दूर हो गया। तब हाथी ने कमल उखाड़कर अकेले विष्णु-समर्पण से डकारा — साक्षात् शंख-चक्र-गदा-पाणि विष्णु उतरे और दंत से संकट तारते हुए गजराज को सारुप्य-मुक्ति दी। जब करने के सारे साधन थक जाएँ, तब शरणागति अकेली उत्तम साधन है।",
    english:
      "A crocodile seized Gajendra's leg; a thousand years of struggle exhausted all strength while his herd slipped away. The elephant raised a lotus in surrender and called to Vishnu alone — and the Lord descended with His discus and liberated him, granting the very form of liberation. When every means is exhausted, surrender alone remains — and it suffices.",
    tags: ["gajendra", "surrender", "vishnu", "crocodile", "गजेन्द्र मोक्ष", "शरणागति", "विष्णु", "मगरमच्छ", "famous"],
  },
  {
    id: "bp-dhruva",
    kind: "story",
    bookId: "bhagavata",
    section: `${BP} · Skandha 4 — Dhruva`,
    sectionHi: `${BPH} · स्कन्ध 4 — ध्रुव`,
    title: "Dhruva — the Boy who became a Star",
    titleHi: "ध्रुव — बालक जो ध्रुवतारा बना",
    hindi:
      "पाँच वर्ष के ध्रुव को सौतेली माँ के शब्दों ने कहा — 'वंश-सिंहासन तेरे लिए नहीं'। नारद के उपदेश से उसने मधुवन में उन्मत्त-तप किया — ओम् नमो भगवते वासुदेवाय के जप में षण्मास। प्रसन्न विष्णु ने वर माँगने को कहा — बालक ने वही सिंहासन माँगा जिसके लिए अपमानित हुआ था, पर दिव्य दर्शन के बाद संतुष्ट हो केवल चरण-सेवा चाही। ध्रुवतारा बनकर वह आकाश में नित्य स्थिर — लक्ष्य-साधना और संतोष का अमर उदाहरण।",
    english:
      "Five-year-old Dhruva was told by his stepmother that the throne was not for him. Guided by Narada, he performed ecstatic penance in Madhuvana — six months lost in the japa of Om Namo Bhagavate Vasudevaya. Pleased, Vishnu offered a boon; the child asked first for the throne he had been denied, but after the divine vision asked only for eternal service at the Lord's feet. He became the Pole Star — the immortal emblem of striving crowned by contentment.",
    tags: ["dhruva", "pole star", "narada", "penance", "ध्रुव", "ध्रुवतारा", "नारद", "बाल-तपस्या", "star"],
  },
  {
    id: "bp-uddhava",
    kind: "quote",
    bookId: "bhagavata",
    section: `${BP} · Skandha 11 — Uddhava Gita essence`,
    sectionHi: `${BPH} · स्कन्ध 11 — उद्धव-गीता सार`,
    title: "Krishna's Farewell Teaching to Uddhava",
    titleHi: "उद्धव को कृष्ण का विदाई-उपदेश",
    hindi:
      "द्वापर के अंत में कृष्ण ने उद्धव से कहा — अहंकार को जड़ से सहित त्यागो; समता में सुख-दुःख समान हैं; सब प्राणियों में मेरा दर्शन कर; भक्ति-योग, ज्ञान और निष्काम कर्म — तीनों एक ही द्वार से धारा के रूप में बहते हैं। 'जो भाव से मेरा नाम लेता है मैं उसके हृदय में आता हूँ।' उद्धव-गीता भागवत का अंतिम-विरह-रहस्य है।",
    english:
      "At the close of Dvapara, Krishna told Uddhava — uproot ego along with its seed; pleasure and pain are one in equanimity; see Me in every being; devotion, knowledge and selfless action flow as one river through one gate. 'Whoever takes My name with feeling, I enter his heart.' The Uddhava Gita is the Bhagavata's final parting mystery.",
    tags: ["uddhava gita", "krishna teaching", "farewell", "उद्धव गीता", "कृष्ण उपदेश", "समता", "farewell"],
  },
];

const VP = "Vishnu Purana";
const VPH = "विष्णु पुराण";

/** Vishnu Purana & Vishnu Sahasranama. */
export const VISHNU_PURANA_ENTRIES: CorpusEntry[] = [
  {
    id: "vp-overview",
    kind: "book",
    bookId: "vishnu-puran",
    section: `${VP} · Overview (6 amshas)`,
    sectionHi: `${VPH} · परिचय (6 अंश)`,
    title: "The Vishnu Purana",
    titleHi: "विष्णु पुराण — परिचय",
    hindi:
      "विष्णु पुराण छह अंशों में है — सृष्टि-वर्णन, भू-वर्णन, कल्प-वृक्ष, सूर्य-चन्द्र वंशावली, कृष्ण-चरित और कल्प-अंत। पराशर मुनि का पुत्र कृत्य-विषय संवाद। इसमें विष्णु-भक्ति का शुद्ध सिद्धांत, भूगोल-खगोल का वैवर्य और धर्म के अध्याय हैं। विष्णु सहस्रनाम का रहस्य यहीं से महाभारत में भी विराजमान है।",
    english:
      "The Vishnu Purana unfolds in six amshas — creation, geography, dynasties of gods and kings, the great genealogies, Krishna's life and cosmic dissolution. It is the dialogue of Parashara and Maitreya, holding pure Vaishnava doctrine, cosmic geography and dharma. The secret of Vishnu's thousand names also flows from here into the Mahabharata.",
    tags: ["vishnu purana", "parashara", "vaishnava", "विष्णु पुराण", "पराशर", "अंश", "overview"],
  },
  {
    id: "vs-1",
    kind: "stotra",
    bookId: "vishnu-puran",
    section: "Vishnu Sahasranama (Mahabharata 13.149) · opening",
    sectionHi: "विष्णु सहस्रनाम (महाभारत 13.149) · आरम्भ",
    sanskrit:
      "विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः। भूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः ॥",
    translit:
      "viśvaṁ viṣṇur vaṣaṭkāro bhūta-bhavya-bhavat-prabhuḥ, bhūta-kṛd bhūta-bhṛd bhāvo bhūtātmā bhūta-bhāvanaḥ",
    hindi:
      "विश्व-रूप, यज्ञ-परायण, भूत-भविष्य-वर्तमान के स्वामी, सृष्टि के कर्ता-धारक, सब प्राणियों की आत्मा — विष्णुसहस्रनाम के आरम्भिक नाम। भीष्म द्वारा उत्तम-विस्तार से गाए गए सहस्र नाम शांति और रक्षा का महान् साधन माने जाते हैं।",
    english:
      "All-pervading One, master of sacrifice, lord of past, future and present, creator and sustainer of beings, Self of all — the opening names of the thousand names of Vishnu, sung by Bhishma at length as the great instrument of peace and protection.",
    tags: ["vishnu sahasranama", "bhishma", "thousand names", "विष्णुसहस्रनाम", "भीष्म", "सहस्र नाम", "famous"],
  },
  {
    id: "vs-phala",
    kind: "verse",
    bookId: "vishnu-puran",
    section: "Vishnu Sahasranama · phala-shruti",
    sectionHi: "विष्णु सहस्रनाम · फल-श्रुति",
    sanskrit:
      "वेदाः शास्त्राणि विज्ञानमेतत्सर्वं जनार्दनः। नामानि सहस्रं दिव्यानामेषा पूर्तिः कृता मया ॥",
    translit:
      "vedāḥ śāstrāṇi vijñānam etat sarvaṁ janārdanaḥ, nāmāni sahasraṁ divyānām eṣā pūrtiḥ kṛtā mayā",
    hindi:
      "समस्त वेद, शास्त्र और विज्ञान जनार्दन (विष्णु) में ही हैं; उनके दिव्य सहस्र नामों का संकलन ही सबकी पूर्ति है — नाम-जप स्वयं समस्त शास्त्र-साधना का सार है।",
    english:
      "All the Vedas, shastras and sciences reside in Janardana; the compilation of His thousand divine names completes them all — the recitation of names is itself the essence of every scriptural practice.",
    tags: ["names", "phala", "essence of vedas", "नाम-जप", "फल श्रुति", "वेद सार", "janardana"],
  },
];
