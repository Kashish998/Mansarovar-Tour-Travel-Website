"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PACKAGES from "../data/packagesData";
import { useInView } from "react-intersection-observer";

export default function HomePackages() {
  // Detects when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Track window width to prevent "window is not defined" error
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      // Update on window resize
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView || isMobile ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-16 bg-gray-50"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800 relative">
          Kailash Mansarovar Packages
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"></span>
        </h2>
      </div>

      {/* Packages Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {PACKAGES.slice(0, 4).map((pkg, index) => (
          <motion.div
            key={pkg.id || index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView || isMobile ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col transition-transform"
          >
            {/* Package Image */}
            <Image
              src={pkg.img}
              alt={pkg.title}
              width={600}
              height={300}
              className="w-full h-56 object-cover rounded-t-2xl"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Package Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900">
                {pkg.title}
              </h3>

              {/* Star Ratings */}
              <div className="flex items-center gap-1 mt-1 text-yellow-500">
                {Array.from({ length: Math.floor(pkg.rating || 0) }, (_, i) => (
                  <Star key={i} size={16} />
                ))}
                <span className="text-gray-700 text-sm ml-1">
                  ({pkg.rating || "No rating"})
                </span>
              </div>

              {/* Location & Difficulty */}
              <p className="text-gray-700 text-sm mt-1">
                📍 <span className="font-medium">{pkg.location}</span> &bull; ⛰{" "}
                <span className="font-medium">{pkg.difficulty}</span>
              </p>

              {/* Duration & Price */}
              <p className="text-gray-800 text-sm font-medium mt-1">
                ⏳ {pkg.duration} &bull; 💰{" "}
                <span className="text-green-600">{pkg.price}</span>
              </p>

              {/* Short Description */}
              <p className="text-gray-600 text-sm flex-grow mt-2">
                {pkg.description}
              </p>

              {/* Highlights */}
              <ul className="text-sm text-gray-700 mt-3 bg-gray-100 p-3 rounded-md space-y-1">
                {pkg.highlights?.length ? (
                  pkg.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center">
                      ✅ <span className="ml-2">{highlight}</span>
                    </li>
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
                    <button className="flex items-center gap-1.5 bg-yellow-600 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-gray-900 transition-all text-sm font-medium">
                      View Details
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-1.5 bg-gray-400 text-white px-3 py-1.5 rounded-md shadow-md cursor-not-allowed text-sm font-medium"
                  >
                    Not Available
                  </button>
                )}

                {/* Call Button */}
                <Link href="tel:+1234567890">
                  <button className="flex items-center gap-1.5 bg-yellow-600 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-gray-900 transition-all text-sm font-medium">
                    <PhoneCall size={14} />
                    Call
                  </button>
                </Link>

                {/* WhatsApp Button */}
                <Link href="https://wa.me/1234567890">
                  <button className="flex items-center gap-1.5 bg-yellow-600 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-gray-900 transition-all text-sm font-medium">
                    <MessageCircle size={14} />
                    Chat
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Packages Button */}
      <div className="text-center mt-8">
        <Link href="/packages">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-black text-lg font-semibold transition-all"
          >
            View All Packages →
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
}
