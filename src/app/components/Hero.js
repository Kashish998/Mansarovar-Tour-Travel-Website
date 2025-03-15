"use client"; // This makes it a client-side component

import { useState, useEffect } from "react"; 
import { motion } from "framer-motion"; 
import Link from "next/link"; 

export default function Hero() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const images = [
    "/Mount-Kailash.jpeg",
    "/kap.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      {/* Background Image - Dynamic */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[backgroundIndex]})` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6"
      >
        <div className="max-w-4xl px-4 md:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug drop-shadow-lg">
            Explore <span className="text-yellow-400">Your Amazing Destination</span>
          </h1>

          <p className="mt-2 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the best places to stay, eat, shop, or visit from trusted experts.
          </p>

          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-5">
            <Link href="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm md:text-base px-5 sm:px-7 py-2 sm:py-3 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl font-semibold"
              >
                Our Packages
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm md:text-base px-5 sm:px-7 py-2 sm:py-3 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl font-semibold"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
