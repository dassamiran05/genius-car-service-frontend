// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdr70G-_93UeouVo0-7L4blprFniEvh1Q",
  authDomain: "genius-car-services-fee05.firebaseapp.com",
  projectId: "genius-car-services-fee05",
  storageBucket: "genius-car-services-fee05.appspot.com",
  messagingSenderId: "976147497177",
  appId: "1:976147497177:web:e5244d2a4c85ea1ce53ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
