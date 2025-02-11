import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineFilterList } from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import { FaGripLinesVertical } from "react-icons/fa";

export default function Page() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div
        className="relative w-full h-[250px] md:h-[316px] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/shop.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Logo */}
        <img
          src="/logo.png"
          alt="logo"
          className="w-[60px] h-[60px] md:w-[77px] md:h-[77px] mb-2 md:mb-4 relative z-10"
        />

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-4 md:mb-10 relative z-10">
          Shop
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-1 md:space-x-2 text-gray-200 mb-4 md:mb-10 relative z-10">
          <span className="text-xs md:text-sm">Home</span>
          <FaGreaterThan className="text-[8px] md:text-xs" />
          <span className="text-xs md:text-sm font-medium">Shop</span>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-[#FAF4F4] w-full h-[80px] md:h-[100px] flex items-center justify-between px-4 md:px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="flex items-center space-x-1">
            <MdOutlineFilterList className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
            <span className="text-sm md:text-base">Filter</span>
          </button>
          <HiViewGrid className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]" />
          <BsViewList className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
          <FaGripLinesVertical className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />
          <span className="ml-1 md:ml-2 text-xs md:text-sm">Showing 1–16 of 32 results</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
          <select className="border border-gray-300 rounded-md px-1 py-0.5 md:px-2 md:py-1 text-xs md:text-sm focus:outline-none">
            <option>Show 16</option>
          </select>
          <select className="border border-gray-300 rounded-md px-1 py-0.5 md:px-2 md:py-1 text-xs md:text-sm focus:outline-none">
            <option>Sort by Default</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
        {/* Sample Product Data (Replace with your actual data) */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
          <ProductCard key={index} product={{ name: "Trenton Modular Sofa", price: "25,000.00", imageUrl: `/product${String.fromCharCode(96 + index % 16 + 1)}.png` }} />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center w-full h-[60px] text-center mt-4 md:mt-6">
        <div className="flex space-x-2 md:space-x-4">
          <button className="bg-[#FBEBB5] px-3 py-1 rounded-lg text-black font-medium shadow text-sm md:text-base hover:bg-[#e0d1a0] transition-colors duration-200">
            1
          </button>
          <button className="bg-[#FBEBB5] px-3 py-1 rounded-lg text-black font-medium shadow text-sm md:text-base hover:bg-[#e0d1a0] transition-colors duration-200">
            2
          </button>
          <button className="bg-[#FBEBB5] px-3 py-1 rounded-lg text-black font-medium shadow text-sm md:text-base hover:bg-[#e0d1a0] transition-colors duration-200">
            3
          </button>
          <button className="bg-[#FBEBB5] px-4 py-1 rounded-lg text-black font-medium shadow text-sm md:text-base hover:bg-[#e0d1a0] transition-colors duration-200">
            Next
          </button>
        </div>
      </div>

      {/* Return Section */}
      <div className="w-full h-[250px] md:h-[300px] bg-[#FAF4F4] flex justify-center items-center">
        <div className="flex justify-between w-full md:w-[1200px] px-4 md:px-0 flex-col md:flex-row">
          <div className="w-full md:w-[376px] text-center p-4">
            <h1 className="text-base md:text-xl font-bold">Free Delivery</h1>
            <p className="text-gray-600 text-sm md:text-base">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>
          <div className="w-full md:w-[376px] text-center p-4">
            <h1 className="text-base md:text-xl font-bold">90 Days Return</h1>
            <p className="text-gray-600 text-sm md:text-base">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>
          <div className="w-full md:w-[376px] text-center p-4">
            <h1 className="text-base md:text-xl font-bold">Secure Payment</h1>
            <p className="text-gray-600 text-sm md:text-base">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Product {
  name: string;
  price: string;
  imageUrl: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-[150px] md:h-[200px] object-cover"
      />
      <div className="p-4 flex-grow">
        <h2 className="text-base md:text-lg font-semibold mt-2">{product.name}</h2>
        <p className="text-lg md:text-xl font-bold text-gray-800 mt-1">Rs. {product.price}</p>
      </div>
      <div className="p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Buy Now
        </button>
      </div>
    </div>
  );
}