import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {

    console.log("PROPS:", props);
    
  return (
   
    <div className="product-card">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <span>{props.price}</span>
    </div>
    
  )
}

export default ProductCard