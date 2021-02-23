import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBYzvOsI4HXv4PQe6P6wPsjUj5_fpMxtOg",
  authDomain: "jobportal-f41c9.firebaseapp.com",
  projectId: "jobportal-f41c9",
  storageBucket: "jobportal-f41c9.appspot.com",
  messagingSenderId: "382282188447",
  appId: "1:382282188447:web:38036aa3ed40269bc984aa",
  measurementId: "G-W9E3HN4YHL"
}
  

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  console.log(snapShot);
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  

 
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;