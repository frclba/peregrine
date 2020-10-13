import firebase from "./firebase";
const dotenv = require("dotenv");
const Twitter = require("./twitter.js");

dotenv.config();

const config = {
  CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET,
};

export const getCollection = async (name) => {
  const db = firebase.firestore();
  return await db.collection(name);
};

export const getAllFromCollection = async (name) => {
  const collection = await getCollection(name);
  const snapshot = await collection.get();
  return snapshot.docs.map((doc) => {
    console.log(doc.data());
    return doc.data();
  });
};

console.log("hi twitter");

const twitter = new Twitter(config);

tweet();

async function tweet() {
  const response = await twitter.tweet(`A2Z 4EVER ${Math.random()}`);
  console.log(response.id);
  console.log(response.text);
}