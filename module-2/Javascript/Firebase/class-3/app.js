// FIREBASE CONFIG 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyAyr1JDI95fgPxQ8BsTqbmvg7ywYcAkiAw",
    authDomain: "smit-batch-15-672bf.firebaseapp.com",
    projectId: "smit-batch-15-672bf",
    storageBucket: "smit-batch-15-672bf.firebasestorage.app",
    messagingSenderId: "786018952183",
    appId: "1:786018952183:web:d52228f79014a675e304f2",
    measurementId: "G-1H12MH2CMK"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
console.log(db)


async function smitAdmission() {
    try {
        const admission = collection(db, "smit-admission")

        const docRef = await addDoc(admission, {
            name: "Sarfaraz",
            country: "United States"
        });
    } catch (error) {
           console.error("Error adding document: ", error);
    }
}

const todoList = document.getElementById('admissions')
async function getAdmissions(){
 const admissions = await getDocs(collection(db, "smit-admission"));

 admissions.forEach((doc)=> {
    const data = doc.data()
    console.log(data.country)

    todoList.innerHTML += `<li id=${doc.id}>${data.name}</li>`

 })
}

getAdmissions()