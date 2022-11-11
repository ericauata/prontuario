import React, { useEffect, useContext, useState } from "react"
import { Link, useSearchParams, useParams } from "react-router-dom"
import { Context } from "../../Context"

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined"

export default function Timeline() {

   const { formatDate, thisPatient } = useContext(Context)
   const [timeline, setTimeline] = useState([])
   const { patientId } = useParams()
   const [searchParams, setSearchParams] = useSearchParams()

   const numOfEvents = searchParams.get("n")

   useEffect(() => {
      fetch(`/api/patients/${patientId}/events?n=${numOfEvents}`)
         .then(res => res.json())
         .then(data => setTimeline(data))
         .catch(err => {
            console.log(err)
         })
   }, [])

   console.log(timeline)

   const timelineEl = timeline?.map(event => {
      return (
         <div className="items-start mb-5" key={event._id}>
            <div className="flex justify-between items-center bg-gray-100 px-2 py-1 rounded-full">
               <div>
                  <Link to="outpatient" className="flex items-center">
                     <span className="grow font-bold uppercase text-sm ml-1">{event.category.name} de {event.specialty}</span>
                  </Link>
               </div>
               <div className="text-sm">{formatDate(event.date, "short")}</div>
            </div>
            <div className="pl-2">
               {event.exam && <div><span className="text-gray-500 font-bold uppercase text-sm">Exame: </span>{event.exam.join(", ")}</div>}
               {event.diagnosis.length > 0 && <div><span className="text-gray-500 font-bold uppercase text-sm">HD: </span>{event.diagnosis.join(", ")}</div>}
            </div>
         </div >
      )
   })

   return (
      <div className="p-4">
         {timelineEl}
      </div>
   )
}