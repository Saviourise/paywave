// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
// import Swal from 'sweetalert2'

const firebaseConfig = {
  apiKey: "AIzaSyCuhYOkjknM-hd789HQ4aDxIGlVG7UT6PE",
  authDomain: "paywave-1.firebaseapp.com",
  projectId: "paywave-1",
  storageBucket: "paywave-1.appspot.com",
  messagingSenderId: "839782998054",
  appId: "1:839782998054:web:092c549654121feb6206e7",
  measurementId: "G-54VBSX4YPP",
  databaseURL: "https://paywave-1-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

let allEmails = []

const getEmail = () => {
  const mail = ref(database, 'emails/');
  onValue(mail, (snapshot) => {
    const emails = snapshot.val();
    for (let email in emails) {
      allEmails.push(emails[email].email)
    }
  })
}

const btn = document.getElementById("button")

const addEmail = (email) => {
  set(ref(database, 'emails/' + email.split("@")[0]), {
    email
  })
  swal.fire({
    text: "You have been suucessfully added to the waitlist",
    icon: 'success',
  })
  btn.innerHTML = "Submit"
}

const submit = () => {
  btn.innerHTML = "Loading..."
  const email = document.getElementById("email").value
  if(email && String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )) {
    addEmail(email)
  } else {
    swal.fire({
      text: "Please provide a valid email address",
      icon: 'error',
    })
    btn.innerHTML = "Submit"
  }
}

btn.addEventListener("click", submit)