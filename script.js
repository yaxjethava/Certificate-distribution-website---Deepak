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
    { name: "શ્રી સોનાલીબેન શાહ", pdfId: "1tbGq4o64sDVeORC3gKj2uA63Qa4N9lSH", phone: "9619583951" },
    { name: "Mahek", pdfId: "15Y9X62FBQYS0W6dXLxo1UQHignEpURq_", phone: "8200040619" },
    { name: "શ્રી દિનેશભાઈ લલિતભાઈ જોષીપુરા", pdfId: "1E6EFKoIrHNyleJxbQoPyovEUgFRvEvOA", phone: "9913731684" },
    { name: "શ્રી રીનાબેન રણમલભાઈ ભાટુ", pdfId: "1uHHFIwTNtCi_tpDmUGyQ7cS6BQVuaW6V", phone: "9023130662" },
    { name: "શ્રી નટવરભાઈ આહલપરા", pdfId: "1dMPau_gP2wnqKQxf7mM4nJHY2meg2udc", phone: "9974009042" },
    { name: "ડૉ. ધીરજકુમાર વલ્લભજી વ્યાસ", pdfId: "15sl-VlpQNqKCdGDMADwN3c6XN5iC631D", phone: "9427244251" },
    { name: "શ્રી ઉષાબેન એસ. શારડા", pdfId: "1V1TMlZbYhwbieK5UpEbgOYDjiRD1RLqc", phone: "9824079403" },
    { name: "ડૉ. રાધિકા રાહુલ ટીક્કુ", pdfId: "1IOs9nFoib6rjpwB1e89uBPQu4z4jHuGb", phone: "9979312028" },
    { name: "શ્રી જયસુખભાઈ લાલજીભાઈ જીકાદરા", pdfId: "1PdHm4MHEC_GeLsxRSYKGs9z-GcCuDowW", phone: "8200454521" },
    { name: "શ્રી બિંદિયા સંજયભાઈ દામણી", pdfId: "1ToHz2eItWvor-TLpuqL_6lmOebY24kQO", phone: "No Number" },
    { name: "શ્રી નેમીષાબેન ઘનશ્યામભાઈ કસવાળા", pdfId: "1KB1jE-1A3hC-iukHkaKmVEGTUtRScn-G", phone: "8200006894" },
    { name: "શ્રી દેવાંગી એમ. બારૈયા", pdfId: "1P-0WvXfaiuY7qLzb9sH_7U8Q9_AMyja8", phone: "9429272564" },
    { name: "શ્રી ખુશી રાજેશભાઈ વિરડિયા", pdfId: "1ZLFbCs2cYr87v2bi6boSl9tZUiVR9-7P", phone: "8200868302" },
    { name: "શ્રી ભૂમિકાબેન અલ્પેશકુમાર પ્રજાપતિ", pdfId: "1_eaXUP3nqx0Xs1seir15aNBoAXkcplZa", phone: "8320671115" },
    { name: "કૃપાબેન જોગાભાઈ રબારી", pdfId: "1S2YQpIrWcQYUf8Q98Z9EweqomgOBB9f1", phone: "9409035308" },
    { name: "ગાયત્રીબેન તગજીભાઈ બારોટ", pdfId: "1ZU2FcICT23CD0sdrXdGtGVDaoVyW12SL", phone: "9409035308" },
    { name: "સોનલબેન ચહેરાભાઈ ઠાકોર", pdfId: "1pij_biTjilvwWgRcun9Q2NVy9jDz-QaP", phone: "9409035308" },
    { name: "અક્ષરાબેન નરસુંગભાઈ ચૌધરી", pdfId: "1kYg-7Fc72QRmUWAwPinEhE4hf2oDr-tT", phone: "9409035308" },
    { name: "જનકભાઈ વિરજીભાઈ ખાંભડ", pdfId: "1WdvZf9xuSesx5lrhpXiQ-bqEQXvkovn5", phone: "9409035308" },
    { name: "મનીષાબેન નરસિંહભાઈ ચૌધરી", pdfId: "19BXoVCCbzSMdbDpdhEXLt7oLvYsSHGE7", phone: "9409035308" },
    { name: "અંજલીબેન લક્ષ્મણભાઈ ચાવોડ", pdfId: "1_3kpdgL5ADsqefuvwSCGkWHSZ7qK_nlY", phone: "9409035308" },
    { name: "રીંકલબેન પાનાભાઈ વાઘેલા", pdfId: "1NDnxF-mHPU4pPMVNw6aN2Wjrg6CvLP7f", phone: "9409035308" },
    { name: "જાગૃતિબેન ખેંગારભાઈ વણકર", pdfId: "1P3NbjTQUpTpafCZ7mIjI52w0tVYVJclZ", phone: "9409035308" },
    { name: "દિવ્યાબેન અરજણભાઈ રાજપુત", pdfId: "1Fbv-cM5SZ0njd0ZzCV0ByU_tiZrVRmai", phone: "9409035308" },
    { name: "દિવ્યાબેન લક્ષ્મણભાઈ સોલંકી", pdfId: "13qR9F98FQ56dAg0OT3Mkr6nwwowzPmXZ", phone: "9409035308" },
    { name: "પરીબેન દિનેશભાઈ મકવાણા", pdfId: "1o1TUr_x1121aws4RWibdw6-VoiVZ47-B", phone: "9409035308" },
    { name: "નયનાબેન દાનાભાઈ મણવર", pdfId: "1-32Z9yoTedbxOSQp7nFEKIaNzYSIqiji", phone: "9409035308" },
    { name: "આરતીબેન અજાભાઈ રાજપુત", pdfId: "1PlBf6oyYYrZqrb5tuVHP-DBdW6cWHOVe", phone: "9409035308" },
    { name: "રંજનબેન ભગવાનભાઈ સોલંકી", pdfId: "13Djd9qBWqsIxucHVxo-8NcDAP984QF2I", phone: "9409035308" },
    { name: "વસંતબાઈ માનસિંહ વાઘેલા", pdfId: "12qweaBjwHn_pyh4qOLS6YUhqtjMcKtbY", phone: "No Number" },
    { name: "રિંકલબેન મેરાજભાઈ ચૌહાણ", pdfId: "1Cgk4fVlgJAdEQ4gLAbVpXpy7DkvbUKlN", phone: "9409035308" },
    { name: "આરતીબેન લાધુપુરી ગૌસ્વામી", pdfId: "14u0pcGR33o6t6ngSoKlB0M9LNLN1Vv6E", phone: "9409035308" },
    { name: "જાગુબેન નરસિંહભાઈ સુથાર", pdfId: "1lM6Gvk_PmlTBySlpsX6GYu076OC3EtFv", phone: "9409035308" },
    { name: "અવનીબેન રૂડાભાઈ વાઘેલા", pdfId: "14ZQ-rPbcHyout0pF6xcD1Q-_fAvALlQk", phone: "9409035308" },
    { name: "જયશ્રીબેન રામાભાઈ ખોડ", pdfId: "1aDEFg3kQqzHQLRaWVTcDPMaxViBf-1nQ", phone: "9409035308" },
    { name: "કિંજલબેન વાસીભાઈ ખટાણા", pdfId: "1HmWZHieueGuuN1vKtdwi24tjqetx-GdO", phone: "9409035308" },
    { name: "રિકલબેન પચાણભાઈ કાળમા", pdfId: "1_3pinup9ryTfldf12kaX03VflzkqIeiZ", phone: "9409035308" },
    { name: "જીજ્ઞાબેન લક્ષ્મણભાઈ રાજપુત", pdfId: "1xniJm_k9-tgJvEtI56AFAHKiEcidzlFE", phone: "9409035308" },
    { name: "અનિતાબેન મલાભાઈ ચૌધરી", pdfId: "1OpXgTKRfBUTZUzSqK4353Ck5DKySDQ6C", phone: "9409035308" },
    { name: "જયાબેન નાગજીભાઈ નાઈ", pdfId: "1zZimkJTwtuoRUikj07uafjqUBZXV3AL-", phone: "9409035308" },
    { name: "ખુશીબેન પાતાભાઈ ચૌધરી", pdfId: "1MWeI9J4rWpsNiMIZpGuQi84s3S6qB1tH", phone: "9409035308" },
    { name: "સાક્ષીબેન નટવરભાઈ સુથાર", pdfId: "10qFCQAn_jZhKpKj7MfQTBhTXCprE6_-H", phone: "9409035308" },
    { name: "કવિતાબેન અમરતભાઈ કુંભાર", pdfId: "1sP3DCF1bS6awhNg8VP8puiDEPeNCusxs", phone: "9409035308" },
    { name: "હેતલબેન રમેશભાઈ ચૌહાણ", pdfId: "1dquW5TOOvYlVjv7n9FrvdsgOoRfZAr1g", phone: "9409035308" },
    { name: "જોતલબેન ભાવાભાઇ ઠાકોર", pdfId: "1qoMM3bd2J4XFwsArXxHRMF091shKiBpW", phone: "9409035308" },
    { name: "સૃષ્ટિબેન મુકેશગર ગૌસ્વામી", pdfId: "1qXQg3S--Vigqa1YGUXNbVzAkuLJfKwJ6", phone: "9409035308" },
    { name: "મમતાબેન સતરાભાઈ મકવાણા", pdfId: "1T1yFioHLaOAwdDcT7yBskbCdys0SvMnM", phone: "9409035308" },
    { name: "મિતલબેન વિહાભાઈ ચાવોડ", pdfId: "14vOHapsfoyoa1U5Lv_rksiZiVk2J-OxM", phone: "9409035308" },
    { name: "પ્રિયાબેન કાનજીભાઈ જોષી", pdfId: "1VuUCK4yFvAGB_Aq7_ziniQaO-C-i-mBU", phone: "9409035308" },
    { name: "સેજલબેન અમરતભાઈ રાજગોર", pdfId: "1zZMV_z6PrlpKOuzWema67fZxZx_Qmxur", phone: "9409035308" },
    { name: "પવનબેન ભલાભાઈ રબારી", pdfId: "1yejaSJ1VCEQ46RE3erW3O2VZ46Z4vG1A", phone: "9409035308" },
    { name: "જનકકુમાર શ્રીરામભાઈ રાજગોર", pdfId: "1NEtbXLg3pGJzZggO4RQCZ69-vR125ZYF", phone: "9409035308" },
    { name: "નરેશકુમાર અરજણભાઈ ગોલેતર", pdfId: "1WSpzeFGP3Rt48Niq1yXv2LZ1ghRyUu5Q", phone: "9409035308" },
    { name: "વિદ્યાબેન તખાભાઈ ચૌહાણ", pdfId: "1piPO61A_fyDNRXboyCbZkbJIzR-W-wet", phone: "9409035308" },
    { name: "મિનાક્ષીબેન પીરાભાઈ રાજપુત", pdfId: "1VTK5t8HREXNsIP99kogcYBG31z_Xj05w", phone: "9409035308" },
    { name: "નૈયાબેન રમેશભાઈ ત્રિવેદી", pdfId: "1VwJ3OI_IH27uyclLk_6huXjTw2mSoJxv", phone: "9409035308" },
    { name: "મિતલબેન નારણભાઈ પરમાર", pdfId: "1twWfmk-xtd35Pd-v81G7oKWZr2lgALKI", phone: "9409035308" },
    { name: "જયશ્રીબેન ચંદુભાઈ પરમાર", pdfId: "1PT1zYjQSQy9KFulWK6Plco_LlWWF_YfT", phone: "9409035308" },
    { name: "રિદ્ધિબેન પ્રેમાભાઈ વજીર", pdfId: "1yGBhjvZuzvpxo_ilUz4I6cXf09EtwNV8", phone: "9409035308" },
    { name: "જીનલબેન કરમશીભાઈ ભીલ", pdfId: "1zApaM0-pNpdCk9IIumOwi9Ys1NQXwhDR", phone: "9409035308" },
    { name: "સચિનકુમાર જોગાભાઈ મકવાણા", pdfId: "17Wx0sKAEti6PIqlF5rllJksZHhojfUZo", phone: "9409035308" },
    { name: "રમીલાબેન હીરાભાઈ રબારી", pdfId: "1l7eeLrI3Lvm_VhpKtjKh33j8fJuXyHcp", phone: "9409035308" },
    { name: "મયુરીબેન સવજીભાઈ ચૌધરી", pdfId: "1bqIbGPy6LwyQ07wdkJJDXlaMVcHkJYnY", phone: "9409035308" },
    { name: "પુજાબેન જુમાભાઈ રાઠોડ", pdfId: "1nQmbQ9YlCVZaj4uK0hI-iMrs3323fLTx", phone: "9409035308" },
    { name: "પ્રિયાબેન સુબાભાઈ બાંભણીયા", pdfId: "1qXqEviov1_sif-BFlteXSSjlcZLK3lTg", phone: "9409035308" },
    { name: "ભૂમિબેન વસંતભાઈ ચૌહાણ", pdfId: "1UH5TBBOCKVhPPtgShPKymF_ejZ4ON47D", phone: "9409035308" },
    { name: "શિલ્પાબેન ગણપતભાઈ ચૌહાણ", pdfId: "14R5jmsZN4qrD3Cvi2KRJU9FtOe9KU9y6", phone: "9409035308" },
    { name: "સીતાબેન કરશનભાઈ રબારી", pdfId: "11YUsRfMDVPTpvJkxh6gWbPipPzj8YEwh", phone: "9409035308" },
    { name: "જાગૃતિબેન રૂડાભાઈ વાઘેલા", pdfId: "1B7432CPD_7Rbkbjj3q_WvQiIDsrOuSYo", phone: "9409035308" },
    { name: "હીનાબેન માંનાભાઈ રાઠોડ", pdfId: "1kLwhZNMmCbSAn0Dqkhre4Le0TV53f3xO", phone: "9409035308" },
    { name: "ખુશીબેન મહેશગીરી ગૌસ્વામી", pdfId: "18QMrtXFzgkZFdzz2UQAPQYGEg831K3t7", phone: "9409035308" },
    { name: "રવિનાબેન નરસુંગભાઈ ચૌધરી", pdfId: "11lA-gbCRFVANaGwjTSOzusJtiK9aoGlX", phone: "9409035308" },
    { name: "સંગીતાબેન કાંતિભાઈ ચૌહાણ", pdfId: "1CkBwggjujEI7vhVHrB1Cx49d6OM7FtQ1", phone: "9409035308" },
    { name: "આશાબેન ભુરાભાઈ ચૌહાણ", pdfId: "1Ly_aSR3yoyVTb2ekmAcegzkX-fhJ11Pd", phone: "9409035308" },
    { name: "જયશ્રીબેન લાલાભાઈ પ્રજાપતિ", pdfId: "11aepr2Tg_1Q6eU94YJ_0l3BWSMQGMmfU", phone: "9409035308" },
    { name: "મમતાબેન ભરતભાઈ સુથાર", pdfId: "1zYGm2p9Vj9NIuoDApCAF2PxrGrbDFOU6", phone: "9409035308" },
    { name: "લક્ષ્મીબેન પોકરજી સુથાર", pdfId: "1_FDLjjH_ULko5QjKCOWTcDYLsPpuYuvQ", phone: "9409035308" },
    { name: "ઊર્મિલાબેન ભરતભાઈ પ્રજાપતિ", pdfId: "1av8iFZL_jIrKnOUSOoZnjENMXPPwXSJK", phone: "9409035308" },
    { name: "હર્ષવી વેલજીભાઈ ડોડિયા", pdfId: "1Y8jQrRuga8ZLWyIdrRpZQqMPmVKyzDb7", phone: "9409035308" },
    { name: "ભાવનાબેન લક્ષ્મણભાઈ રાજપુત", pdfId: "1AA_1cEuVhXAyqrfbVs8-0SoLi7MwAdZQ", phone: "9409035308" },
    { name: "રાહુલકુમાર રામજીભાઈ પરમાર", pdfId: "18r04m-IPwyGhN8MqEL9rcW98TFwzpVeg", phone: "9409035308" },
    { name: "આરતીબેન પાનાભાઈ રાઠોડ", pdfId: "1EYcJoIheTk-U1GLcYQew7Hz68GWrouZR", phone: "9409035308" },
    { name: "માવીબેન સેનાભાઈ રબારી", pdfId: "1sua58YSHRVK7lskQb4Pi-sI8_26Iojy1", phone: "9409035308" },
    { name: "એકતાબેન રૂડાભાઈ વાઘેલા", pdfId: "159zLbzSPqMJOWwTySOPrghKQlvXeaGPn", phone: "9409035308" },
    { name: "જીગરભાઈ હમીરભાઈ જાળિયા", pdfId: "17pEhgINgnHChg1vM1HZXrmEO9waclV-l", phone: "9409035308" },
    { name: "માવીબેન હમીરભાઈ રબારી", pdfId: "18C9czxbB4c2CtIp1UCA-6Zo44736Egf9", phone: "9409035308" },
    { name: "આરતીબેન દ્વારકાભાઈ રબારી", pdfId: "1-JSDkobC3zncm05x3nVqAaIJQlNL_Q56", phone: "9409035308" },
    { name: "આશાબેન ભાણાભાઈ ગુર્જર", pdfId: "1dM-41GfdIvUIA8myqRzwx58J6d2qSOAu", phone: "9409035308" },
    { name: "વૈકુંઠ હરિરામભાઈ મોઢ", pdfId: "1U1EcjjUyrq7LbeuBJj4Ixo5NTYPiavaz", phone: "9409035308" },
    { name: "વિપુલભાઈ જયંતીભાઈ ચૌહાણ", pdfId: "1IPHteCs9sxcHypfP66kReuct8aavXjna", phone: "9409035308" },
    { name: "સેજલબેન ચંદુભાઈ રાવળ", pdfId: "19LZTHRyoRw9a8UoMpa2Ne44I9RH1OMqP", phone: "9409035308" },
    { name: "વસંતીબેન નરસિંહભાઈ ચૌધરી", pdfId: "1aBCNN7u_R75yIZ07c51VXVJTsQbLhBHw", phone: "9409035308" },
    { name: "સેવંતીલાલ ચોખાવાલા મનોજકુમાર", pdfId: "1egzvIZTFcIx7xyx_qK8rL6cx-Y9WFCUp", phone: "No Number" },
    { name: "જેન્સી  બોઘાણી", pdfId: "1Zno0-Gn8X9zNxhJi_JmI-XrxQxTawgr8", phone: "No Number" },
    { name: "વેન્સી  ખુંટ", pdfId: "1rBd-wptOic72BFqJUoAQie6qhOiEwVYA", phone: "No Number" },
    { name: "ક્રિષ્ના  હેલયા", pdfId: "13OlqBb76wHtEjAw9tOchsWdL3ioyjadu", phone: "9409035308" },
    { name: "પ્રિયા  કનાળા", pdfId: "1NXBE0Dff0NXyJqRSsFg_jwuVGEUu3Mmg", phone: "9409035308" },
    { name: "ક્રિષ્ના  સોરઠીયા", pdfId: "1rOevrI6sPq-nbzL63oHtV14IylL9BGsc", phone: "9409035308" },
    { name: "ઋતિકા  સોલંકી", pdfId: "18GRCmLi5LlYG95kpIiTuGS9--XUQNENZ", phone: "9409035308" },
    { name: "યશ્વી  ટિંબડીયા", pdfId: "1knanZ7fyMkUqB2zKnCHAaTgmA08IEfvm", phone: "No Number" },
    { name: "જીનલ  સોરઠીયા", pdfId: "1zTEMMwv_W-FFpixZ5RMHBFJZmT-BjsHs", phone: "No Number" },
    { name: "હેત્વી  પડશાળા", pdfId: "11OnlMRt72tO7ry3EQ67AQRVLVlgDjaIF", phone: "9409035308" },
    { name: "એશ્વી  શેલડીયા", pdfId: "1OeIt-nrCOaQod2okrQ6o2KkScpccus-L", phone: "No Number" },
    { name: "તમન્ના  કોરેજા", pdfId: "1LFNkqwrY_uIYncnBUjYlwGP2yF5NyVNf", phone: "9409035308" },
    { name: "સાનવી  જયસ્વાલ", pdfId: "1J90W2RR5O9YUnr8ePFV1SPDuQG1YfDGR", phone: "9409035308" },
    { name: "આસ્થા  ગોસાઈ", pdfId: "1N_3jwEzJL4nMRz9nayeslsDL9yN03Dgt", phone: "9409035308" },
    { name: "રવિના  જાટ", pdfId: "1pcsJ72SmRxCGOOERKToI2XKOmZUpXk86", phone: "9409035308" },
    { name: "પલ્લવી  બારૈયા", pdfId: "1kqaaCKI6JsqCVSlInIvGNlIDbHYjeA7j", phone: "9409035308" },
    { name: "ભૂમિકા  ચૌહાણ", pdfId: "14GSe2gjM2jOTMGXCyxlf-pDaTZPc7-OV", phone: "9409035308" },
    { name: "તુલસી  હેલૈયા", pdfId: "1gGA96-uMFuQpYW9ot73LiDROtwx_VfDA", phone: "9409035308" },
    { name: "નીલોફર  આરબિયાણી", pdfId: "18NZ7TlknRMZM1c70rAtG1OwtGM7cDIgQ", phone: "No Number" },
    { name: "દીક્ષા મુકેશભાઈ દાવડા", pdfId: "114XgRDr9m65naOHyXlVVmruo_nK-TQ9-", phone: "9409035308" },
    { name: "યોગેશ નટવરલાલ ભટ્ટ", pdfId: "1NOhd7ZXRuL14wrS9qMlavbGVNRhMWA58", phone: "No Number" },
    { name: "નટવરલાલ શાંતિભાઈ ભટ્ટ", pdfId: "12i5oN04x7MQ_Yszvu0G8hbV1Jp9Sclbq", phone: "No Number" },
    { name: "બંસી મનીષભાઈ સાવલિયા", pdfId: "1BRxalIv0Z44lm4T0Xyn5-xq5Zv6htT9D", phone: "9909296090" },
    { name: "વૈશાલીબેન ત્રીકમલાલ પંચાલ", pdfId: "1mreMioP7iJqWq_62sJyVkmP5XJXrKsMq", phone: "9429732795" },
    { name: "રાજેશભાઈ આર પારેખ", pdfId: "1bXPRTt0HZw3qPnWMrjKyw_RAh7ca4ckW", phone: "9898689233" },
    { name: "હર્ષિદાબેન મોહનભાઈ વિરડીયા", pdfId: "1wBFSEnYGjeTF2hGiDdYR9pQfo9bUW-jO", phone: "9638863063" },
    { name: "સીમા રોહિતભાઈ પંડ્યા", pdfId: "1CHviJxE33HXW9Q2vdmWQi4ya1M7QCL4a", phone: "9909503242" },
    { name: "વાડીલાલ મંગળદાસ વાળંદ", pdfId: "1fYmYGubGa0nPHtGszRWLPyJOA5oXQVJW", phone: "6354391188" },
    { name: "મીનાબેન વાડીલાલ વાળંદ", pdfId: "1xCAtSLW3_bPBxfrHV1q3W5f0boWBqB9m", phone: "6354391188" },
    { name: "પૂર્ણિમા જયેન્દ્ર પંડ્યા", pdfId: "1NIObcwvW-qcLcd2DlxBXzGvaFsAqZiaz", phone: "7405836377" },
    { name: "મીત શારદુલ હાથી", pdfId: "1aAz4qazF5QRT71Jmr3W5NY0Tj6qw-0Y6", phone: "9662606257" },
    { name: "રેખાબેન રશ્મિકાંત પટેલ", pdfId: "1XVA57Qn0gsXUAfFTmzuG--HeowCzk0S7", phone: "9879547030" },
    { name: "શીલાબેન યુ વ્યાસ", pdfId: "1OEjINBzUa0Uj3pjgrNPRxxb3jt_yEUqw", phone: "8238332271" },
    { name: "દિપ્તી પ્રવીણચંદ્ર ટેલર", pdfId: "1CEl45g6udoumnfatR6CvhW_scoEOWLZk", phone: "9227904430" },
    { name: "જગદીશભાઈ ભરતભાઈ સોલંકી", pdfId: "1shUla4eZtLQB5uRRZLXSzlM2Ycj6FE7a", phone: "No Number" },
    { name: "ગણપતભાઈ બી નાથી", pdfId: "1v2Fv5Tp6-LLwi7l_LVz1W1NYOaqjwsKM", phone: "No Number" },
    { name: "નિરંજના દિનેશભાઈ જાંગલ", pdfId: "1GnscK1NciAKjGqbPS32JjXHfIQBU_MBx", phone: "9819736751" },
    { name: "પી એમ લુણાગરિયા", pdfId: "1Manzb4XfW8EPvxiH8iHK876g2pNnZKR9", phone: "7698160160" },
    { name: "મનોજકુમાર  નાવડીયા", pdfId: "1fvN_uLHXapwRCMl7F-1VwsErEz26l9kE", phone: "8000056148" },
    { name: "હિમાલી અમિતભાઈ ચૌહાણ", pdfId: "1XoaL2WB6pRrw1Na99K6Rb64SYegfVshC", phone: "5265006874" },
    { name: "પરેશભાઈ એલ જોષીપુરા", pdfId: "1i2PrtEpdxUP4AUvikr_yewCWZSKZuTdB", phone: "9033740038" },
    { name: "જીતેન્દ્રકુમાર ભીખાલાલ જાટસણા", pdfId: "1xBOmRTjXJslI64a5vs9rDOfJk6N9My2c", phone: "No Number" },
    { name: "ધવલકુમાર જનકરાય જોષી", pdfId: "1jPkx-ubde1pIPPui9MeegOn6YGG5gxSe", phone: "9428708771" },
    { name: "દેવ રવિભાઈ પરીખ", pdfId: "1WUypli2I8jfDOdXelaJl76xZUAhQdCjR", phone: "7621969006" },
    { name: "ડાહ્યાભાઈ ઝવેરભાઈ આદરોજા", pdfId: "1tcB2baN_iPtzD5B9Abab84pFjvMV1UBc", phone: "9428343455" },
    { name: "સુર્યા ભગીરથ બ્રહ્મભટ્ટ", pdfId: "1Cjc1Nu6vnDrYDAGW7w1x_ZBUOCFlD58y", phone: "No Number" },
    { name: "મીના બી જાગીરદાર", pdfId: "1jTo1NodEb-zuR8C-szMJL8JGW2Q-VUCF", phone: "No Number" },
    { name: "લીલાબેન જયંતકુમાર જોષી", pdfId: "1GaUcM0ITm-tqTxSxN1i8KD8Yw6aUbXKg", phone: "7265027125" },
    { name: "વસંતરાય ડી ચાવડા", pdfId: "1SQd84LfmtaGSK0MMrtlCYex3x888fxHj", phone: "No Number" },
    { name: "પ્રકાશકુમાર મનસુખલાલ મહેતા", pdfId: "1V8NT4HA432hhXtoOW8piTmt6P3wwhcYv", phone: "9726615276" },
    { name: "રામજી વેલજી રાઠોડ", pdfId: "1f_kBScU9aFLPzHyl1vTpCE4R5GzomfA6", phone: "9727868752" },
    { name: "નયના આર. ઠક્કર", pdfId: "1ow7ZcgGZAAdfbReHcEByfbtI2beI3KbF", phone: "9773093156" },
    { name: "સોનલબેન છબીલદાસ મગરુ", pdfId: "19WYcCNmChaB2HLkzffr10-qPsXUSpuK1", phone: "9429297268" },
    { name: "સુષ્મા કમલેશભાઈ શેઠ", pdfId: "11ZXxaz_JHvEgt7OMMGUiulC2FkrhCKiD", phone: "9824522243" },
    { name: "બિંદુબેન જગદીશચંદ્ર કચરા", pdfId: "1PbiN_wIGvRQHqK4oW6Tgd77bKy2vUdxr", phone: "9879747134" },
    { name: "ભાવનાબેન પી. જોષીપુરા", pdfId: "1-o7CPbu4HFq1y23-K9zRI0NjoJav0DsW", phone: "9033740038" },
    { name: "ગોહેલ દોસ્ત જગદીશ", pdfId: "13cZy-s7eZLVS9bZiDwyyCAwKh5oUtIu4", phone: "9428141606" },
    { name: "કૃતિ જય હાથી", pdfId: "1DYuRZXauLCgj2w3n-waoX8sXKkZYqZHB", phone: "9824429058" },
    { name: "કિરણભાઈ આર પંચાલ", pdfId: "1CYEX81m7qwavNR6zOfbJGP6ff9QKmbdL", phone: "7383484817" },
    { name: "ભરતભાઈ ભણસાલી અંજના", pdfId: "1UyDXkwKfloEdU0xHHQbkDTz1yS50ia8I", phone: "No Number" },
    { name: "ત્રિવેદી  અલકા", pdfId: "1K3Nduubo6sL0oQkqiq65fIqnkFpEBW3b", phone: "9879609314" },
    { name: "વિપુલ મલકાણ આશા", pdfId: "1Lp5xlZ-pFtt8asMbGmZxZ91o7ypfF8H_", phone: "No Number" },
    { name: "મહેતા  નિધિ", pdfId: "1naeWKWO3vP9sLanI2jN6c28-5T9smxOm", phone: "No Number" },
    { name: "ભારતી  વડગામા", pdfId: "1WoUNitnz1lF0WOoS04UftfQzbuo1Dfni", phone: "9974028643" },
    { name: "મેઘા નિગમ ટાંક", pdfId: "1C4af4lrG6NiRAoAqtzYvsXBcXYIRh0tH", phone: "4409739707" },
    { name: "સુનેરા અમજદખાન પઠાણ", pdfId: "1Nh76ymuGdew9D9oEglNTk-8EDrYmkJg2", phone: "8141326112" },
    { name: "પંડ્યા  હીના", pdfId: "16Ib1ei9cWbUEAo9hkKysnBDTTK-4Jb9v", phone: "9157420473" },
    { name: "ગુલાબ બી. હિંડોચા", pdfId: "1LuCfnV8lKhi_7Oii7dc0OkeB1O5wiyqr", phone: "9428241680" },
    { name: "જ્યોત્સના જી. હિંડોચા", pdfId: "1gfFz8nyDTwII7M8s8XOHGEP4ze5OvUV_", phone: "No Number" },
    { name: "નયના નાથાભાઈ પરમાર", pdfId: "1A2tNPQlmUDveCG6_V5IrvulqA2fsIs7b", phone: "No Number" },
    { name: "તુષાર જનકભાઈ ભટ્ટ", pdfId: "1-HAc8lWzUhPj-rDq4lOmNBf4a8fW6Ax2", phone: "9898276022" },
    { name: "મીનાક્ષી  વખારિયા", pdfId: "1w3aDRd4CLRGlDIKdVrqYcaF69vdIakaD", phone: "9619230493" },
    { name: "ઋત્વિકા ખીમજીભાઈ પરમાર", pdfId: "18A4LrrJbzPug5B9U_Jda5abEy4fXIoFN", phone: "9099047703" },
    { name: "રૂપાલી ઘનશ્યામભાઈ ગેંગડીયા", pdfId: "1qkLTqN3ftaxYlGAoR5Rf7J9Jyd8x2t7S", phone: "9106212938" },
    { name: "મયુરી ઘનશ્યામભાઈ સોન્ડાગર", pdfId: "1uM2CmxuO1VoNy-QqFEP5H2yEmVCcKHi3", phone: "9429605267" },
    { name: "કૃપાલી દિનેશભાઈ કામળીયા", pdfId: "1Bph9aG2f89TYV5PfZmIeI9wkB5Y1lB02", phone: "9408911280" },
    { name: "દિપાલી ચંદુભાઈ બારૈયા", pdfId: "191UtJGixch6ePKFhB-beEgeoyIIyaPpt", phone: "9998586974" },
    { name: "પ્રીતિ જગદીશભાઈ ચૌહાણ", pdfId: "1vZOqVqoB6pVcUISMEJfnxJ9WeJy9VPWT", phone: "7096981090" },
    { name: "ઋષિતા રાજુભાઈ બારૈયા", pdfId: "113rvfFdIghu2e5lKF4P8SIV3aPqU4P4O", phone: "9687527247" },
    { name: "રુચિતા એ. રાઠોડ", pdfId: "1bZoFjMJ4V8sLiKLhf4scwLYgWIuIZa72", phone: "9328170837" },
    { name: "કિંજલ વિક્રમભાઈ વાઘેલા", pdfId: "1TqsoqzE2JvK9JgkUA4XY5iAaX_R2zJwN", phone: "9879524970" },
    { name: "મહેશ એન. ધીમર", pdfId: "1X4x81YWYwPFyu7KVAL0o3dTyk0Lyh9J6", phone: "7600373588" },
    { name: "રુચાબેન બીપીનકુમાર વ્યાસ", pdfId: "1biucWdGcgnrAtIAMNxmhghJ6NyPNqnlk", phone: "9429698675" },
    { name: "હિમાંશુ રેખાબેન ડાભી", pdfId: "1qaqfX_2vFALFDZFr6KK8dQDDlqvYDzFo", phone: "8999599997" },
    { name: "ભામીની તાપીશંકર કાપડિયા-જાજલ", pdfId: "1wKdvjp9wnpdZCnFlzEjv1LRpHM4uoJrH", phone: "No Number" },
    { name: "રશ્મી  સંપટ", pdfId: "1WEFg0fcVvgTKgT93mL3TXcF-51dGm44O", phone: "9969454312" },
    { name: "કિરણ વિ.  વાજા", pdfId: "1uWIuWuPT_KTEHl-yt1X7s9is-c_zVDBJ", phone: "9723097508" },
    { name: "રિદ્ધિ એ. ભુવા", pdfId: "1lTAWMjyfT7_L8E_YS97ENH_OxP2yu8hz", phone: "9173297156" },
    { name: "બંસી જે. પામક", pdfId: "1Y823_Myct8HI1KVRLMMiTrqPGEd1yB3L", phone: "No Number" },
    { name: "બી.બારૈયા  સંગીતા", pdfId: "1oEYIHRPsTCagfky3JbiCN3TkhHo9xnyF", phone: "8140587646" },
    { name: "પી. સોલંકી સીમા", pdfId: "13uUdHzUXGh7jaElJvNKXYR1L7DvLTPiD", phone: "No Number" },
    { name: "એમ. કંડોરીયા મિત્તલ", pdfId: "1EyVUMrY5orG2cUOn_no3iFknwhtxco9q", phone: "9624537883" },
    { name: "ખુશ્બુ નિલેશભાઈ મિસ્ત્રી", pdfId: "1H5qJgowfJTM3LQxDtqeBdn_k_CIByoPL", phone: "9426371926" },
    { name: "વિદ્યા પંકજકુમાર ઢીમર", pdfId: "13yIwpkogeXcTyQ34rw7LnRY-vRMZ8oRQ", phone: "9276453655" },
    { name: "જયેશકુમાર ગજ્જર શ્રેયા", pdfId: "1ujh9mST6DEVdoHsiTVrZve48umQrLwxr", phone: "9687663650" },
    { name: "સુમિતા જયપ્રકાશ ચૌહાણ", pdfId: "1lWzZTc9HxbEL9g8AaSs6xCtyinFvI5Eu", phone: "9714133835" },
    { name: "રાબિયાબાનુ અબ્દુલઇમ્તિયાઝ શેખ", pdfId: "1zk5V_RMbzZHC_po2gn4_pkWKMzaauD9v", phone: "9913984477" },
    { name: "કૌશિકકુમાર આહિર ખુશી", pdfId: "17pjiTjE7fzcv-qf3xcSEeH3jMcROC8OH", phone: "6357371892" },
    { name: "ભાવેશગીરી ગોસ્વામી વિદ્યા", pdfId: "1qCcExLhiUtFAUO8ZNpxSTBKZRZnMul9s", phone: "9023583678" },
    { name: "ચેતનકુમાર પટેલ આસ્થા", pdfId: "19syCnPADDFO7mvFUo0DC3rIgQwKw0UWk", phone: "9998431655" },
    { name: "પ્રમોદરાય શંકરલાલ દવે", pdfId: "1Ket4KwtYTA51BsSdbhgyVoznjIGPocGe", phone: "9429139085" },
    { name: "પૂજા દિનેશભાઈ ગોંડલીયા", pdfId: "1gNrCpBgAzX9E7bAhZjnQWW_yQ27EzV9g", phone: "9313838228" },
    { name: "દીપિકાબહેન કે. યાદવ", pdfId: "11Ss6ZwCHgaYYt8fa6Vx_f8NCjw1Es405", phone: "9904174648" },
    { name: "કાજલ એચ જોશી", pdfId: "17J6rp7Jgk0nzaZG6O3ZTfxVZjNJTOOzg", phone: "9106422232" },
    { name: "સંગીતાબેન સી જોશી", pdfId: "1g65ac6outzrhGP5lndgjFK9oWQTm7KEX", phone: "9545285384" },
    { name: "રેખાબેન ચીમનભાઈ ચૌધરી", pdfId: "1QMYQvgpd5hF1HzfTnF-EqnX6YJDgJTWc", phone: "9727124926" },
    { name: "રવિના કે. મકવાણા", pdfId: "15KHXPB1uYQjdUrs2IdBJAcVivlZ5Ushz", phone: "No Number" },
    { name: "જ્યોત્સના શ્યમગીરી ગોસ્વામી", pdfId: "18W0fR5VuRb9YOD1eCW-y_nX8iS3rju9G", phone: "9664521440" },
    { name: "રજની એમ. સોલંકી", pdfId: "1eCN3KuqWKj1y9d4rWpbPKvRoB3VT2vJb", phone: "9723781320" },
    { name: "ધ્રુવી જી. વસંતસ્વામી", pdfId: "1eZqgw2YrfhQ76Rns8werParPDu8LduTG", phone: "9016128794" },
    { name: "આયુષી ડી. વાળા", pdfId: "1vKz7GyL-W15pv_hjDtjIPBN152lEYNyW", phone: "9904145470" },
    { name: "પ્રિયંકા એમ. ભાસ્કર", pdfId: "1glzdFdlNLyjpQOjvegpHl_DxzA-qm1DG", phone: "8849728549" },
    { name: "ઋત્વી પી. ખેરાલિયા", pdfId: "1D619iKJIEnVbGHXEseKm_Qh8ntxFk7jH", phone: "7600335025" },
    { name: "ખુશાલી ચંદુભાઈ વડેચા", pdfId: "1D56KCPOo64bYorebiPC65LQ6Zig2TfwJ", phone: "No Number" },
    { name: "ઉમંગ એસ. બગડા", pdfId: "10ftKKofklEBSNxz0QZF9xCiqvLxPXNSQ", phone: "6353003138" },
    { name: "આયુષી રામભાઈ વાઢિયા", pdfId: "1-h1_pa3E5GR0tl0JPNZyXOeE7y6lVl21", phone: "8866288158" },
    { name: "ઉષાબેન ફાંગાભાઈ ચુડાસમા", pdfId: "1seCB0jOC03kDAFH42j8t2EhCTyDz6iGO", phone: "9429223293" },
    { name: "જશ ભાવેશભાઈ પરમાર", pdfId: "141MrMZG9VR-dfd1CEPi6K9-3olxdK7mI", phone: "9879368936" },
    { name: "પ્રિયા એન. કાલેણા", pdfId: "1WOUA3WIx1OzMUJjcv60GwUxtNkdN-5_d", phone: "No Number" },
    { name: "ધ્રુવિતા એન ગોહિલ", pdfId: "1X8bashmTzs5H7BeSni8PhTKHQbvHoZnf", phone: "No Number" },
    { name: "નફીસા કે કુરેશી", pdfId: "1q-n9dpkPp1v8EehibaSSaiz43X3ELaeK", phone: "No Number" },
    { name: "સનાફાતમાં એ મીઠાણી", pdfId: "1oGUDhKlsZ96RXMIod-k9vwm6RK1kE27E", phone: "7016319896" },
    { name: "ખુશ્બુ એચ સિપાહી", pdfId: "1xIGn9iT35rUFg5J07UxPd3brwPLlgUsO", phone: "No Number" },
    { name: "પલક આર પોંકિયા", pdfId: "1pWjEa3Msg6tZkDp1EyuaxsNG_QWgcWtX", phone: "7016319896" },
    { name: "નેન્સી આર મકવાણા", pdfId: "1H_dgYoYwNUNS_c5j9HEGu5O0OB6M7Yfz", phone: "7016319896" },
    { name: "ઈસા બી. દુધાત", pdfId: "1_7tQJHkp1W6MkIu_2VS8era7qYVRZASY", phone: "7016319896" },
    { name: "દયા એસ માધડ", pdfId: "1yFoea8M9yM8HYiZmJkYfDRtoJKncdCnU", phone: "7016319896" },
    { name: "પૃષ્ટિ એમ બુહા", pdfId: "1PosfGS_TceveOE2sVT-nLbyDwE5UK5T8", phone: "7016319896" },
    { name: "ગંગા એચ સોલંકી", pdfId: "1wbtRIs7hCFnFk5OlIiK86ihKwIMnqxbK", phone: "7016319896" },
    { name: "જાગૃતિ રાજેશભાઈ તન્ના-જાનકી", pdfId: "1XYIJy6sFHlYvRYkT9Nj1Bl17RC0VYmZ9", phone: "9974215040" },
    { name: "અનિતા વાસુભાઈ વઘવાણી", pdfId: "1yYMroYRm7-rrmfWRo6lekGuvz_4_rdsP", phone: "8780182030" },
    { name: "પ્રમોદકુમાર મુકુંદચંદ્ર પંડ્યા", pdfId: "1BdyR1zNeNMeOm19ZRpl53RMXq8yLsDD6", phone: "8320583423" },
    { name: "કર્દમ યાજ્ઞિક અમી", pdfId: "1EswUU2GW-aM7puYY-fHh32S0icWEJ81b", phone: "9898599489" },
    { name: "દીપ્તિબેન વ્યાસ રાવલ", pdfId: "1l7zVq_XRU2qKO7XqQsSipOyPUbAA0bei", phone: "7041270451" },
    { name: "ભદ્રા  અલ્પા", pdfId: "1VwkZ4JXpKAWkpT97cVXNJKMbr4eS_I_B", phone: "8879739308" },
    { name: "રોનક મહેશભાઈ બારાઈ", pdfId: "1TkJPds63F_uA4LycM4A1y2CLpDsS-3QA", phone: "9428183709" },
    { name: "પ્રિન્સ એસ પરમાર", pdfId: "1TjvNoFD5Ak3zYLT1_-Cbqw8KqUXaz75Y", phone: "9924584796" },
    { name: "કિશોરકુમાર રતિલાલ ટંડેલ", pdfId: "1mu4C6Utz3l4ZJB90902ipdJII8CeBlTc", phone: "No Number" },
    { name: "હિતેશભાઈ  સુરત", pdfId: "1qi8yI2fhXdfYvMiF8h_nk9owRHVuguTK", phone: "9773146282" },
    { name: "તમન્ના અલ્કેશભાઈ આચાર્ય", pdfId: "1kH-mC8fJ82-La8tth3PYFcCyt9VeXiWh", phone: "8200769601" },
    { name: "સોની માયાભાઈ ભાદરકા", pdfId: "1fsXznPLHOq_WrPftlOFDAkHeGQ5SHGqF", phone: "9727918790" },
    { name: "દોશી  શરદ", pdfId: "15e-C9tHcC5JTGMuUXs8Cp--NW3sSQ54h", phone: "9920111071" },
    { name: "ઉમા સરદભાઈ દોશી", pdfId: "1438sgBx6QHWJ1aumjarc-cVz5MlkTy7Z", phone: "9619481804" },
    { name: "ભગવાનજીભાઈ ભાડેસીયા શીતલ", pdfId: "1OGljR6BSctRjYgL4sOUSzmrUYB5-3G7p", phone: "9624743188" },
    { name: "પ્રવિણાબેન વ્યાસ મહેતા", pdfId: "1OlhcosNDUMt0FC5M-sRP43xzq1rmDu0R", phone: "9313464214" },
    { name: "વાસુદેવ સોમાભાઈ પટેલ", pdfId: "148tm4gEucqQvtQC-x9px-i-C183gGz63", phone: "9825671181" },
    { name: "વેના રાજેશભાઈ નારોલા", pdfId: "1t3tx5hWUs4Chy2yJhERQuQVhkm-9X2bC", phone: "No Number" },
    { name: "ધીનલ સુરેશભાઈ ગુણવિત", pdfId: "1LKVBabwN6PkYjoTOFLvM-NNMyANBeH-z", phone: "9265556705" },
    { name: "નિતેશ નિહર્ષ પ્રજાપતિ", pdfId: "1tnVSt2gxgx_4c0AIJL5trlQmGJ53PSXe", phone: "9662056547" },
    { name: "કોકિલા એન મિસ્ત્રી", pdfId: "1GbgDBZqePC30x4VGB0Y4PWdY2-xDxUf_", phone: "9825862739" },
    { name: "શ્યામભાઈ મા. દેસાઈ", pdfId: "1U-uYdmuhB_K92CHuWPtZH5wHOiNQaXBQ", phone: "No Number" },
    { name: "આરસોનપાર  પ્રતિમા", pdfId: "1YFo1hYFFsvW3lnJyjBpAxL1rJltihoVC", phone: "No Number" },
    { name: "નિલેશ પીઠડીયા બીના", pdfId: "1OqhpvVLX67fn7CiefCn9PaMayndFrrDd", phone: "7018152881" },
    { name: "નિધિ જયેશભાઈ વ્યાસ", pdfId: "17iq8rpSArkcgXrbf6qADv37DMlSwoBgw", phone: "9687373463" },
    { name: "રોહિણી હિતેશ જોશી", pdfId: "1o9gyH-r0wCiRPD6oe8WeaqZCjdhO0W0t", phone: "9428795296" },
    { name: "અનવરઅલી ઈબ્રાહીમભાઇ વોહરા", pdfId: "1c7eCN3Val-KYwd49gaBbCIdy8RYmtzqH", phone: "9824685014" },
    { name: "વિશ્વા મેહુલકુમાર સોલંકી", pdfId: "1sKcmV3aS4DmFwCGTs91uSY0T8MCetDAe", phone: "No Number" },
    { name: "નક્ષ એસ. પટેલ", pdfId: "1AcgzbdY2LPEdUqY_vYlxG0VKEtRHTBuD", phone: "7600881881" },
    { name: "દ્રષ્ટિ ચિંતનકુમાર ગોહિલ", pdfId: "1hwKX8tNXT2BY44Nb_XEJxk5knykKieVy", phone: "No Number" },
    { name: "તૃપ્તિ હિતેન્દ્રભાઈ પટેલ", pdfId: "15dzX7PBEGQtTsmJoPNbyPf-HQBcc-Ovb", phone: "No Number" },
    { name: "હિતાક્ષી અનિલકુમાર બારડ", pdfId: "11fm9nEYPe1AHgcjmUbyGoomqWsUcsmHU", phone: "No Number" },
    { name: "ચારવી આર. ઠાકોર", pdfId: "1yjRg4akGCPXuMJ9JIFJMFBcTnVOYzV5m", phone: "No Number" },
    { name: "આદિત્ય જગદીપસિંહ પરમાર", pdfId: "1B81SwonAZwA8AnL0HKNA7xXLw-bkjR4i", phone: "9773467319" },
    { name: "જોયા સમદભાઈ મેમણ", pdfId: "14J-AW6iAsingeYjy--HQJaaQ6QfvgZeT", phone: "7202023177" },
    { name: "જૈનબ રિયાઝભાઈ મેમણ", pdfId: "1xvcym1aUSxh7I7THrFAV9g099RT_us1N", phone: "9737584792" },
    { name: "રિધમ મહેશભાઈ ચાવડા", pdfId: "18X_YRqzwK-CFTnOeXJ6gJBhENXq9b6J4", phone: "7572815777" },
    { name: "હીયા અમીરકુમાર પટેલ", pdfId: "17tcXkpJv-aYlCQA6OzFMibx0Z9XDaKN9", phone: "7861816698" },
    { name: "કોર હરદીપસિંહ ગૌરપ્રીત", pdfId: "11tNG6S07hYblbK8gnNUgZRyhkJ5j93yR", phone: "9429032210" },
    { name: "વર્ષા અંબિકાપ્રસાદ યાદવ", pdfId: "11nOBUneIDGUE578K3HF10kYV3Hmip5ZZ", phone: "7874953310" },
    { name: "રૂપેશ સુરભાઈ જહા", pdfId: "1AZGa5M4TTm37fgxnX6Wr4oxNZK9Z5Ips", phone: "9723372637" },
    { name: "પ્રિયાંશી એસ. પરમાર", pdfId: "1Mda9UGPrjv-CGwyy40gRinTzmZ3HJ7cn", phone: "9687100425" },
    { name: "ભવ્યા દર્પણભાઈ પટેલ", pdfId: "15j-WoDIN1VcKhOFqvr2orLAw621fxFkQ", phone: "9737073915" },
    { name: "લીઝાબેન મોંહમદઈરફાન વોહરા", pdfId: "1VA-h7mWgAobKpD6XqqRoGQtQuygSz1D4", phone: "9824685014" },
    { name: "મિહિર હરસુખભાઈ ભલાણી", pdfId: "1NYo65sZdhhHiI0L4ru4x42lb8zFJKly7", phone: "6354449688" },
    { name: "સેજલ એ પારેખ", pdfId: "1GUnpDSZZueTeqPaN1bLENef_ovaq4cjN", phone: "9924411288" },
    { name: "અવંતિકા વિજયભાઈ સોલંકી", pdfId: "1_R_xHKVHfrOxy1KmzW4K983URDXEXsJ6", phone: "9924288370" },
    { name: "શ્રુતિ કમલેશભાઈ પેથાણી", pdfId: "19pR7JuKCUpkeaI25SojyE7ek_pt3R3Oo", phone: "9998434845" },
    { name: "દીપક ધનજીભાઈ બાંભણિયા", pdfId: "1TyiXzO0lbuqvgpezKIIdcJ0n73xNQ3xt", phone: "9925927817" },
    { name: "ભારતી ર. સોની", pdfId: "17AZrX4C9XcbO7orQsBNIHgmZljjr3Y8e", phone: "9426427968" },
    { name: "પાર્વતીબેન બાબુભાઈ સોંદરવા", pdfId: "1qOS9Q3g08Za25VhFUqpvp1WFOaFkQ6Fs", phone: "9638515073" },
    { name: "સુધાબેન એમ ઓડેદરા", pdfId: "1bjidvwA6KkO1MTYc5CK04g2qZdit6nT-", phone: "No Number" },
    { name: "અંજનાબેન પ્રફુલભાઈ વસાવડા", pdfId: "124512jBH7Q4tBl0kUzDWu2AxqNnsVlMB", phone: "7698932750" },
    { name: "સંજના મુકેશભાઈ ગલસાણીયા", pdfId: "1LvxkgHdhYhzlvEdqf91568ZIC52cq7cb", phone: "9537015810" },
    { name: "ગીરીશભાઈ એસ ત્રિવેદી", pdfId: "1qA9QuMUeBCUbcJwOEC2kGWlIsANtTl4f", phone: "9374141981" },
    { name: "હસ્તી ભાવેશ શેલાર", pdfId: "1NdsarPw8zpJPDenDGdC2WkRtYALmeY8q", phone: "No Number" },
    { name: "સાહિલ મગનભાઈ મકવાણા", pdfId: "1Pj2jBbxHBd-fXmVTtP51Ap0AOJMgnlGT", phone: "No Number" },
    { name: "બંસી પ્રવીણચંદ્ર અધ્યાનું", pdfId: "1yZ6H0CSh7GXEl0WshHdQeRuYhBIJOqr5", phone: "7624053068" },
    { name: "જેનીસ સંજયભાઈ ગેડિયા", pdfId: "1bZFQnC05JKI-wRdhAArOq4mLcVibDZM6", phone: "9106232561" },
    { name: "હેમાલી હરેશભાઈ પટગીર", pdfId: "1IXwWKDz_LqMRDmWROzrpJ8WjSO4Mp0GL", phone: "9313744195" },
    { name: "દયા ટી. કાછડ", pdfId: "1mwsmx-c98TTTuhx80iiNuqnLBXe0APYF", phone: "9023222863" },
    { name: "સ્નેહા સુરેશભાઈ ચૌહાણ", pdfId: "1Txo7aOBDLIP6RsaeRZOxttxsiOgp8Z9L", phone: "6352751998" },
    { name: "ખુશાલી ધીરુભાઈ કવાડ", pdfId: "1UsznXzH2wCrhbJDeaQPXXqbT4loT9t2i", phone: "9265056768" },
    { name: "આશા લાલજીભાઈ કુકડીયા", pdfId: "1XIF_RyhJfNbUg68LnyyibCU0dLg-S43-", phone: "No Number" },
    { name: "નંદની રાજુભાઈ ટાંક", pdfId: "1RBWl1rqieSvKT6aQ6ghq4rq3fvtq4qSG", phone: "9662964530" },
    { name: "તુલસી ભનુભાઈ પરમાર", pdfId: "1Oyb8kQ-GLTXnlXGVNE8jth_GUvknJm_4", phone: "9016055992" },
    { name: "કૃપાલી સી. ટાંક", pdfId: "11FQsp9ZVSk1tY8uHTAazzWqjeNs-oVkM", phone: "9428560461" },
    { name: "આશા ઉકાભાઇ મેવાડા", pdfId: "1iPDi0qCKTAzfiM3QxF692aR1pbfVB0-t", phone: "6352755938" },
    { name: "દક્ષિતા ભરતભાઈ ગોંડલીયા", pdfId: "1GcRjvktYo_mzCfPptI55cD3Ek8Os6PGL", phone: "9316225857" },
    { name: "પાયલ ચંદ્રેશભાઇ ખખ્ખર", pdfId: "1M2Rslpzx2qQJBXktz1gR18Wy1puK1OnG", phone: "6359157415" },
    { name: "ચંદ્ર હિંમતલાલ સુરેશ", pdfId: "1i5ZtNEbYLffFL8gId4xZecBoJq-5GaCG", phone: "9377567835" },
    { name: "ધવલ કૌશિકભાઈ પંડ્યા", pdfId: "1gTAoHMke3gNMCywyOMKoMDf0j_Ml99AH", phone: "8320106041" },
    { name: "કેવલ સામતભાઈ ચાંવ", pdfId: "1Fficv-KalASye0gmbPjeJDPSFSDOMCAh", phone: "9081730224" },
    { name: "તસ્વીર દિનેશભાઈ પરમાર", pdfId: "1RhJwZlAWtHotKhG5tMs4O6x2Lo0k2IpX", phone: "9725136352" },
    { name: "વંશ નીતિનભાઈ વિરડીયા", pdfId: "1kuIOKRDmpE8HYVnBRUT2aZk1Pq-KS5CV", phone: "9879890344" },
    { name: "મનેષ ટી. અજનાર", pdfId: "1F2cxLO3vmJrEqBdup0L8Pi2cNBeSMOSc", phone: "9023920478" },
    { name: "શૈલ્વી હિંમતભાઈ ગોધાત", pdfId: "1QDIu6lWQZ4AUvexpBb3D4p3uKqY6I04H", phone: "No Number" },
    { name: "વિપુલ એમ. અમલીયાર", pdfId: "1ZL49asF6BVErAKqvqsXyW_sBwsjw3NpY", phone: "9512912007" },
    { name: "ક્રિષ્ના રાજેશભાઈ કિકાણી", pdfId: "1s3yRHBVmavMUs_5q8FVlL3ckq7224iUl", phone: "9925540197" },
    { name: "પ્રેક્ષા ચતુરભાઈ કિકાણી", pdfId: "1Y1QAYFanuSMwe36eLX_eig4-6Nq8pb9V", phone: "9978361796" },
    { name: "ખુશી ભાવેશભાઈ ગોજારીયા", pdfId: "19l7uHkpYgEaYKF1kNpeRAq2NSn-0VRXh", phone: "9978134443" },
    { name: "રણછોડ કીનુભાઈ મોહનીયા", pdfId: "1JF0NtL5tcAUwV5KbEht451op7tBLkbAS", phone: "7861868566" },
    { name: "જાગૃતિ સુરેશભાઈ મેવાડા", pdfId: "13r_0citQMR6nDFYijCrhabYaQmqihq17", phone: "9537095715" },
    { name: "રેખા કીનુભાઈ મોહનીયા", pdfId: "1jGMDBHWH8juzu5AiKwwQzH7_CsR2dQu4", phone: "9023518259" },
    { name: "નેહલ કાળુભાઈ મહિડા", pdfId: "16BeS4BHca3Tdwedw9MgwzJTooy3Bo9vS", phone: "9925445658" },
    { name: "કોમલ એમ. વાળા", pdfId: "1eD-xugB-MomJQZE275T5wSenig4HiKaY", phone: "7820024216" },
    { name: "ભાવિક એમ. દાફડા", pdfId: "1WUnklEHKyy7BT606g5mA1DM-LhCeCq5u", phone: "6353189338" },
    { name: "પ્રિયાબેન કિશોરભાઈ કારીયા", pdfId: "1oy3RuiWY9PuQrZznYXSacMB5GjekSkh3", phone: "9408456053" },
    { name: "જયમિનકુમાર જયંતીભાઈ ગોહિલ", pdfId: "1iiIbGdzP58SbrdckrqcropBBgnkwHv6c", phone: "9737600450" },
    { name: "પ્રકાશભાઈ પરબતભાઈ બારેજા", pdfId: "1XG-mH82bqxubT7kKGvxUGEpsgAQROQbP", phone: "9662975063" },
    { name: "નિરંજના સી. જોશી", pdfId: "1fWynQ8aSS2XBTqqZ0wEJRXKIxJEbE_OD", phone: "9820637645" },
    { name: "રાજેન્દ્ર કે. હાથી", pdfId: "12QB2XrUzl4eVi4JGvMmzctYBMJbpIcXM", phone: "9824489517" },
    { name: "ફાલ્ગુની રાકેશભાઈ રાઠોડ", pdfId: "19roHzEji2dPbsk5akRUy6xGfHDjCtAlT", phone: "No Number" },
    { name: "દિલીપ કે. પટેલ", pdfId: "1WlySvFHBpgKZ2fg8UjZ0qM5VgOAxpDbb", phone: "8401751946" },
    { name: "વનિતા કે. કોટડીયા", pdfId: "16MpBcnJT0ZggrReAZftcw0AMGODZhlBY", phone: "9428189900" }
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
