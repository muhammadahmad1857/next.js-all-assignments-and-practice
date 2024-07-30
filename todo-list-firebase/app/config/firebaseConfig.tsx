// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRKAP-FgyyT7a6N_n-4cNuqXEacFfeyBM",
  authDomain: "to-do-app-29ed1.firebaseapp.com",
  projectId: "to-do-app-29ed1",
  storageBucket: "to-do-app-29ed1.appspot.com",
  messagingSenderId: "772314497794",
  appId: "1:772314497794:web:0be619dd8ab9d19929f81b",
  measurementId: "G-XHCNX9XH7H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)


export default db;
