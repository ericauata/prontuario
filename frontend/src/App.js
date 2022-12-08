import React from "react"
import { Routes, Route } from "react-router-dom"

import "./index.css"

import Home from "./pages/Home"
import Patient from "./pages/patients/Patient"
import Timeline from "./pages/patients/Timeline"
import EventsByCategory from "./pages/patients/EventsByCategory"
import EventDetails from "./pages/patients/EventDetails"
import History from "./pages/patients/History"

export default function App() {
   return (
      <div className="w-full bg-white h-screen">
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/patients/:patientId" element={<Patient />}>
               <Route index element={<Timeline />} />
               <Route path="diagnosis" element={<History />} />
               <Route path="categories/:categoryId" element={<EventsByCategory />}>
                  <Route path="events/:eventId" element={<EventDetails />} />
               </Route>
            </Route>
         </Routes>
      </div>
   )
}