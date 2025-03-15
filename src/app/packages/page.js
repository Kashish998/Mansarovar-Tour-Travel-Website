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
        className="text-center mb-6 pt-6 px-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 relative">
          Kailash Mansarovar Packages
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded-full"></span>
        </h2>
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
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
