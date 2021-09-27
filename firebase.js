import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDn6JULejoGz7-gR9rNRoQXQlXCer6PYuI",
    authDomain: "whatsapp-a9c28.firebaseapp.com",
    projectId: "whatsapp-a9c28",
    storageBucket: "whatsapp-a9c28.appspot.com",
    messagingSenderId: "65456953804",
    appId: "1:65456953804:web:8cf00aefce24a303116569",
    measurementId: "G-2LZHH4S73P"
  };

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();


const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };