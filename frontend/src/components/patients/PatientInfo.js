import React, { useContext, useState } from "react"
import { Context } from "../../Context"

import { UilUserCircle, UilBars } from "@iconscout/react-unicons"

export default function PatientInfo(props) {

   const { thisPatient } = useContext(Context)

   function togglePatientMenu(event) {
      event.preventDefault()
      event.stopPropagation()
      props.toggleMenu(prevState => !prevState)
   }

   return (
      <div className="bg-slate-700 text-white">
         <div
            id="patient-info"
            className="px-3 py-2"
         >
            <div className="flex items-center">
               <a
                  href=""
                  onClick={togglePatientMenu}
                  className="lg:hidden"
               >
                  <UilBars className="mr-2" />
               </a>
               <UilUserCircle className="hidden lg:block mr-1 w-8 h-8" />
               <h2
                  id="patient-name"
                  className="truncate flex-1 text-2xl font-serif"
               >
                  {thisPatient.fullName}
               </h2>
            </div>
         </div>
      </div>
   )
}