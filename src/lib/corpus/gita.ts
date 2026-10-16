import type { CorpusEntry } from "./types";

const B = "bhagavad-gita";
const G = "Bhagavad Gita";
const GH = "श्रीमद्भगवद्गीता";

function bg(
  chapter: string,
  verse: string,
  chapterNo: string,
  sanskrit: string,
  translit: string,
  hindi: string,
  english: string,
  tags: string[]
): CorpusEntry {
  return {
    id: `bg-${chapterNo}-${verse.replace(/[^\d]/g, "")}`,
    kind: "verse",
    bookId: B,
    section: `${G} · Adhyaya ${chapterNo}`,
    sectionHi: `${GH} · ${chapter}`,
    chapter: chapterNo,
    verse: `${chapterNo}.${verse}`,
    sanskrit,
    translit,
    hindi,
    english,
    tags,
  };
}

/** Bhagavad Gita — core verses across all 18 chapters. */
export const GITA_VERSES: CorpusEntry[] = [
  // ─── Chapter 1 ───
  bg("अर्जुन विषाद योग", "1", "1",
    "धृतराष्ट्र उवाच — धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्च किमकुर्वत सञ्जय ॥"
    , "dhṛtarāṣṭra uvāca — dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ, māmakāḥ pāṇḍavāś ca kim akurvata sañjaya"
    , "धृतराष्ट्र ने पूछा — हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्रित हुए मेरे पुत्रों और पांडवों ने क्या किया?"
    , "Dhritarashtra asked: O Sanjaya, assembled on the holy field of Kurukshetra, eager to fight, what did my sons and the sons of Pandu do?"
    , ["arjuna", "dhritarashtra", "sanjaya", "kurukshetra", "war", "arjun", "अर्जुन", "धृतराष्ट्र", "कुरुक्षेत्र", "युद्ध", "पहला अध्याय"]),

  bg("अर्जुन विषाद योग", "47", "1",
    "श्रीपार्थो विषीदन्निव आसीनमश्रुपूर्णाकुलः। इदं वचनमब्रवीत् ॥"
    , "śrī-pārtho viṣīdann iva āsīnam aśru-pūrṇākulaḥ, idaṁ vacanam abravīt"
    , "शोक से व्याप्त, आँसुओं से भरी आँखों वाले अर्जुन ने निराश होकर धनुष रख दिया और यह वचन कहा।"
    , "Overwhelmed by grief, his eyes brimming with tears, the despondent Arjuna laid down his bow and spoke thus."
    , ["arjuna", "grief", "vishada", "tears", "अर्जुन", "विषाद", "शोक", "depression", "त्याग"]),

  // ─── Chapter 2 ───
  bg("सांख्य योग", "11", "2",
    "अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे। गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ॥"
    , "aśocyān anvaśocas tvaṁ prajñā-vādāṁś ca bhāṣase, gatāsūn agatāsūṁś ca nānuśocanti paṇḍitāḥ"
    , "हे अर्जुन! जिनके लिए शोक करना उचित नहीं, तू उन्हीं के लिए शोक करता है और वेदांत के वचन बोलता है — विद्वान् मरे हुए और जीवित लोगों दोनों के लिए शोक नहीं करते।"
    , "You grieve for those who should not be grieved for, yet speak words of wisdom — the wise do not mourn for the dead nor for the living."
    , ["grief", "wisdom", "pandit", "mourning", "शोक", "पंडित", "ज्ञान", "consolation"]),

  bg("सांख्य योग", "12", "2",
    "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः। न चैव न भविष्यामः सर्वे वयमतः परम् ॥"
    , "na tv evāhaṁ jātu nāsaṁ na tvaṁ neme janādhipāḥ, na caiva na bhaviṣyāmaḥ sarve vayam ataḥ param"
    , "न मैं कभी नहीं था ऐसा समय नहीं आया, न तू, न ये सब राजा; और आगे भी सब हम नहीं होंगे — ऐसा कभी नहीं होगा।"
    , "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be."
    , ["atman", "soul", "eternal", "existence", "आत्मा", "अमर", "नित्य", "अजन्मा"]),

  bg("सांख्य योग", "13", "2",
    "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा। तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ॥"
    , "dehino 'smin yathā dehe kaumāraṁ yauvanaṁ jarā, tathā dehāntara-prāptir dhīras tatra na muhyati"
    , "जैसे इस देह में जीव की बाल्यावस्था, युवावस्था और वृद्धावस्था होती है, वैसे ही देह छूटने पर दूसरा शरीर मिलता है — धीर पुरुष इसमें मोहित नहीं होता।"
    , "As the embodied soul passes in this body from boyhood to youth to old age, so it passes into another body at death — the self-realized are not bewildered by this."
    , ["death", "rebirth", "body", "soul", "मृत्यु", "देह", "आत्मा", "जन्म", "पुनर्जन्म", "body change"]),

  bg("सांख्य योग", "14", "2",
    "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः। आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥"
    , "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ, āgamāpāyino 'nityās tāṁs titikṣasva bhārata"
    , "हे कुन्तीपुत्र! शीत-गर्म के ताप-स्पर्श से सुख-दुःख उत्पन्न होते हैं, वे आते-जाते रहने वाले और अनित्य हैं — उन्हें सहन करने का अभ्यास कर।"
    , "O son of Kunti, the contacts of the senses with their objects give cold and heat, pleasure and pain — they come and go, they are impermanent. Endure them, O Bharata."
    , ["endurance", "titiksha", "pleasure", "pain", "सुख", "दुख", "दुःख", "सहन", "अनित्य", "patience", "तितिक्षा"]),

  bg("सांख्य योग", "20", "2",
    "न जायते म्रियते वा कदाचि-न्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥"
    , "na jāyate mriyate vā kadāci-n nāyaṁ bhūtvā bhavitā vā na bhūyaḥ, ajo nityaḥ śāśvato 'yaṁ purāṇo na hanyate hanyamāne śarīre"
    , "आत्मा न कभी जन्म लेता है, न कभी मरता है; यह भूतकाल में उत्पन्न होकर आगे पुनः उत्पन्न नहीं होगा — यह अजन्मा, नित्य, शाश्वत और पुरातन है; शरीर के मारे जाने पर भी यह नहीं मारा जाता।"
    , "The soul is never born, nor does it ever die; having once been, it will never again cease to be. Unborn, eternal, everlasting and primeval — it is not slain when the body is slain."
    , ["soul", "atman", "immortal", "eternal", "आत्मा", "अमर", "नित्य", "अविनाशी", "जन्म मृत्यु"]),

  bg("सांख्य योग", "22", "2",
    "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि। तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही ॥"
    , "vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi, tathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī"
    , "जैसे मनुष्य पुराने वस्त्र त्याग कर नए वस्त्र धारण करता है, वैसे ही देही जीर्ण शरीरों को त्याग कर नए शरीरों को प्राप्त होता है।"
    , "As a person casts off worn-out garments and puts on new ones, so the embodied soul casts off worn-out bodies and enters new ones."
    , ["death", "body", "garment", "soul", "मृत्यु", "शरीर", "वस्त्र", "आत्मा", "बदलाव"]),

  bg("सांख्य योग", "23-24", "2",
    "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः। न चैनं क्लेदयन्त्यापो न शोषयति मारुतः ॥ अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च। नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः ॥"
    , "nainaṁ chindanti śastrāṇi nainaṁ dahati pāvakaḥ, na cainaṁ kledayanty āpo na śoṣayati mārutaḥ — acchedyo 'yam adāhyo 'yam akledyo 'śoṣya eva ca, nityaḥ sarva-gataḥ sthāṇur acalo 'yam sanātanaḥ"
    , "आत्मा को शस्त्र नहीं काट सकते, आग नहीं जला सकती, जल गला नहीं सकता और वायु सुखा नहीं सकती। यह अखंडनीय, अदाह्य, अक्लेद्य और असूश्य है — नित्य, सर्वव्यापी, स्थिर, अचल और सनातन है।"
    , "Weapons cannot cut the soul, nor can fire burn it, water cannot wet it, nor wind dry it. It is unbreakable, unburnable, unwetable and undryable — eternal, all-pervading, fixed, immovable and everlasting."
    , ["invincible", "eternal", "soul", "अविनाशी", "अखंडनीय", "आत्मा", "नित्य", "अजेय"]),

  bg("सांख्य योग", "47", "2",
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥"
    , "karmaṇy evādhikāras te mā phaleṣu kadācana, mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi"
    , "कर्म करने में ही तेरा अधिकार है, उसके फलों में कभी नहीं। तू कर्मफल का हेतु (कारण) मत बन, न ही तेरी आसक्ति अकर्म में रहे।"
    , "You have a right to perform your prescribed duties, but never to the fruits of your actions. Never consider yourself the cause of the results of your activities, nor let your attachment be to inaction."
    , ["karma", "action", "fruit", "duty", "nishkama", "कर्म", "फल", "कर्तव्य", "अधिकार", "आसक्ति", "famous", "निष्काम कर्म"]),

  bg("सांख्य योग", "48", "2",
    "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥"
    , "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya, siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate"
    , "हे धनंजय! योग में स्थित होकर, आसक्ति त्यागकर कर्म कर; सिद्धि और असिद्धि में सम रह — यही समत्व योग कहलाता है।"
    , "Perform your duties established in yoga, abandoning attachment, O Dhananjaya, being equal in success and failure — such evenness is called yoga."
    , ["yoga", "equanimity", "samatva", "योग", "समत्व", "समता", "सिद्धि", "balance"]),

  bg("सांख्य योग", "50", "2",
    "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते। तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् ॥"
    , "buddhi-yukto jahātīha ubhe sukṛta-duṣkṛte, tasmād yogāya yujyasva yogaḥ karmasu kauśalam"
    , "बुद्धियुक्त (युक्त-बुद्धि) पुरुष इसी जन्म में पुण्य और पाप दोनों को त्याग देता है, इसलिए योग के लिए प्रयत्न कर — कर्मों में कुशलता ही योग है।"
    , "One disciplined by intelligence sheds both good and evil karma in this very life; therefore strive for yoga — yoga is skill in action."
    , ["yoga", "skill", "karma", "योग", "कौशल", "कर्म", "बुद्धि"]),

  bg("सांख्य योग", "56", "2",
    "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः। वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते ॥"
    , "duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ, vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate"
    , "दुःखों में जिसका मन विचलित नहीं होता, सुखों की इच्छा नहीं रहती, राग-भय-क्रोध से रहित — ऐसा स्थिर बुद्धि मुनि स्थितप्रज्ञ कहलाता है।"
    , "One whose mind remains undisturbed in sorrow, who is free from longing for pleasure, and who is beyond attachment, fear and anger — such a sage of steady wisdom is called sthitaprajna."
    , ["sthitaprajna", "equanimity", "sage", "स्थितप्रज्ञ", "मुनि", "राग", "क्रोध", "भय", "steady wisdom"]),

  bg("सांख्य योग", "62-63", "2",
    "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ॥ क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः। स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ॥"
    , "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate, saṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate — krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ, smṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati"
    , "विषयों का चिंतन करने वाले पुरुष की उनमें आसक्ति बनती है, आसक्ति से कामना उत्पन्न होती है, कामना से क्रोध होता है; क्रोध से सम्मोह, सम्मोह से स्मृति-भ्रम, स्मृति नष्ट होने से बुद्धि का नाश और बुद्धि नष्ट होने पर पुरुष नष्ट हो जाता है।"
    , "Brooding on sense objects breeds attachment; attachment begets craving, and craving begets anger. Anger breeds delusion; delusion confuses memory; ruined memory destroys intelligence, and lost intelligence destroys the person."
    , ["anger", "kama", "attachment", "mind", "क्रोध", "काम", "आसक्ति", "मोह", "चित्त", "fall of man", "chain"]),

  bg("सांख्य योग", "71", "2",
    "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः। निर्ममो निरहङ्कारः स शान्तिमाप्नोति ॥"
    , "vihāya kāmān yaḥ sarvān pumāṁś carati niḥspṛhaḥ, nirmamo nirahaṅkāraḥ sa śāntim āpnoti"
    , "समस्त कामनाओं का परित्याग करके जो पुरुष निःस्पृह, निर्मम और निरहंकार होकर विचरण करता है, वही शान्ति को प्राप्त होता है।"
    , "One who abandons all desires, moves about free of longing, without possessiveness and ego — that one attains peace."
    , ["peace", "shanti", "desireless", "शान्ति", "कामना", "निःस्पृह", "अहंकार", "ममता"]),

  bg("सांख्य योग", "72", "2",
    "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति। स्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति ॥"
    , "eṣā brāhmī sthitiḥ pārtha naināṁ prāpya vimuhyati, sthitvāsyām anta-kāle 'pi brahma-nirvāṇam ṛcchati"
    , "हे पार्थ! यह ब्राह्मी स्थिति है — इसे पाकर पुरुष मोहित नहीं होता; अंतकाल में भी इस स्थिति में स्थित रहकर ब्रह्म-निर्वाण (परम शान्ति) को प्राप्त होता है।"
    , "This is the divine, brahmic state, O Partha; attaining it one is never deluded. Abiding in it even at the hour of death, one reaches the nirvana of Brahman."
    , ["brahman", "liberation", "final", "ब्रह्म", "मोक्ष", "निर्वाण", "शान्ति"]),

  // ─── Chapter 3 ───
  bg("कर्म योग", "19", "3",
    "तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ॥"
    , "tasmād asaktaḥ satataṁ kāryaṁ karma samācara, asakto hy ācaran karma param āpnoti pūruṣaḥ"
    , "इसलिए आसक्ति रहित होकर सदा तेरा कर्तव्य-कर्म कर — आसक्ति रहित होकर कर्म करने वाला पुरुष परम को प्राप्त होता है।"
    , "Therefore, always perform your duty without attachment, for by doing work without attachment one attains the Supreme."
    , ["karma", "detachment", "supreme", "कर्म", "निष्काम", "आसक्ति", "परम"]),

  bg("कर्म योग", "35", "3",
    "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥"
    , "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭitāt, sva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ"
    , "श्रेष्ठ है अपना स्वधर्म (यद्यपि उसमें त्रुटि हो) पर-धर्म की अच्छी तरह की हुई आचरण से भी; अपने धर्म में मरण भी श्रेष्ठ है — पर-धर्म भयंकर है।"
    , "Better is one's own dharma though imperfect, than the dharma of another well performed; better is death in one's own dharma — the dharma of another is fraught with fear."
    , ["svadharma", "duty", "dharma", "स्वधर्म", "धर्म", "कर्तव्य", "own path"]),

  bg("कर्म योग", "37", "3",
    "काम एष क्रोध एष रजोगुणसमुद्भवः। महाशनो महापाप्म विद्ध्येनमिह वैरिणम् ॥"
    , "kāma eṣa krodha eṣa rajo-guṇa-samudbhavaḥ, mahāśano mahāpāpma viddhy enam iha vairiṇam"
    , "यही काम है, यही क्रोध है — यह रजोगुण से उत्पन्न, महाशन (सब ग्रसन करने वाला) और महापापी है; इसी को इस जगत् में तेरा शत्रु जान।"
    , "It is desire, it is anger, born of rajas — the all-devouring, most sinful. Know this to be the enemy here."
    , ["desire", "anger", "enemy", "काम", "क्रोध", "रजोगुण", "शत्रु", "वैरी"]),

  bg("कर्म योग", "42", "3",
    "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः। मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः ॥"
    , "indriyāṇi parāṇy āhur indriyebhyaḥ paraṁ manaḥ, manasas tu parā buddhir yo buddheḥ paratas tu saḥ"
    , "इंद्रियाँ शरीर से बड़ी कहलाती हैं, उनसे बड़ा मन है, मन से बड़ी बुद्धि है और जो बुद्धि से भी परे है वह (आत्मा) बड़ा है।"
    , "The senses are superior to the body; superior to the senses is the mind; beyond the mind is the intellect; and beyond the intellect is the Self."
    , ["senses", "mind", "intellect", "self", "इंद्रियाँ", "मन", "बुद्धि", "आत्मा", "hierarchy"]),

  // ─── Chapter 4 ───
  bg("ज्ञान-कर्म-संन्यास योग", "7-8", "4",
    "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥ परित्राणाय साधूनां विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥"
    , "yadā yadā hi dharmasya glānir bhavati bhārata, abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham — paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām, dharma-saṁsthāpanārthāya sambhavāmi yuge yuge"
    , "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं को प्रकट करता हूँ। साधु पुरुषों की रक्षा के लिए, दुष्कर्म करने वालों के विनाश के लिए और धर्म की स्थापना के लिए मैं युग-युग में अवतरित होता हूँ।"
    , "Whenever there is decline of dharma and rise of adharma, O Bharata, I manifest Myself. To protect the righteous, to destroy the wicked, and to establish dharma, I take birth age after age."
    , ["avatar", "incarnation", "dharma", "यदा यदा हि धर्मस्य", "अवतार", "धर्म", "कल्कि", "राम", "कृष्ण", "protection", "famous", "विष्णु"]),

  bg("ज्ञान-कर्म-संन्यास योग", "13", "4",
    "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः। तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् ॥"
    , "cātur-varṇyaṁ mayā sṛṣṭaṁ guṇa-karma-vibhāgaśaḥ, tasya kartāram api māṁ viddhy akartāram avyayam"
    , "चातुर्वर्ण्य (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र) समाज गुण और कर्म के विभाग से मेरे द्वारा रचा गया है; जान कि मैं उसका कर्ता होते हुए भी अकर्ता और अव्यय हूँ।"
    , "The four-fold order of society was created by Me according to the division of qualities and actions; yet know Me as its non-doer, being changeless."
    , ["varna", "society", "गुण", "वर्ण", "समाज", "ब्राह्मण", "क्षत्रिय", "वैश्य", "शूद्र"]),

  bg("ज्ञान-कर्म-संन्यास योग", "34", "4",
    "तद्विज्ञानार्थं स गुरुमेवाभिगच्छेत् समित्पाणिः श्रोत्रियं ब्रह्मनिष्ठम् ॥"
    , "tad vijñānārthaṁ sa gurum evābhigacchet samit-pāṇiḥ śrotriyaṁ brahma-niṣṭham"
    , "उस परम तत्त्व-ज्ञान को जानने के लिए समिधा (ईंधन) हाथ में लेकर गुरु के पास जाना चाहिए — जो शास्त्र-ज्ञ और ब्रह्म-निष्ठा संपन्न हो।"
    , "To know that supreme truth, approach the master with offerings in hand — one learned in scripture and established in Brahman."
    , ["guru", "teacher", "knowledge", "गुरु", "शिष्य", "ज्ञान", "शास्त्र", "master"]),

  bg("ज्ञान-कर्म-संन्यास योग", "39", "4",
    "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति ॥"
    , "śraddhāvāṁl labhate jñānaṁ tat-paraḥ saṁyata-indriyaḥ, jñānaṁ labdhvā parāṁ śāntim acireṇādhigacchati"
    , "श्रद्धावान्, तत्पर और जितेंद्रिय पुरुष ज्ञान को प्राप्त करता है; ज्ञान पाकर शीघ्र ही परम शान्ति को प्राप्त होता है।"
    , "The faithful, devoted one with subdued senses gains knowledge; having gained knowledge, one soon attains supreme peace."
    , ["shraddha", "faith", "knowledge", "peace", "श्रद्धा", "ज्ञान", "शान्ति", "इंद्रिय संयम"]),

  // ─── Chapter 5 ───
  bg("कर्म-संन्यास योग", "10", "5",
    "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः। लिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥"
    , "brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ, lipyate na sa pāpena padma-patram ivāmbhasā"
    , "समस्त कर्म ब्रह्म में अर्पण करके, आसक्ति त्यागकर जो कर्म करता है, वह पाप से लिप्त नहीं होता — जैसे जल से कमल का पत्र।"
    , "One who acts offering all actions to Brahman, without attachment, is untouched by sin — as a lotus leaf by water."
    , ["lotus", "brahman", "detachment", "कमल", "ब्रह्म", "आसक्ति", "पाप", "nishkama"]),

  bg("कर्म-संन्यास योग", "18", "5",
    "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि। शुनि चैव श्वपाके च पण्डिताः समदर्शिनः ॥"
    , "vidyā-vinaya-sampanne brāhmaṇe gavi hastini, śuni caiva śva-pāke ca paṇḍitāḥ sama-darśinaḥ"
    , "विद्या और विनय से संपन्न ब्राह्मण में, गाय, हाथी, कुत्ते तथा चांडाल में समान दृष्टि रखने वाले पंडित होते हैं।"
    , "The wise see the same Self in a learned and humble brahmin, a cow, an elephant, a dog and an outcaste — such seers have equal vision."
    , ["equality", "sama darshana", "wisdom", "समदर्शी", "समता", "पंडित", "ब्राह्मण", "equality vision"]),

  // ─── Chapter 6 ───
  bg("ध्यान योग", "5", "6",
    "उद्धरेदात्मनात्मानं नावमत्सेदात्मनात्मनम्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥"
    , "uddhared ātmanātmānaṁ nāvatsed ātmanātmanam, ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ"
    , "मनुष्य अपने आत्मा से ही उन्नति करे, अपने आत्मा का अपमान न करे; क्योंकि आत्मा ही आत्मा का मित्र है और आत्मा ही आत्मा का शत्रु है।"
    , "Let one uplift oneself by the Self, not degrade oneself; the Self alone is one's friend and the Self alone one's enemy."
    , ["self", "friend", "enemy", "उद्धार", "आत्मा", "मित्र", "शत्रु", "self effort"]),

  bg("ध्यान योग", "19", "6",
    "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता। योगिनो यतचित्तस्य युञ्जते योगमात्मनः ॥"
    , "yathā dīpo nivāta-stho neṅgate sopamā smṛtā, yogino yata-cittasya yuñjate yogam ātmanaḥ"
    , "जैसे निर्वात स्थान में स्थिर रखा दीपक नहीं हिलता, वैसे ही संयत चित्त योगी की आत्म-योग साधना की उपमा दी गई है।"
    , "As a lamp in a windless place does not flicker — such is the likeness of the yogi of controlled mind practicing concentration on the Self."
    , ["lamp", "meditation", "focus", "दीपक", "ध्यान", "योगी", "एकाग्रता", "meditation"]),

  bg("ध्यान योग", "35", "6",
    "असंशयं महाबाहो मनो दुर्निग्रहं चलम्। अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥"
    , "asaṁśayaṁ mahā-bāho mano dur-nigrahaṁ calam, abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate"
    , "हे महाबाहो! निश्चित ही मन दुर्निग्रह और चंचल है; पर भी हे कुन्तीपुत्र! अभ्यास और वैराग्य से इसे वश में किया जा सकता है।"
    , "Undoubtedly, O mighty-armed one, the mind is restless and hard to restrain; yet it is controlled by practice and detachment, O son of Kunti."
    , ["mind", "practice", "vairagya", "मन", "चंचल", "अभ्यास", "वैराग्य", "control"]),

  bg("ध्यान योग", "47", "6",
    "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना। श्रद्धावान्भजते यो मां स युक्ततमो मतो ॥"
    , "yoginām api sarveṣāṁ mad-gatenāntar-ātmanā, śraddhāvān bhajate yo māṁ sa yukta-tamo mataḥ"
    , "समस्त योगियों में वह श्रेष्ठ योगी माना जाता है जो अंतरात्मा में मुझमें स्थित होकर श्रद्धापूर्वक मेरा भजन करता है।"
    , "Of all yogis, the one who worships Me with faith, with the Self absorbed in Me, is considered the most united with Me."
    , ["yogi", "bhakti", "supreme", "योगी", "भक्ति", "श्रद्धा", "best yogi"]),

  // ─── Chapter 7 ───
  bg("ज्ञान-विज्ञान योग", "7", "7",
    "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय। मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ॥"
    , "mattaḥ para-taraṁ nānyat kiñcid asti dhanañjaya, mayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva"
    , "हे धनंजय! मुझसे परम कोई तत्त्व नहीं है; समस्त जगत् मुझमें ओत-प्रोत है — जैसे सूत में मणियाँ गुँथी रहती हैं।"
    , "O Dhananjaya, there is nothing higher than Me; all this universe is strung upon Me like pearls on a thread."
    , ["supreme", "thread", "pearls", "परम तत्त्व", "सूत्र", "मणि", "गुँथना"]),

  bg("ज्ञान-विज्ञान योग", "14", "7",
    "दैवी ह्येषा गुणमयी मम माया दुरत्यया। मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ॥"
    , "daivī hy eṣā guṇa-mayī mama māyā duratyayā, mām eva ye prapadyante māyām etāṁ taranti te"
    , "यह दैवी, गुणों से बनी मेरी माया है जिसे पार करना अत्यंत कठिन है; जो मुझ एक में शरण पाते हैं केवल वही उस माया को पार कर लेते हैं।"
    , "This divine maya of Mine, made of the gunas, is hard to cross; those who surrender to Me alone cross beyond it."
    , ["maya", "surrender", "दैवी माया", "शरण", "गुण", "illusion"]),

  bg("ज्ञान-विज्ञान योग", "19", "7",
    "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते। वासुदेवः सर्वमिति स महात्मा सुदुर्लभः ॥"
    , "bahūnāṁ janmanām ante jñānavān māṁ prapadyate, vāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ"
    , "अनेक जन्मों के अंत में ज्ञानवान् पुरुष मेरी शरण पाता है — 'वासुदेव ही सब है' जानकर; ऐसा महात्मा अत्यंत दुर्लभ है।"
    , "After many births and deaths, the wise surrender to Me, realizing Vasudeva is all — such a great soul is very rare."
    , ["mahatma", "rare", "जन्म", "ज्ञानी", "वासुदेव", "महात्मा", "सर्वम्"]),

  // ─── Chapter 8 ───
  bg("अक्षर-ब्रह्म योग", "21", "8",
    "अव्यक्तोऽक्षर इत्युक्तस्तमाहुः परमां गतिम्। यं प्राप्य न निवर्तन्ते तद्धाम परमं मम ॥"
    , "avyakto 'kṣara ity uktas tam āhuḥ paramāṁ gatim, yaṁ prāpya na nivartante tad dhāma paramaṁ mama"
    , "अव्यक्त और अक्षर कहा जाने वाला वह ब्रह्म सर्वोत्तम गति कहलाता है; जिसे पाकर पुनः लौटना नहीं होता — वह मेरा परम धाम है।"
    , "That unmanifest, imperishable is called the supreme goal; having attained it, none return — that is My supreme abode."
    , ["brahman", "abode", "imperishable", "अक्षर ब्रह्म", "परम धाम", "गति", "avyakta"]),

  // ─── Chapter 9 ───
  bg("राज-विद्या राज-गुह्य योग", "22", "9",
    "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥"
    , "ananyāś cintayanto māṁ ye janāḥ paryupāsate, teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham"
    , "जो अनन्य चित्त से मेरा चिंतन करते हुए मेरी उपासना करते हैं, मैं उन सदा युक्त भक्तों का योगक्षेम (जो नहीं है उसे देना और जो है उसकी रक्षा) वहन करता हूँ।"
    , "Those who worship Me with exclusive devotion, meditating on My form — I carry what they lack and preserve what they have."
    , ["bhakti", "yogakshema", "provision", "अनन्य भक्ति", "योगक्षेम", "रक्षा", "वहन", "care"]),

  bg("राज-विद्या राज-गुह्य योग", "26", "9",
    "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति। तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥"
    , "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati, tad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ"
    , "जो शुद्ध हृदय से भक्ति भाव से मुझे पत्र, पुष्प, फल या जल अर्पण करता है, मैं उस भक्तिपूर्वक अर्पित प्रसाद को ग्रहण करता हूँ।"
    , "Whoever offers Me with devotion a leaf, a flower, a fruit or water — that offering of love from a pure soul I accept."
    , ["offering", "bhakti", "water", "पत्र", "पुष्प", "फल", "तोय", "अर्पण", "भक्ति", "prasad"]),

  bg("राज-विद्या राज-गुह्य योग", "13", "9",
    "महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः। भजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम् ॥"
    , "mahātmānas tu māṁ pārtha daivīṁ prakṛtim āśritāḥ, bhajanty ananya-manaso jñātvā bhūtādim avyayam"
    , "पर महात्मा हे पार्थ! दैवी प्रकृति को धारण कर जानते हुए कि मैं समस्त भूतों का अविनाशी आदि-स्रोत हूँ, अनन्य मन से मेरा भजन करते हैं।"
    , "But the great souls, O Partha, partaking of My divine nature, knowing Me as the imperishable source of all beings, worship Me with single-minded devotion."
    , ["mahatma", "bhakti", "prakriti", "महात्मा", "दैवी प्रकृति", "भजन"]),

  // ─── Chapter 10 ───
  bg("विभूति योग", "8", "10",
    "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते। इति मत्वा भजन्ते मां बुधा भावसमन्विताः ॥"
    , "ahaṁ sarvasya prabhavo mattaḥ sarvaṁ pravartate, iti matvā bhajante māṁ budhā bhāva-samanvitāḥ"
    , "मैं समस्त जगत् का उद्गम-स्रोत हूँ, मुझसे ही सब प्रवर्तित होता है — यह जानकर बुद्धिमान् भाव-समन्वित होकर मेरा भजन करते हैं।"
    , "I am the origin of all; from Me everything proceeds. Knowing this, the wise worship Me with absorbed devotion."
    , ["origin", "source", "worship", "उद्गम", "स्रोत", "भजन", "बुद्धिमान"]),

  bg("विभूति योग", "11", "10",
    "तेषामेवानुकम्पार्थमहमज्ञानजं तमः। नाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता ॥"
    , "teṣām evānukampārtham aham ajñāna-jaṁ tamaḥ, nāśayāmy ātma-bhāva-stho jñāna-dīpena bhāsvatā"
    , "उन्हीं पर अनुग्रह के लिए मैं अंतरात्मा में स्थित होकर ज्ञान के दीपक से उनके अज्ञान से उत्पन्न अंधकार को नष्ट कर देता हूँ।"
    , "Out of compassion for them, dwelling in their hearts, I destroy the darkness born of ignorance with the radiant lamp of knowledge."
    , ["compassion", "lamp", "knowledge", "अनुग्रह", "ज्ञान-दीप", "अंधकार", "कृपा", "lamp of knowledge"]),

  // ─── Chapter 11 ───
  bg("विश्वरूप दर्शन योग", "32", "11",
    "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः। ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः ॥"
    , "kālo 'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ, ṛte 'pi tvāṁ na bhaviṣyanti sarve ye 'vasthitāḥ pratyanīkeṣu yodhāḥ"
    , "मैं काल हूँ — संसार का संहार करने वाला, अब बढ़ा हुआ समस्त लोकों को समाप्त करने के लिये उद्यत हूँ; तेरे विना भी प्रतिपक्ष में खड़े समस्त योद्धा मारे जाएँगे।"
    , "I am Time, the great destroyer of worlds, grown mighty, engaged here in annihilating these peoples. Even without you, none of the warriors arrayed in hostile ranks shall remain."
    , ["time", "kala", "destruction", "काल", "महाकाल", "संहार", "विश्वरूप", "cosmic form"]),

  bg("विश्वरूप दर्शन योग", "54", "11",
    "भक्त्या त्वनन्यया शक्योऽहमेवंविधोऽर्जुन। ज्ञातुं द्रष्टुं च तत्त्वेन प्रवेष्टुं च परन्तप ॥"
    , "bhaktyā tv ananyayā śakyo 'ham evaṁ-vidho 'rjuna, jñātuṁ draṣṭuṁ ca tattvena praveṣṭuṁ ca parantapa"
    , "हे अर्जुन! केवल अनन्य भक्ति से ही मुझे ऐसे रूप में जानना, देखना और वास्तविक रूप से प्रवेश करना शक्य है।"
    , "By single-minded devotion alone can I be known as I am, seen in truth, and entered into, O scorcher of foes."
    , ["bhakti", "vision", "अनन्य भक्ति", "दर्शन", "प्रवेश", "vishvarupa"]),

  // ─── Chapter 12 ───
  bg("भक्ति योग", "13-14", "12",
    "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च। निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥ सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः। मय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः ॥"
    , "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca, nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī — santuṣṭaḥ satataṁ yogī yatātmā dṛḍha-niścayaḥ, mayy arpita-mano-buddhir yo mad-bhaktaḥ sa me priyaḥ"
    , "जो सब प्राणियों से अद्वेष रखता है, मित्रता और करुणा करता है, निर्मम-निरहंकार है, सुख-दुःख में सम है, क्षमाशील है, सदा संतुष्ट योगी है, आत्म-संयमी है और दृढ़ निश्चय रखता है — जिसका मन-बुद्धि मुझ अर्पित है, वह मेरा भक्त मुझे अत्यंत प्रिय है।"
    , "He who bears no ill will to any being, friendly and compassionate, free from possessiveness and ego, equal in pleasure and pain, forgiving, ever content, self-controlled, firm in resolve, with mind and intellect surrendered to Me — such a devotee of Mine is dear to Me."
    , ["dear devotee", "qualities", "compassion", "प्रिय भक्त", "अद्वेष्टा", "करुणा", "क्षमा", "संतोष"]),

  bg("भक्ति योग", "15", "12",
    "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः। हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः ॥"
    , "yasmān nodvijate loko lokān nodvijate ca yaḥ, harṣāmarṣa-bhaya-udvegair mukto yaḥ sa ca me priyaḥ"
    , "जिससे कोई व्यक्ति विचलित नहीं होता और जो किसी से विचलित नहीं होता, जो हर्ष, अमर्ष, भय और उद्वेग से मुक्त है — वह मुझे प्रिय है।"
    , "He by whom no one is disturbed and who is disturbed by none, free from elation, envy, fear and anxiety — such a one is dear to Me."
    , ["steadiness", "dear", "उद्वेग", "भय", "हर्ष", "अमर्ष", "निर्भीक"]),

  // ─── Chapter 13 ───
  bg("क्षेत्र-क्षेत्रज्ञ योग", "7-8", "13",
    "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम्। आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः ॥ इन्द्रियार्थेषु वैराग्यमनहङ्कार एव च। जन्ममृत्युजराव्याधिदुःखदोषानुदर्शनम् ॥"
    , "amānitvam adambhitvam ahiṁsā kṣāntir ārjavam, ācāryopāsanaṁ śaucaṁ sthairyam ātma-vinigrahaḥ — indriyārtheṣu vairāgyam anahaṅkāra eva ca, janma-mṛtyu-jarā-vyādhi-duḥkha-doṣānudarśanam"
    , "अमानित्व, अदम्भित्व, अहिंसा, क्षमा, सरलता, आचार्य की उपासना, शौच, स्थैर्य, आत्म-संयम; इंद्रिय-विषयों में वैराग्य, अहंकार का अभाव और जन्म-मृत्यु-जरा-व्याधि-दुःख-दोषों का अनुदर्शन — यही ज्ञान है।"
    , "Humility, unpretentiousness, non-violence, forgiveness, uprightness, service of the teacher, purity, steadfastness, self-control; dispassion toward sense objects, absence of ego, and constant awareness of the miseries of birth, death, old age and disease — this is knowledge."
    , ["humility", "non-violence", "knowledge", "अमानित्व", "अहिंसा", "क्षमा", "वैराग्य", "ज्ञान"]),

  bg("क्षेत्र-क्षेत्रज्ञ योग", "12-13", "13",
    "ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वामृतमश्नुते। अनादिमत्परं ब्रह्म न सत्तन्नासदुच्यते ॥ बहिरन्तश्च भूतानामचरं चरमेव च। सूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत् ॥"
    , "jñeyaṁ yat tat pravakṣyāmi yaj jñātvāmṛtam aśnute, anādi-mat paraṁ brahma na sat tan nāsad ucyate — bahir antaś ca bhūtānām acaraṁ caram eva ca, sūkṣmatvāt tad avijñeyaṁ dūra-sthaṁ cāntike ca tat"
    , "वह जानने योग्य परम तत्त्व बतलाता हूँ जिसे जानकर अमृत प्राप्त होता है — वह अनादि, माया-रहित परम ब्रह्म है, न कहा जाता सत् है, न असत्। वह सब भूतों के बाहर भी है, भीतर भी; वह चर और अचर दोनों है; सूक्ष्मता के कारण अविज्ञेय है, दूर भी है और पास भी।"
    , "I shall declare that which is to be known, knowing which one attains immortality — the beginningless supreme Brahman, called neither being nor non-being. It is outside and within beings, unmoving and moving; too subtle to be known, far away and yet very near."
    , ["brahman", "knower", "immortality", "ब्रह्म", "अमृत", "सूक्ष्म", "सर्वव्यापी", "supreme truth"]),

  // ─── Chapter 14 ───
  bg("गुणत्रय विभाग योग", "4", "14",
    "सर्वयोनिषु कौन्तेय मूर्तयः सम्भवन्ति याः। तासां ब्रह्म महद्योनिरहं बीजप्रदः पिता ॥"
    , "sarva-yoniṣu kaunteya mūrtayaḥ sambhavanti yāḥ, tāsāṁ brahma mahad-yonir ahaṁ bīja-pradaḥ pitā"
    , "हे कुन्तीपुत्र! समस्त गर्भ-स्रोतों में जितनी मूर्तियाँ प्रकट होती हैं, उन सबकी महान् योनि ब्रह्म (प्रकृति) है और बीज देने वाले पिता मैं हूँ।"
    , "Whatever forms are born in all wombs, O Kaunteya, the great womb is prakriti (Brahman) and I am the seed-giving father."
    , ["creation", "father", "prakriti", "प्रकृति", "बीज", "पिता", "सृष्टि"]),

  bg("गुणत्रय विभाग योग", "26", "14",
    "मां च योऽव्यभिचारेण भक्तियोगेन सेवते। स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते ॥"
    , "māṁ ca yo 'vyabhicāreṇa bhakti-yogena sevate, sa guṇān samatītyaitān brahma-bhūyāya kalpate"
    , "जो मुझे अव्यभिचारिणी (अनन्य) भक्ति-योग से सेवन करता है, वह इन तीनों गुणों को लाँघकर ब्रह्म-स्वरूप होने को पात्र हो जाता है।"
    , "One who serves Me with unwavering bhakti-yoga crosses beyond the three gunas and becomes worthy of becoming Brahman."
    , ["gunas", "transcend", "bhakti", "गुण", "निर्गुण", "ब्रह्मभूत", "भक्ति"]),

  // ─── Chapter 15 ───
  bg("पुरुषोत्तम योग", "6", "15",
    "न तद्भास्यते सूर्यो न शशाङ्को न पावकः। यद्गत्वा न निवर्तन्ते तद्धाम परमं मम ॥"
    , "na tad bhāsyate sūryo na śaśāṅko na pāvakaḥ, yad gatvā na nivartante tad dhāma paramaṁ mama"
    , "वह मेरा परम धाम न ही सूर्य प्रकाशित करता है, न चंद्रमा, न अग्नि; जहाँ पहुँचकर लौटते नहीं।"
    , "Neither the sun, nor the moon, nor fire illumines that supreme abode of Mine, reaching which one never returns."
    , ["abode", "supreme", "light", "परम धाम", "सूर्य", "चंद्र", "अग्नि", "light"]),

  // ─── Chapter 16 ───
  bg("दैवासुर संपद्विभाग योग", "1-3", "16",
    "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः। दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ॥ अहिंसा सत्यमक्रोधः त्यागः शान्तिरपैशुनम्। दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम् ॥ तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता। भवन्ति सम्पदं दैवीमभिजातस्य भारत ॥"
    , "abhayaṁ sattva-saṁśuddhir jñāna-yoga-vyavasthitiḥ, dānaṁ damaś ca yajñaś ca svādhyāyas tapa ārjavam — ahiṁsā satyam akrodhaḥ tyāgaḥ śāntir apaiśunam, dayā bhūteṣv aloluptvaṁ mārdravaṁ hrīr acāpalam — tejaḥ kṣamā dhṛtiḥ śaucam adroho nātimānitā, bhavanti sampadaṁ daivīm abhijātasya bhārata"
    , "निर्भयता, शुद्ध अंतःकरण, ज्ञान-योग में स्थिति, दान, इंद्रिय-दमन, यज्ञ, स्वाध्याय, तप और सरलता; अहिंसा, सत्य, अक्रोध, त्याग, शान्ति, दूषण से रहित होना, भूतों पर दया, अलोलुप्ता, मार्दव, लज्जा और चपलता का अभाव; तेज, क्षमा, धृति, शौच, अद्रोह और अतिमान का अभाव — हे भारत! ये दैवी संपदा के लक्षण हैं।"
    , "Fearlessness, purity of heart, steadfastness in knowledge-yoga, charity, sense-control, sacrifice, study of self, austerity, uprightness; non-violence, truth, absence of anger, renunciation, tranquility, aversion to faultfinding, compassion for beings, freedom from greed, gentleness, modesty, steadiness; vigor, forgiveness, fortitude, cleanliness, freedom from envy and pride — these, O Bharata, mark the divine endowment."
    , ["divine qualities", "daivi sampada", "virtues", "दैवी संपदा", "अभय", "अहिंसा", "दया", "क्षमा", "virtue"]),

  bg("दैवासुर संपद्विभाग योग", "21", "16",
    "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः। कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ॥"
    , "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ, kāmaḥ krodhas tathā lobhas tasmād etat tryaṁ tyajet"
    , "आत्मा के नाश के लिए नरक के तीन द्वार हैं — काम, क्रोध और लोभ; इसलिए इन तीनों का त्याग कर दे।"
    , "There is a threefold gate of hell destructive of the self — lust, anger and greed; therefore one must abandon these three."
    , ["hell", "three gates", "काम", "क्रोध", "लोभ", "नरक", "तीन द्वार", "vices"]),

  // ─── Chapter 17 ───
  bg("श्रद्धात्रय विभाग योग", "15-16", "17",
    "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्। स्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते ॥ मनःप्रसादः सौम्यत्वं मौनमात्मविनिग्रहः। भावसंशुद्धिरित्येतत्तपो मानसमुच्यते ॥"
    , "anudvega-karaṁ vākyaṁ satyaṁ priya-hitaṁ ca yat, svādhyāyābhyasanaṁ caiva vāṅmayaṁ tapa ucyate — manaḥ-prasādaḥ saumyatvaṁ maunam ātma-vinigrahaḥ, bhāva-saṁśuddhir ity etat tapo mānasam ucyate"
    , "वाणी का तप: ऐसा वचन जो व्यथित न करे, सत्य हो, प्रिय और हितकारी हो, तथा स्वाध्याय का अभ्यास। मन का तप: मनःप्रसाद, सौम्यता, मौन, आत्म-संयम और भाव-शुद्धि।"
    , "Speech austerity: words that cause no distress, truthful, pleasing and beneficial, and the practice of self-study. Mental austerity: serenity of mind, gentleness, silence, self-control and purity of intention."
    , ["speech", "truth", "austerity", "वाक्-तप", "सत्य", "मनःप्रसाद", "मौन", "तप"]),

  // ─── Chapter 18 ───
  bg("मोक्ष-संन्यास योग", "61", "18",
    "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति। भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया ॥"
    , "īśvaraḥ sarva-bhūtānāṁ hṛd-deśe 'rjuna tiṣṭhati, bhrāmayan sarva-bhūtāni yantrārūḍhāni māyayā"
    , "हे अर्जुन! ईश्वर समस्त भूतों के हृदय में स्थित है और माया द्वारा सब भूतों को यंत्र पर चढ़ाये रथ की भाँति घुमाता रहता है।"
    , "The Lord dwells in the hearts of all beings, O Arjuna, causing all beings to revolve as if mounted on a machine by His maya."
    , ["ishvara", "heart", "माया", "हृदय", "ईश्वर", "अंतर्यामी", "यंत्र"]),

  bg("मोक्ष-संन्यास योग", "65", "18",
    "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ॥"
    , "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru, mām evaiṣyasi satyaṁ te pratijāne priyo 'si me"
    , "मेरा चिंतन कर, मेरा भक्त बन, मेरी पूजा कर, मुझे नमस्कार कर — तू मुझे ही प्राप्त होगा; यह मैं तुझसे सत्य वचन देता हूँ क्योंकि तू मुझे प्रिय है।"
    , "Fix your mind on Me, become My devotee, sacrifice to Me, bow to Me — you shall come to Me alone; this truth I promise you, for you are dear to Me."
    , ["surrender", "devotion", "promise", "मन्मना", "भक्त", "प्रिय", "वचन", "mad bhakta"]),

  bg("मोक्ष-संन्यास योग", "66", "18",
    "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥"
    , "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja, ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ"
    , "सब धर्मों का त्याग कर केवल मेरी शरण में आ; मैं तुझे समस्त पापों से मुक्त कर दूँगा — शोक मत कर।"
    , "Abandon all varieties of dharma and just surrender unto Me; I shall deliver you from all sinful reactions — do not grieve."
    , ["surrender", "moksha", "final teaching", "शरणागति", "मोक्ष", "पाप", "चरम उपदेश", "famous", "gita essence"]),

  bg("मोक्ष-संन्यास योग", "73", "18",
    "नष्टो मोहः स्मृतिर्लब्ध्वा कार्यं चोद्यते मया। स्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव ॥"
    , "naṣṭo mohaḥ smṛtir labdhvā kāryaṁ udyate mayā, sthito 'smi gata-sandehaḥ kariṣye vacanaṁ tava"
    , "अर्जुन ने कहा — मेरा मोह नष्ट हो गया, स्मृति प्राप्त हुई; मेरा कर्तव्य स्पष्ट हो गया। मैं संदेह से रहित हो गया हूँ, तेरा आदेश पालन करूँगा।"
    , "Arjuna said: My delusion is destroyed, memory regained; my duty stands clear. I stand free of doubt and shall act according to Your word."
    , ["arjuna", "delusion destroyed", "resolution", "मोह नाश", "स्मृति", "संदेह", "conclusion"]),

  bg("मोक्ष-संन्यास योग", "78", "18",
    "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥"
    , "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ, tatra śrīr vijayo bhūtir dhruvā nītir matir mama"
    , "जहाँ योगेश्वर श्रीकृष्ण हैं और जहाँ धनुर्धर अर्जुन है, वहाँ निश्चित ही श्री, विजय, विभूति और अटल नीति है — यही मेरा मत है।"
    , "Wherever there is Krishna, the Lord of yoga, and wherever there is Arjuna, the wielder of the bow, there fortune, victory, prosperity and unshakable morality surely dwell."
    , ["victory", "krishna", "arjuna", "conclusion", "योगेश्वर", "धनुर्धर", "विजय", "श्री", "final verse"]),
];
