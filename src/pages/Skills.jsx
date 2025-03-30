import React from "react";
import jira from "../assets/jira.png";
import xero from "../assets/xero.png";
import trello from "../assets/trello.png";
import sharepoint from "../assets/sharepoint.png";
import quickbooks from "../assets/quickbooks.png";
import outlook from "../assets/outlook.png";
import notion from "../assets/notion.png";
import myob from "../assets/myob.png";
import msofffice from "../assets/msoffice.png";
import placeholder from "../assets/placeholder-logo.png";
import gsuite from "../assets/g-suite.png";
import canva from "../assets/canva.png";
import { useSmallScreen } from "@/helpers/utils";

const Skills = () => {
  const isSmallScreen = useSmallScreen(640);

  return (
    <>
      <div
        className={`bg-mainBgColor h-fit lg:h-screen flex flex-col gap-10 ${
          isSmallScreen ? "pb-28" : ""
        }`}
      >
        <div className="flex justify-center px-5">
          <div className="flex gap-2 flex-col text-center">
            {/* <div className="pt-4">ICON</div> */}
            <div className="text-3xl lg:text-5xl">Skills</div>
            {/* <div className="text-xl lg:text-2xl">Lorem ipsum </div> */}
            <div className="text-base lg:text-base">
            My expertise and tools, working together to simplify and enhance your success!
            </div>
          </div>
        </div>
        {/* flex flex-col lg:flex-row  gap-40 lg:gap-14  lg:gap-4 px-6 sm:px-20 */}
        <div className="flex justify-center  px-5">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-center">
            <div className="shadow-2xl rounded-lg lg:py-6 w-32 sm:w-40 py-2 lg:py-6">
              <div className="flex justify-center ">
                <img className="w-[60px] h-[60px]" src={jira} alt="" />
              </div>
              <div className="text-center pt-4 pt-4">Jira</div>
            </div>

            <div className="shadow-2xl rounded-lg lg:py-6 w-32 sm:w-40 py-2 lg:py-6">
              <div className="flex justify-center ">
                <img className="w-[60px] h-[60px]" src={xero} alt="" />
              </div>
              <div className="text-center pt-4 pt-4">Xero</div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={trello} alt="" />
              </div>
              <div className="text-center pt-4">Trello</div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={sharepoint} alt="" />
              </div>
              <div className="text-center pt-4">Sharepoint</div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={quickbooks} alt="" />
              </div>
              <div className="text-center pt-4">Quickbooks</div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={outlook} alt="" />
              </div>
              <div className="text-center pt-4">Outlook</div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6 ">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={notion} alt="" />
              </div>
              <div className="text-center pt-4">Notion</div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6 ">
              <div className="flex justify-center ">
                <img className="w-[60px] h-[60px]" src={myob} alt="" />
              </div>
              <div className="text-center pt-4">Myob</div>
            </div>
            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6 ">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={msofffice} alt="" />
              </div>
              <div className="text-center pt-4">Msofffice</div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6 ">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={placeholder} alt="" />
              </div>
              <div className="text-center pt-4">Netsuite</div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6 ">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={placeholder} alt="" />
              </div>
              <div className="text-center pt-4">Tradeshift</div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6 ">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={gsuite} alt="" />
              </div>
              <div className="text-center pt-4">Google Suite
              </div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6 ">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={placeholder} alt="" />
              </div>
              <div className="text-center pt-4">Ariba SAP
              </div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6 ">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={placeholder} alt="" />
              </div>
              <div className="text-center pt-4">Coupa
              </div>
            </div>

            <div className="shadow-2xl rounded-lg w-32 sm:w-40 py-2 lg:py-6 ">
              <div className="flex justify-center">
                <img className="w-[60px] h-[60px]" src={canva} alt="" />
              </div>
              <div className="text-center pt-4">Canva
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
