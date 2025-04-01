"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5"; // Icons
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import destinations from "../data/destinationsData";

export default function Destinations() {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect Mobile View
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 relative mb-3">
          Explore Kailash Mansarovar
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-yellow-500 rounded-full"></span>
        </h2>
        <p className="text-xs sm:text-sm md:text-lg max-w-2xl mx-auto mt-2 sm:mt-4 text-gray-700">
          Discover the divine and breathtaking destinations of Kailash Mansarovar.
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Mobile Left Arrow */}
        {isMobile && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-full shadow-md z-10"
          >
            <IoChevronBack className="w-5 h-5" />
          </button>
        )}

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={isMobile ? 1 : 3} // 1 slide on mobile, 3 slides on desktop
          spaceBetween={isMobile ? 0 : 20} // Adjust spacing
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} bg-gray-500 w-3 h-3 rounded-full opacity-70 transition-all duration-300"></span>`,
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="rounded-xl"
        >
          {destinations.map((dest, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg md:text-2xl font-bold px-4 text-center">
                    {dest.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Right Arrow */}
        {isMobile && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-full shadow-md z-10"
          >
            <IoChevronForward className="w-5 h-5" />
          </button>
        )}
      </div>
    </section>
  );
}
