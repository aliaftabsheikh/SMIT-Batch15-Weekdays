import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const HeroProducts = () => {
    const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  
  async function fetchProducts(){
    try {
      const data = await fetch('https://fakestoreapi.com/products')
      const products = await data.json()
      console.log(products);

      setProducts(products)
      setLoading(false)

    } catch (error) {
      console.log("Error fetching products:", error);
      console.log("==========An error occurred while fetching products.=============");

      setLoading(false)
      
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);



if(loading){
    return (
 <div className="flex flex-col items-center mt-20 h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
      <h1 className="text-3xl font-bold text-center">Loading...</h1>
      </div>
    )
}

if(products.length === 0){
    return (
         <h1 className='text-3xl font-bold text-center mt-20 h-screen'>No Products Found</h1>
    )
}



  return (

    
    <div>
        <div className="flex flex-wrap justify-center mt-10">

  {
    products.map((item, index)=>(
      <ProductCard key={index} title={item.title} price={item.price} description={item.description} image={item.image} />
    ))
  }
  
</div>

</div>
  )
}


export default HeroProducts