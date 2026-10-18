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
  spanish: string,
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
    spanish,
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
    , "Dhritarashtra preguntó: Oh Sanjaya, reunidos en el sagrado campo de Kurukshetra, ávidos de combatir, ¿qué hicieron mis hijos y los hijos de Pandu?"
    , ["arjuna", "dhritarashtra", "sanjaya", "kurukshetra", "war", "arjun", "अर्जुन", "धृतराष्ट्र", "कुरुक्षेत्र", "युद्ध", "पहला अध्याय"]),

  bg("अर्जुन विषाद योग", "32", "1",
    "न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च। किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा ॥"
    , "na kāṅkṣe vijayaṁ kṛṣṇa na ca rājyaṁ sukhāni ca, kiṁ no rājyena govinda kiṁ bhogair jīvitena vā"
    , "अर्जुन बोले — हे कृष्ण! मुझे न विजय चाहिए, न राज्य और न सुख। हे गोविन्द! राज्य से हमें क्या लाभ, भोगों से क्या प्रयोजन और जीवन से ही क्या काम, जब स्वजन ही विनाश होने वाले हैं। विषाद के इस चरम पर अर्जुन का हृदय विजय-वैभव की समस्त लालसा छोड़ चुका है।"
    , "Arjuna said: I desire not victory, O Krishna, nor kingdom nor pleasures. Of what use is kingdom to us, Govinda — what use are enjoyments, or even life itself? (Arjuna renounces the very spoils of war to spare his kinsmen.)"
    , "Arjuna dijo: No deseo la victoria, oh Krishna, ni el reino ni los placeres. ¿De qué nos sirve el reino, Govinda, de qué los goces, o incluso la vida misma?"
    , ["arjuna", "renunciation", "victory", "kingdom", "अर्जुन", "विजय", "राज्य", "वैराग्य", "विषाद"]),

  bg("अर्जुन विषाद योग", "47", "1",
    "श्रीपार्थो विषीदन्निव आसीनमश्रुपूर्णाकुलः। इदं वचनमब्रवीत् ॥"
    , "śrī-pārtho viṣīdann iva āsīnam aśru-pūrṇākulaḥ, idaṁ vacanam abravīt"
    , "शोक से व्याप्त, आँसुओं से भरी आँखों वाले अर्जुन ने निराश होकर धनुष रख दिया और यह वचन कहा।"
    , "Overwhelmed by grief, his eyes brimming with tears, the despondent Arjuna laid down his bow and spoke thus."
    , "Abrumado por el pesar, con los ojos desbordantes de lágrimas, el desalentado Arjuna dejó a un lado su arco y habló así."
    , ["arjuna", "grief", "vishada", "tears", "अर्जुन", "विषाद", "शोक", "depression", "त्याग"]),

  // ─── Chapter 2 ───
  bg("सांख्य योग", "3", "2",
    "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते। क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ॥"
    , "klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate, kṣudraṁ hṛdaya-daurbalyaṁ tyaktvottiṣṭha parantapa"
    , "श्रीकृष्ण कहते हैं — हे पार्थ! कायरता को मत प्राप्त हो, यह तेरे योग्य नहीं है। यह हृदय की तुच्छ दुर्बलता है — इसे त्यागकर हे शत्रुतापन! तू उठ खड़ा हो। संतप्त चित्त को कर्तव्य की ओर पुनर्जागृत करने वाला यह गीता का प्रथम स्पष्ट आदेश है।"
    , "Yield not to impotence, O Partha, for it does not befit you. Cast off this petty faintness of heart and arise, O scorcher of foes! (The Lord's first command, awakening Arjuna from despair to heroic dharma.)"
    , "No caigas en la impotencia, oh Partha, pues no te corresponde. Abandona esa mezquina flaqueza de corazón y levántate, oh abrasador de enemigos."
    , ["courage", "cowardice", "arise", "command", "क्लैब्य", "साहस", "उत्तिष्ठ", "हृदय दौर्बल्य", "परन्तप"]),

  bg("सांख्य योग", "11", "2",
    "अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे। गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ॥"
    , "aśocyān anvaśocas tvaṁ prajñā-vādāṁś ca bhāṣase, gatāsūn agatāsūṁś ca nānuśocanti paṇḍitāḥ"
    , "हे अर्जुन! जिनके लिए शोक करना उचित नहीं, तू उन्हीं के लिए शोक करता है और वेदांत के वचन बोलता है — विद्वान् मरे हुए और जीवित लोगों दोनों के लिए शोक नहीं करते।"
    , "You grieve for those who should not be grieved for, yet speak words of wisdom — the wise do not mourn for the dead nor for the living."
    , "Te afliges por quienes no merecen aflicción y, sin embargo, pronuncias palabras de sabiduría — los sabios no se afligen por los muertos ni por los vivos."
    , ["grief", "wisdom", "pandit", "mourning", "शोक", "पंडित", "ज्ञान", "consolation"]),

  bg("सांख्य योग", "12", "2",
    "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः। न चैव न भविष्यामः सर्वे वयमतः परम् ॥"
    , "na tv evāhaṁ jātu nāsaṁ na tvaṁ neme janādhipāḥ, na caiva na bhaviṣyāmaḥ sarve vayam ataḥ param"
    , "न मैं कभी नहीं था ऐसा समय नहीं आया, न तू, न ये सब राजा; और आगे भी सब हम नहीं होंगे — ऐसा कभी नहीं होगा।"
    , "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be."
    , "Nunca hubo un tiempo en que Yo no existiera, ni tú, ni todos estos reyes; ni en el futuro dejará alguno de nosotros de ser."
    , ["atman", "soul", "eternal", "existence", "आत्मा", "अमर", "नित्य", "अजन्मा"]),

  bg("सांख्य योग", "13", "2",
    "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा। तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ॥"
    , "dehino 'smin yathā dehe kaumāraṁ yauvanaṁ jarā, tathā dehāntara-prāptir dhīras tatra na muhyati"
    , "जैसे इस देह में जीव की बाल्यावस्था, युवावस्था और वृद्धावस्था होती है, वैसे ही देह छूटने पर दूसरा शरीर मिलता है — धीर पुरुष इसमें मोहित नहीं होता।"
    , "As the embodied soul passes in this body from boyhood to youth to old age, so it passes into another body at death — the self-realized are not bewildered by this."
    , "Así como el alma encarnada pasa en este cuerpo de la infancia a la juventud y a la vejez, del mismo modo pasa a otro cuerpo en la muerte — los autorrealizados no se desconciertan por ello."
    , ["death", "rebirth", "body", "soul", "मृत्यु", "देह", "आत्मा", "जन्म", "पुनर्जन्म", "body change"]),

  bg("सांख्य योग", "14", "2",
    "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः। आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥"
    , "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ, āgamāpāyino 'nityās tāṁs titikṣasva bhārata"
    , "हे कुन्तीपुत्र! शीत-गर्म के ताप-स्पर्श से सुख-दुःख उत्पन्न होते हैं, वे आते-जाते रहने वाले और अनित्य हैं — उन्हें सहन करने का अभ्यास कर।"
    , "O son of Kunti, the contacts of the senses with their objects give cold and heat, pleasure and pain — they come and go, they are impermanent. Endure them, O Bharata."
    , "Oh hijo de Kunti, los contactos de los sentidos con sus objetos dan frío y calor, placer y dolor — vienen y van, son impermanentes. Toléralos, oh Bharata."
    , ["endurance", "titiksha", "pleasure", "pain", "सुख", "दुख", "दुःख", "सहन", "अनित्य", "patience", "तितिक्षा"]),

  bg("सांख्य योग", "15", "2",
    "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ। समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते ॥"
    , "yaṁ hi na vyathayanty ete puruṣaṁ puruṣa-ṛṣabha, sama-duḥkha-sukhaṁ dhīraṁ so 'mṛtatvāya kalpate"
    , "हे पुरुषश्रेष्ठ! जिस धीर पुरुष को शीत-गर्म आदि ये ताप व्यथित नहीं करते और जो सुख-दुःख में सम रहता है, वही अमृतत्व के योग्य हो जाता है। संतापों की अनित्यता का ज्ञान कर समता धारण करना ही अमरता का द्वार बताया गया है।"
    , "The one whom these afflict not, O best of men, who is even in pleasure and pain and firm — such a one becomes fit for immortality. (Steadiness amid the passing heat and cold opens the gate to deathlessness.)"
    , "Oh el mejor de los hombres: a quien estas cosas no lo afligen, quien permanece ecuánime en el placer y el dolor y se mantiene firme — ese se hace digno de la inmortalidad. (La firmeza ante el frío y el calor pasajeros abre la puerta a la inmortalidad.)"
    , ["equanimity", "immortality", "pain", "pleasure", "समता", "अमृतत्व", "धीर", "व्यथा", "endurance"]),

  bg("सांख्य योग", "16", "2",
    "नासतो विद्यते भावो नाभावो विद्यते सतः। उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः ॥"
    , "nāsato vidyate bhāvo nābhāvo vidyate sataḥ, ubhayor api dṛṣṭo 'ntas tv anayos tatva-darśibhiḥ"
    , "असत् का कोई वास्तविक भाव नहीं होता और सत् का कभी अभाव नहीं होता; इन दोनों का अंत तत्त्व के दर्शी पुरुषों ने भली-भाँति देख लिया है। शरीर जैसा असत् नाश को प्राप्त होता है, परंतु आत्मा जैसा सत् सदा रहता है — यही सत्-असत् का विवेक ज्ञान की आधारशिला है।"
    , "The unreal has no being; the real never ceases to be. Of both these the truth has been seen by the seers of the essential. (The foundational distinction between the perishable body and the imperishable soul.)"
    , "Lo irreal no tiene ser; lo real jamás deja de ser. La verdad de ambos la han visto los videntes de lo esencial."
    , ["sat", "asat", "real", "unreal", "सत्", "असत्", "तत्त्वदर्शी", "भाव", "अभाव", "reality"]),

  bg("सांख्य योग", "20", "2",
    "न जायते म्रियते वा कदाचि-न्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥"
    , "na jāyate mriyate vā kadāci-n nāyaṁ bhūtvā bhavitā vā na bhūyaḥ, ajo nityaḥ śāśvato 'yaṁ purāṇo na hanyate hanyamāne śarīre"
    , "आत्मा न कभी जन्म लेता है, न कभी मरता है; यह भूतकाल में उत्पन्न होकर आगे पुनः उत्पन्न नहीं होगा — यह अजन्मा, नित्य, शाश्वत और पुरातन है; शरीर के मारे जाने पर भी यह नहीं मारा जाता।"
    , "The soul is never born, nor does it ever die; having once been, it will never again cease to be. Unborn, eternal, everlasting and primeval — it is not slain when the body is slain."
    , "El alma jamás nace ni muere; una vez que ha sido, nunca dejará de ser. No nacida, eterna, sempiterna y primigenia — no es matada cuando el cuerpo es matado."
    , ["soul", "atman", "immortal", "eternal", "आत्मा", "अमर", "नित्य", "अविनाशी", "जन्म मृत्यु"]),

  bg("सांख्य योग", "22", "2",
    "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि। तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही ॥"
    , "vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi, tathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī"
    , "जैसे मनुष्य पुराने वस्त्र त्याग कर नए वस्त्र धारण करता है, वैसे ही देही जीर्ण शरीरों को त्याग कर नए शरीरों को प्राप्त होता है।"
    , "As a person casts off worn-out garments and puts on new ones, so the embodied soul casts off worn-out bodies and enters new ones."
    , "Así como una persona se despoja de las ropas gastadas y viste otras nuevas, así el alma encarnada abandona los cuerpos desgastados y entra en otros nuevos."
    , ["death", "body", "garment", "soul", "मृत्यु", "शरीर", "वस्त्र", "आत्मा", "बदलाव"]),

  bg("सांख्य योग", "23-24", "2",
    "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः। न चैनं क्लेदयन्त्यापो न शोषयति मारुतः ॥ अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च। नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः ॥"
    , "nainaṁ chindanti śastrāṇi nainaṁ dahati pāvakaḥ, na cainaṁ kledayanty āpo na śoṣayati mārutaḥ — acchedyo 'yam adāhyo 'yam akledyo 'śoṣya eva ca, nityaḥ sarva-gataḥ sthāṇur acalo 'yam sanātanaḥ"
    , "आत्मा को शस्त्र नहीं काट सकते, आग नहीं जला सकती, जल गला नहीं सकता और वायु सुखा नहीं सकती। यह अखंडनीय, अदाह्य, अक्लेद्य और असूश्य है — नित्य, सर्वव्यापी, स्थिर, अचल और सनातन है।"
    , "Weapons cannot cut the soul, nor can fire burn it, water cannot wet it, nor wind dry it. It is unbreakable, unburnable, unwetable and undryable — eternal, all-pervading, fixed, immovable and everlasting."
    , "Ni las armas pueden cortar el alma, ni el fuego puede quemarla, ni el agua puede mojarla, ni el viento puede secarla. Es irrompible, incombustible, no puede humedecerse ni desecarse — eterna, omnipresente, fija, inamovible y sempiterna."
    , ["invincible", "eternal", "soul", "अविनाशी", "अखंडनीय", "आत्मा", "नित्य", "अजेय"]),

  bg("सांख्य योग", "27", "2",
    "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च। तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि ॥"
    , "jātasya hi dhruvo mṛtyur dhruvaṁ janma mṛtasya ca, tasmād aparihārye 'rthe na tvaṁ śocitum arhasi"
    , "जो जन्म लेता है उसकी मृत्यु अवश्यंभावी है और जो मर चुका है उसका पुनर्जन्म भी निश्चित — इस अनिवार्य नियम के विषय में तुझे शोक नहीं करना चाहिए। देह का जन्म-मृत्यु क्रम प्रकृति का नियम है, आत्मा तो अजन्मा और अविनाशी है।"
    , "Certain is death for the born, and certain is rebirth for the dead; over the inevitable therefore you should not grieve. (The law of the body's cycle offered as consolation.)"
    , "Cierta es la muerte para el nacido, y cierto el renacimiento para el muerto; ante lo inevitable, por tanto, no debes afligirte."
    , ["death", "birth", "inevitable", "grief", "मृत्यु", "जन्म", "ध्रुव", "अनिवार्य", "शोक"]),

  bg("सांख्य योग", "40", "2",
    "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते। स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात् ॥"
    , "neha 'bhikrama-nāśo 'sti pratyavāyo na vidyate, svalpam apy asya dharmasya trāyate mahato bhayāt"
    , "इस (निष्काम कर्म) पथ में आरंभ किए पुरुषार्थ का नाश नहीं होता और विपरीत दोष भी नहीं लगता; इस धर्म का थोड़ा भी अभ्यास बड़े भय से रक्षा कर लेता है। अन्य कर्मों की भाँति इसका कोई अभ्यास कभी व्यर्थ नहीं जाता — यही इस मार्ग की विशेष महिमा है।"
    , "In this path there is no loss of effort, nor any adverse result; even a little practice of this dharma protects one from great fear. (No sincere step on this yoga is ever wasted.)"
    , "En este camino no hay pérdida de esfuerzo ni resultado adverso; incluso un poco de este dharma protege del gran temor. (Ningún paso sincero en este yoga es jamás en vano.)"
    , ["effort", "no loss", "fearless", "nishkama karma", "अभिक्रम", "प्रत्यवाय", "भय", "धर्म", "reassurance"]),

  bg("सांख्य योग", "47", "2",
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥"
    , "karmaṇy evādhikāras te mā phaleṣu kadācana, mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi"
    , "कर्म करने में ही तेरा अधिकार है, उसके फलों में कभी नहीं। तू कर्मफल का हेतु (कारण) मत बन, न ही तेरी आसक्ति अकर्म में रहे।"
    , "You have a right to perform your prescribed duties, but never to the fruits of your actions. Never consider yourself the cause of the results of your activities, nor let your attachment be to inaction."
    , "Tienes derecho a realizar tus deberes prescritos, pero nunca a los frutos de tus acciones. Jamás te consideres la causa de los resultados de tus actividades, ni dejes que tu apego se fije en la inacción."
    , ["karma", "action", "fruit", "duty", "nishkama", "कर्म", "फल", "कर्तव्य", "अधिकार", "आसक्ति", "famous", "निष्काम कर्म"]),

  bg("सांख्य योग", "48", "2",
    "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥"
    , "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya, siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate"
    , "हे धनंजय! योग में स्थित होकर, आसक्ति त्यागकर कर्म कर; सिद्धि और असिद्धि में सम रह — यही समत्व योग कहलाता है।"
    , "Perform your duties established in yoga, abandoning attachment, O Dhananjaya, being equal in success and failure — such evenness is called yoga."
    , "Cumple tus deberes establecido en yoga, abandonando el apego, oh Dhananjaya, permaneciendo igual en el éxito y el fracaso — esa ecuanimidad se llama yoga."
    , ["yoga", "equanimity", "samatva", "योग", "समत्व", "समता", "सिद्धि", "balance"]),

  bg("सांख्य योग", "50", "2",
    "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते। तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् ॥"
    , "buddhi-yukto jahātīha ubhe sukṛta-duṣkṛte, tasmād yogāya yujyasva yogaḥ karmasu kauśalam"
    , "बुद्धियुक्त (युक्त-बुद्धि) पुरुष इसी जन्म में पुण्य और पाप दोनों को त्याग देता है, इसलिए योग के लिए प्रयत्न कर — कर्मों में कुशलता ही योग है।"
    , "One disciplined by intelligence sheds both good and evil karma in this very life; therefore strive for yoga — yoga is skill in action."
    , "Quien está disciplinado por la inteligencia se libra en esta misma vida del karma bueno y del malo; por ello, esfuérzate por el yoga — yoga es la destreza en la acción."
    , ["yoga", "skill", "karma", "योग", "कौशल", "कर्म", "बुद्धि"]),

  bg("सांख्य योग", "54-55", "2",
    "अर्जुन उवाच — स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव। स्थितधीः किं प्रभाषेत किमासीत व्रजेत किम् ॥ श्रीभगवानुवाच — प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान्। आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते ॥"
    , "arjuna uvāca — sthita-prajñasya kā bhāṣā samādhi-sthasya keśava, sthita-dhīḥ kiṁ prabhāṣeta kim āsīta vrajeta kim — śrī-bhagavān uvāca — prajahāti yadā kāmān sarvān pārtha mano-gatān, ātmany evātmanā tuṣṭaḥ sthita-prajñas tad ucyate"
    , "अर्जुन ने पूछा — हे केशव! समाधि में स्थित स्थितप्रज्ञ पुरुष की भाषा कैसी होती है? वह कैसे बोलता है, कैसे बैठता है और कैसे विचरण करता है? श्रीभगवान बोले — जब पुरुष मन में स्थित समस्त कामनाओं को पूर्णतः त्याग देता है और केवल आत्मा में ही आत्मा से तृप्त रहता है, तब वह स्थितप्रज्ञ कहलाता है। दूसरे अध्याय के उत्तरार्ध का यही प्रश्नोत्तर स्थितप्रज्ञ-प्रकरण का प्रवेशद्वार है।"
    , "Arjuna asked: What is the language of the man of steady wisdom seated in samadhi — how does he speak, sit and move? The Blessed Lord said: When one wholly casts off the desires of the mind and is content in the Self alone, then one is called a man of steady wisdom. (The celebrated question and answer that define sthitaprajna.)"
    , "Arjuna preguntó: ¿Cuál es el lenguaje del hombre de sabiduría estable sentado en samadhi, cómo habla, cómo se sienta, cómo se mueve? El Señor dijo: Cuando uno abandona por completo los deseos de la mente y queda satisfecho en el Sí mismo solo, entonces es llamado hombre de sabiduría estable."
    , ["sthitaprajna", "steady wisdom", "desirelessness", "स्थितप्रज्ञ", "समाधि", "कामना त्याग", "आत्मतृप्ति", "definition"]),

  bg("सांख्य योग", "56", "2",
    "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः। वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते ॥"
    , "duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ, vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate"
    , "दुःखों में जिसका मन विचलित नहीं होता, सुखों की इच्छा नहीं रहती, राग-भय-क्रोध से रहित — ऐसा स्थिर बुद्धि मुनि स्थितप्रज्ञ कहलाता है।"
    , "One whose mind remains undisturbed in sorrow, who is free from longing for pleasure, and who is beyond attachment, fear and anger — such a sage of steady wisdom is called sthitaprajna."
    , "Aquel cuya mente permanece imperturbable en el dolor, que está libre del anhelo de placer y que ha trascendido el apego, el miedo y la ira — tal sabio de sabiduría estable es llamado sthitaprajna."
    , ["sthitaprajna", "equanimity", "sage", "स्थितप्रज्ञ", "मुनि", "राग", "क्रोध", "भय", "steady wisdom"]),

  bg("सांख्य योग", "58", "2",
    "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः। इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ॥"
    , "yadā saṁharate cāyaṁ kūrmo 'ṅgānīva sarvaśaḥ, indriyāṇīndriyārthebhyas tasya prajñā pratiṣṭhitā"
    , "जैसे कछुआ अपने समस्त अंगों को सब ओर से भीतर खींच लेता है, वैसे ही जब पुरुष अपनी इंद्रियों को इंद्रिय-विषयों से सर्वथा समेट लेता है, तब उसकी प्रज्ञा दृढ़ होती है। इंद्रियों की विषयों से यह वापसी — प्रत्याहार — ध्यान की पहली सीढ़ी बताई गई है।"
    , "When, like the tortoise withdrawing its limbs from every side, one gathers in the senses from their objects, one's wisdom stands firm. (The classic tortoise simile for pratyahara, withdrawal of the senses.)"
    , "Cuando, como la tortuga que recoge sus patas de todas partes, uno recoge los sentidos de sus objetos, su sabiduría se mantiene firme."
    , ["tortoise", "senses", "withdrawal", "pratyahara", "कूर्म", "कछुआ", "इंद्रिय संयम", "प्रत्याहार", "प्रज्ञा"]),

  bg("सांख्य योग", "62-63", "2",
    "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ॥ क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः। स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ॥"
    , "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate, saṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate — krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ, smṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati"
    , "विषयों का चिंतन करने वाले पुरुष की उनमें आसक्ति बनती है, आसक्ति से कामना उत्पन्न होती है, कामना से क्रोध होता है; क्रोध से सम्मोह, सम्मोह से स्मृति-भ्रम, स्मृति नष्ट होने से बुद्धि का नाश और बुद्धि नष्ट होने पर पुरुष नष्ट हो जाता है।"
    , "Brooding on sense objects breeds attachment; attachment begets craving, and craving begets anger. Anger breeds delusion; delusion confuses memory; ruined memory destroys intelligence, and lost intelligence destroys the person."
    , "Rumiar los objetos de los sentidos engendra apego; del apego nace el deseo, y del deseo, la ira. De la ira nace el engaño; del engaño, la confusión de la memoria; la memoria perdida destruye la inteligencia, y perdida la inteligencia, la persona queda destruida."
    , ["anger", "kama", "attachment", "mind", "क्रोध", "काम", "आसक्ति", "मोह", "चित्त", "fall of man", "chain"]),

  bg("सांख्य योग", "64", "2",
    "रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन्। आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति ॥"
    , "rāga-dveṣa-viyuktais tu viṣayān indriyaiś caran, ātma-vaśyair vidheyātmā prasādam adhigacchati"
    , "राग-द्वेष से रहित इंद्रियों से विषयों में विचरण करता हुआ, वश में की हुई इंद्रियों वाला और संयत अंतःकरण का पुरुष चित्त की पवित्र शांति (प्रसाद) को प्राप्त होता है। विषयों से भागना नहीं — राग-द्वेष का त्याग करते हुए उनमें आचरण करना ही वास्तविक साधना बताई गई है।"
    , "Moving among sense objects with the senses free of attraction and aversion, self-governed and disciplined, one attains the serenity of mind called prasada. (Not flight from the world, but freedom from craving while living in it.)"
    , "Moviéndose entre los objetos de los sentidos con los sentidos libres de atracción y aversión, dueño de sí y disciplinado, se alcanza la serenidad de la mente llamada prasada. (No la huida del mundo, sino la libertad del anhelo viviendo en él.)"
    , ["raga", "dvesha", "senses", "prasada", "राग", "द्वेष", "प्रसाद", "इंद्रिय", "serenity", "संयम"]),

  bg("सांख्य योग", "67", "2",
    "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते। तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि ॥"
    , "indriyāṇāṁ hi caratāṁ yan mano 'nuvidhīyate, tad asya harati prajñāṁ vāyur nāvam ivāmbhasi"
    , "विषयों में विचरण करती हुई इंद्रियों के बीच जिस विषय का अनुसरण मन करने लगता है, वही विषय उस पुरुष की बुद्धि को हर लेता है — जैसे जल पर खड़ी नौका को प्रबल वायु बहा ले जाती है। इसीलिए स्थितप्रज्ञ के लिए विषयों से चित्त की रक्षा प्रथम आवश्यकता बताई गई है।"
    , "Among the roaming senses, whatever object the wandering mind pursues, that alone carries away one's discernment — as the wind carries off a boat on the waters. (Why the mind must be guarded from sense objects for wisdom to stand.)"
    , "Entre los sentidos que deambulan, cualquier objeto que la mente errante persiga, ese solo se lleva el discernimiento — como el viento se lleva una barca sobre las aguas."
    , ["mind", "senses", "boat", "wind", "मन", "इंद्रियाँ", "नौका", "वायु", "प्रज्ञा", "discernment"]),

  bg("सांख्य योग", "69", "2",
    "या निशा सर्वभूतानां तस्यां जागर्ति संयमी। यस्यां जागृति भूतानि सा निशा पश्यतो मुनेः ॥"
    , "yā niśā sarva-bhūtānāṁ tasyāṁ jāgarti saṁyamī, yasyāṁ jāgṛti bhūtāni sā niśā paśyato muneḥ"
    , "जो समस्त प्राणियों के लिए रात्रि है, उसी में आत्म-संयमी पुरुष जागृत रहता है; और जिसमें समस्त प्राणी जागृत रहते हैं, वह तत्त्व का दर्शन करने वाले मुनि के लिए रात्रि है। सांसारिक सुखों का अंधकार और आत्म-ज्ञान का प्रकाश — दोनों की दृष्टि परस्पर उलटी है।"
    , "What is night for all beings, in that the self-controlled one keeps awake; that in which all beings are awake is night for the seer of truth. (The striking reversal of values between the worldling and the sage.)"
    , "Lo que es noche para todos los seres, en eso permanece despierto el dueño de sí; aquello en lo que todos los seres están despiertos es noche para el vidente de la verdad."
    , ["night", "awakening", "seer", "self-control", "निशा", "जागृति", "संयमी", "मुनि", "दर्शन", "paradox"]),

  bg("सांख्य योग", "71", "2",
    "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः। निर्ममो निरहङ्कारः स शान्तिमाप्नोति ॥"
    , "vihāya kāmān yaḥ sarvān pumāṁś carati niḥspṛhaḥ, nirmamo nirahaṅkāraḥ sa śāntim āpnoti"
    , "समस्त कामनाओं का परित्याग करके जो पुरुष निःस्पृह, निर्मम और निरहंकार होकर विचरण करता है, वही शान्ति को प्राप्त होता है।"
    , "One who abandons all desires, moves about free of longing, without possessiveness and ego — that one attains peace."
    , "Quien abandona todos los deseos y se mueve libre de ansias, sin posesividad ni ego — ese alcanza la paz."
    , ["peace", "shanti", "desireless", "शान्ति", "कामना", "निःस्पृह", "अहंकार", "ममता"]),

  bg("सांख्य योग", "72", "2",
    "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति। स्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति ॥"
    , "eṣā brāhmī sthitiḥ pārtha naināṁ prāpya vimuhyati, sthitvāsyām anta-kāle 'pi brahma-nirvāṇam ṛcchati"
    , "हे पार्थ! यह ब्राह्मी स्थिति है — इसे पाकर पुरुष मोहित नहीं होता; अंतकाल में भी इस स्थिति में स्थित रहकर ब्रह्म-निर्वाण (परम शान्ति) को प्राप्त होता है।"
    , "This is the divine, brahmic state, O Partha; attaining it one is never deluded. Abiding in it even at the hour of death, one reaches the nirvana of Brahman."
    , "Este es el estado divino y brahmánico, oh Partha; quien lo alcanza jamás se extravía. Permaneciendo en él incluso a la hora de la muerte, se llega al nirvana de Brahman."
    , ["brahman", "liberation", "final", "ब्रह्म", "मोक्ष", "निर्वाण", "शान्ति"]),

  // ─── Chapter 3 ───
  bg("कर्म योग", "13", "3",
    "यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः। भुञ्जते त्वघं पापा ये पचन्त्यात्मकारणात् ॥"
    , "yajña-śiṣṭāśinaḥ santo mucyante sarva-kilbiṣaiḥ, bhuñjate te aghaṁ pāpā ye pacanty ātma-kāraṇāt"
    , "यज्ञ का शेष भोजन करने वाले साधु पुरुष समस्त पापों से मुक्त हो जाते हैं, परंतु जो पापी लोग केवल अपने भोग के लिए पकाते हैं, वे पाप ही खाते हैं। भोजन से पूर्व भगवान को अर्पण कर उसका प्रसाद ग्रहण करना — यही भारतीय आहार-संस्कृति की मर्यादा है।"
    , "The saintly who eat the remnants of sacrifice are freed from all sins; but the sinners who cook only for themselves eat sin. (The sanctity of offering food first — the root of the practice of prasada.)"
    , "Los santos que comen los restos del sacrificio quedan libres de todos los pecados; pero los pecadores que cocinan solo para sí, comen pecado."
    , ["food", "prasada", "yajna", "sin", "यज्ञ", "भोजन", "प्रसाद", "अन्न", "पाप", "offering"]),

  bg("कर्म योग", "19", "3",
    "तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ॥"
    , "tasmād asaktaḥ satataṁ kāryaṁ karma samācara, asakto hy ācaran karma param āpnoti pūruṣaḥ"
    , "इसलिए आसक्ति रहित होकर सदा तेरा कर्तव्य-कर्म कर — आसक्ति रहित होकर कर्म करने वाला पुरुष परम को प्राप्त होता है।"
    , "Therefore, always perform your duty without attachment, for by doing work without attachment one attains the Supreme."
    , "Por lo tanto, cumple siempre tu deber sin apego, pues quien obra sin apego alcanza al Supremo."
    , ["karma", "detachment", "supreme", "कर्म", "निष्काम", "आसक्ति", "परम"]),

  bg("कर्म योग", "21", "3",
    "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः। स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥"
    , "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ, sa yat pramāṇaṁ kurute lokas tad anuvartate"
    , "महापुरुष जो-जो कर्म करते हैं, अन्य सामान्य जन भी वही करते हैं; जो मान्यता वे स्थापित कर देते हैं, उसका ही अनुसरण समस्त लोग करता है। इसीलिए श्रेष्ठ लोगों का आचरण ही समाज का प्रथम शास्त्र बन जाता है और उन पर लोक-कल्याण का विशेष उत्तरदायित्व आता है।"
    , "Whatever the great do, that other people also do; whatever example the best set, the world follows. (The responsibility of leaders — their conduct becomes the unwritten scripture of society.)"
    , "Lo que hacen los grandes, eso hacen también los demás hombres; el ejemplo que establecen los mejores, el mundo lo sigue."
    , ["example", "leadership", "conduct", "great souls", "श्रेष्ठ", "आदर्श", "आचरण", "प्रमाण", "अनुसरण", "responsibility"]),

  bg("कर्म योग", "27", "3",
    "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः। अहङ्कारविमूढात्मा कर्ताहमिति मन्यते ॥"
    , "prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ, ahaṅkāra-vimūḍhātmā kartāham iti manyate"
    , "समस्त कर्म सर्वथा प्रकृति के गुणों द्वारा ही किए जाते हैं; अहंकार से मोहित आत्मा \"मैं कर्ता हूँ\" ऐसा मान बैठता है। साधक को कर्तृत्व-अभिमान त्यागकर केवल गुणों की ही वृत्ति समझना चाहिए — यही निष्काम कर्म की आधार-बुद्धि है।"
    , "All actions are in every way performed by the qualities of nature (prakriti); one deluded by ego imagines, \"I am the doer.\" (The gunas alone act — ego merely claims their work.)"
    , "Todas las acciones son en todo sentido realizadas por las cualidades de la naturaleza (prakriti); quien está engañado por el ego imagina: \"Yo soy el hacedor\". (Los gunas actúan solos; el ego solo se atribuye su obra.)"
    , ["prakriti", "gunas", "ego", "doer", "प्रकृति", "गुण", "अहंकार", "कर्ता", "मोह", "nimitta"]),

  bg("कर्म योग", "35", "3",
    "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥"
    , "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭitāt, sva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ"
    , "श्रेष्ठ है अपना स्वधर्म (यद्यपि उसमें त्रुटि हो) पर-धर्म की अच्छी तरह की हुई आचरण से भी; अपने धर्म में मरण भी श्रेष्ठ है — पर-धर्म भयंकर है।"
    , "Better is one's own dharma though imperfect, than the dharma of another well performed; better is death in one's own dharma — the dharma of another is fraught with fear."
    , "Mejor es el propio dharma aunque imperfecto, que el dharma de otro bien cumplido; mejor es morir en el propio dharma — el dharma de otro está cargado de temor."
    , ["svadharma", "duty", "dharma", "स्वधर्म", "धर्म", "कर्तव्य", "own path"]),

  bg("कर्म योग", "37", "3",
    "काम एष क्रोध एष रजोगुणसमुद्भवः। महाशनो महापाप्म विद्ध्येनमिह वैरिणम् ॥"
    , "kāma eṣa krodha eṣa rajo-guṇa-samudbhavaḥ, mahāśano mahāpāpma viddhy enam iha vairiṇam"
    , "यही काम है, यही क्रोध है — यह रजोगुण से उत्पन्न, महाशन (सब ग्रसन करने वाला) और महापापी है; इसी को इस जगत् में तेरा शत्रु जान।"
    , "It is desire, it is anger, born of rajas — the all-devouring, most sinful. Know this to be the enemy here."
    , "Es el deseo, es la ira, nacido del rajas — el devorador de todo, el más pecaminoso. Sabe que este es el enemigo aquí."
    , ["desire", "anger", "enemy", "काम", "क्रोध", "रजोगुण", "शत्रु", "वैरी"]),

  bg("कर्म योग", "42", "3",
    "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः। मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः ॥"
    , "indriyāṇi parāṇy āhur indriyebhyaḥ paraṁ manaḥ, manasas tu parā buddhir yo buddheḥ paratas tu saḥ"
    , "इंद्रियाँ शरीर से बड़ी कहलाती हैं, उनसे बड़ा मन है, मन से बड़ी बुद्धि है और जो बुद्धि से भी परे है वह (आत्मा) बड़ा है।"
    , "The senses are superior to the body; superior to the senses is the mind; beyond the mind is the intellect; and beyond the intellect is the Self."
    , "Los sentidos son superiores al cuerpo; superior a los sentidos es la mente; más allá de la mente está el intelecto; y más allá del intelecto está el Sí mismo."
    , ["senses", "mind", "intellect", "self", "इंद्रियाँ", "मन", "बुद्धि", "आत्मा", "hierarchy"]),

  // ─── Chapter 4 ───
  bg("ज्ञान-कर्म-संन्यास योग", "7-8", "4",
    "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥ परित्राणाय साधूनां विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥"
    , "yadā yadā hi dharmasya glānir bhavati bhārata, abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham — paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām, dharma-saṁsthāpanārthāya sambhavāmi yuge yuge"
    , "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं को प्रकट करता हूँ। साधु पुरुषों की रक्षा के लिए, दुष्कर्म करने वालों के विनाश के लिए और धर्म की स्थापना के लिए मैं युग-युग में अवतरित होता हूँ।"
    , "Whenever there is decline of dharma and rise of adharma, O Bharata, I manifest Myself. To protect the righteous, to destroy the wicked, and to establish dharma, I take birth age after age."
    , "Siempre que hay declive del dharma y auge del adharma, oh Bharata, Yo Me manifiesto. Para proteger a los justos, destruir a los malvados y restablecer el dharma, Yo nazco era tras era."
    , ["avatar", "incarnation", "dharma", "यदा यदा हि धर्मस्य", "अवतार", "धर्म", "कल्कि", "राम", "कृष्ण", "protection", "famous", "विष्णु"]),

  bg("ज्ञान-कर्म-संन्यास योग", "9", "4",
    "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः। त्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन ॥"
    , "janma karma ca me divyam evaṁ yo vetti tattvataḥ, tyaktvā dehaṁ punar janma naiti mām eti so 'rjuna"
    , "मेरा जन्म और कर्म दिव्य है — इसे तत्त्व से जानने वाला देह त्यागकर पुनः जन्म नहीं लेता; हे अर्जुन! वह मुझे ही प्राप्त होता है। भगवान के अवतार का दिव्य रहस्य तत्त्व से जान लेने वाला जीव जन्म-मृत्यु के चक्र से सदा के लिए मुक्त हो जाता है।"
    , "My birth and My actions are divine; one who knows this in truth, abandoning the body, is not born again — such a one comes to Me, O Arjuna. (Knowledge of the Lord's divine incarnation frees one from the cycle of rebirth.)"
    , "Mi nacimiento y Mis acciones son divinos; quien los conoce en verdad, abandonando el cuerpo, no vuelve a nacer — ese viene a Mí, oh Arjuna. (Conocer la encarnación divina del Señor libera del ciclo del renacer.)"
    , ["avatar", "divine birth", "rebirth", "janma karma", "जन्म", "कर्म", "दिव्य", "अवतार", "मुक्ति"]),

  bg("ज्ञान-कर्म-संन्यास योग", "11", "4",
    "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्। मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ॥"
    , "ye yathā māṁ prapadyante tāṁs tathaiva bhajāmy aham, mama vartmānuvartante manuṣyāḥ pārtha sarvaśaḥ"
    , "जिस-जिस प्रकार से लोग मेरी शरण आते हैं, उसी-उसी प्रकार मैं उनका प्रेमपूर्वक पालन करता हूँ; हे पार्थ! सब प्रकार से मनुष्य मेरे ही मार्ग का अनुसरण करते हैं। सर्वमार्ग-समता का यह वचन बताता है कि श्रद्धा से की गई हर उपासना अंततः उसी परमेश्वर तक पहुँचती है।"
    , "In whatever way people surrender to Me, in that same way I love and receive them; in all ways, O Partha, humans follow My path. (The divine breadth that honors every sincere mode of worship.)"
    , "Del modo que los hombres se entregan a Mí, de ese mismo modo Yo los amo y los acojo; por todos los senderos, oh Partha, los hombres siguen Mi camino."
    , ["worship", "paths", "surrender", "equality", "उपासना", "मार्ग", "शरण", "प्रपद्यन्ते", "equal paths"]),

  bg("ज्ञान-कर्म-संन्यास योग", "13", "4",
    "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः। तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् ॥"
    , "cātur-varṇyaṁ mayā sṛṣṭaṁ guṇa-karma-vibhāgaśaḥ, tasya kartāram api māṁ viddhy akartāram avyayam"
    , "चातुर्वर्ण्य (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र) समाज गुण और कर्म के विभाग से मेरे द्वारा रचा गया है; जान कि मैं उसका कर्ता होते हुए भी अकर्ता और अव्यय हूँ।"
    , "The four-fold order of society was created by Me according to the division of qualities and actions; yet know Me as its non-doer, being changeless."
    , "El orden cuádruple de la sociedad fue creado por Mí según la división de las cualidades y las acciones; sin embargo, conóceme como su no-hacedor, pues soy inmutable."
    , ["varna", "society", "गुण", "वर्ण", "समाज", "ब्राह्मण", "क्षत्रिय", "वैश्य", "शूद्र"]),

  bg("ज्ञान-कर्म-संन्यास योग", "24", "4",
    "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्। ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ॥"
    , "brahmārpaṇaṁ brahma havir brahmāgnau brahmaṇā hutam, brahmaiva tena gantavyaṁ brahma-karma-samādhinā"
    , "ब्रह्म ही अर्पण है, ब्रह्म ही हवि, ब्रह्म ही अग्नि और ब्रह्म द्वारा ही उसका होम किया जाता है; ब्रह्म-कर्म में समाधि वाले उस पुरुष के लिए गन्तव्य भी ब्रह्म ही है। जब ब्रह्म-ज्ञान से युक्त पुरुष यज्ञ करता है, तब कर्ता, कर्म, साधन और फल — सब ब्रह्म ही हो जाते हैं।"
    , "Brahman is the act of offering, Brahman the oblation, Brahman the fire, and by Brahman it is offered; Brahman alone is the goal of the one absorbed in the work of Brahman. (The all-Brahman vision of a sacrifice performed in unity.)"
    , "Brahman es el acto de ofrenda, Brahman la oblación, Brahman el fuego, y por Brahman es ofrecida; Brahman mismo es la meta de quien está absorto en la obra de Brahman."
    , ["brahman", "sacrifice", "offering", "unity", "ब्रह्म", "यज्ञ", "हवि", "अग्नि", "होम", "oneness"]),

  bg("ज्ञान-कर्म-संन्यास योग", "34", "4",
    "तद्विज्ञानार्थं स गुरुमेवाभिगच्छेत् समित्पाणिः श्रोत्रियं ब्रह्मनिष्ठम् ॥"
    , "tad vijñānārthaṁ sa gurum evābhigacchet samit-pāṇiḥ śrotriyaṁ brahma-niṣṭham"
    , "उस परम तत्त्व-ज्ञान को जानने के लिए समिधा (ईंधन) हाथ में लेकर गुरु के पास जाना चाहिए — जो शास्त्र-ज्ञ और ब्रह्म-निष्ठा संपन्न हो।"
    , "To know that supreme truth, approach the master with offerings in hand — one learned in scripture and established in Brahman."
    , "Para conocer esa verdad suprema, acércate al maestro con ofrendas en la mano — uno versado en las escrituras y establecido en Brahman."
    , ["guru", "teacher", "knowledge", "गुरु", "शिष्य", "ज्ञान", "शास्त्र", "master"]),

  bg("ज्ञान-कर्म-संन्यास योग", "38", "4",
    "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ॥"
    , "na hi jñānena sadṛśaṁ pavitram iha vidyate, tat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati"
    , "इस जगत् में ज्ञान के समान पवित्रकारी कोई वस्तु नहीं है; योग में सिद्ध हुआ पुरुष उस ज्ञान को अपने आप ही, कालक्रम में, अपनी आत्मा में प्राप्त कर लेता है। तप, दान और यज्ञ शुद्धि के साधन हैं, परंतु अंतिम पवित्रता ज्ञान से ही होती है।"
    , "Nothing in this world purifies like knowledge; the one perfected in yoga finds it, in due time, within the self. (The supremacy of jnana as the final purifier of the soul.)"
    , "Nada en este mundo purifica como el conocimiento; quien está perfeccionado en el yoga lo encuentra, a su debido tiempo, dentro del sí mismo."
    , ["knowledge", "purity", "jnana", "yoga siddhi", "ज्ञान", "पवित्र", "शुद्धि", "आत्मा", "supreme purifier"]),

  bg("ज्ञान-कर्म-संन्यास योग", "39", "4",
    "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति ॥"
    , "śraddhāvāṁl labhate jñānaṁ tat-paraḥ saṁyata-indriyaḥ, jñānaṁ labdhvā parāṁ śāntim acireṇādhigacchati"
    , "श्रद्धावान्, तत्पर और जितेंद्रिय पुरुष ज्ञान को प्राप्त करता है; ज्ञान पाकर शीघ्र ही परम शान्ति को प्राप्त होता है।"
    , "The faithful, devoted one with subdued senses gains knowledge; having gained knowledge, one soon attains supreme peace."
    , "El hombre de fe, devoto y dueño de sus sentidos, alcanza el conocimiento; y habiendo obtenido el conocimiento, pronto llega a la paz suprema."
    , ["shraddha", "faith", "knowledge", "peace", "श्रद्धा", "ज्ञान", "शान्ति", "इंद्रिय संयम"]),

  // ─── Chapter 5 ───
  bg("कर्म-संन्यास योग", "10", "5",
    "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः। लिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥"
    , "brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ, lipyate na sa pāpena padma-patram ivāmbhasā"
    , "समस्त कर्म ब्रह्म में अर्पण करके, आसक्ति त्यागकर जो कर्म करता है, वह पाप से लिप्त नहीं होता — जैसे जल से कमल का पत्र।"
    , "One who acts offering all actions to Brahman, without attachment, is untouched by sin — as a lotus leaf by water."
    , "Quien actúa ofreciendo todas sus acciones a Brahman, sin apego, no queda tocado por el pecado — como la hoja de loto por el agua."
    , ["lotus", "brahman", "detachment", "कमल", "ब्रह्म", "आसक्ति", "पाप", "nishkama"]),

  bg("कर्म-संन्यास योग", "18", "5",
    "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि। शुनि चैव श्वपाके च पण्डिताः समदर्शिनः ॥"
    , "vidyā-vinaya-sampanne brāhmaṇe gavi hastini, śuni caiva śva-pāke ca paṇḍitāḥ sama-darśinaḥ"
    , "विद्या और विनय से संपन्न ब्राह्मण में, गाय, हाथी, कुत्ते तथा चांडाल में समान दृष्टि रखने वाले पंडित होते हैं।"
    , "The wise see the same Self in a learned and humble brahmin, a cow, an elephant, a dog and an outcaste — such seers have equal vision."
    , "Los sabios ven el mismo Sí mismo en un brahmán docto y humilde, en una vaca, en un elefante, en un perro y en un paria — tales videntes poseen igual visión."
    , ["equality", "sama darshana", "wisdom", "समदर्शी", "समता", "पंडित", "ब्राह्मण", "equality vision"]),

  bg("कर्म-संन्यास योग", "25", "5",
    "लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः। छिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः ॥"
    , "labhante brahma-nirvāṇam ṛṣayaḥ kṣīṇa-kalmaṣāḥ, chinna-dvaidhā yatātmānaḥ sarva-bhūta-hite ratāḥ"
    , "जिन ऋषियों के समस्त पाप क्षीण हो चुके हैं, जिन्होंने द्वैतभाव के संदेह को काट डाला है, जो आत्म-संयम में स्थित हैं और समस्त प्राणियों के हित में रत हैं — वे ही ब्रह्म-निर्वाण को प्राप्त होते हैं। स्वार्थ-रहित लोकहित की सेवा ब्रह्म-स्थिति का द्वार बताई गई है।"
    , "The seers whose sins are washed away, whose doubts of duality are cut asunder, who are self-disciplined and delight in the welfare of all beings, attain the nirvana of Brahman. (Liberation and universal compassion go hand in hand.)"
    , "Los sabios cuyos pecados han sido borrados, cuyas dudas de dualidad están cortadas de raíz, dueños de sí y gozosos en el bienestar de todos los seres, alcanzan el nirvana de Brahman."
    , ["seers", "nirvana", "welfare", "compassion", "ऋषि", "निर्वाण", "द्वैत", "लोकहित", "कल्मष", "service"]),

  bg("कर्म-संन्यास योग", "29", "5",
    "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम्। सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति ॥"
    , "bhoktāraṁ yajña-tapasāṁ sarva-loka-maheśvaram, suhṛdaṁ sarva-bhūtānāṁ jñātvā māṁ śāntim ṛcchati"
    , "जो पुरुष मुझे यज्ञों और तपों का भोक्ता, समस्त लोकों का महेश्वर तथा सब प्राणियों का सुहृद जान लेता है, वह शान्ति को प्राप्त हो जाता है। सर्वशक्तिमान परमेश्वर को सबका मित्र जानने पर ही भय का अंत होता है — पंचम अध्याय का यह श्लोक उसका चरमोत्कर्ष है।"
    , "Knowing Me as the enjoyer of sacrifices and austerities, the great Lord of all the worlds, the friend of all beings — one attains peace. (The crown of chapter five: God is both the mighty maheshvara and everyone's dearest friend.)"
    , "Conociéndome como el disfrutador de los sacrificios y las austeridades, el gran Señor de todos los mundos, el amigo de todos los seres — uno alcanza la paz."
    , ["friend", "maheshvara", "peace", "supreme", "सुहृद", "महेश्वर", "भोक्ता", "शान्ति", "yajna"]),

  // ─── Chapter 6 ───
  bg("ध्यान योग", "5", "6",
    "उद्धरेदात्मनात्मानं नावमत्सेदात्मनात्मनम्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥"
    , "uddhared ātmanātmānaṁ nāvatsed ātmanātmanam, ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ"
    , "मनुष्य अपने आत्मा से ही उन्नति करे, अपने आत्मा का अपमान न करे; क्योंकि आत्मा ही आत्मा का मित्र है और आत्मा ही आत्मा का शत्रु है।"
    , "Let one uplift oneself by the Self, not degrade oneself; the Self alone is one's friend and the Self alone one's enemy."
    , "Que uno se eleve por el Sí mismo y no se degrade; el Sí mismo es el único amigo de uno y el Sí mismo, su único enemigo."
    , ["self", "friend", "enemy", "उद्धार", "आत्मा", "मित्र", "शत्रु", "self effort"]),

  bg("ध्यान योग", "16-17", "6",
    "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः। न चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन ॥ युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु। युक्तस्वप्नावबोधस्य योगो भवति दुःखहा ॥"
    , "nātyaśnatas tu yogo 'sti na caikāntam anaśnataḥ, na cāti-svapna-śīlasya jāgrato naiva cārjuna — yuktāhāra-vihārasya yukta-ceṣṭasya karmasu, yukta-svapnāvabodhasya yogo bhavati duḥkhahā"
    , "हे अर्जुन! बहुत अधिक खाने वाले के लिए योग नहीं है, न ही सर्वथा न खाने वाले के लिए; न अत्यधिक सोने वाले के लिए और न रातभर जागने वाले के लिए। जो पुरुष आहार-विहार में, कर्मों में तथा स्वप्न और जागरण में संयत रहता है, उसका योग समस्त दुःखों को नष्ट कर देता है। मध्यम मार्ग का यह निर्देश ध्यान-योग की व्यावहारिक भूमिका है।"
    , "Yoga is not for one who eats too much, nor for one who does not eat at all; nor for one who sleeps too long, nor for one who keeps awake. For one who is moderate in food and recreation, measured in action, and balanced in sleep and waking, yoga becomes the destroyer of sorrow. (The Gita's celebrated middle path.)"
    , "El yoga no es para quien come en exceso, ni para quien no come nada; ni para quien duerme demasiado, ni para quien vela sin medida. Para quien es moderado en la comida y el esparcimiento, mesurado en la acción y equilibrado en el sueño y la vigilia, el yoga se vuelve el destructor de la aflicción."
    , ["moderation", "middle path", "food", "sleep", "मध्यम मार्ग", "युक्ताहार", "संयम", "नींद", "जागरण", "balance"]),

  bg("ध्यान योग", "19", "6",
    "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता। योगिनो यतचित्तस्य युञ्जते योगमात्मनः ॥"
    , "yathā dīpo nivāta-stho neṅgate sopamā smṛtā, yogino yata-cittasya yuñjate yogam ātmanaḥ"
    , "जैसे निर्वात स्थान में स्थिर रखा दीपक नहीं हिलता, वैसे ही संयत चित्त योगी की आत्म-योग साधना की उपमा दी गई है।"
    , "As a lamp in a windless place does not flicker — such is the likeness of the yogi of controlled mind practicing concentration on the Self."
    , "Como una lámpara en un lugar sin viento no parpadea — tal es la semejanza del yogi de mente controlada que practica la concentración en el Sí mismo."
    , ["lamp", "meditation", "focus", "दीपक", "ध्यान", "योगी", "एकाग्रता", "meditation"]),

  bg("ध्यान योग", "35", "6",
    "असंशयं महाबाहो मनो दुर्निग्रहं चलम्। अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥"
    , "asaṁśayaṁ mahā-bāho mano dur-nigrahaṁ calam, abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate"
    , "हे महाबाहो! निश्चित ही मन दुर्निग्रह और चंचल है; पर भी हे कुन्तीपुत्र! अभ्यास और वैराग्य से इसे वश में किया जा सकता है।"
    , "Undoubtedly, O mighty-armed one, the mind is restless and hard to restrain; yet it is controlled by practice and detachment, O son of Kunti."
    , "Sin duda, oh de brazos poderosos, la mente es inquieta y difícil de refrenar; con todo, se la domina mediante la práctica y el desapego, oh hijo de Kunti."
    , ["mind", "practice", "vairagya", "मन", "चंचल", "अभ्यास", "वैराग्य", "control"]),

  bg("ध्यान योग", "47", "6",
    "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना। श्रद्धावान्भजते यो मां स युक्ततमो मतो ॥"
    , "yoginām api sarveṣāṁ mad-gatenāntar-ātmanā, śraddhāvān bhajate yo māṁ sa yukta-tamo mataḥ"
    , "समस्त योगियों में वह श्रेष्ठ योगी माना जाता है जो अंतरात्मा में मुझमें स्थित होकर श्रद्धापूर्वक मेरा भजन करता है।"
    , "Of all yogis, the one who worships Me with faith, with the Self absorbed in Me, is considered the most united with Me."
    , "De todos los yogis, el que Me adora con fe, con el Sí mismo absorto en Mí, es tenido por el más unido a Mí."
    , ["yogi", "bhakti", "supreme", "योगी", "भक्ति", "श्रद्धा", "best yogi"]),

  // ─── Chapter 7 ───
  bg("ज्ञान-विज्ञान योग", "3", "7",
    "मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये। यततामपि सिद्धानां कश्चिन्मां वेत्ति तत्त्वतः ॥"
    , "manuṣyāṇāṁ sahasreṣu kaścid yatati siddhaye, yatatām api siddhānāṁ kaścin māṁ vetti tattvataḥ"
    , "हजारों मनुष्यों में कोई एक ही सिद्धि के लिए प्रयत्न करता है; और प्रयत्नशील सिद्ध पुरुषों में भी कोई एक ही मुझे तत्त्व से जान पाता है। परमेश्वर का सच्चा ज्ञान अत्यंत दुर्लभ है — यह श्रद्धा, साधना और भगवत्-कृपा तीनों का मिला हुआ फल है।"
    , "Among thousands of men scarcely one strives for perfection, and of the striving ones scarcely one knows Me in truth. (How rare is the soul who truly knows the Lord.)"
    , "Entre miles de hombres apenas uno se esfuerza por la perfección, y de los que se esfuerzan, apenas uno Me conoce en verdad. (Qué rara es el alma que de verdad conoce al Señor.)"
    , ["rare", "perfection", "siddhi", "striving", "दुर्लभ", "सिद्धि", "प्रयत्न", "ज्ञानी", "rare seeker"]),

  bg("ज्ञान-विज्ञान योग", "7", "7",
    "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय। मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ॥"
    , "mattaḥ para-taraṁ nānyat kiñcid asti dhanañjaya, mayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva"
    , "हे धनंजय! मुझसे परम कोई तत्त्व नहीं है; समस्त जगत् मुझमें ओत-प्रोत है — जैसे सूत में मणियाँ गुँथी रहती हैं।"
    , "O Dhananjaya, there is nothing higher than Me; all this universe is strung upon Me like pearls on a thread."
    , "Oh Dhananjaya, no hay nada superior a Mí; todo este universo está enhebrado en Mí, como las perlas en un hilo."
    , ["supreme", "thread", "pearls", "परम तत्त्व", "सूत्र", "मणि", "गुँथना"]),

  bg("ज्ञान-विज्ञान योग", "14", "7",
    "दैवी ह्येषा गुणमयी मम माया दुरत्यया। मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ॥"
    , "daivī hy eṣā guṇa-mayī mama māyā duratyayā, mām eva ye prapadyante māyām etāṁ taranti te"
    , "यह दैवी, गुणों से बनी मेरी माया है जिसे पार करना अत्यंत कठिन है; जो मुझ एक में शरण पाते हैं केवल वही उस माया को पार कर लेते हैं।"
    , "This divine maya of Mine, made of the gunas, is hard to cross; those who surrender to Me alone cross beyond it."
    , "Esta Mi maya divina, hecha de los gunas, es difícil de cruzar; quienes se entregan solo a Mí la cruzan y van más allá."
    , ["maya", "surrender", "दैवी माया", "शरण", "गुण", "illusion"]),

  bg("ज्ञान-विज्ञान योग", "19", "7",
    "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते। वासुदेवः सर्वमिति स महात्मा सुदुर्लभः ॥"
    , "bahūnāṁ janmanām ante jñānavān māṁ prapadyate, vāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ"
    , "अनेक जन्मों के अंत में ज्ञानवान् पुरुष मेरी शरण पाता है — 'वासुदेव ही सब है' जानकर; ऐसा महात्मा अत्यंत दुर्लभ है।"
    , "After many births and deaths, the wise surrender to Me, realizing Vasudeva is all — such a great soul is very rare."
    , "Al cabo de muchos nacimientos y muertes, el sabio se entrega a Mí, sabiendo que Vasudeva es todo — semejante gran alma es sumamente rara."
    , ["mahatma", "rare", "जन्म", "ज्ञानी", "वासुदेव", "महात्मा", "सर्वम्"]),

  // ─── Chapter 8 ───
  bg("अक्षर-ब्रह्म योग", "21", "8",
    "अव्यक्तोऽक्षर इत्युक्तस्तमाहुः परमां गतिम्। यं प्राप्य न निवर्तन्ते तद्धाम परमं मम ॥"
    , "avyakto 'kṣara ity uktas tam āhuḥ paramāṁ gatim, yaṁ prāpya na nivartante tad dhāma paramaṁ mama"
    , "अव्यक्त और अक्षर कहा जाने वाला वह ब्रह्म सर्वोत्तम गति कहलाता है; जिसे पाकर पुनः लौटना नहीं होता — वह मेरा परम धाम है।"
    , "That unmanifest, imperishable is called the supreme goal; having attained it, none return — that is My supreme abode."
    , "Aquello inmanifestado e imperecedero es llamado la meta suprema; habiéndolo alcanzado, nadie regresa — esa es Mi morada suprema."
    , ["brahman", "abode", "imperishable", "अक्षर ब्रह्म", "परम धाम", "गति", "avyakta"]),

  // ─── Chapter 9 ───
  bg("राज-विद्या राज-गुह्य योग", "4", "9",
    "मया ततमिदं सर्वं जगदव्यक्तमूर्तिना। मत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः ॥"
    , "mayā tatam idaṁ sarvaṁ jagad avyakta-mūrtinā, mat-sthāni sarva-bhūtāni na cāhaṁ teṣv avasthitaḥ"
    , "अव्यक्त मूर्ति से मैंने ही इस समस्त जगत् को व्याप्त किया है; समस्त भूत मुझमें स्थित हैं, फिर भी मैं उनमें स्थित नहीं हूँ। जैसे आकाश सबमें व्याप्त होकर भी किसी का नहीं बनता, वैसे ही भगवान जगत् के आधार होकर भी उससे परे रहते हैं — राज-विद्या का यह पहला परम रहस्य है।"
    , "By Me, in My unmanifest form, this whole universe is pervaded; all beings dwell in Me — yet I am not contained in them. (As space pervades everything while clinging to nothing, the Lord upholds the world and yet transcends it.)"
    , "Por Mí, en Mi forma inmanifestada, todo este universo es penetrado; todos los seres moran en Mí, y sin embargo Yo no estoy contenido en ellos. (Como el espacio todo lo penetra sin apegarse a nada, el Señor sostiene al mundo y a la vez lo trasciende.)"
    , ["pervasion", "unmanifest", "avyakta", "omnipresence", "व्याप्त", "अव्यक्त", "मत्स्थानि", "जगत्", "राज विद्या"]),

  bg("राज-विद्या राज-गुह्य योग", "22", "9",
    "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥"
    , "ananyāś cintayanto māṁ ye janāḥ paryupāsate, teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham"
    , "जो अनन्य चित्त से मेरा चिंतन करते हुए मेरी उपासना करते हैं, मैं उन सदा युक्त भक्तों का योगक्षेम (जो नहीं है उसे देना और जो है उसकी रक्षा) वहन करता हूँ।"
    , "Those who worship Me with exclusive devotion, meditating on My form — I carry what they lack and preserve what they have."
    , "A quienes Me adoran con devoción exclusiva, meditando en Mi forma — Yo les llevo lo que les falta y les preservo lo que tienen."
    , ["bhakti", "yogakshema", "provision", "अनन्य भक्ति", "योगक्षेम", "रक्षा", "वहन", "care"]),

  bg("राज-विद्या राज-गुह्य योग", "26", "9",
    "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति। तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥"
    , "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati, tad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ"
    , "जो शुद्ध हृदय से भक्ति भाव से मुझे पत्र, पुष्प, फल या जल अर्पण करता है, मैं उस भक्तिपूर्वक अर्पित प्रसाद को ग्रहण करता हूँ।"
    , "Whoever offers Me with devotion a leaf, a flower, a fruit or water — that offering of love from a pure soul I accept."
    , "Quien Me ofrece con devoción una hoja, una flor, un fruto o agua — esa ofrenda de amor de un alma pura, Yo la acepto."
    , ["offering", "bhakti", "water", "पत्र", "पुष्प", "फल", "तोय", "अर्पण", "भक्ति", "prasad"]),

  bg("राज-विद्या राज-गुह्य योग", "13", "9",
    "महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः। भजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम् ॥"
    , "mahātmānas tu māṁ pārtha daivīṁ prakṛtim āśritāḥ, bhajanty ananya-manaso jñātvā bhūtādim avyayam"
    , "पर महात्मा हे पार्थ! दैवी प्रकृति को धारण कर जानते हुए कि मैं समस्त भूतों का अविनाशी आदि-स्रोत हूँ, अनन्य मन से मेरा भजन करते हैं।"
    , "But the great souls, O Partha, partaking of My divine nature, knowing Me as the imperishable source of all beings, worship Me with single-minded devotion."
    , "Pero las grandes almas, oh Partha, participando de Mi naturaleza divina, conociéndome como la fuente imperecedera de todos los seres, Me adoran con devoción de mente indivisa."
    , ["mahatma", "bhakti", "prakriti", "महात्मा", "दैवी प्रकृति", "भजन"]),

  bg("राज-विद्या राज-गुह्य योग", "30-31", "9",
    "अपि सुदुराचारो भजते मामनन्यभाक्। साधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः ॥ क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति। कौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति ॥"
    , "api sudurācāro bhajate mām ananya-bhāk, sādhur eva sa mantavyaḥ samyag vyavasito hi saḥ — kṣipraṁ bhavati dharmātmā śaśvac-chāntiṁ nigacchati, kaunteya pratijānīhi na me bhaktaḥ praṇaśyati"
    , "सुदुराचारी (अत्यंत पापी) भी यदि अनन्य भाव से मेरा भजन करता है, तो वह साधु ही माना जाए — क्योंकि उसका संकल्प सम्यक् है। वह शीघ्र ही धर्मात्मा होकर सदा की शान्ति को प्राप्त हो जाता है; हे कुन्तीपुत्र! तू निश्चित जान कि मेरा भक्त कभी नष्ट नहीं होता। पतितों को भी पवित्र करने वाली अनन्य भक्ति की यह घोषणा गीता की सर्वाधिक करुणामयी वाणियों में से है।"
    , "Even the most sinful, if he worships Me with exclusive devotion, is to be accounted righteous — for his resolve is right. Quickly he becomes righteous in spirit and attains everlasting peace; know this for certain, O son of Kunti: My devotee never perishes. (The Gita's most compassionate promise — bhakti redeems anyone who surrenders.)"
    , "Incluso el más pecador, si Me adora con devoción exclusiva, debe ser tenido por justo — porque su resolución es recta. Pronto se vuelve un alma de dharma y alcanza la paz sempiterna; sábelo con certeza, oh hijo de Kunti: Mi devoto jamás perece. (La promesa más compasiva del Gita: el bhakti redime a quien se entrega.)"
    , ["bhakti", "redemption", "sinner", "promise", "सुदुराचारी", "अनन्य भाव", "धर्मात्मा", "शान्ति", "पतित पावन", "never perish"]),

  // ─── Chapter 10 ───
  bg("विभूति योग", "8", "10",
    "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते। इति मत्वा भजन्ते मां बुधा भावसमन्विताः ॥"
    , "ahaṁ sarvasya prabhavo mattaḥ sarvaṁ pravartate, iti matvā bhajante māṁ budhā bhāva-samanvitāḥ"
    , "मैं समस्त जगत् का उद्गम-स्रोत हूँ, मुझसे ही सब प्रवर्तित होता है — यह जानकर बुद्धिमान् भाव-समन्वित होकर मेरा भजन करते हैं।"
    , "I am the origin of all; from Me everything proceeds. Knowing this, the wise worship Me with absorbed devotion."
    , "Yo soy el origen de todo; de Mí todo procede. Sabiéndolo así, los sabios Me adoran con devoción absorta."
    , ["origin", "source", "worship", "उद्गम", "स्रोत", "भजन", "बुद्धिमान"]),

  bg("विभूति योग", "11", "10",
    "तेषामेवानुकम्पार्थमहमज्ञानजं तमः। नाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता ॥"
    , "teṣām evānukampārtham aham ajñāna-jaṁ tamaḥ, nāśayāmy ātma-bhāva-stho jñāna-dīpena bhāsvatā"
    , "उन्हीं पर अनुग्रह के लिए मैं अंतरात्मा में स्थित होकर ज्ञान के दीपक से उनके अज्ञान से उत्पन्न अंधकार को नष्ट कर देता हूँ।"
    , "Out of compassion for them, dwelling in their hearts, I destroy the darkness born of ignorance with the radiant lamp of knowledge."
    , "Por compasión hacia ellos, morando en sus corazones, destruyo la oscuridad nacida de la ignorancia con la radiante lámpara del conocimiento."
    , ["compassion", "lamp", "knowledge", "अनुग्रह", "ज्ञान-दीप", "अंधकार", "कृपा", "lamp of knowledge"]),

  // ─── Chapter 11 ───
  bg("विश्वरूप दर्शन योग", "32", "11",
    "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः। ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः ॥"
    , "kālo 'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ, ṛte 'pi tvāṁ na bhaviṣyanti sarve ye 'vasthitāḥ pratyanīkeṣu yodhāḥ"
    , "मैं काल हूँ — संसार का संहार करने वाला, अब बढ़ा हुआ समस्त लोकों को समाप्त करने के लिये उद्यत हूँ; तेरे विना भी प्रतिपक्ष में खड़े समस्त योद्धा मारे जाएँगे।"
    , "I am Time, the great destroyer of worlds, grown mighty, engaged here in annihilating these peoples. Even without you, none of the warriors arrayed in hostile ranks shall remain."
    , "Yo soy el Tiempo, el gran destructor de los mundos, acrecentado en poder, empeñado aquí en aniquilar a estos pueblos. Incluso sin ti, ninguno de los guerreros alineados en las filas enemigas permanecerá."
    , ["time", "kala", "destruction", "काल", "महाकाल", "संहार", "विश्वरूप", "cosmic form"]),

  bg("विश्वरूप दर्शन योग", "54", "11",
    "भक्त्या त्वनन्यया शक्योऽहमेवंविधोऽर्जुन। ज्ञातुं द्रष्टुं च तत्त्वेन प्रवेष्टुं च परन्तप ॥"
    , "bhaktyā tv ananyayā śakyo 'ham evaṁ-vidho 'rjuna, jñātuṁ draṣṭuṁ ca tattvena praveṣṭuṁ ca parantapa"
    , "हे अर्जुन! केवल अनन्य भक्ति से ही मुझे ऐसे रूप में जानना, देखना और वास्तविक रूप से प्रवेश करना शक्य है।"
    , "By single-minded devotion alone can I be known as I am, seen in truth, and entered into, O scorcher of foes."
    , "Solo mediante la devoción de mente indivisa se Me puede conocer tal como soy, ver en verdad y penetrar en Mí, oh abrasador de enemigos."
    , ["bhakti", "vision", "अनन्य भक्ति", "दर्शन", "प्रवेश", "vishvarupa"]),

  bg("विश्वरूप दर्शन योग", "55", "11",
    "मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः। निर्वैरः सर्वभूतेषु यः स मामेति पाण्डव ॥"
    , "mat-karma-kṛn mat-paramo mad-bhaktaḥ saṅga-varjitaḥ, nirvairaḥ sarva-bhūteṣu yaḥ sa mām eti pāṇḍava"
    , "हे पाण्डव! जो मेरे लिए कर्म करता है, मुझे ही परम मानता है, मेरा भक्त है, संग (आसक्ति) से रहित है और समस्त भूतों के प्रति निर्वैर भाव रखता है — वही मुझे प्राप्त होता है। विश्वरूप-दर्शन के उपरांत भगवान बताते हैं कि उस महादर्शन का वास्तविक द्वार निर्वैर, भक्तिमय जीवन ही है।"
    , "He who does My work, holds Me supreme, is My devotee, free from attachment, and without enmity toward any being — he comes to Me, O Pandava. (After the cosmic vision, the Lord reveals the way to attain Him: a life of devotion without enmity.)"
    , "Quien obra para Mí, Me tiene por supremo, es Mi devoto, libre de apego y sin enemistad hacia ser alguno — ese viene a Mí, oh Pandava. (Tras la visión cósmica, el Señor revela el camino hacia Él: una vida de devoción sin enemistad.)"
    , ["bhakti", "enmity", "mat karma", "nirvaira", "निर्वैर", "मत्परम", "संग वर्जित", "भक्त", "विश्वरूप"]),

  // ─── Chapter 12 ───
  bg("भक्ति योग", "13-14", "12",
    "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च। निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥ सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः। मय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः ॥"
    , "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca, nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī — santuṣṭaḥ satataṁ yogī yatātmā dṛḍha-niścayaḥ, mayy arpita-mano-buddhir yo mad-bhaktaḥ sa me priyaḥ"
    , "जो सब प्राणियों से अद्वेष रखता है, मित्रता और करुणा करता है, निर्मम-निरहंकार है, सुख-दुःख में सम है, क्षमाशील है, सदा संतुष्ट योगी है, आत्म-संयमी है और दृढ़ निश्चय रखता है — जिसका मन-बुद्धि मुझ अर्पित है, वह मेरा भक्त मुझे अत्यंत प्रिय है।"
    , "He who bears no ill will to any being, friendly and compassionate, free from possessiveness and ego, equal in pleasure and pain, forgiving, ever content, self-controlled, firm in resolve, with mind and intellect surrendered to Me — such a devotee of Mine is dear to Me."
    , "Aquel que no alberga mala voluntad hacia ningún ser, amistoso y compasivo, libre de posesividad y de ego, ecuánime en el placer y el dolor, indulgente, siempre contento, dueño de sí, firme en sus propósitos, con la mente y el intelecto entregados a Mí — ese devoto Mío Me es querido."
    , ["dear devotee", "qualities", "compassion", "प्रिय भक्त", "अद्वेष्टा", "करुणा", "क्षमा", "संतोष"]),

  bg("भक्ति योग", "15", "12",
    "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः। हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः ॥"
    , "yasmān nodvijate loko lokān nodvijate ca yaḥ, harṣāmarṣa-bhaya-udvegair mukto yaḥ sa ca me priyaḥ"
    , "जिससे कोई व्यक्ति विचलित नहीं होता और जो किसी से विचलित नहीं होता, जो हर्ष, अमर्ष, भय और उद्वेग से मुक्त है — वह मुझे प्रिय है।"
    , "He by whom no one is disturbed and who is disturbed by none, free from elation, envy, fear and anxiety — such a one is dear to Me."
    , "Aquel por quien nadie se ve turbado y que no se turba por nadie, libre de exultación, envidia, miedo y ansiedad — ese Me es querido."
    , ["steadiness", "dear", "उद्वेग", "भय", "हर्ष", "अमर्ष", "निर्भीक"]),

  // ─── Chapter 13 ───
  bg("क्षेत्र-क्षेत्रज्ञ योग", "7-8", "13",
    "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम्। आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः ॥ इन्द्रियार्थेषु वैराग्यमनहङ्कार एव च। जन्ममृत्युजराव्याधिदुःखदोषानुदर्शनम् ॥"
    , "amānitvam adambhitvam ahiṁsā kṣāntir ārjavam, ācāryopāsanaṁ śaucaṁ sthairyam ātma-vinigrahaḥ — indriyārtheṣu vairāgyam anahaṅkāra eva ca, janma-mṛtyu-jarā-vyādhi-duḥkha-doṣānudarśanam"
    , "अमानित्व, अदम्भित्व, अहिंसा, क्षमा, सरलता, आचार्य की उपासना, शौच, स्थैर्य, आत्म-संयम; इंद्रिय-विषयों में वैराग्य, अहंकार का अभाव और जन्म-मृत्यु-जरा-व्याधि-दुःख-दोषों का अनुदर्शन — यही ज्ञान है।"
    , "Humility, unpretentiousness, non-violence, forgiveness, uprightness, service of the teacher, purity, steadfastness, self-control; dispassion toward sense objects, absence of ego, and constant awareness of the miseries of birth, death, old age and disease — this is knowledge."
    , "Humildad, falta de ostentación, no violencia, paciencia, rectitud, servicio al maestro, pureza, firmeza, autodominio; desapego de los objetos de los sentidos, ausencia de ego y constante percepción de los males del nacimiento, la muerte, la vejez y la enfermedad — esto es el conocimiento."
    , ["humility", "non-violence", "knowledge", "अमानित्व", "अहिंसा", "क्षमा", "वैराग्य", "ज्ञान"]),

  bg("क्षेत्र-क्षेत्रज्ञ योग", "12-13", "13",
    "ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वामृतमश्नुते। अनादिमत्परं ब्रह्म न सत्तन्नासदुच्यते ॥ बहिरन्तश्च भूतानामचरं चरमेव च। सूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत् ॥"
    , "jñeyaṁ yat tat pravakṣyāmi yaj jñātvāmṛtam aśnute, anādi-mat paraṁ brahma na sat tan nāsad ucyate — bahir antaś ca bhūtānām acaraṁ caram eva ca, sūkṣmatvāt tad avijñeyaṁ dūra-sthaṁ cāntike ca tat"
    , "वह जानने योग्य परम तत्त्व बतलाता हूँ जिसे जानकर अमृत प्राप्त होता है — वह अनादि, माया-रहित परम ब्रह्म है, न कहा जाता सत् है, न असत्। वह सब भूतों के बाहर भी है, भीतर भी; वह चर और अचर दोनों है; सूक्ष्मता के कारण अविज्ञेय है, दूर भी है और पास भी।"
    , "I shall declare that which is to be known, knowing which one attains immortality — the beginningless supreme Brahman, called neither being nor non-being. It is outside and within beings, unmoving and moving; too subtle to be known, far away and yet very near."
    , "Declararé aquello que debe ser conocido, conociendo lo cual uno alcanza la inmortalidad — el Brahman supremo, sin principio, que no se denomina ni ser ni no-ser. Está fuera y dentro de los seres, inmóvil y en movimiento; por su sutileza resulta incognoscible, distante y sin embargo muy próximo."
    , ["brahman", "knower", "immortality", "ब्रह्म", "अमृत", "सूक्ष्म", "सर्वव्यापी", "supreme truth"]),

  // ─── Chapter 14 ───
  bg("गुणत्रय विभाग योग", "4", "14",
    "सर्वयोनिषु कौन्तेय मूर्तयः सम्भवन्ति याः। तासां ब्रह्म महद्योनिरहं बीजप्रदः पिता ॥"
    , "sarva-yoniṣu kaunteya mūrtayaḥ sambhavanti yāḥ, tāsāṁ brahma mahad-yonir ahaṁ bīja-pradaḥ pitā"
    , "हे कुन्तीपुत्र! समस्त गर्भ-स्रोतों में जितनी मूर्तियाँ प्रकट होती हैं, उन सबकी महान् योनि ब्रह्म (प्रकृति) है और बीज देने वाले पिता मैं हूँ।"
    , "Whatever forms are born in all wombs, O Kaunteya, the great womb is prakriti (Brahman) and I am the seed-giving father."
    , "Sean cuales fueren las formas que nacen en todos los vientres, oh Kaunteya, el gran vientre es prakriti (Brahman) y Yo soy el padre que da la semilla."
    , ["creation", "father", "prakriti", "प्रकृति", "बीज", "पिता", "सृष्टि"]),

  bg("गुणत्रय विभाग योग", "19", "14",
    "गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान्। जन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते ॥"
    , "guṇān etān atītya trīn dehī deha-samudbhavān, janma-mṛtyu-jarā-duḥkhair vimukto 'mṛtam aśnute"
    , "देह से उत्पन्न इन तीनों गुणों को लाँघकर देही पुरुष जन्म, मृत्यु, जरा और दुःखों से मुक्त हो जाता है और अमृतत्व को प्राप्त करता है। सत्त्व, रजस् और तमस् — इन तीनों के बंधन से परे जाने की अवस्था ही गुणातीत पद है, जो मुक्ति का स्वरूप है।"
    , "When the embodied soul passes beyond these three qualities born of the body — sattva, rajas and tamas — it is freed from birth, death, old age and sorrow, and enjoys the nectar of immortality. (The gunatita state, beyond the three gunas, is liberation itself.)"
    , "Cuando el alma encarnada trasciende estas tres cualidades nacidas del cuerpo — sattva, rajas y tamas — queda liberada del nacimiento, la muerte, la vejez y el dolor, y saborea el néctar de la inmortalidad. (El estado de gunatita, más allá de los tres gunas, es la liberación misma.)"
    , ["gunas", "transcend", "gunatita", "immortality", "गुणातीत", "त्रीन् गुण", "जन्म मृत्यु", "अमृत", "मुक्ति"]),

  bg("गुणत्रय विभाग योग", "26", "14",
    "मां च योऽव्यभिचारेण भक्तियोगेन सेवते। स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते ॥"
    , "māṁ ca yo 'vyabhicāreṇa bhakti-yogena sevate, sa guṇān samatītyaitān brahma-bhūyāya kalpate"
    , "जो मुझे अव्यभिचारिणी (अनन्य) भक्ति-योग से सेवन करता है, वह इन तीनों गुणों को लाँघकर ब्रह्म-स्वरूप होने को पात्र हो जाता है।"
    , "One who serves Me with unwavering bhakti-yoga crosses beyond the three gunas and becomes worthy of becoming Brahman."
    , "Quien Me sirve con bhakti-yoga inquebrantable trasciende los tres gunas y se hace digno de llegar a ser Brahman."
    , ["gunas", "transcend", "bhakti", "गुण", "निर्गुण", "ब्रह्मभूत", "भक्ति"]),

  // ─── Chapter 15 ───
  bg("पुरुषोत्तम योग", "6", "15",
    "न तद्भास्यते सूर्यो न शशाङ्को न पावकः। यद्गत्वा न निवर्तन्ते तद्धाम परमं मम ॥"
    , "na tad bhāsyate sūryo na śaśāṅko na pāvakaḥ, yad gatvā na nivartante tad dhāma paramaṁ mama"
    , "वह मेरा परम धाम न ही सूर्य प्रकाशित करता है, न चंद्रमा, न अग्नि; जहाँ पहुँचकर लौटते नहीं।"
    , "Neither the sun, nor the moon, nor fire illumines that supreme abode of Mine, reaching which one never returns."
    , "Ni el sol, ni la luna, ni el fuego iluminan esa Mi morada suprema; llegado a la cual, uno jamás regresa."
    , ["abode", "supreme", "light", "परम धाम", "सूर्य", "चंद्र", "अग्नि", "light"]),

  bg("पुरुषोत्तम योग", "7", "15",
    "ममैवांशो जीवलोके जीवभूतः सनातनः। मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति ॥"
    , "mamaivāṁśo jīva-loke jīva-bhūtaḥ sanātanaḥ, manaḥ-ṣaṣṭhānīndriyāṇi prakṛti-sthāni karṣati"
    , "जीव-लोक में मेरा ही अंश सनातन जीवभूत होकर प्रकट होता है; वह प्रकृति में स्थित मन और इंद्रियों को — मन को छठे स्थान पर रखकर — अपने साथ खींचता रहता है। जीव और परमात्मा का यह अंश-अंशी संबंध गीता का मनोहर उपदेश है — जीव मूलतः भगवान का ही सनातन अंश है, इसका स्मरण ही भक्ति का आधार बन जाता है।"
    , "An eternal fragment of Myself, becoming the living being (jiva) in the world of life, draws with it the mind and the five senses abiding in nature. (The intimate truth of the soul: every jiva is an everlasting part of the Lord.)"
    , "Un fragmento eterno de Mí mismo, hecho ser viviente (jiva) en el mundo de la vida, arrastra consigo la mente y los cinco sentidos que moran en la naturaleza. (La verdad íntima del alma: cada jiva es una parte eterna del Señor.)"
    , ["jiva", "amsa", "eternal fragment", "sanatana", "जीव", "अंश", "सनातन", "मन", "इंद्रियाँ"]),

  bg("पुरुषोत्तम योग", "15", "15",
    "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च। वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम् ॥"
    , "sarvasya cāhaṁ hṛdi sanniviṣṭo mattaḥ smṛtir jñānam apohanaṁ ca, vedaiś ca sarvair aham eva vedyo vedānta-kṛd veda-vid eva cāham"
    , "मैं ही सबके हृदय में सन्निविष्ट (स्थित) हूँ; मुझसे ही स्मृति, ज्ञान और ज्ञान का अपोहन (विस्मरण) होता है। समस्त वेदों का वेद्य मैं ही हूँ, वेदांत का कर्ता मैं हूँ और वेद का ज्ञाता भी मैं ही हूँ। स्मरण और विस्मृति तक भगवान की ही लीला है — इसीलिए स्मरण की गहरी तड़प उन्हीं की कृपा से फलीभूत होती है।"
    , "I am seated in the hearts of all; from Me come memory, knowledge and their loss. By all the Vedas I am to be known; I am the maker of the Vedanta and the knower of the Vedas. (Even remembering and forgetting are the Lord's play — hence the deep longing to remember is fulfilled by His grace.)"
    , "Yo estoy sentado en el corazón de todos; de Mí provienen la memoria, el conocimiento y su pérdida. Por todos los Vedas he de ser conocido; Yo soy el autor del Vedanta y el conocedor de los Vedas. (Incluso recordar y olvidar son el juego del Señor; por eso el anhelo profundo de recordar se cumple por Su gracia.)"
    , ["heart", "memory", "knowledge", "vedas", "हृदि", "स्मृति", "ज्ञान", "अपोहन", "वेदांत", "वेदवित्"]),

  // ─── Chapter 16 ───
  bg("दैवासुर संपद्विभाग योग", "1-3", "16",
    "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः। दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ॥ अहिंसा सत्यमक्रोधः त्यागः शान्तिरपैशुनम्। दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम् ॥ तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता। भवन्ति सम्पदं दैवीमभिजातस्य भारत ॥"
    , "abhayaṁ sattva-saṁśuddhir jñāna-yoga-vyavasthitiḥ, dānaṁ damaś ca yajñaś ca svādhyāyas tapa ārjavam — ahiṁsā satyam akrodhaḥ tyāgaḥ śāntir apaiśunam, dayā bhūteṣv aloluptvaṁ mārdravaṁ hrīr acāpalam — tejaḥ kṣamā dhṛtiḥ śaucam adroho nātimānitā, bhavanti sampadaṁ daivīm abhijātasya bhārata"
    , "निर्भयता, शुद्ध अंतःकरण, ज्ञान-योग में स्थिति, दान, इंद्रिय-दमन, यज्ञ, स्वाध्याय, तप और सरलता; अहिंसा, सत्य, अक्रोध, त्याग, शान्ति, दूषण से रहित होना, भूतों पर दया, अलोलुप्ता, मार्दव, लज्जा और चपलता का अभाव; तेज, क्षमा, धृति, शौच, अद्रोह और अतिमान का अभाव — हे भारत! ये दैवी संपदा के लक्षण हैं।"
    , "Fearlessness, purity of heart, steadfastness in knowledge-yoga, charity, sense-control, sacrifice, study of self, austerity, uprightness; non-violence, truth, absence of anger, renunciation, tranquility, aversion to faultfinding, compassion for beings, freedom from greed, gentleness, modesty, steadiness; vigor, forgiveness, fortitude, cleanliness, freedom from envy and pride — these, O Bharata, mark the divine endowment."
    , "Intrepidez, pureza del corazón, firmeza en el yoga del conocimiento, dadiva, dominio de los sentidos, sacrificio, estudio de sí mismo, austeridad, rectitud; no violencia, verdad, ausencia de ira, renuncia, serenidad, aversión a buscar defectos, compasión hacia los seres, desprendimiento, mansedumbre, modestia, firmeza; vigor, perdón, fortaleza, limpieza, ausencia de envidia y de soberbia — estos, oh Bharata, distinguen la riqueza divina."
    , ["divine qualities", "daivi sampada", "virtues", "दैवी संपदा", "अभय", "अहिंसा", "दया", "क्षमा", "virtue"]),

  bg("दैवासुर संपद्विभाग योग", "21", "16",
    "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः। कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ॥"
    , "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ, kāmaḥ krodhas tathā lobhas tasmād etat tryaṁ tyajet"
    , "आत्मा के नाश के लिए नरक के तीन द्वार हैं — काम, क्रोध और लोभ; इसलिए इन तीनों का त्याग कर दे।"
    , "There is a threefold gate of hell destructive of the self — lust, anger and greed; therefore one must abandon these three."
    , "Hay una triple puerta del infierno que destruye al sí mismo — la lujuria, la ira y la codicia; por eso debe uno abandonar estas tres."
    , ["hell", "three gates", "काम", "क्रोध", "लोभ", "नरक", "तीन द्वार", "vices"]),

  bg("दैवासुर संपद्विभाग योग", "24", "16",
    "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ। ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि ॥"
    , "tasmāc chāstraṁ pramāṇaṁ te kāryākārya-vyavasthitau, jñātvā śāstra-vidhānoktaṁ karma kartum ihārhasi"
    , "इसलिए करने योग्य और न करने योग्य कर्मों की व्यवस्था जानने के लिए शास्त्र ही तेरा प्रमाण है; शास्त्र-विधान द्वारा कहा गया कर्म तू यहाँ करने के योग्य है। असुरी संपदा से बचने का उपाय यही है कि बुद्धि स्वेच्छा को नहीं, शास्त्र के प्रमाण को माने।"
    , "Therefore, let the shastras be your authority in determining what is to be done and what is not; knowing the ordinances of scripture, you should perform your work here. (The discipline that turns whim into dharma.)"
    , "Por lo tanto, que las shastras sean tu autoridad para determinar lo que debe hacerse y lo que no; conociendo lo prescrito por la escritura, debes cumplir aquí tu obra. (La disciplina que convierte el capricho en dharma.)"
    , ["shastra", "authority", "pramana", "duty", "शास्त्र", "प्रमाण", "कार्य अकार्य", "विधान", "discipline"]),

  // ─── Chapter 17 ───
  bg("श्रद्धात्रय विभाग योग", "15-16", "17",
    "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्। स्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते ॥ मनःप्रसादः सौम्यत्वं मौनमात्मविनिग्रहः। भावसंशुद्धिरित्येतत्तपो मानसमुच्यते ॥"
    , "anudvega-karaṁ vākyaṁ satyaṁ priya-hitaṁ ca yat, svādhyāyābhyasanaṁ caiva vāṅmayaṁ tapa ucyate — manaḥ-prasādaḥ saumyatvaṁ maunam ātma-vinigrahaḥ, bhāva-saṁśuddhir ity etat tapo mānasam ucyate"
    , "वाणी का तप: ऐसा वचन जो व्यथित न करे, सत्य हो, प्रिय और हितकारी हो, तथा स्वाध्याय का अभ्यास। मन का तप: मनःप्रसाद, सौम्यता, मौन, आत्म-संयम और भाव-शुद्धि।"
    , "Speech austerity: words that cause no distress, truthful, pleasing and beneficial, and the practice of self-study. Mental austerity: serenity of mind, gentleness, silence, self-control and purity of intention."
    , "Austeridad del habla: palabras que no causan aflicción, veraces, amables y beneficiosas, y la práctica del estudio de uno mismo. Austeridad mental: serenidad de la mente, amabilidad, silencio, dominio de sí y pureza de la intención."
    , ["speech", "truth", "austerity", "वाक्-तप", "सत्य", "मनःप्रसाद", "मौन", "तप"]),

  // ─── Chapter 18 ───
  bg("मोक्ष-संन्यास योग", "61", "18",
    "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति। भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया ॥"
    , "īśvaraḥ sarva-bhūtānāṁ hṛd-deśe 'rjuna tiṣṭhati, bhrāmayan sarva-bhūtāni yantrārūḍhāni māyayā"
    , "हे अर्जुन! ईश्वर समस्त भूतों के हृदय में स्थित है और माया द्वारा सब भूतों को यंत्र पर चढ़ाये रथ की भाँति घुमाता रहता है।"
    , "The Lord dwells in the hearts of all beings, O Arjuna, causing all beings to revolve as if mounted on a machine by His maya."
    , "El Señor mora en el corazón de todos los seres, oh Arjuna, haciendo girar a todos los seres como si estuvieran montados en una máquina por Su maya."
    , ["ishvara", "heart", "माया", "हृदय", "ईश्वर", "अंतर्यामी", "यंत्र"]),

  bg("मोक्ष-संन्यास योग", "62", "18",
    "तमेव शरणं गच्छ सर्वभावेन भारत। तत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम् ॥"
    , "tam eva śaraṇaṁ gaccha sarva-bhāvena bhārata, tat-prasādāt parāṁ śāntiṁ sthānaṁ prāpsyasi śāśvatam"
    , "हे भारत! उस (हृदय में विराजमान ईश्वर) की ही सम्पूर्ण भाव से शरण ले; उसकी प्रसाद-कृपा से तू परम शान्ति और सदा का नित्य स्थान प्राप्त करेगा। अंतर्यामी को जानकर उसी की शरण में जाना — यही शरणागति का स्वरूप और गीता-उपदेश की चरम पराकाष्ठा है।"
    , "Take refuge in Him alone with all your being, O Bharata; by His grace you shall attain supreme peace and the everlasting abode. (From the Lord within the heart to total surrender — the climactic teaching.)"
    , "Refúgiate solo en Él con todo tu ser, oh Bharata; por Su gracia alcanzarás la paz suprema y la morada sempiterna. (Del Señor en el corazón a la entrega total: la enseñanza culminante.)"
    , ["surrender", "sharanagati", "grace", "peace", "शरण", "प्रसाद", "शान्ति", "परम धाम", "अंतर्यामी"]),

  bg("मोक्ष-संन्यास योग", "65", "18",
    "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ॥"
    , "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru, mām evaiṣyasi satyaṁ te pratijāne priyo 'si me"
    , "मेरा चिंतन कर, मेरा भक्त बन, मेरी पूजा कर, मुझे नमस्कार कर — तू मुझे ही प्राप्त होगा; यह मैं तुझसे सत्य वचन देता हूँ क्योंकि तू मुझे प्रिय है।"
    , "Fix your mind on Me, become My devotee, sacrifice to Me, bow to Me — you shall come to Me alone; this truth I promise you, for you are dear to Me."
    , "Fija tu mente en Mí, hazte Mi devoto, ofréceme sacrificios, póstrate ante Mí — solo a Mí vendrás; esta verdad te la prometo, porque Me eres querido."
    , ["surrender", "devotion", "promise", "मन्मना", "भक्त", "प्रिय", "वचन", "mad bhakta"]),

  bg("मोक्ष-संन्यास योग", "66", "18",
    "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥"
    , "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja, ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ"
    , "सब धर्मों का त्याग कर केवल मेरी शरण में आ; मैं तुझे समस्त पापों से मुक्त कर दूँगा — शोक मत कर।"
    , "Abandon all varieties of dharma and just surrender unto Me; I shall deliver you from all sinful reactions — do not grieve."
    , "Abandona todas las variedades de dharma y entrégate solo a Mí; Yo te libraré de todas las reacciones pecaminosas — no te aflijas."
    , ["surrender", "moksha", "final teaching", "शरणागति", "मोक्ष", "पाप", "चरम उपदेश", "famous", "gita essence"]),

  bg("मोक्ष-संन्यास योग", "73", "18",
    "नष्टो मोहः स्मृतिर्लब्ध्वा कार्यं चोद्यते मया। स्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव ॥"
    , "naṣṭo mohaḥ smṛtir labdhvā kāryaṁ udyate mayā, sthito 'smi gata-sandehaḥ kariṣye vacanaṁ tava"
    , "अर्जुन ने कहा — मेरा मोह नष्ट हो गया, स्मृति प्राप्त हुई; मेरा कर्तव्य स्पष्ट हो गया। मैं संदेह से रहित हो गया हूँ, तेरा आदेश पालन करूँगा।"
    , "Arjuna said: My delusion is destroyed, memory regained; my duty stands clear. I stand free of doubt and shall act according to Your word."
    , "Arjuna dijo: Mi engaño ha quedado destruido y he recobrado la memoria; mi deber está claro. Estoy libre de duda y obraré conforme a Tu palabra."
    , ["arjuna", "delusion destroyed", "resolution", "मोह नाश", "स्मृति", "संदेह", "conclusion"]),

  bg("मोक्ष-संन्यास योग", "78", "18",
    "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥"
    , "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ, tatra śrīr vijayo bhūtir dhruvā nītir matir mama"
    , "जहाँ योगेश्वर श्रीकृष्ण हैं और जहाँ धनुर्धर अर्जुन है, वहाँ निश्चित ही श्री, विजय, विभूति और अटल नीति है — यही मेरा मत है।"
    , "Wherever there is Krishna, the Lord of yoga, and wherever there is Arjuna, the wielder of the bow, there fortune, victory, prosperity and unshakable morality surely dwell."
    , "Dondequiera que esté Krishna, el Señor del yoga, y dondequiera que esté Arjuna, el portador del arco, allí moran con certeza la fortuna, la victoria, la prosperidad y la inconmovible moralidad."
    , ["victory", "krishna", "arjuna", "conclusion", "योगेश्वर", "धनुर्धर", "विजय", "श्री", "final verse"]),
];
