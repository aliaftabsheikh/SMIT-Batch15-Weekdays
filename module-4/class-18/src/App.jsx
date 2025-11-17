
import { useSelector } from 'react-redux'
import Login from './components/Login'
import Profile from './components/Profile'
// import Todo from './components/Todo'

function App() {

  const token = useSelector((state) => state.auth.token);

  return <div>{token ? <Profile /> : <Login />}</div>;

  // return (
  //   // <Todo/>

    
  // )
}

export default App
