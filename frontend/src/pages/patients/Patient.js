import React, { useContext, useEffect } from "react"
import { useParams, Outlet } from "react-router-dom"

import { Context } from "../../Context"

import PatientSidebar from "../../components/PatientSidebar"
import PatientInfo from "../../components/PatientInfo"

export default function Patient() {

   const { setThisPatient } = useContext(Context)
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