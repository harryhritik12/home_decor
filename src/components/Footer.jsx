import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo4.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#FFF0F5] text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section - Logo */}
        <div className="flex flex-col items-center space-y-3">
          <img src={logo} alt="Home Decor Logo" className="w-28 h-auto" />
          <p className="text-sm text-gray-800 text-center">
            Innovative home decor solutions tailored for you.
          </p>
        </div>

        {/* Center Section - Navigation */}
        <div className="grid grid-cols-2 gap-6 text-sm font-medium uppercase tracking-wide text-center">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-[#8B4513] transition-colors">
              Home
            </Link>
            <Link to="/process" className="hover:text-[#8B4513] transition-colors">
              Process
            </Link>
            <Link to="/team" className="hover:text-[#8B4513] transition-colors">
              Team
            </Link>
            <Link to="/press" className="hover:text-[#8B4513] transition-colors">
              Press
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link to="/projects" className="hover:text-[#8B4513] transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-[#8B4513] transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Right Section - Contact & Socials */}
        <div className="flex flex-col items-center space-y-4">
        <p className="text-sm tracking-wide">
            Mobile:{" "}
            <a href="tel:+919090900000" className="hover:underline text-[#8B4513]">
              +91 9090 900000
            </a>
          </p>
          <p className="text-sm tracking-wide">
            Email:{" "}
            <a href="mailto:hello@homedecor.com" className="hover:underline text-[#8B4513]">
              hello@homedecor.com
            </a>
          </p>
          <div className="flex space-x-4 text-2xl">
            <motion.a
              href="https://facebook.com"
              whileHover={{ scale: 1.1 }}
              className="bg-gray-300 text-gray-900 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              whileHover={{ scale: 1.1 }}
              className="bg-gray-300 text-gray-900 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-xs text-gray-700 mt-12 tracking-wide">
        &copy; 2025 Home Decor Design and Interiors. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
