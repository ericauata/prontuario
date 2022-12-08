import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../../Context"

import { UilCalender, UilUser } from "@iconscout/react-unicons"

export default function EventDetails() {

   const { formatDate, events } = useContext(Context)
   const { eventId } = useParams()
   const thisEvent = events.find(item => item._id === eventId)

   return (
      <div className="p-4">
         <h2 className="text-2xl font-serif mb-1">
            {thisEvent?.category.name} de {thisEvent?.specialty}
         </h2>
         <div className="flex mb-5">
            <div className="flex text-sm items-center mr-4">
               <UilCalender className="text-slate-400 w-4 h-4 mr-1" />
               <span>{formatDate(thisEvent?.updatedAt, "short")}</span>
            </div>
            <div className="flex text-sm items-center">
               <UilUser className="text-slate-400 w-4 h-4 mr-1" />
               <span>{thisEvent?.doctor}</span>
            </div>
         </div>

         <div className="mb-6">
            <div className="text-sky-700 mb-2 uppercase">
               {thisEvent?.category.name === "Exame" ?
                  "Results" :
                  "Consultation"
               }
            </div>
            <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
               {thisEvent?.body}
            </div>
         </div>

         {thisEvent?.category.name !== "Exame" &&
            <div className="">
               <div className="text-sky-700 mb-2 uppercase">
                  Medical history
               </div>
               <div className="flex items-baseline mb-5">
                  <div className="mr-5">
                     <div className="mr-2 text-slate-600">
                        Height
                     </div>
                     <div className="border-b py-2 px-3 bg-slate-100">
                        {thisEvent?.medicalHistory.height} cm
                     </div>
                  </div>
                  <div className="mr-5">
                     <div className="mr-2 text-slate-600">
                        Weight
                     </div>
                     <div className="border-b py-2 px-3 bg-slate-100">
                        {thisEvent?.medicalHistory.weight} Kg
                     </div>
                  </div>
                  <div className="grow">
                     <div className="mr-2 text-slate-600">
                        Allergies
                     </div>
                     <div className="border-b py-2 px-3 bg-slate-100">
                        {thisEvent?.medicalHistory.alergies}
                     </div>
                  </div>
               </div>

               <div className="mb-5">
                  <div className="mr-2 text-slate-600">
                     Medication
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
                     {thisEvent?.medicalHistory.medications}
                  </div>
               </div>

               <div className="mb-5">
                  <div className="mr-2 text-slate-600">
                     Current diagnostics
                  </div>

                  {thisEvent?.medicalHistory.currentDiagnosis?.map(item => (
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
                     Personal history
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100">
                     {thisEvent?.medicalHistory.previousDiagnosis}
                  </div>
               </div>

               <div className="mb-5">
                  <div className="mr-2 text-slate-600">
                     Family history
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
                     {thisEvent?.medicalHistory.familyHistory}
                  </div>
               </div>

               <div className="mb-5">
                  <div className="mr-2 text-slate-600">
                     Drug use
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100">
                     {thisEvent?.medicalHistory.recreationalDrugs}
                  </div>
               </div>

               <div className="mb-5">
                  <div className="mr-2 text-slate-600">
                     Smoking
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100">
                     {thisEvent?.medicalHistory.smoking}
                  </div>
               </div>

               <div className="mb-5">
                  <div className="mr-2 text-slate-600">
                     Alcohol use
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100">
                     {thisEvent?.medicalHistory.alcohol}
                  </div>
               </div>

               <div className="mb-5">
                  <div className="mr-2 text-slate-600">
                     Physical activity
                  </div>
                  <div className="border-b py-2 px-3 bg-slate-100">
                     {thisEvent?.medicalHistory.physicalActivity}
                  </div>
               </div>
            </div>
         }
      </div>
   )
}