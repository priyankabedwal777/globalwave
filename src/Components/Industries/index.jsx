import React from "react";
import indimg1 from "../../assets/industries1.svg";
import indimg2 from "../../assets/industries2.png";

const Industries = () => {
  return (
    <>
      <section className="py-16 mx-4 bg-[#F4F6FF]">
        <h1 className=" text-[#EA372F]">Industries We Serve</h1>
        <p>
          By leveraging our deep expertise, we help you overcome common
          challenges and unlock the full potential of your global teams.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className=" bg-[#FFFFFF]">
            <h1 className="">Aviation</h1>
            <p>
              Your High-Performing Global Center Engineered to Accelerate
              Innovation in Aviation.
            </p>
            <p>
              The aviation industry moves at the speed of light—and so should
              your operational capabilities. We partner with the world’s leading
              airlines, aerospace manufacturers, and aviation technology
              companies to build, manage, and scale fully integrated Global
              Capability Centers.
            </p>
            <div>
              <button>Know More</button>
              <img src={indimg1} />
            </div>
          </div>
          <div className="bg-[#FFFFFF]">
            <h1 className="text-[#EA372F]">Shipping & Logistics</h1>
            <p>
              Your High-Performing Global Center: The Strategic Backbone for
              Modern Shipping & Logistics.
            </p>
            <p>
              The global supply chain demands precision, efficiency, and
              resilience. We build in-house Global Capability Centers that serve
              as the operational core for shipping lines, logistics providers,
              and freight forwarders. Our solutions are designed to solve the
              most complex industry challenges, including real-time fleet
              management, supply chain optimization, and customs automation.
            </p>
            <div>
              <button>Know More</button>
              <img src={indimg2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
