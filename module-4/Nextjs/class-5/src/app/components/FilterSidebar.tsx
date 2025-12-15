'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface FilterSidebarProps {
  categories: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [priceMin, setPriceMin] = useState(searchParams.get('price_min') || '');
  const [priceMax, setPriceMax] = useState(searchParams.get('price_max') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [inStock, setInStock] = useState(searchParams.get('in_stock') === 'true');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Debounce price and search updates
  useEffect(() => {
    const timer = setTimeout(() => {
      updateFilters({ 
        price_min: priceMin, 
        price_max: priceMax,
        search: searchQuery
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [priceMin, priceMax, searchQuery]);

  const updateFilters = useCallback(
    (updates: { [key: string]: string | null }) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === '') {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      router.push(`/products?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const handleCategoryChange = (category: string) => {
    const newCategory = selectedCategory === category ? '' : category;
    setSelectedCategory(newCategory);
    updateFilters({ category: newCategory || null });
  };

  const handleInStockChange = (checked: boolean) => {
    setInStock(checked);
    updateFilters({ in_stock: checked ? 'true' : null });
  };

  return (
    <div className="space-y-8">
      {/* Search */}
      <div>
        <h3 className="text-sm font-medium text-gray-900">Search</h3>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full rounded-md border-gray-300 py-1.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-2"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-gray-900">Category</h3>
        <div className="mt-4 space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                id={`category-${category}`}
                name="category"
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={`category-${category}`}
                className="ml-3 text-sm text-gray-600 capitalize"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price-min" className="sr-only">
              Min Price
            </label>
            <input
              type="number"
              id="price-min"
              placeholder="Min"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              className="block w-full rounded-md border-gray-300 py-1.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-2"
            />
          </div>
          <div>
            <label htmlFor="price-max" className="sr-only">
              Max Price
            </label>
            <input
              type="number"
              id="price-max"
              placeholder="Max"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              className="block w-full rounded-md border-gray-300 py-1.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-2"
            />
          </div>
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-sm font-medium text-gray-900">Availability</h3>
        <div className="mt-4 flex items-center">
          <input
            id="in-stock"
            name="in-stock"
            type="checkbox"
            checked={inStock}
            onChange={(e) => handleInStockChange(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="in-stock" className="ml-3 text-sm text-gray-600">
            In Stock Only
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
