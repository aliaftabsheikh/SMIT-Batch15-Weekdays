import React, { useEffect, useState } from 'react'

const Todos = () => {

    const [todos, setTodos] = useState([])


    async function getTodos() {
        try {
              const todos = await fetch('http://localhost:3000/todos');
            const data = await todos.json();
            setTodos(data);

            console.log("TODOS---->", data);

        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }

    async function addTodo(){
        try {
            const newTodo = {task: 'Learn React Context API', completed: false};

           const todo = await fetch('http://localhost:3000/todos', {
            method: "POST",
            body: JSON.stringify(newTodo),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await todo.json();
        setTodos((pre) => [...pre, data]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }

    useEffect(()=>{
        getTodos();
    }, [])
      

  return (
<div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 animate-fadeIn">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Todo List
        </h1>
        
        <div className="flex gap-4 mb-6">
            <input
                type="text"
                placeholder="Add new task..."
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
            <button onClick={addTodo} className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transform hover:scale-105 transition">
                Add Task
            </button>
        </div>

        <div className="space-y-4">
            {/* Todo items would be mapped here */}
             
             {
            todos.map((todo) => (
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:shadow-md transition">
                <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 accent-purple-500" />
                    <span className="text-gray-800">{todo.task}</span>
                </div>
                <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700">
                        <span className="material-icons">edit</span>
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                        <span className="material-icons">delete</span>
                    </button>
                </div>
            </div>
            ))
             }
        </div>
    </div>
</div>
  )
}

export default Todos