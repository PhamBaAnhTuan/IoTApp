// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB3t8GGvPRoEjZHMq3AUZQSGgTT-_E_hc",
  authDomain: "smarthomeapp-b09a9.firebaseapp.com",
  databaseURL: "https://smarthomeapp-b09a9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smarthomeapp-b09a9",
  storageBucket: "smarthomeapp-b09a9.appspot.com",
  messagingSenderId: "593565339478",
  appId: "1:593565339478:web:a580a048e6e78df814d0f7",
  measurementId: "G-7CYYYKDY19"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
