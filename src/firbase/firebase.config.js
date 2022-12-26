// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmHvxJztLYUqopNVK_y_AdpbU52Md86cE",
    authDomain: "sundialchomok.firebaseapp.com",
    projectId: "sundialchomok",
    storageBucket: "sundialchomok.appspot.com",
    messagingSenderId: "699705599294",
    appId: "1:699705599294:web:db47ce9ad07f6652b6b86f",
    measurementId: "G-RGX6Z5F06M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);