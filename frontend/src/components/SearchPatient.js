import React, { useEffect, useState, useContext, useRef } from "react"
import { Link } from "react-router-dom"

import { Context } from "../Context"

import { UilSearch } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"

export default function SearchPatient(props) {

   const { formatDate } = useContext(Context)

   const inputRef = useRef()
   const suggestionsRef = useRef()

   const [value, setValue] = useState("")
   const [suggestions, setSuggestions] = useState([])

   const stylesObj = {
      labelStyles: "relative text-gray-400 block",
      inputStyles: "rounded w-full border-none bg-slate-600 text-base text-gray-200 p-1 placeholder:italic placeholder:text-slate-400 placeholder:text-base pl-8 focus:bg-slate-900 focus:text-white focus:placeholder:text-slate-500",
      searchIconStyles: "pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-2 text-slate-400",
      closeIconStyles: "w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400 cursor-pointer",
      suggestionsBoxStyles: "absolute shadow-lg w-full rounded mt-1 text-base bg-slate-800",
      itemStyles: "block text-slate-100 py-2 px-3 focus:bg-slate-200 focus:outline-none focus:text-black text-base focus:first:rounded-t focus:last:rounded-b",
      itemDetailBoxStyles: "text-sm",
      itemDetailStyles: "font-serif uppercase text-xs ml-2 first:ml-0"
   }

   const [styles, setStyles] = useState(stylesObj)

   useEffect(() => {
      if (props.section === "home") {
         setStyles(prevStyles => ({
            ...prevStyles,
            inputStyles: "rounded w-full border-none bg-slate-600 text-lg text-gray-200 p-3 placeholder:italic placeholder:text-slate-400 placeholder:text-lg pl-12 focus:bg-slate-900 focus:text-white focus:placeholder:text-slate-500",
            searchIconStyles: "pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-4 text-slate-400",
            itemStyles: "block text-slate-100 py-2 px-3 text-base focus:bg-slate-200 focus:outline-none focus:text-black focus:first:rounded-t focus:last:rounded-b",
            suggestionsBoxStyles: "absolute shadow-lg w-full rounded mt-2 text-lg bg-slate-600",
         }))
      }
   }, [props.section])

   useEffect(() => {
      if (suggestions.length > 0) {
         document.body.addEventListener("keydown", onKeyDown)
         document.body.addEventListener("click", () => { startOver() })
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
   function startOver() { // Reset everything
      setSuggestions([])
      setValue("")
      inputRef.current?.blur()
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
            className={styles.itemStyles}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
            onClick={startOver}
         >
            <div>
               {item.fullName}
            </div>
            <div className={styles.itemDetailBoxStyles}>
               <span className={styles.itemDetailStyles}>Data de Nasc.:</span> {formatDate(item.dateOfBirth, "shorter")}
               <span className={styles.itemDetailStyles}>Registro:</span> {item._id}
            </div>
         </Link>
      )
   })

   return (
      <div className="relative">
         <label className={styles.labelStyles}>
            <UilSearch className={styles.searchIconStyles} />
            <input
               className={styles.inputStyles}
               placeholder="Digite o nome do paciente…"
               type="text"
               value={value}
               onChange={handleChange}
               ref={inputRef}
               onClick={(event) => event.stopPropagation()}
            />
            {value &&
               <UilTimes
                  className={styles.closeIconStyles}
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
               className={styles.suggestionsBoxStyles}
               onClick={(event) => event.stopPropagation()}
            >
               {suggestionsEl}
            </div>
         }
      </div>
   )
}