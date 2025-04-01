"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { testimonialsData } from "../data/testimonialsData"; // Import testimonials data

export default function Testimonials() {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-100 to-white py-10 px-6">
     
{/* Section Heading */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-center mb-12"
>
  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-wide">
    What Our Travelers Say✨
  </h2>
  <div className="mt-3 mx-auto w-24 h-1 bg-yellow-500 rounded-full"></div>
</motion.div>


      {/* Swiper for Testimonials */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={30}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-7xl mx-auto px-4"
      >
        {testimonialsData.map((review, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4 },
              }}
              className="bg-gray-50 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-300 transition-all min-h-[280px] sm:min-h-[300px] flex-grow"

            >
              <User size={50} className="text-yellow-500 mb-4" />
              <p className="text-gray-700 text-lg italic">{review.feedback}</p>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">{review.name}</h3>
              <p className="text-yellow-800 text-md font-medium">{review.location}</p>

            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Inquiry CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-black text-white p-10 sm:p-12 rounded-2xl shadow-xl max-w-3xl mx-auto mt-20 text-center"
      >
        <h3 className="text-3xl font-bold">Have Questions About Your Journey?</h3>
        <p className="mt-3 text-lg leading-relaxed">
          Let our experts guide you to an unforgettable adventure!
        </p>
        <Link href="/query-form">
          <button className="mt-5 bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg hover:bg-yellow-600 transition duration-300">
            Send Inquiry
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
