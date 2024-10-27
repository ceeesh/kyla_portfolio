import React from "react";
import { Button } from "@/components/ui/button";
import kylaProfile from "../assets/kyla-profile2.jpg";
import { useSmallScreen } from "@/helpers/utils";

const Skills = () => {
  const isSmallScreen = useSmallScreen(640);

  return (
    <>
      <div className={`bg-mainBgColor ${isSmallScreen ? "" : "skillsBG"} h-3/5 sm:h-4/5 lg:h-screen px-8 sm:px-32 lg:px-44 pt-20 lg:pt-36 flex flex-col`}>
      {/* text-center h-fit sm:h-56 tracking-tight bg-white sm:bg-transparent p-8 */}
        <div className="text-center h-fit sm:h-56 tracking-tight bg-white sm:bg-transparent p-8">
          <p className="pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text3-xl sm:text-4xl lg:text-6xl">
          Hey there! I’m Kyla, your friendly
          </p>
          <p className="text3-xl sm:text-4xl lg:text-6xl">
            {" "}
            Virtual Assistant and Bookkeeper
            {" "}
          </p>
          {/* px-20 mt-5 */}
          <Button variant="outline" className="w-full sm:w-fit mt-5">
            CONTACT
          </Button>
        </div>
      </div>
      <div className="bg-mainBgColor h-fit sm:h-screen  flex flex-col  items-center">
      
        <div className="hidden sm:flex gap-10 lg:gap-32 r w-10/12 justify-center ">
          <div className="w-screen h-fit flex flex-col">
            <img
              src={kylaProfile}
              className="relative top-[-10px] sm:top-[-30px] md:top-[-37px] lg:top-[-50px] z-1   md:w-[400px] lg:w-[600px]"
            />
          </div>
          <div className="w-screen pt-4 sm:pt-10 md:pt-18">
            <div className=" text-md sm:text-3xl md:text-4xl lg:text-5xl ">
              <p>I BELIEVE IN</p>
              <p>PEOPLE OVER</p>
              <p>PROFIT, TRUST</p>
              <p>OVER DECEIT,</p>
              <p>HARD-WORK OVER</p>
              <p>DAY-DREAM.</p>
            </div>
            <div className="hidden xl:block">
              <div className="pt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus exercitationem pariatur reiciendis sapiente commodi
                deserunt quas delectus soluta, nihil nesciunt porro ex fuga
                facere nobis adipisci cupiditate eius ipsa reprehenderit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Sed ab vitae
                itaque placeat nesciunt quis veritatis exercitationem temporibus
                fuga aliquam nobis, expedita debitis quaerat non ducimus magnam
                quod. Aliquam, deleniti!
              </div>

              <div className="pt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas consectetur consequuntur error quod eos voluptatibus ex
                eius doloribus reiciendis placeat! Provident modi consequatur
                ipsam. Architecto itaque dignissimos harum corporis eos?
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-2 lg:gap-32 justify-center ">
          <div className="h-fit flex flex-col">
            <img
              src={kylaProfile}
              // relative w-[170px] top-[-10px] sm:top-[-30px] md:top-[-37px] lg:top-[-50px] z-1 justify-items-center
              className=""
            />
          </div>
          <div className="pt-4 sm:pt-10 md:pt-18">
            <div className="text-center text-md sm:text-3xl md:text-4xl lg:text-5xl ">
              <p>
                I BELIEVE IN PEOPLE OVER PROFIT, TRUST OVER DECEIT, HARD-WORK
                OVER DAY-DREAM.
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 sm:px-24 block xl:hidden text-center">
          <div className="pt-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            exercitationem pariatur reiciendis sapiente commodi deserunt quas
            delectus soluta, nihil nesciunt porro ex fuga facere nobis adipisci
            cupiditate eius ipsa reprehenderit. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Sed ab vitae itaque placeat nesciunt
            quis veritatis exercitationem temporibus fuga aliquam nobis,
            expedita debitis quaerat non ducimus magnam quod. Aliquam, deleniti!
          </div>

          <div className="pt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            consectetur consequuntur error quod eos voluptatibus ex eius
            doloribus reiciendis placeat! Provident modi consequatur ipsam.
            Architecto itaque dignissimos harum corporis eos?
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills