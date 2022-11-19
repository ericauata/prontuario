import express from "express"
import mongoose from "mongoose"
import keys from "./config/keys.js"
import { Category, Event, Patient } from "./models/Schemas.js"

const app = express()

app.use(express.json())

mongoose.connect(keys.mongoURI)

// Patient search
app.get("/api/search/patients", async (req, res) => {
   let result = await Patient.aggregate([
      {
         $search: {
            autocomplete: {
               path: "fullName",
               query: `${req.query.q}`
            }
         }
      }, {
         $limit: 10
      }, {
         $project: {
            _id: 1,
            fullName: 1,
            dateOfBirth: 1
         }
      }
   ])
   res.send(result)
})

// Get 10 latest updated patients
// app.get("/api/patients/popular", async (req, res) => {
//    const patients = await Patient.find().sort({ updatedAt: -1 }).limit(10)
//    res.send(patients)
// })

// Add new patient
app.post("/api/patients", async (req, res) => {
   const newPatient = new Patient({
      fullName: req.body.fullName,
      dateOfBirth: req.body.dateOfBirth
   })
   const createdPatient = await newPatient.save()
   res.json(createdPatient)
})

// Delete diagnosis
app.put("/api/patients/:patientId/diagnosis/:diagnosisId", async (req, res) => {
   const patientId = req.params.patientId
   const diagnosisId = req.params.diagnosisId
   const patient = await Patient.findOneAndUpdate(
      { _id: patientId },
      {
         $pull: {
            currentDiagnosis: {
               _id: diagnosisId
            }
         }
      }
   )
})

// Edit diagnosis
app.put("/api/patients/:patientId", async (req, res) => {
   const patientId = req.params.patientId
   const patient = await Patient.findOneAndUpdate(
      { _id: patientId },
      {
         $push: {
            "currentDiagnosis": {
               _id: new mongoose.Types.ObjectId,
               name: req.body.name,
               body: req.body.body
            }
         }
      }
   )
})

// Get patient main info
app.get("/api/patients/:patientId", async (req, res) => {
   const patientId = req.params.patientId
   const patient = await Patient.findById(patientId)
   res.send(patient)
})

// Get all events of a given patient
app.get("/api/patients/:patientId/events", async (req, res) => {
   const patientId = req.params.patientId
   const limit = req.query.n
   const events = await Event.find({ patient: patientId }).limit(limit)
   res.send(events)
})

// Get all events under a category of a given patient
app.get("/api/patients/:patientId/categories/:categoryId", async (req, res) => {
   const patientId = req.params.patientId
   const categoryId = req.params.categoryId
   const events = await Event.find({ patient: patientId, category: categoryId })
      .populate({
         path: "category",
         model: "Category"
      })
   res.send(events)
})

import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, "public")))

app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "public", "index.html"))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
   console.log("Backend server is running on port 5000.")
})