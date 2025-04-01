"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useState, useCallback } from "react";
import { images } from "../data/imageData";
import Hero from "../components/Hero";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal when clicking outside the image
  const closeModal = useCallback((e) => {
    if (e.target.id === "modalBackground") {
      setSelectedImage(null);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="text-3xl md:text-5xl font-extrabold text-gray-900 relative inline-block uppercase tracking-wide"
  >
    Captured Moments
    <span className="block h-1 w-28 bg-yellow-500 mx-auto mt-2 rounded-full"></span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto"
  >
    A visual journey of stunning landscapes and cultural experiences.
  </motion.p>
</div>


        {/* Masonry Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {images.map((destination, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group transition-all duration-300 
                ${idx % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`} // Different sizes for collage effect
              onClick={() => setSelectedImage(destination.src)}
            >
              <Image
                src={destination.src}
                alt={destination.alt}
                width={500}
                height={400}
                loading={idx < 6 ? "eager" : "lazy"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div
          id="modalBackground"
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-full max-h-full"
          >
            <Image
              src={selectedImage}
              alt="Zoomed Image"
              width={900}
              height={700}
              className="rounded-lg max-w-full max-h-full"
            />
            <button
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-300 transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={30} className="text-black" />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
