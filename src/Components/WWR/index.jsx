import React from "react";

const WhoWeare = () => {
  return (
    <section className="mt-16 py-20 px-4 sm:px-8 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EA372F] leading-tight">
              Who We Are
            </h2>
            <p className="lg:text-4xl sm:text-xl text-gray-600 leading-relaxed">
              Mastering the complexities of GCCs to unlock innovation, drive
              efficiency, and build your integrated, high-performing global
              team.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              In today's global economy, a Global Capability Center (GCC) is no
              longer just a cost-saving measure—it's a strategic imperative for
              innovation and growth. However, the journey to a high-performing
              GCC is fraught with complexity, from talent acquisition and
              cultural integration to operational scalability and technology
              integration.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We are your strategic partner in mastering this complexity. We
              work alongside the world's leading businesses to build, manage,
              and scale fully integrated, in-house teams that act as a seamless
              extension of your core operations. By leveraging our deep
              expertise, we help you overcome common challenges and unlock the
              full potential of your global teams.
            </p>
            <button className="p-3 bg-[#EA372F] text-white rounded-3xl">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeare;
