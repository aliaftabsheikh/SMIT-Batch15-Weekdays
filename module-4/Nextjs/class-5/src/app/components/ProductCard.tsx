import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg">
      <Link href={`/products/${product.id}`} className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {product.originalPrice && (
          <span className="absolute top-2 right-2 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
            Sale
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="text-sm font-bold text-white">Out of Stock</span>
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={`/products/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
            )}
          </div>
          <button
            type="button"
            className="z-10 rounded-full bg-gray-900 p-2 text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="Add to cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
