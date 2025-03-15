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

      {/* Testimonials Section (Lazy Loaded) */}
      <div className="py-16 bg-gray-50">
        <TestimonialSlider />
      </div>
    </div>
  );
}
