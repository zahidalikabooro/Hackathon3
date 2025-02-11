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
              At [Your Company Name], we believe that furniture is more than just functional; it's an expression of art and a reflection of your personal style.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our skilled artisans meticulously handcraft each piece using traditional techniques passed down through generations, combined with modern innovation. We select only the finest hardwoods, luxurious fabrics, and durable materials to create furniture that will last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Our Materials Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Commitment to Quality Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Material 1 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5-4.5m0 0l-4.5-4.5M13.5 13.5l4.5-4.5m0 0l-4.5-4.5m-1.5 1.5l-4.5 4.5m0 0l4.5 4.5M3 17.25V7.5a2.25 0 012.25-2.25h14.25a2.25 0 012.25 2.25v9.75a2.25 0 01-2.25 2.25H5.25a2.25 0 01-2.25-2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Sustainably Sourced Hardwoods</h3>
              <p className="text-gray-600 leading-relaxed">
                We use responsibly harvested hardwoods known for their strength, durability, and natural beauty.
              </p>
            </div>

            {/* Material 2 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-1.5 7.5 1.5m-15 0l7.5 1.5 7.5-1.5M4.5 12.75L12 14.25l7.5-1.5m-15 0l-1.5 7.5h18l-1.5-7.5M4.5 12.75L6 15m12-2.25l1.5 2.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Luxurious Leathers & Fabrics</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer a curated selection of premium leathers and fabrics that add a touch of elegance and comfort to our designs.
              </p>
            </div>

            {/* Material 3 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L22.5 6M16.5 4.5L22.5 6M16.5 19.5L22.5 18M2.25 6l1.108 2.645a3.75 3.75 0 003.396 1.757l3.043-.752a3.75 3.75 0 012.157-.752l2.841 2.118m0 0l-.131 9.258a3.75 3.75 0 01-2.157 2.47l-2.841-.705a3.75 3.75 0 00-3.396-1.758l-3.108.77m0 0l5.629-5.945" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Durable Metal Accents</h3>
              <p className="text-gray-600 leading-relaxed">
                Our metal accents are carefully chosen for their strength, resistance to corrosion, and refined aesthetic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2 p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>

            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision for Your Home</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We envision a world where every home is a sanctuary, filled with furniture that inspires joy and fosters connection. We strive to provide pieces that are not only beautiful but also functional and sustainable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team is constantly innovating and exploring new designs to meet the evolving needs of modern living. We're passionate about helping you create a space that is uniquely yours.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Transform Your Living Space Today</h2>
          <p className="text-lg text-gray-700 mb-8">
            Browse our exquisite furniture collection and discover the perfect pieces to elevate your home.
          </p>
          <a
            href="/shop"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 inline-block"
          >
            Explore Our Collection
          </a>
        </div>
      </section>
    </div>
  );
}