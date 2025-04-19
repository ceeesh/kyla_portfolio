import React from "react";

const Hero = () => {
  return (
    <div className="bgHero h-screen">
      <div className="text-mainTitleColor flex justify-center items-center h-screen">
        <div className="tracking-tight text-center">
          <p className="pb-12 text-lg">
            All in One Place. Helping businesses stay organized, efficient, and
            financially sound.
          </p>
          <div className="text-5xl md:text-8xl">
            <p>Business Runs Better</p>
            <p>with the Right Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
