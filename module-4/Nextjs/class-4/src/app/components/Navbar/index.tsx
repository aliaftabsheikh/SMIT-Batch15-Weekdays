import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
<nav className="bg-blue-600 text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-xl">
                Logo
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
                    <Link href="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">About</Link>
                    <Link href="/services" className="hover:bg-blue-700 px-3 py-2 rounded-md">Services</Link>
                    <Link href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md">Contact</Link>
                </div>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Navbar