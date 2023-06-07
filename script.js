// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuhYOkjknM-hd789HQ4aDxIGlVG7UT6PE",
  authDomain: "paywave-1.firebaseapp.com",
  projectId: "paywave-1",
  storageBucket: "paywave-1.appspot.com",
  messagingSenderId: "839782998054",
  appId: "1:839782998054:web:092c549654121feb6206e7",
  measurementId: "G-54VBSX4YPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);