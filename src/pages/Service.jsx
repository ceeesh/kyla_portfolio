import React from "react";
import { Button } from "@/components/ui/button";
import kylaProfile from "../assets/kyla-profile2.jpg";
import serviceIcon from "../assets/service-mainbg.png";
import emailManagement from "../assets/email-management.jpg";
import { useSmallScreen } from "@/helpers/utils";

const Service = () => {
  const isSmallScreen = useSmallScreen(640);

  return (
    <>
      {/* <div className="bg-mainBgColor flex justify-items-center items-center"><img src={serviceIcon} className="bg-white rounded-full p-4"/></div> */}
      <div
        className={`bg-mainBgColor h-fit lg:h-screen flex flex-col gap-10 ${
          isSmallScreen ? "pt-20 pb-28" : ""
        }`}
      >
        <div className="flex justify-center">
          <div className="flex gap-2 flex-col text-center">
            {/* <div className="pt-4">ICON</div> */}
            <div className="text-3xl lg:text-5xl">SERVICES</div>
            <div className="text-xl lg:text-2xl">Lorem ipsum </div>
            <div className="text-base lg:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa libero minima laudantium quis perferendis quo, exercitationem eius reiciendis, quas voluptatem dolore natus, ratione asperiores. Suscipit animi doloribus illo modi velit?</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-4 px-6 sm:px-20">
          <div className="emailManagement  w-full h-52 sm:h-80 ">
            <div className="w-full h-full"></div>
            <div className="relative flex justify-center top-[-28px]   ">
              <div></div>
              <div className="px-6 py-4 bg-white">
                QUICK LISTEN
              </div>
              <div></div>
            </div>
          </div>

          <div className="bookKeeping  w-full h-52 sm:h-80 ">
            <div className="w-full h-full"></div>
            <div className="relative flex justify-center top-[-28px]   ">
              <div></div>
              <div className="px-6 py-4 bg-white">
                QUICK LISTEN
              </div>
              <div></div>
            </div>
          </div>

          <div className="meeting  w-full h-52 sm:h-80">
            <div className="w-full h-full"></div>
            <div className="relative flex justify-center top-[-28px]   ">
              <div></div>
              <div className="px-6 py-4 bg-white">
                QUICK LISTEN
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="mt-10">hello</div>
      </div>
    </>
  );
};

export default Service;
