'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SortDropdown = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort') || 'newest';

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', e.target.value);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">
        Sort by
      </label>
      <select
        id="sort"
        name="sort"
        value={currentSort}
        onChange={handleSortChange}
        className="block w-full rounded-md border-gray-300 py-1.5 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm border px-2"
      >
        <option value="newest">Newest</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="best_selling">Best Selling</option>
      </select>
    </div>
  );
};

export default SortDropdown;
