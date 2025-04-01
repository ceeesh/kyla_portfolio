import React from "react";
import { socials } from "../data/data";

const Header = () => {
  return (
    <header className=" bg-mainBgColor px-4 sm:px-44 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between">
        <div className="text-xl text-mainTitleColor">CAIT</div>
        <div>
          <ol className="flex gap-2">
            {socials &&
              socials.map((social, key) => (
                <a href={social.link} target="_blank" key={key}>
                  <li>
                    <img src={social.icon} alt={social.name} role="button" />
                  </li>
                </a>
              ))}
          </ol>
        </div>
      </div>
      <div className="header fixed top-0 left-0 right-0 mt-16 mx-20 sm:mx-40 md:mx-36 lg:mx-40"></div>
    </header>
  );
};

export default Header;
