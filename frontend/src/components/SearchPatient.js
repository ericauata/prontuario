import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

import { MdOutlinePersonSearch, MdClose } from "react-icons/md"

export default function SearchPatient() {

   const inputRef = useRef()
   const suggestionsRef = useRef()

   const [value, setValue] = useState("")
   const [suggestions, setSuggestions] = useState([])

   useEffect(() => {
      if (suggestions.length > 0) {
         document.body.addEventListener("keydown", onKeyDown)
         document.body.addEventListener("click", () => { handleClick() })
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
   function handleClick() { // Reset everything
      setSuggestions([])
      setValue("")
      inputRef.current.blur()
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
            className="block bg-white text-slate-900 py-1 px-3 focus:bg-slate-600 focus:outline-none focus:text-white text-base"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
         >
            {item.fullName}
         </Link>
      )
   })

   return (
      <div className="relative">
         <label className="relative text-gray-400 block">
            <MdOutlinePersonSearch className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-2 text-slate-400" />
            <input
               className="
               rounded w-full border-none bg-slate-600 text-base text-gray-200 p-1
               placeholder:italic placeholder:text-slate-400 placeholder:text-sm pl-8
               focus:bg-white focus:text-slate-800 focus:placeholder:text-slate-500"
               placeholder="Digite o nome do paciente…"
               type="text"
               value={value}
               onChange={handleChange}
               ref={inputRef}
               onClick={(event) => event.stopPropagation()}
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
            <div
               ref={suggestionsRef}
               className="absolute shadow-lg w-full rounded mt-1 py-1 text-lg bg-white opacity-95"
               onClick={(event) => event.stopPropagation()}
            >
               {suggestionsEl}
            </div>
         }
      </div>
   )
}