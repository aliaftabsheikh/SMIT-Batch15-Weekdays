'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



// const Navbar = () => {
//   return (
// <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
//   <div className="text-2xl font-bold animate-pulse cursor-pointer">MyLogo</div>
//   <ul className="flex space-x-6">
//     {['About', 'Contact'].map((item) => (
//       <li key={item} className="group relative cursor-pointer">
//         <Link href={`/${item.toLowerCase()}`} className="text-lg font-medium transition-colors duration-300 group-hover:text-yellow-300">
//           {item}
//         </Link>
//         <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
//       </li>
//     ))}
//   </ul>
// </nav>
//   )
// }

// export default Navbar
import { useCart } from '@/context/CartContext'

const Navbar = () => {
    const pathname = usePathname()
    const { cartCount } = useCart()

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                                <span className="text-white font-bold text-xl">N</span>
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                                NextNav
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                                            ${
                                                isActive
                                                    ? 'text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md transform scale-105'
                                                    : 'text-gray-100 hover:text-indigo-600 hover:bg-indigo-50'
                                            }
                                        `}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-ping" />
                                        )}
                                    </Link>
                                )
                            })}
                        </div>

                        {/* Cart Icon */}
                        <Link href="/cart" className="relative p-2 text-gray-100 hover:text-indigo-600 transition-colors">
                            <span className="sr-only">Cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button (Placeholder) */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar