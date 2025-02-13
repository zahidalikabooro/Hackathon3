"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoMdContact, IoIosSearch } from "react-icons/io";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Handle search submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return; // Prevent empty search
    router.push(`/product/${searchQuery.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu Toggle */}
          <div className="flex items-center gap-x-4">
            <button
              className="md:hidden text-gray-700 hover:text-rose-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-rose-600">ShopCart</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">About</Link>
            <Link href="/shop" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Shop</Link>
            <Link href="/contact" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Contact</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="flex flex-1 relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-500 hover:text-rose-600 transition-colors duration-200">
                <IoIosSearch className="h-6 w-6" />
              </button>
            </form>
          </div>

          {/* Icons (Account, Wishlist, Cart) */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-gray-600">
              <Link href="/my-account" className="hover:text-rose-600 transition-colors duration-200">
                <IoMdContact className="h-6 w-6" />
              </Link>
              <button className="hover:text-rose-600 transition-colors duration-200">
                <CiHeart className="h-6 w-6" />
              </button>
              <Link href="/cart" className="hover:text-rose-600 transition-colors duration-200 relative">
                <CiShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">About</Link>
              <Link href="/shop" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Shop</Link>
              <Link href="/contact" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Contact</Link>
            </div>
            <div className="mt-4">
              <form onSubmit={handleSearch} className="flex relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-500 hover:text-rose-600 transition-colors duration-200">
                  <IoIosSearch className="h-6 w-6" />
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}