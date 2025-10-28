const mongoose = require("mongoose");

const medicalDataSchema = new mongoose.Schema({
    diagnosis: { type: String, required: true},
    consultationDate: { type: Date, required: true},
    symptoms: { type: String, required: true},
    medicines: { type: String, required: false}
})

module.exports = mongoose.model("MedicalData", medicalDataSchema);