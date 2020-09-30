import firebase from "firebase";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDB9HOwm-s4X2ZUv9ZJtUP0gfvX4ERn2cI",
  authDomain: "twitter-growth-hacker.firebaseapp.com",
  databaseURL: "https://twitter-growth-hacker.firebaseio.com",
  projectId: "twitter-growth-hacker",
  storageBucket: "twitter-growth-hacker.appspot.com",
  messagingSenderId: "670422029636",
  appId: "1:670422029636:web:709289f52622e7bce7b311",
  measurementId: "G-Y4RQ2ZRLHV",
});

export const auth = firebase.auth();

export default firebase;
