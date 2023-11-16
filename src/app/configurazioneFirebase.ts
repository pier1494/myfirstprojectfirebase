// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Aggiungi questa importazione per Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAmkHAnQ9n6Et4CC50t_SCRicXSfw5DkC8",
  authDomain: "myfirstprojectfirebase-48da7.firebaseapp.com",
  projectId: "myfirstprojectfirebase-48da7",
  storageBucket: "myfirstprojectfirebase-48da7.appspot.com",
  messagingSenderId: "551929592539",
  appId: "1:551929592539:web:96303cbd9129cdce8d6afe",
  measurementId: "G-RKS41078H4",
  // databaseURL: "https://myfirstprojectfirebase-48da7-default-rtdb.europe-west1.firebasedatabase.app"

  };


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const db = getFirestore(app);

