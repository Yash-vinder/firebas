import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV52d9rJNdg2Yj_eutJxe4L6hgArJseIs",
  authDomain: "fir-auth-c4b4e.firebaseapp.com",
  projectId: "fir-auth-c4b4e",
  storageBucket: "fir-auth-c4b4e.appspot.com",
  messagingSenderId: "49289417889",
  appId: "1:49289417889:web:813dffbc687a05e36acce0",
  measurementId: "G-P0E6MMNY2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};