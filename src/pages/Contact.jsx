import React from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="w-screen h-screen bg-mainBgColor flex  justify-center align-center px-5">
      <div className=" flex flex-col justify-center align-center">
        <div className="max-w-xl mx-auto h-full flex flex-col items-center justify-center ">
          <h2 className="text-mainTitleColor text-5xl lg:text-7xl font-bold mb-4 flex justify-center text-center">
            Get In Touch
          </h2>
          <p className="text-center text-whiteSecondary mb-12 ">
          Now accepting freelance projects! Let’s work together—reach out and let’s talk!
          </p>
          {/* <Button variant="outline" className="px-20 mt-5" href="mailto:reytakyla1@gmail.com">
          <a className="text-mainTitleColor" href="mailto:ceejaymalacas17@gmail.com" target="_blank"> Let's Talk</a>
          </Button> */}
           <button className="px-20 mt-5 bg-mainBgColor border border-mainDescriptionColor hover:border-[#FFFFFF] hover:bg-mainDescriptionColor hover:text-mainDescriptionColor" href="mailto:reytakyla1@gmail.com">
          <a className="contact-btn" href="mailto:reytakyla1@gmail.com" target="_blank"> Let's Talk</a>
          </button>
          {/* <Button
            href="mailto:ceejaymalacas17@gmail.com"
            target="_blank"
            className="${theme === 'dark' ? 'bg-btnbg border-mainTxt text-mainTxt hover:bg-btnHvr' : 'text-black border-black hover:bg-black hover:text-mainTxt'}
                cursor-pointer px-12 py-2.5 text-lg rounded-md 
                border-[0.1rem] hover:-translate-y-1 transition-all duration-300 delay-75"
          >
            Let's Talk!
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
