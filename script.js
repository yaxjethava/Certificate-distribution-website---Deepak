// Array of objects to store phone number, name, and PDF ID
const certificates = [
    { phone: "9619583951", name: "શ્રી સોનાલીબેન શાહ", pdfId: "1lZcLuxfzV6vZqv_-Kjaxykyyeoeuqal3" },
    { phone: "9913731684", name: "શ્રી દિનેશભાઈ લલિતભાઈ જોષીપુરા", pdfId: "12zuP9YdzohEpJqTr3IwpH4GcOYkV7ZH9" },
    { phone: "9023130662", name: "શ્રી રીનાબેન રણમલભાઈ ભાટુ", pdfId: "1BPla1ZP8Fyyi-UpV90gCuEXV3A16siAE" },
    { phone: "9974009042", name: "શ્રી નટવરભાઈ આહલપરા", pdfId: "1rzuayoLeLdlY1WEZmJO4CObrybsUq5vL" },
    { phone: "9427244251", name: "ડૉ. ધીરજકુમાર વલ્લભજી વ્યાસ", pdfId: "1_T6MONkBqbTlEjFeKB_iNX-s5npKXrZq" },
    { phone: "9824079403", name: "શ્રી ઉષાબેન એસ. શારડા", pdfId: "1aSLTp8aUgMbvfM7--xVqcDGLaR5hM1uc" },
    { phone: "9979312028", name: "ડૉ. રાધિકા રાહુલ ટીક્કુ", pdfId: "1J5NyqbRVe9Op7I0Q3KygVKKJN4t9DbfH" },
    { phone: "8200454521", name: "શ્રી જયસુખભાઈ લાલજીભાઈ જીકાદરા", pdfId: "1SHhhnRB-WHkQrkGHASwkZRS-HgleLJ1F" },
    { phone: "No Number", name: "શ્રી બિંદિયા સંજયભાઈ દામણી", pdfId: "1mXXrs4H7DbsZ4xCNKlde0HXQ3eKyPF2l" },
    { phone: "8200006894", name: "શ્રી નેમીષાબેન ઘનશ્યામભાઈ કસવાળા", pdfId: "1bimklWcZnrDMt-QEuor4nhLagS4aVmSz" },
    { phone: "9429272564", name: "શ્રી દેવાંગી એમ. બારૈયા", pdfId: "1HtqseYrrkaM10GROZ1GGPzY-pgIobvv7" },
    { phone: "8200868302", name: "શ્રી ખુશી રાજેશભાઈ વિરડિયા", pdfId: "1FoEZoLPTFbdo9BnHD4ST-K0QwNO2ORE5" },
    { phone: "8320671115", name: "શ્રી ભૂમિકાબેન અલ્પેશકુમાર પ્રજાપતિ", pdfId: "17yc2ShYtO_Qwjc25380c95sKmCSepAbh" }
];

    
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
