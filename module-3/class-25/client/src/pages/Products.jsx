import React, { useEffect } from 'react';
import { useGetAllProductsQuery } from '../services/products';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { ShoppingBag, Star, Filter } from 'lucide-react';

const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col h-full"
        >
            <div className="aspect-[3/4] w-full overflow-hidden bg-stone-200 rounded-sm relative mb-4">
                {product.images && product.images[0] ? (
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                ) : (
                    <div className="h-full w-full flex items-center justify-center text-stone-400 bg-stone-100">
                        No Image
                    </div>
                )}
                
                {/* Quick Add Overlay - Mobile: Always bottom right, Desktop: Slide up */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center translate-y-2 group-hover:translate-y-0 text-white">
                    <Button variant="primary" size="md" className="w-full shadow-lg backdrop-blur-sm bg-primary-900/90 text-white border-none hover:bg-primary-800">
                        Add to Cart
                    </Button>
                </div>
                
                {/* Badges */}
                {product.price > 100 && (
                     <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur text-xs font-bold tracking-wider text-primary-900 uppercase">
                        Premium
                     </div>
                )}
            </div>

            <div className="flex justify-between items-start space-x-4 flex-grow">
                <div>
                    <h3 className="text-lg font-medium text-stone-900 group-hover:text-primary-600 transition-colors cursor-pointer">
                        <span aria-hidden="true" className="absolute inset-0 z-10" />
                        {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-stone-500 line-clamp-2">{product.description}</p>
                </div>
                <p className="text-lg font-display font-medium text-primary-900">${product.price}</p>
            </div>
        </motion.div>
    );
};

const Products = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    
    // Fallback data for visual testing if API fails or is empty
    const products = data?.products || [];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-stone-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-primary-900 h-[400px] overflow-hidden">
                <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-stone-800">
                    <img 
                        src="https://images.unsplash.com/photo-1598556851368-6f73e4444a89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                        alt="Heritage Texture" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-display text-4xl md:text-6xl text-white font-bold tracking-tight mb-4 drop-shadow-lg">
                            Timeless Heritage
                        </h1>
                        <p className="text-primary-50 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            Discover our curated collection of artisanal masterpieces, crafted with passion and rooted in tradition.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-stone-600">
                        <span className="font-display font-medium text-primary-900 text-lg">{products.length} Items</span>
                    </div>
                    
                    <div className="flex gap-4">
                        <button className="flex items-center space-x-2 text-sm font-medium text-stone-600 hover:text-primary-900 transition-colors">
                            <span>Filter</span>
                            <Filter size={16} />
                        </button>
                        <div className="h-6 w-px bg-stone-300"></div>
                        <select className="bg-transparent border-none text-sm font-medium text-stone-600 focus:ring-0 cursor-pointer outline-none hover:text-primary-900">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="aspect-[3/4] bg-stone-200 rounded-sm mb-4"></div>
                                <div className="h-4 bg-stone-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-stone-200 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-center py-20 bg-white rounded-lg border border-stone-200 shadow-sm">
                        <p className="text-primary-800 font-display text-xl mb-2">Unable to load collection</p>
                        <p className="text-stone-500 mb-6">We're having trouble connecting to our artisans.</p>
                        <Button onClick={() => window.location.reload()} variant="secondary">Try Again</Button>
                    </div>
                ) : products.length === 0 ? (
                     <div className="text-center py-20">
                        <p className="text-stone-500 text-lg font-light">Our artisans are crafting new pieces. Check back soon.</p>
                    </div>
                ) : (
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8"
                    >
                        {products.map((product, index) => (
                            <ProductCard key={product._id} product={product} index={index} />
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Products;
