import React from "react";
import { useNavigate } from "react-router-dom";
import press1 from "../assets/Press/press1.jpg";
import press2 from "../assets/Press/press2.jpg";
import press3 from "../assets/Press/press3.jpg";
import press4 from "../assets/Press/press4.jpg";

const pressData = [
  { id: "1", image: press1, description: "Our latest modern home redesign featured in Architectural Digest." },
  { id: "2", image: press2, description: "A spotlight on our sustainable interior designs in Home & Living Magazine." },
  { id: "3", image: press3, description: "Exclusive interview about our unique approach in Luxe Interiors." },
  { id: "4", image: press4, description: "Award-winning decor showcased in Design Weekly." }
];

const Press = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 font-sans">
      <section className="max-w-6xl mx-auto py-24 px-8 md:px-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">Press</h1>
        <p className="text-lg text-gray-700 mt-4">Featuring Home Decor in leading publications.</p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-20 py-12">
        {pressData.map((press) => (
          <div
            key={press.id}
            className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate(`/press/${press.id}`)}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={press.image}
                alt={`Press ${press.id}`}
                className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-800 text-base mt-4">{press.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Press;
