import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo4.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [menuButtonPosition, setMenuButtonPosition] = useState({ top: 0, left: 0 });
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    // Set logo as loaded after a delay
    const logoTimer = setTimeout(() => setLogoLoaded(true), 500);

    // Function to update menu button position
    const updateMenuButtonPosition = () => {
      if (menuButtonRef.current) {
        const rect = menuButtonRef.current.getBoundingClientRect();
        setMenuButtonPosition({ top: rect.top, left: rect.left });
      }
    };

    // Function to check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Initial position and screen size check
    updateMenuButtonPosition();
    checkScreenSize();

    // Update position and screen size on window resize
    window.addEventListener("resize", updateMenuButtonPosition);
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listeners and timers
    return () => {
      clearTimeout(logoTimer);
      window.removeEventListener("resize", updateMenuButtonPosition);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

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
    <nav className="fixed top-0 left-0 w-full bg-[#FFF0F5] shadow-md z-50 h-24 flex items-center justify-between px-4">
      {/* Logo with animation */}
      <motion.div
        initial={{ x: "50vw", scale: 1.5 }}
        animate={{ x: logoLoaded ? 0 : "50vw", scale: logoLoaded ? 1 : 1.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-full flex items-center"
      >
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Home Decor Logo" className="h-20 object-contain" />
        </Link>
      </motion.div>

      {/* Menu Button */}
      <motion.button
        ref={menuButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="text-3xl text-gray-800 mr-4"
      >
        {isOpen ? <X /> : <Menu />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              top: isSmallScreen ? menuButtonPosition.top : "50%",
              left: isSmallScreen ? menuButtonPosition.left : "50%",
              width: 0,
              height: 0,
              opacity: 0,
              transform: isSmallScreen ? "translate(0, 0)" : "translate(-50%, -50%)",
            }}
            animate={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 1,
              transform: "translate(0, 0)",
            }}
            exit={{
              top: isSmallScreen ? menuButtonPosition.top : "50%",
              left: isSmallScreen ? menuButtonPosition.left : "50%",
              width: 0,
              height: 0,
              opacity: 0,
              transform: isSmallScreen ? "translate(0, 0)" : "translate(-50%, -50%)",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed bg-[#FFF0F5] text-white flex flex-col items-center justify-center"
            style={{ zIndex: 40 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-8 left-10 cursor-pointer"
            >
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="Home Decor Logo" className="h-20 object-contain" />
              </Link>
            </motion.div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-10 text-4xl text-gray-800 hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>

            <ul className="text-5xl font-serif space-y-10 text-center tracking-wide text-gray-800">
              <li>
                <Link to="/process" onClick={() => setIsOpen(false)}>
                  Process
                </Link>
              </li>
              <li>
                <button onClick={handleTeamClick}>Team</button>
              </li>
              <li>
                <Link to="/projects" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/press" onClick={() => setIsOpen(false)}>
                  Press
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
