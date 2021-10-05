import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlMa4VOMQBu7M6tn89af6ELtKnnWkyHSs",
  authDomain: "messenger-rn-build.firebaseapp.com",
  projectId: "messenger-rn-build",
  storageBucket: "messenger-rn-build.appspot.com",
  messagingSenderId: "303190015",
  appId: "1:303190015:web:939b4437f762f0a06521ca",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
