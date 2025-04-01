"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, PhoneCall } from "lucide-react";
import servicesData from "./servicesData"; // ✅ Importing modular services data
import Hero from "../components/Hero";

export default function ServicesPage() {
  const servicesRef = useRef(null); // ✅ Reference to scroll smoothly to services section

  // ✅ Scrolls down to the services section smoothly
  const handleScrollDown = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      {/* ✅ Hero Section (Reusable Component) */}
      <Hero />

      {/* ✅ Services Section */}
      <div ref={servicesRef} className="py-10 px-4 md:px-8">
        
        {/* ✅ Heading & Description */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} // ✅ Faster animation for performance
            className="text-3xl md:text-5xl font-extrabold text-gray-900 relative inline-block uppercase tracking-wide"
          >
            Our Services
            <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-2 rounded-full"></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mt-4"
          >
            Whether you're planning a spiritual pilgrimage to Kailash Mansarovar or an international 
            adventure, we provide comprehensive travel services to make your journey smooth and stress-free.
          </motion.p>
        </div>

        {/* ✅ Services List (Flex Grid) */}
        <div className="flex flex-col gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow-lg overflow-hidden p-4 md:p-6 transition duration-500 transform hover:scale-[1.02] hover:shadow-2xl w-full md:w-[85%] mx-auto ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* ✅ Service Image (Lazy Loaded for Performance) */}
              <div className="relative w-full md:w-1/2 h-48 md:h-64 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full"
                  loading="lazy" // ✅ Improves performance
                />
              </div>

              {/* ✅ Service Details */}
              <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-3">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-900">{service.title}</h2>

                {/* ✅ Service Highlights */}
                <ul className="flex justify-center md:justify-start gap-2 flex-wrap">
                  {service.highlights.map((highlight, i) => (
                    <li key={i} className="bg-blue-100 text-yellow-700 px-3 py-1 rounded-lg text-xs font-medium">
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* ✅ Service Description */}
                <p className="text-md text-gray-600">{service.description}</p>
                <p className="text-sm text-gray-500">{service.details}</p>

                {/* ✅ Contact & Enquiry Buttons */}
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                  <Link href="/contact">
                    <button className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-black transition">
                      <PhoneCall size={18} />
                      Contact Us
                    </button>
                  </Link>
                  <Link href="/query-form">
                    <button className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-black transition">
                      <Mail size={18} />
                      Enquiry
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
