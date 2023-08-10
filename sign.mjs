import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
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
const db = getFirestore(app);
const auth = getAuth();
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value  
    const name = document.getElementById('name').value  

    if (!name || !email || !password) {
      Swal.fire({
        text: `Please fill all the fields`,
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
        const user = userCredential.user;
        try {
            const docRef = await setDoc(doc(db, "users", user.uid), {
              name,
              email,
              uid: user.uid
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }

          Swal.fire({
            text: `User Signed Up !`,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(()=>{
            window.location.href = 'signin.html'
          }
          )

        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorMessage === "Firebase: Error (auth/invalid-email).") {
          Swal.fire({
            text: `Invalid Email Address`,
            icon: 'error',
            confirmButtonText: 'OK'
        });
      }
      else if (errorMessage === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
        Swal.fire({
          text: `Password Should Be Atleast 6 Characters Long`,
          icon: 'error',
          confirmButtonText: 'OK'
      });
        }
        else if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
          Swal.fire({
            text: `This email Is Already Taken`,
            icon: 'error',
            confirmButtonText: 'OK'
        });
        }
        else {
          console.log(errorMessage);
        }
    });
})