// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4kADx2jQwTx_Gr3xs9pqHds8jT99LfPE",
  authDomain: "todolist-6.firebaseapp.com",
  projectId: "todolist-6",
  storageBucket: "todolist-6.appspot.com",
  messagingSenderId: "261327215341",
  appId: "1:261327215341:web:172ae11577692b58270ae4",
  measurementId: "G-WRDQRY9YS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
