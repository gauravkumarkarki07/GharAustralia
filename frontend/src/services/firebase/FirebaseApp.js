// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gharaustralia-f0919.firebaseapp.com",
  projectId: "gharaustralia-f0919",
  storageBucket: "gharaustralia-f0919.appspot.com",
  messagingSenderId: "657443295061",
  appId: "1:657443295061:web:631fb150e44812a062e9dc"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);