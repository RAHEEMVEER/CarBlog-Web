import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8">
  <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
    
    {/* Logo and Brand */}
    <div className="mb-6 md:mb-0">
      <h2 className="text-3xl font-bold text-gray-200">YourCarBlog</h2>
      <p className="text-gray-400 mt-2">Your trusted source for car reviews and news.</p>
    </div>
    
    {/* Navigation Links */}
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-6 md:space-y-0">
      <a href="/" className="text-gray-300 hover:text-white">Home</a>
      <a href="/cars" className="text-gray-300 hover:text-white">Cars</a>
      <a href="/blog" className="text-gray-300 hover:text-white">Blog</a>
      <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
    </div>
    
    {/* Social Media Links */}
    <div className="flex space-x-6 mt-6 md:mt-0">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f text-gray-300 hover:text-white text-2xl"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter text-gray-300 hover:text-white text-2xl"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram text-gray-300 hover:text-white text-2xl"></i>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube text-gray-300 hover:text-white text-2xl"></i>
      </a>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="border-t border-gray-700 mt-8 pt-4 text-center">
    <p className="text-gray-400 text-sm">&copy; 2024 YourCarBlog. All Rights Reserved.</p>
  </div>
</div>

  )
}
