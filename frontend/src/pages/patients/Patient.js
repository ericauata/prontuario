import React, { useContext, useEffect, useState } from "react"
import { Link, useParams, Outlet } from "react-router-dom"

import { Context } from "../../Context"

import Header from "../../components/Header"
import PatientSidebar from "../../components/patients/PatientSidebar"
import PatientInfo from "../../components/patients/PatientInfo"

export default function Patient() {

   const { thisPatient, setThisPatient, isPatientUpdated } = useContext(Context)
   const { patientId } = useParams()
   const [patientMenuOn, setPatientMenuOn] = useState(false);

   useEffect(() => {
      fetch(`/api/patients/${patientId}`)
         .then(res => res.json())
         .then(data => {
            setThisPatient(data)
         })
   }, [patientId, isPatientUpdated])

   return (
      <div>
         <div className="sticky lg:static top-0 z-30">
            <Header />
            <PatientInfo toggleMenu={setPatientMenuOn} />
         </div>
         <div className="lg:flex lg:items-stretch">
            <div className={`${patientMenuOn ? "block" : "hidden"} fixed w-screen h-screen opacity-80 bg-black z-10`}></div>
            <PatientSidebar toggleMenu={setPatientMenuOn} statusMenu={patientMenuOn} />
            <Outlet />
         </div>
      </div>
   )
}