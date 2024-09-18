// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0hHmLEiRILvh3jtwXozWvVQ1JCDJTWYs",
  authDomain: "fir-79b05.firebaseapp.com",
  projectId: "fir-79b05",
  storageBucket: "fir-79b05.appspot.com",
  messagingSenderId: "582055973229",
  appId: "1:582055973229:web:712b7e087aac1f38650a64",
  measurementId: "G-4P5F1SLW16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider=new GoogleAuthProvider()