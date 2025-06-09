import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADjKL6eB_YzbLxTKgcF-OKDXUkFIcwJBg",
  authDomain: "chatapp-3a3d3.firebaseapp.com",
  projectId: "chatapp-3a3d3",
  storageBucket: "chatapp-3a3d3.firebasestorage.app",
  messagingSenderId: "364202825835",
  appId: "1:364202825835:web:4449c0d407abb3c1e1b92e",
  measurementId: "G-GMPW2KFMMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storageF = getStorage(app);
