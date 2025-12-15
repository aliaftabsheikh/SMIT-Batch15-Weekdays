import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/app/types";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-cache",
  });
  const product: IProduct = await data.json();

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-emerald-900 tracking-tighter">
            VIRSA <span className="text-amber-600">.</span>
          </Link>
          <div className="hidden md:flex space-x-8 font-medium text-stone-600">
            <Link href="/" className="hover:text-emerald-900 transition-colors">
              Home
            </Link>
            <Link href="/#collection" className="hover:text-emerald-900 transition-colors">
              Collection
            </Link>
            <Link href="/#artisans" className="hover:text-emerald-900 transition-colors">
              Artisans
            </Link>
          </div>
          <button className="bg-emerald-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors">
            Cart (0)
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <Link
          href="/#collection"
          className="inline-flex items-center text-stone-500 hover:text-emerald-900 mb-8 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="relative aspect-square bg-stone-200 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-stone-800 mb-6">
              Rs. {product.price.toLocaleString()}
            </p>
            
            <div className="prose prose-stone mb-8">
              <p className="text-lg text-stone-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-stone-300 rounded-lg">
                  <button className="px-4 py-2 text-stone-600 hover:bg-stone-100 transition-colors">-</button>
                  <span className="px-4 py-2 font-medium text-stone-800">1</span>
                  <button className="px-4 py-2 text-stone-600 hover:bg-stone-100 transition-colors">+</button>
                </div>
                <button className="flex-1 bg-emerald-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20">
                  Add to Cart
                </button>
              </div>
              <p className="text-xs text-stone-500 text-center">
                Free shipping on orders over Rs. 5000
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-12 border-t border-stone-200 pt-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Material</h3>
                <p className="text-sm text-stone-600">Premium authentic materials sourced locally.</p>
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Care</h3>
                <p className="text-sm text-stone-600">Hand wash or dry clean only to preserve quality.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
