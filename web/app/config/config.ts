import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ9tF0NZvxbrfgKq7pTnoSAH38xGX1G3M",
  authDomain: "kitchenkrazecom.firebaseapp.com",
  projectId: "kitchenkrazecom",
  storageBucket: "kitchenkrazecom.appspot.com",
  messagingSenderId: "982609917188",
  appId: "1:982609917188:web:0b40b204f7eb8e0b844c51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const AppName = 'Kitchen Kraze'