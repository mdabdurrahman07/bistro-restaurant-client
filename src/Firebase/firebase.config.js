// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGSmZJE5r3YEMQtoqjRPkiN9EN3PXQB-M",
  authDomain: "bistro-restaurant-a4f98.firebaseapp.com",
  projectId: "bistro-restaurant-a4f98",
  storageBucket: "bistro-restaurant-a4f98.appspot.com",
  messagingSenderId: "534931745322",
  appId: "1:534931745322:web:364aaf01e04d4595fcb153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
