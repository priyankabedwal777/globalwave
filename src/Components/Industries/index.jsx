import React from "react";
import indimg1 from "../../assets/industries1.svg";
import indimg2 from "../../assets/industries2.png";

const Industries = () => {
  return (
    <section className="py-16 px-4 bg-[#F4F6FF]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#EA372F] mb-4">
          Industries We Serve
        </h1>
        <p className="text-lg text-gray-600">
          By leveraging our deep expertise, we help you overcome common
          challenges and unlock the full potential of your global teams.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Aviation</h2>
          <p className="font-semibold mb-4">
            Your High-Performing Global Center Engineered to Accelerate
            Innovation in Aviation.
          </p>
          <p className="text-gray-600 mb-6">
            The aviation industry moves at the speed of light—and so should your
            operational capabilities. We partner with the world's leading
            airlines, aerospace manufacturers, and aviation technology companies
            to build, manage, and scale fully integrated Global Capability
            Centers.
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-[#EA372F] text-white px-6 py-2 rounded hover:bg-red-600">
              Know More
            </button>
            <img src={indimg1} className="w-16 h-16" />
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#EA372F] mb-4">
            Shipping & Logistics
          </h2>
          <p className="font-semibold mb-4">
            Your High-Performing Global Center: The Strategic Backbone for
            Modern Shipping & Logistics.
          </p>
          <p className="text-gray-600 mb-6">
            The global supply chain demands precision, efficiency, and
            resilience. We build in-house Global Capability Centers that serve
            as the operational core for shipping lines, logistics providers, and
            freight forwarders. Our solutions are designed to solve the most
            complex industry challenges, including real-time fleet management,
            supply chain optimization, and customs automation.
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-[#EA372F] text-white px-6 py-2 rounded hover:bg-red-600">
              Know More
            </button>
            <img src={indimg2} className="w-16 h-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
