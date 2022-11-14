import React from "react"
import { Link } from "react-router-dom"

import { UilCell } from "@iconscout/react-unicons"

export default function Header() {

   return (
      <header className="">
         <div className="bg-slate-900 flex justify-between items-stretch">
            <nav className="flex items-stretch ml-2">
               <div className="uppercase font-bold text-sm bg-slate-700 rounded-t mt-2 mr-1 text-white px-5 flex items-center">
                  <a href="">Pacientes</a>
               </div>
               <div className="uppercase font-bold text-sm rounded-t mt-2 mr-1 text-white px-5 flex items-center">
                  <a href="">Emergência</a>
               </div>
            </nav>
            <h1 id="logo" className="text-xl font-serif my-1 mr-4">
               <Link to="/" className="text-white flex items-center">
                  <UilCell className="mr-1 w-7 h-7" />
                  <div className="pt-1">PRONTUÁRIO EW</div>
               </Link>
            </h1>
         </div>
      </header>
   )
}