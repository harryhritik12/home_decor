import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import ProjectsPage from "./pages/Project";
import ProjectDetail from "./components/ProjectDetails";
import Contact from "./pages/Contact";
import Process from "./pages/Process";
import ScrollToTop from "./components/ScrollToTop";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";
import Press from "./pages/Press";
import PressDetails  from "./pages/PressDetails";
export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashComplete = () => {
    setIsSplashVisible(false);
  };

  return (
    <Router>
      {isSplashVisible ? (
        <SplashScreen onAnimationComplete={handleSplashComplete} />
      ) : (
        <>
          <ScrollToTop />
          <Navbar />
          <main className="mt-16 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:projectName" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/process" element={<Process />} />
              <Route path="/Press" element={<Press />} />
              <Route path="/press/:id" element={<PressDetails />} />


              
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
}
