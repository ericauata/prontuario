import React, { useEffect, useState, useContext } from "react"
import { useParams, useOutletContext, NavLink, Outlet } from "react-router-dom"
import { Context } from "../../Context"

import { UilCalender } from "@iconscout/react-unicons"
import { UilUser } from "@iconscout/react-unicons"
import { UilFolderExclamation } from "@iconscout/react-unicons"

export default function EventsByCategory() {

   const { formatDate, events, setEvents } = useContext(Context)
   const { patientId, categoryId } = useParams()

   useEffect(() => {
      fetch(`/api/patients/${patientId}/categories/${categoryId}`)
         .then(res => res.json())
         .then(data => setEvents(data))
      // console.log(thisPatient._id)
   }, [])

   // console.log(thisPatient)

   const eventsEl = events.map(event => {

      return (
         <NavLink
            to={`events/${event._id}`}
            className={
               ({ isActive }) => isActive ?
                  "py-3 px-4 block border-b bg-white" :
                  "py-3 px-4 block border-b"
            }
            key={event._id}>
            <div className={`text-rose-600 font-semibold text-sm uppercase mb-1`}>
               {event.specialty}
            </div>
            <div className="flex text-sm items-center">
               <UilCalender viewBox="0 0 22 22" className="text-neutral-400 mr-1 scale-75" />
               <span>{formatDate(event.updatedAt, "short")}</span>
            </div>
            <div className="flex text-sm items-center">
               <UilUser viewBox="0 0 22 22" className="text-neutral-400 mr-1 scale-75" />
               <span>{event.doctor}</span>
            </div>
            <div className="flex text-sm items-center">
               <UilFolderExclamation viewBox="0 0 22 22" className="text-neutral-400 mr-1 scale-75" />
               <span>{event.diagnosis.join(", ")}</span>
            </div>
         </NavLink>
      )
   })

   // function chooseCategory() {
   //    const category = eventCategory
   //    switch (category) {
   //       case 'outpatient':
   //          return "Ambulatório"
   //          break
   //       case 'emergency':
   //          return "Emergência"
   //          break
   //       case 'study':
   //          return "Exame"
   //          break
   //       case 'inpatient':
   //          return "Internação"
   //          break
   //       default:
   //          return "Evento"
   //    }
   // }

   return (
      <div className="flex h-full">
         <div className="w-1/5 bg-slate-100">
            {eventsEl}
         </div>
         <div className="w-full">
            <Outlet context={[events]} />
         </div>
      </div>
   )
}