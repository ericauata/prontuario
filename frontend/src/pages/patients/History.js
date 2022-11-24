import React, { useContext, useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { Context } from "../../Context"

import { UilTrashAlt } from "@iconscout/react-unicons"

export default function History() {

   const { thisPatient } = useContext(Context)

   const history = thisPatient.medicalHistory ? thisPatient.medicalHistory : {}

   return (
      <div className="p-4 max-w-screen-md min-h-screen">

         <h2 className="text-2xl uppercase mb-5 font-serif">
            História médica
         </h2>

         <div className="flex items-baseline mb-5">
            <div className="mr-5">
               <div className="mr-2 text-slate-600">
                  Altura
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {history.height} cm
               </div>
            </div>
            <div className="mr-5">
               <div className="mr-2 text-slate-600">
                  Peso
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {history.weight} Kg
               </div>
            </div>
            <div className="grow">
               <div className="mr-2 text-slate-600">
                  Alergias
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {history.alergies}
               </div>
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600">
               Medicamentos em uso
            </div>
            <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
               {history.medications}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600">
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
            <div className="mr-2 text-slate-600">
               Antecedentes pessoais
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.previousDiagnosis}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600">
               História familiar
            </div>
            <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
               {history.familyHistory}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600">
               Uso de drogas recreativas
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.recreationalDrugs}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600">
               Tabagismo
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.smoking}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600">
               Etilismo
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.alcohol}
            </div>
         </div>

         <div className="mb-5">
            <div className="mr-2 text-slate-600">
               Atividade física
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.physicalActivity}
            </div>
         </div>

      </div >
   )
}