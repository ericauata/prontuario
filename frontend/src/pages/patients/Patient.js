import React, { useContext, useEffect } from "react"
import { Link, useParams, Outlet } from "react-router-dom"

import { Context } from "../../Context"

import Header from "../../components/Header"
import PatientSidebar from "../../components/patients/PatientSidebar"
import PatientInfo from "../../components/patients/PatientInfo"

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