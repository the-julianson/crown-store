import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDHxMepYS9p72ndlXshTtZAUkjTLPaf6gM",
    authDomain: "crown-db-7357e.firebaseapp.com",
    databaseURL: "https://crown-db-7357e.firebaseio.com",
    projectId: "crown-db-7357e",
    storageBucket: "crown-db-7357e.appspot.com",
    messagingSenderId: "515845123179",
    appId: "1:515845123179:web:6cd1782b250a21317b152e",
    measurementId: "G-W6Z4937HG5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

