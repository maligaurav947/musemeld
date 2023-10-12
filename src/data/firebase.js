import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_KEY}`,
  authDomain: `${process.env.REACT_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_STROAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_MESSAGING_SENDERID}`,
  appId: `${process.env.REACT_APP_ID}`,
  measurementId: `${process.env.REACT_MEASUREMENT_ID}`,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getFirestore(app);
