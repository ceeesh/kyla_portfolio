import React from "react";
import { Button } from "@/components/ui/button";
import kylaProfile from "../assets/kyla-profile2.jpg";
import image0 from "../assets/image0.jpeg";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import { useSmallScreen } from "@/helpers/utils";

const About = () => {
  const isSmallScreen = useSmallScreen(640);

  // Scroll to Contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`bg-mainBgColor ${
          isSmallScreen ? "" : "aboutBg"
        } h-3/5 sm:h-4/5 lg:h-screen px-8 sm:px-32 lg:px-44 pt-20 lg:pt-36 flex flex-col`}
      >
        {/* text-center h-fit sm:h-56 tracking-tight bg-white sm:bg-transparent p-8 */}
        <div className="text-center h-fit sm:h-56 tracking-tight bg-white sm:bg-transparent p-8">
          <p className="pb-10">
            Numbers don't have to be a headache - I make them work for you!
          </p>
          <p className="text3-xl sm:text-4xl lg:text-6xl">
            Hey there! I’m Kyla, your friendly
          </p>
          <p className="text3-xl sm:text-4xl lg:text-6xl">
            {" "}
            Virtual Assistant and Bookkeeper{" "}
          </p>
          {/* px-20 mt-5 */}
          <button
            className="mt-5 text-center border border-mainDescriptionColor text-mainDescriptionColor bg-[#FFFFFF]
             hover:bg-mainDescriptionColor hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition duration-300"
            onClick={handleScrollToContact}
          >
            CONTACT
          </button>
          {/* <Button variant="outline" className="w-full sm:w-fit mt-5" onClick={handleScrollToContact}>
            CONTACT
          </Button> */}
        </div>
      </div>
      <div className="bg-mainBgColor h-fit sm:h-screen  flex flex-col  items-center">
        <div className="hidden sm:flex gap-10 lg:gap-32 r w-10/12 justify-center ">
          <div className="w-screen h-fit flex flex-col">
            <img
              src={image5}
              className="relative top-[-10px] sm:top-[-30px] md:top-[-37px] lg:top-[-50px] z-1   md:w-[400px] lg:w-[600px]"
            />
          </div>
          <div className="w-screen pt-4 sm:pt-10 md:pt-18 text-mainDescriptionColor">
            <div className="text-mainDescriptionColor  text-md sm:text-3xl md:text-5xl lg:text-5xl ">
              <p>ACCURACY AND</p>
              <p>EFFICIENCY</p>
              <p>NO MATTER</p>
              <p>THE CURRENCY</p>
            </div>
            <div className="hidden xl:block">
              <div className="pt-4">
                I'm an Accounting Professional with over seven years of
                experience, specializing in Accounts Receivable (AR) with some
                Accounts Payable (AP) exposure. I have worked with international
                companies, handling cross-border transactions and ensuring
                smooth financial operations across different markets.
              </div>

              <div className="pt-4">
                Now transitioning into the virtual assistance world, I bring
                expertise in AR processes, financial management, and
                problem-solving to support businesses of all sizes. With
                knowledge of accounting and virtual assistant tools, I offer a
                detail-oriented and proactive approach to financial
                organization.
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-2 lg:gap-32 justify-center ">
          <div className="h-fit flex flex-col">
            <img
              src={image5}
              // relative w-[170px] top-[-10px] sm:top-[-30px] md:top-[-37px] lg:top-[-50px] z-1 justify-items-center
              className=""
            />
          </div>
          <div className="pt-4 sm:pt-10 md:pt-18">
            <div className="text-center text-md sm:text-3xl md:text-4xl lg:text-5xl">
              <p>ACCURACY AND EFFICIENCY NO MATTER THE CURRENCY</p>
            </div>
          </div>
        </div>
        <div className="px-6 sm:px-24 block xl:hidden text-center">
          <div className="pt-8">
            I'm an Accounting Professional with over seven years of experience,
            specializing in Accounts Receivable (AR) with some Accounts Payable
            (AP) exposure. I have worked with international companies, handling
            cross-border transactions and ensuring smooth financial operations
            across different markets.
          </div>

          <div className="pt-4">
            Now transitioning into the virtual assistance world, I bring
            expertise in AR processes, financial management, and problem-solving
            to support businesses of all sizes. With knowledge of accounting and
            virtual assistant tools, I offer a detail-oriented and proactive
            approach to financial organization.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
