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
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return; // Prevent empty search
    router.push(`/product/${searchQuery.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <header className="bg-amber-50 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation */}
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo & Mobile Menu */}
          <div className="flex items-center gap-x-4">
            <button
              className="md:hidden text-gray-700 hover:text-rose-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-rose-600">ShopCart</span>
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="flex flex-1 relative group">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-500 hover:text-rose-600">
                <IoIosSearch className="h-6 w-6" />
              </button>
            </form>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-gray-600">
              <Link href="/my-account" className="hover:text-rose-600 transition-colors">
                <IoMdContact className="h-6 w-6" />
              </Link>
              <button className="hover:text-rose-600 transition-colors">
                <CiHeart className="h-6 w-6" />
              </button>
              <Link href="/cart" className="hover:text-rose-600 transition-colors relative">
                <CiShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-8 py-3 border-t border-gray-100">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-16 bg-white border-b">
            <div className="px-4 py-3 space-y-4">
              {/* Mobile Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-500">
                  <IoIosSearch className="h-6 w-6" />
                </button>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {["Home", "Shop", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block py-2 px-4 text-gray-700 hover:bg-rose-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              {/* Mobile Bottom Icons */}
              <div className="pt-4 border-t border-gray-100 flex justify-around">
                <Link href="/my-account" className="text-gray-600 hover:text-rose-600">
                  <IoMdContact className="h-6 w-6" />
                </Link>
                <button className="text-gray-600 hover:text-rose-600">
                  <CiHeart className="h-6 w-6" />
                </button>
                <Link href="/cart" className="text-gray-600 hover:text-rose-600 relative">
                  <CiShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
