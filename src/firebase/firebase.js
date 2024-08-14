// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt6QeurVopDyBa5-KnaQ-wHb5UJ-6Msbc",
  authDomain: "royal-money-a4ea5.firebaseapp.com",
  projectId: "royal-money-a4ea5",
  storageBucket: "royal-money-a4ea5.appspot.com",
  messagingSenderId: "495484845372",
  appId: "1:495484845372:web:31ebcc0ecfd83645ff7239",
  measurementId: "G-FDBY3HS2SY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();

export { app, db, auth, storage };