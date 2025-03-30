import React from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen h-screen bg-mainBgColor flex justify-center align-center px-5"
    >
      <div className="flex flex-col justify-center align-center">
        <div className="max-w-xl mx-auto h-full flex flex-col items-center justify-center">
          <h2 className="text-mainTitleColor text-5xl lg:text-7xl font-bold mb-4 flex justify-center text-center">
            Get In Touch
          </h2>
          <p className="text-center text-whiteSecondary mb-12">
            Now accepting freelance projects! Let’s work together—reach out and
            let’s talk!
          </p>

          {/* <button
            className="px-20 mt-5 bg-mainBgColor border border-mainDescriptionColor hover:border-[#FFFFFF] hover:bg-mainDescriptionColor hover:text-mainDescriptionColor"
          >
            <a className="contact-btn" href="mailto:reytakyla1@gmail.com" target="_blank">
              Let's Talk
            </a>
            
          </button> */}

          <button
            onClick={() =>
              (window.location.href = "mailto:reytakyla1@gmail.com")
            }
            className="px-20 mt-5 bg-mainBgColor border border-mainDescriptionColor text-mainDescriptionColor 
             hover:bg-mainDescriptionColor hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition duration-300"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
