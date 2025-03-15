"use client"; // Enables client-side rendering in Next.js

// Importing React and necessary hooks
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image"; // Next.js optimized image component
import Link from "next/link"; // Next.js client-side navigation
import { XMarkIcon, Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid"; // Heroicons for icons

//  NavItem Component - Creates each navigation link
const NavItem = React.memo(({ children, href = "#" }) => (
  <li className="relative group px-4">
    <Link
      href={href}
      prefetch={true} // Preloads pages for better navigation performance
      className="font-semibold text-sm text-white transition-all duration-300 group-hover:text-yellow-400"
    >
      {children} {/* Navigation text */}
      {/* Underline animation on hover */}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
));

//  Dropdown Component - Handles the dropdown menu for "Packages"
const Dropdown = React.memo(({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false); // Controls dropdown visibility
  const dropdownRef = useRef(null); // Ref for detecting outside clicks

  // Function to close dropdown when clicking outside
  const closeDropdown = useCallback((event) => {
    if (!dropdownRef.current?.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  // Adds or removes event listener based on dropdown state
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeDropdown);
    }
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, [isOpen, closeDropdown]);

  return (
    <li ref={dropdownRef} className="relative px-4">
      {/* Dropdown toggle button */}
      <button
        className="flex items-center font-semibold text-sm text-white transition-all duration-300 hover:text-yellow-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} <ChevronDownIcon className="h-4 w-4 ml-1" />
      </button>

      {/* Dropdown menu */}
      <ul
        className={`absolute z-50 bg-black bg-opacity-90 rounded-md shadow-lg transition-all duration-300 w-56 mt-2 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black"
              onClick={() => setIsOpen(false)} // Close menu when clicking a link
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
});

//  Navbar Component - The main navigation bar
export default function Navbar() {
  const [open, setOpen] = useState(false); // Controls mobile menu visibility
  const [isScrolling, setIsScrolling] = useState(false); // Detects if the user has scrolled
  const menuRef = useRef(null); // Ref for detecting outside clicks on mobile menu

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Adds background when scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  const closeMenuOutsideClick = useCallback((event) => {
    if (open && menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  }, [open]);

  // Attach event listener when menu is open
  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", closeMenuOutsideClick);
    }
    return () => document.removeEventListener("mousedown", closeMenuOutsideClick);
  }, [open, closeMenuOutsideClick]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 px-6 lg:px-12 ${
        isScrolling ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/logo.webp" 
            alt="Himalayan Glory Travels" 
            width={40} 
            height={40} 
            priority // Loads instantly for better performance
            className="h-10 w-10 rounded-full" 
          />
          <span className="ml-3 font-semibold text-lg text-white">Himalayan Glory Travels</span>
        </div>

        {/*  Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About Us</NavItem>
          <NavItem href="/services">Services</NavItem>
          <Dropdown
            title="Packages"
            items={[
           
              { label: "Lhasa Kailash Tour", href: "/packages/lhasa-kailash" },
              { label: "Helicopter Tour", href: "/packages/helicopter-tour" },
              { label: "Kailash Overland Tour", href: "/packages/overland-package" },
              { label: "Kailash Inner Kora Tour", href: "/packages/inner-kora" },
              { label: "Saga Dawa Kailash Tour", href: "/packages/saga-dawa" },
              { label: "Kailash Mansarovar Yatra", href: "/packages/kailash-mansarovar" },
              { label: "Full Moon Tour", href: "/packages/full-moon" },
            ]}
          />
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/contact">Contact Us</NavItem>
        </ul>

        {/*  Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/*  Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute left-0 w-full bg-black bg-opacity-90 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 p-5 text-white">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About Us</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/contact">Contact Us</NavItem>
          <Dropdown
            title="Packages"
            items={[
              { label: "Full Moon Tour", href: "/packages/full-moon" },
              { label: "Lhasa Kailash Tour", href: "/packages/lhasa-kailash" },
              { label: "Helicopter Tour", href: "/packages/helicopter-tour" },
              { label: "Kailash Overland Tour", href: "/packages/overland-package" },
              { label: "Kailash Inner Kora Tour", href: "/packages/inner-kora" },
              { label: "Saga Dawa Kailash Tour", href: "/packages/saga-dawa" },
              { label: "Kailash Mansarovar Yatra", href: "/packages/kailash-mansarovar" },
            ]}
          />
        </ul>
      </div>
    </nav>
  );
}
