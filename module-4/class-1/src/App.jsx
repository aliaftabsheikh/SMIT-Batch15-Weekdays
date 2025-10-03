import React from 'react'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  return (

  <>
  <div className='product-container'>

    {/* {[...Array(3)].map((item, index) => (
      <ProductCard key={index} />
    ))} */}


    <ProductCard  
    title="Ferrari"
    description="This is the description for Ferrari"
    price="$199999999.99"
    />

    <ProductCard 
    title="Lamborghini"
    description="This is the description for Lamborghini"
    price="$299999999.99"
    />

    <ProductCard 
    title="Bugatti"
    description="This is the description for Bugatti"
    price="$399999999.99"
    />
    </div>
  </>
  
  )
}

export default App
