import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7dMKXsfgurzAM_4PGP_yIncxzvbAWYT8",
  authDomain: "ecom-c65e0.firebaseapp.com",
  projectId: "ecom-c65e0",
  storageBucket: "ecom-c65e0.appspot.com",
  messagingSenderId: "719339080238",
  appId: "1:719339080238:web:7cbaaaa8c74380bbb82dbf",
  measurementId: "G-HNDY55E5GS"
};

// Initialize Firebase
const Fireapp = initializeApp(firebaseConfig);
export default Fireapp;
