// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-hJP5L3W9_Sqzmc8LXKUTCC709Qt8DcE",
  authDomain: "lms-students-e0182.firebaseapp.com",
  databaseURL: "https://lms-students-e0182-default-rtdb.firebaseio.com",
  projectId: "lms-students-e0182",
  storageBucket: "lms-students-e0182.appspot.com",
  messagingSenderId: "987312886726",
  appId: "1:987312886726:web:c692df349452c9366898c7",
  measurementId: "G-PWE6D0BXTW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
