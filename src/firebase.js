import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWQXJD5edV92QZ3fnhbUx0zbkaVQmK7L8",
  authDomain: "chat-e4a4f.firebaseapp.com",
  projectId: "chat-e4a4f",
  storageBucket: "chat-e4a4f.appspot.com",
  messagingSenderId: "705780028137",
  appId: "1:705780028137:web:f5cd894d081f183c70d678"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
