import React, { useContext } from "react"
import { useOutletContext } from "react-router-dom"
import { Context } from "../../Context"

export default function CurrentDiagnosis() {

   const { thisPatient } = useContext(Context)

   const diagnosisEl = thisPatient.currentDiagnosis?.map(item => (
      <div className="mb-4" key={item._id}>
         <h3 className="text-md font-bold text-rose-600 uppercase">{item.name}</h3>
         <p>{item.body}</p>
      </div>
   ))

   return (
      <div className="p-4">
         <h2 className="text-xl uppercase mb-4 font-serif">Diagnósticos atuais</h2>
         {diagnosisEl}
      </div>
   )
}