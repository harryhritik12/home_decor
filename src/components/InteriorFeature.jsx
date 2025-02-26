import React from "react";
import { Link } from "react-router-dom";
import sampleImage from "../assets/interior.jpg";

const InteriorFeature = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-transparent">
      <section className="flex flex-col md:flex-row w-full max-w-7xl min-h-screen h-full overflow-hidden rounded-lg shadow-lg">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2 group">
          <img
            src={sampleImage}
            alt="Interior Design"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-l-lg md:rounded-l-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-l-lg md:rounded-l-lg">
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
              Transform Your Space
            </h2>
          </div>
        </div>

        {/* Right Side - Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:p-16 bg-gray-900 text-white rounded-r-lg md:rounded-r-lg">
          <h2 className="text-4xl md:text-5xl font-bold">
            Bespoke Interior Design Services
          </h2>
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            Our team specializes in creating personalized spaces that seamlessly blend aesthetics and functionality, tailored to your unique lifestyle and preferences.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-transform duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InteriorFeature;
