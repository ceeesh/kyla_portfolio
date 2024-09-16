import React from "react";
import { Button } from "@/components/ui/button";
import kylaProfile from "../assets/kyla-profile2.jpg";

const About = () => {
  return (
    <>
      <div className="bg-mainBgColor aboutBg h-screen px-44 flex flex-col pt-56">
        <div className=" text-center h-56 tracking-tight">
          <p className="pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-6xl">MY NAME IS KYLA I WILL BE YOUR</p>
          <p className="text-6xl"> VIRTUAL ASSISTANT AND BOOKKEEPER </p>
          <Button variant="outline" className="px-20 mt-5">
            CONTACT
          </Button>
        </div>
      </div>
      <div className="bg-mainBgColor h-screen px-44 flex flex-col  items-center">
        <div className="flex gap-32 r w-10/12 justify-center ">
          <div className="w-screen">
            <img src={kylaProfile} className="relative top-[-70px] z-1" />
          </div>
          <div className="w-screen pt-20">
            <div className=" text-5xl">
              <p>I BELIEVE IN</p>
              <p>PEOPLE OVER</p>
              <p>PROFIT, TRUST</p>
              <p>OVER DECEIT,</p>
              <p>HARD-WORK OVER</p>
              <p>DAY-DREAM.</p>
            </div>
            <div className="pt-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem pariatur reiciendis sapiente commodi deserunt quas delectus soluta, nihil nesciunt porro ex fuga facere nobis adipisci cupiditate eius ipsa reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ab vitae itaque placeat nesciunt quis veritatis exercitationem temporibus fuga aliquam nobis, expedita debitis quaerat non ducimus magnam quod. Aliquam, deleniti!</div>

            <div className="pt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur consequuntur error quod eos voluptatibus ex eius doloribus reiciendis placeat! Provident modi consequatur ipsam. Architecto itaque dignissimos harum corporis eos?</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
