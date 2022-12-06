import React, { useEffect, useContext, useState } from "react"
import { Link, useSearchParams, useParams } from "react-router-dom"
import { Context } from "../../Context"

export default function Timeline(props) {

   const { formatDate, thisPatient } = useContext(Context)
   const { patientId } = useParams()

   const [timeline, setTimeline] = useState([])
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

   return (
      <div className="p-4 max-w-screen-lg">
         <h2 className="uppercase font-serif text-lg mb-1">
            Eventos recentes
         </h2>
         <p className="mb-3">
            Mostrando últimos {numOfEvents} eventos.
         </p>
         {timeline?.map(event => {
            return (
               <Link
                  to="outpatient"
                  key={event._id}
                  className="block mb-2 border rounded bg-slate-100 p-2 hover:bg-slate-200 hover:border-slate-400"
               >
                  <div className="flex justify-between items-baseline">
                     <div className="grow font-bold text-slate-600 mb-1">
                        {event.category.name} de {event.specialty}
                     </div>
                     <div className="text-sm text-slate-600">
                        {formatDate(event.createdAt, "shorter")}
                     </div>
                  </div>
                  <div className="text-sm">
                     {event.exam.length > 0 &&
                        <div>
                           <span className="text-gray-500 font-bold uppercase text-xs mr-1">
                              Exame:
                           </span>
                           {event.exam.join(", ")}
                        </div>}
                     {event.diagnosis.length > 0 &&
                        <div>
                           <span className="text-gray-500 font-bold uppercase text-xs mr-1">
                              HD:
                           </span>
                           {event.diagnosis.join(", ")}
                        </div>}
                  </div>
               </Link>
            )
         })}
      </div >
   )
}