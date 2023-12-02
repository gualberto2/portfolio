// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnWRYB-ooTrLfHodWWT5WwcbrbQCMnKco",
  authDomain: "portfol-c3fa8.firebaseapp.com",
  projectId: "portfol-c3fa8",
  storageBucket: "portfol-c3fa8.appspot.com",
  messagingSenderId: "478567012634",
  appId: "1:478567012634:web:c6ffaf17eec08809e8f4a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
