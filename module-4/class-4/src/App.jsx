import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import ProductCard from "./components/ProductCard/ProductCard"

function App() {

  const [products, setProducts] = useState([])

  async function fetchProducts(){
    try {
      const data = await fetch('https://fakestoreapi.com/products')
      const products = await data.json()
      console.log(products);

      setProducts(products)

    } catch (error) {
      console.log("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  if(products.length === 0){
    return (
      <div className="flex flex-col items-center mt-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
      <h1 className="text-3xl font-bold text-center">Loading...</h1>
      </div>
    )
  }

  
  return (
    <>
  <Navbar/>


{/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-5" onClick={fetchProducts}>Fetch Products</button> */}

<div className="flex flex-wrap justify-center mt-10">

  {
    products.map((item, index)=>(
      <ProductCard key={index} title={item.title} price={item.price} description={item.description} image={item.image} />
    ))
  }
  
</div>



    </>
  )
}

export default App
