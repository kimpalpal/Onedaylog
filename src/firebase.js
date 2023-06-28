// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLVcpGSt5w3IWsoPe06sRq5de6uWIF5Sw',
  authDomain: 'today-diary--test-project.firebaseapp.com',
  projectId: 'today-diary--test-project',
  storageBucket: 'today-diary--test-project.appspot.com',
  messagingSenderId: '838269802556',
  appId: '1:838269802556:web:e6d8487f10100993670b39',
  measurementId: 'G-C862PT54VQ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
