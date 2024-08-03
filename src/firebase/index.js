import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6PMylOK3JceenBOt6C34m1YSkymRQ4DA",
  authDomain: "twitterclone-fe4fe.firebaseapp.com",
  projectId: "twitterclone-fe4fe",
  storageBucket: "twitterclone-fe4fe.appspot.com",
  messagingSenderId: "154941335586",
  appId: "1:154941335586:web:7e5865b87cc208e210c27b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//* auth referansını al
export const auth = getAuth(app);

//* google sağlayıcısını kur
export const provider = new GoogleAuthProvider();

//* veritabanının referansını al
export const db = getFirestore(app);

//* storege referansını al
export const storage = getStorage(app);