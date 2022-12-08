import React, { useContext } from "react"
import { Context } from "../../Context"

export default function History() {

   const { thisPatient } = useContext(Context)
   const history = thisPatient.medicalHistory ? thisPatient.medicalHistory : {}

   return (
      <div className="p-4 max-w-screen-lg">
         <h2 className="uppercase font-serif text-lg mb-1">
            Medical history
         </h2>
         <div className="flex items-baseline mb-5">
            <div className="mr-5">
               <div className="mr-2 text-slate-600 font-bold">
                  Height
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {history.height} cm
               </div>
            </div>
            <div className="mr-5">
               <div className="mr-2 text-slate-600 font-bold">
                  Weight
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {history.weight} Kg
               </div>
            </div>
            <div className="grow">
               <div className="mr-2 text-slate-600 font-bold">
                  Allergies
               </div>
               <div className="border-b py-2 px-3 bg-slate-100">
                  {history.alergies}
               </div>
            </div>
         </div>
         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Medication
            </div>
            <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
               {history.medications}
            </div>
         </div>
         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Current diagnostics
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
               Personal history
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.previousDiagnosis}
            </div>
         </div>
         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Family history
            </div>
            <div className="border-b py-2 px-3 bg-slate-100 whitespace-pre-line">
               {history.familyHistory}
            </div>
         </div>
         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Drug use
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.recreationalDrugs}
            </div>
         </div>
         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Smoking
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.smoking}
            </div>
         </div>
         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Alcohol use
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.alcohol}
            </div>
         </div>
         <div className="mb-5">
            <div className="mr-2 text-slate-600 font-bold">
               Physical activity
            </div>
            <div className="border-b py-2 px-3 bg-slate-100">
               {history.physicalActivity}
            </div>
         </div>
      </div >
   )
}