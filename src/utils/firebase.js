// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdPR9GGo3UJV_s9y70EJNdsOtgKxFKhyQ",
  authDomain: "netflixgptclone.firebaseapp.com",
  projectId: "netflixgptclone",
  storageBucket: "netflixgptclone.appspot.com",
  messagingSenderId: "1074908106699",
  appId: "1:1074908106699:web:11f3bd485c96965b52704e",
  measurementId: "G-TY4GSH8BEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
