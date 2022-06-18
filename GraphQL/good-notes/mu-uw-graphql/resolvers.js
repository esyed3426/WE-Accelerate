const { patient, doctor } = require('./data');
const data = require('./data');
const Query = {
    message: (parent, args, context, info) => {
        return "Hello World";
    },
    patient: (parent, args, context, info) => {
        const { id } = args;
        const patient = data.patient.find(p => p.id == id);
        return patient;
    },
    doctor: (parent, args, context, info) => {
        const { id } = args;
        const doctor = data.doctor.find(d => d.id == id);
        return doctor;
    },
};

const Patient = {
    doctors: (parent, args, context, info) => {
        const { id } = parent;
        const visits = data.visit.filter((v) => v.patient_id == id);
        const doctorIds = visits.map((v) => v.doctor_id);
        const doctors = [];
        doctorIds.forEach((did) => {
            doctors.push(data.doctor.find((d) => d.id == did));
        });
        return doctors;
    }
};

    
const Doctor = {
    patients: (parent, args, context, info) => {
        const { id } = parent;
        const visits = data.visit.filter(v => v.doctor_id == id);
        const patientIds = visits.map(v => v.patient_id);
        const patients = [];
        patientIds.forEach(pid => {
            patients.push(data.patient.find(p => p.id == pid))
        });
        return patients;
    }
}


module.exports = { Query, Patient, Doctor };