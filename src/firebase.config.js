import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBiUlyE6uKq0M9j0jMlVuF3-k3bcZGi5ck",
  authDomain: "tihimart-66588.firebaseapp.com",
  projectId: "tihimart-66588",
  storageBucket: "tihimart-66588.appspot.com",
  messagingSenderId: "617701896333",
  appId: "1:617701896333:web:d444803102d1972c16b2c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
