import React, { useContext, useEffect } from "react"
import { Link, useParams, Outlet } from "react-router-dom"

import { Context } from "../../Context"

import PatientSidebar from "../../components/PatientSidebar"
import PatientInfo from "../../components/PatientInfo"
import SearchPatient from "../../components/SearchPatient"

export default function Patient() {

   const { thisPatient, setThisPatient } = useContext(Context)
   const { patientId } = useParams()

   useEffect(() => {
      fetch(`/api/patients/${patientId}`)
         .then(res => res.json())
         .then(data => {
            setThisPatient(data)
         })
   }, [patientId])

   return (
      <div className="">
         <div className="bg-slate-700 text-white p-2 pb-1">
            <SearchPatient />
         </div>
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