// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVEYUAeFy0q6qi36pSMI4NZYSXhOY5hSo",
  authDomain: "cortexai-b55da.firebaseapp.com",
  projectId: "cortexai-b55da",
  storageBucket: "cortexai-b55da.firebasestorage.app",
  messagingSenderId: "125360249829",
  appId: "1:125360249829:web:1c3050ebcaf13521112d0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()