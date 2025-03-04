import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import Residential Images
import CharlesTown from "../assets/Projects/Residential/CharlesTown.jpg";
import KitterPoint from "../assets/Projects/Residential/KitterPoint.jpg";
import Sebago from "../assets/Projects/Residential/Sebago.jpg";
import SpanishColonial from "../assets/Projects/Residential/SpanishColonial.jpg";
import York from "../assets/Projects/Residential/York.jpg";
import Spruce from "../assets/Projects/Residential/spruce.jpg";

// Import Commercial Images
import DunstanTap from "../assets/Projects/Commercial/DunstanTapandTable.jpg";
import JarcoOldPort from "../assets/Projects/Commercial/JarcoOldPort.jpg";
import JarcoEliot from "../assets/Projects/Commercial/JarcoEliot.jpg";
import MercuryInn from "../assets/Projects/Commercial/mercuryINN.jpg";
import Polish from "../assets/Projects/Commercial/polish.jpg";

// Image data with names
const residentialImages = [
  { src: CharlesTown, name: "CharlesTown" },
  { src: KitterPoint, name: "KitteryPoint" },
  { src: Sebago, name: "Sebago" },
  { src: SpanishColonial, name: "SpanishColonial" },
  { src: York, name: "York" },
  { src: Spruce, name: "Spruce" },
];

const commercialImages = [
  { src: DunstanTap, name: "DunstanTabTable" },
  { src: JarcoOldPort, name: "JarcoOldPort" },
  { src: JarcoEliot, name: "JarcoEliot" },
  { src: MercuryInn, name: "MercuryInn" },
  { src: Polish, name: "Polish" },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("residential");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 mt-24">
      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <h1 className="text-6xl font-serif text-gray-900">Projects</h1>

        {/* Tabs for Residential & Commercial */}
        <div className="flex space-x-6 mt-6 text-lg font-medium">
          <button
            onClick={() => setActiveTab("residential")}
            className={`pb-1 uppercase tracking-wide ${
              activeTab === "residential"
                ? "border-b-2 border-black text-black"
                : "text-gray-400 hover:text-black transition"
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => setActiveTab("commercial")}
            className={`pb-1 uppercase tracking-wide ${
              activeTab === "commercial"
                ? "border-b-2 border-black text-black"
                : "text-gray-400 hover:text-black transition"
            }`}
          >
            Commercial
          </button>
        </div>

        {/* Animated Image Grid */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              {(activeTab === "residential" ? residentialImages : commercialImages).map(
                (item, index) => (
                  <div
                    key={index}
                    className="text-center cursor-pointer group"
                    onClick={() => navigate(`/project/${item.name.toLowerCase()}`)}
                  >
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <img
                        src={item.src}
                        alt={item.name}
                        className="w-full h-[300px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-2 text-lg font-medium text-gray-700">
                      {item.name.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                  </div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
