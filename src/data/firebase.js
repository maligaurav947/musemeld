import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// var apiKeynew = `${process.env.REACT_APP_KEY}`;
// var authDomainnew = `${process.env.REACT_AUTH_DOMAIN}`;
// var databaseURLnew = `${process.env.REACT_DATABASE_URL}`;
// var projectIdnew = `${process.env.REACT_PROJECT_ID}`;
// var storageBucketnew = `${process.env.REACT_STROAGE_BUCKET}`;
// var messagingSenderIdnew = `${process.env.REACT_MESSAGING_SENDERID}`;
// var appIdnew = `${process.env.REACT_APP_ID}`;
// var measurementIdnew = `${process.env.REACT_MEASUREMENT_ID}`;

const firebaseConfig = {
  apiKey: "AIzaSyDhmFnI4DjlJOnsd72c1qbxv74plVL5eLM",
  authDomain: "musemeld-f196f.firebaseapp.com",
  projectId: "musemeld-f196f",
  storageBucket: "musemeld-f196f.appspot.com",
  messagingSenderId: "891545093990",
  appId: "1:891545093990:web:94dab36f257b6091cb2aa7",
  measurementId: "G-8CMQJ1L9ZL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
