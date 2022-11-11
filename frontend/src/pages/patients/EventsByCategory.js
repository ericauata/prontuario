import React, { useEffect, useState, useContext } from "react"
import { useParams, useOutletContext, NavLink, Outlet } from "react-router-dom"
import { Context } from "../../Context"

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined"

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
            <div className={`text-sky-700 font-semibold text-sm uppercase mb-1`}>
               {event.specialty}
            </div>
            <div className="flex text-sm items-center">
               <CalendarMonthOutlinedIcon viewBox="0 0 22 22" className="w-4 h-4 text-slate-500 mr-1" />
               <span>{formatDate(event.updatedAt, "short")}</span>
            </div>
            <div className="flex text-sm">
               <PersonOutlineOutlinedIcon viewBox="0 0 22 22" className="w-4 h-4 text-slate-500 mr-1" />
               <span>{event.doctor}</span>
            </div>
            <div className="flex text-sm">
               <AssignmentLateOutlinedIcon viewBox="0 0 22 22" className="w-4 h-4 text-slate-500 mr-1" />
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