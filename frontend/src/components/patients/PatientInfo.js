import React, { useContext } from "react"
import { Link, NavLink, useParams } from "react-router-dom"

import { Context } from "../../Context"

import { UilUserCircle } from "@iconscout/react-unicons"

export default function PatientInfo(props) {

   const { thisPatient, getAge } = useContext(Context)

   function diagnosisEl() {
      if (thisPatient.medicalHistory?.currentDiagnosis.length > 0) {
         return thisPatient.medicalHistory?.currentDiagnosis.map(item => (
            item.name
         )).join(", ")
      } else {
         return "nenhum"
      }
   }

   return (
      <div className="bg-slate-700 text-white">
         <div id="patient-info" className="pt-2 pb-3 px-4 flex items-baseline">
            <UilUserCircle className="w-8 h-8 mr-1 self-center" />
            <h2 id="patient-name" className="text-2xl mr-3 font-serif">
               {thisPatient.fullName}
            </h2>
            <div className="flex text-sm">
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
                  <span className="">{diagnosisEl()}</span>
               </div>
            </div>
         </div>
      </div>
   )
}