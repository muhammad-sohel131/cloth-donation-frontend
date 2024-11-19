// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjfwHAt9nIxZOvOTQcf2E_VIJoL0qJ9IE",
  authDomain: "cloth-donation-5cd35.firebaseapp.com",
  projectId: "cloth-donation-5cd35",
  storageBucket: "cloth-donation-5cd35.firebasestorage.app",
  messagingSenderId: "17364734777",
  appId: "1:17364734777:web:6c5a69d6847fe2a46bcee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;