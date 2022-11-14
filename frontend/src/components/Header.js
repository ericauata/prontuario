import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"

import SearchPatient from "./SearchPatient"
import { Context } from "../Context"

import { UilCell } from "@iconscout/react-unicons"

export default function Header() {

   const { thisPatient } = useContext(Context)

   const tabStyles = "uppercase font-bold text-sm rounded-t mt-2 mr-1 text-white px-5 flex items-center"
   const tabActiveStyles = "uppercase font-bold text-sm bg-slate-700 rounded-t mt-2 mr-1 text-white px-5 flex items-center"

   return (
      <header className="">
         <div className="bg-slate-900 flex justify-between items-center">
            <nav className="flex self-stretch items-stretch ml-2">
               <NavLink to="/patients" className={({ isActive }) => isActive ? tabActiveStyles : tabStyles}>Paciente</NavLink>
               <NavLink to="/emergency" className={({ isActive }) => isActive ? tabActiveStyles : tabStyles}>Emergência</NavLink>
               <NavLink to="/outpatient" className={({ isActive }) => isActive ? tabActiveStyles : tabStyles}>Ambulatório</NavLink>
            </nav>
            <div id="logo" className="text-2xl font-serif my-1">
               <Link to="/" className="text-white flex items-center">
                  <UilCell className="mr-1 w-7 h-7" />
                  <div className="pt-1">PRONTUÁRIO EW</div>
               </Link>
            </div>
            <div className="mr-1 w-1/4">
               <SearchPatient />
            </div>
         </div>
      </header>
   )
}