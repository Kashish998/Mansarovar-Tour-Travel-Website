"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PhoneCall, Mail, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PACKAGES from "./packagesData"; // Import package data
import Hero from "../components/Hero";

export default function HomePackages() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjusted threshold for better visibility on small screens
  });

  return (
    <section className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Section Heading */}
      <motion.div
<<<<<<< HEAD
        className="text-center mb-6 pt-6 pb-3 px-4 w-full"
=======
        className="text-center mb-6 pt-6 px-4 w-full"
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
<<<<<<< HEAD
    <h2 className="text-3xl sm:text-5xl md:text-4xl font-extrabold text-gray-800 relative inline-block">
    Kailash Mansarovar Packages
    <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded-full"></span>
  </h2>

  {/* Subheading */}
  <p className="text-lg sm:text-xl text-gray-600 mt-4 font-medium">
    Explore our exclusive travel packages for a sacred and adventurous journey.
  </p>

=======
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 relative">
          Kailash Mansarovar Packages
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded-full"></span>
        </h2>
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
      </motion.div>

      {/* Package Cards - Fully Responsive */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4"
      >
        {PACKAGES.map((pkg, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg flex flex-col transition-transform hover:scale-105"
          >
            {/* Package Image */}
            <Image
              src={pkg.img}
              alt={pkg.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover rounded-t-2xl"
              priority
            />

            {/* Package Info */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">{pkg.title}</h3>

              {/* Ratings */}
              <div className="flex items-center gap-1 mt-1 text-yellow-500">
                {Array(pkg.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} />
                  ))}
                <span className="text-gray-700 text-sm ml-1">({pkg.rating})</span>
              </div>

              {/* Location & Difficulty */}
              <p className="text-gray-700 text-sm mt-1">
                📍 {pkg.location} &bull; ⛰ {pkg.difficulty}
              </p>

              {/* Duration & Price */}
              <p className="text-gray-800 text-sm font-medium mt-1">
                ⏳ {pkg.duration} &bull; 💰 {pkg.price}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm flex-grow mt-2">{pkg.description}</p>

<<<<<<< HEAD
             
                        {/* Buttons for package details & contact */}
                        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-2 mt-4">
                {/* View Details Button */}
                {pkg.link ? (
                  <Link href={pkg.link}>
                    <button className="flex items-center gap-1.5 bg-yellow-600 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm font-medium">
                      More Details
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-1.5 bg-yellow-600 text-gray-600 px-3 py-1.5 rounded-md shadow-md cursor-not-allowed text-sm font-medium"
                  >
                    Not Available
                  </button>
                )}

                {/* Call Button */}
                <Link href="tel:+1234567890" aria-label="Call us">
                  <button className="flex items-center gap-1.5 bg-yellow-600 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-gray-900  transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm font-medium">
                    <PhoneCall size={14} aria-hidden="true" />
                    Call
                  </button>
                </Link>

                {/* WhatsApp Button */}
                <Link
                  href="https://wa.me/919889136789"
                  aria-label="Chat on WhatsApp"
                >
                  <button className="flex items-center gap-1.5 bg-yellow-600 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-gray-900  transition-all focus:outline-none focus:ring-2 focus:ring-green-400 text-sm font-medium">
                    <MessageCircle size={14} aria-hidden="true" />
                    Chat
                  </button>
                </Link>
               
=======
              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <Link href={pkg.link}>
                  <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900">
                    View Details
                  </button>
                </Link>
                <div className="flex space-x-3">
                  <a href="tel:+1234567890" aria-label="Call Us">
                    <PhoneCall size={22} className="text-black hover:text-yellow-500 transition" />
                  </a>
                  <a href="mailto:info@example.com" aria-label="Email Us">
                    <Mail size={22} className="text-black hover:text-yellow-500 transition" />
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Us">
                    <MessageCircle size={22} className="text-black hover:text-yellow-500 transition" />
                  </a>
                </div>
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
