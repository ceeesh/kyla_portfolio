import React from "react";
import { skills } from "../data/data";
import { useSmallScreen } from "@/helpers/utils";
import SkillsCard from "@/components/ui/SkillsCard";

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
          <SkillsCard skills={skills} />
        </div>
      </div>
    </>
  );
};

export default Skills;
