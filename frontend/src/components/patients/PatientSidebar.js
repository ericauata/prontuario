import React, { useState, useContext } from "react"
import { NavLink, useParams } from "react-router-dom"

import { Context } from "../../Context"

import { UilListUl } from "@iconscout/react-unicons"
import { UilFolderExclamation } from "@iconscout/react-unicons"
import { UilStethoscope } from "@iconscout/react-unicons"

export default function PatientSidebar(props) {

   const menuStyles = "py-2 px-3 pr-4 flex items-center"
   const menuActiveStyles = "flex items-center bg-slate-700 text-white py-2 px-3 pr-4"

   const { thisPatient, getAge } = useContext(Context)
   const patientPath = `/patients/${thisPatient._id}`
   const currDiag = thisPatient.medicalHistory?.currentDiagnosis

   return (
      <nav className={`fixed bg-slate-600 min-h-screen h-full text-white shadow-lg max-w-1/2 ${props.statusMenu ? "block" : "hidden"} lg:block lg:static lg:w-64 pt-2`}>

         <div className="md:flex-row text-sm m-2 mt-0 p-3 rounded bg-slate-700 shadow-inner">
            <div className="mr-3">
               <span className="text-slate-300 font-serif">Registro: </span>
               <span className="">{thisPatient._id}</span>
            </div>
            <div className="mr-3">
               <span className="text-slate-300 font-serif">Idade: </span>
               <span className="">{getAge(thisPatient.dateOfBirth)}</span>
            </div>
            <div className="">
               <span className="text-slate-300 font-serif">Diagnósticos: </span>
               <span className="">
                  {currDiag?.length > 0 ?
                     currDiag?.map(item => (
                        item.name
                     )).join(", ") :
                     "nenhum"
                  }
               </span>
            </div>
         </div>

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