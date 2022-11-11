import React from "react"

import SearchPatient from "../components/SearchPatient"

export default function Home() {

   return (
      <div className="flex flex-col justify-center m-20 p-10 text-xl">
         <SearchPatient />
      </div >
   )
}