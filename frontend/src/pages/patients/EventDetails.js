import React, { useState, useEffect, useContext } from "react"
import { useParams, useOutletContext } from "react-router-dom"
import { Context } from "../../Context"

import { UilCalender } from "@iconscout/react-unicons"
import { UilUser } from "@iconscout/react-unicons"

export default function EventDetails() {

   const { thisPatient, formatDate, events, setEvents } = useContext(Context)
   console.log(thisPatient)

   // const [events] = useOutletContext()
   const { eventId } = useParams()
   // const [thisEvent, setThisEvent] = useState({})

   // useEffect(() => {
   //    const event = events.find(item => item._id === eventId)
   //    setThisEvent(event)
   // }, [events])

   const thisEvent = events.find(item => item._id === eventId)

   return (
      <div className="p-4">
         <h2 className="text-2xl font-serif mb-1">
            {thisEvent && thisEvent.category.name} de {thisEvent && thisEvent.specialty}
         </h2>
         <div className="flex mb-5">
            <div className="flex text-sm items-center mr-4">
               <UilCalender className="text-slate-400 w-4 h-4 mr-1" />
               <span>{formatDate(thisEvent && thisEvent.updatedAt, "short")}</span>
            </div>
            <div className="flex text-sm items-center">
               <UilUser className="text-slate-400 w-4 h-4 mr-1" />
               <span>{thisEvent && thisEvent.doctor}</span>
            </div>
         </div>

         <div className="mb-6">
            <div className="inline-block bg-slate-600 rounded-r-full text-white py-1 pl-3 pr-5 mb-2 uppercase text-sm">
               Consulta
            </div>
            <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
               {thisEvent && thisEvent.body}
            </div>
         </div>

         <div className="">
            <div className="inline-block bg-slate-600 rounded-r-full text-white py-1 pl-3 pr-5 mb-2 uppercase text-sm">
               História médica
            </div>
            <div className="flex items-baseline mb-5">
               <div className="mr-5">
                  <div className="mr-2 text-slate-600">
                     Altura
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100">
                     {thisEvent && thisEvent.medicalHistory.height} cm
                  </div>
               </div>
               <div className="mr-5">
                  <div className="mr-2 text-slate-600">
                     Peso
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100">
                     {thisEvent && thisEvent.medicalHistory.weight} Kg
                  </div>
               </div>
               <div className="grow">
                  <div className="mr-2 text-slate-600">
                     Alergias
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100">
                     {thisEvent && thisEvent.medicalHistory.alergies}
                  </div>
               </div>
            </div>

            <div className="mb-5">
               <div className="mr-2 text-slate-600">
                  Medicamentos em uso
               </div>
               <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
                  {thisEvent && thisEvent.medicalHistory.medications}
               </div>
            </div>

            <div className="mb-5">
               <div className="mr-2 text-slate-600">
                  Diagnósticos atuais
               </div>

               {thisEvent && thisEvent.medicalHistory.currentDiagnosis?.map(item => (
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
                  {thisEvent && thisEvent.medicalHistory.previousDiagnosis}
               </div>
            </div>

            <div className="mb-5">
               <div className="mr-2 text-slate-600">
                  História familiar
               </div>
               <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
                  {thisEvent && thisEvent.medicalHistory.familyHistory}
               </div>
            </div>

            <div className="mb-5">
               <div className="mr-2 text-slate-600">
                  Uso de drogas recreativas
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {thisEvent && thisEvent.medicalHistory.recreationalDrugs}
               </div>
            </div>

            <div className="mb-5">
               <div className="mr-2 text-slate-600">
                  Tabagismo
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {thisEvent && thisEvent.medicalHistory.smoking}
               </div>
            </div>

            <div className="mb-5">
               <div className="mr-2 text-slate-600">
                  Etilismo
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {thisEvent && thisEvent.medicalHistory.alcohol}
               </div>
            </div>

            <div className="mb-5">
               <div className="mr-2 text-slate-600">
                  Atividade física
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {thisEvent && thisEvent.medicalHistory.physicalActivity}
               </div>
            </div>
         </div>

      </div>
   )
}