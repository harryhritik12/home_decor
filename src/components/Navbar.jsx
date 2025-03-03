import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

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
    <nav className="fixed top-0 left-0 w-full bg-[#FFF0F5] shadow-md z-50 px-8 py-4 flex items-center justify-between transition-all duration-500">
      <div className="flex-1 flex justify-center">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="cursor-pointer">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Home Decor Logo" className="w-36 h-auto" />
          </Link>
        </motion.div>
      </div>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="absolute right-8 text-3xl text-gray-800"
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
            className="fixed inset-0 bg-[#FFF0F5] text-white flex flex-col items-center justify-center"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="absolute top-8 left-10 cursor-pointer">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="Home Decor Logo" className="w-44 h-auto" />
              </Link>
            </motion.div>

            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-10 text-4xl text-gray-800 hover:text-gray-300 transition">
              <X size={32} />
            </button>

            <ul className="text-5xl font-serif space-y-10 text-center tracking-wide text-gray-800">
              <li><Link to="/process" onClick={() => setIsOpen(false)}>Process</Link></li>
              <li><button onClick={handleTeamClick}>Team</button></li>
              <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
              <li><Link to="/press" onClick={() => setIsOpen(false)}>Press</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
