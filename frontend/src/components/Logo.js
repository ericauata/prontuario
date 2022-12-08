import React from "react"

import { UilCell } from "@iconscout/react-unicons"

export default function Logo(props) {
   return (
      <h1 className={`flex items-end ${props.textClass}`}>
         <UilCell className={props.imageClass} />
         <span className="font-serif">
            MED REC
         </span>
      </h1>
   )
}