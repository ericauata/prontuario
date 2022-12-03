import React, { useContext, useState } from "react"
import { Link, NavLink, useParams } from "react-router-dom"

import { Context } from "../../Context"

import { UilUserCircle, UilAngleDoubleDown, UilAngleDoubleUp, UilBars } from "@iconscout/react-unicons"

export default function PatientInfo(props) {

   const [patientInfoOn, setPatientInfoOn] = useState(false);
   const { thisPatient, getAge } = useContext(Context)
   const currDiag = thisPatient.medicalHistory?.currentDiagnosis

   function togglePatientInfo(event) {
      event.preventDefault()
      setPatientInfoOn(prevState => !prevState)
   }

   function togglePatientMenu(event) {
      event.preventDefault()
      props.toggleMenu(prevState => !prevState)
   }

   return (
      <div className="bg-slate-700 text-white">
         <div id="patient-info" className="p-3">
            <div className="flex items-center">
               <a href="" onClick={togglePatientMenu}><UilBars className="md:hidden mr-2" /></a>
               <UilUserCircle className="hidden md:visible" />
               <h2 id="patient-name" className="truncate flex-1 text-2xl font-serif">
                  {thisPatient.fullName}
               </h2>
               <a href="" onClick={togglePatientInfo} className="justify-self-end">
                  {patientInfoOn ?
                     <UilAngleDoubleUp className="text-white" /> :
                     <UilAngleDoubleDown className="text-white" />
                  }
               </a>
            </div>
            {patientInfoOn &&
               <div className="flex flex-col text-sm mt-2">
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
            }
         </div>
      </div>
   )
}