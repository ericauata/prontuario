import React, { useContext, useEffect } from "react"

import { Context } from "../../Context"

import Header from "../../components/Header"
import PatientSidebar from "../../components/patients/PatientSidebar"
import PatientInfo from "../../components/patients/PatientInfo"

export default function PatientLanding() {

   return (
      <div className="">
         <Header />
         <div className="">
            <PatientInfo />
         </div>
      </div >
   )
}