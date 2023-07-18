// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYTBBBHEsBBxvS7asWdqW8JWPkefBqjRE",
  authDomain: "codelijah-app.firebaseapp.com",
  projectId: "codelijah-app",
  storageBucket: "codelijah-app.appspot.com",
  messagingSenderId: "932168418464",
  appId: "1:932168418464:web:ae3a2464d44a6709b9f5c5",
  measurementId: "G-D23WEL0VG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
