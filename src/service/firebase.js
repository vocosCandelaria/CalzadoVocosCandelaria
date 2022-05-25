// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD44FNygiV2jA6NRbBUJRNXI8z_C9E7h8s",
  authDomain: "la-morada-6a899.firebaseapp.com",
  projectId: "la-morada-6a899",
  storageBucket: "la-morada-6a899.appspot.com",
  messagingSenderId: "221829212731",
  appId: "1:221829212731:web:992c593f486fb469c74a1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore (app);

export default db;