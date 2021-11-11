import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDqiVJSRt84xRekRung9p0O7-IEKHDKEdg",
  authDomain: "burguerqueen-krustykrab.firebaseapp.com",
  projectId: "burguerqueen-krustykrab",
  storageBucket: "burguerqueen-krustykrab.appspot.com",
  messagingSenderId: "539017906516",
  appId: "1:539017906516:web:575c1123e8eacfed1fa0c1",
  measurementId: "G-3ZM0YRNZ7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
