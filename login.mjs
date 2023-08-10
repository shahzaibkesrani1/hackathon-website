import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB00JohWr2-q5riS09Y8LasIOOFNePH6nA",
  authDomain: "signup2-8b066.firebaseapp.com",
  projectId: "signup2-8b066",
  storageBucket: "signup2-8b066.appspot.com",
  messagingSenderId: "181042274979",
  appId: "1:181042274979:web:d54c09e7ea4039227e9516",
  measurementId: "G-VLPBQDP6SZ",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  const email = document.getElementById("email1").value;
  const password = document.getElementById("password1").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Swal.fire("Sign In SuccessFully").then(() => {
        window.location.href = "index.html";
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Please Enter Correct Email / Password");
    });
});
