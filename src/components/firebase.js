// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log("Working firebase.js")
const firebaseConfig = {
  apiKey: "AIzaSyCOfiVx7zPgfCDFyeXVz1HtJRtZVwU2K-c",
  authDomain: "cuet-thesis-and-project-portal.firebaseapp.com",
  projectId: "cuet-thesis-and-project-portal",
  storageBucket: "cuet-thesis-and-project-portal.firebasestorage.app",
  messagingSenderId: "52956617512",
  appId: "1:52956617512:web:f0129755ea001207688e1d",
  measurementId: "G-484W4X5TH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
console.log("Working firebase.js")
export default app;