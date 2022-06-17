const { patient, doctor } = require('./data');
const data = require('./data');
const Query = {
    message: (parent, args, context, info) => {
        return "Hello World";
    },
    patient: (parent, args, context, info) => {
        const patient = data.patient.find(p => p.id == args.id);
        return patient;
    },
}

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
    },
};

module.exports = { Query, Patient};