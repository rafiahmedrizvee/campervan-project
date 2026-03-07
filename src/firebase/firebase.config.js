
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyJ5YCygtnstY_nxOWdv5T4ooaanpkPto",
  authDomain: "campervan-2026.firebaseapp.com",
  projectId: "campervan-2026",
  storageBucket: "campervan-2026.firebasestorage.app",
  messagingSenderId: "754466467208",
  appId: "1:754466467208:web:b146b259f4fa6b42455e3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);