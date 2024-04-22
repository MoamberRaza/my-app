// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBNuM1-kbmrci8LFAJPQG6F4uqzzX-WoI",
  authDomain: "upworkfbintegrations.firebaseapp.com",
  projectId: "upworkfbintegrations",
  storageBucket: "upworkfbintegrations.appspot.com",
  messagingSenderId: "137590942995",
  appId: "1:137590942995:web:a127b33c7947733f787ee6",
  measurementId: "G-11VJX4QY23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
