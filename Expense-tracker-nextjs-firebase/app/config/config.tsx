// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWNkKR5BJJZqPTwaz2HJOLxM8TfGZLVwc",
  authDomain: "expense-tracker-576e8.firebaseapp.com",
  projectId: "expense-tracker-576e8",
  messagingSenderId: "704750310333",
  appId: "1:704750310333:web:cdda85453a2b5b1fc478d4",
  measurementId: "G-C9MZ6EX2H4",
  storageBucket: "gs://expense-tracker-576e8.appspot.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
