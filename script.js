// Array of objects to store phone number, name, and PDF ID
// const certificates = [
//     { phone: "9619583951", name: "શ્રી સોનાલીબેન શાહ", pdfId: "1lZcLuxfzV6vZqv_-Kjaxykyyeoeuqal3" },
//     { phone: "9913731684", name: "શ્રી દિનેશભાઈ લલિતભાઈ જોષીપુરા", pdfId: "12zuP9YdzohEpJqTr3IwpH4GcOYkV7ZH9" },
//     { phone: "9023130662", name: "શ્રી રીનાબેન રણમલભાઈ ભાટુ", pdfId: "1BPla1ZP8Fyyi-UpV90gCuEXV3A16siAE" },
//     { phone: "9974009042", name: "શ્રી નટવરભાઈ આહલપરા", pdfId: "1rzuayoLeLdlY1WEZmJO4CObrybsUq5vL" },
//     { phone: "9427244251", name: "ડૉ. ધીરજકુમાર વલ્લભજી વ્યાસ", pdfId: "1_T6MONkBqbTlEjFeKB_iNX-s5npKXrZq" },
//     { phone: "9824079403", name: "શ્રી ઉષાબેન એસ. શારડા", pdfId: "1aSLTp8aUgMbvfM7--xVqcDGLaR5hM1uc" },
//     { phone: "9979312028", name: "ડૉ. રાધિકા રાહુલ ટીક્કુ", pdfId: "1J5NyqbRVe9Op7I0Q3KygVKKJN4t9DbfH" },
//     { phone: "8200454521", name: "શ્રી જયસુખભાઈ લાલજીભાઈ જીકાદરા", pdfId: "1SHhhnRB-WHkQrkGHASwkZRS-HgleLJ1F" },
//     { phone: "No Number", name: "શ્રી બિંદિયા સંજયભાઈ દામણી", pdfId: "1mXXrs4H7DbsZ4xCNKlde0HXQ3eKyPF2l" },
//     { phone: "8200006894", name: "શ્રી નેમીષાબેન ઘનશ્યામભાઈ કસવાળા", pdfId: "1bimklWcZnrDMt-QEuor4nhLagS4aVmSz" },
//     { phone: "9429272564", name: "શ્રી દેવાંગી એમ. બારૈયા", pdfId: "1HtqseYrrkaM10GROZ1GGPzY-pgIobvv7" },
//     { phone: "8200868302", name: "શ્રી ખુશી રાજેશભાઈ વિરડિયા", pdfId: "1FoEZoLPTFbdo9BnHD4ST-K0QwNO2ORE5" },
//     { phone: "8320671115", name: "શ્રી ભૂમિકાબેન અલ્પેશકુમાર પ્રજાપતિ", pdfId: "17yc2ShYtO_Qwjc25380c95sKmCSepAbh" }
// ];

