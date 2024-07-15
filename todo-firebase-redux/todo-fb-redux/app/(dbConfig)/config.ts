// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgdDH-VS-EbeXdAyCilUQnSXI_-6aPnBI",
  authDomain: "todowithredux-3dcad.firebaseapp.com",
  projectId: "todowithredux-3dcad",
  storageBucket: "todowithredux-3dcad.appspot.com",
  messagingSenderId: "302674150017",
  appId: "1:302674150017:web:0b94476fc6651dc254c380",
  measurementId: "G-H6F69NS04C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
