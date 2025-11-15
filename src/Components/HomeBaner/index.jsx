import React from "react";
import homebaner from "../../assets/baner.png";

const HomeBanner = () => {
  return (
    <div className="homebanner">
      <img
        src={homebaner}
        alt="Global Capability Center banner showcasing innovation and growth"
      />
      <div className="absolute top-20 left-8 text-white bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">
          From Concept to Capability Fast-Track Your Global Center.
        </h1>
        <p className="text-lg mb-6 leading-relaxed">
          In today's global economy, a Global Capability Center (GCC) is no
          longer just a cost-saving measure—it's a strategic imperative for
          innovation and growth. However, the journey to a high-performing GCC
          is fraught with complexity, from talent acquisition and cultural
          integration to operational scalability and technology.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
            Cost saver calculator
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
