import Navbar from "./components/Navbar/Navbar"
import HeroProducts from "./components/HeroProducts/HeroProducts"
import Login from "./components/Login/Login"
import Footer from "./components/Footer/Footer"
import { useState } from "react"

const App = () => {
  
    const [isLogin, setIsLogin] = useState(false)
    

  return (
<>

{
    !isLogin ? <Login isLoggedIn={isLogin} setIsLoggedIn={setIsLogin}/> : (
        <>
          <Navbar isLoggedIn={isLogin} setIsLoggedIn={setIsLogin} />
          <HeroProducts url='https://fakestoreapi.com/products' />
          <Footer />
        </>
    )
}

 
</>


  )
}

export default App