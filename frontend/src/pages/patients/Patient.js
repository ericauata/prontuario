import React, { useContext, useEffect } from "react"
import { Link, useParams, Outlet } from "react-router-dom"

import { Context } from "../../Context"

import PatientSearch from "../../components/PatientSearch"
import PatientSidebar from "../../components/PatientSidebar"
import PatientInfo from "../../components/PatientInfo"

export default function Patient() {

   const { thisPatient, setThisPatient } = useContext(Context)
   const { patientId } = useParams()

   console.log(patientId)

   useEffect(() => {
      fetch(`/api/patients/${patientId}`)
         .then(res => res.json())
         .then(data => {
            setThisPatient(data)
         })
   }, [patientId])

   return (
      <div className="">
         {/* <div className="bg-slate-700 text-white p-2 pb-0">
            <PatientSearch />
         </div> */}
         <div className="">
            <PatientInfo />
         </div>
         <div className="flex">
            <div className="w-1/6">
               <PatientSidebar />
            </div>
            <div className="w-full">
               <Outlet />
            </div>
         </div>
      </div >
   )
}