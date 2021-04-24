const functions = require('firebase-functions')
const promisify = require('util')
const { GoogleSpreadsheet } = require('google-spreadsheet')
const keys = require('./sheets.json')
const doc = new GoogleSpreadsheet('1etDwYFtHCyzikGERAV209DzZPr4E2hBlUPnpkckTd-o');


// https://docs.google.com/spreadsheets/d/1EWjLHUN15DA2bCXIDvTw_C1PY4eSbqQDL4YQYmn6yW8/edit?usp=sharing

exports.handleCough = functions.https.onCall(async (data, context) => {
    console.log(data);

    return true;
    
    let m = await doc.useServiceAccountAuth({
        client_email: keys.client_email,
        private_key: keys.private_key,
    });



    

    let t = new Date().toString()

    await doc.loadInfo();
    const sheet = await doc.sheetsByIndex[0];
    await sheet.addRow(
        {   
            "Diagnosed": data.diagnosed, 
            "Condition": data.condition, 
            "Fever": data.symptoms.has_fever, 
            "Cough": data.symptoms.has_cough, 
            "Shortness of breath": data.symptoms.has_shortnessOfBreath, 
            // "Fatigue":data.symptoms.has_fatigue,
            "Sore throat": data.symptoms.has_soreThroat, 
            "Runny Nose": data.symptoms.has_runnyNose, 
            "Chest Pain": data.symptoms.has_chestPain,
            "Diarrhoea":data.symptoms.has_diarrhoea,
            "Nausea":data.symptoms.has_nausea,
            // "Contact Number":data.cn ? `'${data.c}` : "",
            "Contact Number":data.number,
            "Risk Percentage":data.riskP,
            "Cough Link":data.downloadURL,
            // "Data Consent":data.dataConsent,
            "Age":data.age,
            "State":data.state,
            "Gender":data.gender,
            // "No Symptoms":data.symptoms.no_symptom,
            // "Longitude":data.lon,
            // "Latitude":data.lat,
            "Date and Time":t,
            "Email":data.email,
            "Location":data.location
        }
    );

    return {
        success:true
    }
  
});