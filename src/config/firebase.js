// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU18mDemzHooKyxZsC-Od7yPNLCv3JyJw",
  authDomain: "womansafety-9df49.firebaseapp.com",
  databaseURL: "https://womansafety-9df49-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "womansafety-9df49",
  storageBucket: "womansafety-9df49.appspot.com",
  messagingSenderId: "1001912539752",
  appId: "1:1001912539752:web:68de69d905d87d0d0bf9dd",
  measurementId: "G-SX7NGBRQTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;