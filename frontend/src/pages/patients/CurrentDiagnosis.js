import React, { useContext, useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { Context } from "../../Context"

import { UilTrashAlt } from "@iconscout/react-unicons"

export default function CurrentDiagnosis() {

   const { thisPatient, setIsPatientUpdated } = useContext(Context)

   const [diagnosisName, setDiagnosisName] = useState("")
   const [diagnosisBody, setDiagnosisBody] = useState("")

   function addNewDiagnosis(event) {
      event.preventDefault()
      fetch(`/api/patients/${thisPatient._id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            name: diagnosisName,
            body: diagnosisBody
         })
      })
         .then(setIsPatientUpdated(prevState => !prevState))
         .then(setDiagnosisName(""))
         .then(setDiagnosisBody(""))
   }

   function deleteDiagnosis(event, diagnosisId) {
      event.preventDefault()
      fetch(`/api/patients/${thisPatient._id}/diagnosis/${diagnosisId}`, {
         method: "PUT"
      })
         .then(setIsPatientUpdated(prevState => !prevState))
   }

   const diagnosisEl = thisPatient.currentDiagnosis?.map(item => (
      <div className="mb-6" key={item._id}>
         <input
            type="text"
            className="text-md font-bold rounded border-none w-full bg-slate-100 mb-2"
            value={item.name}
            disabled
         />
         <textarea
            rows="7"
            className="rounded border-none w-full bg-slate-100"
            disabled
            value={item.body}
         />
         <div className="flex justify-between">
            <button className="rounded bg-slate-200 hover:bg-green-700 hover:text-white px-3 py-1 text-sm mr-1">Editar</button>
            <a
               className="text-sm text-slate-400 hover:text-red-700 flex items-center"
               onClick={(event) => deleteDiagnosis(event, item._id)}
            >
               Excluir
               <UilTrashAlt className="" />
            </a>
         </div>
      </div>
   ))

   return (
      <div className="p-4 max-w-screen-md">
         <h2 className="text-2xl uppercase mb-5 font-serif">Diagnósticos atuais</h2>

         <form
            onSubmit={addNewDiagnosis}
            className="flex flex-col mb-4"
         >
            <label>Nome:</label>
            <input
               className="mb-2 rounded border-slate-400"
               type="text"
               value={diagnosisName}
               onChange={(event) => setDiagnosisName(event.target.value)}
            />
            <label>História:</label>
            <textarea
               className="mb-2 rounded border-slate-400"
               rows="3"
               value={diagnosisBody}
               onChange={(event) => setDiagnosisBody(event.target.value)}
            />
            <button className="rounded bg-sky-600 text-white px-3 py-1">Adicionar novo</button>
         </form>
         {diagnosisEl}
      </div>
   )
}