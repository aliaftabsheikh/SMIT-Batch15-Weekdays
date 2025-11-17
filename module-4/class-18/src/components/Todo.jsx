import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from '../features/todoSlice';

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const [input, setInput] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addTodo({ title: input, completed: false }));
            setInput('');
        }
    };

    const handleDelete = (id) => {
        
        dispatch(deleteTodo({ id }));
    };

    const handleEdit = (id, text) => {
        setEditingId(id);
        setEditText(text);
    };

    const handleSaveEdit = (id) => {
        if (editText.trim()) {


            dispatch(editTodo({ id, title: editText, completed: false }));



            setEditingId(null);
            setEditText('');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-2xl p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">My Tasks</h1>
                    <p className="text-gray-500 text-center mb-8">Stay organized and boost your productivity</p>

                    <div className="flex gap-2 mb-6">
                        <input
                            type="text"
                            placeholder="Add a new task..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                        />
                        <button
                            onClick={handleAdd}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-105"
                        >
                            Add
                        </button>
                    </div>

                    <div className="space-y-3">
                        {todos.length === 0 ? (
                            <p className="text-center text-gray-400 mt-8 text-sm">No tasks yet. Add one to get started!</p>
                        ) : (
                            todos.map(todo => (
                                <div key={todo.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group">
                                    <input
                                        type="checkbox"
                                      
                                        // onChange={() => handleToggle(todo.id)}
                                        className="w-5 h-5 cursor-pointer accent-indigo-600"
                                    />
                                    {editingId === todo.id ? (
                                        <input
                                            type="text"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            className="flex-1 px-3 py-1 border border-indigo-500 rounded"
                                            autoFocus
                                        />
                                    ) : (
                                        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                            {todo.title}
                                        </span>
                                    )}
                                    <div className="flex gap-2">
                                        {editingId === todo.id ? (
                                            <button
                                                onClick={() => handleSaveEdit(todo.id)}
                                                className="text-green-500 hover:text-green-700 font-semibold opacity-0 group-hover:opacity-100 transition"
                                            >
                                                Save
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleEdit(todo.id, todo.text)}
                                                className="text-blue-500 hover:text-blue-700 font-semibold opacity-0 group-hover:opacity-100 transition"
                                            >
                                                Edit
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleDelete(todo.id)}
                                            className="text-red-500 hover:text-red-700 font-semibold opacity-0 group-hover:opacity-100 transition"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo