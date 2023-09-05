import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd_feWqnk4vhvufu1b0WuVwaE6PG3Lx0E",
  authDomain: "tufono-store.firebaseapp.com",
  projectId: "tufono-store",
  storageBucket: "tufono-store.appspot.com",
  messagingSenderId: "231895572786",
  appId: "1:231895572786:web:8227d2ada5b0689f32f72b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
