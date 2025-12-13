import React from "react";
import indimg1 from "../../assets/industries1.svg";
import indimg2 from "../../assets/industries2.png";

const Industries = () => {
  return (
    <section className="mt-16 py-20 px-20 bg-[#F4F6FF]">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#EA372F] mb-4">
          Industries We Serve
        </h1>
        <p className="text-lg text-gray-600">
          By leveraging our deep expertise, we help you overcome common
          challenges and unlock the full potential of your global teams.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#EA372F]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
          <div className="p-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-[#EA372F] group-hover:text-red-600 transition-colors duration-300">
              Aviation
            </h2>
            <p className="font-semibold mb-4">
              Your High-Performing Global Center Engineered to Accelerate
              Innovation in Aviation. loreem ipsum dolor sit amet, consectetur
            </p>
            <p className="text-gray-600 mb-6">
              The aviation industry moves at the speed of light—and so should
              your operational capabilities. We partner with the world's leading
              airlines, aerospace manufacturers, and aviation technology
              companies to build, manage, and scale fully integrated Global
              Capability Centers.
            </p>
          </div>
          <div className="flex  items-start relative z-10">
            <button className="bg-[#EA372F] text-white px-5 py-2 ml-8 rounded hover:bg-red-600 group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300">
              Know More
            </button>
            <img
              src={indimg1}
              className="group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#EA372F]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
          <div className="p-8 relative z-10">
            <h2 className="text-2xl font-bold text-[#EA372F] mb-4 group-hover:text-red-600 transition-colors duration-300">
              Shipping & Logistics
            </h2>
            <p className="font-semibold mb-4">
              Your High-Performing Global Center: The Strategic Backbone for
              Modern Shipping & Logistics.
            </p>
            <p className="text-gray-600 mb-6">
              The global supply chain demands precision, efficiency, and
              resilience. We build in-house Global Capability Centers that serve
              as the operational core for shipping lines, logistics providers,
              and freight forwarders. Our solutions are designed to solve the
              most complex industry challenges, including real-time fleet
              management, supply chain optimization, and customs automation.
            </p>
          </div>
          <div className="flex items-start relative z-10">
            <button className="bg-[#EA372F] text-white px-5 py-2 ml-8 rounded hover:bg-red-600 group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300">
              Know More
            </button>
            <img
              src={indimg2}
              className="group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
