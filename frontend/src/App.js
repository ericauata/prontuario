import React from "react"
import { Routes, Route } from "react-router-dom"

import "./index.css"

import Home from "./pages/Home"
import NewPatient from "./pages/patients/NewPatient"
import Patient from "./pages/patients/Patient"
import Timeline from "./pages/patients/Timeline"
import EventsByCategory from "./pages/patients/EventsByCategory"
import EventDetails from "./pages/patients/EventDetails"
import Profile from "./pages/patients/Profile"
import History from "./pages/patients/History"

import Emergency from "./pages/emergency/Emergency"

export default function App() {
   return (
      <div>
         <div className="flex">
            <div className="w-screen bg-white h-screen">
               <Routes>

                  <Route exact path="/" element={<Home />} />

                  <Route path="/patients/new" element={<NewPatient />} />

                  <Route path="/patients/:patientId" element={<Patient />}>
                     <Route index element={<Timeline />} />
                     <Route path="diagnosis" element={<History />} />
                     <Route path="profile" element={<Profile />} />
                     <Route path="categories/:categoryId" element={<EventsByCategory />}>
                        <Route path="events/:eventId" element={<EventDetails />} />
                     </Route>
                  </Route>

                  <Route path="/emergency" element={<Emergency />}>

                  </Route>

               </Routes>
            </div>
         </div>
      </div >
   )
}