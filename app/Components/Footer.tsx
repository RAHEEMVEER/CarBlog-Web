import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-blue-800 text-white py-8">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Brand */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-200">CarPoint.</h2>
          <p className="text-sm sm:text-base text-white mt-2">Your trusted source for car reviews and news.</p>
        </div>

        <div className="flex space-x-6 mt-6 md:mt-0">
          <Link href="/"><i className="ri-facebook-fill text-gray-300 hover:text-white text-2xl"></i></Link>
          <Link href="/"><i className="ri-twitter-x-line text-gray-300 hover:text-white text-2xl"></i></Link>
          <Link href="/"><i className="ri-instagram-line text-gray-300 hover:text-white text-2xl"></i></Link>
          <Link href="/"><i className="ri-whatsapp-line text-gray-300 hover:text-white text-2xl"></i></Link>
        </div>
      </div>

      <div className="border-t border-white mt-8 text-center">
        <p className="text-white text-sm mt-4">&copy; 2024 CarPoint. All Rights Reserved.</p>
      </div>
    </div>
  );
}
