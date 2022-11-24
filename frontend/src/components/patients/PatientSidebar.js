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

   const menuStyles = "py-2 px-4 flex items-center"
   const menuActiveStyles = "flex items-center bg-slate-700 text-white py-2 px-4"

   const { patient } = useContext(Context)
   const patientPath = `/patients/${patient._id}`

   return (
      <nav className="bg-slate-600 h-screen text-white pt-4">
         <ul>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/events/timeline?n=1`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}>
                  <UilListUl className="mr-1 text-xl" />
                  Eventos recentes
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/diagnosis`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}>
                  <UilFolderExclamation className="mr-1 text-xl" />
                  Diagnósticos atuais
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/categories/636ab44fbf294dd0321dee27`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}>
                  <UilStethoscope className="mr-1 text-xl" />
                  Ambulatório
               </NavLink>
            </li>
            <li className="flex flex-col mt-4">
               <NavLink
                  to={`${patientPath}/profile`}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}>
                  <UilUserSquare className="mr-1 text-xl" />
                  Dados pessoais
               </NavLink>
            </li>
         </ul>
      </nav >

   )
}