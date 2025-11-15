import React from "react";

const WhoWeare = () => {
  return (
    <div className=" mt-32 mx-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Who We Are
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Mastering the complexities of GCCs to unlock innovation, drive
            efficiency, and build your integrated, high-performing global team.
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            In today's global economy, a Global Capability Center (GCC) is no
            longer just a cost-saving measure—it's a strategic imperative for
            innovation and growth. However, the journey to a high-performing GCC
            is fraught with complexity, from talent acquisition and cultural
            integration to operational scalability and technology
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are your strategic partner in mastering this complexity. We work
            alongside the world's leading businesses to build, manage, and scale
            fully integrated, in-house teams that act as a seamless extension of
            your core operations. By leveraging our deep expertise, we help you
            overcome common challenges and unlock the full potential of your
            global teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeare;
