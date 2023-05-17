const mongoose=require('mongoose')


const All_appointmentSchema= mongoose.Schema({
    patientContactno: {
        type: String,
        required: true
        
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true

    },
    patient_name:
    {
        type: String,
    },
    doctor_Id:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    doctor_name:
    {
        type: String,
    },
    date_Time:
    {
        type: Date,
        required: true
    },
    paid_fees:
    {
        type: Number,
        required: true
    },
   
},{timestamps: true})

const All_appointmentModel=mongoose.model("AllAppointment", All_appointmentSchema)

module.exports=All_appointmentModel