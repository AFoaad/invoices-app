import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBimkN1_yzcq5RKl9y_TzBz9a9_2WkEnlU",
  authDomain: "invoiceapp-yt.firebaseapp.com",
  projectId: "invoiceapp-yt",
  storageBucket: "invoiceapp-yt.appspot.com",
  messagingSenderId: "881957797437",
  appId: "1:881957797437:web:060e1e8ee0a7821100f454",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
