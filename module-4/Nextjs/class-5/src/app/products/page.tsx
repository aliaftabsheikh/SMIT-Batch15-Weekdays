import React, { Suspense } from 'react';
import { getProducts, getCategories } from '@/lib/data';
import ProductCard from '@/app/components/ProductCard';
import FilterSidebar from '@/app/components/FilterSidebar';
import SortDropdown from '@/app/components/SortDropdown';

interface ProductsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const products = await getProducts(resolvedSearchParams);
  const categories = await getCategories();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
          <div className="flex items-center">
            <SortDropdown />
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              <FilterSidebar categories={categories} />
            </form>

            {/* Product grid */}
            <div className="lg:col-span-3">
              {products.length === 0 ? (
                <div className="flex h-96 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                  <div>
                    <h3 className="mt-2 text-sm font-semibold text-gray-900">No products found</h3>
                    <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}