import React, { useContext } from "react"
import { Link, NavLink, useParams } from "react-router-dom"

import { Context } from "../Context"

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"

export default function PatientInfo(props) {

   const { thisPatient, getAge } = useContext(Context)
   // const { patientId } = useParams()

   // const patientPath = `/patients/${patientId}`

   const diagnosisEl = thisPatient.currentDiagnosis?.map(item => (
      <Link to="" key={item._id} className="underline">{item.name}</Link>
   )).reduce((prev, curr) => [prev, ', ', curr])

   return (
      <div className="bg-slate-700 text-white">
         <div id="patient-info" className="pt-2 pb-3 px-4 flex items-baseline">
            <h2 id="patient-name" className="text-2xl mr-3 font-serif">
               <MenuOutlinedIcon className="mb-1 mr-2" />
               {thisPatient.fullName}
            </h2>
            <div className="flex text-sm">
               <div className="mr-3">
                  <span className="text-gray-300 font-serif">Registro: </span>
                  <span className="">{thisPatient._id}</span>
               </div>
               <div className="mr-3">
                  <span className="text-gray-300 font-serif">Idade: </span>
                  <span className="">{getAge(thisPatient.dateOfBirth)}</span>
               </div>
               <div className="">
                  <span className="text-gray-300 font-serif">Diagnósticos: </span>
                  <span className="">{diagnosisEl}</span>
               </div>
            </div>
         </div>
      </div>
   )
}