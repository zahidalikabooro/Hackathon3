import React from "react";

import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
        <p className="text-sm sm:text-lg mt-2">We’d love to hear from you!</p>
      </div>

      {/* Contact Information */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
              <p className="text-gray-700">Saddar Karachi</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-600 w-6 h-6" />
              <p className="text-gray-700">03110898690</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 w-6 h-6" />
              <p className="text-gray-700">kaboorosahab213@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-blue-600 w-6 h-6" />
              <p className="text-gray-700">Mon-Fri: 9 AM - 8 PM | Sat-Sun: 10 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
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
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[350px]">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799145612!2d-74.25986596331356!3d40.69767006334353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b8e78f6e29%3A0xe91be25f1a3e70a!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647911658410!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-gray-900 py-10 text-white text-center">
        <p>&copy; 2024 YourFurnitureStore. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default ContactPage;
