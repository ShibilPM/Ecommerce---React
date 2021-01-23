import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCn50zPD9FtMjGg78tftysfLLaPEAvL9DM",
  authDomain: "petydb-5341c.firebaseapp.com",
  projectId: "petydb-5341c",
  storageBucket: "petydb-5341c.appspot.com",
  messagingSenderId: "838131477140",
  appId: "1:838131477140:web:6ed7637ca5ba4e55222281",
  measurementId: "G-E2P1VBXVSE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
