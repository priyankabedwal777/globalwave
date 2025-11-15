import React from "react";
import homebaner from "../../assets/baner.png";

const HomeBanner = () => {
  return (
    <div className="homebanner relative">
      <img
        src={homebaner}
        alt="Global Capability Center banner showcasing innovation and growth"
      />
      <div className="absolute inset-0 bg-opacity-40" />
      <div className="absolute top-1/4 left-8 right-8 md:left-16 md:right-16 text-white flex flex-col gap-6 max-w-4xl">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
          From Concept to Capability: Fast-Track Your Global Center
        </h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
          In today's global economy, a Global Capability Center (GCC) is no
          longer just a cost-saving measure—it's a strategic imperative for
          innovation and growth. However, the journey to a high-performing GCC
          is fraught with complexity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            className="get-started px-6 py-3 text-base font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => console.log("Get Started clicked")}
          >
            Get Started
          </button>
          <button
            className="border-2 border-white text-white px-6 py-3 text-base font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900"
            onClick={() => console.log("Learn More clicked")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
