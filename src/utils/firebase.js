// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu2Ua7c-go0JWTJ7-mtu-pbWBhXv2TCcQ",
  authDomain: "sachinnetflixgpt.firebaseapp.com",
  projectId: "sachinnetflixgpt",
  storageBucket: "sachinnetflixgpt.appspot.com",
  messagingSenderId: "5282601067",
  appId: "1:5282601067:web:79dfc49d4b3bbd72f1b92e",
  measurementId: "G-6DSN7GXTD3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
