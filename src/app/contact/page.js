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
