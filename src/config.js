// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWhahrWoh0jdtL7zRTs_ysX8-6tw2SLjQ",
  authDomain: "perfumeria-22744.firebaseapp.com",
  projectId: "perfumeria-22744",
  storageBucket: "perfumeria-22744.firebasestorage.app",
  messagingSenderId: "837442544332",
  appId: "1:837442544332:web:f17ec25751fd797f371869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)