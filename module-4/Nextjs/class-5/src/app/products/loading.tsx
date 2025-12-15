export default function Loading() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <div className="h-10 w-48 animate-pulse rounded bg-gray-200"></div>
          <div className="h-8 w-32 animate-pulse rounded bg-gray-200"></div>
        </div>

        <section className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters Skeleton */}
            <div className="hidden lg:block space-y-6">
              <div className="h-6 w-24 animate-pulse rounded bg-gray-200"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                ))}
              </div>
              <div className="h-6 w-24 animate-pulse rounded bg-gray-200 pt-8"></div>
              <div className="h-10 w-full animate-pulse rounded bg-gray-200"></div>
            </div>

            {/* Product Grid Skeleton */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex flex-col space-y-4">
                    <div className="aspect-square w-full animate-pulse rounded-lg bg-gray-200"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
                      <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-6 w-20 animate-pulse rounded bg-gray-200"></div>
                      <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
