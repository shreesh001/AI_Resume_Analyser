import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4pGRb0_bfMaXfQSZnRu8cFfD8b3KxHHU",
  authDomain: "airesumeanalyser-c3ae1.firebaseapp.com",
  projectId: "airesumeanalyser-c3ae1",
  storageBucket: "airesumeanalyser-c3ae1.firebasestorage.app",
  messagingSenderId: "836690412898",
  appId: "1:836690412898:web:237775f3778c1adf82583b",
  measurementId: "G-814RSZ4LR5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();