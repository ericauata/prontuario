import React, { useEffect, useState, useContext } from "react"
import { useParams, NavLink, Outlet } from "react-router-dom"
import { Context } from "../../Context"

import { UilCalender, UilUser, UilFolderExclamation, UilAngleDoubleLeft, UilAngleDoubleRight } from "@iconscout/react-unicons"

export default function EventsByCategory() {

   const [listOn, setListOn] = useState(true)
   const { formatDate, events, setEvents } = useContext(Context)
   const { patientId, categoryId, eventId } = useParams()

   const menuStyles = "block mb-2 rounded border bg-slate-100 p-2 hover:bg-slate-200"
   const menuActiveStyles = `${menuStyles} bg-slate-200`

   useEffect(() => {
      eventId ? setListOn(false) : setListOn(true)
      fetch(`/api/patients/${patientId}/categories/${categoryId}`)
         .then(res => res.json())
         .then(data => setEvents(data))
   }, [categoryId])

   function toggleList(event) {
      event.preventDefault()
      setListOn(prevState => !prevState)
   }

   return (
      <div className="relative w-full">
         <div className={`flex absolute z-10 w-64 shadow-lg min-h-screen h-full p-3 bg-slate-500 ease-in-out duration-300 ${listOn ? "translate-x-0" : "-translate-x-56"}`}>
            <div className="grow">
               <h2 className="uppercase font-serif text-lg mb-1 text-white">
                  {events[0]?.category.name}
               </h2>
               {events.map(event => {
                  return (
                     <NavLink
                        onClick={() => setListOn(false)}
                        to={`events/${event._id}`}
                        className={({ isActive }) => isActive ? menuActiveStyles : menuStyles}
                        key={event._id}
                     >
                        <div className="font-bold text-slate-600 mb-1">
                           {event.specialty}
                        </div>
                        <div className="flex text-sm items-baseline">
                           <UilCalender className="text-slate-400 w-4 h-4 mr-1" />
                           <span>{formatDate(event.updatedAt, "short")}</span>
                        </div>
                        <div className="flex text-sm items-baseline">
                           <UilUser className="text-slate-400 w-4 h-4 mr-1" />
                           <span>{event.doctor}</span>
                        </div>
                        <div className="flex text-sm items-baseline">
                           <UilFolderExclamation className="text-slate-400 w-4 h-4 mr-1" />
                           <span>{event.diagnosis.join(", ")}</span>
                        </div>
                     </NavLink>
                  )
               })}
            </div>
            <a href="" onClick={toggleList} className="-mr-3 -mt-1">
               {listOn ?
                  <UilAngleDoubleLeft className="w-9 h-9 text-white" /> :
                  <UilAngleDoubleRight className="w-9 h-9 text-white" />
               }
            </a>
         </div>
         <div className="w-full pl-8">
            <Outlet context={[events]} />
         </div>
      </div >
   )
}