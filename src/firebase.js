
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5O-SeMUz3tXa2kF0TTnwdhDjP380hHec",
  authDomain: "insta-clone-8a882.firebaseapp.com",
  projectId: "insta-clone-8a882",
  storageBucket: "insta-clone-8a882.appspot.com",
  messagingSenderId: "202227300773",
  appId: "1:202227300773:web:ac803e110637fc1a12904c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();