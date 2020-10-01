const functions = require("firebase-functions");
const db = require("./firebase/db");
const express = require("express");
const bodyParser = require("body-parser");

// routes
const scrapeRouter = require("./routes/scrape");

const app = express();
const main = express();

main.use("/api/v1", app);
main.use(bodyParser.json());

app.use("/scrape", scrapeRouter);

exports.server = functions.https.onRequest(main);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
