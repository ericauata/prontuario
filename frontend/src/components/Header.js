import React from "react"
import SpaIcon from "@mui/icons-material/Spa"

export default function Header() {

   return (
      <header className="">
         <div className="bg-slate-900 flex justify-between items-stretch">
            <nav className="flex items-stretch ml-2">
               <div className="uppercase font-bold text-sm bg-slate-700 rounded-t mt-2 mr-1 text-white px-5 flex items-center">
                  <a href="">Paciente</a>
               </div>
               <div className="uppercase font-bold text-sm rounded-t mt-2 mr-1 text-white px-5 flex items-center">
                  <a href="">Emergência</a>
               </div>
            </nav>
            <h1 id="logo" className="text-xl font-serif my-2 mx-4 mr-4">
               <a href="/" className="text-white flex">
                  <SpaIcon className="mr-1" />
                  PRONTUÁRIO EW
               </a>
            </h1>
         </div>
      </header>
   )
}