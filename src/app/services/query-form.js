"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function QueryForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceName = searchParams.get("services") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Query submitted for ${serviceName}!`);
    router.push("/"); // Redirect to home after submission (Change if needed)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Inquiry Form</h2>
        <p className="text-gray-600 text-center mt-2">
          Fill in your details and we will get back to you about <strong>{serviceName}</strong>.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            required
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message (Optional)"
            className="w-full p-3 border rounded-lg"
            rows="4"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </motion.div>
    </div>
  );
}
