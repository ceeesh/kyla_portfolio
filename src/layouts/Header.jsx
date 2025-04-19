import React, { useState } from "react";
import { socials } from "../data/data";
import burgerMenu from "../assets/burger-menu.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollToContact = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className=" bg-mainBgColor px-4 sm:px-44 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between">
        <div
          className="text-xl text-mainTitleColor cursor-pointer"
          onClick={handleScrollToContact}
        >
          CAIT
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block">
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

        {/* Mobile Burger Menu */}
        <div className="sm:hidden relative">

          <div className="sm:hidden relative">
            <div onClick={toggleMenu}>
              <img src={burgerMenu} className="w-6"/>
            </div>

            <div
              className={`absolute right-[-16px] mt-4 bg-white shadow-lg rounded p-2 z-50 w-44 transition-all duration-300 ease-in-out transform ${
                isOpen
                  ? "opacity-100 translate-x-0 visible"
                  : "opacity-0 translate-x-10 invisible pointer-events-none"
              }`}
            >
              <ol className="flex gap-2">
                {socials &&
                  socials.map((social, key) => (
                    <a href={social.link} target="_blank" key={key}>
                      <li>
                        <img
                          src={social.icon}
                          alt={social.name}
                          role="button"
                          className=""
                        />
                      </li>
                    </a>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="header fixed top-0 left-0 right-0 mt-16 mx-20 sm:mx-40 md:mx-36 lg:mx-40"></div>
    </header>
  );
};

export default Header;
