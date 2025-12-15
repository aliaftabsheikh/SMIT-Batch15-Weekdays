'use client';

import React, { useState } from 'react';
import { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';

interface ProductConfigurationProps {
  product: Product;
}

const ProductConfiguration: React.FC<ProductConfigurationProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    alert(`Added ${quantity} ${product.name} (${selectedColor}, ${selectedSize}) to cart!`);
  };

  return (
    <div className="mt-10 flex flex-col space-y-8">
      {/* Colors */}
      <div>
        <h3 className="text-sm font-medium text-gray-900">Color</h3>
        <div className="mt-4 flex items-center space-x-3">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400 ${
                selectedColor === color ? 'ring-2 ring-offset-1' : ''
              }`}
              aria-label={color}
            >
              <span
                aria-hidden="true"
                className="h-8 w-8 rounded-full border border-black border-opacity-10"
                style={{ backgroundColor: color.toLowerCase().split('/')[0] }} // Simple color mapping
                title={color}
              />
            </button>
          ))}
          <span className="ml-2 text-sm text-gray-500">{selectedColor}</span>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">Size</h3>
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Size guide
          </a>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 ${
                selectedSize === size
                  ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'border-gray-200 bg-white text-gray-900 shadow-sm'
              }`}
            >
              <span>{size}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex gap-4">
        <div className="w-24">
          <label htmlFor="quantity" className="sr-only">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            className="block w-full rounded-md border-gray-300 py-3 text-center text-base focus:border-indigo-500 focus:ring-indigo-500 border"
          />
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`flex flex-1 items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
            product.inStock
              ? 'bg-indigo-600 hover:bg-indigo-700'
              : 'cursor-not-allowed bg-gray-400'
          }`}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductConfiguration;
