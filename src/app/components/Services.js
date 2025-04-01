"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User } from "lucide-react";
import dynamic from "next/dynamic";
import { testimonialsData } from "../data/testimonialsData";

// Dynamically import Swiper to reduce initial bundle size
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), { ssr: false });
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function TestimonialSlider() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-16">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What Our Clients Say
      </h2>

      {/* Testimonial Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="max-w-4xl mx-auto"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <User className="w-12 h-12 mx-auto text-gray-500" />
              <p className="mt-4 text-lg font-medium text-gray-700">
                "{testimonial.message}"
              </p>
              <h4 className="mt-2 font-bold text-gray-900">{testimonial.name}</h4>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Inquiry Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-black text-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-16 text-center"
      >
        <h3 className="text-2xl font-bold">Have Questions About Our Services?</h3>
        <p className="mt-2 text-lg">Get in touch with us for the best travel deals and assistance.</p>

        {/* Inquiry Button */}
        <Link href="/query-form">
          <button className="mt-4 bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition">
            Send Inquiry
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
