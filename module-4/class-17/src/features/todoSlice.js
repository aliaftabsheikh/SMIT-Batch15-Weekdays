import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos : [
        {
        id : 1,
        title : "Learn Redux Toolkit",
    }
]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action)=>{

            const todo = {
                id: nanoid(),
                title: action.payload.title,
            }

            state.todos.push(todo)

            console.log("TODO Added", action.payload);
            
        },

        

        
    }
})


export const {addTodo} = todoSlice.actions
export default todoSlice.reducer