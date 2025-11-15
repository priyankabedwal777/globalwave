import React from "react";
import homebaner from "../../assets/baner.png";

const HomeBanner = () => {
  return (
    <div className="homebanner">
      <img
        src={homebaner}
        alt="Global Capability Center banner showcasing innovation and growth"
      />
      <div className="absolute top-4 sm:top-8 lg:top-20 left-4 sm:left-6 lg:left-8 right-4 sm:right-auto text-white bg-black bg-opacity-60 p-4 sm:p-6 rounded-lg max-w-full sm:max-w-2xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
          From Concept to Capability Fast-Track Your Global Center.
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
          In today's global economy, a Global Capability Center (GCC) is no
          longer just a cost-saving measure—it's a strategic imperative for
          innovation and growth. However, the journey to a high-performing GCC
          is fraught with complexity, from talent acquisition and cultural
          integration to operational scalability and technology integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-sm sm:text-base">
            Cost saver calculator
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
