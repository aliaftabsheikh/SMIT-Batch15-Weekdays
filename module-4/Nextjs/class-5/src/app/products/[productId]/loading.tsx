export default function Loading() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image Gallery Skeleton */}
          <div className="flex flex-col-reverse lg:flex-row lg:gap-8">
            <div className="mt-4 flex gap-4 overflow-x-auto lg:mt-0 lg:flex-col">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 w-20 flex-shrink-0 animate-pulse rounded-md bg-gray-200"></div>
              ))}
            </div>
            <div className="aspect-square w-full animate-pulse rounded-lg bg-gray-200 lg:flex-1"></div>
          </div>

          {/* Product Info Skeleton */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="mb-4">
              <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200"></div>
              <div className="mt-2 h-6 w-1/4 animate-pulse rounded bg-gray-200"></div>
            </div>

            <div className="mt-3">
              <div className="h-8 w-32 animate-pulse rounded bg-gray-200"></div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200"></div>
            </div>

            <div className="mt-10 space-y-8">
              <div className="h-12 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="h-12 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="flex gap-4">
                <div className="h-12 w-24 animate-pulse rounded bg-gray-200"></div>
                <div className="h-12 flex-1 animate-pulse rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
