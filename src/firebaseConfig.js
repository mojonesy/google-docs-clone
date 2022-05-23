// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTnIBkVxxqTvZZSQbQC_e1JCF3_1-sAz4",
  authDomain: "docs-clone-180ad.firebaseapp.com",
  projectId: "docs-clone-180ad",
  storageBucket: "docs-clone-180ad.appspot.com",
  messagingSenderId: "147951077825",
  appId: "1:147951077825:web:0a77cf2a541574fe0a0740"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);