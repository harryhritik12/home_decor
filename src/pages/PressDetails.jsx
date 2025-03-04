import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import press1 from "../assets/Press/press1.jpg";
import press2 from "../assets/Press/press2.jpg";
import press3 from "../assets/Press/press3.jpg";
import press4 from "../assets/Press/press4.jpg";

const pressArticles = {
    "1": { image: press1, title: "Modern Home Redesign", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue." },
    "2": { image: press2, title: "Sustainable Interior Designs", content: "Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur." },
    "3": { image: press3, title: "Exclusive Interview", content: "Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam." },
    "4": { image: press4, title: "Award-Winning Decor", content: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit." }
};

const PressDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const article = pressArticles[id];
    const articleIds = Object.keys(pressArticles);
    const currentIndex = articleIds.indexOf(id);
    
    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % articleIds.length;
        navigate(`/press/${articleIds[nextIndex]}`);
    };
    
    const handlePrevious = () => {
        const prevIndex = (currentIndex - 1 + articleIds.length) % articleIds.length;
        navigate(`/press/${articleIds[prevIndex]}`);
    };

    if (!article) {
        return <p className="text-center text-red-500 text-xl">Article Not Found</p>;
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-serif p-10 mt-24">
            <button onClick={() => navigate(-1)} className="mb-6 text-gray-800 hover:underline">
                ← Back to Press
            </button>
            <motion.div 
                key={id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-xl relative"
            >
                <h1 className="text-5xl font-bold mb-6 text-center">{article.title}</h1>
                <img src={article.image} alt={article.title} className="w-full h-96 object-cover rounded-xl mb-6" />
                <p className="text-lg text-gray-700 leading-relaxed">{article.content}</p>
                
                <div className="flex justify-between mt-8">
                    <button onClick={handlePrevious} className="text-gray-800 hover:underline">← Previous</button>
                    <button onClick={handleNext} className="text-gray-800 hover:underline">Next →</button>
                </div>
            </motion.div>
        </div>
    );
};

export default PressDetails;
