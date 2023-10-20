// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLzOodJZKESfSCKJg9kT8snf3gV42H4TQ",
  authDomain: "aisthetic-34adc.firebaseapp.com",
  projectId: "aisthetic-34adc",
  storageBucket: "aisthetic-34adc.appspot.com",
  messagingSenderId: "453849985232",
  appId: "1:453849985232:web:fe933fdd23295c180b2ed5",
  measurementId: "G-V0LLBPV58D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default {
  auth
};
