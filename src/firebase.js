// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAipY363fturYSDakkQCoNnel91oLfKB_c",
  authDomain: "chat-77bde.firebaseapp.com",
  projectId: "chat-77bde",
  storageBucket: "chat-77bde.appspot.com",
  messagingSenderId: "984381682715",
  appId: "1:984381682715:web:30ae8f4790360f7d0934be",
  measurementId: "G-0V92MZ5T7N"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()