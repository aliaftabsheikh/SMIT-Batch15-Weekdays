import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        title : "Learn Redux Toolkit",
        completed: false
    
    }],
};


const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false
            };
            state.todos.push(todo);
        },

        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        }
        
})


export default todoSlice.reducer;
export const { addTodo, deleteTodo} = todoSlice.actions;    