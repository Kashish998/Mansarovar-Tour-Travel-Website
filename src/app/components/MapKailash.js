"use client"; // Ensures it runs in a client-side React environment

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic"; // Lazy load the map component for better performance

// Lazy load the KailashMap component to improve performance
const KailashMap = dynamic(() => import("./KaiashMapContent"), { ssr: false });

const KailashMapSection = ({ kailashMapContent }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0, y: 50, scale: 0.95 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }} // Fade-in and slight zoom effect
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 px-6 md:px-16 lg:px-20 bg-gray-50" // Background color for a clean look
    >
      <div className="container mx-auto text-center max-w-6xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }} // Subtle slide-in effect
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 relative inline-block"
        >
          {kailashMapContent?.title || "Kailash Mansarovar Location"}
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-24 h-[4px] bg-yellow-500 rounded-full"></span>
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-l text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 px-4 md:px-0"
        >
          {kailashMapContent?.description ||
            "Mount Kailash is a sacred site for Hindus, Buddhists, Jains, and Bon religion followers. It is considered the center of the universe in many spiritual traditions."}
        </motion.p>

        {/* Map Section - Increased Size & Optimized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl border border-gray-300"
          style={{
            height: "auto", // Responsive height (60% of viewport height)
            minHeight: "300px", // Ensures a good size on smaller screens
          }}
        >
          {/* Lazy loaded map for better performance */}
          <KailashMap />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default KailashMapSection;
