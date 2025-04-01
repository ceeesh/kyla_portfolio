import React from "react";
import { services } from "../data/data";
import { useSmallScreen } from "@/helpers/utils";

const Service = () => {
  const isSmallScreen = useSmallScreen(640);

  return (
    <>
      <div
        className={`bg-mainBgColor h-[1450px] sm:h-[1650px] lg:h-screen flex flex-col gap-10 ${
          isSmallScreen ? "pt-20 pb-28" : ""
        }`}
      >
        <div className="flex justify-center px-6">
          <div className="flex gap-2 flex-col text-center">
            <div className="text-3xl lg:text-5xl">SERVICES</div>
            <div className="text-base lg:text-base">
              If you need a reliable virtual assistant for financial management
              and social media support, I’m here to help optimize your
              operations. Here are the services I offer:
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-40 lg:gap-14  lg:gap-4 px-6 sm:px-20">
          {services &&
            services.map((service, index) => (
              <div key={index} className={`${service.cssImage}  w-full h-52 sm:h-80 `}>
                <div className="w-full h-full"></div>
                <div className="relative flex justify-center top-[-28px]   ">
                  <div></div>
                  <div className="px-6 py-4 bg-white rounded-3xl">
                    {service.title}
                  </div>
                  <div></div>
                </div>
                <div className="text-center">{service.description}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Service;
