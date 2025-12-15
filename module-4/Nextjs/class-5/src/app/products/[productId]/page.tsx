import React from 'react';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/data';
import ProductGallery from '@/app/components/ProductGallery';
import ProductConfiguration from '@/app/components/ProductConfiguration';

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = await getProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="mb-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
              <p className="mt-2 text-lg text-gray-500">{product.brand}</p>
            </div>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <div className="flex items-baseline text-3xl tracking-tight text-gray-900">
                ${product.price.toFixed(2)}
                {product.originalPrice && (
                  <span className="ml-4 text-lg text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        product.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {product.reviewsCount} reviews
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700" dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>

            <div className="mt-6">
               <p className="text-sm text-gray-500">SKU: {product.sku}</p>
            </div>

            <ProductConfiguration product={product} />

            {/* Detailed Content */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Features</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul role="list">
                  {Object.entries(product.features).map(([key, value]) => (
                    <li key={key} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-900">{key}</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Shipping & Returns</h3>
              <p className="mt-4 text-sm text-gray-500">
                Free standard shipping on all orders over $100. Returns accepted within 30 days of delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
