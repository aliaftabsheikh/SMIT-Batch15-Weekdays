import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Layout from './Layout'
import Navbar from './components/Navbar'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',

          element: 
        
            <Home/>
        
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    }
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App
