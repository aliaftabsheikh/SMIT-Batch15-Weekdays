import React from 'react'
import { ThemeContext } from '../../App'

const Products = () => {
    const { theme } = React.useContext(ThemeContext);
  return (
    <div className={` mx-auto px-4 py-8 ${theme === 'light' ? 'bg-gray-400 text-black' : 'bg-gray-900 text-white'}`}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="relative">
                    <img
                        src={`https://pbs.twimg.com/media/GssN64uXAAAHW6_?format=jpg&name=large`}
                        alt={`Product ${index + 1}`}
                        className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                        Sale!
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Fashion Item {index + 1}</h3>
                    <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-indigo-600">${(29.99 + index * 10).toFixed(2)}</span>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Products