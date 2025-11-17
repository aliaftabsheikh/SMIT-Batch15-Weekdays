import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './features/todoSlice'

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos)

  function handleAddTodo() {
    dispatch(addTodo({
      title: input
    }))
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-black'>
    <div>
        <input className=' text-white border border-white p-2 rounded' value={input} onChange={(e) => setInput(e.target.value)} />

      <Button onClick={handleAddTodo} className='ml-4' variant="outline">Add Todo</Button>

    </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="text-white">
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
