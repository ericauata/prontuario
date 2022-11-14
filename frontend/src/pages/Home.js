import React from "react"
import { Link } from "react-router-dom"

import SearchPatient from "../components/SearchPatient"

import { UilCell } from "@iconscout/react-unicons"
import { UilHeartRate } from "@iconscout/react-unicons"
import { UilBed } from "@iconscout/react-unicons"
import { UilStethoscope } from "@iconscout/react-unicons"
import { UilFilePlusAlt } from "@iconscout/react-unicons"

export default function Home() {

   return (
      <div className="bg-slate-800 w-full h-screen flex justify-center items-center flex-col pb-20">
         <div className="w-[40rem] flex justify-center items-center flex-col">
            <h1 id="logo" className="text-4xl font-serif text-white flex items-end mb-5 mr-2">
               <UilCell className="mr-2 w-12 h-12" />
               PRONTUÁRIO EW
            </h1>
            <div className="mt-10 w-full">
               <SearchPatient section="home" />
            </div>
            <div className="w-full flex flex-row items-stretch mt-10">
               <Link
                  to="/emergency"
                  className="flex flex-col items-center justify-center bg-slate-900 text-white rounded-lg font-serif uppercase p-4 hover:bg-slate-700 w-1/4 mr-1"
               >
                  <UilHeartRate className="w-9 h-9 mb-2" />
                  Emergência
               </Link>
               <Link
                  to="/outpatient"
                  className="flex flex-col items-center justify-center bg-slate-900 text-white rounded-lg font-serif uppercase p-4 hover:bg-slate-700 w-1/4 ml-1 mr-1"
               >
                  <UilStethoscope className="w-9 h-9 mb-2" />
                  Ambulatório
               </Link>
               <Link
                  to="/inpatient"
                  className="flex flex-col items-center justify-center bg-slate-900 text-white rounded-lg font-serif uppercase p-4 hover:bg-slate-700 w-1/4 ml-1 mr-1"
               >
                  <UilBed className="w-9 h-9 mb-2" />
                  Internação
               </Link>
               <Link
                  to="/exams"
                  className="flex flex-col items-center justify-center bg-slate-900 text-white rounded-lg font-serif uppercase p-4 hover:bg-slate-700 w-1/4 ml-1"
               >
                  <UilFilePlusAlt className="w-9 h-9 mb-2" />
                  Exames
               </Link>
            </div>
         </div >
      </div>
   )
}