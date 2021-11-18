const functions = require("firebase-functions");
const gpaskMethodology = require("./scripts/src/gpask").main

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.gpaskMethodology = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', "http://localhost:5000")
    response.set('Access-Control-Allow-Methods', 'GET, POST');
    response.set('Access-Control-Allow-Headers', '*');
    response.set('Access-Control-Max-Age', 86400);

    functions.logger.info("Hello gpask!", {structuredData: true});
    
    const { 
        hardskill,
        numberClass, 
        numberMaxStudent, 
        hardSkillWeight,
        numberStudentToGroups
    } = request.body

    response.send(gpaskMethodology(numberClass, numberMaxStudent, hardskill, hardSkillWeight, numberStudentToGroups));
});