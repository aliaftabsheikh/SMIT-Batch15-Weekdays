import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [
        { id: 1, title: "Learn Redux Toolkit", completed: false },
    ]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo : (state, action)=>{
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: action.payload.completed
            }

            state.todos.push(todo);

            console.log("TODO ADDED:", todo);
            
        },

        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);

            console.log("TODO DELETED with ID:", action.payload.id);
        },

        editTodo: (state, action)=>{
            const { id, title, completed } = action.payload;

            

            const existingTodo = state.todos.find(todo => todo.id === id);

            if(existingTodo){
                existingTodo.title = title;
                existingTodo.completed = completed;

                console.log("TODO EDITED:", existingTodo);
            }
        }
    }
})

export default todoSlice.reducer;

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;