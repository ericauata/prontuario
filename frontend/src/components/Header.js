import React, { useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"

import Logo from "../components/Logo"
import SearchPatient from "./SearchPatient"
import { Context } from "../Context"

import { UilSearch } from "@iconscout/react-unicons"

export default function Header() {

   const { thisPatient, setThisPatient } = useContext(Context)
   const [searchOn, setSearchOn] = useState(false)

   const tabStyles = "uppercase font-bold text-sm rounded-t mt-2 mr-1 text-white px-5 flex items-center"
   const tabActiveStyles = "uppercase font-bold text-sm bg-slate-700 rounded-t mt-2 mr-1 text-white px-5 flex items-center"

   function searchToggle(event) {
      event.preventDefault()
      setSearchOn(prevState => !prevState)
   }

   return (
      <div className="bg-slate-900 p-3">
         <div className="flex justify-between items-center">
            <Link to="/">
               <Logo textClass="text-white text-2xl" imageClass="mr-1 w-7 h-7" />
            </Link>
            <a href="" onClick={searchToggle}>
               <UilSearch className="text-white" />
            </a>
         </div>
         {searchOn && <SearchPatient id="search-patient" className="w-full mt-2" />}
      </div>
   )
}