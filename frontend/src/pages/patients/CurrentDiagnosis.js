import React, { useContext } from "react"
import { useOutletContext } from "react-router-dom"
import { Context } from "../../Context"

import { UilTrashAlt } from "@iconscout/react-unicons"

export default function CurrentDiagnosis() {

   const { thisPatient } = useContext(Context)

   const diagnosisEl = thisPatient.currentDiagnosis?.map(item => (
      <div className="mb-6" key={item._id}>
         <input type="text" className="text-md font-bold rounded border-none w-full bg-slate-100 mb-2" value={item.name} disabled />
         <textarea rows="7" className="rounded border-none w-full bg-slate-100" disabled>
            {item.body}
         </textarea>
         <div className="flex justify-between">
            <button className="rounded bg-slate-200 hover:bg-green-700 hover:text-white px-3 py-1 text-sm mr-1">Editar</button>
            <a href="" className="text-sm text-slate-400 hover:text-red-700 flex items-center">
               Excluir
               <UilTrashAlt className="" />
            </a>
         </div>
      </div>
   ))

   return (
      <div className="p-4 max-w-screen-md">
         <div className="flex items-baseline justify-between">
            <h2 className="text-2xl uppercase mb-5 font-serif">Diagnósticos atuais</h2>
            <button className="rounded bg-sky-600 text-white px-3 py-1">Adicionar novo</button>
         </div>
         {diagnosisEl}
      </div>
   )
}