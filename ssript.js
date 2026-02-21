// ------------------- Firebase SDK Imports -------------------
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// ------------------- Your Firebase Config -------------------
const firebaseConfig = {
  apiKey: "AIzaSyDojIeAoEUciUKWhaIZiKcPEzFng64HNvY",
  authDomain: "rahidalibgmiai.firebaseapp.com",
  projectId: "rahidalibgmiai",
  storageBucket: "rahidalibgmiai.firebasestorage.app",
  messagingSenderId: "801249905517",
  appId: "1:801249905517:web:4fad5cc97fc20ffad86864",
  measurementId: "G-SHMRJ8LX8P"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ------------------- Google Login -------------------
document.getElementById("googleBtn").onclick = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      alert("Login Successful!");
      console.log(result.user);
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};

// ------------------- OTP Login -------------------
window.recaptchaVerifier = new RecaptchaVerifier(
  auth,
  "sendOtpBtn",
  { size: "invisible" }
);

document.getElementById("sendOtpBtn").onclick = () => {
  const phone = "+91" + document.getElementById("phoneInput").value;

  signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmResult = confirmationResult;
      alert("OTP Sent Successfully!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};

document.getElementById("verifyOtpBtn").onclick = () => {
  const code = document.getElementById("otpInput").value;

  window.confirmResult.confirm(code)
    .then(() => {
      alert("OTP Verified Successfully!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};