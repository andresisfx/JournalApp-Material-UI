// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyCHnMetXZd1jLgf2uJqLTUgEz_Z4WtiWUg",
  authDomain: "react-redux-a0c4b.firebaseapp.com",
  projectId: "react-redux-a0c4b",
  storageBucket: "react-redux-a0c4b.firebasestorage.app",
  messagingSenderId: "777189220737",
  appId: "1:777189220737:web:b09a2aab7895f722f6c880",
  measurementId: "G-LKERMK2ZEZ"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseBD= getFirestore(firebaseApp);