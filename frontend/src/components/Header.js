import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"

import Logo from "../components/Logo"
import SearchPatient from "./SearchPatient"

import { UilSearch } from "@iconscout/react-unicons"

export default function Header() {

   const [searchOn, setSearchOn] = useState(false)

   function searchToggle(event) {
      event.preventDefault()
      setSearchOn(prevState => !prevState)
   }

   return (
      <div className="bg-slate-900 p-3 md:flex md:justify-between">
         <div className="flex justify-between items-center">
            <Link to="/">
               <Logo
                  textClass="text-white text-2xl"
                  imageClass="mr-1 w-7 h-7"
               />
            </Link>
            <a
               href="#"
               onClick={searchToggle}
               className="md:hidden"
            >
               <UilSearch className="text-white" />
            </a>
         </div>
         <SearchPatient
            id="search-patient"
            className={`w-full mt-2 md:block md:w-1/2 md:mt-0 lg:w-1/3 ${searchOn ? "block" : "hidden"}`}
         />
      </div>
   )
}