"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Users, ThumbsUp } from "lucide-react";

const services = [
  { icon: ShieldCheck, title: "Secure Bookings", description: "Your safety & data security is our priority." },
  { icon: Globe, title: "Global Destinations", description: "Explore top destinations worldwide." },
  { icon: Users, title: "Expert Support", description: "24/7 assistance from our team." },
  { icon: ThumbsUp, title: "Best Price Guarantee", description: "Unbeatable deals, no hidden costs." },
];

function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3 } }}
      className="flex items-center space-x-6 bg-white shadow-lg p-6 rounded-lg border border-gray-200 relative overflow-hidden transition-all"
    >
      {/* Accent Background Effect */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-b from-yellow-400 to-orange-500 transform -skew-x-12"></div>

      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-400 to-yellow-500 text-white rounded-full shadow-md relative z-10">
        <Icon className="w-10 h-10" />
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="bg-gray-50 py-8 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="text-4xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6 relative">
          Our Services
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-yellow-400 rounded-full"></span>
        </h2>
        </motion.div>
        <p className="text-black text-base sm:text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed tracking-wide font-medium">
  Experience top-tier travel services with secure bookings, 
  expert support, andunbeatable deals.
</p>

      </div>

      {/* Responsive Grid Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </section>
  );
}
