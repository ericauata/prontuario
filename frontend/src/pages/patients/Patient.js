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
         <div className="sticky top-0">
            <Header />
            <PatientInfo toggleMenu={setPatientMenuOn} />
         </div>
         <PatientSidebar toggleMenu={setPatientMenuOn} statusMenu={patientMenuOn} />
         <div className="w-full">
            <Outlet />
         </div>
      </div>
   )
}