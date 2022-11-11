import express from "express"
import mongoose from "mongoose"

import keys from "./config/keys.js"

import { Patient } from "./models/Schemas.js"

const app = express()

mongoose.connect(keys.mongoURI)

// Get patient info
app.get("/api/patients/:patientId", async (req, res) => {
   const patientId = req.params.patientId
   const patient = await Patient.findById(patientId)
   res.send(patient)
})

app.get('/', (req, res) => {
   res.json({ message: "Hello from backend server!" });
})

const port = process.env.PORT || 5000
app.listen(port, () => {
   console.log("Backend server is running on port 5000.")
})