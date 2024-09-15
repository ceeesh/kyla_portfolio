import React from 'react'
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <div className="bg-mainBgColor aboutBg h-screen px-44 flex flex-col justify-center items-center">
        <div className=" text-center h-56 tracking-tight">
            <p className="pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="text-6xl">MY NAME IS KYLA I WILL BE YOUR</p>
            <p className="text-6xl"> VIRTUAL ASSISTANT AND BOOKKEEPER </p>
            <Button variant="outline" className="px-20 mt-5">CONTACT</Button>
        </div>
    </div>
  )
}

export default About