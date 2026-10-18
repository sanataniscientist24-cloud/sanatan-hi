import type { CorpusEntry } from "./types";

const Y = "Yoga Sutras of Patanjali";
const YH = "पातंजल योगसूत्र";

/** Yoga Sutras — Patanjali's 196 aphorisms: key sutras with meaning. */
export const YOGA_SUTRA_ENTRIES: CorpusEntry[] = [
  {
    id: "ys-1-1",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Samadhi Pada 1.1`,
    sectionHi: `${YH} · समाधि पाद 1.1`,
    chapter: "1",
    verse: "1.1",
    sanskrit: "अथ योगानुशासनम् ॥",
    translit: "atha yogānuśāsanam",
    hindi:
      "'अब योग का अनुशासन' — ग्रंथ का पहला सूत्र। 'अथ' शब्द श्रद्धा, विचार और तत्परता से पूर्व-अध्ययन पूरा होने का संकेत देता है: पातंजलि कहते हैं — जब अन्य साधन थक जाते हैं, तब मन के विज्ञान का उपदेश आरम्भ होता है।",
    english:
      "'Now, the discipline of yoga' — the first sutra. The word atha signals that the prior preparation of faith, reflection and longing is complete: when other means are exhausted, begins the instruction in the science of the mind.",
    spanish:
      "'Ahora, la disciplina del yoga' — el primer sutra. La palabra atha señala que la preparación previa de fe, reflexión y anhelo está completa: cuando los demás medios se agotan, comienza la instrucción en la ciencia de la mente.",
    tags: ["patanjali", "atha", "first sutra", "पतंजलि", "अथ योग", "प्रथम सूत्र", "yoga discipline"],
  },
  {
    id: "ys-1-2",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Samadhi Pada 1.2`,
    sectionHi: `${YH} · समाधि पाद 1.2`,
    chapter: "1",
    verse: "1.2",
    sanskrit: "योगश्चित्तवृत्तिनिरोधः ॥",
    translit: "yogaś citta-vṛtti-nirodhaḥ",
    hindi:
      "योग की महामंत्र-परिभाषा: चित्त की वृत्तियों (तरंगों) का निरोध ही योग है। जैसे झील का जल काँप रहा हो तो परछाई झाँकी नहीं पाती, वैसे ही डोलता हुआ मन आत्मा को नहीं देख पाता। वृत्तियाँ शांत होते ही द्रष्टा अपने स्वरूप में स्थित हो जाता है — यही अगला सूत्र (1.3) कहता है।",
    english:
      "The master-definition of yoga: yoga is the stilling of the whirlpools (vrittis) of the mind. As a trembling lake cannot reflect the face, an agitated mind cannot reflect the Self. When the waves subside, the seater rests in his own nature — which is exactly what the next sutra (1.3) declares.",
    spanish:
      "La definición maestra del yoga: yoga es la quietud de los remolinos (vrittis) de la mente. Así como un lago que tiembla no puede reflejar un rostro, una mente agitada no puede reflejar el Sí mismo. Cuando las olas se calman, el que mira reposa en su propia naturaleza — que es justo lo que declara el siguiente sutra (1.3).",
    tags: ["yoga definition", "chitta", "vritti", "nirodha", "योगश्चित्तवृत्तिनिरोध", "चित्त", "वृत्ति निरोध", "most famous", "mind stilling"],
  },
  {
    id: "ys-1-3",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Samadhi Pada 1.3`,
    sectionHi: `${YH} · समाधि पाद 1.3`,
    chapter: "1",
    verse: "1.3",
    sanskrit: "तदा द्रष्टुः स्वरूपेऽवस्थानम् ॥",
    translit: "tadā draṣṭuḥ svarūpe 'vasthānam",
    hindi:
      "वृत्तियाँ निरुद्ध होते ही द्रष्टा अपने स्वरूप में स्थित हो जाता है — शुद्ध, जाग्रत, स्वप्रकाश चेतना। योग का फल दूसरी चीज़ नहीं, अपने ही वास्तविक स्वरूप में घर लौटना है।",
    english:
      "Then the seater abides in his own nature — pure, wakeful, self-luminous awareness. The fruit of yoga is nothing else: a homecoming to one's own true form.",
    spanish:
      "Entonces el que mira mora en su propia naturaleza — conciencia pura, despierta, auto-luminosa. El fruto del yoga no es otra cosa: un regreso al propio hogar de la verdadera forma de uno.",
    tags: ["drashtuh", "svarupa", "seer", "तदा द्रष्टुः स्वरूपेऽवस्थानम्", "द्रष्टा", "आत्मस्वरूप", "self realization"],
  },
  {
    id: "ys-1-14",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Samadhi Pada 1.14`,
    sectionHi: `${YH} · समाधि पाद 1.14`,
    chapter: "1",
    verse: "1.14",
    sanskrit: "स तु दीर्घकालनैरन्तर्यसत्कारासेवितो दृढभूमिः ॥",
    translit: "sa tu dīrgha-kāla-nairantarya-satkārāsevito dṛḍha-bhūmiḥ",
    hindi:
      "अभ्यास की परिभाषा — वह अभ्यास ही दृढ़ भूमि देता है जो दीर्घ काल तक, बिना विराम के और पूर्ण श्रद्धा-सम्मान (सत्कार) के साथ सेवित किया जाए। सप्ताह भर का उत्साह नहीं — जीवन-भर की निष्ठा माँगता यह मार्ग; 1.13 के अभ्यास की यही जड़ें हैं।",
    english:
      "The definition of abhyasa (practice): practice becomes firmly rooted when cultivated for a long time, without interruption, and with reverent devotion. Not a week's enthusiasm but a lifetime's fidelity — that is the ground this path demands; these are the very roots of the practice defined in 1.13.",
    spanish:
      "La definición de abhyasa (práctica): la práctica echa raíces firmes cuando se cultiva durante largo tiempo, sin interrupción y con devota reverencia. No el entusiasmo de una semana, sino la fidelidad de toda una vida — ese es el terreno que exige este camino; estas son las raíces mismas de la práctica definida en 1.13.",
    tags: ["abhyasa", "practice", "patience", "स तु दीर्घकाल", "अभ्यास", "नैरन्तर्य", "दृढभूमि", "consistency"],
  },
  {
    id: "ys-1-15",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Samadhi Pada 1.15`,
    sectionHi: `${YH} · समाधि पाद 1.15`,
    chapter: "1",
    verse: "1.15",
    sanskrit: "दृष्टानुश्रविकविषयवितृष्णस्य वशीकारसंज्ञा वैराग्यम् ॥",
    translit: "dṛṣṭānuśravika-viṣaya-vitṛṣṇasya vaśīkāra-saṁjñā vairāgyam",
    hindi:
      "वैराग्य की परिभाषा — देखे गए और श्रुति-वर्णित भोगों के प्रति जिसकी तृष्णा समाप्त हो गई हो, उसका वशीकार-भाव (स्वामित्व-चेतना) ही वैराग्य है। वैराग्य वस्तुओं का त्याग नहीं — वह तृष्णा का त्याग है जो मनुष्य को विषयों का दासा बना देती है।",
    english:
      "The definition of vairagya (dispassion): the mastery known as vairagya is the consciousness of one free from craving for objects seen or promised in scripture. Not renunciation of things, but of the thirst that makes one their servant.",
    spanish:
      "La definición de vairagya (desapego): el dominio llamado vairagya es la conciencia de quien está libre del ansia de los objetos vistos o prometidos por las escrituras. No la renuncia a las cosas, sino a la sed que vuelve siervo a uno de ellas.",
    tags: ["vairagya", "dispassion", "dṛṣṭānuśravika", "वैराग्य", "वशीकार", "अनासक्ति", "तृष्णा त्याग", "detachment"],
  },
  {
    id: "ys-1-33",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Samadhi Pada 1.33`,
    sectionHi: `${YH} · समाधि पाद 1.33`,
    chapter: "1",
    verse: "1.33",
    sanskrit:
      "मैत्रीकरुणामुदितोपेक्षाणां सुखदुःखपुण्यापुण्यविषयाणां भावनातश्चित्तप्रसादनम् ॥",
    translit:
      "maitrī-karuṇā-muditopekṣāṇāṁ sukha-duḥkha-puṇyāpuṇya-viṣayāṇāṁ bhāvanātaś citta-prasādanam",
    hindi:
      "चित्त-प्रसादन का विख्यात सूत्र — सुखियों से मैत्री, दुःखियों पर करुणा, पुण्यात्माओं में मुदिता और पाप-बुद्धि वालों में उपेक्षा — इन चार भावों की भावना करने से चित्त कमल की तरह निर्मल-प्रसन्न हो जाता है। पतंजलि का सर्वाधिक प्रिय मनोविज्ञान-सूत्र।",
    english:
      "The celebrated sutra of the serene mind: friendship toward the happy, compassion for the sorrowful, delight in the virtuous and disregard for the wicked — the cultivation of these four attitudes makes the mind lucid and glad as a lotus. Patanjali's most beloved psychology.",
    spanish:
      "El célebre sutra de la mente serena: amistad hacia los felices, compasión por los que sufren, alegría por los virtuosos e indiferencia ante los malvados — el cultivo de estas cuatro actitudes vuelve la mente lúcida y serena como un loto. La psicología más querida de Patanjali.",
    tags: ["maitri", "karuna", "chitta prasadanam", "मैत्री", "करुणा", "मुदिता", "उपेक्षा", "चित्त प्रसादन", "four brahmaviharas", "famous"],
  },
  {
    id: "ys-2-1",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Sadhana Pada 2.1`,
    sectionHi: `${YH} · साधन पाद 2.1`,
    chapter: "2",
    verse: "2.1",
    sanskrit: "तपःस्वाध्यायेश्वरप्रणिधानानि क्रियायोगः ॥",
    translit: "tapaḥ svādhyāyeśvara-praṇidhānāni kriyā-yogaḥ",
    hindi:
      "क्रिया-योग की परिभाषा — तप (संकट सहकर शुद्धि का उत्साह), स्वाध्याय (शास्त्र-अध्ययन और प्रणव-जप) और ईश्वर-प्रणिधान (समर्पण भाव)। यही त्रयी गृहस्थ-जीवन में भी जीवा जाने वाली व्यावहारिक साधना है — साधना की दूसरी पुस्तक का आरम्भ।",
    english:
      "The definition of kriya yoga — the yoga of action: austerity (tapas), self-study (svadhyaya) and surrender to the Lord (ishvara-pranidhana). A triad that turns even the householder's daily life into yoga — the opening of the second book of sadhana.",
    spanish:
      "La definición de kriya yoga — el yoga de la acción: austeridad (tapas), estudio de sí mismo (svadhyaya) y entrega al Señor (ishvara-pranidhana). Una tríada que vuelve yoga incluso la vida diaria del hogar — la apertura del segundo libro de la práctica.",
    tags: ["kriya yoga", "tapas", "svadhyaya", "ishvara pranidhana", "क्रिया योग", "तपः", "स्वाध्याय", "ईश्वर प्रणिधान", "action yoga"],
  },
  {
    id: "ys-2-3",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Sadhana Pada 2.3`,
    sectionHi: `${YH} · साधन पाद 2.3`,
    chapter: "2",
    verse: "2.3",
    sanskrit: "अविद्यास्मितारागद्वेषाभिनिवेशाः क्लेशाः ॥",
    translit: "avidyāsmitā-rāga-dveṣābhiniveśāḥ kleśāḥ",
    hindi:
      "पाँच क्लेश — दुःख की जड़ें: अविद्या (अज्ञान), अस्मिता (अहं-भाव), राग (आसक्ति), द्वेष और अभिनिवेश (जीवन की गहरी चिपकाहट)। पतंजलि पहले रोग का निदान करते हैं, फिर औषधि बताते हैं — यही योग-चिकित्सा की पद्धति है।",
    english:
      "The five kleshas — the roots of suffering: ignorance (avidya), egoism (asmita), attachment (raga), aversion (dvesha) and the tenacious will to live (abhinivesha). Patanjali first diagnoses the disease, then prescribes the cure — this is the method of yoga as therapy.",
    spanish:
      "Los cinco kleshas — las raíces del sufrimiento: ignorancia (avidya), egoísmo (asmita), apego (raga), aversión (dvesha) y la tenaz voluntad de vivir (abhinivesha). Patanjali primero diagnostica la enfermedad y luego prescribe el remedio — tal es el método del yoga como terapia.",
    tags: ["klesha", "avidya", "asmita", "अविद्यास्मिता", "क्लेश", "अहंकार", "राग द्वेष", "अभिनिवेश", "five afflictions"],
  },
  {
    id: "ys-2-29",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Sadhana Pada 2.29`,
    sectionHi: `${YH} · साधन पाद 2.29`,
    chapter: "2",
    verse: "2.29",
    sanskrit:
      "यमनियमासनप्राणायामप्रत्याहारधारणाध्यानसमाधयोऽष्टावङ्गानि ॥",
    translit:
      "yama-niyama-āsana-prāṇāyāma-pratyāhāra-dhāraṇā-dhyāna-samādhayaḥ aṣṭāv aṅgāni",
    hindi:
      "राजयोग के आठ अंग — यम (संयम), नियम (नियमित साधना), आसन, प्राणायाम, प्रत्याहार (इंद्रिय-संयम), धारणा (एकाग्रता), ध्यान और समाधि। एक ही सीढ़ी के आठ विराट सोपान: समाज से लेकर आत्म-साक्षात्कार तक।",
    english:
      "The eight limbs of Raja Yoga — yama (restraints), niyama (observances), asana, pranayama, pratyahara (sense-withdrawal), dharana (concentration), dhyana (meditation) and samadhi. Eight steps of one ladder: from social ethics to Self-realization.",
    spanish:
      "Los ocho miembros del Raja Yoga — yama (restricciones), niyama (observancias), asana, pranayama, pratyahara (retirada de los sentidos), dharana (concentración), dhyana (meditación) y samadhi. Ocho peldaños de una sola escalera: de la ética social a la realización del Sí mismo.",
    tags: ["ashtanga", "eight limbs", "yama", "niyama", "अष्टांग योग", "आठ अंग", "राजयोग", "eightfold path"],
  },
  {
    id: "ys-2-30",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Sadhana Pada 2.30`,
    sectionHi: `${YH} · साधन पाद 2.30`,
    chapter: "2",
    verse: "2.30",
    sanskrit: "अहिंसासत्यास्तेयब्रह्मचर्यापरिग्रहा यमाः ॥",
    translit: "ahiṁsā-satya-asteya-brahmacaryāparigrahā yamāḥ",
    hindi:
      "पाँच यम — योग की सामाजिक नींव: अहिंसा, सत्य, अस्तेय (चोरी न करना), ब्रह्मचर्य (संयम) और अपरिग्रह (संग्रह न करना)। ये महाव्रत हैं — देश, काल और परिस्थिति की सीमा से अबाध; योग समाज से ही शुरू होता है।",
    english:
      "The five yamas — yoga's social foundation: non-violence, truthfulness, non-stealing, continence and non-possessiveness. These are the great vows, unbounded by place, time or circumstance — yoga begins with society itself.",
    spanish:
      "Los cinco yamas — el fundamento social del yoga: no violencia, veracidad, no robar, continencia y no posesividad. Estos son los grandes votos, sin límite de lugar, tiempo o circunstancia — el yoga comienza con la sociedad misma.",
    tags: ["yama", "ahimsa", "satya", "अहिंसासत्यास्तेय", "यम", "अहिंसा", "सत्य", "अपरिग्रह", "five restraints", "ethics"],
  },
  {
    id: "ys-2-32",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Sadhana Pada 2.32`,
    sectionHi: `${YH} · साधन पाद 2.32`,
    chapter: "2",
    verse: "2.32",
    sanskrit: "शौचसन्तोषतपःस्वाध्यायेश्वरप्रणिधानानि नियमाः ॥",
    translit: "śauca-saṁtoṣa-tapaḥ svādhyāyeśvara-praṇidhānāni niyamāḥ",
    hindi:
      "पाँच नियम — व्यक्तिगत अनुशासन: शौच (बाह्य-आंतरिक शुद्धि), सन्तोष, तप, स्वाध्याय और ईश्वर-प्रणिधान। यम दूसरों से हमारे संबंध सँवारते हैं, नियम स्वयं के अंतःकरण की स्वच्छता — दोनों पक्षियों के बिना उड़ान नहीं।",
    english:
      "The five niyamas — personal disciplines: purity (shaucha, outer and inner), contentment (santosha), austerity (tapas), self-study (svadhyaya) and surrender to the Lord. The yamas perfect our relations with others; the niyamas the purity of our own heart — without both wings there is no flight.",
    spanish:
      "Los cinco niyamas — disciplinas personales: pureza (shaucha, externa e interna), contentamiento (santosha), austeridad (tapas), estudio de sí mismo (svadhyaya) y entrega al Señor. Los yamas perfeccionan las relaciones con los demás; los niyamas, la pureza del propio corazón — sin ambas alas no hay vuelo.",
    tags: ["niyama", "shaucha", "santosha", "शौचसन्तोष", "नियम", "शौच", "सन्तोष", "tapas", "observances"],
  },
  {
    id: "ys-2-46",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Sadhana Pada 2.46`,
    sectionHi: `${YH} · साधन पाद 2.46`,
    chapter: "2",
    verse: "2.46",
    sanskrit: "स्थिरसुखमासनम् ॥",
    translit: "sthira-sukham āsanam",
    hindi:
      "आसन की परिभाषा — जो स्थिर हो और सुखद हो, वही आसन है। दोनों गुण एक साथ चाहिए: केवल स्थिरता तनाव बन जाए, केवल सुख ढीलेपन बन जाए। ध्यान की देह-नींव इसी संतुलन पर खड़ी है।",
    english:
      "The definition of asana: posture is that which is steady and comfortable. Both qualities are required together — steadiness alone becomes tension, comfort alone becomes slackness. The body-foundation of meditation stands on this balance.",
    spanish:
      "La definición de asana: postura es la que es estable y cómoda. Ambas cualidades se requieren juntas — la estabilidad sola se vuelve tensión, la comodidad sola se vuelve flojedad. El fundamento corporal de la meditación se apoya en este equilibrio.",
    tags: ["asana", "sthira sukha", "posture", "स्थिरसुखमासनम्", "आसन", "स्थिरता", "meditation posture"],
  },
  {
    id: "ys-2-47",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Sadhana Pada 2.47`,
    sectionHi: `${YH} · साधन पाद 2.47`,
    chapter: "2",
    verse: "2.47",
    sanskrit: "प्रयत्नशैथिल्यानन्तसमापत्तिभ्याम् ॥",
    translit: "prayatna-śaithilyānanta-samāpattibhyām",
    hindi:
      "आसन-सिद्धि के दो साधन — प्रयत्न का शिथिल हो जाना और अनन्त (असीम तत्त्व) में समापत्ति (ध्यान)। जैसे ही 'मैं कर रहा हूँ' का तनाव गिरता है, देह स्वयं स्थिर-सुखी हो जाती है — योग यत्न नहीं, त्याग है।",
    english:
      "Perfection of asana comes by two means: the relaxation of effort, and meditation upon the infinite. The moment the tension of 'I am doing' falls away, the body becomes steady and easeful of itself — yoga is not effort but release.",
    spanish:
      "La perfección del asana llega por dos medios: la relajación del esfuerzo y la meditación en lo infinito. En cuanto cae la tensión del 'yo lo estoy haciendo', el cuerpo se vuelve por sí mismo estable y agradable — el yoga no es esfuerzo sino soltar.",
    tags: ["asana siddhi", "prayatna shaithilya", "ananta", "प्रयत्नशैथिल्य", "आसन सिद्धि", "अनन्त", "relaxation", "effortlessness"],
  },
  {
    id: "ys-2-48",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Sadhana Pada 2.48`,
    sectionHi: `${YH} · साधन पाद 2.48`,
    chapter: "2",
    verse: "2.48",
    sanskrit: "ततो द्वन्द्वानभिघातः ॥",
    translit: "tato dvandvānabhighātaḥ",
    hindi:
      "आसन-सिद्धि का फल — तत्पश्चात द्वन्द्व (गर्मी-ठंड, सुख-दुःख, मान-अपमान) प्रहार नहीं कर पाते। देह के विरोधाभासों से परे बैठा साधक उनकी चपेट में नहीं आता — स्थिरता ही अद्वैत की पहली चूँच है।",
    english:
      "The fruit of perfected asana: thereafter one is no longer assailed by the pairs of opposites — heat and cold, pleasure and pain, honour and insult. Seated beyond the body's contradictions, the yogi is not struck by them; steadiness is the first taste of non-duality.",
    spanish:
      "El fruto del asana perfeccionado: en adelante uno ya no es asaltado por los pares de opuestos — calor y frío, placer y dolor, honor e insulto. Sentado más allá de las contradicciones del cuerpo, el yogui no es golpeado por ellas; la estabilidad es el primer gusto de la no-dualidad.",
    tags: ["dvandva", "tato dvandvanabhighatah", "द्वन्द्व", "द्वन्द्वानभिघात", "सुख दुःख", "opposites", "asana fruit", "equanimity"],
  },
  {
    id: "ys-2-49",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Sadhana Pada 2.49`,
    sectionHi: `${YH} · साधन पाद 2.49`,
    chapter: "2",
    verse: "2.49",
    sanskrit: "तस्मिन्सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः ॥",
    translit: "tasmin sati śvāsa-praśvāsayor gati-vicchedaḥ prāṇāyāmaḥ",
    hindi:
      "प्राणायाम की परिभाषा — आसन दृढ़ होने पर (तस्मिन् सति) भीतर-बाहर चलती श्वास-प्रश्वास धारा के गति-विच्छेद (रोक, विस्तार, सम) का विज्ञान ही प्राणायाम है। प्राण मन की लगाम है — श्वास पर अधिकार मन पर अधिकार बन जाता है।",
    english:
      "The definition of pranayama: once the posture is firm, the regulated cutting of the flow of inhalation and exhalation is pranayama. The breath is the rein of the mind — mastery over breath becomes mastery over mind.",
    spanish:
      "La definición de pranayama: una vez firme la postura, el regulado corte del flujo de inhalación y exhalación es pranayama. La respiración es la rienda de la mente — el dominio sobre el aliento se convierte en dominio sobre la mente.",
    tags: ["pranayama", "shvasa prashvasa", "gati viccheda", "प्राणायाम", "श्वास", "प्राण", "breath control", "fourth limb"],
  },
  {
    id: "ys-2-54",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Sadhana Pada 2.54`,
    sectionHi: `${YH} · साधन पाद 2.54`,
    chapter: "2",
    verse: "2.54",
    sanskrit: "स्वविषयासम्प्रयोगे चित्तस्वरूपानुकार इवेन्द्रियाणां प्रत्याहारः ॥",
    translit: "sva-viṣayāsamprayoge citta-svarūpānukāra ivendriyāṇāṁ pratyāhāraḥ",
    hindi:
      "प्रत्याहार की परिभाषा — विषयों से इंद्रियों का सम्पर्क टूटने पर इंद्रियाँ चित्त के स्वरूप का अनुकरण करने लगती हैं — जैसे मधुमक्खियाँ रानी के ठहरने पर ठहर जाती हैं। इंद्रियों को बाहर से अंतर में वापस बुला लेना ही प्रत्याहार है।",
    english:
      "The definition of pratyahara: when the contact of the senses with their objects ceases, the senses imitate the very nature of the mind — as bees settle when their queen rests. The great calling-back of the senses from the outer world into the inner.",
    spanish:
      "La definición de pratyahara: cuando cesa el contacto de los sentidos con sus objetos, los sentidos imitan la propia naturaleza de la mente — como las abejas se posan cuando su reina descansa. El gran llamado de retorno de los sentidos del mundo exterior al interior.",
    tags: ["pratyahara", "sense withdrawal", "प्रत्याहार", "इन्द्रिय संयम", "इन्द्रिय", "चित्त स्वरूप", "senses", "fifth limb"],
  },
  {
    id: "ys-3-1",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Vibhuti Pada 3.1`,
    sectionHi: `${YH} · विभूति पाद 3.1`,
    chapter: "3",
    verse: "3.1",
    sanskrit: "देशबन्धश्चित्तस्य धारणा ॥",
    translit: "deśa-bandhaś cittasya dhāraṇā",
    hindi:
      "धारणा की परिभाषा — चित्त को एक देश (स्थान) में बाँध देना। ध्यान-सीढ़ी का छठा सोपान: बिखरे हुए ध्यान को पहली बार एक बिंदु पर बाँधना — श्वास, मूर्ति, प्रकाश या हृदय-कमल पर।",
    english:
      "The definition of dharana: the binding of consciousness to one place. The sixth limb of the ladder of meditation — for the first time tying the scattered attention to a single point: the breath, an image, a light, or the lotus of the heart.",
    spanish:
      "La definición de dharana: la atadura de la conciencia a un solo lugar. El sexto peldaño de la escalera de la meditación — por primera vez se ata la atención dispersa a un punto único: la respiración, una imagen, una luz o el loto del corazón.",
    tags: ["dharana", "concentration", "देशबन्ध", "धारणा", "एकाग्रता", "sixth limb", "focus", "एक बिंदु"],
  },
  {
    id: "ys-3-2",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Vibhuti Pada 3.2`,
    sectionHi: `${YH} · विभूति पाद 3.2`,
    chapter: "3",
    verse: "3.2",
    sanskrit: "तत्र प्रत्ययैकतानता ध्यानम् ॥",
    translit: "tatra pratyayaikatānatā dhyānam",
    hindi:
      "ध्यान की परिभाषा — वहीं (उसी देश में) ज्ञान-प्रवाह एकतान — एकरस, अखण्ड — हो जाए, वही ध्यान है। धारणा में बँधा ध्यान अब भाँडे से गिरते तेल की धारा की तरह अविच्छिन्न बहने लगता है।",
    english:
      "The definition of dhyana: there, the flow of cognition becomes single and continuous — that is meditation. What dharana bound now flows unbroken, like a stream of oil poured from one vessel into another.",
    spanish:
      "La definición de dhyana: allí, el flujo del conocimiento se vuelve único y continuo — esa es la meditación. Lo que dharana ató, ahora fluye sin interrupción, como un hilo de aceite vertido de un recipiente a otro.",
    tags: ["dhyana", "meditation", "प्रत्ययैकतानता", "ध्यान", "एकतान", "flow", "seventh limb", "धारणा ध्यान"],
  },
  {
    id: "ys-3-3",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Vibhuti Pada 3.3`,
    sectionHi: `${YH} · विभूति पाद 3.3`,
    chapter: "3",
    verse: "3.3",
    sanskrit: "तदेवार्थमात्रनिर्भासं स्वरूपशून्यमिव समाधिः ॥",
    translit: "tad eva artha-mātra-nirbhāsaṁ svarūpa-śūnyam iva samādhiḥ",
    hindi:
      "समाधि की परिभाषा — वही ध्यान जब इतना निर्मल हो जाए कि आत्म-भाव (स्वरूप) शून्य-सा रह जाए और केवल विषय (अर्थ) ही प्रकाशित रहे — वही समाधि है। धारणा-ध्यान की इसी परिपक्वता का नाम समाधि है — त्रयी की अंतिम कीमत।",
    english:
      "The definition of samadhi: that very meditation, when it shines with the object alone — as if emptied of its own form — is samadhi. The matured fruit of dharana and dhyana; the final jewel of the triad that defines the inner limbs of yoga.",
    spanish:
      "La definición de samadhi: esa misma meditación, cuando brilla solo con el objeto — como si quedara vacía de su propia forma — es samadhi. El fruto madurado de dharana y dhyana; la joya final de la tríada que define los miembros internos del yoga.",
    tags: ["samadhi", "tad eva artha matra", "तदेवार्थमात्र", "समाधि", "स्वरूपशून्य", "निर्भास", "absorption", "eighth limb"],
  },
  {
    id: "ys-4-34",
    kind: "verse",
    bookId: "yoga-sutras",
    section: `${Y} · Kaivalya Pada 4.34`,
    sectionHi: `${YH} · कैवल्य पाद 4.34`,
    chapter: "4",
    verse: "4.34",
    sanskrit: "पुरुषार्थशून्यानां गुणानां प्रतिप्रसवः कैवल्यं स्वरूपप्रतिष्ठा वा चितिशक्तिरिति ॥",
    translit: "puruṣārtha-śūnyānāṁ guṇānāṁ pratiprasavaḥ kaivalyaṁ svarūpa-pratiṣṭhā vā citi-śaktir iti",
    hindi:
      "योगसूत्र का अंतिम सूत्र — कैवल्य: जब पुरुष के प्रयोजन को पूर्ण देखकर गुण अपने मूल (प्रकृति) में प्रतिप्रसव को लौट जाते हैं, तब चिति-शक्ति अपने ही स्वरूप में प्रतिष्ठित हो जाती है। शुद्ध चेतना अकेली, विराजमान, स्वप्रकाश — यात्रा का अंत और आरम्भ।",
    english:
      "The final sutra of the Yoga Sutras — kaivalya: when the gunas, having fulfilled their purpose for the seer, flow back into their source, the power of pure consciousness stands established in its own form. Alone, resplendent, self-luminous — the end of the journey and its beginning.",
    spanish:
      "El sutra final de los Yoga Sutras — kaivalya: cuando los gunas, habiendo cumplido su propósito para el que mira, regresan a su origen, el poder de la conciencia pura queda establecido en su propia forma. Solo, resplandeciente, auto-luminoso — el fin del viaje y su comienzo.",
    tags: ["kaivalya", "citi shakti", "कैवल्य", "चितिशक्ति", "प्रतिप्रसव", "गुण", "liberation", "final sutra", "moksha"],
  },
];
