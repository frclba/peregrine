import firebase from "firebase";
import dotenv from "dotenv"

dotenv.config();

// Initialize Firebase
firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-growth-hacker.firebaseapp.com",
  databaseURL: "https://twitter-growth-hacker.firebaseio.com",
  projectId: "twitter-growth-hacker",
  storageBucket: "twitter-growth-hacker.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
});

export const auth = firebase.auth();

export default firebase;
