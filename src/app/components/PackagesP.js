"use client"; // Enables client-side rendering in Next.js

import React from "react";
import { motion } from "framer-motion"; // For animations
import { useInView } from "react-intersection-observer"; // Detects if an element is in the viewport
import { PhoneCall, Mail, MessageCircle, Star } from "lucide-react"; // Icon components
import Link from "next/link"; // Next.js navigation
import Image from "next/image"; // Optimized image handling
import PACKAGES from "../data/packagesData"; // Importing package data

export default function HomePackages() {
  // Detects when the section is visible on screen
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      {/* Section Title */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }} // Starts hidden and moves up
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animates when in view
        transition={{ duration: 0.4 }} // Animation duration
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 relative">
          Kailash Mansarovar Packages
          {/* Underline effect */}
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"></span>
        </h2>
      </motion.div>

      {/* Packages Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
      >
        {/* Loop through first 4 packages */}
        {PACKAGES.slice(0, 4).map((pkg, index) => (
          <motion.div
            key={pkg.id || index}
            whileHover={{ scale: 1.02 }} // Slight zoom effect on hover
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }} // Staggered animation
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg flex flex-col transition-transform"
          >
            {/* Package Image */}
            <Image
              src={pkg.img}
              alt={pkg.title}
              width={600}
              height={300}
              className="w-full h-56 object-cover rounded-t-2xl"
              priority={index === 0} // First image loads faster for performance
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Package Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Package Title */}
              <h3 className="text-xl font-semibold text-gray-900">{pkg.title}</h3>

              {/* Star Ratings */}
              <div className="flex items-center gap-1 mt-1 text-yellow-500">
                {Array.from({ length: Math.floor(pkg.rating || 0) }, (_, i) => (
                  <Star key={i} size={16} />
                ))}
                <span className="text-gray-700 text-sm ml-1">({pkg.rating || "No rating"})</span>
              </div>

              {/* Location & Difficulty */}
              <p className="text-gray-700 text-sm mt-1">
                📍 <span className="font-medium">{pkg.location}</span> &bull; ⛰ <span className="font-medium">{pkg.difficulty}</span>
              </p>

              {/* Duration & Price */}
              <p className="text-gray-800 text-sm font-medium mt-1">
                ⏳ {pkg.duration} &bull; 💰 <span className="text-green-600">{pkg.price}</span>
              </p>

              {/* Short Description */}
              <p className="text-gray-600 text-sm flex-grow mt-2">{pkg.description}</p>

              {/* Highlights */}
              <ul className="text-sm text-gray-700 mt-3 bg-gray-100 p-3 rounded-md space-y-1">
                {pkg.highlights?.length ? (
                  pkg.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center">✅ <span className="ml-2">{highlight}</span></li>
                  ))
                ) : (
                  <li>No highlights available.</li>
                )}
              </ul>

           {/* Buttons for package details & contact */}
<div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-2 mt-4">
  {/* View Details Button */}
  {pkg.link ? (
    <Link href={pkg.link}>
      <button className="flex items-center gap-1.5 bg-yellow-600 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm font-medium">
        View Details
      </button>
    </Link>
  ) : (
    <button disabled className="flex items-center gap-1.5 bg-yellow-600 text-gray-600 px-3 py-1.5 rounded-md shadow-md cursor-not-allowed text-sm font-medium">
      Not Available
    </button>
  )}

  {/* Contact Buttons */}
  {/* Call Button */}
  <Link href="tel:+1234567890" aria-label="Call us">
    <button 
      className="flex items-center gap-1.5 bg-yellow-600 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-gray-900  transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm font-medium"
    >
      <PhoneCall size={14} aria-hidden="true" />
      Call
    </button>
  </Link>


  {/* WhatsApp Button */}
  <Link href="https://wa.me/1234567890" aria-label="Chat on WhatsApp">
    <button 
      className="flex items-center gap-1.5 bg-yellow-600 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-gray-900  transition-all focus:outline-none focus:ring-2 focus:ring-green-400 text-sm font-medium"
    >
      <MessageCircle size={14} aria-hidden="true" />
      Chat
    </button>
  </Link>



              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Packages Button */}
      <div className="text-center mt-8">
        <Link href="/packages">
          <motion.button
            whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
            className="bg-yellow-500 text-black py-3 px-8 rounded-full shadow-md hover:bg-yellow-600 text-lg font-semibold transition-all"
          >
            View All Packages →
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
