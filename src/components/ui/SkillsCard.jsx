import React from "react";

const SkillsCard = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-center">
      {skills &&
        skills.map((skill, index) => (
          <div
            key={index}
            className="shadow-2xl rounded-lg lg:py-6 w-32 sm:w-40 py-2 lg:py-6 group hover:animate-shake"
          >
            <div className="flex justify-center">
              <img className="w-[60px] h-[60px]" src={skill.image} alt="" />
            </div>
            <div className="text-center pt-4">{skill.title}</div>
          </div>
        ))}
    </div>
  );
};

export default SkillsCard;
