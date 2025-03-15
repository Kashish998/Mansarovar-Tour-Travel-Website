"use client"; //  Enables client-side rendering in Next.js

import { motion } from "framer-motion"; // For animations
import { ShieldCheck, Globe, Users, ThumbsUp } from "lucide-react"; //  Icon library

//  Color palette for icons & background (used in service cards)
const colorMap = {
  green: { icon: "#15803D", bg: "#E6F4EA" }, // Green: Secure Bookings
  blue: { icon: "#1D4ED8", bg: "#E8F0FE" }, // Blue: Global Destinations
  yellow: { icon: "#CA8A04", bg: "#FEF9E6" }, // Yellow: Expert Support
  red: { icon: "#DC2626", bg: "#FEE8E8" }, // Red: Best Price Guarantee
};

//  List of services (Each service has an icon, title, description, and color)
const services = [
  { icon: ShieldCheck, title: "Secure Bookings", description: "Your safety & data security is our priority.", color: "green" },
  { icon: Globe, title: "Global Destinations", description: "Explore top destinations worldwide.", color: "blue" },
  { icon: Users, title: "Expert Support", description: "24/7 assistance from our team.", color: "yellow" },
  { icon: ThumbsUp, title: "Best Price Guarantee", description: "Unbeatable deals, no hidden costs.", color: "red" },
];

//  Service Card Component (Reusable card for each service)
function ServiceCard({ icon: Icon, title, description, color, index }) {
  const { icon: iconColor, bg: bgColor } = colorMap[color] || colorMap.green; //  Get icon & background color from colorMap

  return (
    <motion.div
      // Animation when appearing (Fade-in & move up)
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }} //  Ensures animation only runs once when in view

      //  Hover & Click Effects
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.12)", transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }} //  Shrinks slightly when clicked

      //  Styling for the card (Rounded, Shadow, Centered Content)
      className="p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-gray-200 transition-all"
      style={{ backgroundColor: bgColor }} //  Background color from colorMap
    >
      {/*  Icon Container (Circle background with icon inside) */}
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full mb-5"
        style={{ backgroundColor: `${iconColor}1A` }} //  Light background with slight transparency
      >
        <Icon className="w-10 h-10" style={{ color: iconColor }} /> {/*  Icon with dynamic color */}
      </div>

      {/*  Service Title */}
      <h3 className="font-semibold text-xl text-gray-800">{title}</h3>

      {/*  Service Description */}
      <p className="text-gray-600 text-sm mt-3 leading-relaxed">{description}</p>
    </motion.div>
  );
}

//  Services Section (Main component displaying all services)
export default function Services() {
  return (
    <section className="bg-gray-100 py-5 px-6 md:px-12 lg:px-24">
      {/*  Section Header (Title & Description) */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 relative">
          Our Services
          {/*  Yellow Underline Effect */}
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"></span>
        </h2>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          We provide a wide range of services to make your travel experience seamless and memorable. 
          Whether it's itinerary planning or booking assistance, we ensure every step of your journey is smooth.
        </p>
      </div>

      {/*  Services Grid (4 Cards in a Responsive Layout) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/*  Map through services array & create a card for each */}
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} /> // ✅ Pass props to ServiceCard component
        ))}
      </div>
    </section>
  );
}
