import React, { useEffect } from "react"

export default function App() {

   useEffect(() => [
      fetch("/api/patients/636bb954403ad2f2808e4ef5")
         .then(res => res.json())
         .then(data => console.log(data))
   ], [])

   return (
      <div>
         Hello world!
      </div>
   )
}