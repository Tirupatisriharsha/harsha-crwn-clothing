import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAbKEmgBzZlgQHcf74QZbnSWVcu71eZ4XA",
    authDomain: "harsha-clothing-db.firebaseapp.com",
    databaseURL: "https://harsha-clothing-db.firebaseio.com",
    projectId: "harsha-clothing-db",
    storageBucket: "harsha-clothing-db.appspot.com",
    messagingSenderId: "388489472497",
    appId: "1:388489472497:web:f8d863096b885c28563c50",
    measurementId: "G-T2NXTWLB5T"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
      }
      catch(error){
        console.log('error at user creation: ', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;