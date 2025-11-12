import { createSlice, nanoid } from '@reduxjs/toolkit'
import { DeleteIcon } from 'lucide-react'


const initialState = {
    todo: [{
        id: 1, 
        task: "Learn Redux Toolkit",
        completed: false
    }]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                task: action.payload.task,
                completed: false

            }

            state.todo.push(todo)
            console.log("ADD TODO !", action.payload.task);
        },
    }

})


export const {addTodo} = todoSlice.actions
export default todoSlice.reducer