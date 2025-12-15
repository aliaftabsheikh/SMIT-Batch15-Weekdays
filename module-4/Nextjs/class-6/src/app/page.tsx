import Image from "next/image";
import Link from "next/link";
import { IProduct } from "./types";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });

  const products: IProduct[] = await data.json();

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-900 tracking-tighter">
            VIRSA <span className="text-amber-600">.</span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-stone-600">
            <a href="#" className="hover:text-emerald-900 transition-colors">Home</a>
            <a href="#collection" className="hover:text-emerald-900 transition-colors">Collection</a>
            <a href="#artisans" className="hover:text-emerald-900 transition-colors">Artisans</a>
            <a href="#about" className="hover:text-emerald-900 transition-colors">About</a>
          </div>
          <button className="bg-emerald-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors">
            Shop Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-600/20 text-amber-400 text-sm font-semibold tracking-wide mb-6 border border-amber-600/30">
            AUTHENTIC PAKISTANI CRAFTSMANSHIP
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Celebrating <span className="text-amber-500">Heritage</span>, <br />
            Preserving Culture.
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover the timeless beauty of Pakistan's traditional artistry. From the deserts of Sindh to the valleys of Kashmir, we bring you authentic handcrafted treasures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#collection" className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-transform hover:scale-105 shadow-lg shadow-amber-900/20">
              Explore Collection
            </a>
            <a href="#artisans" className="px-8 py-4 bg-transparent border border-stone-500 text-stone-300 rounded-full font-semibold hover:bg-white/5 hover:text-white transition-colors">
              Meet the Artisans
            </a>
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-stone-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">100% Handcrafted</h3>
            <p className="text-stone-500 text-sm">Every piece is made by skilled artisans with generations of experience.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Made in Pakistan 🇵🇰</h3>
            <p className="text-stone-500 text-sm">Sourced directly from local villages and cultural hubs across the country.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Cash on Delivery</h3>
            <p className="text-stone-500 text-sm">Shop with confidence. Pay when you receive your authentic product.</p>
          </div>
        </div>
      </section>

      {/* Product Collection */}
      <section id="collection" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4">Curated Collection</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Handpicked items that tell a story of tradition, skill, and beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: IProduct, index: number) => (
            <Link 
              href={`/products/${product.id}`}
              key={product.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 block"
            >
              <div className="relative h-64 overflow-hidden bg-stone-200">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-900 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-stone-800 group-hover:text-emerald-800 transition-colors">{product.name}</h3>
                  <span className="font-semibold text-amber-600">Rs. {product.price.toLocaleString()}</span>
                </div>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                <button className="w-full py-3 border border-emerald-900 text-emerald-900 font-medium rounded-lg hover:bg-emerald-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-emerald-900 font-semibold border-b-2 border-emerald-900 pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-colors">
            View All Products &rarr;
          </button>
        </div>
      </section>

      {/* Artisan Story Section */}
      <section id="artisans" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                 <Image 
                  src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=800&auto=format&fit=crop" 
                  alt="Artisan working on pottery"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">Preserving the Art of Hands</h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                In a world of mass production, we stand for the slow, deliberate art of handmade creation. Every product in our collection supports a family of artisans in rural Pakistan.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                From the intricate embroidery of Multan to the wood carvings of Chiniot, we are on a mission to keep these centuries-old traditions alive for the modern world.
              </p>
              <button className="bg-emerald-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20">
                Read Our Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Heritage Movement</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">Subscribe to receive updates on new collections, artisan stories, and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
            />
            <button className="px-8 py-3 bg-amber-600 rounded-lg font-bold hover:bg-amber-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-stone-400 py-12 border-t border-emerald-900">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white tracking-tighter mb-4">
              VIRSA <span className="text-amber-600">.</span>
            </div>
            <p className="text-sm">Connecting you with the authentic heritage of Pakistan.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home Decor</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Clothing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@virsa.pk</li>
              <li>+92 300 1234567</li>
              <li>Lahore, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-emerald-900 text-center text-xs">
          <p>&copy; 2025 Virsa Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
