import React from 'react'

const Footer = () => {
  return (

    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My E-commerce Store. All rights reserved.</p>
        <p className="mt-2">Follow us on 
          <a href="#" className="text-blue-400 hover:underline mx-2">Facebook</a>, 
          <a href="#" className="text-blue-400 hover:underline mx-2">Twitter</a>, 
          <a href="#" className="text-blue-400 hover:underline mx-2">Instagram</a>
        </p>
      </div>
    </footer>

  )
}

export default Footer