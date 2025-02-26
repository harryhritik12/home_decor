import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1400px] mx-auto px-8 py-24">
      {/* Left: Large Heading */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[4.5rem] md:text-[5rem] font-serif leading-tight text-gray-900 tracking-tight">
          Design that <br /> tells a story.
        </h1>
      </motion.div>

      {/* Right: Description and Button */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-[500px] mx-auto md:mx-0">
          Every space holds a narrative waiting to unfold. We create timeless 
          designs that blend elegance, functionality, and emotion—transforming 
          ideas into immersive experiences.
        </p>
        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 text-lg font-medium rounded-full text-white bg-gray-900 hover:bg-gray-700 transition duration-300 shadow-md"
        >
          Explore Our Work
        </button>
      </motion.div>
    </section>
  );
}
