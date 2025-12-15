import React from 'react'

const Navbar = () => {
  return (
          <nav className="bg-gray-800 text-white px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Logo</h1>
            <ul className="flex gap-6">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar