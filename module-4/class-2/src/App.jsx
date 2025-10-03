import {useState} from "react"
import './App.css'



function App() {

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("dark")


  // function handleIncrement(){
  //   console.log("Increment Clicked");
  //   console.log("Count", count);
    
  //   setCount(count + 1)
  // }

  // function handleDecrement(){
  //   console.log("Decrement Clicked");
  //   console.log("Count", count);
    
  //   if(count > 0 ){
  //     setCount(count - 1)
  //   }
  // }


  return (
   <div className={`container ${theme === "light" ? "light-mode" : "dark-mode"}`}>
    <h1 className="header">Counter App</h1>
    
    <h2>{count}</h2>


<div className="btn_container">
    <button onClick={()=> setCount(count + 1)} className="btn btn-primary">+</button>
    <button onClick={() =>setCount(count - 1)} className="btn btn-danger">-</button>
    

    {/* <button onClick={handleIncrement} className="btn btn-primary">+</button>
    <button onClick={handleDecrement} className="btn btn-danger">-</button> */}
</div>

<button className="btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "Dark Mode" : "Light Mode"} </button>

   </div>
  )
}

export default App
