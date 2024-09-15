import React from "react";

const Hero = () => {
  return (
    <div className="bgHero h-screen">
      {/* <img src={heroBg}/> */}
      {/* <h1 className="text-mainDescriptionColor">TO BE CONTINUED...</h1>
      <h1 className="text-mainTitleColor">KYLA CAITLYN REYTA</h1> */}
      <div className="text-mainTitleColor flex justify-center items-center h-screen">
        <div className="tracking-tight text-center">
          <p className="pb-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            doloribus error aut consequuntur
          </p>
          <div className=" text-8xl">
            <p>Brand Identity &</p>
            <p>Coaching for Designers</p>
            <p>and Creatives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
