const functions = require("firebase-functions");
const db = require("./firebase/db");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const main = express();

main.use("/api/v1", app);
main.use(bodyParser.json());

exports.server = functions.https.onRequest(main);

app.get("/warmup", (request, response) => {
  response.send("Warming up friend.");
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
