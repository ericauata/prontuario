import React, { useContext, useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { Context } from "../../Context"

export default function History() {

   const { thisPatient } = useContext(Context)
   const history = thisPatient.medicalHistory ? thisPatient.medicalHistory : {}

   return (
      <div className="p-4 max-w-screen-lg">
         <h2 className="uppercase font-serif text-lg mb-1">
            História médica
         </h2>
         <div className="flex items-baseline mb-5">
            <div className="mr-5">
               <div className="mr-2 text-slate-600 font-bold">
                  Altura
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {history.height} cm
               </div>
            </div>
            <div className="mr-5">
               <div className="mr-2 text-slate-600 font-bold">
                  Peso
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {history.weight} Kg
               </div>
            </div>
            <div className="grow">
               <div className="mr-2 text-slate-600 font-bold">
                  Alergias
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {history.alergies}
               </div>
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Medicamentos em uso
            </div>
            <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
               {history.medications}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Diagnósticos atuais
            </div>

            {history.currentDiagnosis?.map(item => (
               <div key={item._id}>
                  <div className="border-b py-2 px-3 mb-2 bg-slate-100">
                     {item.name}
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100">
                     {item.body}
                  </div>
               </div>
            ))}
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Antecedentes pessoais
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.previousDiagnosis}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               História familiar
            </div>
            <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
               {history.familyHistory}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Uso de drogas recreativas
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.recreationalDrugs}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Tabagismo
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.smoking}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Etilismo
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.alcohol}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Atividade física
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.physicalActivity}
            </div>
         </div>

      </div >
   )
}