import React, { useState, useEffect } from "react"
import { useParams, useOutletContext } from "react-router-dom"

export default function EventDetails() {

   const [events] = useOutletContext()
   const { eventId } = useParams()
   // const [thisEvent, setThisEvent] = useState({})

   // useEffect(() => {
   //    const event = events.find(item => item._id === eventId)
   //    setThisEvent(event)
   // }, [events])

   const thisEvent = events.find(item => item._id === eventId)

   return (
      <div className="p-4">
         <h2 className="text-xl mb-7 font-serif">{thisEvent && thisEvent.category.name} de {thisEvent && thisEvent.specialty}</h2>


      </div>
   )
}