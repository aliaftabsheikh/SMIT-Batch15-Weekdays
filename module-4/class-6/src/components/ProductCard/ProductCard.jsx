import React from 'react'

const ProductCard = ({
    title,
    price, 
    description,
    image

}) => {

return (
    <div className='border rounded w-[300px] shadow pb-2 m-2 flex flex-col items-center gap-4'>
        <img className='w-full h-[300px] object-contain' src={image} alt="Product" />

        <h2 className='text-2xl font-bold'>{title}</h2>

        <p className='text-gray-600 '>
            {description.length > 50 ? description.slice(0, 50) + '...' : description}
        </p>

        <p className='text-xl font-semibold'>${price}</p>

        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Add to Cart</button>
    </div>
)
}

export default ProductCard