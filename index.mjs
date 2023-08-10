import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
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
const db = getFirestore(app);

const auth = getAuth();
onAuthStateChanged(auth, async (user) => {
  if (user) {
   
    const uid = user.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        document.getElementById("na").innerHTML=docSnap.data().name
      console.log("Document data:", docSnap.data());
    } else {
        location.replace("signin.html")
    }
  }
});
