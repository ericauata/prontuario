import React, { useContext } from "react"
import { NavLink, useParams } from "react-router-dom"

import { Context } from "../Context"

import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined"
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined"
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined"
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined"


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
                     ({ isActive }) => isActive ? "flex items-center bg-slate-100 text-sky-600 font-bold py-2 px-2 border-l-8 border-sky-600" : "py-2 px-4 flex items-center"
                  }>
                  <FormatListBulletedOutlinedIcon className="mr-1 text-xl" />
                  Eventos recentes
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/diagnosis`}
                  className={
                     ({ isActive }) => isActive ? "flex items-center bg-slate-100 text-sky-600 font-bold py-2 px-2 border-l-8 border-sky-600" : "py-2 px-4 flex items-center"
                  }>
                  <CreateNewFolderOutlinedIcon className="mr-1 text-xl" />
                  Diagnósticos atuais
               </NavLink>
            </li>
            <li className="flex flex-col">
               <NavLink
                  to={`${patientPath}/categories/636ab44fbf294dd0321dee27`}
                  className={
                     ({ isActive }) => isActive ? "flex items-center bg-slate-100 text-sky-600 font-bold py-2 px-2 border-l-8 border-sky-600" : "py-2 px-4 flex items-center"
                  }>
                  <ChairOutlinedIcon className="mr-1 text-xl" />
                  Ambulatório
               </NavLink>
            </li>
            <li className="flex flex-col mt-4">
               <NavLink
                  to={`${patientPath}/profile`}
                  className={
                     ({ isActive }) => isActive ? "flex items-center bg-slate-100 text-sky-600 font-bold py-2 px-2 border-l-8 border-sky-600" : "py-2 px-4 flex items-center"
                  }>
                  <FolderSharedOutlinedIcon className="mr-1 text-xl" />
                  Dados pessoais
               </NavLink>
            </li>
         </ul>
      </nav >

   )
}