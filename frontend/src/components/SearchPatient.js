import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

import { MdSearch, MdClose } from "react-icons/md"

export default function SearchPatient() {

   const inputRef = useRef()
   const suggestionsRef = useRef()

   const [value, setValue] = useState("")
   const [suggestions, setSuggestions] = useState([])

   useEffect(() => {
      if (suggestions.length > 0) {
         document.body.addEventListener("keydown", onKeyDown)
      } else {
         document.body.removeEventListener("keydown", onKeyDown)
      }
      return () => {
         document.body.removeEventListener("keydown", onKeyDown)
      }
   }, [suggestions])

   function onKeyDown(event) {
      const isDown = event.key === "ArrowDown"
      const isUp = event.key === "ArrowUp"

      const inputIsFocused = document.activeElement === inputRef.current
      const suggestionsItems = suggestionsRef.current && Array.from(suggestionsRef.current.children)
      const activeItemIndex = suggestionsItems && suggestionsItems.findIndex(item => (
         item === document.activeElement
      ))

      if (isUp && suggestions.length > 0) {
         event.preventDefault()
         console.log("Go up")
         if (inputIsFocused) {
            suggestionsItems[suggestionsItems.length - 1].focus()
            console.log("Suggestions items:", activeItemIndex)
         } else if (suggestionsItems[activeItemIndex - 1]) {
            suggestionsItems[activeItemIndex - 1].focus()
         } else {
            inputRef.current.focus()
         }
      }

      if (isDown && suggestions.length > 0) {
         event.preventDefault()
         console.log("Go down")
         if (inputIsFocused) {
            suggestionsItems[0].focus()
         } else if (suggestionsItems[activeItemIndex + 1]) {
            suggestionsItems[activeItemIndex + 1].focus()
         } else {
            inputRef.current.focus()
         }
      }
   }

   function handleMouseOver(event) {
      event.target.focus()
   }
   function handleMouseOut(event) {
      event.target.blur()
   }

   function handleChange(event) {
      let newValue = event.target.value
      setValue(newValue)
      newValue.length > 0 && fetch(`/api/search/patients?q=${encodeURIComponent(newValue)}`)
         .then(res => res.json())
         .then(data => setSuggestions(data))
   }

   const suggestionsEl = suggestions.map(item => {
      return (
         <Link
            to={`/patients/${item._id}`}
            key={item._id}
            className={`block py-1 px-3 focus:bg-gray-200 focus:outline-none`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
         >
            {item.fullName}
         </Link>
      )
   })

   return (
      <div>
         <label className="relative text-gray-400 block">
            <MdSearch className="pointer-events-none w-7 h-7 absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-400" />
            <input
               className="
               rounded
               w-full border-gray-400 text-lg
               placeholder:italic pl-10 text-gray-700"
               placeholder="Digite o nome do paciente"
               type="text"
               value={value}
               onChange={handleChange}
               ref={inputRef}
               autoFocus
            />
            {value &&
               <MdClose
                  className="w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400 cursor-pointer"
                  onClick={() => {
                     setValue("")
                     setSuggestions([])
                  }}
               />
            }
         </label>
         {suggestions.length > 0 &&
            <div ref={suggestionsRef} className="rounded border border-gray-400 mt-2 text-lg">
               {suggestionsEl}
            </div>
         }
      </div>
   )
}