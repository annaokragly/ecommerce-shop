import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBYzPkLAVX9BtY1wmo-vTZ_lFO4E8Z2DWw",
    authDomain: "ecommerce-app-dbb.firebaseapp.com",
    databaseURL: "https://ecommerce-app-dbb.firebaseio.com",
    projectId: "ecommerce-app-dbb",
    storageBucket: "ecommerce-app-dbb.appspot.com",
    messagingSenderId: "138886627858",
    appId: "1:138886627858:web:b6166ddc122c2db77c8ecb"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapshot = await userRef.get();

      if (!snapshot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch (error) {
              console.log('error creating user', error.message);
          }
      }

      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;