"use client"; // Ensures the component runs on the client side.

import { motion } from "framer-motion"; // Imports animation library.
import { PhoneCall, Mail, MapPin, ChevronDown } from "lucide-react"; // Imports icons.
import { useState, useRef } from "react"; // Imports hooks for state and references.
import KailashMap from "../components/KaiashMapContent";
import Hero from "../components/Hero";

export default function ContactUs() {
  // State for the contact form
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const contactRef = useRef(null); // Reference for scrolling to the contact form.

  // Updates the form state when input fields change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    alert("Your enquiry has been submitted!"); // Shows an alert
    setForm({ name: "", email: "", phone: "", message: "" }); // Resets the form
  };

  // Scrolls smoothly to the contact section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      {/* Hero Section */}
      <Hero />

      {/* Contact Section */}
      <div ref={contactRef} className="container mx-auto px-6 md:px-16 py-16">
<<<<<<< HEAD
      <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-center mb-8"
> <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 text-center mb-6 relative">
        Contact Us
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-yellow-400 rounded-full"></span>
      </h2>
  
  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
    Have questions or need assistance with your travel plans? Fill out the form below, and our experts will reach out to you soon!
  </p>
</motion.div>

=======
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Planning your next journey? Fill out the form below, and our team will assist you.
          </p>
        </motion.div>
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white shadow-lg rounded-xl p-8"
            onSubmit={handleSubmit}
          >
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your message"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-32 bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Submit
            </motion.button>
          </motion.form>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
<<<<<<< HEAD
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>

      <div className="space-y-3 text-gray-700">
        <p className="flex items-center text-lg font-medium">
          <MapPin className="mr-3 text-blue-500" />
          <span>Mansarovar Tour And Travel</span>
        </p>

        <p className="text-gray-600 text-base">
          519 Jaina Tower -II, District Center, Janakpuri, New Delhi -110058, INDIA
        </p>

        <a href="tel:+919891515623" className="flex items-center text-lg font-medium text-blue-600 hover:text-blue-800 transition">
          <PhoneCall className="mr-3" />
          +91-9891515623
        </a>

        <a href="mailto:sales1.tajtourandtravel@gmail.com" className="flex items-center text-lg font-medium text-blue-600 hover:text-blue-800 transition">
          <Mail className="mr-3" />
          sales1.tajtourandtravel@gmail.com
        </a>
      </div>
    </div>
=======
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mt-2 flex items-center">
                <MapPin className="mr-2" /> Taj Tour And Travel
              </p>
              <p className="text-gray-600">
                519 Jaina Tower -II, District Center, Janakpuri, New Delhi -110058, INDIA
              </p>
              <p className="text-gray-600 mt-2 flex items-center">
                <PhoneCall className="mr-2" /> +91-9891515623
              </p>
              <p className="text-gray-600 flex items-center">
                <Mail className="mr-2" /> sales1.tajtourandtravel@gmail.com
              </p>
            </div>
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
            <div className="overflow-hidden rounded-lg shadow-lg">
               {/* Google Map */}
           <KailashMap/>
            </div>
          
          </motion.div>
        </div>
      </div>
    </section>
  );
}
