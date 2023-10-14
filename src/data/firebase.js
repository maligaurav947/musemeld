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
  apiKey: "AIzaSyC05ihYm6GobnIdksEArwYtkFcvZ_ti7t4",
  authDomain: "musemeld-404ca.firebaseapp.com",
  databaseURL: "https://musemeld-404ca-default-rtdb.firebaseio.com",
  projectId: "musemeld-404ca",
  storageBucket: "musemeld-404ca.appspot.com",
  messagingSenderId: "466945094887",
  appId: "1:466945094887:web:d5d75e173cc7c6b2451e42",
  measurementId: "G-L51ZJ1DXBM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
