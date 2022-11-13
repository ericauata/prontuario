import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {

   const [thisPatient, setThisPatient] = useState({})
   const [events, setEvents] = useState([])

   function getAge(date) {
      const today = new Date();
      const birthDate = new Date(date);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
         age--
      }
      return `${age} ano(s)`
   }

   function formatDate(date, format) {
      const isoDate = new Date(date)
      let options
      let formattedDate
      if (format === "shorter") {
         formattedDate = isoDate.toLocaleDateString("pt-BR")
      } else if (format === "short") {
         options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
         formattedDate = isoDate.toLocaleString("pt-BR")
      } else if (format === "long") {
         options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
         formattedDate = isoDate.toLocaleDateString('pt-BR', options)
      }
      return formattedDate
   }

   return (
      <Context.Provider value={{
         thisPatient,
         setThisPatient,
         events,
         setEvents,
         getAge,
         formatDate
      }}>
         {children}
      </Context.Provider>
   )
}

export { ContextProvider, Context }