import React from "react";
import linkedIn from "../assets/linkedin.png"
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const Header = () => {
  return (
    <header className=" bg-mainBgColor px-4 sm:px-44 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between">
        <div>LOGO</div>
        <div className="text-2xl">CAITLYN</div>
        <div>
          <ol className="flex gap-2">
            <li><img src={linkedIn} alt="" /></li>
            <li><img src={facebook} alt="" /></li>
            <li><img src={instagram} alt="" /></li>
          </ol>
        </div>
      </div>
      <div className="header fixed top-0 left-0 right-0 mt-16 mx-20 sm:mx-40 md:mx-36 lg:mx-40"></div>
    </header>
  );
};

export default Header;
