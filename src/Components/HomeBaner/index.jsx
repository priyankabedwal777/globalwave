import React from "react";
import homebaner from "../../assets/baner.png";

const HomeBanner = () => {
  return (
    <>
      <div className="homebanner relative">
        <img src={homebaner} />
        <div className="absolute top-28 text-white flex flex-col gap-5">
          <h1 className="text-xl">
            From Concept to Capability Fast-Track Your Global Center
          </h1>
          <p>
            In today’s global economy, a Global Capability Center (GCC) is no
            longer just a cost-saving measure—it’s a strategic imperative for
            innovation and growth. However, the journey to a high-performing GCC
            is fraught with complexity{" "}
          </p>
          <div className="flex gap-3 p-4">
            <button className="get-started">Get Started</button>
            <button className="get-started">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
