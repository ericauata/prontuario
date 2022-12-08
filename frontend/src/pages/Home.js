import React from "react"

import Logo from "../components/Logo"
import SearchPatient from "../components/SearchPatient"

export default function Home() {
   return (
      <div className="overflow-auto bg-slate-800 w-full h-full flex justify-center items-center flex-col pb-20">
         <div className="container flex justify-center items-center flex-col px-5 w-screen md:w-2/3 lg:w-1/2">
            <Logo
               textClass="text-white text-3xl lg:mr-7 lg:text-4xl"
               imageClass="mr-2 w-9 h-9 lg:w-10 lg:h-10"
            />
            <SearchPatient
               className="w-full mt-7"
               section="home"
            />
         </div>
      </div>
   )
}