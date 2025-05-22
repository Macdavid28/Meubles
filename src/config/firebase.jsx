// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt6Lc4Nn2Bc7NeGuoN4EN4MQHCNzytJzw",
  authDomain: "meubles-63663.firebaseapp.com",
  projectId: "meubles-63663",
  storageBucket: "meubles-63663.appspot.com",
  messagingSenderId: "506924615770",
  appId: "1:506924615770:web:7afb00420517bf0a583063",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
