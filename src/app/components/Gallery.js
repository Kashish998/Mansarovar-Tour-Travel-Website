"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import images from "../data/galleryImages"; // Import images from separate file

const GalleryGlimpse = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8 relative">
        Gallery
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-yellow-400 rounded-full"></span>
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(image)}
          >
            <div className="w-full h-64 relative">
            <Image
  src={image.src}
  alt={image.alt}
  fill
  className="object-cover w-full h-full rounded-xl"
  priority
  quality={75} // Adjust quality (default is 100)
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

            </div>
            <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-3 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.desc}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl mx-auto">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="rounded-xl object-cover"
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-black/50 px-4 py-2 rounded-full hover:bg-opacity-80 transition"
              onClick={() => setSelectedImage(null)}
              aria-label="Close Image"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGlimpse;
