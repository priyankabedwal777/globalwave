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
              className="bg-white rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center space-y-4">
                <img src={card.icon} alt="Card icon" className="w-16 h-16" />
                <h3 className="text-3xl font-bold text-[#1E2361]">
                  {card.amount}
                </h3>
                <p className="text-gray-600 text-lg">{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
