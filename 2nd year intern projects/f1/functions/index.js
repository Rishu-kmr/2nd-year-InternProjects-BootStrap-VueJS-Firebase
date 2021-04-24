
const functions = require('firebase-functions');
const promisify = require('util')
const { GoogleSpreadsheet } = require('google-spreadsheet');
const keys = require('./sheets.json')
const doc = new GoogleSpreadsheet('1etDwYFtHCyzikGERAV209DzZPr4E2hBlUPnpkckTd-o');


exports.handleCough = functions.https.onCall((data, context) => {
  console.log(data);
    return `hello-sdf;klads`;
    //  await doc.useServiceAccountAuth({
    //     client_email: keys.client_email,
    //     private_key: keys.private_key,
    // });

    // let t = new Date().toString()

    // await doc.loadInfo();
    // const sheet = doc.sheetsByIndex[0];
    // await sheet.addRow(
    //     {   
    //         "Diagnosed": data.diagnosed, 
    //         "Condition": data.condition, 
    //         "Fever": data.symptoms.has_fever, 
    //         "Cough": data.symptoms.has_cough, 
    //         "Shortness of breath": data.symptoms.has_sob, 
    //         "Fatigue":data.symptoms.has_fatigue,
    //         "Sore throat": data.symptoms.has_sorethroat, 
    //         "Runny Nose": data.symptoms.has_runnynose, 
    //         "Chest Pain": data.symptoms.has_chestpain,
    //         "Diarrhoea":data.symptoms.has_diarr,
    //         "Nausea":data.symptoms.has_naus,
    //         "Contact Number":data.cn ? `'${data.cn}` : "",
    //         "Risk Percentage":data.riskP,
    //         "Cough Link":data.downloadURL,
    //         "Data Consent":data.dataConsent,
    //         "Age":data.age,
    //         "State":data.state,
    //         "Gender":data.gender,
    //         "No Symptoms":data.symptoms.no_symptom,
    //         "Longitude":data.lon,
    //         "Latitude":data.lat,
    //         "Date and Time":t,
    //         "Email":data.email,
    //         "Location":data.location
    //     }
    // );
    // return {
    //    success: true
    // }
});