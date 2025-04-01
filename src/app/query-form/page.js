"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function QueryFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceName = searchParams.get("services") || "our services"; // Default if no query param is present

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Query submitted for ${serviceName}!`);
    router.push("/"); // Redirect to homepage (Change if needed)
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6 pt-20" 
      style={{ backgroundImage: "url('/Himalayan-view.jpg')" }} 
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-6 max-w-md w-full"
      >
         <h2 className="text-2xl sm:text-2xl font-extrabold text-gray-900 text-center mb-6 relative">
         Inquiry Form
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-yellow-400 rounded-full"></span>
      </h2>
        <p className="text-gray-600 text-center mt-2">
          Fill in your details and we will get back to you about <strong>{serviceName}</strong>.
        </p>

        <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
          {["name", "email", "phone"].map((field, index) => (
            <input
              key={index}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              required
              className="w-full p-2 border rounded-lg bg-white/70"
              onChange={handleChange}
            />
          ))}
          <textarea
            name="message"
            placeholder="Your Message (Optional)"
            className="w-full p-2 border rounded-lg bg-white/70"
            rows="3"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default function QueryForm() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <QueryFormContent />
    </Suspense>
  );
}
