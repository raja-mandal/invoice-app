// import firebase from "firebase/app";
// // import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyB61EsinqbPG-fzRUTua-Ivijn5KAHDVnQ",
//   authDomain: "invoice-vue-app-bbf75.firebaseapp.com",
//   projectId: "invoice-vue-app-bbf75",
//   storageBucket: "invoice-vue-app-bbf75.appspot.com",
//   messagingSenderId: "1091071462942",
//   appId: "1:1091071462942:web:13f3a7e6bda9a1f2e8280f",
//   measurementId: "G-NB9070QV5E"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// export default firebaseApp.firestore();




// -----new-----
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB61EsinqbPG-fzRUTua-Ivijn5KAHDVnQ",
  authDomain: "invoice-vue-app-bbf75.firebaseapp.com",
  projectId: "invoice-vue-app-bbf75",
  storageBucket: "invoice-vue-app-bbf75.appspot.com",
  messagingSenderId: "1091071462942",
  appId: "1:1091071462942:web:13f3a7e6bda9a1f2e8280f",
  measurementId: "G-NB9070QV5E"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db