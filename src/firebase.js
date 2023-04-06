// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyAagrFVR7O2vIchIQwq-BYxPsNduKMEoas",
  authDomain: "pilldispenser-f2539.firebaseapp.com",
  projectId: "pilldispenser-f2539",
  storageBucket: "pilldispenser-f2539.appspot.com",
  messagingSenderId: "663352724009",
  appId: "1:663352724009:web:de97334d94cb12c9a4ea38",
  measurementId: "G-VJXPLE8G18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//export const database =firebase.database();
export const database = getDatabase();