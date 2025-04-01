"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaQuestionCircle, FaPlus, FaMinus, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import itineraryData from "./itineraryData";
import faqs from "./faqs"
import Hero from "@/app/components/Hero";
export default function LhasaKailashTour() {
  const [openDay, setOpenDay] = useState(null);
 
  
  const [openFAQ, setOpenFAQ] = useState(null);

 
  const [selectedDay, setSelectedDay] = useState(0); // Default: Show Day 1 in Desktop


  return (
    <div className="bg-gray-50 min-h-screen">
     <Hero />
      
<<<<<<< HEAD
      <div className="max-w-6xl mx-auto px-2 md:px-0 pt-8 space-y-8">
      <div className="max-w-6xl mx-auto px-2 md:px-0 pt-8 space-y-8">
  <div className="bg-gray-50 py-10 px-2 md:px-8">
    {/* Animated Card Container */}
    <motion.div
  className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 hover:shadow-2xl"
  whileHover={{ scale: 1.02 }}
>
  {/* Image Grid Section (Left Side) */}
  <motion.div
    className="w-full md:w-1/2 "
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Image
      src="/KailashHelicopter-Package.webp"
      alt="Lhasa City"
      width={350}
      height={250}
      className="w-full h-full object-cover rounded-xl"
    />
  </motion.div>


=======
      <div className="max-w-6xl mx-auto px-4 md:px-0 pt-8 space-y-8">
      <div className="max-w-6xl mx-auto px-4 md:px-0 pt-8 space-y-8">
  <div className="bg-gray-50 py-10 px-4 md:px-8">
    {/* Animated Card Container */}
    <motion.div
      className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 hover:shadow-2xl"
      whileHover={{ scale: 1.02 }}
    >
      {/* Image Grid Section */}
      <motion.div
        className="w-full md:w-1/2 grid grid-cols-2 gap-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src="/helicopter1.jpg" alt="Lhasa City" width={350} height={250} className="w-full h-full object-cover" />
        <Image src="/helicopter2.webp" alt="Potala Palace" width={350} height={250} className="w-full h-full object-cover" />
        <Image src="/helicopter3.jpg" alt="Lake Mansarovar" width={350} height={250} className="w-full h-full object-cover" />
        <Image src="/helicopter kailash.jpeg" alt="Mount Kailash" width={350} height={250} className="w-full h-full object-cover" />
      </motion.div>
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef

      {/* Content Section */}
      <motion.div
        className="p-6 md:p-10 flex flex-col justify-center w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Styled Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
  Kailash Helicopter Tour
</h2>

<p className="mt-4 text-gray-700 text-base leading-relaxed">
  The Kailash Helicopter Tour offers a unique and convenient way to experience the sacred Mount Kailash and Lake Manasarovar, with the advantage of traveling by helicopter. This tour provides a spiritual journey with breathtaking aerial views of the majestic mountain ranges, sacred lakes, and the tranquil Tibetan plateau, all from the comfort and speed of a helicopter.
</p>

<p className="mt-2 text-gray-700 text-base leading-relaxed">
  During the tour, you’ll witness the awe-inspiring beauty of Mount Kailash, the spiritual center of the universe, as well as the serene waters of Lake Manasarovar, believed to purify the soul. While this tour is shorter and less physically demanding than the traditional trek, it still offers a deeply spiritual experience, allowing you to immerse yourself in the mystical energy of these sacred sites without the challenges of high-altitude trekking.
</p>


{/* Key Highlights */}
<div className="mt-6 grid grid-cols-2 gap-3 text-gray-800 text-xs font-medium">
  <div className="flex items-center space-x-1">
    <span className="text-lg">📅</span>
    <p><strong>Duration:</strong> 6 Days</p>
  </div>
  <div className="flex items-center space-x-1">
    <span className="text-lg">🚁</span>
    <p><strong>Mode of Travel:</strong> Helicopter</p>
  </div>
  <div className="flex items-center space-x-1">
    <span className="text-lg">🌕</span>
    <p><strong>Best Time:</strong> April to October</p>
  </div>
  <div className="flex items-center space-x-1">
    <span className="text-lg">🌍</span>
    <p><strong>Region:</strong> Tibet</p>
  </div>
  <div className="flex items-center space-x-1">
    <span className="text-lg">🌄</span>
    <p><strong>Altitude:</strong> 4,590 meters (Lake Manasarovar)</p>
  </div>
  <div className="flex items-center space-x-1">
    <span className="text-lg">⚠️</span>
    <p><strong>Health Precautions:</strong> High-altitude conditions</p>
  </div>
</div>


<<<<<<< HEAD
      {/* Buttons for package details & contact */}
      <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-2 mt-4">
  {/* WhatsApp Button */}
  <Link href="https://wa.me/1234567890">
    <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition-all text-sm md:text-base font-medium">
      <FaWhatsapp className="text-lg" />
      <span>Chat</span>
    </button>
  </Link>

  {/* Contact Button */}
  <Link href="/contact">
    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all text-sm md:text-base font-medium">
      <FaEnvelope className="text-lg" />
      <span>Contact</span>
    </button>
  </Link>

  {/* Enquiry Button */}
  <Link href="/query-form">
    <button className="flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-700 transition-all text-sm md:text-base font-medium">
      <FaQuestionCircle className="text-lg" />
      <span>Enquire</span>
    </button>
  </Link>
</div>
=======


        {/* CTA Buttons - Optimized for Mobile & Desktop */}
        <div className="mt-5 flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0">
          {/* Call Now Button */}
          <Link href="tel:+1234567890" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-auto px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md shadow-md flex items-center justify-center space-x-2 transition-all hover:bg-green-700"
            >
              <FaPhoneAlt className="text-base" />
              <span>Call</span>
            </motion.button>
          </Link>

          {/* Enquiry Now Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-auto px-3 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md shadow-md flex items-center justify-center space-x-2 transition-all hover:bg-yellow-600"
          >
            <FaEnvelope className="text-base" />
            <Link href="/contact">     <span>Enquiry</span></Link>
          </motion.button> 

          {/* WhatsApp Button */}
          <Link href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-auto px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-md shadow-md flex items-center justify-center space-x-2 transition-all hover:bg-blue-600"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp</span>
            </motion.button>
          </Link>
        </div>
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
      </motion.div>
    </motion.div>
  </div>
</div> <div className="max-w-6xl mx-auto py-12 px-6">
  {/* Main Heading */}
<<<<<<< HEAD
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 uppercase tracking-wide border-b-4 border-yellow-600 pb-4">
=======
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 uppercase tracking-wide border-b-4 border-blue-600 pb-4">
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
  Kailash Helicopter Tour Itinerary
  </h2>

  {/* Main Container */}
  <div className="flex flex-col md:flex-row">
    {/* Sidebar (Day List) */}
    <div className="w-full md:w-1/2 space-y-5 md:pr-5">
      {itineraryData.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setSelectedDay(index)}
            className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-semibold transition-all text-lg ${
              selectedDay === index
<<<<<<< HEAD
                ? "bg-yellow-600 text-white shadow-md"
=======
                ? "bg-blue-600 text-white shadow-md"
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            <span className="flex items-center gap-2">
<<<<<<< HEAD
              <FaCalendarAlt className="text-grey-500" /> {item.day}: {item.title}
=======
              <FaCalendarAlt className="text-blue-500" /> {item.day}: {item.title}
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
            </span>
            {selectedDay === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {/* ✅ Fixed Mobile View: Content Now Displays Properly Below Clicked Day */}
          {selectedDay === index && (
            <div className="md:hidden bg-white p-4 mt-2 rounded-lg shadow-md">
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={300}
                className="rounded-lg shadow-lg w-full object-cover mb-4"
              />

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>

              {/* Key Features */}
              <div className="mt-4">
<<<<<<< HEAD
                <h4 className="text-xl font-semibold mb-3 text-gray-900 border-l-4 border-black pl-3">
=======
                <h4 className="text-xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg shadow-md transition-all hover:bg-blue-50">
<<<<<<< HEAD
                      <FaMapMarkerAlt className="text-yellow-500" /> {highlight}
=======
                      <FaMapMarkerAlt className="text-blue-500" /> {highlight}
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Desktop View: Content on the Right */}
    <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md hidden md:block">
      <h3 className="text-3xl font-semibold mb-4 text-gray-900">
        {itineraryData[selectedDay].day} - {itineraryData[selectedDay].title}
      </h3>

      {/* Image on Top */}
      <div className="w-full mb-6">
        <Image
          src={itineraryData[selectedDay].image}
          alt={itineraryData[selectedDay].title}
          width={500}
          height={0}
          className="rounded-lg shadow-lg w-full object-cover h-[30vh]"
        />
      </div>

      {/* Description Below Image */}
      <p className="text-gray-700 leading-relaxed mb-6">{itineraryData[selectedDay].description}</p>

      {/* Key Features */}
      <div className="mt-6">
<<<<<<< HEAD
        <h4 className="text-xl font-semibold mb-3 text-gray-900 border-l-4 border-black pl-3">
=======
        <h4 className="text-xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
          Key Features
        </h4>
        <ul className="grid grid-cols-1  gap-3">
          {itineraryData[selectedDay].highlights.map((highlight, i) => (
            <li key={i} className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg shadow-md transition-all hover:bg-blue-50">
<<<<<<< HEAD
              <FaMapMarkerAlt className="text-yellow-500" /> {highlight}
=======
              <FaMapMarkerAlt className="text-blue-500" /> {highlight}
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
<<<<<<< HEAD
          <h2 className="text-2xl font-bold flex items-center gap-2"><FaQuestionCircle className="text-yellow-500" /> Frequently Asked Questions</h2>
=======
          <h2 className="text-2xl font-bold flex items-center gap-2"><FaQuestionCircle className="text-blue-500" /> Frequently Asked Questions</h2>
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
          <div className="mt-4 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <button className="flex justify-between items-center w-full text-lg font-semibold" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
<<<<<<< HEAD
                  {faq.question} <span className="text-yellow-500 text-xl">{openFAQ === index ? <FaMinus /> : <FaPlus />}</span>
=======
                  {faq.question} <span className="text-blue-500 text-xl">{openFAQ === index ? <FaMinus /> : <FaPlus />}</span>
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
                </button>
                {openFAQ === index && <p className="mt-3 text-gray-700">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
