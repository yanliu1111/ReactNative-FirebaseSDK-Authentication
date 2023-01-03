import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "ENTER YOUR API KEY HERE",
  authDomain: "ENTER YOUR AUTH DOMAIN HERE",
  projectId: "ENTER YOUR PROJECT ID HERE",
  storageBucket: "ENTER YOUR STORAGE BUCKET HERE",
  messagingSenderId: "ENTER YOUR MESSAGING SENDER ID HERE",
  appId: "ENTER YOUR APP ID HERE",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
