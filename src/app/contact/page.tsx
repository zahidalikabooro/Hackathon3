import React from 'react';
import { FaGreaterThan, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <div
        className="relative w-full h-[200px] sm:h-[250px] md:h-[316px] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/shop.png')" }}
      >
        <img
          src="/logo.png"
          alt="logo"
          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[77px] md:h-[77px] mb-2 sm:mb-3 md:mb-4"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 md:mb-4 text-white">Contact</h1>
        <div className="flex items-center space-x-1 sm:space-x-2 text-gray-200">
          <span className="text-xs sm:text-sm">Home</span>
          <FaGreaterThan className="text-[8px] sm:text-[10px] md:text-xs" />
          <span className="text-xs sm:text-sm font-medium">Contact</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Get In Touch With Us</h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            For more information about our product and services, please feel free to drop us an email.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-center w-full max-w-6xl gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-6 w-full md:w-1/2">
            {/* Address */}
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
              <FaMapMarkerAlt className="w-6 h-6 text-blue-500 mt-1" />
              <div className="ml-4">
                <h2 className="text-base font-semibold text-gray-800">Address</h2>
                <p className="text-sm text-gray-600 mt-1">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
              <FaPhone className="w-6 h-6 text-blue-500 mt-1" />
              <div className="ml-4">
                <h2 className="text-base font-semibold text-gray-800">Phone</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
              <FaClock className="w-6 h-6 text-blue-500 mt-1" />
              <div className="ml-4">
                <h2 className="text-base font-semibold text-gray-800">Working Time</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <form className="space-y-4 w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Return Section */}
      <div className="w-full bg-[#FAF4F4] py-12">
        <div className="flex flex-wrap justify-around gap-6 px-4 max-w-6xl mx-auto">
          <div className="text-center w-full sm:w-[45%] md:w-[30%] p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-base font-bold text-gray-800">Free Delivery</h1>
            <p className="text-sm text-gray-600 mt-2">For all orders over $50.</p>
          </div>
          <div className="text-center w-full sm:w-[45%] md:w-[30%] p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-base font-bold text-gray-800">90 Days Return</h1>
            <p className="text-sm text-gray-600 mt-2">If goods have problems.</p>
          </div>
          <div className="text-center w-full sm:w-[45%] md:w-[30%] p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-base font-bold text-gray-800">Secure Payment</h1>
            <p className="text-sm text-gray-600 mt-2">100% secure payment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;