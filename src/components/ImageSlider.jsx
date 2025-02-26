import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import jarcoOldport from '../assets/jarcoOldport/image2.jpg';
import merrcuryinn from '../assets/MercurryInn/image3.jpg';
import spruce from '../assets/spruce/image5.jpg';
import KitteryPoint from '../assets/KitteryPoint/image2.jpg';

const projects = [
  { image: jarcoOldport, route: '/project/jarcoOldport' },
  { image: merrcuryinn, route: '/project/merrcuryinn' },
  { image: spruce, route: '/project/spruce' },
  { image: KitteryPoint, route: '/project/KitteryPoint' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setImageLoaded(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageClick = () => {
    const project = projects[currentIndex];
    if (project && project.route) {
      navigate(project.route);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        {!imageLoaded && (
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="loader"></div>
          </div>
        )}
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={projects[currentIndex].image}
            alt="Project Image"
            className={`absolute w-full h-full object-cover rounded-lg shadow-lg cursor-pointer transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onClick={handleImageClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-3 p-2 rounded-lg">
        <button
          onClick={prevSlide}
          className="text-white p-2 rounded-full hover:bg-gray-700 transition"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="text-white p-2 rounded-full hover:bg-gray-700 transition"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
