import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleTeamClick = () => {
    navigate("/process");
    setTimeout(() => {
      const teamSection = document.getElementById("team-section");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a202c] shadow-md z-50 px-8 py-4 flex items-center justify-between transition-all duration-500">
      <div className="flex-1 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold tracking-wide cursor-pointer text-white"
        >
          <Link to="/" onClick={() => setIsOpen(false)}>Home Decor</Link>
        </motion.div>
      </div>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="absolute right-8 text-3xl text-white"
      >
        {isOpen ? <X /> : <Menu />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#2d3748] text-white flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-8 left-10 text-3xl font-bold tracking-wide"
            >
              <Link to="/" onClick={() => setIsOpen(false)}>Home Decor</Link>
            </motion.div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-10 text-4xl text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>

            <ul className="text-5xl font-serif space-y-10 text-center tracking-wide">
              <li>
                <motion.div
                  whileHover={{ scale: 1.1, color: "#63b3ed" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/process" onClick={() => setIsOpen(false)}>
                    Process
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ scale: 1.1, color: "#63b3ed" }}
                  transition={{ duration: 0.3 }}
                >
                  <button onClick={handleTeamClick} className="hover:opacity-80 transition-opacity duration-300">
                    Team
                  </button>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ scale: 1.1, color: "#63b3ed" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/projects" onClick={() => setIsOpen(false)}>
                    Projects
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ scale: 1.1, color: "#63b3ed" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/press" onClick={() => setIsOpen(false)}>
                    Press
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ scale: 1.1, color: "#63b3ed" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
