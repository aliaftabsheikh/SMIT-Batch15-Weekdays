import { useState , createContext} from 'react'


import UserProfile from './components/UserProfile/UserProfile'
import Products from './components/Products/Products'
import Todos from './components/Todos/Todos'


const UserContext = createContext()
const ThemeContext = createContext()

function App() {

  const [theme, setTheme] = useState('light')


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <UserContext.Provider value={{name: 'Ali Aftab '}}>
      

<Todos/>

    {/* //       < UserProfile/>
    //       <Products/> */}

       </UserContext.Provider>
       </ThemeContext.Provider>

  )
}

export default App

export {UserContext, ThemeContext}
