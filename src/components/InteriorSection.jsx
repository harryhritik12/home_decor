import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import roomImage from "../assets/room.jpg";

export default function InteriorSection() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="group relative flex flex-col md:flex-row h-screen overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Image Section */}
          <div className="relative w-full md:w-7/12 h-1/2 md:h-full">
            <img
              src={roomImage}
              alt="Interior Room"
              className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-500 ${
                hover ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                Transform Your Space
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-5/12 h-1/2 md:h-full bg-gradient-to-br from-gray-800 to-gray-700 text-white flex flex-col justify-center px-8 md:px-12 lg:px-16 py-8 md:py-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Innovative Interior Design Solutions
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              We craft personalized interiors that blend aesthetics with
              functionality, reflecting your unique style and needs.
            </p>
            <button
              onClick={() => navigate("/process")}
              className="self-start px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Discover Our Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
