import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";


import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js'


const firebaseConfig = {
    apiKey: "AIzaSyA594XF_utyvf5f1Qrz80qP-TWodR8-DV8",
    authDomain: "smit-b15.firebaseapp.com",
    projectId: "smit-b15",
    storageBucket: "smit-b15.firebasestorage.app",
    messagingSenderId: "815815851092",
    appId: "1:815815851092:web:57c8d7611ed5310a9bc1c1",
    measurementId: "G-444KJQLBPN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
console.log("DB CONNECT", db)

const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');
const welcomeMessage = document.getElementById('welcome-message');
const userInfoDiv = document.getElementById('user-info');
const authFormsDiv = document.getElementById('auth-forms');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.getElementById('signup-email')?.value

    const password = document.getElementById('signup-password')?.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user.email)
            alert(`User created with email: ${user.email}`)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage)
            // ..
        });

}
)


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email')?.value

    const password = document.getElementById('login-password')?.value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)

            alert(`User login with email: ${user.email}`)


            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;


            console.log(errorMessage)
        });
})


logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('User signed out');
        alert('User Logout successfully !')
        // Sign-out successful.
    }).catch((error) => {
        console.error('Error during sign out:', error);
        alert(error.message);
    });
})


onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        welcomeMessage.textContent = `Welcome, ${user.email}`;
        userInfoDiv.style.display = 'block';
        authFormsDiv.style.display = 'none';
    }
    else {
        // User is signed out
        welcomeMessage.textContent = '';
        userInfoDiv.style.display = 'none';
        authFormsDiv.style.display = 'block';
    }
});


// FIRESTORE 

async function studentAdmission() {
    try {
        const docRef = await addDoc(collection(db, "SaylaniAdmission"), {
            name: "Waqar",
            age: 36
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
                console.error("Error adding document: ", error);
    }
}


studentAdmission()
