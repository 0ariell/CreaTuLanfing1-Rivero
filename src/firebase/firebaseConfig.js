import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmWdCjPvZ_ST4jnXgrej7lOv4hgaSfn2I",
  authDomain: "fir-reactrivero-1.firebaseapp.com",
  projectId: "fir-reactrivero-1",
  storageBucket: "fir-reactrivero-1.firebasestorage.app",
  messagingSenderId: "41367322326",
  appId: "1:41367322326:web:5b3fa21232d469fd849377",
  measurementId: "G-1D72NW6D4Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
