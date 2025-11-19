import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from "./feature/todoSlice"
import { useState } from 'react'
import { useAddProductsMutation, useGetProductsQuery } from './services/products'

function App() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()


  const todos = useSelector(state => state.todos.todos)

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo({
        title: input
      }))
      setInput('')
    }
  }

  const  { data, isLoading, isError, refetch } = useGetProductsQuery()

  const [addProduct, {isLoading: isAdding, isError: isAddError}] = useAddProductsMutation();



  // if(isLoading){
  //   return (
  //     <div className='text-4xl font-bold text-center mt-20'>
  //       Loading....
  //     </div>
  //   )
  // }

  function handleAddProduct(){
    const newProduct = {
      title: "New Product",
      price: 29.99,
      description: "This is a newly added product.",
      category: "electronics",
      image: "https://i.pravatar.cc",
      rating: {
        rate: 4.5,
        count: 10
      }
    };

    addProduct(newProduct);
    refetch()
  }

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl p-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Todos</h1>
          
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
            <button
              onClick={handleAddProduct}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Add
            </button>
          </div>

          <div className="space-y-2">
            {isLoading ? (
              <div className="flex justify-center items-center py-16">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-blue-400 animate-spin animate-reverse"></div>
                </div>
              </div>
            ) : todos.length === 0 ? (
              <p className="text-center text-gray-400 py-8">No todos yet. Add one to get started!</p>
            ) : (

              isError ? <p className="text-center text-red-500 py-8">Error fetching todos. Please try again later.</p> :

              data?.map(todo => (
                <div
                  key={todo.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg animate-slide-in hover:bg-gray-100 transition"
                >
                  <span className="text-gray-800">{todo.title}</span>
                  <button
                    onClick={() => dispatch(deleteTodo({ id: todo.id }))}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition transform hover:scale-105"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
