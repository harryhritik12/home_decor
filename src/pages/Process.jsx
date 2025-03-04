import React from "react";
import process from "../assets/process1.jpg";
import team1 from "../assets/team/team.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";

const Process = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen font-sans mt-24">
            <section className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto py-20 px-6 md:px-16">
                <div className="md:w-1/2">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Crafting Unique, Personalized Spaces
                    </h1>
                    <p className="text-lg text-gray-600 mt-4">
                        At Home Decor, we blend innovation with elegance to create spaces that truly reflect your individuality.
                    </p>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img
                        src={process}
                        alt="Design process"
                        className="w-full h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </section>

            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 py-20">
                <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-4">Residential Design</h2>
                    <p className="text-gray-700">
                        Transforming houses into homes with designs that blend comfort and style, tailored to your taste.
                    </p>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-4">Commercial Design</h2>
                    <p className="text-gray-700">
                        Creating functional and aesthetic commercial spaces that enhance your brand and engage customers.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 bg-gray-50 rounded-lg shadow-inner">
                <h2 className="text-4xl font-bold text-center mb-12">Our Design Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-700">
                    <p>
                        We collaborate closely with you to understand your vision, ensuring each project is a true reflection of your personality and needs.
                    </p>
                    <p>
                        Our team balances creativity with practicality, delivering designs that are both beautiful and functional.
                    </p>
                </div>
            </section>

            <section id="team-section" className="max-w-7xl mx-auto px-6 md:px-16 py-20">
                <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[{name: "RObert", role: "Principal Designer", img: team1},
                      {name: "Pattinon", role: "Senior Designer", img: team2},
                      {name: "VIrat", role: "Project Manager", img: team3},
                      {name: "Prabhat", role: "Art Advisor", img: team4}].map((member, index) => (
                        <div key={index} className="group relative text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-80 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Process;
