import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// replace this firebase conFigvariable with your own
const firebaseConfig = {
  apiKey: "AIzaSyDEcx0svQ-0W5pjKV6VVyyT6ThM63xerXU",
  authDomain: "cswk7-85ecf.firebaseapp.com",
  projectId: "cswk7-85ecf",
  storageBucket: "cswk7-85ecf.appspot.com",
  messagingSenderId: "713012361453",
  appId: "1:713012361453:web:98ab2b0827744aa15af4e4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };