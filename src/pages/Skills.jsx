import React from "react";
import { skills } from "../data/data";
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
            <div className="text-3xl lg:text-5xl">Skills</div>
            <div className="text-base lg:text-base">
              My expertise and tools, working together to simplify and enhance
              your success!
            </div>
          </div>
        </div>
        <div className="flex justify-center  px-5">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-center">
            {skills &&
              skills.map((skill, index) => (
                <div key={index} className="shadow-2xl rounded-lg lg:py-6 w-32 sm:w-40 py-2 lg:py-6">
                  <div className="flex justify-center ">
                    <img
                      className="w-[60px] h-[60px]"
                      src={skill.image}
                      alt=""
                    />
                  </div>
                  <div className="text-center pt-4 pt-4">{skill.title}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
