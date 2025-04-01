<<<<<<< HEAD
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show the button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-black to-black text-white py-12 px-6 relative">
      
      {/* Social Media Sidebar (Visible on Large Screens) */}
      <div className="fixed left-0 top-1/3 hidden lg:flex flex-col space-y-3 p-2 bg-transparent z-50">
        <Link href="#" className="p-3 bg-blue-600 text-white rounded-full transition-transform hover:scale-110 hover:bg-blue-800 shadow-md">
          <FaFacebookF size={20} />
        </Link>
        <Link href="#" className="p-3 bg-pink-600 text-white rounded-full transition-transform hover:scale-110 hover:bg-pink-700 shadow-md">
          <FaInstagram size={20} />
        </Link>
=======
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-grey to-black text-white py-12 px-6 relative">
      
      {/* Social Media Sidebar (Visible on Large Screens) */}
      <div className="fixed left-0 top-1/3 hidden lg:flex flex-col space-y-3 p-2 bg-transparent z-50">
        {/* Facebook Icon */}
        <Link href="#" className="p-3 bg-blue-600 text-white rounded-full transition-transform hover:scale-110 hover:bg-black shadow-md">
          <FaFacebookF size={20} />
        </Link>
        {/* Instagram Icon */}
        <Link href="#" className="p-3 bg-pink-600 text-white rounded-full transition-transform hover:scale-110 hover:bg-pink-700 shadow-md">
          <FaInstagram size={20} />
        </Link>
        {/* YouTube Icon */}
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
        <Link href="#" className="p-3 bg-red-600 text-white rounded-full transition-transform hover:scale-110 hover:bg-red-700 shadow-md">
          <FaYoutube size={20} />
        </Link>
      </div>

<<<<<<< HEAD
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-yellow-500 text-black p-2 rounded-full shadow-md hover:bg-yellow-600 transition-transform hover:scale-110 z-50"
          aria-label="Back to Top"
        >
          <FaArrowUp size={16} aria-hidden="true" />
        </button>
      )}
=======
      {/* WhatsApp Floating Chat Button */}
      <Link
        href="https://wa.me/919889136789"
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-transform hover:scale-110 z-50"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={32} aria-hidden="true" />
        <span className="sr-only">Chat with us on WhatsApp</span>
      </Link>
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef

      {/* Footer Content */}
      <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-sm">
        
        {/* Company Information */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400">Himalayan Glory Tour & Travels</h2>
          <p className="text-gray-300 mt-2">GSTIN: 09ALJPP5849EIZN</p>
          <p className="text-gray-300">ISO-9001:2015 Certified</p>
          <p className="mt-4 text-gray-200 leading-relaxed">
            We are one of India's leading travel agencies, offering trusted and memorable travel experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Company</h3>
          <ul className="mt-4 space-y-3 text-gray-200">
            <li><Link href="/" className="hover:text-white transition">&gt; Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">&gt; About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">&gt; Contact Us</Link></li>
            <li><Link href="/packages" className="hover:text-white transition">&gt; Packages</Link></li>
            <li><Link href="/services" className="hover:text-white transition">&gt; Services</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Contact</h3>
          <div className="mt-4 space-y-3 text-gray-200">
<<<<<<< HEAD
=======
            {/* Address */}
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
            <p className="flex items-center gap-2">
              <IoLocationSharp className="text-xl text-yellow-400" />
              Shop No:- 62, Opp. Rana Hospital, Rail Vihar, Medical Road, Gorakhpur, UP, India - 273013
            </p>
<<<<<<< HEAD
=======
            {/* Phone Numbers */}
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
            <p className="flex items-center gap-2">
              <IoCall className="text-xl text-yellow-400" />
              <Link href="tel:+919889136789" className="hover:text-white transition">+91 98891 36789</Link>, 
              <Link href="tel:+9176188936789" className="hover:text-white transition">+91 76188 936789</Link>
            </p>
<<<<<<< HEAD
=======
            {/* Email */}
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
            <p className="flex items-center gap-2">
              <IoMail className="text-xl text-yellow-400" />
              <Link href="mailto:himalayan@gmail.com" className="hover:text-white transition">himalayan@gmail.com</Link>
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Certifications</h3>
          <div className="flex gap-4 mt-4">
<<<<<<< HEAD
            <Image
              src="/ISO-certificate.png"
=======
            {/* ISO Certification */}
            <Image
              src="/label-logo.png"
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
              alt="ISO Certified"
              width={80}
              height={50}
              className="object-contain"
            />
<<<<<<< HEAD
            <Image
              src="/GST-certificate.png"
=======
            {/* GST Registered */}
            <Image
              src="/label-logo1.png"
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
              alt="GST Registered"
              width={80}
              height={50}
              className="object-contain"
            />
<<<<<<< HEAD
            <Image
              src="/Gov-certificate.png"
=======
            {/* Trusted Brand Certification */}
            <Image
              src="/label-logo2.png"
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
              alt="Trusted Brand"
              width={80}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright Notice */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Himalayan Glory Tour & Travels. All Rights Reserved.
      </div>
<<<<<<< HEAD

      {/* WhatsApp Floating Chat Button */}
      <Link
        href="https://wa.me/919889136789"
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-transform hover:scale-110 z-50"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={32} aria-hidden="true" />
      </Link>
=======
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
    </footer>
  );
}
