import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-8 mt-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
          </ul>
              </div>
              <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
          </ul>
              </div>
              <div>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-300">Cookies</a></li>
          </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </footer>
  )
}

export default Footer