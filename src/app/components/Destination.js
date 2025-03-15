"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import destinations from "../data/destinationsData"; // Import destinations from a separate file

export default function Destinations() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 relative mb-4">
          Explore Kailash Mansarovar
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"></span>
        </h2>
        <p className="text-sm md:text-xl max-w-3xl mx-auto mt-4">
          Discover the divine and breathtaking destinations of Kailash Mansarovar, 
          each offering a unique spiritual and scenic experience.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((dest, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            {/* Destination Image */}
            <div className="relative w-full h-64">
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 brightness-75 group-hover:brightness-100"
              />
            </div>

            {/* Gradient Overlay for Better Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg md:text-2xl font-bold px-4 text-center">
                {dest.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
