import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* 📌 Address Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Contact Us
            </h3>
            <p className="text-gray-600 text-sm">
              400 University Drive, Suite 200 <br />
              Coral Gables, FL 33134, USA
            </p>
          </div>

          {/* 📌 Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Links</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 📌 Help Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Help</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* 📌 Newsletter Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Newsletter
            </h3>
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* 📌 Footer Bottom */}
        <div className="mt-8 border-t pt-6 text-center text-gray-500 text-sm">
          <p>© 2024 Meubel House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
