// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7IykNPrSit9gHyXvFmXf-LDdHuh7tRuw",
  authDomain: "telecare-2af13.firebaseapp.com",
  projectId: "telecare-2af13",
  storageBucket: "telecare-2af13.appspot.com",
  messagingSenderId: "693411600865",
  appId: "1:693411600865:web:c793644c9a7a7089899aa0",
  measurementId: "G-SK2K1N8HWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export{app, auth};