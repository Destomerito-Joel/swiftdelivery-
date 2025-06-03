import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBbFoHuQDSFPuA73fjwJopHi8fuI2yrm3Y",
  authDomain: "swift-delivery-ba813.firebaseapp.com",
  projectId: "swift-delivery-ba813",
  storageBucket: "swift-delivery-ba813.firebasestorage.app",
  messagingSenderId: "223211557151",
  appId: "1:223211557151:web:8854e20ecc46cf09fa602a",
  measurementId: "G-9SZ4ZJRQHF"
};

export default defineNuxtPlugin((nuxtApp) => {
  // Ensure Firebase is initialized only once
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  return {
    provide: {
      firebase: app,
      firestore: db,
      auth: auth,
    },
  };
});