import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/ProjectData";

export default function ProjectDetail() {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const projectNames = Object.keys(projects);
  const currentIndex = projectNames.findIndex(
    (name) => name.toLowerCase() === projectName.toLowerCase()
  );

  const prevProjectName = currentIndex > 0 ? projectNames[currentIndex - 1] : null;
  const nextProjectName = currentIndex < projectNames.length - 1 ? projectNames[currentIndex + 1] : null;

  if (currentIndex === -1) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-2xl font-medium bg-gray-100">
        Project Not Found
      </div>
    );
  }

  const project = projects[projectNames[currentIndex]];
  const { images, description, location, sector, photographer } = project;

  function formatProjectName(name) {
    return name.replace(/([A-Z])/g, " $1").replace(/^\s/, "").trim();
  }

  const moreProjects = projectNames
    .filter((name) => name !== projectNames[currentIndex])
    .slice(0, 3);

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="max-w-[1300px] mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="relative w-full h-[450px] bg-gray-300 overflow-hidden rounded-xl shadow-lg">
          {images.length > 0 && (
            <img
              src={images[0]}
              alt={projectNames[currentIndex]}
              className="w-full h-full object-cover brightness-90 transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-5xl font-extrabold tracking-wide">
              {formatProjectName(projectNames[currentIndex])}
            </h1>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex justify-between items-center mt-8">
          <button
            className="text-gray-600 hover:text-black text-lg font-medium transition-transform transform hover:scale-105"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
          <div className="flex space-x-6">
            {prevProjectName && (
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-full text-md font-semibold shadow-md hover:bg-gray-900 transition-all duration-300"
                onClick={() => navigate(`/project/${prevProjectName.toLowerCase()}`)}
              >
                ← Previous
              </button>
            )}
            {nextProjectName && (
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-full text-md font-semibold shadow-md hover:bg-gray-900 transition-all duration-300"
                onClick={() => navigate(`/project/${nextProjectName.toLowerCase()}`)}
              >
                Next →
              </button>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-200 p-8 rounded-xl shadow-lg">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 uppercase border-l-4 border-gray-800 pl-4">
              About the Project
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">{description}</p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 uppercase border-b pb-2">
              Project Info
            </h2>
            <p className="mt-3 text-gray-700"><strong>📍 Location:</strong> {location}</p>
            <p className="mt-2 text-gray-700"><strong>🏗 Sector:</strong> {sector}</p>
            <p className="mt-2 text-gray-700"><strong>📷 Photographer:</strong> {photographer}</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            >
              <img
                src={src}
                alt={`${projectNames[currentIndex]} ${index + 1}`}
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>

        {/* More Projects Section */}
        <h2 className="text-3xl font-semibold text-gray-800 mt-16 mb-8 text-center">
          Explore More Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-200 p-8 rounded-lg">
          {moreProjects.map((name, index) => (
            <div
              key={index}
              className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              onClick={() => navigate(`/project/${name.toLowerCase()}`)}
            >
              <img
                src={projects[name].images[0]}
                alt={name}
                className="w-full h-60 object-cover brightness-90 hover:brightness-100 transition-all"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                <p className="text-xl font-semibold">{formatProjectName(name)}</p>
                <p className="text-sm text-gray-200">View Project →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
