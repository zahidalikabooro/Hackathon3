import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full py-12 md:py-24 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-400 to-blue-600">
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Discover the Art of Living with Exquisite Furniture
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Creating timeless pieces that transform houses into homes.
          </p>
        </div>
      </section>

      {/* Our Craftsmanship Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2 p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.25m-6 6V7.5m0 11.25a6 6 0 00-6-6v-1.25m12 3.75v3.75m-6-1.25V9.75m-6 8.75v3.75m12-3.75zm-6 1.25a6 6 0 01-6 6v-3.75m12-3.75a6 6 0 006 6V7.5" />
                </svg>
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">The Art of Craftsmanship</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At [Your Company Name], we believe that furniture is more than just functional; it&apos;s an expression of art and a reflection of your personal style.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our skilled artisans meticulously handcraft each piece using traditional techniques passed down through generations, combined with modern innovation. We select only the finest hardwoods, luxurious fabrics, and durable materials to create furniture that will last a lifetime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
