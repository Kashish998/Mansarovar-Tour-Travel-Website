"use client"; // Client-side component

import { useState, useEffect } from "react"; 
import { motion } from "framer-motion"; 
import Link from "next/link"; 

export default function Hero() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const images = [
    "/Kailash-BG1.webp",
    "/KailashLahasa-Package.webp",
    "/KailashOverland-Package.webp",
    "/KailashHelicopter-Package.webp",
    "/KailashYatra-Package.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Smooth transition delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60vh] sm:h-[75vh] md:h-[75vh] w-full overflow-hidden">
      {/* Background Image - Smooth Transition */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            animate={{ opacity: index === backgroundIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/40"></div>

      {/* Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6"
      >
        <div className="max-w-4xl px-4 md:px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-snug sm:leading-tight drop-shadow-lg">
            Explore <span className="text-yellow-400">Your Amazing Destination</span>
          </h1>

          <p className="mt-2 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-200 drop-shadow-lg tracking-wide">
            Discover the best <span className="text-yellow-400 font-semibold">places to stay, eat, shop,</span>  
            or visit from trusted experts.
          </p>

          {/* Buttons */}
          <div className="mt-5 sm:mt-7 flex flex-wrap justify-center gap-3 sm:gap-5">
            <Link href="/packages">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm md:text-base px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl font-semibold"
              >
                Our Packages
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm md:text-base px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl font-semibold"
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
