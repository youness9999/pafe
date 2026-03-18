// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYm8QCkqYnfJBNkvAF3sba7gVnKbIstgU",
  authDomain: "page-7652e.firebaseapp.com",
  projectId: "page-7652e",
  storageBucket: "page-7652e.firebasestorage.app",
  messagingSenderId: "943083598292",
  appId: "1:943083598292:web:1677369c486f15273a6641",
  measurementId: "G-BJR8TCSFYQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app };
//.....
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // تم تسجيل الدخول بنجاح
      console.log("User signed in:", result.user);
    })
    .catch((error) => {
      // هنا سيظهر لك سبب الإغلاق المفاجئ في الـ Console
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
    });
};
