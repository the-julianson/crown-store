import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //if there isn't a Snapshot, we will create a Data for this users with the following try.
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

//this function allows me to programatically fill the firestore with the data
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  //firestore create a collectionRef always
  console.log(collectionRef);

  // batch from firestore allows us to batch our firing to the store (so it will fire all the data at once, instead one at a time)
  const batchRequest = firestore.batch();
  //forEach does not return a new array like map
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batchRequest.set(newDocRef, obj);
  });

  // now that I have my batch of data to request (set) I can commit
  return await batchRequest.commit();
};

//function to get the data for the shop page from firestore
export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    //in the .doc we get an array (that is why we can apply map), but we want an object.
    // we destructure the title and items from the .data() that comes with the .doc
    const { title, items } = doc.data();

    //we are going to return an object here
    // encodeURI comes with javaScript, it allows us to pass any character that can't be encoded in URL path and it will convert it to something
    //that actually can be encoded.
    // doc actually provides us with an ID so we will use that.
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  // using a reduce function to transform an array into an object.
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
