// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGLGswRLetn4ZgfTNJCHKjPeuE37Z1hNA",
  authDomain: "reddit-clone-7800.firebaseapp.com",
  projectId: "reddit-clone-7800",
  storageBucket: "reddit-clone-7800.firebasestorage.app",
  messagingSenderId: "412017595034",
  appId: "1:412017595034:web:1eb16ca44e7f853f004523",
  measurementId: "G-B6HQ7QQNWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);