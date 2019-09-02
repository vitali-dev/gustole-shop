import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA7h212eFq27uumJojac7-A1ATic2xwp2w",
  authDomain: "gustole-db.firebaseapp.com",
  databaseURL: "https://gustole-db.firebaseio.com",
  projectId: "gustole-db",
  storageBucket: "",
  messagingSenderId: "445808879893",
  appId: "1:445808879893:web:da84861ec64469d3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;