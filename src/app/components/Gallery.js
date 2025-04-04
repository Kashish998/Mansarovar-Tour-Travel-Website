"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
<<<<<<< HEAD
import { useRouter } from "next/navigation"; // For navigation
import { images } from "../data/galleryImages";

// Filter Options
const filters = [
  { name: "All", key: "All" },
  { name: "Trekking", key: "Trekking" },
  { name: "Temples", key: "Temples" },
  { name: "Landscapes", key: "Landscapes" },
];

const categorizedImages = {
  Trekking: images.filter((img) => img.category === "Trekking"),
  Temples: images.filter((img) => img.category === "Temples"),
  Landscapes: images.filter((img) => img.category === "Landscapes"),
};

export default function GalleryGlimpse() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // State for modal image
  const router = useRouter(); // Navigation hook

  // Filter Images
  const filteredImages = selectedFilter === "All" ? images.slice(0, 8) : categorizedImages[selectedFilter] || [];

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 w-full max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6 relative">
        Gallery
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-yellow-400 rounded-full"></span>
      </h2>

      {/* Filter Buttons & View More */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full mb-6">
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold rounded-md transition-all duration-300
              ${
                selectedFilter === filter.key
                  ? "bg-yellow-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-black hover:text-white"
              }`}
            onClick={() => setSelectedFilter(filter.key)}
          >
            {filter.name}
          </button>
        ))}
        {/* View More Button */}
        <button
          onClick={() => router.push("/gallery")}
          className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold bg-gray-200 text-gray-800 hover:text-white rounded-md shadow-lg transition-all duration-300 hover:bg-black"
        >
          View More →
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(image)} // Open modal on click
          >
            <div className="relative w-full h-36 sm:h-48 lg:h-56">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full rounded-xl"
                quality={70}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                loading="lazy"
              />
=======
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
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
<<<<<<< HEAD
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close modal on clicking outside
        >
          <div className="relative max-w-3xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-4  text-black rounded-full p-2 hover:bg-red-500 hover:text-white transition-all"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg pt-4 shadow-lg"
            />
=======
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
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
          </div>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default GalleryGlimpse;
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
