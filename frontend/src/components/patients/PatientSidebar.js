import React, { useContext } from "react"
import { NavLink, useParams } from "react-router-dom"

import { Context } from "../../Context"

import { UilListUl } from "@iconscout/react-unicons"
import { UilFolderExclamation } from "@iconscout/react-unicons"
import { UilUserSquare } from "@iconscout/react-unicons"
import { UilHeartRate } from "@iconscout/react-unicons"
import { UilBed } from "@iconscout/react-unicons"
import { UilStethoscope } from "@iconscout/react-unicons"
import { UilFilePlusAlt } from "@iconscout/react-unicons"

export default function PatientSidebar(props) {

   const menuStyles = "py-2 px-3 pr-4 flex items-center"
   const menuActiveStyles = "flex items-center bg-slate-700 text-white py-2 px-3 pr-4"

   const { thisPatient } = useContext(Context)
   const patientPath = `/patients/${thisPatient._id}`

   return (
      <nav className="fixed bg-slate-600 min-h-screen h-full text-white pt-3 shadow-lg">
         <ul>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/events/timeline?n=10`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}
                  onClick={() => props.toggleMenu(false)}
               >
                  <UilListUl className="mr-1 text-xl" />
                  Eventos recentes
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/diagnosis`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}
                  onClick={() => props.toggleMenu(false)}
               >
                  <UilFolderExclamation className="mr-1 text-xl" />
                  História médica
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/categories/636ab44fbf294dd0321dee27`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}
                  onClick={() => props.toggleMenu(false)}
               >
                  <UilStethoscope className="mr-1 text-xl" />
                  Ambulatório
               </NavLink>
            </li>
         </ul>
      </nav >

   )
}