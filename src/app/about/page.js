"use client";

import React, { useMemo } from "react"; // Memoize static data for better performance
import Image from "next/image"; // Optimized Next.js image handling
import dynamic from "next/dynamic"; // Lazy loading for components
import { motion } from "framer-motion"; // Smooth animations

import aboutContent from "./aboutContent"; // Import about page content

// Lazy load TestimonialSlider to improve page load speed
const TestimonialSlider = dynamic(() => import("../components/TestimonialsSlider.js"), {
  ssr: false, // Prevents rendering on the server for performance
});

export default function AboutUs() {
  // Memoizing content to avoid unnecessary re-renders
  const features = useMemo(() => aboutContent.features, []);
  const routes = useMemo(() => aboutContent.routes, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Section - Text Over Image */}
      <section
<<<<<<< HEAD
  id="about-section"
  className="relative w-full min-h-[95vh] flex items-center justify-center bg-cover bg-center px-4 sm:px-10 pt-20 sm:pt-24"
>
  {/* Optimized Background Image */}
  <Image
    src="/About-Kailash.webp"
    alt="Mount Kailash"
    layout="fill"
    objectFit="cover"
    priority
    className="absolute inset-0 w-full h-full"
  />
  
  {/* Dark Overlay for Readability */}
  <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>

  {/* Centered Text Content */}
  <div className="relative text-white text-center px-6 py-6 sm: w-full max-w-5xl">
    <h2 className="text-3xl sm:text-5xl font-extrabold text-yellow-500 mb-6 sm:mb-8 leading-tight">
      {aboutContent.title}
    </h2>

    {/* Description */}
    <div className="text-lg sm:text-xl leading-relaxed space-y-5 sm:space-y-7 mx-auto max-w-3xl sm:max-w-4xl">
      <p>{aboutContent.description}</p>
      <p>{aboutContent.additionalInfo}</p>
      <p>{aboutContent.lakeMansarovar}</p>
    </div>
  </div>
</section>


<section className="relative bg-gray-50 py-16 sm:py-20">
   {/* Content Wrapper */}
<div className="relative container mx-auto px-6 sm:px-12 md:px-16">
  {/* Journey Header Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    {/* Left - Image with Animation */}
    <motion.div 
      className="relative w-full h-80 sm:h-96 md:h-[28rem] animate-fadeInZoom"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
    >
      <Image
        src="/Kailash-Journey.jpg"
        alt="Kailash Mansarovar Journey"
        layout="fill"
        objectFit="cover"
        className="rounded-1xl shadow-lg"
      />
    </motion.div>

    {/* Right - Text */}
    <div>
      <h2 className="text-4xl sm:text-5xl pb-2 font-extrabold text-gray-900 relative text-center">
        {aboutContent.journeyTitle}
        {/* Yellow Bar in the Middle */}
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-yellow-500 rounded-full"></span>
      </h2>
      
            <p className="text-lg sm:text-xl text-gray-700 pt-5 leading-relaxed">
              Embark on a transformative journey to Mount Kailash, a sacred peak revered by Hindus, Buddhists, Jains, and Bon followers. This pilgrimage is more than just a trek—it's an experience of a lifetime, offering breathtaking landscapes, spiritual rejuvenation, and self-discovery.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4">
              The path to Mansarovar Lake, one of the holiest water bodies, is an awe-inspiring experience. Pilgrims take a holy dip, believing it purifies the soul, while adventurers marvel at its crystal-clear blue waters against the mighty Himalayan backdrop.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4">
              The Kailash Parikrama (Kora) is the ultimate test of devotion and endurance. The 52 km trek around the sacred mountain is said to wash away lifetimes of sins.
            </p>
          </div>
        </div>

        {/* Features & Routes Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-300 hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              🌟 <span className="ml-2">Key Features of the Yatra</span>
            </h3>
            {features.map((feature, i) => (
              <div key={i} className="flex items-start mb-5 text-gray-700">
                <span className="text-xl mr-3">{feature.icon}</span>
                <p className="text-lg">
                  <strong>{feature.title}:</strong> {feature.text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Routes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-300 hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              🗺 <span className="ml-2">Routes to Kailash Mansarovar</span>
            </h3>
            {routes.map((route, i) => (
              <div key={i} className="flex items-start mb-5 text-gray-700">
                <span className="text-xl mr-3">{route.icon}</span>
                <p className="text-lg">
                  <strong>{route.title}:</strong> {route.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
=======
        id="about-section"
        className="relative w-full min-h-[90vh] sm:min-h-[95vh] flex items-center justify-center bg-cover bg-center px-4 sm:px-10"
      >
        {/* Optimized Background Image */}
        <Image
          src="/Mount-Kailash.jpeg"
          alt="Mount Kailash"
          layout="fill"
          objectFit="cover"
          priority // Loads the image faster for better performance
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>

        {/* Centered Text Content */}
        <div className="relative text-center text-white max-w-4xl px-6 py-16 sm:py-24">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-snug sm:leading-tight">
            {aboutContent.title}
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6">
            {aboutContent.description}
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6">
            {aboutContent.additionalInfo}
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">{aboutContent.lakeMansarovar}</p>
        </div>
      </section>

      {/* Journey & Features Section */}
      <section className="container mx-auto px-6 sm:px-12 md:px-16 py-16 text-white">
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-300 transition-all duration-300">
          {/* Centered Heading with Underline */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 relative inline-block">
              {aboutContent.journeyTitle}
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-center max-w-3xl mx-auto mb-12">
            {aboutContent.journeyDescription}
          </p>

          {/* Feature & Route Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/90 backdrop-blur-md p-8 rounded-xl shadow-lg border border-yellow-500 hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6 flex items-center">
                🌟 <span className="ml-2">Key Features of the Yatra</span>
              </h3>
              {features.map((feature, i) => (
                <div key={i} className="flex items-start mb-5 text-white">
                  <span className="text-yellow-400 text-xl mr-3">{feature.icon}</span>
                  <p className="text-lg">
                    <strong>{feature.title}:</strong> {feature.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Routes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/90 backdrop-blur-md p-8 rounded-xl shadow-lg border border-yellow-500 hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6 flex items-center">
                🗺 <span className="ml-2">Routes to Kailash Mansarovar</span>
              </h3>
              {routes.map((route, i) => (
                <div key={i} className="flex items-start mb-5 text-white">
                  <span className="text-yellow-400 text-xl mr-3">{route.icon}</span>
                  <p className="text-lg">
                    <strong>{route.title}:</strong> {route.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
      {/* Testimonials Section (Lazy Loaded) */}
      <div className="py-16 bg-gray-50">
        <TestimonialSlider />
      </div>
    </div>
  );
}
