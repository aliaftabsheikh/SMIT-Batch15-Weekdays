import React from 'react'
import productImage from '../../assets/images/ferrari-1.jpeg'
import './ProductCars.css'


const ProductCard = ({name, description, price, image}) => {
  return (
   <div className='product_card_container'>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
    <span>${price}</span>
    <button>Add to Cart</button>
   </div>
  )
}

export default ProductCard