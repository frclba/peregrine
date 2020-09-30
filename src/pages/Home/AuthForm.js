import React from "react";
import firebase, { auth } from "../../api/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const AuthForm = ({ setLoading }) => (
  <StyledFirebaseAuth
    uiCallback={(ui) => console.log("hello", ui)}
    uiConfig={{
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => setLoading(false),
      },
    }}
    firebaseAuth={auth}
  />
);

export default AuthForm;
