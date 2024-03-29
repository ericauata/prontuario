import { Schema, model } from "mongoose"

const eventSchema = new Schema(
   {
      patient: { type: Schema.Types.ObjectId, ref: "Patient" },
      category: { type: Schema.Types.ObjectId, ref: "Category" },
      specialty: String,
      diagnosis: [],
      exam: [],
      doctor: String,
      body: String,
      medicalHistory: {
         height: Number,
         weight: Number,
         alergies: String,
         medications: String,
         currentDiagnosis: [{
            _id: Schema.Types.ObjectId,
            name: String,
            body: String
         }],
         previousDiagnosis: String,
         recreationalDrugs: String,
         smoking: String,
         alcohol: String,
         physicalActivity: String,
         familyHistory: String
      }
   },
   {
      timestamps: true
   }
)

const patientSchema = new Schema(
   {
      fullName: String,
      dateOfBirth: { type: Date },
      medicalHistory: {
         height: Number,
         weight: Number,
         alergies: String,
         medications: String,
         currentDiagnosis: [{
            _id: Schema.Types.ObjectId,
            name: String,
            body: String
         }],
         previousDiagnosis: String,
         recreationalDrugs: String,
         smoking: String,
         alcohol: String,
         physicalActivity: String,
         familyHistory: String
      }
   },
   {
      timestamps: true
   }
)

const categorySchema = new Schema(
   {
      name: String
   }
)

const Category = model("Category", categorySchema)
const Event = model("Event", eventSchema)
const Patient = model("Patient", patientSchema)

export { Category, Event, Patient }