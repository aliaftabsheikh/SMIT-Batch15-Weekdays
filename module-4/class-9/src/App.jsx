import { useState, useEffect, createContext } from 'react'
import ChildA from './components/ChildA/ChildA'

const UserContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  const [caloriesCount, setCaloriesCount] = useState(0)
  const [tasbeeh, setTasbeeh] = useState(0)


  // FIRST STAGE

  // useEffect(() => {
  //   alert("Hello World from useEffect")
  // })


  // Second stage 

  // useEffect(()=>{
  //   alert('I will run only once when the component is mounted')
  // }, [])

  // Third Stage 

  // useEffect(()=>{
  //   alert(`Count has been updated to ${count}`)
  // }, [count])

  // Fourth Stage

  // useEffect(()=>{
  //   alert(`Count updated to ${count}`)
  //   alert(`Calories Count updated to ${caloriesCount}`)
  // }, [count, caloriesCount])

  // Fifth Stage 
  // Cleanup function in useEffect
  // let count = 0


  return (
    // <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-4">
    //   <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-6xl transform transition-all duration-300 hover:shadow-3xl">
    //     <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
    //       Counter App
    //     </h1>
        
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //       {/* Counter Section */}
    //       <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 transform transition-transform duration-300 hover:rotate-1">
    //         <h2 className="text-lg font-bold text-center text-purple-600 mb-4">Counter</h2>
    //         <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 mb-4">
    //           <p className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-bounce">
    //             {count}
    //           </p>
    //         </div>
    //         <div className="flex gap-2 mb-3">
    //           <button
    //             onClick={() => setCount(count - 1)}
    //             className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-2 px-3 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg text-sm"
    //           >
    //             ➖ Dec
    //           </button>
    //           <button
    //             onClick={() => setCount(count + 1)}
    //             className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-3 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg text-sm"
    //           >
    //             ➕ Inc
    //           </button>
    //         </div>
    //         <button
    //           onClick={() => setCount(0)}
    //           className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 text-sm"
    //         >
    //           Reset
    //         </button>
    //       </div>

    //       {/* Calories Counter Section */}
    //       <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 transform transition-transform duration-300 hover:rotate-1">
    //         <h2 className="text-lg font-bold text-center text-orange-600 mb-4">Calories</h2>
    //         <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-6 mb-4">
    //           <p className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
    //             {caloriesCount * 50}
    //           </p>
    //           <p className="text-center text-gray-600 mt-2 text-sm">kcal</p>
    //         </div>
    //         <div className="flex gap-2">
    //           <button
    //             onClick={() => setCaloriesCount(caloriesCount - 1)}
    //             className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-3 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg text-sm"
    //           >
    //             ➖
    //           </button>
    //           <button
    //             onClick={() => setCaloriesCount(caloriesCount + 1)}
    //             className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-2 px-3 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg text-sm"
    //           >
    //             ➕
    //           </button>
    //         </div>
    //       </div>

    //       {/* Tasbeeh Counter Section */}
    //       <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 transform transition-transform duration-300 hover:rotate-1">
    //         <h2 className="text-lg font-bold text-center text-green-600 mb-4">Tasbeeh</h2>
    //         <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6 mb-4">
    //           <p className="text-4xl text-center mb-2">📿</p>
    //           <p className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
    //             {tasbeeh}
    //           </p>
    //           <p className="text-center text-gray-600 mt-2 text-sm">Subhan'Allah</p>
    //         </div>
    //         <div className="flex gap-2">
    //           <button
    //             onClick={() => setTasbeeh(tasbeeh + 1)}
    //             className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-2 px-3 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg text-sm"
    //           >
    //             ➕
    //           </button>
    //           <button
    //             onClick={() => setTasbeeh(tasbeeh - 1)}
    //             className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-2 px-3 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg text-sm"
    //           >
    //             ➖
    //           </button>
    //           <button
    //             onClick={() => setTasbeeh(0)}
    //             className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-2 px-3 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg text-sm"
    //           >
    //             🔄
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <UserContext.Provider value={{name: 'John Doe', age: 30}}>

    <ChildA />


    </UserContext.Provider>
  )
}

export default App;
export { UserContext }
