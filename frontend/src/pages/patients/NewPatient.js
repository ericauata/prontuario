import React, { useContext, useEffect, useState } from "react"

import { Context } from "../../Context"

import Header from "../../components/Header"

export default function NewPatient() {

   const [patientName, setPatientName] = useState("")
   const [dateOfBirth, setDateOfBirth] = useState("")

   async function addNewPatient(event) {
      event.preventDefault()
      await fetch("/api/patients", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            fullName: patientName,
            dateOfBirth: dateOfBirth,
         })
      })
      setPatientName("")
      setDateOfBirth("")
   }

   return (
      <div className="">
         <Header />
         <div className="p-4">
            <h2 className="font-serif uppercase text-xl">Novo paciente</h2>
            <form
               className="w-2/4 flex flex-col"
               onSubmit={addNewPatient}
            >
               <label htmlFor="fullName">Nome completo</label>
               <input
                  className="rounded border-slate-400 w-full mb-2"
                  type="text"
                  value={patientName}
                  onChange={(event) => setPatientName(event.target.value)}
                  id="fullName"
               />
               <label htmlFor="dateOfBirth">Data de nascimento</label>
               <input
                  className="rounded border-slate-400 mb-2"
                  type="date"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(event) => setDateOfBirth(event.target.value)}
               />
               <button
                  className="bg-green-600 text-white py-2 px-4 rounded mt-2"
               >Criar novo paciente</button>
            </form>
         </div>
      </div >
   )
}