const certificates = [
    { name: "શ્રી સોનાલીબેન શાહ", pdfId: "1tbGq4o64sDVeORC3gKj2uA63Qa4N9lSH", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9619583951" },
    { name: "શ્રી પાર્થ સોલંકી", pdfId: "1FckPqwLeVkrJjtMsl_F7BK3l4Uo64qgh", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9427429266" },
    { name: "શ્રી દિનેશભાઈ લલિતભાઈ જોષીપુરા", pdfId: "1E6EFKoIrHNyleJxbQoPyovEUgFRvEvOA", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9913731684" },
    { name: "શ્રી રીનાબેન રણમલભાઈ ભાટુ", pdfId: "1uHHFIwTNtCi_tpDmUGyQ7cS6BQVuaW6V", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9023130662" },
    { name: "શ્રી નટવરભાઈ આહલપરા", pdfId: "1dMPau_gP2wnqKQxf7mM4nJHY2meg2udc", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9974009042" },
    { name: "ડૉ. ધીરજકુમાર વલ્લભજી વ્યાસ", pdfId: "15sl-VlpQNqKCdGDMADwN3c6XN5iC631D", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9427244251" },
    { name: "શ્રી ઉષાબેન એસ. શારડા", pdfId: "1V1TMlZbYhwbieK5UpEbgOYDjiRD1RLqc", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9824079403" },
    { name: "ડૉ. રાધિકા રાહુલ ટીક્કુ", pdfId: "1IOs9nFoib6rjpwB1e89uBPQu4z4jHuGb", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9979312028" },
    { name: "શ્રી જયસુખભાઈ લાલજીભાઈ જીકાદરા", pdfId: "1PdHm4MHEC_GeLsxRSYKGs9z-GcCuDowW", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8200454521" },
    { name: "શ્રી બિંદિયા સંજયભાઈ દામણી", pdfId: "1ToHz2eItWvor-TLpuqL_6lmOebY24kQO", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "શ્રી નેમીષાબેન ઘનશ્યામભાઈ કસવાળા", pdfId: "1KB1jE-1A3hC-iukHkaKmVEGTUtRScn-G", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8200006894" },
    { name: "શ્રી દેવાંગી એમ. બારૈયા", pdfId: "1P-0WvXfaiuY7qLzb9sH_7U8Q9_AMyja8", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9429272564" },
    { name: "શ્રી ખુશી રાજેશભાઈ વિરડિયા", pdfId: "1ZLFbCs2cYr87v2bi6boSl9tZUiVR9-7P", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8200868302" },
    { name: "શ્રી ભૂમિકાબેન અલ્પેશકુમાર પ્રજાપતિ", pdfId: "1_eaXUP3nqx0Xs1seir15aNBoAXkcplZa", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8320671115" },
    { name: "કૃપાબેન જોગાભાઈ રબારી", pdfId: "1S2YQpIrWcQYUf8Q98Z9EweqomgOBB9f1", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "ગાયત્રીબેન તગજીભાઈ બારોટ", pdfId: "1ZU2FcICT23CD0sdrXdGtGVDaoVyW12SL", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "સોનલબેન ચહેરાભાઈ ઠાકોર", pdfId: "1pij_biTjilvwWgRcun9Q2NVy9jDz-QaP", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "અક્ષરાબેન નરસુંગભાઈ ચૌધરી", pdfId: "1kYg-7Fc72QRmUWAwPinEhE4hf2oDr-tT", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જનકભાઈ વિરજીભાઈ ખાંભડ", pdfId: "1WdvZf9xuSesx5lrhpXiQ-bqEQXvkovn5", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "મનીષાબેન નરસિંહભાઈ ચૌધરી", pdfId: "19BXoVCCbzSMdbDpdhEXLt7oLvYsSHGE7", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "અંજલીબેન લક્ષ્મણભાઈ ચાવોડ", pdfId: "1_3kpdgL5ADsqefuvwSCGkWHSZ7qK_nlY", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "રીંકલબેન પાનાભાઈ વાઘેલા", pdfId: "1NDnxF-mHPU4pPMVNw6aN2Wjrg6CvLP7f", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જાગૃતિબેન ખેંગારભાઈ વણકર", pdfId: "1P3NbjTQUpTpafCZ7mIjI52w0tVYVJclZ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "દિવ્યાબેન અરજણભાઈ રાજપુત", pdfId: "1Fbv-cM5SZ0njd0ZzCV0ByU_tiZrVRmai", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "દિવ્યાબેન લક્ષ્મણભાઈ સોલંકી", pdfId: "13qR9F98FQ56dAg0OT3Mkr6nwwowzPmXZ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "પરીબેન દિનેશભાઈ મકવાણા", pdfId: "1o1TUr_x1121aws4RWibdw6-VoiVZ47-B", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "નયનાબેન દાનાભાઈ મણવર", pdfId: "1-32Z9yoTedbxOSQp7nFEKIaNzYSIqiji", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "આરતીબેન અજાભાઈ રાજપુત", pdfId: "1PlBf6oyYYrZqrb5tuVHP-DBdW6cWHOVe", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "રંજનબેન ભગવાનભાઈ સોલંકી", pdfId: "13Djd9qBWqsIxucHVxo-8NcDAP984QF2I", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "વસંતબાઈ માનસિંહ વાઘેલા", pdfId: "12qweaBjwHn_pyh4qOLS6YUhqtjMcKtbY", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "રિંકલબેન મેરાજભાઈ ચૌહાણ", pdfId: "1Cgk4fVlgJAdEQ4gLAbVpXpy7DkvbUKlN", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "આરતીબેન લાધુપુરી ગૌસ્વામી", pdfId: "14u0pcGR33o6t6ngSoKlB0M9LNLN1Vv6E", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જાગુબેન નરસિંહભાઈ સુથાર", pdfId: "1lM6Gvk_PmlTBySlpsX6GYu076OC3EtFv", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "અવનીબેન રૂડાભાઈ વાઘેલા", pdfId: "14ZQ-rPbcHyout0pF6xcD1Q-_fAvALlQk", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જયશ્રીબેન રામાભાઈ ખોડ", pdfId: "1aDEFg3kQqzHQLRaWVTcDPMaxViBf-1nQ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "કિંજલબેન વાસીભાઈ ખટાણા", pdfId: "1HmWZHieueGuuN1vKtdwi24tjqetx-GdO", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "રિકલબેન પચાણભાઈ કાળમા", pdfId: "1_3pinup9ryTfldf12kaX03VflzkqIeiZ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જીજ્ઞાબેન લક્ષ્મણભાઈ રાજપુત", pdfId: "1xniJm_k9-tgJvEtI56AFAHKiEcidzlFE", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "અનિતાબેન મલાભાઈ ચૌધરી", pdfId: "1OpXgTKRfBUTZUzSqK4353Ck5DKySDQ6C", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જયાબેન નાગજીભાઈ નાઈ", pdfId: "1zZimkJTwtuoRUikj07uafjqUBZXV3AL-", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "ખુશીબેન પાતાભાઈ ચૌધરી", pdfId: "1MWeI9J4rWpsNiMIZpGuQi84s3S6qB1tH", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "સાક્ષીબેન નટવરભાઈ સુથાર", pdfId: "10qFCQAn_jZhKpKj7MfQTBhTXCprE6_-H", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "કવિતાબેન અમરતભાઈ કુંભાર", pdfId: "1sP3DCF1bS6awhNg8VP8puiDEPeNCusxs", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "હેતલબેન રમેશભાઈ ચૌહાણ", pdfId: "1dquW5TOOvYlVjv7n9FrvdsgOoRfZAr1g", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જોતલબેન ભાવાભાઇ ઠાકોર", pdfId: "1qoMM3bd2J4XFwsArXxHRMF091shKiBpW", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "સૃષ્ટિબેન મુકેશગર ગૌસ્વામી", pdfId: "1qXQg3S--Vigqa1YGUXNbVzAkuLJfKwJ6", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "મમતાબેન સતરાભાઈ મકવાણા", pdfId: "1T1yFioHLaOAwdDcT7yBskbCdys0SvMnM", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "મિતલબેન વિહાભાઈ ચાવોડ", pdfId: "14vOHapsfoyoa1U5Lv_rksiZiVk2J-OxM", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "પ્રિયાબેન કાનજીભાઈ જોષી", pdfId: "1VuUCK4yFvAGB_Aq7_ziniQaO-C-i-mBU", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "સેજલબેન અમરતભાઈ રાજગોર", pdfId: "1zZMV_z6PrlpKOuzWema67fZxZx_Qmxur", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "પવનબેન ભલાભાઈ રબારી", pdfId: "1yejaSJ1VCEQ46RE3erW3O2VZ46Z4vG1A", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જનકકુમાર શ્રીરામભાઈ રાજગોર", pdfId: "1NEtbXLg3pGJzZggO4RQCZ69-vR125ZYF", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "નરેશકુમાર અરજણભાઈ ગોલેતર", pdfId: "1WSpzeFGP3Rt48Niq1yXv2LZ1ghRyUu5Q", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "વિદ્યાબેન તખાભાઈ ચૌહાણ", pdfId: "1piPO61A_fyDNRXboyCbZkbJIzR-W-wet", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "મિનાક્ષીબેન પીરાભાઈ રાજપુત", pdfId: "1VTK5t8HREXNsIP99kogcYBG31z_Xj05w", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "નૈયાબેન રમેશભાઈ ત્રિવેદી", pdfId: "1VwJ3OI_IH27uyclLk_6huXjTw2mSoJxv", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "મિતલબેન નારણભાઈ પરમાર", pdfId: "1twWfmk-xtd35Pd-v81G7oKWZr2lgALKI", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જયશ્રીબેન ચંદુભાઈ પરમાર", pdfId: "1PT1zYjQSQy9KFulWK6Plco_LlWWF_YfT", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "રિદ્ધિબેન પ્રેમાભાઈ વજીર", pdfId: "1yGBhjvZuzvpxo_ilUz4I6cXf09EtwNV8", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જીનલબેન કરમશીભાઈ ભીલ", pdfId: "1zApaM0-pNpdCk9IIumOwi9Ys1NQXwhDR", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "સચિનકુમાર જોગાભાઈ મકવાણા", pdfId: "17Wx0sKAEti6PIqlF5rllJksZHhojfUZo", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "રમીલાબેન હીરાભાઈ રબારી", pdfId: "1l7eeLrI3Lvm_VhpKtjKh33j8fJuXyHcp", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "મયુરીબેન સવજીભાઈ ચૌધરી", pdfId: "1bqIbGPy6LwyQ07wdkJJDXlaMVcHkJYnY", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "પુજાબેન જુમાભાઈ રાઠોડ", pdfId: "1nQmbQ9YlCVZaj4uK0hI-iMrs3323fLTx", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "પ્રિયાબેન સુબાભાઈ બાંભણીયા", pdfId: "1qXqEviov1_sif-BFlteXSSjlcZLK3lTg", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "ભૂમિબેન વસંતભાઈ ચૌહાણ", pdfId: "1UH5TBBOCKVhPPtgShPKymF_ejZ4ON47D", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "શિલ્પાબેન ગણપતભાઈ ચૌહાણ", pdfId: "14R5jmsZN4qrD3Cvi2KRJU9FtOe9KU9y6", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "સીતાબેન કરશનભાઈ રબારી", pdfId: "11YUsRfMDVPTpvJkxh6gWbPipPzj8YEwh", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જાગૃતિબેન રૂડાભાઈ વાઘેલા", pdfId: "1B7432CPD_7Rbkbjj3q_WvQiIDsrOuSYo", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "હીનાબેન માંનાભાઈ રાઠોડ", pdfId: "1kLwhZNMmCbSAn0Dqkhre4Le0TV53f3xO", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "ખુશીબેન મહેશગીરી ગૌસ્વામી", pdfId: "18QMrtXFzgkZFdzz2UQAPQYGEg831K3t7", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "રવિનાબેન નરસુંગભાઈ ચૌધરી", pdfId: "11lA-gbCRFVANaGwjTSOzusJtiK9aoGlX", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "સંગીતાબેન કાંતિભાઈ ચૌહાણ", pdfId: "1CkBwggjujEI7vhVHrB1Cx49d6OM7FtQ1", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "આશાબેન ભુરાભાઈ ચૌહાણ", pdfId: "1Ly_aSR3yoyVTb2ekmAcegzkX-fhJ11Pd", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જયશ્રીબેન લાલાભાઈ પ્રજાપતિ", pdfId: "11aepr2Tg_1Q6eU94YJ_0l3BWSMQGMmfU", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "મમતાબેન ભરતભાઈ સુથાર", pdfId: "1zYGm2p9Vj9NIuoDApCAF2PxrGrbDFOU6", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "લક્ષ્મીબેન પોકરજી સુથાર", pdfId: "1_FDLjjH_ULko5QjKCOWTcDYLsPpuYuvQ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "ઊર્મિલાબેન ભરતભાઈ પ્રજાપતિ", pdfId: "1av8iFZL_jIrKnOUSOoZnjENMXPPwXSJK", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "હર્ષવી વેલજીભાઈ ડોડિયા", pdfId: "1Y8jQrRuga8ZLWyIdrRpZQqMPmVKyzDb7", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "ભાવનાબેન લક્ષ્મણભાઈ રાજપુત", pdfId: "1AA_1cEuVhXAyqrfbVs8-0SoLi7MwAdZQ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "રાહુલકુમાર રામજીભાઈ પરમાર", pdfId: "18r04m-IPwyGhN8MqEL9rcW98TFwzpVeg", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "આરતીબેન પાનાભાઈ રાઠોડ", pdfId: "1EYcJoIheTk-U1GLcYQew7Hz68GWrouZR", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "માવીબેન સેનાભાઈ રબારી", pdfId: "1sua58YSHRVK7lskQb4Pi-sI8_26Iojy1", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "એકતાબેન રૂડાભાઈ વાઘેલા", pdfId: "159zLbzSPqMJOWwTySOPrghKQlvXeaGPn", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "જીગરભાઈ હમીરભાઈ જાળિયા", pdfId: "17pEhgINgnHChg1vM1HZXrmEO9waclV-l", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "માવીબેન હમીરભાઈ રબારી", pdfId: "18C9czxbB4c2CtIp1UCA-6Zo44736Egf9", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "આરતીબેન દ્વારકાભાઈ રબારી", pdfId: "1-JSDkobC3zncm05x3nVqAaIJQlNL_Q56", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "આશાબેન ભાણાભાઈ ગુર્જર", pdfId: "1dM-41GfdIvUIA8myqRzwx58J6d2qSOAu", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "વૈકુંઠ હરિરામભાઈ મોઢ", pdfId: "1U1EcjjUyrq7LbeuBJj4Ixo5NTYPiavaz", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "વિપુલભાઈ જયંતીભાઈ ચૌહાણ", pdfId: "1IPHteCs9sxcHypfP66kReuct8aavXjna", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "સેજલબેન ચંદુભાઈ રાવળ", pdfId: "19LZTHRyoRw9a8UoMpa2Ne44I9RH1OMqP", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "વસંતીબેન નરસિંહભાઈ ચૌધરી", pdfId: "1aBCNN7u_R75yIZ07c51VXVJTsQbLhBHw", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "સેવંતીલાલ ચોખાવાલા મનોજકુમાર", pdfId: "1egzvIZTFcIx7xyx_qK8rL6cx-Y9WFCUp", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "જેન્સી  બોઘાણી", pdfId: "1Zno0-Gn8X9zNxhJi_JmI-XrxQxTawgr8", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "વેન્સી  ખુંટ", pdfId: "1rBd-wptOic72BFqJUoAQie6qhOiEwVYA", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "ક્રિષ્ના  હેલયા", pdfId: "13OlqBb76wHtEjAw9tOchsWdL3ioyjadu", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "પ્રિયા  કનાળા", pdfId: "1NXBE0Dff0NXyJqRSsFg_jwuVGEUu3Mmg", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "ક્રિષ્ના  સોરઠીયા", pdfId: "1rOevrI6sPq-nbzL63oHtV14IylL9BGsc", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "ઋતિકા  સોલંકી", pdfId: "18GRCmLi5LlYG95kpIiTuGS9--XUQNENZ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "યશ્વી  ટિંબડીયા", pdfId: "1knanZ7fyMkUqB2zKnCHAaTgmA08IEfvm", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "જીનલ  સોરઠીયા", pdfId: "1zTEMMwv_W-FFpixZ5RMHBFJZmT-BjsHs", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "હેત્વી  પડશાળા", pdfId: "11OnlMRt72tO7ry3EQ67AQRVLVlgDjaIF", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "એશ્વી  શેલડીયા", pdfId: "1OeIt-nrCOaQod2okrQ6o2KkScpccus-L", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "તમન્ના  કોરેજા", pdfId: "1LFNkqwrY_uIYncnBUjYlwGP2yF5NyVNf", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "સાનવી  જયસ્વાલ", pdfId: "1J90W2RR5O9YUnr8ePFV1SPDuQG1YfDGR", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "આસ્થા  ગોસાઈ", pdfId: "1N_3jwEzJL4nMRz9nayeslsDL9yN03Dgt", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "રવિના  જાટ", pdfId: "1pcsJ72SmRxCGOOERKToI2XKOmZUpXk86", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "પલ્લવી  બારૈયા", pdfId: "1kqaaCKI6JsqCVSlInIvGNlIDbHYjeA7j", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "ભૂમિકા  ચૌહાણ", pdfId: "14GSe2gjM2jOTMGXCyxlf-pDaTZPc7-OV", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "તુલસી  હેલૈયા", pdfId: "1gGA96-uMFuQpYW9ot73LiDROtwx_VfDA", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "નીલોફર  આરબિયાણી", pdfId: "18NZ7TlknRMZM1c70rAtG1OwtGM7cDIgQ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "દીક્ષા મુકેશભાઈ દાવડા", pdfId: "114XgRDr9m65naOHyXlVVmruo_nK-TQ9-", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },
    { name: "યોગેશ નટવરલાલ ભટ્ટ", pdfId: "1NOhd7ZXRuL14wrS9qMlavbGVNRhMWA58", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "નટવરલાલ શાંતિભાઈ ભટ્ટ", pdfId: "12i5oN04x7MQ_Yszvu0G8hbV1Jp9Sclbq", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "બંસી મનીષભાઈ સાવલિયા", pdfId: "1BRxalIv0Z44lm4T0Xyn5-xq5Zv6htT9D", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9909296090" },
    { name: "વૈશાલીબેન ત્રીકમલાલ પંચાલ", pdfId: "1mreMioP7iJqWq_62sJyVkmP5XJXrKsMq", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9429732795" },
    { name: "રાજેશભાઈ આર પારેખ", pdfId: "1bXPRTt0HZw3qPnWMrjKyw_RAh7ca4ckW", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9898689233" },
    { name: "હર્ષિદાબેન મોહનભાઈ વિરડીયા", pdfId: "1wBFSEnYGjeTF2hGiDdYR9pQfo9bUW-jO", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9638863063" },
    { name: "સીમા રોહિતભાઈ પંડ્યા", pdfId: "1CHviJxE33HXW9Q2vdmWQi4ya1M7QCL4a", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9909503242" },
    { name: "વાડીલાલ મંગળદાસ વાળંદ", pdfId: "1fYmYGubGa0nPHtGszRWLPyJOA5oXQVJW", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "6354391188" },
    { name: "મીનાબેન વાડીલાલ વાળંદ", pdfId: "1xCAtSLW3_bPBxfrHV1q3W5f0boWBqB9m", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "6354391188" },
    { name: "પૂર્ણિમા જયેન્દ્ર પંડ્યા", pdfId: "1NIObcwvW-qcLcd2DlxBXzGvaFsAqZiaz", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7405836377" },
    { name: "મીત શારદુલ હાથી", pdfId: "1aAz4qazF5QRT71Jmr3W5NY0Tj6qw-0Y6", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9662606257" },
    { name: "રેખાબેન રશ્મિકાંત પટેલ", pdfId: "1XVA57Qn0gsXUAfFTmzuG--HeowCzk0S7", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9879547030" },
    { name: "શીલાબેન યુ વ્યાસ", pdfId: "1OEjINBzUa0Uj3pjgrNPRxxb3jt_yEUqw", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8238332271" },
    { name: "દિપ્તી પ્રવીણચંદ્ર ટેલર", pdfId: "1CEl45g6udoumnfatR6CvhW_scoEOWLZk", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9227904430" },
    { name: "જગદીશભાઈ ભરતભાઈ સોલંકી", pdfId: "1shUla4eZtLQB5uRRZLXSzlM2Ycj6FE7a", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "ગણપતભાઈ બી નાથી", pdfId: "1v2Fv5Tp6-LLwi7l_LVz1W1NYOaqjwsKM", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "નિરંજના દિનેશભાઈ જાંગલ", pdfId: "1GnscK1NciAKjGqbPS32JjXHfIQBU_MBx", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9819736751" },
    { name: "પી એમ લુણાગરિયા", pdfId: "1Manzb4XfW8EPvxiH8iHK876g2pNnZKR9", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7698160160" },
    { name: "મનોજકુમાર  નાવડીયા", pdfId: "1fvN_uLHXapwRCMl7F-1VwsErEz26l9kE", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8000056148" },
    { name: "હિમાલી અમિતભાઈ ચૌહાણ", pdfId: "1XoaL2WB6pRrw1Na99K6Rb64SYegfVshC", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "5265006874" },
    { name: "પરેશભાઈ એલ જોષીપુરા", pdfId: "1i2PrtEpdxUP4AUvikr_yewCWZSKZuTdB", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9033740038" },
    { name: "જીતેન્દ્રકુમાર ભીખાલાલ જાટસણા", pdfId: "1xBOmRTjXJslI64a5vs9rDOfJk6N9My2c", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "ધવલકુમાર જનકરાય જોષી", pdfId: "1jPkx-ubde1pIPPui9MeegOn6YGG5gxSe", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9428708771" },
    { name: "દેવ રવિભાઈ પરીખ", pdfId: "1WUypli2I8jfDOdXelaJl76xZUAhQdCjR", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7621969006" },
    { name: "ડાહ્યાભાઈ ઝવેરભાઈ આદરોજા", pdfId: "1tcB2baN_iPtzD5B9Abab84pFjvMV1UBc", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9428343455" },
    { name: "સુર્યા ભગીરથ બ્રહ્મભટ્ટ", pdfId: "1Cjc1Nu6vnDrYDAGW7w1x_ZBUOCFlD58y", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "મીના બી જાગીરદાર", pdfId: "1jTo1NodEb-zuR8C-szMJL8JGW2Q-VUCF", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "લીલાબેન જયંતકુમાર જોષી", pdfId: "1GaUcM0ITm-tqTxSxN1i8KD8Yw6aUbXKg", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7265027125" },
    { name: "વસંતરાય ડી ચાવડા", pdfId: "1SQd84LfmtaGSK0MMrtlCYex3x888fxHj", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "પ્રકાશકુમાર મનસુખલાલ મહેતા", pdfId: "1V8NT4HA432hhXtoOW8piTmt6P3wwhcYv", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9726615276" },
    { name: "રામજી વેલજી રાઠોડ", pdfId: "1f_kBScU9aFLPzHyl1vTpCE4R5GzomfA6", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9727868752" },
    { name: "નયના આર. ઠક્કર", pdfId: "1ow7ZcgGZAAdfbReHcEByfbtI2beI3KbF", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9773093156" },
    { name: "સોનલબેન છબીલદાસ મગરુ", pdfId: "19WYcCNmChaB2HLkzffr10-qPsXUSpuK1", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9429297268" },
    { name: "સુષ્મા કમલેશભાઈ શેઠ", pdfId: "11ZXxaz_JHvEgt7OMMGUiulC2FkrhCKiD", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9824522243" },
    { name: "બિંદુબેન જગદીશચંદ્ર કચરા", pdfId: "1PbiN_wIGvRQHqK4oW6Tgd77bKy2vUdxr", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9879747134" },
    { name: "ભાવનાબેન પી. જોષીપુરા", pdfId: "1-o7CPbu4HFq1y23-K9zRI0NjoJav0DsW", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9033740038" },
    { name: "ગોહેલ દોસ્ત જગદીશ", pdfId: "13cZy-s7eZLVS9bZiDwyyCAwKh5oUtIu4", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9428141606" },
    { name: "કૃતિ જય હાથી", pdfId: "1DYuRZXauLCgj2w3n-waoX8sXKkZYqZHB", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9824429058" },
    { name: "કિરણભાઈ આર પંચાલ", pdfId: "1CYEX81m7qwavNR6zOfbJGP6ff9QKmbdL", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7383484817" },
    { name: "ભરતભાઈ ભણસાલી અંજના", pdfId: "1UyDXkwKfloEdU0xHHQbkDTz1yS50ia8I", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "ત્રિવેદી  અલકા", pdfId: "1K3Nduubo6sL0oQkqiq65fIqnkFpEBW3b", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9879609314" },
    { name: "વિપુલ મલકાણ આશા", pdfId: "1Lp5xlZ-pFtt8asMbGmZxZ91o7ypfF8H_", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "મહેતા  નિધિ", pdfId: "1naeWKWO3vP9sLanI2jN6c28-5T9smxOm", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "ભારતી  વડગામા", pdfId: "1WoUNitnz1lF0WOoS04UftfQzbuo1Dfni", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9974028643" },
    { name: "મેઘા નિગમ ટાંક", pdfId: "1C4af4lrG6NiRAoAqtzYvsXBcXYIRh0tH", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "4409739707" },
    { name: "સુનેરા અમજદખાન પઠાણ", pdfId: "1Nh76ymuGdew9D9oEglNTk-8EDrYmkJg2", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8141326112" },
    { name: "પંડ્યા  હીના", pdfId: "16Ib1ei9cWbUEAo9hkKysnBDTTK-4Jb9v", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9157420473" },
    { name: "ગુલાબ બી. હિંડોચા", pdfId: "1LuCfnV8lKhi_7Oii7dc0OkeB1O5wiyqr", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9428241680" },
    { name: "જ્યોત્સના જી. હિંડોચા", pdfId: "1gfFz8nyDTwII7M8s8XOHGEP4ze5OvUV_", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "નયના નાથાભાઈ પરમાર", pdfId: "1A2tNPQlmUDveCG6_V5IrvulqA2fsIs7b", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "તુષાર જનકભાઈ ભટ્ટ", pdfId: "1-HAc8lWzUhPj-rDq4lOmNBf4a8fW6Ax2", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9898276022" },
    { name: "મીનાક્ષી  વખારિયા", pdfId: "1w3aDRd4CLRGlDIKdVrqYcaF69vdIakaD", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9619230493" },
    { name: "ઋત્વિકા ખીમજીભાઈ પરમાર", pdfId: "18A4LrrJbzPug5B9U_Jda5abEy4fXIoFN", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9099047703" },
    { name: "રૂપાલી ઘનશ્યામભાઈ ગેંગડીયા", pdfId: "1qkLTqN3ftaxYlGAoR5Rf7J9Jyd8x2t7S", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9106212938" },
    { name: "મયુરી ઘનશ્યામભાઈ સોન્ડાગર", pdfId: "1uM2CmxuO1VoNy-QqFEP5H2yEmVCcKHi3", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9429605267" },
    { name: "કૃપાલી દિનેશભાઈ કામળીયા", pdfId: "1Bph9aG2f89TYV5PfZmIeI9wkB5Y1lB02", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9408911280" },
    { name: "દિપાલી ચંદુભાઈ બારૈયા", pdfId: "191UtJGixch6ePKFhB-beEgeoyIIyaPpt", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9998586974" },
    { name: "પ્રીતિ જગદીશભાઈ ચૌહાણ", pdfId: "1vZOqVqoB6pVcUISMEJfnxJ9WeJy9VPWT", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7096981090" },
    { name: "ઋષિતા રાજુભાઈ બારૈયા", pdfId: "113rvfFdIghu2e5lKF4P8SIV3aPqU4P4O", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9687527247" },
    { name: "રુચિતા એ. રાઠોડ", pdfId: "1bZoFjMJ4V8sLiKLhf4scwLYgWIuIZa72", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9328170837" },
    { name: "કિંજલ વિક્રમભાઈ વાઘેલા", pdfId: "1TqsoqzE2JvK9JgkUA4XY5iAaX_R2zJwN", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9879524970" },
    { name: "મહેશ એન. ધીમર", pdfId: "1X4x81YWYwPFyu7KVAL0o3dTyk0Lyh9J6", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7600373588" },
    { name: "રુચાબેન બીપીનકુમાર વ્યાસ", pdfId: "1biucWdGcgnrAtIAMNxmhghJ6NyPNqnlk", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9429698675" },
    { name: "હિમાંશુ રેખાબેન ડાભી", pdfId: "1qaqfX_2vFALFDZFr6KK8dQDDlqvYDzFo", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8999599997" },
    { name: "ભામીની તાપીશંકર કાપડિયા-જાજલ", pdfId: "1wKdvjp9wnpdZCnFlzEjv1LRpHM4uoJrH", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "રશ્મી  સંપટ", pdfId: "1WEFg0fcVvgTKgT93mL3TXcF-51dGm44O", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9969454312" },
    { name: "કિરણ વિ.  વાજા", pdfId: "1uWIuWuPT_KTEHl-yt1X7s9is-c_zVDBJ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9723097508" },
    { name: "રિદ્ધિ એ. ભુવા", pdfId: "1lTAWMjyfT7_L8E_YS97ENH_OxP2yu8hz", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9173297156" },
    { name: "બંસી જે. પામક", pdfId: "1Y823_Myct8HI1KVRLMMiTrqPGEd1yB3L", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "બી.બારૈયા  સંગીતા", pdfId: "1oEYIHRPsTCagfky3JbiCN3TkhHo9xnyF", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8140587646" },
    { name: "પી. સોલંકી સીમા", pdfId: "13uUdHzUXGh7jaElJvNKXYR1L7DvLTPiD", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "એમ. કંડોરીયા મિત્તલ", pdfId: "1EyVUMrY5orG2cUOn_no3iFknwhtxco9q", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9624537883" },
    { name: "ખુશ્બુ નિલેશભાઈ મિસ્ત્રી", pdfId: "1H5qJgowfJTM3LQxDtqeBdn_k_CIByoPL", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9426371926" },
    { name: "વિદ્યા પંકજકુમાર ઢીમર", pdfId: "13yIwpkogeXcTyQ34rw7LnRY-vRMZ8oRQ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9276453655" },
    { name: "જયેશકુમાર ગજ્જર શ્રેયા", pdfId: "1ujh9mST6DEVdoHsiTVrZve48umQrLwxr", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9687663650" },
    { name: "સુમિતા જયપ્રકાશ ચૌહાણ", pdfId: "1lWzZTc9HxbEL9g8AaSs6xCtyinFvI5Eu", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9714133835" },
    { name: "રાબિયાબાનુ અબ્દુલઇમ્તિયાઝ શેખ", pdfId: "1zk5V_RMbzZHC_po2gn4_pkWKMzaauD9v", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9913984477" },
    { name: "કૌશિકકુમાર આહિર ખુશી", pdfId: "17pjiTjE7fzcv-qf3xcSEeH3jMcROC8OH", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "6357371892" },
    { name: "ભાવેશગીરી ગોસ્વામી વિદ્યા", pdfId: "1qCcExLhiUtFAUO8ZNpxSTBKZRZnMul9s", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9023583678" },
    { name: "ચેતનકુમાર પટેલ આસ્થા", pdfId: "19syCnPADDFO7mvFUo0DC3rIgQwKw0UWk", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9998431655" },
    { name: "પ્રમોદરાય શંકરલાલ દવે", pdfId: "1Ket4KwtYTA51BsSdbhgyVoznjIGPocGe", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9429139085" },
    { name: "પૂજા દિનેશભાઈ ગોંડલીયા", pdfId: "1gNrCpBgAzX9E7bAhZjnQWW_yQ27EzV9g", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9313838228" },
    { name: "દીપિકાબહેન કે. યાદવ", pdfId: "11Ss6ZwCHgaYYt8fa6Vx_f8NCjw1Es405", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9904174648" },
    { name: "કાજલ એચ જોશી", pdfId: "17J6rp7Jgk0nzaZG6O3ZTfxVZjNJTOOzg", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9106422232" },
    { name: "સંગીતાબેન સી જોશી", pdfId: "1g65ac6outzrhGP5lndgjFK9oWQTm7KEX", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9545285384" },
    { name: "રેખાબેન ચીમનભાઈ ચૌધરી", pdfId: "1QMYQvgpd5hF1HzfTnF-EqnX6YJDgJTWc", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9727124926" },
    { name: "રવિના કે. મકવાણા", pdfId: "15KHXPB1uYQjdUrs2IdBJAcVivlZ5Ushz", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "જ્યોત્સના શ્યમગીરી ગોસ્વામી", pdfId: "18W0fR5VuRb9YOD1eCW-y_nX8iS3rju9G", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9664521440" },
    { name: "રજની એમ. સોલંકી", pdfId: "1eCN3KuqWKj1y9d4rWpbPKvRoB3VT2vJb", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9723781320" },
    { name: "ધ્રુવી જી. વસંતસ્વામી", pdfId: "1eZqgw2YrfhQ76Rns8werParPDu8LduTG", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9016128794" },
    { name: "આયુષી ડી. વાળા", pdfId: "1vKz7GyL-W15pv_hjDtjIPBN152lEYNyW", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9904145470" },
    { name: "પ્રિયંકા એમ. ભાસ્કર", pdfId: "1glzdFdlNLyjpQOjvegpHl_DxzA-qm1DG", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8849728549" },
    { name: "ઋત્વી પી. ખેરાલિયા", pdfId: "1D619iKJIEnVbGHXEseKm_Qh8ntxFk7jH", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7600335025" },
    { name: "ખુશાલી ચંદુભાઈ વડેચા", pdfId: "1D56KCPOo64bYorebiPC65LQ6Zig2TfwJ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "ઉમંગ એસ. બગડા", pdfId: "10ftKKofklEBSNxz0QZF9xCiqvLxPXNSQ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "6353003138" },
    { name: "આયુષી રામભાઈ વાઢિયા", pdfId: "1-h1_pa3E5GR0tl0JPNZyXOeE7y6lVl21", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8866288158" },
    { name: "ઉષાબેન ફાંગાભાઈ ચુડાસમા", pdfId: "1seCB0jOC03kDAFH42j8t2EhCTyDz6iGO", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9429223293" },
    { name: "જશ ભાવેશભાઈ પરમાર", pdfId: "141MrMZG9VR-dfd1CEPi6K9-3olxdK7mI", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9879368936" },
    { name: "પ્રિયા એન. કાલેણા", pdfId: "1WOUA3WIx1OzMUJjcv60GwUxtNkdN-5_d", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "ધ્રુવિતા એન ગોહિલ", pdfId: "1X8bashmTzs5H7BeSni8PhTKHQbvHoZnf", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "નફીસા કે કુરેશી", pdfId: "1q-n9dpkPp1v8EehibaSSaiz43X3ELaeK", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "સનાફાતમાં એ મીઠાણી", pdfId: "1oGUDhKlsZ96RXMIod-k9vwm6RK1kE27E", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7016319896" },
    { name: "ખુશ્બુ એચ સિપાહી", pdfId: "1xIGn9iT35rUFg5J07UxPd3brwPLlgUsO", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "પલક આર પોંકિયા", pdfId: "1pWjEa3Msg6tZkDp1EyuaxsNG_QWgcWtX", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7016319896" },
    { name: "નેન્સી આર મકવાણા", pdfId: "1H_dgYoYwNUNS_c5j9HEGu5O0OB6M7Yfz", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7016319896" },
    { name: "ઈસા બી. દુધાત", pdfId: "1_7tQJHkp1W6MkIu_2VS8era7qYVRZASY", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7016319896" },
    { name: "દયા એસ માધડ", pdfId: "1yFoea8M9yM8HYiZmJkYfDRtoJKncdCnU", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7016319896" },
    { name: "પૃષ્ટિ એમ બુહા", pdfId: "1PosfGS_TceveOE2sVT-nLbyDwE5UK5T8", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7016319896" },
    { name: "ગંગા એચ સોલંકી", pdfId: "1wbtRIs7hCFnFk5OlIiK86ihKwIMnqxbK", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7016319896" },
    { name: "જાગૃતિ રાજેશભાઈ તન્ના-જાનકી", pdfId: "1XYIJy6sFHlYvRYkT9Nj1Bl17RC0VYmZ9", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9974215040" },
    { name: "અનિતા વાસુભાઈ વઘવાણી", pdfId: "1yYMroYRm7-rrmfWRo6lekGuvz_4_rdsP", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8780182030" },
    { name: "પ્રમોદકુમાર મુકુંદચંદ્ર પંડ્યા", pdfId: "1BdyR1zNeNMeOm19ZRpl53RMXq8yLsDD6", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8320583423" },
    { name: "કર્દમ યાજ્ઞિક અમી", pdfId: "1EswUU2GW-aM7puYY-fHh32S0icWEJ81b", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9898599489" },
    { name: "દીપ્તિબેન વ્યાસ રાવલ", pdfId: "1l7zVq_XRU2qKO7XqQsSipOyPUbAA0bei", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7041270451" },
    { name: "ભદ્રા  અલ્પા", pdfId: "1VwkZ4JXpKAWkpT97cVXNJKMbr4eS_I_B", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8879739308" },
    { name: "રોનક મહેશભાઈ બારાઈ", pdfId: "1TkJPds63F_uA4LycM4A1y2CLpDsS-3QA", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9428183709" },
    { name: "પ્રિન્સ એસ પરમાર", pdfId: "1TjvNoFD5Ak3zYLT1_-Cbqw8KqUXaz75Y", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9924584796" },
    { name: "કિશોરકુમાર રતિલાલ ટંડેલ", pdfId: "1mu4C6Utz3l4ZJB90902ipdJII8CeBlTc", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "હિતેશભાઈ  સુરત", pdfId: "1qi8yI2fhXdfYvMiF8h_nk9owRHVuguTK", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9773146282" },
    { name: "તમન્ના અલ્કેશભાઈ આચાર્ય", pdfId: "1kH-mC8fJ82-La8tth3PYFcCyt9VeXiWh", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8200769601" },
    { name: "સોની માયાભાઈ ભાદરકા", pdfId: "1fsXznPLHOq_WrPftlOFDAkHeGQ5SHGqF", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9727918790" },
    { name: "દોશી  શરદ", pdfId: "15e-C9tHcC5JTGMuUXs8Cp--NW3sSQ54h", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9920111071" },
    { name: "ઉમા સરદભાઈ દોશી", pdfId: "1438sgBx6QHWJ1aumjarc-cVz5MlkTy7Z", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9619481804" },
    { name: "ભગવાનજીભાઈ ભાડેસીયા શીતલ", pdfId: "1OGljR6BSctRjYgL4sOUSzmrUYB5-3G7p", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9624743188" },
    { name: "પ્રવિણાબેન વ્યાસ મહેતા", pdfId: "1OlhcosNDUMt0FC5M-sRP43xzq1rmDu0R", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9313464214" },
    { name: "વાસુદેવ સોમાભાઈ પટેલ", pdfId: "148tm4gEucqQvtQC-x9px-i-C183gGz63", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9825671181" },
    { name: "વેના રાજેશભાઈ નારોલા", pdfId: "1t3tx5hWUs4Chy2yJhERQuQVhkm-9X2bC", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "ધીનલ સુરેશભાઈ ગુણવિત", pdfId: "1LKVBabwN6PkYjoTOFLvM-NNMyANBeH-z", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9265556705" },
    { name: "નિતેશ નિહર્ષ પ્રજાપતિ", pdfId: "1tnVSt2gxgx_4c0AIJL5trlQmGJ53PSXe", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9662056547" },
    { name: "કોકિલા એન મિસ્ત્રી", pdfId: "1GbgDBZqePC30x4VGB0Y4PWdY2-xDxUf_", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9825862739" },
    { name: "શ્યામભાઈ મા. દેસાઈ", pdfId: "1U-uYdmuhB_K92CHuWPtZH5wHOiNQaXBQ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "આરસોનપાર  પ્રતિમા", pdfId: "1YFo1hYFFsvW3lnJyjBpAxL1rJltihoVC", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "નિલેશ પીઠડીયા બીના", pdfId: "1OqhpvVLX67fn7CiefCn9PaMayndFrrDd", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7018152881" },
    { name: "નિધિ જયેશભાઈ વ્યાસ", pdfId: "17iq8rpSArkcgXrbf6qADv37DMlSwoBgw", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9687373463" },
    { name: "રોહિણી હિતેશ જોશી", pdfId: "1o9gyH-r0wCiRPD6oe8WeaqZCjdhO0W0t", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9428795296" },
    { name: "અનવરઅલી ઈબ્રાહીમભાઇ વોહરા", pdfId: "1c7eCN3Val-KYwd49gaBbCIdy8RYmtzqH", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9824685014" },
    { name: "વિશ્વા મેહુલકુમાર સોલંકી", pdfId: "1sKcmV3aS4DmFwCGTs91uSY0T8MCetDAe", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "નક્ષ એસ. પટેલ", pdfId: "1AcgzbdY2LPEdUqY_vYlxG0VKEtRHTBuD", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7600881881" },
    { name: "દ્રષ્ટિ ચિંતનકુમાર ગોહિલ", pdfId: "1hwKX8tNXT2BY44Nb_XEJxk5knykKieVy", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "તૃપ્તિ હિતેન્દ્રભાઈ પટેલ", pdfId: "15dzX7PBEGQtTsmJoPNbyPf-HQBcc-Ovb", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "હિતાક્ષી અનિલકુમાર બારડ", pdfId: "11fm9nEYPe1AHgcjmUbyGoomqWsUcsmHU", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "ચારવી આર. ઠાકોર", pdfId: "1yjRg4akGCPXuMJ9JIFJMFBcTnVOYzV5m", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "આદિત્ય જગદીપસિંહ પરમાર", pdfId: "1B81SwonAZwA8AnL0HKNA7xXLw-bkjR4i", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9773467319" },
    { name: "જોયા સમદભાઈ મેમણ", pdfId: "14J-AW6iAsingeYjy--HQJaaQ6QfvgZeT", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7202023177" },
    { name: "જૈનબ રિયાઝભાઈ મેમણ", pdfId: "1xvcym1aUSxh7I7THrFAV9g099RT_us1N", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9737584792" },
    { name: "રિધમ મહેશભાઈ ચાવડા", pdfId: "18X_YRqzwK-CFTnOeXJ6gJBhENXq9b6J4", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7572815777" },
    { name: "હીયા અમીરકુમાર પટેલ", pdfId: "17tcXkpJv-aYlCQA6OzFMibx0Z9XDaKN9", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7861816698" },
    { name: "કોર હરદીપસિંહ ગૌરપ્રીત", pdfId: "11tNG6S07hYblbK8gnNUgZRyhkJ5j93yR", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9429032210" },
    { name: "વર્ષા અંબિકાપ્રસાદ યાદવ", pdfId: "11nOBUneIDGUE578K3HF10kYV3Hmip5ZZ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7874953310" },
    { name: "રૂપેશ સુરભાઈ જહા", pdfId: "1AZGa5M4TTm37fgxnX6Wr4oxNZK9Z5Ips", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9723372637" },
    { name: "પ્રિયાંશી એસ. પરમાર", pdfId: "1Mda9UGPrjv-CGwyy40gRinTzmZ3HJ7cn", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9687100425" },
    { name: "ભવ્યા દર્પણભાઈ પટેલ", pdfId: "15j-WoDIN1VcKhOFqvr2orLAw621fxFkQ", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9737073915" },
    { name: "લીઝાબેન મોંહમદઈરફાન વોહરા", pdfId: "1VA-h7mWgAobKpD6XqqRoGQtQuygSz1D4", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9824685014" },
    { name: "મિહિર હરસુખભાઈ ભલાણી", pdfId: "1NYo65sZdhhHiI0L4ru4x42lb8zFJKly7", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "6354449688" },
    { name: "સેજલ એ પારેખ", pdfId: "1GUnpDSZZueTeqPaN1bLENef_ovaq4cjN", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9924411288" },
    { name: "અવંતિકા વિજયભાઈ સોલંકી", pdfId: "1_R_xHKVHfrOxy1KmzW4K983URDXEXsJ6", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9924288370" },
    { name: "શ્રુતિ કમલેશભાઈ પેથાણી", pdfId: "19pR7JuKCUpkeaI25SojyE7ek_pt3R3Oo", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9998434845" },
    { name: "દીપક ધનજીભાઈ બાંભણિયા", pdfId: "1TyiXzO0lbuqvgpezKIIdcJ0n73xNQ3xt", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9925927817" },
    { name: "ભારતી ર. સોની", pdfId: "17AZrX4C9XcbO7orQsBNIHgmZljjr3Y8e", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9426427968" },
    { name: "પાર્વતીબેન બાબુભાઈ સોંદરવા", pdfId: "1qOS9Q3g08Za25VhFUqpvp1WFOaFkQ6Fs", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9638515073" },
    { name: "સુધાબેન એમ ઓડેદરા", pdfId: "1bjidvwA6KkO1MTYc5CK04g2qZdit6nT-", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "અંજનાબેન પ્રફુલભાઈ વસાવડા", pdfId: "124512jBH7Q4tBl0kUzDWu2AxqNnsVlMB", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7698932750" },
    { name: "સંજના મુકેશભાઈ ગલસાણીયા", pdfId: "1LvxkgHdhYhzlvEdqf91568ZIC52cq7cb", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9537015810" },
    { name: "ગીરીશભાઈ એસ ત્રિવેદી", pdfId: "1qA9QuMUeBCUbcJwOEC2kGWlIsANtTl4f", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9374141981" },
    { name: "હસ્તી ભાવેશ શેલાર", pdfId: "1NdsarPw8zpJPDenDGdC2WkRtYALmeY8q", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "સાહિલ મગનભાઈ મકવાણા", pdfId: "1Pj2jBbxHBd-fXmVTtP51Ap0AOJMgnlGT", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "બંસી પ્રવીણચંદ્ર અધ્યાનું", pdfId: "1yZ6H0CSh7GXEl0WshHdQeRuYhBIJOqr5", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7624053068" },
    { name: "જેનીસ સંજયભાઈ ગેડિયા", pdfId: "1bZFQnC05JKI-wRdhAArOq4mLcVibDZM6", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9106232561" },
    { name: "હેમાલી હરેશભાઈ પટગીર", pdfId: "1IXwWKDz_LqMRDmWROzrpJ8WjSO4Mp0GL", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9313744195" },
    { name: "દયા ટી. કાછડ", pdfId: "1mwsmx-c98TTTuhx80iiNuqnLBXe0APYF", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9023222863" },
    { name: "સ્નેહા સુરેશભાઈ ચૌહાણ", pdfId: "1Txo7aOBDLIP6RsaeRZOxttxsiOgp8Z9L", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "6352751998" },
    { name: "ખુશાલી ધીરુભાઈ કવાડ", pdfId: "1UsznXzH2wCrhbJDeaQPXXqbT4loT9t2i", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9265056768" },
    { name: "આશા લાલજીભાઈ કુકડીયા", pdfId: "1XIF_RyhJfNbUg68LnyyibCU0dLg-S43-", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "નંદની રાજુભાઈ ટાંક", pdfId: "1RBWl1rqieSvKT6aQ6ghq4rq3fvtq4qSG", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9662964530" },
    { name: "તુલસી ભનુભાઈ પરમાર", pdfId: "1Oyb8kQ-GLTXnlXGVNE8jth_GUvknJm_4", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9016055992" },
    { name: "કૃપાલી સી. ટાંક", pdfId: "11FQsp9ZVSk1tY8uHTAazzWqjeNs-oVkM", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9428560461" },
    { name: "આશા ઉકાભાઇ મેવાડા", pdfId: "1iPDi0qCKTAzfiM3QxF692aR1pbfVB0-t", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "6352755938" },
    { name: "દક્ષિતા ભરતભાઈ ગોંડલીયા", pdfId: "1GcRjvktYo_mzCfPptI55cD3Ek8Os6PGL", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9316225857" },
    { name: "પાયલ ચંદ્રેશભાઇ ખખ્ખર", pdfId: "1M2Rslpzx2qQJBXktz1gR18Wy1puK1OnG", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "6359157415" },
    { name: "ચંદ્ર હિંમતલાલ સુરેશ", pdfId: "1i5ZtNEbYLffFL8gId4xZecBoJq-5GaCG", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9377567835" },
    { name: "ધવલ કૌશિકભાઈ પંડ્યા", pdfId: "1gTAoHMke3gNMCywyOMKoMDf0j_Ml99AH", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8320106041" },
    { name: "કેવલ સામતભાઈ ચાંવ", pdfId: "1Fficv-KalASye0gmbPjeJDPSFSDOMCAh", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9081730224" },
    { name: "તસ્વીર દિનેશભાઈ પરમાર", pdfId: "1RhJwZlAWtHotKhG5tMs4O6x2Lo0k2IpX", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9725136352" },
    { name: "વંશ નીતિનભાઈ વિરડીયા", pdfId: "1kuIOKRDmpE8HYVnBRUT2aZk1Pq-KS5CV", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9879890344" },
    { name: "મનેષ ટી. અજનાર", pdfId: "1F2cxLO3vmJrEqBdup0L8Pi2cNBeSMOSc", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9023920478" },
    { name: "શૈલ્વી હિંમતભાઈ ગોધાત", pdfId: "1QDIu6lWQZ4AUvexpBb3D4p3uKqY6I04H", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "વિપુલ એમ. અમલીયાર", pdfId: "1ZL49asF6BVErAKqvqsXyW_sBwsjw3NpY", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9512912007" },
    { name: "ક્રિષ્ના રાજેશભાઈ કિકાણી", pdfId: "1s3yRHBVmavMUs_5q8FVlL3ckq7224iUl", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9925540197" },
    { name: "પ્રેક્ષા ચતુરભાઈ કિકાણી", pdfId: "1Y1QAYFanuSMwe36eLX_eig4-6Nq8pb9V", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9978361796" },
    { name: "ખુશી ભાવેશભાઈ ગોજારીયા", pdfId: "19l7uHkpYgEaYKF1kNpeRAq2NSn-0VRXh", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9978134443" },
    { name: "રણછોડ કીનુભાઈ મોહનીયા", pdfId: "1JF0NtL5tcAUwV5KbEht451op7tBLkbAS", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7861868566" },
    { name: "જાગૃતિ સુરેશભાઈ મેવાડા", pdfId: "13r_0citQMR6nDFYijCrhabYaQmqihq17", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9537095715" },
    { name: "રેખા કીનુભાઈ મોહનીયા", pdfId: "1jGMDBHWH8juzu5AiKwwQzH7_CsR2dQu4", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9023518259" },
    { name: "નેહલ કાળુભાઈ મહિડા", pdfId: "16BeS4BHca3Tdwedw9MgwzJTooy3Bo9vS", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9925445658" },
    { name: "કોમલ એમ. વાળા", pdfId: "1eD-xugB-MomJQZE275T5wSenig4HiKaY", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "7820024216" },
    { name: "ભાવિક એમ. દાફડા", pdfId: "1WUnklEHKyy7BT606g5mA1DM-LhCeCq5u", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "6353189338" },
    { name: "પ્રિયાબેન કિશોરભાઈ કારીયા", pdfId: "1oy3RuiWY9PuQrZznYXSacMB5GjekSkh3", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9408456053" },
    { name: "જયમિનકુમાર જયંતીભાઈ ગોહિલ", pdfId: "1iiIbGdzP58SbrdckrqcropBBgnkwHv6c", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9737600450" },
    { name: "પ્રકાશભાઈ પરબતભાઈ બારેજા", pdfId: "1XG-mH82bqxubT7kKGvxUGEpsgAQROQbP", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9662975063" },
    { name: "નિરંજના સી. જોશી", pdfId: "1fWynQ8aSS2XBTqqZ0wEJRXKIxJEbE_OD", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9820637645" },
    { name: "રાજેન્દ્ર કે. હાથી", pdfId: "12QB2XrUzl4eVi4JGvMmzctYBMJbpIcXM", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9824489517" },
    { name: "ફાલ્ગુની રાકેશભાઈ રાઠોડ", pdfId: "19roHzEji2dPbsk5akRUy6xGfHDjCtAlT", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "No Number" },
    { name: "દિલીપ કે. પટેલ", pdfId: "1WlySvFHBpgKZ2fg8UjZ0qM5VgOAxpDbb", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "8401751946" },
    { name: "વનિતા કે. કોટડીયા", pdfId: "16MpBcnJT0ZggrReAZftcw0AMGODZhlBY", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9428189900" },
    { name: "મનોજકુમાર સેવંતીલાલ ચોખાવાલા", pdfId: "1B_WGieEs9ee-A892F6Boh0WF4yKtONuP", subject: "માતૃભાષા દિવસ નિબંધ સ્પર્ધા", phone: "9409035308" },

    ////////////// dashani shaheb nibandh spardha///////////////////////////
    {
        name: "આસોદરીયા મહેક જયંતીભાઈ", phone: "8141081845",
        pdfId: "1UOnGnbpfOWUatVrfxlsQ4HFzcKJTIQIO", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા પ્રિન્સ નરેશભાઈ", phone: "9712637028",
        pdfId: "15pbLKM_Ni6JSg2m3KbQe79bNjL5CXCTt", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા પ્રિન્સ સુરેશભાઈ", phone: "9978334316",
        pdfId: "1qk46JKSMzQHSiOtvF_lE72Sc5wxwd-fb", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા નેન્સી ચીમનભાઈ", phone: "9712344823",
        pdfId: "1389kQVJ4par85TMAGWGN51OasUCQGIOI", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભાંગરા મિત્તલ દિલીપભાઈ", phone: "9712182418",
        pdfId: "1ActwC8CeoNHyutlj-8BEuky911MgX98G", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા રાજવીર પ્રવીનભાઈ", phone: "9586591528",
        pdfId: "1w-rMzQhs7ZqggAYkuT8nW78Q8vQIcEj1", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોધાણી જીલ કલ્પેશભાઈ",
        hone: "90151509209",
        pdfId: "1IjoAHw_o9szXdxRnZ-1de4nF56la13IB", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મોરવાડિયા અલ્સીફા ઈમરાનભાઈ", phone: "9687229342",
        pdfId: "1B2JBcEKY892rMWIJQvHR0kn4HhdlTdq_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા દીપ લાલજીભાઈ", phone: "9624692615",
        pdfId: "1hMBXjQg1al2L8shtRVYtfZTZlYkSeN7M", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "આંકોલીયા અરોહી મનુભાઈ", phone: "9998072650",
        pdfId: "1zaKrpmDsbZWqW6Q2BTNFxaY_QCbjXVn8", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કનાળા ધ્રુવીશા મહેશભાઈ", phone: "9723995452",
        pdfId: "1nFwsjpSfvG3ncMCER4L9dr4y8E7E1uel", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કનાળા જાનવી લુણસીભાઈ", phone: "9328055329",
        pdfId: "1q_TeV8Vat6vsifJN9JV4szP43HHCamqL", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "યાદવ અનન્યા પ્રમોદભાઈ", phone: "7046192765",
        pdfId: "115kwSGlFNXPzYaEv3fT5oiG33w0OnlBW", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બેલીમ અલવિના મોહસીનભાઈ", phone: "9978921341",
        pdfId: "1boRYNGF10wg_ivpxuE8l405nMjdzS7Ju", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "યાદવ અક્ષીતા રામતીર્થ", phone: "6354581007",
        pdfId: "16MhjVWee5UNVNimhbO0KI8b27f6aVAwt", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગુર્જર ધ્રુવ આર.", phone: "9925690985",
        pdfId: "1Q_eLSMDhW3Hu4Yj4CntjHMr3V_g14qrp", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પટેલ પ્રીત અમિતભાઈ", phone: "6353470565",
        pdfId: "1bAJeMNbYkZ6qzsMaFVOHGAyTqXG3-AMH", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બાંભણિયા ધાર્મિક ડી.", phone: "7046471118",
        pdfId: "1DYPO-Io2OiFSjALN2Rof8RiWFaERFsHN", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોષી જય પ્રણવભાઈ", phone: "9724786118",
        pdfId: "1VHFFBPNZoEith4Z8SLuEmvHkWwmluEca", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બગડા વૃંદા તારકભાઈ", phone: "9974650663",
        pdfId: "1GcrnsLQzjFZuukSHP7AM0sGWxEzrP-V_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભાલીયા કુંજલ પ્રવીણભાઈ", phone: "9898606447",
        pdfId: "1RqBRc6TTdOoDGhhcjqbwiRsJSA4Ad-ZC", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શોલડીયા જેની સંજયભાઈ", phone: "9978584808",
        pdfId: "1xmafLxATLVP-KEBrlViTkLA9QD7_68BI", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગજેરા ઓમ ગીરીશભાઈ", phone: "9979225114",
        pdfId: "1ExNj-zddd2nZYJ8IUTae4IszMXB-Vlf_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોષી દેવમ એમ.", phone: "9979225114",
        pdfId: "1jKlWUue6y2Ik49Otl8AOW0uLp3phSbYs", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કવાડ ખુશાલી ધીરુભાઈ", phone: "9265056768",
        pdfId: "1esbfkKgLXg23xM7eEpLW9FpV1za0Bw32", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ટાંક કુપાલી સી.", phone: "9428560461",
        pdfId: "18vp_ckYCIoIWrL1vPN1IVacJIroe45Wa", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ખખ્ખર પાયલ ચંદ્રેશભાઇ", phone: "6359157415",
        pdfId: "10q330V-WX0K0Yf6PEYJ3Z_2Nxep_-yNb", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોહિલ જાનવી મહેશભાઈ", phone: "8799405690",
        pdfId: "1k9Qm9GlxGeHvzAJMfXuSqSTu2jCRPgly", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "માધવ પૃથ્વી કેતનભાઇ", phone: "9898753574",
        pdfId: "1Pk5TuYVRvetcEemzOpXRMCu-64QVn0Xn", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "અજાણી વિઘ્નેશ એસ.", phone: "9879820610",
        pdfId: "1gUxd1QooOi5znChMQ3JewHh4Ehy6Rjk6", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ ટીના આર.", phone: "7041540940",
        pdfId: "1fC881DXXYCzqnI9MLZUQ1-4SIlWnylnL", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોષી ઉર્વશી ઉદયભાઇ", phone: "9409746676",
        pdfId: "1P6lrtwJFx3sODmzJ_HPrpZbV9dyfkfx9", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા રોહિત ઘનશ્યામભાઈ", phone: "7567512690",
        pdfId: "1iZGcIhKtjNnB4O4mfIgB0oniiJRDmDfT", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોધાણી નેહા અશોકભાઈ", phone: "9909436097",
        pdfId: "1Yk1D3idI0A0_AjnutZKhcS6hQz3fzslx", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગાજીપરા આયુષી એસ.", phone: "7069481708",
        pdfId: "1PQ669jBvra3sEDaHGWsjT9T0WOiD3HYB", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા નિધિ વિનોદભાઈ", phone: "9879543217",
        pdfId: "1sjwEnaW0kZbUhM5kw4TVYjMjFOAB4mOd", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સાંગાણી દર્શન સંજયભાઈ", phone: "9428944773",
        pdfId: "1lPNk10Y4TjYCQ3VchPYWC8L8rixUh5PD", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા દ્રષ્ટી મુકેશભાઈ", phone: "8160364468",
        pdfId: "1XbwR39FoBH6XHS0TLzB3wpAY9F1htlWz", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "અધ્વર્યું ધ્રુવી વિરેન્દ્રભાઈ", phone: "9510743633",
        pdfId: "1_ZxX87-pxbiRnIR6BFioTczqEDpKLyXK", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચાવડા જેનીલ ભરતભાઈ", phone: "8160119292",
        pdfId: "1P-q8918j8fVttNU6-rDcGeIk2VCh7BbD", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "આમલ ઉર્વી ભરતભાઈ", phone: "9737071637",
        pdfId: "1GS6WU8WHT1nweEz3G8jg4_voXITxfQ41", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શેલાર હસ્તી ભાવેશભાઈ", phone: "9537311762",
        pdfId: "1OmUReILAK0p4OD2J-pru3fjmOb5vOp4X", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કુકડીયા આશા લાલજીભાઈ", phone: "9106266750",
        pdfId: "10dpQ5oRdAZGHX-ffz-Gx5M62lpkt1wA9", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પટગીર હેમાલી હરેશભાઈ", phone: "9313744195",
        pdfId: "1vceO55xOuRhizLDOu4OT59x2ulgOeMJO", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ સ્નેહા સુરેશભાઈ", phone: "6352751998",
        pdfId: "10cjpkIeWkyucoXTlh0s6FV2VASF51cRQ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કાથડ દયા ટીનાભાઇ", phone: "9023222863",
        pdfId: "13cDA7kWbjuGZrOB4V6E76mbke4fIO3nn", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ નિરાલી વિપુલભાઈ", phone: "6351447292",
        pdfId: "1aFE08HzXbiUiMg8Pv32ef16zGmuT_9qU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ટાંક નંદની રાજુભાઈ", phone: "9662964530",
        pdfId: "1f66Gf8JwBywtymF35YxjLR4hiUtoCWnG", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શેલાર ક્રિશા પરેશભાઈ", phone: "7405601718",
        pdfId: "1B0wEwXqRB03hlSQEAIOFQlqVUhePLQwP", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "નાના યશ્વી જયેશભાઈ", phone: "7041251501",
        pdfId: "1q8HbCB_s0OytFjCDsPwfndbFbFH3Hdyt", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રફાઈ સાહીસ્તા રજાકભાઈ", phone: "8849902460",
        pdfId: "1c0Ka3bIkU8LKbC_YJFTxo_t8cL0Zt9GJ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ વૈષ્ણવી ધીરુભાઈ", phone: "9428712331",
        pdfId: "1Sf5XNs7qJRrveDI_yOYcPHiaXYdbSTct", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભુવા હસ્તી હિતેશભાઈ", phone: "9123526118",
        pdfId: "1OZkGpbtc6J3ExMa4pyvqTJFHN_ju2qPL", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ ધ્રુવીકા બાવચંદભાઈ", phone: "9586638431",
        pdfId: "1GF3r_T8Icv0KEYiV9X6bOH-GKYODwA4M", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ કિંજલ જેસરભાઇ", phone: "8128409221",
        pdfId: "1UnwRxTfwl_29AbOiyJzPWufZXAzFlVMb", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ સેજલ નાનજીભાઈ", phone: "6351327994",
        pdfId: "1Im8AuRHKfltGfY8FT6kqH3oenoZIIGXJ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શિયાળ શ્રદ્ધા અર્જનભાઈ", phone: "7984007999",
        pdfId: "1T4jPPIaONTOTDz-Ps0npr2HDC1SZlVp_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ સંયોગીતા બીજલભાઇ", phone: "9574884295",
        pdfId: "18HPvI6axPX8s__5-ZpZ9vHDYkdEYx_ub", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શિયાળ અર્ચના લક્ષ્મણભાઈ", phone: "9925367111",
        pdfId: "1Mhyt-YpUdK_VO7UF_NnZaWFktJm_mxCG", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ ઉર્મિલા રમેશભાઈ", phone: "8849943523",
        pdfId: "1v_dpNj-FQMSlF7L3s21qdQlX874VeHHQ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શિયાળ અર્પિતા વજુભાઈ", phone: "9328206504",
        pdfId: "1Mv81XBHW3iVUrSHX0ylVZpQePr22lB1o", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાજવીર સિંહ રાવતભાઇ પરમાર", phone: "9979741441",
        pdfId: "197QXC_Yo011nAGJV2MT0e1kh_uCNTGIH", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ડોબરીયા ગ્રીવા રસિકભાઈ", phone: "9974657703",
        pdfId: "1HyzB0Ot-YOB9U0ks4Ln51da7nWttIcuN", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સિદ્ધાર્થ ચૌહાણ", phone: "9512571895",
        pdfId: "10F3a6DUo7-OVK2nPPolZwaqh_8duobY3", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વેકરીયા વિશ્વમ પિયુષ", phone: "9714214446",
        pdfId: "10lJDk-oygvLvevm9WnmENAskw4KSscnL", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વિજય અશોકભાઈ", phone: "7613405644",
        pdfId: "1QE8u_83hus-p-PmynFI9_51UdrdDne09", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ હિત રમેશકુમાર", phone: "7984764169",
        pdfId: "1Xbjf0Ufk_R9lRDNf_UR-XuPfa7y0kyxx", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "તલસાણીયા ગૌરવ ચેતનભાઇ", phone: "9023377103",
        pdfId: "1HlaVwTlNrrZ8tUowiEJOwiSmwkUpkWE1", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દેસાઈ સ્મિત ચતુરભાઈ", phone: "7567734245",
        pdfId: "1LAZmE-8AbxVuSdtkahp1AVI9aKTUQmjA", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોસાઈ સ્નેહા હરદેવ ગીરી", phone: "9824994729",
        pdfId: "1jDBbz03Ie5V9A8A_BfS50fO5OoGYdcrd", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "નકુમ ભાવિકા કનુભાઈ", phone: "8238571523",
        pdfId: "1kOCRNubvfSMRu594Pwf_cg_972qe4wzz", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પોપટ અક્ષીતા રાણીગભાઈ", phone: "8849107013",
        pdfId: "1nxC-tesI4Mu4Pa-1AT_oBmNV0QGSPpbf", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભુવા કૃપા જીતુભાઈ", phone: "7990047485",
        pdfId: "1CGUMjqF_E0DbntkY2bX5y72GfGFQohVu", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભુરીયા બીપીન રાજુભાઈ", phone: "7990047485",
        pdfId: "1cnOHx2TOvfsp3duFOBGzQwuC5C2Hdb4H", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શાહ આલિયા હનીફભાઈ", phone: "7990047485",
        pdfId: "1mDM8gvaGvp0cRGfHTHbXbKfOc7wDyaVi", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર પ્રિયંકા ભનુભાઈ", phone: "9537159744",
        pdfId: "1v8TZUR7sOenJ6TIj7EDUHw8wEQ2Waq2I", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ઝિંઝુવાડીયા વિવેક મુકેશભાઈ", phone: "8799543130",
        pdfId: "1ean1MSysu66rD-RfAGa7qXbKm6X-qI2c", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બેચરા આરજુ નીતિનભાઈ", phone: "8980224433",
        pdfId: "15LW5ItVWdVDKTbOy-KV6BxRNS86iYMIU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોરઠીયા વિદ્યા રમેશભાઈ", phone: "8980224433",
        pdfId: "1dioYUVTYHTIqha_cZZagcrpLtPlTAH3U", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઘેલા એંજલ", phone: "8980224433",
        pdfId: "1xSX3c0NWwmzw6DAqggKFxBUKCzV7rT6t", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઢેર હેમાંશી વિજયભાઈ", phone: "8980224433",
        pdfId: "1wUz_q6U7Zru4KGZnq3wtMrZ4Za5zOSKj", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મહેતા દેવાંશી પરેશભાઈ", phone: "8980224433",
        pdfId: "1HCF6EQll6hkZrCsy5h-0Yx2FauzdIKYJ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સાંચેલા કૃપા જીતેન્દ્રભાઈ", phone: "8980224433",
        pdfId: "1pb5-RwslNEmIe5fgrViF8QXEsUA3NhB_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોગાણી હારવી નિલેશભાઈ", phone: "8980224433",
        pdfId: "1k5eQ8TsOxIRL5SLeLvig5iw2A6O4FOdV", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "આહુજા પૃષ્ટિ રોશન કુમાર", phone: "8980224433",
        pdfId: "14Hv2wFSeJSEAI9RP8iCS81hwB7LeoLP3", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ટાંક ખ્યાતિ નરેન્દ્રભાઈ", phone: "8980224433",
        pdfId: "1k6R2TA3Icqav8KTKvzs0GVG3aaRikVR5", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ શ્રેયા ચીમનભાઈ", phone: "6354663020",
        pdfId: "1ry-ZXZ2dd6lYfhaZMpQh8mkZylNSgONs", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દેવમુરારી દેવ વ્રત", phone: "9427282923",
        pdfId: "1jfvccyu_CV9OdsArgT-bq43VB_VnniHs", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા હરદીપ કે", phone: "9998322644",
        pdfId: "1TBgF7oF6Lvtmk1WLZycfDfUzhXUBR_wN", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા આયુષ", phone: "9099311176",
        pdfId: "1b60iQ2qBdwGY4LwtD2-a9NvvArPyoCkd", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શેખ વિશ્વા સમીરભાઈ", phone: "9913396271",
        pdfId: "1p5lqCSZ0Q8z8Xt0EdpWAiYpKHJjDYqMf", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પઠાણ જીયા", phone: "9924081781",
        pdfId: "12MEg020Jmufv9UMv68fX2MygSjZcDHMC", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "હૈદરા હર્ષિલ હુસેનભાઇ", phone: "9574487761",
        pdfId: "1mrrdlj2NoxY0WO4cwyvbVzjebXlv92We", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગુણા રાહી કિશોરભાઈ", phone: "9909657343",
        pdfId: "1DqpIGYAMmwlznUR7m4QHDAKeQcWlMiqX", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રુદ્ર પિયુષભાઈ ગુના", phone: "9773188227",
        pdfId: "1NQH-ytQtMSAhzpb_OjgU0D0emHG2tuni", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વસાણી ઓમ ઘનશ્યામભાઈ", phone: "9925010052",
        pdfId: "1LfFoa7Mxk-1U5S0txpkzyYe555mQQPC9", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "તક્ષ જયેશભાઈ વસાણી", phone: "9909166575",
        pdfId: "1NRnI4ZA6NhGE6AuujOdhhmvMJ9zy3tsT", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર વંશ શંકરભાઈ", phone: "9723711286",
        pdfId: "1RvDboZyO75tIXHK6d7qG4ulhwEvySjMP", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દિશા જગદીશભાઈ ખીમસુરીયા", phone: "9723222805",
        pdfId: "1bvlVnTTgIcuKN4tzm6RLT1IXEv272hbk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ઉગો રાઠોડ", phone: "9016684484",
        pdfId: "1woLTQpg3p23fn3_LZjgSjjXM3PnO8Zse", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સતાસિયા વિલાસબેન હરજીભાઈ", phone: "8980377454",
        pdfId: "1o4hE2PWaldu-pKJqqBqSYJhVik8sxkCu", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સતાસિયા વ્રજ વિવેકભાઈ", phone: "9723839069",
        pdfId: "1nqn8rX9K0A2hADpkYe5UO2vghN6b9cUw", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જલ ભાવેશકુમાર છભાયા", phone: "7436082003",
        pdfId: "1XsvWAJ6XDkA4Z5eVSz-8af6gJuyhoQrl", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વ્યાસ કશ્યપ નિલેશકુમાર", phone: "9724825798",
        pdfId: "1P5xksS5QJuYxtG-SUOK3PjpzIEbKnhpn", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પલક મહેશભાઈ ધકાણ", phone: "7486872675",
        pdfId: "1O2UbmQ_FYRNHT_gErOtYt6MEO5QnbJi0", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મારું હિતાથી ભાવેશભાઈ", phone: "9723080111",
        pdfId: "1NXBa7T5vq7ct0cmMxDM5Vubri-x4hWci", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોંડલીયા પ્રિન્સી અશ્વિનભાઈ", phone: "9725492367",
        pdfId: "1YV5xcdwB8SBZixH5J8eTQEYNlq0K0-Qt", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "થોરાદ પ્રિયાંશી શિવરામભાઈ", phone: "9728970504",
        pdfId: "1a7SHiNA2HGMOMsnrUZkHUKxo3TAE3Eh-", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઘેલા રીવા ઘનશ્યામભાઈ", phone: "9978100287",
        pdfId: "1s3A4C7uGdowlvngT9UtCKAz3cgd3bOY-", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા ધર્માદિત્ય વનરાજભાઈ", phone: "9979640906",
        pdfId: "1k-MWcu4zIDXrPNoDr1XevCeGfPC2buxp", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વડગામા યુગ વિજયભાઈ", phone: "8140684282",
        pdfId: "19hg5Il1PQrzTkam-gym6_HNYJzXonOLh", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ડાભી આનંદી હિતેશભાઈ", phone: "9722920233",
        pdfId: "15hRMMm15ylCPHDjOVx7xlUd8jIfgaz74", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ઉનાગર યશ્વી ભરતભાઈ", phone: "9879036917",
        pdfId: "16TLcN1XZ3h-hQIeMtLaV7lJyaBVWZM3d", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વણપરિયા સ્તુતિ રોહિતકુમાર", phone: "9924975227",
        pdfId: "1jV9933its2gUn5Nv-WzI4PbkdbTUiDbZ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વડગામા સાક્ષી રાજેશભાઈ", phone: "9979907234",
        pdfId: "14EwXv6upUsyfTxFx8WkRfizvj60BsiJN", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરડવા વિરેન લાલજીભાઈ", phone: "9426964020",
        pdfId: "1co4FTP6_TBGYWTlUdrhMEk8nwPqVyHSh", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા નીલદીપ જયદીપભાઇ", phone: "9998957397",
        pdfId: "1DFXasUY8TLz58VcJix6TAm4oXnzYOBi4", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોષી દેવાંગી અલ્પેશભાઇ", phone: "9913640951",
        pdfId: "1ZNOPYg7dLXz1GUj_RZPny3MDWYbBPGz4", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મહેતા વિશ્વા પરેશભાઈ", phone: "9924555130",
        pdfId: "1CpWMZHtjdZi8OGRnsS8-41jlSxtFCBOE", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ આર્યા નરેન્દ્રભાઈ", phone: "9601381844",
        pdfId: "1uUDKvxlDgrycE7_GVNHofJzR39S_xEaz", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ખટારીયા શ્રેયા વિક્રમભાઈ", phone: "9924174564",
        pdfId: "1WVOZUkmTfN-s1Njr2XO1Xvs7fXaamP38", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સલખાણા શીતલ દીપકભાઈ", phone: "9712186090",
        pdfId: "12_4GkFRhUmLN4mBzMnjmajUDPYyihxPt", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પઠાણ આફરીન અયુબખાન", phone: "9712973033",
        pdfId: "1ZrvBcAYrUnUkG9kLrUromz2AT67ElvKA", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોહેલ મીરાં પરેશભાઈ", phone: "7623096433",
        pdfId: "1K2rx-s_lUs7DY5Z63ElYqizjF7v45ZWl", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મેહરીયા સૃષ્ટિ ભરતભાઈ", phone: "9924747053",
        pdfId: "1cTo6fGx6z8VGT3fGXMtBs8D54sQaAk-V", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોંડલીયા ક્રિષા અશ્વિનભાઈ", phone: "9725492367",
        pdfId: "1MRAbe8vERwTs560Q2ujgCC5INQZfY_aZ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોજીત્રા આસ્થા રૂપેશભાઈ", phone: "9429688368",
        pdfId: "14WCQ9jDAwHCZVUUvYrNMouiCqa4gg-38", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બુહા સ્મિત પરેશભાઈ", phone: "8238465187",
        pdfId: "1-2EAXzeQiyouTaINoRWRrq0AqP94j2aj", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઘેલા રોનક ભાવેશભાઈ", phone: "8980776089",
        pdfId: "1jxt_ZbdTQvJYXNXDBEwXCBxQpoyeEfgT", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોહિલ પીનલ દેવેન્દ્રભાઈ", phone: "9723113493",
        pdfId: "1ZNVL1PbNebheO7tBzwDRlBn-zZeGXYg1", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મોરવાડિયા પૂર્વી ભુપતભાઈ", phone: "9054631784",
        pdfId: "1N8VVwoUztwANqflYtCoDYGfVeGxDLRFJ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ સ્મિત દીપકભાઈ", phone: "9601506955",
        pdfId: "1l6fKWJGTAdmRmhhPKPLQcdjKLhcRSZvi", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પાનેલિયા મિત હરેશભાઈ", phone: "9924692214",
        pdfId: "15VzfzlC3EjoUkC1baJWJ3j28Au5KLuNl", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વિશ્વ એસ.શેલડીયા", phone: "7698476658",
        pdfId: "1cOnGZDOuqOt23Db3Ot7YZhu-uvqZ2eYi", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
  
    {
        name: "સોલંકી ભૂમિષા હરેશભાઈ", phone: "6356074029",
        pdfId: "1hIKhO_VSGdCA9Q16u8PJfpXOhQ9vhW_F", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોલંકી વિશાલ રતિલાલ", phone: "8758240382",
        pdfId: "1zWS5U9Yie6kOevqsoXqWbooriC_orH8H", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મેવાડા પૂરી સુરેશભાઈ", phone: "9537095715",
        pdfId: "1sHRKNRNa03nb08K8Kg9sW_9mVszn4lDP", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઘેલા અંજલી રાજેશભાઈ", phone: "8758240396",
        pdfId: "1U5nRmqBPSCRmUXeAFphRiPVBuv5YLHYE", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ હર્ષ હસમુખભાઈ", phone: "9904384635",
        pdfId: "17ZTPBB0m1suhwVf_aQ5bh-1aZB7gTXjz", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રામાણી માન્યતા મહેન્દ્રભાઈ", phone: "9328325502",
        pdfId: "1nxZVyA_Z_gGUYY7De9x5q0H7CqO_9Zkl", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પડસાળીયા જલ્પા", phone: "8200017288",
        pdfId: "1hes7v7HXFPeDZtriDL8kGfgpXhQkWi8w", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોલંકી કૃપાલી રમેશભાઈ", phone: "9427112043",
        pdfId: "1b7wxRghtIrLicMQRNw3KGfwPEgCpM5-n", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શેલાર અંજલી કિશોરભાઈ", phone: "9662192912",
        pdfId: "1sK67SWJ0EmQ2L8gYefr7HelAUhAxOR_M", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પામભર ક્રિશા જગદીશભાઈ", phone: "7043587019",
        pdfId: "1vEKtez0V4XBqpmb7G7hZ24HrHgef4Kf9", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોગીરિયા જીગ્નેશ કુમાર", phone: "9427228213",
        pdfId: "1Hch7iLMsxRuvjavgrNqYcMsoGm_rVyO0", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દોમડીયા મિત્તલ રમેશભાઈ", phone: "6352276072",
        pdfId: "1VNvc7FyKqWTInNri8nR3xnT_ek19SdXo", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મારું મૌલિક ખીમજીભાઈ", phone: "9924457342",
        pdfId: "168NsQ3v0G64FICo3Q9LttGunJ2xzJg_8", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ઓમ હરેશભાઈ દેસરાણી", phone: "9377217711",
        pdfId: "1LdVvq3N-JJqUG1ruBZpuAyssnFdZ8yFk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જય હરેશભાઈ દેસરાણી", phone: "9067914191",
        pdfId: "1gBAuAG4rOHSxOYFvZB6bwyMAoDsJqjOQ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગીડા સજનાબેન એચ", phone: "8320520255",
        pdfId: "1M307EojgDGO3IMy14KNUbBvTKjxmY5zC", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દેસાઈ જેલિક્ષ વિપુલભાઈ", phone: "9825553077",
        pdfId: "1pIHzlQ4QjFjQPPDt5i2DqiFRl-0lkVKD", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દેસાઈ નેન્સી એન", phone: "6353725500",
        pdfId: "1_abtyIQYBF_6yUc29mqfp98-JYbvg9HB", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દેસાઈ ક્રીશ મનુભાઈ", phone: "6352633012",
        pdfId: "1B8J8EQa2KEpDWJikq4dKf5Eam1BWa0Wg", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દવે જય આર", phone: "6359975969",
        pdfId: "1OXOnlA5WqpLqR2dyOsixfbh0pXl_ptPV", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બારૈયા દિપક જાદવભાઈ", phone: "9313130236",
        pdfId: "12hw8kBR-L7TdsX1ZdYUepAtrtf6oEwri", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગુજરીયા સહદેવ સુખદેવભાઈ", phone: "7359982567",
        pdfId: "1wB4TkTwtJnbH4r8r30nZPhV6i1aaH_Hg", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શિયાળ હિરલ શૈલેષભાઈ", phone: "9327902254",
        pdfId: "1GC0lDWvFHyytTyQ3G3yr8anFY8SzXuo3", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ધંધુવા ભૂમિકા વિષ્ણુભાઈ", phone: "6354918910",
        pdfId: "1c2klPR237qIsQis9Oro6lqR0AyeflBIJ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બારૈયા છાયા ગીગાભાઈ", phone: "9510786667",
        pdfId: "1GYINRfWE6yreMaCEiWCRti_t6sf7tM07", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ સહદેવ ગોકુળભાઈ", phone: "9081338893",
        pdfId: "1mVkrTYahdnG9ApmFE5MzfvE8kit_uptw", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગુજરીયા દશરથ ઠાકોરભાઈ", phone: "6352379168",
        pdfId: "14xNzXCBidqq22uoE2Jc0qB0Whzko9Jyr", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગુજરીયા વિજય નારણભાઈ", phone: "8200308468",
        pdfId: "1TKIwLY9xb1ADtokZH5lePt6smtnAf88E", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પાટણવાડીયા નીતિ લાલજીભાઈ", phone: "6354118274",
        pdfId: "158TEale_cv7rjMGYvKuofG3qRek7TSOp", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પાથર પલક મનીષભાઈ", phone: "9624466673",
        pdfId: "1kbwJxW7NJowa6pps547Up5ycA1pLn9h8", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચાવડા વૈશાલી અશ્વિનભાઈ", phone: "9586455363",
        pdfId: "1yD6WOI5VdhW39AZOkhdv0lXl2vGuxyEs", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચાવડા સ્મૃતિ વિજયભાઈ", phone: "9727290400",
        pdfId: "17H0iYAd9o36S---Vn8NVo8dXIscG9Jeh", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર તસવીર દિનેશભાઈ", phone: "9725136352",
        pdfId: "1uGeg5adWO_esM1mU8ecyhBDRyyIm2lhT", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કાલવા અક્ષા શાહિદભાઈ", phone: "9106285566",
        pdfId: "Not Found", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર ઈશા", phone: "8141301747",
        pdfId: "1b5_RRbBN6-8TvSTG9_mE127mxwM8SQ2G", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દાફડા પાયલબેન એચ", phone: "9879118794",
        pdfId: "1yxEe4dfqJrwR2kxfiDg9MdmmlCzVEMdr", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગજેરા દ્રષ્ટિ પ્રકાશભાઈ", phone: "9427742271",
        pdfId: "1Qr-tNwcknV3IaurSyH6PLwk0VWxGZuMo", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ખાવાની કાશ્મી દિનેશભાઈ", phone: "9427742271",
        pdfId: "1NcPdnmv3IseuMaBHMw4hdaUyMX2gSpit", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર દિપ્તી દિનેશભાઈ", phone: "9727742271",
        pdfId: "1nM1aSQcIpAU9a92PX34VfEnEOxruWcEQ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પટેલ જયવીર દેવેન્દ્રકુમાર", phone: "9978445311",
        pdfId: "1JpdOsPoSOGRuIlqCbek5FsmkAxeiVpg6", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કારિયા દીયા જયેશભાઈ", phone: "7383642791",
        pdfId: "1-N8Nlp-iAoYWxb2_cLeXz7yD_bP3sNz_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પોપટ દર્શી ધર્મેન્દ્રભાઈ", phone: "9924552304",
        pdfId: "1JkdIgS6aYy3C4oqK7lzGDVSmej2IUnj-", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દાફડા જાનવી જયંતીભાઈ", phone: "9375757561",
        pdfId: "1obFjHkM5t1ixPSteIJNde1cmKgLztcjT", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વ્યાસ રુચાબેન બીપીનભાઈ", phone: "9429688675",
        pdfId: "1NrA09rpG3cZkAcZvd8ztN-re8e_q9jia", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વનરા વૈશાલી રાજેશભાઈ", phone: "8128064027",
        pdfId: "1476Pj5bn5nSYK6-37dC4aICgY4cCcqUC", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી હિમાંશુલેખાબેન ડાભી", phone: "8999599997",
        pdfId: "1gLIlEyP8rqyBgH0_DUXyPs7fJQkgCtCW", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કાચેલા હર્ષદ સંજયભાઈ", phone: "9327580506",
        pdfId: "1CtvpdureUFLKVxVneybWk46cGS1JFg2w", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દશા રાજેશભાઈ પરમાર", phone: "9737122359",
        pdfId: "1eeQQi2A_dqX7lFuX3G1CTEublC_yD3D_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સાથળિયા આશા મુકેશભાઈ", phone: "8980377457",
        pdfId: "1JR_8g0RlIotsL-on92mGzfGYfMQ-cc0V", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પીપળવા મમતા અશોકભાઈ", phone: "8980377454",
        pdfId: "1MJHY-IYejPCGnSpLxROY0RS-RYugkUls", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રુતિ વલકુભાઈ કાળીયા", phone: "6352889200",
        pdfId: "1L_pDXr9csnpz7Z61B85SUIoOxifQ3G1S", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા તમન્ના હરેશભાઈ", phone: "9265504345",
        pdfId: "1Ap0d86plwbtxX1YFLSU1meDtaGWXk9V3", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ધર્મરાજ બાદુરભાઈ બસીયા", phone: "9157250916",
        pdfId: "1b5y0cRfxyjtYS15aX72BgxFx7D0M4Ug7", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "હાડગડા જાનકી", phone: "9721034601",
        pdfId: "1bGe6KnpB9HH7kr2iG5ON70I1mNLxKXcY", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર નિધિ અરવિંદભાઈ", phone: "7573052469",
        pdfId: "1p6i0vzH9gMDsdy-wmdY_e-E_UqtXL5LP", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કાઠીયા જયપાલ હરેશભાઈ", phone: "9265336166",
        pdfId: "1jWSVeMEGVKPd977fpUT3sk8rKTXYswmo", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભાડોરીયા મેઘરાજ હરદેવસિંહ", phone: "9898681540",
        pdfId: "1qJStmg1MUvK3kHgoPedv332iMhgApU8o", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોલંકી આરતી નરેશભાઈ", phone: "9723435934",
        pdfId: "11SZ7mped805xdwF8X2p9AhAHRVEm8c69", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર ગૌતમ પરસોત્તમભાઈ", phone: "9998128806",
        pdfId: "1RW6GrqXey3eprJsno3Kd_0aHE3fsmD_k", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ જમીન પવિત્રભાઈ", phone: "9998909741",
        pdfId: "1gKL5EoH7zPu0BDhThulg0mg4k2j7uOoA", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા સુમિત અશ્વિનભાઈ", phone: "9998797801",
        pdfId: "17Z_fuoDeO1dn4dVZIBpLsmjcEXN2BfX9", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ તુષાર ભોળાભાઈ", phone: "9662641177",
        pdfId: "1m0ccpqw5JrQ2qDiIyfS3HMY0U9x_aLcu", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર ગૌરાંગ જીતેન્દ્રભાઈ", phone: "9428620930",
        pdfId: "19sj-aJ5Gh8NkbjTh9cdxn2CUE_NCikBI", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઘેલા પ્રિયાંશુ અશ્વિનભાઈ", phone: "9109616166",
        pdfId: "1GCNtruX1MYt_Hd2hVGQr7y7w-vLoy7gK", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભલિયા મનોજ અરવિંદભાઈ", phone: "9714316567",
        pdfId: "1mLbhbi6T5nUE9zA1ApVKQfotRZzro0uZ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોષી શિવ મેહુલભાઈ", phone: "9998172952",
        pdfId: "1Lj8hIGcA6z19bVG0ik2QnrAzb6xiRk05", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાજ્યગુરુ ઋત્વિક પરેશભાઈ", phone: "9157591520",
        pdfId: "1YvmZJN1k8b2bV-E4M2bG4Zaokg5cqmyQ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બારૈયા અલ્પાબેન શંભુભાઈ", phone: "9687898102",
        pdfId: "1v1y2dvHVrXBXRnfzJDZBKisoFgB_eoXA", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પ્રિયા કિશોરભાઈ કારીયા", phone: "9408456053",
        pdfId: "1jua1OJO5HlJiatB71-AXaugDPJWZxMnB", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ શ્રદ્ધા નીતિનભાઈ", phone: "9574402658",
        pdfId: "130bn_Fi0Pwx_8T9zXm8KiANVt48Qv41Z", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "હંડીયા પુનમ સુરેશભાઈ", phone: "9979970350",
        pdfId: "1IPD38u5Z32jjBOlCbTg0rkOw6mjKQMV1", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ઠુંબર ભક્તિ જીજ્ઞેશભાઈ", phone: "9327735525",
        pdfId: "1o-bkx7G8WFr6qypblj44tofNv1a7bfST", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પાટડીયા શીતલ ગીરીશભાઈ", phone: "9638138014",
        pdfId: "1lhtSxIZvlpWTQ7LCVhICATScaNhF02zR", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ નંદની પી.", phone: "9924557031",
        pdfId: "12SV_IJ_zaHLHdNyT1NcOKaZfuHn5tTYP", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ અભય વિરલભાઈ", phone: "9719316978",
        pdfId: "1NGKtwVJoGwFwddY9aYCZ-q2ZB20G4lO5", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ઠુંમર દર્શન ભિખાભાઈ", phone: "9099683544",
        pdfId: "1weLh6v8Ec-DiQHyEd_Qd8RYzu5RoePaH", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દેવાણી યશ દિલીપભાઈ", phone: "9913354736",
        pdfId: "1Vq0IT3JIo_jmdi5xXn41K1bTQS4edR7B", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કેવલ પ્રવિણભાઈ બોઘાણી", phone: "9426111151",
        pdfId: "1kShBLdB3DEPm4RA7ezwR0hKNmIbroljg", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ઝાલા ધ્રુવ ડી", phone: "6354282483",
        pdfId: "1zstr6AxYmfRl7FDqrCWzJSj6Ruxayej4", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વઘાસિયા કાવ્ય મેહુલભાઈ", phone: "9737216470",
        pdfId: "14j8yBIKqL0zMG6yekCJETcURNJv0eLFn", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દક્ષીલ કે કથીરિયા", phone: "9537630316",
        pdfId: "1zBA4AMLsn-MZG9hqPCAY6T2KsMm7F_z_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર નયના અશ્વિનભાઈ", phone: "6351101355",
        pdfId: "1uHiQ6Kg2X4By68o1iYeyRjXpN5nrWTKj", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કિકટ એકતા રાણીગભાઈ", phone: "9023776391",
        pdfId: "1KC22dyaXtxChKnXwT7wQtOoMQ6m1spGI", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પીપળીયા દક્ષ કિશોરભાઈ", phone: "6352940543",
        pdfId: "1IV4Pbnp-YWFTVOhJFx_EQ-K0HEcYEM70", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વેલારી હર્ષિતા રાજુભાઈ", phone: "9714245851",
        pdfId: "1YwBRJ0Dbeen5Ztmb_Hd2Us9lZgEBp1MU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોલંકી સિધ્ધ અજીતકુમાર", phone: "8849628172",
        pdfId: "1jafrKQvvjo5YOYZw9dXbmH4lEaaYfIE1", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચાવડા ધાર્મિક સંજયભાઈ", phone: "7990047485",
        pdfId: "1KQo41ld6sAN6c4SjQmUgzwBDi56or91g", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચાવડા તસ્કીન શબ્બીરભાઈ", phone: "7990047485",
        pdfId: "16s4vsk3uAfhHpY3-fVjx6mvZlYvN0qp8", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા દિવ્યાંશી જયરાજભાઈ", phone: "6354085819",
        pdfId: "1Wb2S4lE6_ZUG88hyMxw5SCAGru6y1Uor", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોલંકી હેમાંગી એમ.", phone: "9510723465",
        pdfId: "1yjtcWirzMVDc7uPUPd2iKtU-VEdSChJK", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "અંજલી ચંદુભાઈ વાણીયા", phone: "9574139481",
        pdfId: "1A9R971O68QoSeDqG2L_c4npaWlqlsdsE", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રીધમ વાલજીભાઈ ધાધલ", phone: "9727488907",
        pdfId: "1ejru49E5IDX6RdLt5Y26sO7h26-T_ugj", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ખુશાલી રવજીભાઈ રાઠોડ", phone: "9725019602",
        pdfId: "1pAK7pGZVJI5uMAVm7zf5mLfSvjwnf8o4", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોરી પૃથ્વી પરેશભાઈ", phone: "9586538790",
        pdfId: "1RQGlsqW8tsLPjRp9VzEnfInt3wjAWDpW", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ડાબસરા રાહુલ અનિલભાઈ", phone: "9726589896",
        pdfId: "17HuLOiDSi9fRBHDhnXztXmerHGsVwYMs", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બારૈયા દિપેન્દ્ર વિપુલભાઈ", phone: "9998761281",
        pdfId: "1O8tmn_BYb_EmXEh_42KUS0KZACi5tpJl", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કારિયા યુગ એ.", phone: "9574904780",
        pdfId: "1kwx6qCnl9fLnITbS0GxTUgJOU9if2wfX", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગૌરી ધવલ સુરેશભાઈ", phone: "9624800737",
        pdfId: "1zWpj_NRmb-BWMfP5utRNRyvbeeLH3Lnk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભટ્ટી રોનક લાલજીભાઈ", phone: "9974246949",
        pdfId: "1DVrwLc6nfJIkeU43NhMeKvLg2Uc0M7cQ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મીત કુમાર વાળા", phone: "8153835255",
        pdfId: "1UGnCwZttgSJMZbv8ks2AvheWXd44aseX", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ત્રાડ સંજય ગોપાલભાઈ", phone: "9106085723",
        pdfId: "1kpXVvRE8cjvtR_M6Hd_FTIw6Xj8YPbPK", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પઠાણ આયાન જાહિદભાઈ", phone: "9327524865",
        pdfId: "1KKm8ohFSFPKcAPRgkD4vgC1TTEk_16va", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ખુમાણ મહેશ", phone: "9979050979",
        pdfId: "1U5fIMin7K6mFNSxI2vVFdWkSwjRQ1a9-", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગરણીયા નૈતિક નિલેશભાઈ", phone: "9428343963",
        pdfId: "1QxhmyHsw0NQUdz5s7tebw6ZPXsIGLIE2", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વીરજા ઓમ એચ.", phone: "9909831200",
        pdfId: "1dEOJwO5l8xU-lBLceT9XujprDT5Knsod", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વણોદિયા વીર એ", phone: "7990475142",
        pdfId: "172r16bmjqs5xVyEDnGtaLOVfl7R3X1hJ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગુંજન પિયુષભાઈ ગુણા", phone: "9773188227",
        pdfId: "1rJUDtJ6zZwth2876N9G7CiulVgUs_pFU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "યશ્વીબેન નીતિનભાઈ જોટાણીયા", phone: "9409380981",
        pdfId: "1RfzclHrh6pMM7I2mU6TaEMsWE1I6VqqM", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વસાણી ધર્મ વિરલભાઈ", phone: "9879216725",
        pdfId: "1jSkYFK6zbpbxs6k8o8p_DpEICsjb3g3l", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વસાણી મૈત્રી હિતેશભાઈ", phone: "8758762160",
        pdfId: "1icmjw3ZlJQGSkq4cSO4PgWXygXhLnuZ_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર યશ મનસુખભાઈ", phone: "9879996281",
        pdfId: "1nXk_7tG9Fy0ix93a4bpq1VNbM2jLWfMI", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કાનપરિયા મિશ્રી અલ્પેશભાઈ", phone: "9924245045",
        pdfId: "15Q3nYHfHPOT6bmSbJDG6zP33M5l5r9eY", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કાનપરિયા દેવ ઘનશ્યામભાઈ", phone: "9924245045",
        pdfId: "11pBZ-5bWqKEJUEWncdLB1sOxUMP7-m2G", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રામચંદાણી વેદાંત પ્રકાશભાઈ", phone: "9429454850",
        pdfId: "1WKZEIjYDktRBjGUUBGOABnNpfg8he9oH", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ત્રિવેદી સ્નેહ પ્રતિકભાઈ", phone: "9574026026",
        pdfId: "1tlfUfryvIM0b92AaCgPlLcAR9sT9mIPr", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા હેમાંશી મયુરભાઈ", phone: "9723523261",
        pdfId: "1jUs3d_OlvjYijaM3T14Yx7_csHMDMbfy", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રોશ એન્જલ સમીરભાઈ", phone: "9712840986",
        pdfId: "1XG1eAgzUuR2jOsYShAN1AugMHoyRlnYn", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કૌશલ વિમલભાઈ તંતી", phone: "9825901755",
        pdfId: "1t6VqfEAMTl3PXzTy1p1n6xXuxqu1DVK6", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર નિખિલ રાજુભાઈ", phone: "9978853250",
        pdfId: "1kGY1lqxB3tusWV65h_xyxTkjBTt_9etC", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાખોલીયા ગ્રંથ ખોડીદાસભાઈ", phone: "9879436431",
        pdfId: "1iWYPl-Mt8QYQAkf7WA9wvYRXWrMdAgiG", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચોરવડીયા પ્રણાલી સતિષભાઈ", phone: "9428341055",
        pdfId: "1OYs5fWXFB9NJZad8toX8Dq3f2HbC7ZXP", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા ધર્મવીર", phone: "9909555835",
        pdfId: "1aoWHMs2UzwPSF8irbFjTOq-g5Bg4orP4", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રુડાણી ગ્રંથ જલ્પેશભાઈ", phone: "9979477133",
        pdfId: "1RICJdQptY_Q8FN7EJG3cGgzYfVbVy32S", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા ધ્રુવિન હરેશભાઈ", phone: "8241422700",
        pdfId: "10l6gHs3C5AXs4-p0YCX03RKCSRLtM-LZ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દવે ધર્મ વિક્રમભાઈ", phone: "9924413984",
        pdfId: "1o29oPqIJfSvi-Hjr4yVp098r1df6nH9M", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઘવાણી વંશ", phone: "9426646246",
        pdfId: "1fhKfNGC4QyF6pLgAkdVFAuN-zbwx5aEr", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પાટડીયા દર્શન શૈલેષભાઈ", phone: "8320377418",
        pdfId: "1RElEGJ51e3XGdTclkd7NnJvRxLgxpB48", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઘવાની પ્રિયાંશી નિલેશભાઈ", phone: "7802894102",
        pdfId: "1CVCy5x7g6vz21NLUpqG5RSpyE4EzSIIK", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જાખરા અનમ", phone: "9909219680",
        pdfId: "1eeW4FOetq0I8zEWZW-3jUcv-kQBn6JAL", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પાટડીયા એન્જલ અશોકભાઈ", phone: "8320356707",
        pdfId: "1ng_93k8uNAI0-9eTU2MnUtyZ68tHherN", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પાનેલીયા મન પરેશભાઈ", phone: "9558210831",
        pdfId: "1_Bhb0tCyReAX7TwJUaHXKLjMww0r-7Ur", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોલંકી જીનલ", phone: "8141325229",
        pdfId: "12RWqz2JrRCxSAXdAdnRCCAETwFUlFMUG", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભુરીયા ટીના કનીરામ", phone: "8305927587",
        pdfId: "1M9SMz2rPN6a82XyNJa2xjB1dIfgT90Wp", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઘેલા આયુષ", phone: "9879947705",
        pdfId: "1PyHMZuc_Y-RqwAFowA9_LjmFaJSVJMkn", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મહેતા દિવ્યરાજ", phone: "9723837300",
        pdfId: "1pdWv7G_JZ3t1yawRMDWjoyekxSS9ecAO", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ખુમાણ રીશાત સુધીરભાઈ", phone: "9624305156",
        pdfId: "18IX8VtknNPSdRhMrIfpi8R6bA4D5pGt_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા ઉદય વનરાજભાઈ", phone: "7567029955",
        pdfId: "1Oxgm1Os0Rv7oapQl1EWTW0rpC_3g4fAc", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા આસ્થા", phone: "9909588835",
        pdfId: "1_M-Z5VWvU3QTKxWzOoWUmDT93TotIBoi", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા મીથિલ હરેશભાઈ", phone: "9327055126",
        pdfId: "1rfzkUDLFHvIzcZ4HT0awtiJYEYroKBnk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સાવલિયા કક્ષા પ્રફુલભાઈ", phone: "9054650160",
        pdfId: "12pTJm1KPEZixEeYfNZvU6uTUp-ZkTr1N", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કીથેરીયા વિધિ રાજુભાઈ", phone: "9979521632",
        pdfId: "1dta9VikUMSs1Qb4FQc-oDHDQuZ5wuxq3", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સરવૈયા સૃષ્ટિ દિલીપભાઈ", phone: "9879841161",
        pdfId: "1ZC87vhFm7eFHVU9svPjxee-TB1m1BHus", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કણસાગરા ધ્રુવીકા કિરીટભાઈ", phone: "7359917790",
        pdfId: "1tkVf-1rW8UbTu6xTc_vPpxbB8ZYAZ2Rh", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જાડેજા નિધિ અલ્પેશભાઈ", phone: "7778880575",
        pdfId: "1QH_DWgmPX4QkX5WLrBTx94rBqyMTxyCk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ રુદ્ર રાકેશભાઈ", phone: "9585255106",
        pdfId: "1nvWLrQ7gqXFxxtxxVFRg0gE9iO6_XvAu", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રૂડાણી જેનિલ મનોજભાઈ", phone: "7802015808",
        pdfId: "1pZHmmfeO784aV2fQoobfs9fbCNQDpW7T", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઘેલા વિવેક મેહુલભાઈ", phone: "8758590917",
        pdfId: "1mhVtK6h40oVHFTrnAGWXyF_o1BUDXXQL", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા જેનીલ મુકેશભાઈ", phone: "9638326184",
        pdfId: "1CO7VBWjxH5Xgl2gQH0cTD9bsUGk6s3FH", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સાવલિયા મિતવા પ્રફુલભાઈ", phone: "9099528242",
        pdfId: "1DWHn-8wjqZkoBWwHDEDODpP9i6kAv9Rs", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર જાનવી", phone: "9909381996",
        pdfId: "1gdFjRmvgm2-AdRp9OEJaOikUyYtMX2Ci", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભેડા દેવાંશી જીતેન્દ્રભાઈ", phone: "9099328100",
        pdfId: "1Cr1f_ohxhjImAY23pZ9BNtwi0E-yT4D4", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ત્રિવેદી પ્રતીક્ષા પ્રતીકકુમાર", phone: "9574026026",
        pdfId: "1zz1y8dP4mvjwFwFbJ0g814-3nJD-hGVC", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભડેરી યશ્વી ચતુરભાઈ", phone: "9825942857",
        pdfId: "1ZNDAaGYbfOxhzUuwAv0_v_fn1tXIZmma", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જાગાણી જય", phone: "8958232620",
        pdfId: "1utsEC4JlItoK92C_oUZbrwBf3nYYcQzl", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર પિયુષ", phone: "9726592901",
        pdfId: "12yb5t7WXMnT6EQRCtYdwdchVYF8d_LKj", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા હેમાંશી હરેશભાઈ", phone: "8141422700",
        pdfId: "1SBay5PJqprQMEeIamBzmSm7OsXFA8Ovn", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કપાળા રાજવી ચેતનભાઇ", phone: "9624977766",
        pdfId: "1bDiX9q9dtQdgE1UPSDaUiwICYyYW752O", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રૂદાણી સૃષ્ટિ મનોજભાઈ", phone: "7802015808",
        pdfId: "10aleHZCUbmli0efUKerinYsLjcSfgtkW", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર ભવ્ય", phone: "9879035825",
        pdfId: "101kIe76yaqWD9m2ajAc2q5IZzbjAHio2", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભેડા નિત્ય", phone: "8799524229",
        pdfId: "1DzcrfJEh364Voq81BHlHXdXgPkKNXksS", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ઈરાણી શાહી મહીદભાઈ", phone: "997959551",
        pdfId: "19-IHo2gMdLVqhu_dNhQlCGuV0u8Nepxk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મેર ઉજમા રાજાભાઈ", phone: "9925545125",
        pdfId: "1n-0eRHdpQlzjRz-gLk-JWGlvKlTVU7ki", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સુઇલા રેન્સી ઇન્દુભાઇ", phone: "8320657822",
        pdfId: "1v231TRLqBsVLL3B541Gmxueu1AG3I6oz", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર માનવી રમેશભાઈ", phone: "8320657822",
        pdfId: "1aUbvMbqPPzktt00X8QoQdsxYU0VNrJw4", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોહિલ ખુશાલી જગદીશભાઈ", phone: "8320657822",
        pdfId: "1nxpuQ7XI4YQqgD4mU_2rwa4VA7gb9Lfm", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મેર જાનુ કનુભાઈ", phone: "6351784855",
        pdfId: "1WKxs-0mcturJI9RoTx4A_FCVRP3qwB_A", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સુરેલા દ્રષ્ટિ બાપચંદભાઈ", phone: "8320657822",
        pdfId: "1ftGyb6FfuBfTVp1imEop5z8dNm9A0Nyt", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બગડા ભાવનશી ભરતભાઈ", phone: "8320657822",
        pdfId: "1apRBVIPqypbOFUERRTFYymSitJwTVRza", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "લક્કડ આન્ય વિપુલભાઈ", phone: "9924791113",
        pdfId: "1SyIi3jfOf0zbLQGc296TIV3xuHTdjacX", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શિહોરી જાનવી ચેતનભાઇ", phone: "9727250720",
        pdfId: "1KYbklDUXhtlLY_Yad3bwmhStH9lo-mm8", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દોંગા સૃષ્ટિ દિલીપભાઈ", phone: "7984463544",
        pdfId: "1WsXG4Ut924WKDl3GxdXCTN4BEFooMnxU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ડોબરીયા તન્વી વિજયભાઈ", phone: "9427742271",
        pdfId: "1ZM3v1zKzIWX8QZydqM99BSoNweT68ofJ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રંગાણી રૂબીના ભાવેશભાઈ", phone: "9427742271",
        pdfId: "1fNIHG2RoMrV2_v5xVf16mIhZ0GT2hMBu", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોલંકી અંજલી આર.", phone: "9427112043",
        pdfId: "1h574qQxitPNfKdffZwXQKUd6V9RL2djc", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "થાવાણી સંધ્યા ભરતભાઈ", phone: "9427742271",
        pdfId: "1hjxPylPeBB1fLmHcxtEqZqmb4ks-0i1Y", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કારિયા વૈશાલી જયેશભાઈ", phone: "7383642791",
        pdfId: "16liaqkcGMs-p4yg2XCVZCQqGOY9AC9CE", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કથીરિયા જીત હસમુખભાઈ", phone: "9426141510",
        pdfId: "1jqoBwVDjUhfjI7E-XpBlWCDyIoE99cZ4", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રંગાડીયા વેદાંત ધર્મેન્દ્રભાઈ", phone: "9925075999",
        pdfId: "1x6X-T37fHN6OUi3xiMWkKvT0vkes4Iz0", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વઘાસીયા યુગ દિલીપભાઈ", phone: "8758112021",
        pdfId: "1aZNB6bavGdOPvAqRYWp3PgNbc6xdwRA_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાજ્યગુરુ નિશીત દિનેશભાઈ", phone: "9265761400",
        pdfId: "10geGlj_Y9kZ5QdptSxkKm0BW7HO-0ozu", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભૂપતાણી ઈશાની બી", phone: "9925730964",
        pdfId: "1PuBtJDruHDH7OdQic-SV7lr2Hq2OVf6p", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ડોડીયા દીક્ષા કે.", phone: "9898153508",
        pdfId: "17Vh0VOxCcgx7agwOcQAAvXSEF5v8Xfry", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ધાખડા નિકુંજ પી", phone: "8320657822",
        pdfId: "1rNVL451Lh3rkxCgQRYAqvC0ypK9xX1KA", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મેર જીત કનુભાઈ", phone: "8320657822",
        pdfId: "1ECKqhjMg6-G27ecw0QzJrOEfCSbIwdBe", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ધાખડા વિશાલ પ્રવીણભાઈ", phone: "8320657822",
        pdfId: "1lY71JPqIRb8nlABtLx1PWroxFTFj3j_Q", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોહિલ વિવેક હિંમતભાઈ", phone: "8320657822",
        pdfId: "1P2vhlqR2Dm_ezJD1EzrQy989zwBS6dy9", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વડેચા વિક્રમ કે.", phone: "8320657822",
        pdfId: "1iL2ing1SVGGCufq75Ura_cNnDIOIaz60", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "હિર અલ્પેશ વસાણી", phone: "9925581986",
        pdfId: "1WMBYxs5teUjGlRx55HC2TfXsNZIRVHBL", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વિદ્યા સંજયભાઈ ઘાડીયા", phone: "9427990922",
        pdfId: "1T5oUGhXfxpFayHUwzPJchToTK6vaAatd", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ ગોપી પ્રવીણભાઈ", phone: "9409410685",
        pdfId: "1V5Toq1fQOvW6JC69m_dJRQp3BLMksO57", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કૃપાલી પ્રવીણભાઈ ચૌહાણ", phone: "9677048012",
        pdfId: "1SajFLudrgiNDF6bPopXgTA_ZGp8VAYqt", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "હેત પિયુષભાઈ મોવલીયા", phone: "9979912693",
        pdfId: "1jYHZz9JPsXprSm-MkD-gNV0dybn-icWA", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કારીયા બંસરી એસ", phone: "9925331054",
        pdfId: "1-fFg0474HLF4spmcSG_0M-yp3mc7nKfq", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કારીયા વિવેક સંતોષભાઈ", phone: "9428531640",
        pdfId: "1b3g08NwSWGwvTh26-0o1PCbtGPmshACl", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કારીયા પ્રિન્સ સંતોષભાઈ", phone: "9099537234",
        pdfId: "1uu1ULpRKJVEQpp7soE-_tNpQoGYZTXLU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સરવૈયા વેદાંશી વી", phone: "7778831631",
        pdfId: "1AW--jfUkYZaPs734u8Ri6SpUW6UhV1Az", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સટક્યા હીના દિનેશભાઈ", phone: "8141990656",
        pdfId: "1h701G8FwSLP5MvEyFEgmKsStoSAZpNOm", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સટકીયા ઉર્વશી વી", phone: "814177065",
        pdfId: "1EzKgKO6JgpFkof42PQpb66OmOig5ecoF", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "હરદીપ ચૌહાણ આર", phone: "9408711244",
        pdfId: "1P0eHbZiPWG2DgTSCRycLTY_zFMoUXF6L", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કૌલા ખંત વિપુલભાઈ", phone: "9429453999",
        pdfId: "1iDxQKab-67YBl_mEmKUcZoSjgq_tEslH", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જાવ્યા હેનિલ રમેશભાઈ", phone: "9913460825",
        pdfId: "1KwKtTQ4yGjUFGgUN2di78qVpSB6XpR3P", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સાણદિયા કુલદીપ", phone: "6353583871",
        pdfId: "1VWmr_lnK9lAn52_l4OiKqI06vUP0CMVQ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાગડિયા એન્જલ ભરતભાઈ", phone: "9484815450",
        pdfId: "17cKDsZJXRKiNWZaH4H4R-fGzVNcHi5eg", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સરપદડીયા ધ્રુવી નિરંજનભાઇ", phone: "6353863610",
        pdfId: "16tvyoyBIKUeHeSsMJVVdM_1PprlbaBp0", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દેસાઈ ખુશી કમલેશભાઈ", phone: "9913008304",
        pdfId: "1vLBanIDMF6ppxK0pZYlkZ1tWE-sG2rdi", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દેસાઈ પલક સુરેશભાઈ", phone: "9408775457",
        pdfId: "1VKOZ3WV_M_qKpo7cCz5daPbkX2v75cOk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મોહનીયા રેખા કીનુભાઈ", phone: "9023518259",
        pdfId: "1DKG4W-AOif8qDFIHAZ_M5QQ4TpxtHjlE", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પડસાળીયા ધ્વનિ ચોવાભાઈ", phone: "9875030824",
        pdfId: "1-LyS-tTOYToB3d-LWQkOVVYTn60Z_8w1", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વિરડીયા ખુશી રાજેશભાઈ", phone: "8200868302",
        pdfId: "1DXCG3s8RswLNZt3t5iExzsZIN7nu8FbZ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગૌધાત શેલ્વી હિંમતભાઈ", phone: "9913530214",
        pdfId: "1VASsmX8QFu2AiB5lXWwFBXx2JXOvpGO0", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મેવાડા જાગૃતિ સુરેશભાઈ", phone: "9537095715",
        pdfId: "1tS8tAY01SpYHoRjcHjNCl8kSbHG3aI8w", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભૂકાણ નિરાલી ડી", phone: "9327715651",
        pdfId: "1_hdSZw8k0idXqVnWQuGC4S8B0LlLsQLM", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોગદીયા શ્રદ્ધા ધનજીભાઈ", phone: "9879872311",
        pdfId: "1zFqRoopv3nFS1TixfJ5kiHX9ZKbZmSoO", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભૂકાણ રિધ્ધિ દાનુભાઈ", phone: "9327715651",
        pdfId: "1I1c9QFytdZBYnztJkFmJd09ai_nUAHbg", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભૂકાણ જીનલ બી.", phone: "9409856421",
        pdfId: "1BYhjOI4CA7e_kqjriEGPxu2dJfashkyc", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોગદીયા પિયુષ ડી", phone: "9879872311",
        pdfId: "1T8-HuPRwn7-qSbrTB9jW7k4LCH06xzQr", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભૂકાણ દીક્ષિત વી", phone: "8141160558",
        pdfId: "1w9THQ-wdtk2lZUiM7q48NZVZ6LjmIpVW", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દિલશાના અલીભાઈ ગાહા", phone: "9726591731",
        pdfId: "1TnuI8VPaQ7_Gj8bw3txvHrkt76VJBaqr", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "હમળ. કુમુદ મહેશભાઈ", phone: "7817801520",
        pdfId: "1FibbjaAR1Kn47kAhPZsMJszirnsJE-8A", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોષી સૃષ્ટિ જનકભાઈ", phone: "9428778611",
        pdfId: "1GNiU3afNQCz4-QF_cnRelcZR8XNdjKmc", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "તેરૈયા શ્રેયા મૂળશંકરભાઈ", phone: "6356581715",
        pdfId: "1PNc0Q5zWwpxT1PtvlRruhbqa9uMmVOGH", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વણપરીયા વિશ્વિકા સતેજભાઈ", phone: "8511121057",
        pdfId: "1YBHT1otXXtfZx_9lbNmfTf2kZ19EeyiB", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વસુનીયા રોહિત એ", phone: "9879208713",
        pdfId: "190Hkx0laVYYTlmGUmtQTv4gTLzNb0bg5", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વડાલીયા ચાર્મી", phone: "786389309",
        pdfId: "1zrpY7ZrqniWue1zyjW8spuucRMI2Kb5F", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભાડ મનાલી સંદીપભાઈ", phone: "9687148817",
        pdfId: "1QvNoltDHfTuR0ciQuwGC8TSVW0eqJS-r", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પટોળીયા ગોપાલ જે", phone: "9510934151",
        pdfId: "1ZHy_3ScB50TTg_t_nLOz9GvaRSIm4HOZ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "જોટાસણા ભીખાલાલ જીતેન્દ્રકુમાર", phone: "9428708671",
        pdfId: "1gIUvzJ6GbOdh0xidirIvQc4KI56TKBC-", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર ઋત્વિકા ખીમજીભાઈ", phone: "9099047703",
        pdfId: "1vGEck7BFG467zWNIg3x4RU4HRzgimPdS", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગેંગડીયા રૂપાલી ઘનશ્યામભાઈ", phone: "9106212938",
        pdfId: "1v8CrjUHudlZtfEjiuuQat90luW3QAAQE", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોંડાગર મયુરી ઘનશ્યામભાઈ", phone: "9429605267",
        pdfId: "1zVnKScPUWlDrA3MBOhCGmePOn8triIoe", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પ્રીતિ જગદીશભાઈ ચૌહાણ", phone: "7096981090",
        pdfId: "1C9vkUGAdx0MMQ49DAPEHMxrrR4TwyWpU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બારૈયા ઋષિતા રાજુભાઈ", phone: "9687527247",
        pdfId: "1CoIgqTnvAKC0wZkntn2GvsFwlo7cr0UY", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શીતલ કનુભાઈ ધખડા", phone: "9714331257",
        pdfId: "1Xv_735qYghygce057N0R5uZRi94rSON3", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ડિમ્પલ આર વ્યાસ", phone: "9316717472",
        pdfId: "1vra7wyFykOpka5O2UMrrc5F9bQJJy6wN", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા હિતેશ પ્રાગજીભાઈ", phone: "9537379208",
        pdfId: "189czce9uHbn80y1AH5L4I9PLZ4-FDzys", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વસુનીયા હિરન નવલસિંહ ભાઈ", phone: "9023003073",
        pdfId: "1Fq0ckVFzosCz9nHeWF3jXEAEGDXDx4Dg", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ડાબસરા રાજ મહેન્દ્રભાઈ", phone: "9726321725",
        pdfId: "1M0Bvb32WmmYFYWb4LUO07KPFYVk6kAWL", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર અંકિતા મનસુખભાઈ", phone: "6353790817",
        pdfId: "1apRGB3u9Nu4UwTq8LDVaahG8H_8JxpoB", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "માધડ જાનવી કેતનભાઇ", phone: "9898753574",
        pdfId: "1hWCOYf2UsjVIlFE_MjcNyxe9x2pJ2oaX", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાડીલાલ મંગલદાસ વાળંદ", phone: "6354391188",
        pdfId: "1bo9hJ_WJZlLTWLQTe8hxoIKpKeffzTy2", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા દિપાલી", phone: "6355129020",
        pdfId: "1wT-H5FYkTLU5lP2Szr32msvfIFQZPgu6", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પીલુકિયા નિરાલી વિનોદભાઈ", phone: "9825448254",
        pdfId: "1cCZZRjs8VjN-MYUvjefXUNJL7riKJMQ7", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોપાલકા દેવાંગી હરેશભાઈ", phone: "9726107151",
        pdfId: "1nttqgoVbXmj2ApKOMPjolTJ1TVA5anYz", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "લાલૈયા નવ્યા એસ", phone: "9726107151",
        pdfId: "1G6kwsAqwECH3k6yUn8ThX_byCaH4n4tn", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ખુટ પ્રતિજ્ઞા કમલેશભાઈ", phone: "9726107151",
        pdfId: "1BcUXLNwTUokWXd7_tjhzkdndB731Vl_r", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પ્રિન્સ એ. આંબલીયા", phone: "9726107151",
        pdfId: "12-MHwKGN119il4k-mhNobqezX0797igP", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોહિલ ભૂમિકા હરિકૃષ્ણભાઈ", phone: "9726107151",
        pdfId: "1kE26V5j-fVmU9GFuoVOVXmMvkbEWOU_H", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોલંકી ધ્રુવી બી", phone: "9726107151",
        pdfId: "1GPXu9zb9AK51mepOCjB4BdVFsZgyPKjY", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા દ્રષ્ટિ બી", phone: "9726107151",
        pdfId: "1LGwX4PO8umr742aJz13TYCxkpIkzU18f", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોહિલ વૈશાલી લાલજીભાઈ", phone: "9726107151",
        pdfId: "15z116cT2Ag3F43TieLTrF_6-4DK9hhhU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ દ્રષ્ટિ જયેશભાઈ", phone: "9726107151",
        pdfId: "111tTYLEhxIV9J9QVoCAYRqnqebJuGv68", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "હિરપરા સોનલ કીશોરભાઈ", phone: "9726107151",
        pdfId: "1X79BC0fBk4BE-XiZsqRwAhUZteVAV73U", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બગડા સ્નેહલ દિલીપભાઈ", phone: "9726107151",
        pdfId: "1dAMz3I_64NLq7JXZBLFsF_1rKtT3zbM-", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ખૂટ અર્ચના ચંદુભાઈ", phone: "9726107151",
        pdfId: "1cJVoB-riUUc-0WBzwlVBT7ilSNOD-LYc", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ શરદ હસમુખભાઈ", phone: "7096062550",
        pdfId: "1VVQJHZxDVKr3_lEvQHEndWEYCgm4d61T", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ઉનાવા ઈશાન રમેશભાઈ", phone: "9725325558",
        pdfId: "1q8-cvt7Oz2xRR6ha8D9nGs_1hY6ZzGe2", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સુરેલા શિવાંગી ઘનશ્યામભાઈ", phone: "9904779399",
        pdfId: "1r_92T_f6mKFtsYtDHDxUXb3cXzuy9FeK", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ધામી તન્વી ડાયાભાઈ", phone: "9726107151",
        pdfId: "1VG-_CGvwbwrQUvSvLYKawZdKV2l_E-Si", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સરવૈયા ક્રિષા હિંમતભાઈ", phone: "9726107151",
        pdfId: "1ugwoTyPi6iQcs7qc2L1QHJH6fcgyVyrS", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગઢીયા અશ્વી વિજયભાઈ", phone: "9726107151",
        pdfId: "1HQqJ7mXJegy4QvfpgGveyHr3pogOmWhJ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દેવમુરારી સ્નેહા મુકેશભાઈ", phone: "9726107151",
        pdfId: "1rwlgbN2lDWEIlIXGzDFNHbW0mFP39fD4", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "નાકરાણી માહી ઘનશ્યામભાઈ", phone: "9726107151",
        pdfId: "1_VZj9kg1PmFWutaasIDZ1biXthLHf83N", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભેસાણીયા ધરતી આર.", phone: "9638116989",
        pdfId: "1PWngbFA1bgLUuT2JI8-eZclqxTvafVFk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પઠાણ સુનેરા અમજદખાન", phone: "8141326112",
        pdfId: "1V81tplsxawQsW8cgSyAusFQ4-TwOALOF", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "અમરેલીયા અમી વિજયભાઈ", phone: "8758175389",
        pdfId: "19Po2d8cfhq9nEzIKgXEnZ3mMHoNobNa7", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "અમરેલી ક્રિષા અરવિંદભાઈ", phone: "9537114052",
        pdfId: "1PqM4of_BJo7NZHMIBhI0lmODAU1w3-gq", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર નિરાલી ભરતભાઈ", phone: "9924958769",
        pdfId: "15hfMEgafVRKBn6rfO65mgLjglPp-zHL3", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મહિડા જાનવી નરેશભાઈ", phone: "9913152303",
        pdfId: "1qfxRZeb7Ovx5wMcZdAANrBVhnKz2cOgN", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મહિડા માનવી નરેશભાઈ", phone: "9265277107",
        pdfId: "1h92BSHbEL35L4I708sClw7lmgDBad5xd", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મહિડા સાધના મનુભાઈ", phone: "9638892758",
        pdfId: "1ZgRKbcHV-oPlrzUCeCZXzurNb-qutTKe", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સરવૈયા હેતલ ડાયાભાઈ", phone: "9909839361",
        pdfId: "1JG_i03hFmcCNI1D_xfLqnHsBmE7wkzJ8", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "લાડક સલમા જુસબભાઈ", phone: "9925940782",
        pdfId: "1t9Bd1-kEIrZaevbKKyzZFkbIx6bVTSEk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બગડા કિંજલ જયંતીભાઈ", phone: "9638249427",
        pdfId: "1iug6q1gCQmG7fRXybbsrDdOxoN_e3sA1", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોનલબેન છબીલદાસ મશરૂ", phone: "9429257268",
        pdfId: "1vA23VJiZ5vq4zhOvUCXb_V3nHCnDRjiJ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પાર્વતી બાબુલાલ સોંદરવા", phone: "9638515073",
        pdfId: "1E-B8qbzDwBd-4-Yi7BAj-BXFLQdCSW1f", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ધોરડા પરી ચેતનભાઇ", phone: "9909472901",
        pdfId: "1-tRNEytGuiskd9DpWHY51Yt5muSlGlUT", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પટોળીયા કૃષિલ સુરેશભાઈ", phone: "9157761267",
        pdfId: "Not Found", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શીયાણી માનવી હરેશભાઈ", phone: "9725156092",
        pdfId: "1V7-y4fe4SyWw6NjqiEJx4MWDkxlmq5pe", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ધાંગિયા હેતલ લાલજીભાઈ", phone: "9909403779",
        pdfId: "10wM5dptbrS9zPXFikTSBHJ2mvPXMHeZ_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વરૂ હેતલબેન સી.", phone: "7211135143",
        pdfId: "1c1ozdmNOEz7a4nIeH8-dwppQOC_58WS7", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોલંકી હિમાની અશ્વિનભાઈ", phone: "9427260972",
        pdfId: "1RWfzvKEwJS5fyMDFmxhgGoO2PvZou0Yp", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોજીત્રા હસ્તી એમ.", phone: "7621976556",
        pdfId: "1ONv-efVbE2I4qaQNJPOpUPHsnxD89TYT", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દાતેવાડિયા રૂચિતા રાજેશભાઈ", phone: "9879533625",
        pdfId: "1_9BbOyNtQKWfyQqMq8yk0pC8dUQ9kIZ_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર ભુમીબા સુરસિંહ", phone: "9374113013",
        pdfId: "13WtIM7v6F4g4D_R2YTKEG7LAFp_VjcKt", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભરાડ પૂજા કિરીટભાઈ", phone: "8160309911",
        pdfId: "1x_vFpJ7JD6FYd8QWIK-0rOgiA-dgNYM6", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મોરે કૃપાલી મયંકભાઈ", phone: "7801962874",
        pdfId: "1mh_TRJie1Z3oFMF8f0ZJBPwPILBOwXdZ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચોટલીયા ચેતનભાઈ ભરતભાઈ", phone: "9723630454",
        pdfId: "1dIxnM3plEl6VCyluHrgahk2ZKv6DVKj6", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કાલેણા પ્રતિક રજનીભાઈ", phone: "9724519007",
        pdfId: "1RhII4h1N5g0Lt9SCYp743FXIQFpyA1Ew", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ભારતિય અતિશ રામભાઈ", phone: "6352115599",
        pdfId: "1y6oh_cvDwIXWw-RYo0BV3gVGwObHPrxq", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગુન્પવા રીન્કુ મદનભાઈ", phone: "8200181520",
        pdfId: "1kIt8TSBAnrU8WifBTnmOzFGZfXxBzJsS", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સાપરિયા નેન્સી અમિતભાઈ", phone: "6353708282",
        pdfId: "1gdK70CedeY9hIdUFJgijzszfDnb5Gx_m", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા દ્રષ્ટિ ચેતનભાઈ", phone: "7778918309",
        pdfId: "1vdfHopTZhqJFskh-Gpv_r3A42w4rtqPE", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "થલેસા હિમાંશુ વિજયભાઈ", phone: "7990475875",
        pdfId: "1J9Ww5QTu4EjcMEs_rtKeNI7YvsNeGPOL", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા જય પ્રકાશભાઈ", phone: "7096277543",
        pdfId: "1dY6-ngSHWQ3mGOqpScbEfAm2MxPf5w-1", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પેલ્દસરીયા ભૂમિ ભોજાભાઈ", phone: "9925883140",
        pdfId: "1knRTXDu-2rcG6cRyxOUPaUckvs2VTV8w", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર અનિરુદ્ધ ધનજીભાઈ", phone: "9925312985",
        pdfId: "15KD7gw-6HwhbsIBQGiYkzAtwXsl-VKaA", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "હિરપરા ઝેની અનિલભાઈ", phone: "9978514234",
        pdfId: "1mKIpx7dCNGa7gX4NvD40bdPh_BKyrTWQ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પ્રીન્સ વિંઝુડા", phone: "8980901033",
        pdfId: "1yPTZZ_XyI_h4BTCf05xbbhgxgFE0XOm6", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ ધાર્મી અશોકભાઈ", phone: "9974782005",
        pdfId: "Not Found", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દેવમુરારી ઈશ્વા આર.", phone: "8160165452",
        pdfId: "1lGLzTnFoGBegOJ_QoO1mEhNkacSjD_-t", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બગથળીયા પ્રિયા પ્રકાશભાઈ", phone: "9978349380",
        pdfId: "1jZ3pHUQ554204w3Kzb2A_IsVsQ2tQKVM", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કુવાડિયા ગોપી જીણાભાઈ", phone: "9313175419",
        pdfId: "1Tk-cfe4hFaw4BhlcuJolIDYTXGkmditI", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ધ્રાંગીયા સેજલ મુળુભાઇ", phone: "9998359643",
        pdfId: "1FN3WlZpCBTfsQj-jM3DFhKfj8__E-yzc", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ તમન્ના દિનેશભાઈ", phone: "7600567170",
        pdfId: "1ZTiJ8_c3rtoUqhQDoKtRLJ_OB69RCMom", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ધ્રાંગીયા સેજલ ભુપતભાઈ", phone: "7201892181",
        pdfId: "1gkKxxJINaN-WmAEn2mdZUfHuBtn825NG", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કુવાડિયા રાજલ ભરતભાઈ", phone: "9925573143",
        pdfId: "1vdkxoKJ5c1cdcvOveqWf_-4EaliaXtuk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ધ્રાંગીયા જયદેવ ભુપતભાઈ", phone: "7201892181",
        pdfId: "Not Found", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ ધ્રુવી વિપુલભાઈ", phone: "9328955374",
        pdfId: "1V1dZdtaX1-esqZ8Vl8BRZeVFvqqeyS19", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગજેરા નવ્યા વિશાલભાઈ", phone: "9974829490",
        pdfId: "1nQ41-RuHvx2l-WEif5S88qyaXqP7apdp", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શિયાળ હેતલ રમેશભાઈ", phone: "9558835817",
        pdfId: "15FeTkOuIjyQom96woYe65m6XEj-KcTHU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "માંડવીયા ધનવી અશોકભાઈ", phone: "9426127223",
        pdfId: "1ScDXmI6tw6f-A76iPCkKILYJvR5h8kwY", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા ભાર્ગવ બાબુભાઈ", phone: "8238013937",
        pdfId: "1xTH7lzSjJrMahcvLKEgOqE0F4Fv1Vfoo", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા હિરલ આર.", phone: "6353769326",
        pdfId: "1r-ax2dhsCBh79vAj727w7BAShsuGUEXP", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા પલક ઘનશ્યામભાઈ", phone: "7567512690",
        pdfId: "1AH5ejRPm7vzH1PZ-zrlum1x61mlj0l5K", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ખેર માહી હિમતભાઈ", phone: "9723778334",
        pdfId: "1zy8GYigHMDiXPOzA789zFP2zuMbN_vqU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચૌહાણ નીલેશ રવજીભાઈ", phone: "6354979931",
        pdfId: "1hua-Gq8NMQ74SWN7lP3GxNRrlNjON0Zi", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાજા હાર્દીપ શુકરભાઈ", phone: "9081230462",
        pdfId: "1aMQMYLFpWD0-29sLqYoyZNhJEW11ivPe", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોંડલીયા વૃંદા", phone: "6355441598",
        pdfId: "1-CKeVnsnAT9Ur4M9bOggZ9JVRoqSi6dV", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પાટડીયા મિતલ પ્રતાપભાઈ", phone: "9824648768",
        pdfId: "16uzR26pC0pBSEbQKMHs90KWNALw_9Afj", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "અઘેરા ચિરાગ એમ.", phone: "7874739716",
        pdfId: "1DKkgKfNg0JXpPiZ9mN1QayXVLeg3dk0U", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "લીંબાસીયા શિવાની હરેશભાઈ", phone: "9925488159",
        pdfId: "1_VOmBYkoOzfLtbVCf2pgfIhSChOLJ0Je", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાજવી ધર્મેશભાઈ મહેતા", phone: "9427108335",
        pdfId: "1dlofSreW7ZdDZsGjtGA4TvnnBAXkZC5U", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પરમાર જાગૃતિ ભાનુભાઈ", phone: "9537159744",
        pdfId: "1ImR-r7rxv26VieyNQ2Jzie-n7QZDMrnh", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઘેલા મનીષા સુરેશભાઈ", phone: "9316295808",
        pdfId: "1QyapmLRhvL5lnSpZv8eJs3MBpceGMBkB", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બાંભાણીય ઉર્વીશી જયેશભાઈ", phone: "8140704004",
        pdfId: "1fdg3HJwfMOnYBhur2DuNxszEVdvF9npb", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "મકવાણા ખુશીયા ભાવેશભાઈ", phone: "9723789403",
        pdfId: "1hOcCUh_H0V8Tkof4taTJY3cq0pzuoWec", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "નાડા તીર્થ સંજયભાઈ", phone: "7043180807",
        pdfId: "1erX7zTnbMP7KyfseXOKNVXCawTj9OKb_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "કરમટા ગુંજન કમલેશભાઈ", phone: "9824957290",
        pdfId: "1qEfQabt8Y1loohXERorKtCUK6Cf9b7Fh", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ડાભી શિતલ રસિકભાઈ", phone: "9879787258",
        pdfId: "1MyGcPPwD5inyXQOk19A1o36Efyys2UnY", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગૌસ્વામી વિશ્વા એસ.", phone: "9879959212",
        pdfId: "1mNkagr8Z6YcCDRrcwaBHbfXbQjNvQ0CE", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શેલાડીયા જીત પી.", phone: "9726899169",
        pdfId: "1M8FE_l2DsUopVSV-EMWoC45kR0BogK6k", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "હંસાબેન પી.શુકલ", phone: "8160008071",
        pdfId: "1xGx64HPcRFvNxmHQ08yF90F-rx60PGsl", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગીરીશ એસ. ત્રિવેદી", phone: "9374141981",
        pdfId: "18GFJOh75SNsLw2MSl95IychLVdxClv-J", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પ્રમોદરાય શંકરલાલ દવે", phone: "9429139085",
        pdfId: "1ME99kZhaPfV8oKp10tDIHn1T67wQAed5", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દક્ષાબેન નરેન્દ્રભાઈ દવે", phone: "9316100244",
        pdfId: "1RZOkBwkrZdQwgB60WbZSr-hxAck9xcc2", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ તુલસી શશીકાંતભાઈ", phone: "8780609192",
        pdfId: "1n52wmJtAn6YYiAIQWsnoKb8JFYMp-EJL", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોસાઈ મિલન મીહીયતગીરી", phone: "9727608456",
        pdfId: "11xlsciJyB7__PoWf-W9zkXbpkvg9DsOk", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાઢીયા વેદાંત રામભાઈ", phone: "8866288158",
        pdfId: "1RVZua6HweI2QbwCCZu_eCUc-5Nh67kTO", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વ્યાસ કૈલાશ જયેશભાઈ", phone: "9687373463",
        pdfId: "1Kgtr6GZrzEu5Ow7sPmQnTJEnraBMdG9e", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સવરા નિશા ગોકળભાઈ", phone: "9723290685",
        pdfId: "1y7f2CG12oYOnA-G6TH-judfVrkX7yuHU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ હેમાલી ચતુરભાઈ", phone: "8758393624",
        pdfId: "1rxiKs2f0pKckBI6m-SwH4k09RFqraKNu", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ડાભી તૃષાલી રસિકભાઈ", phone: "9879787258",
        pdfId: "12oinvaz3IYr0ge-E45kTzJA4CaPc_-jb", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રણોલિયા ગૌતમ વિજયભાઈ", phone: "9714015263",
        pdfId: "1lGyXmFgAPawehpgbXgr-IRWjNuIZEp1_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બથવાર ક્રિષ્ના વિપુલભાઈ", phone: "9904061348",
        pdfId: "1e67Ax6qjBEZLy0Ry6s-36X9zFQ9Y5_Qv", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોહિલ કવિતા ભરતભાઈ", phone: "9913955072",
        pdfId: "1WW2126bR0fRALbhl9nS5yUy5-rkMkFKS", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "બથવાર અર્જુન વિપુલભાઈ", phone: "9904061348",
        pdfId: "1vOdik3wx4pPbgPTplGrrLR52eSSOahP0", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "અધ્યા બંસી પ્રવિણચંદ્ર", phone: "7624053068",
        pdfId: "1M4SM2iES_StnQVojx0XzHfPvLqj8k_hK", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સુરેશચંદ્ર હીરાલાલ", phone: "9377567835",
        pdfId: "14EekMzDUh3R7meDb0LXoV0gGTEOBbFcA", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાંસજાળીયા હેત બીપીનભાઈ", phone: "9429773295",
        pdfId: "16xEt4nVZddL_n1qJ5WvpfV-moDKuQCMB", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સરસીયા રવિના સંગ્રામભાઇ", phone: "9879784726",
        pdfId: "11KWEMruVvY_Se4Kqik7ZmEl-EarJbrPl", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોલંકી સચિન રાજુભાઈ", phone: "9974545918",
        pdfId: "1lTPrFhcXUoaNt_FooIwKKfRQnOQyGHet", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શી રોળીયા જેનીષા ખોડાભાઈ", phone: "9725414798",
        pdfId: "104J0W_i2vURhUax6yCx-d2xnVeYhsGLx", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ઝાંપડા અંજલી મંગળાભાઇ", phone: "9909399266",
        pdfId: "1u6Q4VM6gTbJwYaBMCW4WYBYU0-JjxJqz", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સાવલિયા જનક જયેશભાઈ", phone: "9662173450",
        pdfId: "1sc-ZW9bvCYbJwQiFjVamddPcdlP4LhaD", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા દેવિકા વિક્રમભાઈ", phone: "9737034100",
        pdfId: "1u3Iajbt_zF67780NMBTCTC36LJHDxT_a", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શિયાણી દીપ મુકેશભાઈ", phone: "8758542486",
        pdfId: "1Asn4toGxxh-v0bSt0h3gswPFp8oV2Rcp", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "વાળા વિશ્વરાજ વિક્રમભાઈ", phone: "9726522153",
        pdfId: "1gZDYFrO1LdCLmbMFZ8NLVhP4dhS3-MJm", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રતડીયા કિંજલ ધુધાભાઈ", phone: "9898780693",
        pdfId: "1cZaq0Ydvpit55WvIVW8IAmxs6O2AfhvB", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોંડલિયા દેવ લાલજીભાઈ", phone: "9904363695",
        pdfId: "1ZxeYYjLA4bwSyTagFOlNlfs8Qk3n1aVE", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ પ્રીત મિલનભાઈ", phone: "9586178098",
        pdfId: "1tSSinx5Fmn0iUjzlpgTBeJzzeRkcjy8r", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ગોહિલ જયેશ મુકેશભાઈ", phone: "9173165916",
        pdfId: "1JHdCm7H2NfdHWUtMwDLhCCMSsSyxqd0N", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "પાંભર દીપ શૈલેષભાઈ", phone: "9574025374",
        pdfId: "19_9lopaJS72nMrG8o1RF4IoqgDYC-97P", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "રાઠોડ દિશાંત શૈલેષભાઈ", phone: "8780827547",
        pdfId: "1lhEcUQYwUSnwPs6RA6SUz1yvtJdNd81W", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "ચાવડા રાજદીપ ગજેન્દ્રભાઈ", phone: "9737329864",
        pdfId: "1rXQLB6G-C4HHWp4b7hBGRCnYwhTMyC2m", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સરવૈયા સાર્થક સી.", phone: "8140443391",
        pdfId: "1YuOoDS6F9loDCgUsFz7SVmVq9-1axxS2", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "દાતેવાડીયા રુચિતા રાજેશભાઈ", phone: "9879533625",
        pdfId: "12MrKY_JZzOm43_sM1GzmCgqZAK0peLFf", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "સોરઠીયા કાવ્યા હાર્દિકભાઈ", phone: "9925593465",
        pdfId: "1nODFdP6xWYs_FZMU_kt6elqcUCCPgUM_", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
   {
        name: "શ્રી દેવાંગ વિભાકરભાઈ ઉપાધ્યાય",phone: "9427747996", pdfId: "1KEWdwaBtIA-FepxpFMb8CKqpXRbilEEy", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી પર્લ લાલજીભાઈ રામાણી",phone: "9998964464", pdfId: "18xWuX7a987NRveXJm5iXKfv82N6-ofg5", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી હેત હરેશભાઈબો રસાણીયા",phone: "7990047485", pdfId: "12w7aKWK9m9AsMT_RKme2QfpVBugFOdqR", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી નીલ દિનેશભાઈ ખેની ",phone: "9424106477", pdfId: "1Ooj9yH0DgTLBeHLjq6WGrYstbAe_hH7u", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી વૈષ્ણવી ઘનશ્યામભાઈ બોરડ ",phone: "7863847330", pdfId: "19fx7HeXPlwNxKYEsfhRkZQvvVQqX9kXx", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: " શ્રી સૃષ્ટિ અશ્વિનભાઈ રાદડિયા",phone: "9104854392", pdfId: "1VoI9TECLTfuvme3u9CijZJlxOwcB5Kna", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી સેકડા વાલસિહ માવડા",phone: "8799592893", pdfId: "1I4nvS8WTVlEMEUI7OKW93td-wPlpQYOJ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી મિત્યા પરેશભાઈ શેલાર ",phone: "7405601718", pdfId: "1Llk0XextsPlufqjTWB4XML3X06l3GpGl", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી શિહોરા સંજના મનીષભાઈ ",phone: "9919696762", pdfId: "12JiNsxvBkW_3rpVf7OIOB_rKyoP9goqU", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી મયંતા ભરતભાઈ મહાવર",phone: "9429942271", pdfId: "104InCpLPhe3Wme1iweDsAASmpP4hTg8k", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી કમલેશ ભગવાનભાઈ શિયાળ",phone: "9925494713", pdfId: "1Sge6JLFssg040p_vByugeVKbVEd3ogL6", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી મહિડા જલ્પા બી.",phone: "8160922752", pdfId: "1qER6jWVXUhvWQAxSuCfsLZD7oQxHM3ZQ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી હેતલ હરેશભાઈ સોલંકી ",phone: "9925294713", pdfId: "1vVYiuYf1LXcrSqqA6OcBDQLmQNHajR2o", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી દિનેશભાઈ લલિતભાઈ જોષીપુરા ",phone: "9913731684", pdfId: "17K41hvgWs4ACHkR6cLTMWNSx6OyTsQQ6", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી કૃપાલી દિનેશભાઈ કામળીયા ",phone: "9408911280", pdfId: "1PDaUdmMddf8Odz_lrkXcPrLhsPz9qYNZ", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી યોગેશભાઈ નાટુભાઈ ભટ્ટ ",phone: "9924013464", pdfId: "1ifVSF54Sg0PlzZ75C-wVVmBL_AxoLb-f", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી સાહિલ મગનભાઈ મકવાણા ",phone: "9265370063", pdfId: "13XcUA5y0ugzu42a06vTplAyL6jh42_6t", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા "
    },
    {
        name: "શ્રી નટુભાઈ શાંતિભાઈ ભટ્ટ ",phone: "9409042034", pdfId: "12Dn6-2T-DTzDkRL0BwUMpFDMr4JEUeeF", subject: "શ્રી દશાણી સાહેબ નિબંધ સ્પર્ધા"
    }
]

function searchCertificate() {
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let resultDiv = document.getElementById("result");


    // Find the certificate by phone number
    let userCertificate = certificates.filter(cert => cert.phone === phoneNumber);
    console.log(userCertificate)

    // Function to generate the PDF download link
    // function downloadPdf() {
    //     filtered_data.forEach((val) => {
    //         const pdfUrl = `https://drive.google.com/uc?export=download&id=${val.pdfId}`;

    //         const link = document.createElement("a");
    //         link.href = pdfUrl;

    //         // // If you have the actual filename stored, use it instead of a generic name
    //         link.download = `${val.name}.pdf`; 

    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    //     });
    // }

    if (userCertificate.length) {

        resultDiv.innerHTML = ``;
        if (userCertificate.length < 2) {

            userCertificate.forEach((val, i) => {
                // Generate Google Drive direct download link
                let pdfUrl = `https://drive.google.com/uc?export=download&id=${val.pdfId}`;

                // Display the result with the user's name and download button
                resultDiv.innerHTML += `      
                 <div class="res-box">
                    <p class="name"><strong>નામ:</strong> ${val.name}</p>
                    <p class="subject"><strong>વિષય:</strong> ${val.subject}</p>
                    <p>પ્રમાણપત્ર મળી ગયું છે! <br>નીચેના બટન પર ક્લિક કરો.</p>
                    <a href="${pdfUrl}" download>
                      <button>પ્રમાણપત્ર ડાઉનલોડ કરો!</button>
                    </a>
                </div>`;
            })

        } else {
            console.log(userCertificate.length);

            // resultDiv.innerHTML = `
            // <button class="all_certi" onclick="downloadPdf()">બધા પ્રમાણપત્ર ડાઉનલોડ કરો!</button>
            // `
            // `<button class="all_certi" onclick=${downloadPdf(userCertificate)}>બધા પ્રમાણપત્ર ડાઉનલોડ કરો!</button>`
            userCertificate.forEach((val, i) => {
                // Generate Google Drive direct download link
                let pdfUrl = `https://drive.google.com/uc?export=download&id=${val.pdfId}`;

                // Display the result with the user's name and download button
                resultDiv.innerHTML += `      
                 <div class="res-box">
                    <p class="name"><strong>નામ:</strong> ${val.name}</p>
                    <p class="subject"><strong>વિષય:</strong> ${val.subject}</p>
                    <p>પ્રમાણપત્ર મળી ગયું છે! <br>નીચેના બટન પર ક્લિક કરો.</p>
                    <a href="${pdfUrl}" download>
                      <button>પ્રમાણપત્ર ડાઉનલોડ કરો!</button>
                    </a>
                </div>`;
            })
        }

    } else {
        // Show error message if not found
        resultDiv.innerHTML = `<h2 class="error">ફરીથી પ્રયત્ન કરો <br><br>
         તમારો નંબર સર્ચ થયો નથી. <br> 
         જો તમને નંબર ખબર ન હોય કે નંબર આપેલ ન હોય તો આપેલ નંબર પર ફોન કરીને પ્રમાણપત્ર મેળવી શકશો. <br></h2>
         <br><br>
                    <div class="contact">
                        <a href="tel:+918200976631">રવજીભાઈ કાચા : +૯૧ ૮૨૦૦૯ ૭૬૬૩૧</a><br>
                        <a href="tel:+918160145138">ડૉ.અમિત ઉપાધ્યાય : +૯૧ ૮૧૬૦૧ ૪૫૧૩૮</a>
                    </div>`;
    }
}
