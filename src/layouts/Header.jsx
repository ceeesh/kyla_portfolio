import React from "react";
import linkedIn from "../assets/linkedin.png"
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedIn2 from "../assets/header-icon-linkedin2.png";
import facebook2 from "../assets/header-icon-fb.png";
import instagram2 from "../assets/header-icon-instagram.png";

const Header = () => {
  return (
    <header className=" bg-mainBgColor px-4 sm:px-44 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between">
        <div className="text-xl text-mainTitleColor">CAIT</div>
        {/* <div className="text-2xl">CAITLYN</div> */}
        <div>
          <ol className="flex gap-2">
            <li><img src={linkedIn2} alt="" /></li>
            <li><img src={facebook2} alt="" /></li>
            <li><img src={instagram2} alt="" /></li>
          </ol>
        </div>
      </div>
      <div className="header fixed top-0 left-0 right-0 mt-16 mx-20 sm:mx-40 md:mx-36 lg:mx-40"></div>
    </header>
  );
};

export default Header;
