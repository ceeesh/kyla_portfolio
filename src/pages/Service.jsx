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
        className={`bg-mainBgColor h-[1450px] sm:h-[1650px] lg:h-screen flex flex-col gap-10 ${
          isSmallScreen ? "pt-20 pb-28" : ""
        }`}
      >
        <div className="flex justify-center px-6">
          <div className="flex gap-2 flex-col text-center">
            {/* <div className="pt-4">ICON</div> */}
            <div className="text-3xl lg:text-5xl">SERVICES</div>
            {/* <div className="text-xl lg:text-2xl">Lorem ipsum </div> */}
            <div className="text-base lg:text-base">
              If you need a reliable virtual assistant for financial management
              and social media support, I’m here to help optimize your
              operations. Here are the services I offer:
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-40 lg:gap-14  lg:gap-4 px-6 sm:px-20">
          <div className="bookKeeping  w-full h-52 sm:h-80 ">
            <div className="w-full h-full"></div>
            <div className="relative flex justify-center top-[-28px]   ">
              <div></div>
              <div className="px-6 py-4 bg-white rounded-3xl">Accounting</div>
              <div></div>
            </div>
            <div className="text-center">
              From invoices to balance sheets—I’ve got your back, virtually!
            </div>
          </div>

          <div className="meeting  w-full h-52 sm:h-80">
            <div className="w-full h-full"></div>
            <div className="relative flex justify-center top-[-28px]   ">
              <div></div>
              <div className="px-6 py-4 bg-white rounded-3xl">
                Virtual Assistance
              </div>
              <div></div>
            </div>
            <div className="text-center">
              Your behind-the-scenes powerhouse—organized, efficient, and always
              ready to assist!
            </div>
          </div>

          <div className="emailManagement  w-full h-52 sm:h-80 ">
            <div className="w-full h-full"></div>
            <div className="relative flex justify-center top-[-28px]   ">
              <div></div>
              <div className="px-6 py-4 bg-white rounded-3xl">
                Social Media Management
              </div>
              <div></div>
            </div>
            <div className="text-center">
              New to the game, but fueled by creativity—I’ll help your brand
              shine on social media!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
