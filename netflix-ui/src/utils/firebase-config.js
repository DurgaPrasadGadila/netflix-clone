// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAoRugfXE90gz0ppAXfo1SnVyvcMaGm0fQ",
  authDomain: "react-netflix-clone-8bac9.firebaseapp.com",
  projectId: "react-netflix-clone-8bac9",
  storageBucket: "react-netflix-clone-8bac9.appspot.com",
  messagingSenderId: "975201630539",
  appId: "1:975201630539:web:751f014d9085e76e7a90ce",
  measurementId: "G-ME8NFV80T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);