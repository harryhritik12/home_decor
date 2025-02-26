import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import resident1 from "../assets/spruce/image5.jpg";
import resident2 from "../assets/spanishcolonial/image1.jpg";
import resident3 from "../assets/sebago/image3.jpg";
import resident4 from "../assets/york/image3.jpg";
import commercial1 from "../assets/jarcoOldport/image2.jpg";
import commercial2 from "../assets/polish/image2.jpg";
import commercial3 from "../assets/jarcoEliot/image2.jpg";
import commercial4 from "../assets/MercurryInn/image2.jpg";

const residentialProjects = [
  { img: resident1, title: "Spruce", path: "spruce" },
  { img: resident2, title: "Spanish Colonial", path: "spanishcolonial" },
  { img: resident3, title: "Sebago", path: "sebago" },
  { img: resident4, title: "York", path: "york" },
];

const commercialProjects = [
  { img: commercial1, title: "Jarco Old Port", path: "jarcooldport" },
  { img: commercial2, title: "Polish", path: "polish" },
  { img: commercial3, title: "Jarco Eliot", path: "jarcoeliot" },
  { img: commercial4, title: "Mercury Inn", path: "mercuryinn" },
];

const ProjectSlider = () => {
  const [showResidential, setShowResidential] = useState(true);
  const navigate = useNavigate();
  const projects = showResidential ? residentialProjects : commercialProjects;

  return (
    <section className="p-10 bg-transparent">
      <div className="text-center mb-6">
        <button
          className={`mx-4 text-xl font-bold transition-colors duration-300 ${
            showResidential ? "text-black border-b-4 border-black" : "text-gray-400"
          }`}
          onClick={() => setShowResidential(true)}
        >
          RESIDENTIAL
        </button>
        <button
          className={`mx-4 text-xl font-bold transition-colors duration-300 ${
            !showResidential ? "text-black border-b-4 border-black" : "text-gray-400"
          }`}
          onClick={() => setShowResidential(false)}
        >
          COMMERCIAL
        </button>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper rounded-lg shadow-lg"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-3xl font-semibold drop-shadow-md">{project.title}</h3>
                  <button
                    className="mt-2 text-sm bg-orange-500 px-5 py-2 rounded-full hover:bg-orange-400 shadow-md"
                    onClick={() => navigate(`/project/${project.path}`)}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSlider;
