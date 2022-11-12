import React from "react"
import { Routes, Route } from "react-router-dom"

import "./index.css"

import Header from "./components/Header"
import Home from "./pages/Home"
import Patient from "./pages/patients/Patient"
import Timeline from "./pages/patients/Timeline"
import EventsByCategory from "./pages/patients/EventsByCategory"
import EventDetails from "./pages/patients/EventDetails"
import Profile from "./pages/patients/Profile"
import CurrentDiagnosis from "./pages/patients/CurrentDiagnosis"

export default function App() {
   return (
      <div>
         <Header />
         <div className="flex">
            <div className="w-screen bg-white h-screen">
               <Routes>

                  <Route exact path="/" element={<Home />} />

                  <Route path="/patients/:patientId" element={<Patient />}>
                     <Route path="events/timeline" element={<Timeline />} />
                     <Route path="diagnosis" element={<CurrentDiagnosis />} />
                     <Route path="profile" element={<Profile />} />
                     <Route path="categories/:categoryId" element={<EventsByCategory />}>
                        <Route path="events/:eventId" element={<EventDetails />} />
                     </Route>
                  </Route>

               </Routes>
            </div>
         </div>
      </div >
   )
}