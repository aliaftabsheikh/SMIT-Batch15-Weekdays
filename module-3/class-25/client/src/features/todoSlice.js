import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
        id: nanoid(),
        text: 'Sample Todo Item',
        completed: false,
    }
  ],
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {

            const newTodo = {
                id: nanoid(),
                text: action.payload.text,
                completed : action.payload.completed || false,
            }

            state.todos.push(newTodo)
            console.log('Todo added:', newTodo)

        },

        updateTodo: (state, action) => {
            const {id, text, completed} = action.payload;

            const existingTodo = state.todos.find(todo => todo.id === id);

            if (existingTodo) {
                existingTodo.text = text
                existingTodo.completed = completed
                console.log('Todo updated:', existingTodo)
            }else{
                console.log('Todo not found with id:', id)
            }
        },

        deleteTodo: (state, action) => {
            const id = action.payload.id;

            state.todos = state.todos.filter(todo => todo.id !== id);
            console.log('Todo deleted with id:', id);
        }
    }
})

export default todoSlice.reducer;
export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions;