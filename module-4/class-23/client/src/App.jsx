import BlogDetails from './components/BlogDetails';
import Blogs from './components/Blogs'
import CreateBlog from './components/Admin/CreateBlog';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Blogs />,
    },
    {
      path: "/blogs/:id",
      element: <BlogDetails />,
    },
    {
      path: "/create",
      element: <CreateBlog />,
    }
  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
