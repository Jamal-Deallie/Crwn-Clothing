import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOehK9DS04Ka2VGB0QEKvwnZn_GcM8_2w",
  authDomain: "crwn-db-11357.firebaseapp.com",
  projectId: "crwn-db-11357",
  storageBucket: "crwn-db-11357.appspot.com",
  messagingSenderId: "964256367163",
  appId: "1:964256367163:web:76c355aebafee16811921e",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
