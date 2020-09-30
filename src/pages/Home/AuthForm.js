import React from "react";
import firebase, { auth } from "../../api/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const AuthForm = () => (
  <StyledFirebaseAuth
    uiConfig={{
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    }}
    firebaseAuth={auth}
  />
);

export default AuthForm;
