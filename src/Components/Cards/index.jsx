import React from "react";
import cardsvg from "../../assets/card.svg";

const Card = () => {
  const cardData = [
    { id: 1, amount: "$10M", label: "Saved", icon: cardsvg },
    { id: 2, amount: "500+", label: "Projects", icon: cardsvg },
    { id: 3, amount: "50+", label: "Clients", icon: cardsvg },
    { id: 4, amount: "100+", label: "Clients", icon: cardsvg },
    { id: 5, amount: "70+", label: "Clients", icon: cardsvg },
  ];

  return (
    <section className="bg-[#1E2361] py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-7">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-transparent"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <img src={card.icon} alt="Card icon" className="w-16 h-16 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                </div>
                <h3 className="text-3xl font-bold text-[#1E2361] group-hover:text-white transition-colors duration-300 transform group-hover:scale-105">
                  {card.amount}
                </h3>
                <p className="text-gray-600 text-lg group-hover:text-white/90 transition-colors duration-300">{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
