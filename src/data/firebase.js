import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const apiKeynew = process.env.REACT_APP_APP_KEY;
const authDomainnew = process.env.REACT_APP_AUTH_DOMAIN;
const projectIdnew = process.env.REACT_APP_PROJECT_ID;
const storageBucketnew = process.env.REACT_APP_STROAGE_BUCKET;
const messagingSenderIdnew = process.env.REACT_APP_MESSAGING_SENDERID;
const appIdnew = process.env.REACT_APP_APP_ID;
const measurementIdnew = process.env.REACT_APP_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: apiKeynew,
  authDomain: authDomainnew,
  projectId: projectIdnew,
  storageBucket: storageBucketnew,
  messagingSenderId: messagingSenderIdnew,
  appId: appIdnew,
  measurementId: measurementIdnew,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
