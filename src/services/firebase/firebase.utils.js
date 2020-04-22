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

  // this function is for taking the user data and store it in our firestore Database
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          //if there isn't a Snapshot, we will create a Data for this users with the following try.
          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          } catch (error){
            console.log('error creating user', error.message);
          }
      }

      return userRef;
  };

  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

