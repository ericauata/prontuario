import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Context } from "../../Context"

import { UilListUl, UilFolderExclamation, UilStethoscope, UilHeartbeat, UilFileSearchAlt } from "@iconscout/react-unicons"

export default function PatientSidebar(props) {

   const menuStyles = "py-2 px-3 pr-4 flex items-center"
   const menuActiveStyles = `${menuStyles} bg-slate-700 text-white`

   const { thisPatient, getAge } = useContext(Context)
   const patientPath = `/patients/${thisPatient._id}`
   const currDiag = thisPatient.medicalHistory?.currentDiagnosis

   return (
      <nav
         className={`fixed z-50 bg-slate-600 min-h-screen text-white shadow-lg max-w-1/2  ease-in-out duration-300 lg:block lg:static lg:w-64 lg:translate-x-0 pt-2 ${props.statusMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
         <div className="md:flex-row text-sm m-2 mt-0 p-3 rounded bg-slate-700 shadow-inner">
            <div className="mr-3">
               <span className="text-slate-300 font-serif">ID: </span>
               <span className="">{thisPatient._id}</span>
            </div>
            <div className="mr-3">
               <span className="text-slate-300 font-serif">Age: </span>
               <span className="">{getAge(thisPatient.dateOfBirth)}</span>
            </div>
            <div className="">
               <span className="text-slate-300 font-serif">Diagnostics: </span>
               <span className="">
                  {currDiag?.length > 0 ?
                     currDiag?.map(item => (
                        item.name
                     )).join(", ") :
                     "none"
                  }
               </span>
            </div>
         </div>
         <ul>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}`}
                  end
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}
                  onClick={() => props.toggleMenu(false)}
               >
                  <UilListUl className="mr-1 text-xl" />
                  Recent events
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/diagnosis`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}
                  onClick={() => props.toggleMenu(false)}
               >
                  <UilFolderExclamation className="mr-1 text-xl" />
                  Medical history
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/categories/636ab44fbf294dd0321dee27`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}
                  onClick={() => props.toggleMenu(false)}
               >
                  <UilStethoscope className="mr-1 text-xl" />
                  Outpatient
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/categories/636ab45f2a4ea7e31aaeb9c9`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}
                  onClick={() => props.toggleMenu(false)}
               >
                  <UilHeartbeat className="mr-1 text-xl" />
                  Emergency
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/categories/636ab468dfa84746b0c4c2cf`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}
                  onClick={() => props.toggleMenu(false)}
               >
                  <UilFileSearchAlt className="mr-1 text-xl" />
                  Tests
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}