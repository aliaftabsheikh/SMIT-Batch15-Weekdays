import Navbar from "./components/Navbar/Navbar"
import ProductCard from "./components/ProductCard/ProductCard"
import Footer from "./components/Footer/Footer"
import HeroProducts from "./components/HeroProducts/HeroProducts"
import Login from "./components/Login/Login";
import { useState } from "react";

function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>

{
  !isLoggedIn ?  <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> :
  (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
  <HeroProducts/>
  <Footer/> 
  </>
  ) 
 
  


}

 

    </>
  )
}

export default App
