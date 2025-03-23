// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL0fu2CqfueJkQJnrzT2cLZ-Az1c-_M2E",
  authDomain: "sorry-db.firebaseapp.com",
  databaseURL: "https://sorry-db-default-rtdb.firebaseio.com",
  projectId: "sorry-db",
  storageBucket: "sorry-db.firebasestorage.app",
  messagingSenderId: "109992170122",
  appId: "1:109992170122:web:63a44c7a8a76e884451373",
  measurementId: "G-1RS9KX8PVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);