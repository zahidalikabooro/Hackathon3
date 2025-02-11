import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-custom-yellow w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12 md:py-0">
      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
          Rocket Single <br /> Seater
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Experience the ultimate comfort with our premium single-seater sofa.
        </p>
        <a href="./Single-Product" className="mt-4">
          <button className="bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 transform hover:scale-105">
            Shop Now
          </button>
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <Image
          src="/sofa.png"
          alt="Rocket Single Seater Sofa"
          width={600} // Adjust dimensions accordingly
          height={400}
          className="object-cover w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
