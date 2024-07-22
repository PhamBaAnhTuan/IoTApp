import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "@firebase/auth";
import { getDatabase } from "firebase/database";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDKkY4XyAP1SF3PKWzesXgfP2FZPnhy9jA",
  authDomain: "iotapp-fbecd.firebaseapp.com",
  databaseURL: "https://iotapp-fbecd-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "iotapp-fbecd",
  storageBucket: "iotapp-fbecd.appspot.com",
  messagingSenderId: "990580715854",
  appId: "1:990580715854:web:6969c318ef7743638c6e1f",
  measurementId: "G-L403ZMHGTH"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_DATA = getDatabase();