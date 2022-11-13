import React, { useEffect, useState } from "react"

export default function SearchPatient() {

   const [value, setValue] = useState("")
   const [suggestions, setSuggestions] = useState([])

   function handleChange(event) {
      let newValue = event.target.value
      setValue(newValue)
      !newValue && latest()
      event.target.value && fetch(`/api/search/patients?q=${encodeURIComponent(newValue)}`)
         .then(res => res.json())
         .then(data => setSuggestions(data))
   }

   function latest() {
      fetch("/api/patients/popular")
         .then(res => res.json())
         .then(data => setSuggestions(data))
   }

   function handleFocus() {
      latest()
   }

   function handleBlur() {
      setSuggestions([])
   }

   const suggestionsEl = suggestions.map(item => (
      <div className="hover:bg-gray-700 py-1 px-3" key={item._id}>{item.fullName}</div>
   ))

   return (
      <div>
         <input
            className="
               w-full rounded-lg border-gray-400 text-lg
               placeholder:italic
               focus:border-gray-500 focus:bg-gray-500 focus:text-white focus:placeholder:text-white focus:ring-0 focus:border-b focus:border-b-gray-400 focus:rounded-b-none"
            placeholder="Digite o nome do paciente"
            type="text"
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
         />
         {suggestions.length > 0 &&
            <div className="bg-gray-500 text-white text-lg pb-2 pt-2 rounded-b-lg">
               {suggestionsEl}
            </div>
         }
      </div>
   )
}