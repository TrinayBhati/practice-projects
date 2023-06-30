// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAee0cIoSUInqP4mDL9iOamIx7IyTanRuQ",
  authDomain: "bookstay-e2624.firebaseapp.com",
  projectId: "bookstay-e2624",
  storageBucket: "bookstay-e2624.appspot.com",
  messagingSenderId: "841951642784",
  appId: "1:841951642784:web:418cbd564ad41cd4d3b5c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };