/ Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfGF488xBnYoy7FeJPviH-OoAmPmI91EM",
  authDomain: "otp-project-9c66f.firebaseapp.com",
  projectId: "otp-project-9c66f",
  storageBucket: "otp-project-9c66f.appspot.com",
  messagingSenderId: "881253796291",
  appId: "1:881253796291:web:586af5e2e988c25af5d576",
  measurementId: "G-SZVJXSGD2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);