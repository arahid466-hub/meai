// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDojIeAoEUciUKWhaIZiKcPEzFng64HNvY",
  authDomain: "rahidalibgmiai.firebaseapp.com",
  projectId: "rahidalibgmiai",
  storageBucket: "rahidalibgmiai.firebasestorage.app",
  messagingSenderId: "801249905517",
  appId: "1:801249905517:web:4fad5cc97fc20ffad86864",
  measurementId: "G-SHMRJ8LX8P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById("googleBtn").onclick = function () {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(() => {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("app").style.display = "block";
    });
};

function sendMessage() {
    let msg = document.getElementById("userMsg").value;
    if (!msg.trim()) return;

    document.getElementById("chatBox").innerHTML += `<p><b>You:</b> ${msg}</p>`;
    document.getElementById("userMsg").value = "";

    // Demo AI reply
    setTimeout(() => {
        let reply = "This is Rahid AI. Message received!";
        document.getElementById("chatBox").innerHTML += `<p><b>AI:</b> ${reply}</p>`;
    }, 700);
}