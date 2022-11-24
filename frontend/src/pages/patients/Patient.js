import React, { useContext, useEffect } from "react"
import { useParams, Outlet } from "react-router-dom"

import { Context } from "../../Context"

import Header from "../../components/Header"
import PatientSidebar from "../../components/patients/PatientSidebar"
import PatientInfo from "../../components/patients/PatientInfo"

export default function Patient() {

   const { patientId } = useParams()
   const { setPatient, setDiagnosis } = useContext(Context)

   useEffect(() => {
      fetch(`/api/patients/${patientId}`)
         .then(res => res.json())
         .then(data => {
            setPatient(data)
            setDiagnosis(data.currentDiagnosis)
         })
   }, [patientId])

   return (
      <div className="">
         <Header />
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