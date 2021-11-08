import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* Nuestro
 const firebaseConfig = {
  apiKey: "AIzaSyDqiVJSRt84xRekRung9p0O7-IEKHDKEdg",
  authDomain: "burguerqueen-krustykrab.firebaseapp.com",
  projectId: "burguerqueen-krustykrab",
  storageBucket: "burguerqueen-krustykrab.appspot.com",
  messagingSenderId: "539017906516",
  appId: "1:539017906516:web:575c1123e8eacfed1fa0c1",
  measurementId: "G-3ZM0YRNZ7N"
}; */

/* const firebaseConfig = {
  apiKey: "AIzaSyBiZp3PJSr2DyeEaByR914V3vxU2PoqmFU",
  authDomain: "burguerqueen-krustykrab2.firebaseapp.com",
  projectId: "burguerqueen-krustykrab2",
  storageBucket: "burguerqueen-krustykrab2.appspot.com",
  messagingSenderId: "695985948704",
  appId: "1:695985948704:web:057533065fc929c30f5445",
  measurementId: "G-EMPRJTH4M5"
}; */

/* const firebaseConfig = {
  apiKey: "AIzaSyD86HSSBvLfaKaYxSoXt57Ohah71eM-Yps",
  authDomain: "burguerqueen-krustykrab3.firebaseapp.com",
  projectId: "burguerqueen-krustykrab3",
  storageBucket: "burguerqueen-krustykrab3.appspot.com",
  messagingSenderId: "411107241564",
  appId: "1:411107241564:web:4731998289f0b87d45c099",
  measurementId: "G-ZYQH3THTQE"
}; */

const firebaseConfig = {
  apiKey: "AIzaSyBiZp3PJSr2DyeEaByR914V3vxU2PoqmFU",
  authDomain: "burguerqueen-krustykrab2.firebaseapp.com",
  projectId: "burguerqueen-krustykrab2",
  storageBucket: "burguerqueen-krustykrab2.appspot.com",
  messagingSenderId: "695985948704",
  appId: "1:695985948704:web:057533065fc929c30f5445",
  measurementId: "G-EMPRJTH4M5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

