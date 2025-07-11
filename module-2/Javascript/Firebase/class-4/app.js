import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyr1JDI95fgPxQ8BsTqbmvg7ywYcAkiAw",
    authDomain: "smit-batch-15-672bf.firebaseapp.com",
    projectId: "smit-batch-15-672bf",
    storageBucket: "smit-batch-15-672bf.firebasestorage.app",
    messagingSenderId: "786018952183",
    appId: "1:786018952183:web:d52228f79014a675e304f2",
    measurementId: "G-1H12MH2CMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// async function addTodo() {
//     try {
//         const docRef = await addDoc(collection(db, "todos"), {
//             id: 1,
//             task: "Learn firebase",
//             isCompleted: false
//         });
//         console.log("Document written with ID: ", docRef.id);
//         id++;
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }

// addTodo()

const addTodo = document.getElementById("addTodo");

const todoList = document.getElementById("todos");


addTodo.addEventListener("click", addTodoHandler);

async function addTodoHandler() {
    todoList.innerHTML = ""
    console.log("ADDED");
    try {
        const inputVal = document.getElementById('todoInput').value

        const todo = await addDoc(collection(db, "todos"), {
            id: new Date().getTime(),
            task: inputVal,
        });
        alert(`Document written with ID: , ${todo.id}`);

        getTodos()


    } catch (error) {
        console.error("Error adding document: ", error);
    }
}



async function getTodos(){
    todoList.innerHTML = ""

    try {
        const todos = await getDocs(collection(db, "todos"));

        todos.forEach((doc)=>{
            const {id, task} = doc.data()
            console.log(doc.id, '===', task)

            const ele = `<li id=${doc.id}>${task}</li>`;


         todoList.innerHTML += ele;
        })

        todoList.childNodes.forEach((li)=>{
            li.addEventListener('click', deleteTodo)
        })

    } catch (error) {
         console.error("Error adding document: ", error);
    }
    
}

getTodos()

async function deleteTodo(){
    const id = this.id
  try {
     await deleteDoc(doc(db, "todos", id));

  } catch (error) {
      console.error("Error Deleting document: ", error);
  }

  getTodos()
}