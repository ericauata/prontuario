import React, { useContext } from "react"
import { NavLink, useParams } from "react-router-dom"

import { Context } from "../Context"

import { MdOutlineCreateNewFolder } from "react-icons/md";
import { MdOutlineFolderShared } from "react-icons/md"
import { MdOutlineFormatListBulleted } from "react-icons/md"
import { MdOutlineChair } from "react-icons/md"

export default function PatientSidebar(props) {

   const { thisPatient } = useContext(Context)
   const patientPath = `/patients/${thisPatient._id}`

   return (
      <nav className="bg-slate-600 h-screen text-white pt-4">
         <ul>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/events/timeline?n=1`}
                  className={
                     ({ isActive }) => isActive ? "flex items-center bg-slate-100 text-rose-600 font-bold py-2 px-2 border-l-8 border-rose-600" : "py-2 px-4 flex items-center"
                  }>
                  <MdOutlineFormatListBulleted className="mr-1 text-xl" />
                  Eventos recentes
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/diagnosis`}
                  className={
                     ({ isActive }) => isActive ? "flex items-center bg-slate-100 text-rose-600 font-bold py-2 px-2 border-l-8 border-rose-600" : "py-2 px-4 flex items-center"
                  }>
                  <MdOutlineCreateNewFolder className="mr-1 text-xl" />
                  Diagnósticos atuais
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/categories/636ab44fbf294dd0321dee27`}
                  className={
                     ({ isActive }) => isActive ? "flex items-center bg-slate-100 text-rose-600 font-bold py-2 px-2 border-l-8 border-rose-600" : "py-2 px-4 flex items-center"
                  }>
                  <MdOutlineChair className="mr-1 text-xl" />
                  Ambulatório
               </NavLink>
            </li>
            <li className="flex flex-col mt-4">
               <NavLink
                  to={`${patientPath}/profile`}
                  className={
                     ({ isActive }) => isActive ? "flex items-center bg-slate-100 text-rose-600 font-bold py-2 px-2 border-l-8 border-rose-600" : "py-2 px-4 flex items-center"
                  }>
                  <MdOutlineFolderShared className="mr-1 text-xl" />
                  Dados pessoais
               </NavLink>
            </li>
         </ul>
      </nav >

   )
}