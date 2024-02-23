import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBoiXjcKoqiqmV0YIYT3wxCtVzIQ4GpMu0",
  authDomain: "myntra-clone-d02cb.firebaseapp.com",
  projectId: "myntra-clone-d02cb",
  storageBucket: "myntra-clone-d02cb.appspot.com",
  messagingSenderId: "593671972600",
  appId: "1:593671972600:web:23fad649fe0977fdd2fd0d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)