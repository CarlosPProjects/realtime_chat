// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlfKtK29cQ4vPOB6ic9E74kg8vUvxilx4",
  authDomain: "tindnet-pro.firebaseapp.com",
  projectId: "tindnet-pro",
  storageBucket: "tindnet-pro.appspot.com",
  messagingSenderId: "138554949771",
  appId: "1:138554949771:web:a653987db222b3a2b2548e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
