import React, { useEffect, useContext, useState } from "react"
import { NavLink, useSearchParams, useParams } from "react-router-dom"
import { Context } from "../../Context"

import { UilCalender, UilUser, UilFolderExclamation, UilFileSearchAlt, UilAngleDoubleLeft, UilAngleDoubleRight } from "@iconscout/react-unicons"

export default function Timeline(props) {

   const { formatDate, thisPatient } = useContext(Context)
   const { patientId } = useParams()

   const [timeline, setTimeline] = useState([])
   const [searchParams, setSearchParams] = useSearchParams()

   const menuStyles = "block mb-2 border rounded bg-slate-100 p-2 hover:bg-slate-200 hover:border-slate-400"
   const menuActiveStyles = menuStyles + " " + "bg-slate-200 border-slate-400"

   const numOfEvents = searchParams.get("n")

   useEffect(() => {
      fetch(`/api/patients/${patientId}/events?n=10`)
         .then(res => res.json())
         .then(data => setTimeline(data))
         .catch(err => {
            console.log(err)
         })
   }, [])

   return (
      <div className="p-4 lg:grow max-w-screen-lg">
         <h2 className="uppercase font-serif text-lg mb-1">
            Eventos recentes
         </h2>
         <p className="mb-3">
            Mostrando últimos 10 eventos.
         </p>
         {timeline?.map(event => {
            return (
               <NavLink
                  to={`/patients/${event.patient}/categories/${event.category._id}/events/${event._id}`}
                  key={event._id}
                  className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}
               >
                  <div className="font-bold text-slate-600 mb-1">
                     {event.category.name} de {event.specialty}
                  </div>
                  <div className="flex text-sm items-center" title="Data do atendimento">
                     <UilCalender className="text-slate-400 w-4 h-4 mr-1" />
                     <span>{formatDate(event.createdAt, "short")}</span>
                  </div>
                  <div className="flex text-sm items-center" title="Médico responsável pelo atendimento">
                     <UilUser className="text-slate-400 w-4 h-4 mr-1" />
                     <span>{event.doctor}</span>
                  </div>
                  {event.exam.length > 0 &&
                     <div className="flex text-sm items-center" title="Exame realizado">
                        <UilFileSearchAlt className="text-slate-400 w-4 h-4 mr-1" />
                        <span>{event.exam.join(", ")}</span>
                     </div>
                  }
                  {event.diagnosis.length > 0 && event.exam.length === 0 &&
                     <div className="flex text-sm items-center" title="Hipótese diagnóstica">
                        <UilFolderExclamation className="text-slate-400 w-4 h-4 mr-1" />
                        <span>{event.diagnosis.join(", ")}</span>
                     </div>
                  }
               </NavLink>
            )
         })}
      </div >
   )
}