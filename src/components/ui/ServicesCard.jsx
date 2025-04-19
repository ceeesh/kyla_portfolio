import React from "react";

const ServicesCard = ({ services }) => {
  return (
    <>
      {services &&
        services.map((service, index) => (
          <div
            key={index}
            className={`group relative ${service.cssImage} w-full h-52 sm:h-80 transition-all duration-300 ease-in-out rounded-lg`}
          >
            {/* Overlay with hover effect and rounded corners */}
            <div className="w-full h-full rounded-lg transition-all duration-300 ease-in-out group-hover:bg-gray-200 opacity-25"></div>

            {/* Title block */}
            <div className="relative flex justify-center top-[-28px] z-10">
              <div></div>
              <div className="px-6 py-4 bg-white rounded-3xl transition duration-300">
                {service.title}
              </div>
              <div></div>
            </div>

            {/* Description */}
            <div className="text-center">{service.description}</div>

            {/* Hidden text on hover */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
              Surprise Text Here!
            </div>
          </div>
        ))}
    </>
  );
};

export default ServicesCard;
