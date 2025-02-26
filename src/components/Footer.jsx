import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleTeamClick = () => {
    navigate("/process"); // Navigate to the process page
    setTimeout(() => {
      const teamSection = document.getElementById("team-section");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section - Logo */}
        <div className="flex flex-col space-y-3">
          <div className="text-5xl font-extrabold text-white tracking-tight">HD</div>
          <p className="text-sm text-gray-400">Innovative home decor solutions tailored for you.</p>
        </div>

        {/* Center Section - Navigation */}
        <div className="grid grid-cols-2 gap-6 text-sm font-medium uppercase tracking-wide">
          <div className="flex flex-col space-y-2">
            <button onClick={handleHomeClick} className="text-left hover:text-white transition-colors">Home</button>
            <Link to="/process" className="hover:text-white transition-colors">Process</Link>
            <button onClick={handleTeamClick} className="text-left hover:text-white transition-colors">
              Team
            </button>
            <Link to="/press" className="hover:text-white transition-colors">Press</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Right Section - Contact & Socials */}
        <div className="flex flex-col space-y-4">
          <p className="text-sm tracking-wide">Mobile: +91 9090 900000</p>
          <p className="text-sm tracking-wide">
            Email: <a href="mailto:hello@homedecor.com" className="hover:underline text-white">hello@homedecor.com</a>
          </p>
          <div className="flex space-x-4 text-2xl">
            <motion.a
              href="https://facebook.com"
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 text-gray-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 text-gray-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-xs text-gray-500 mt-12 tracking-wide">
        &copy; 2025 Home Decor Design and Interiors. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;