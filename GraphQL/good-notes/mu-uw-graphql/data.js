module.exports = {
    patient: [
        {"id": "1", "name": "John Bevins"},
        {"id": "2", "name": "John Smith"},
        {"id": "3", "name": "Jack Highland"}
    ],
    doctor: [
        {"id": "1", "name": "Frank Waiton"},
        {"id": "2", "name": "Phil Mckenzie"},
        {"id": "3", "name": "Jen Frye"},
        {"id": "4", "name": "Craig Helbling"},
        {"id": "5", "name": "Karen Macarthur"},
        {"id": "6", "name": "Alan Gurniak"},
        {"id": "7", "name": "Jose Herrera"},
        {"id": "8", "name": "Robert Mcsweeney"},
        {"id": "9", "name": "Rosalina Guerriero"},
        {"id": "10", "name": "Tim Olsen"}
    ],
    visit: [
        {"id": "1", "patient_id": "1", "doctor_id": "1", "completed": "1"},
        {"id": "2", "patient_id": "1", "doctor_id": "4", "completed": "0"},
        {"id": "3", "patient_id": "1", "doctor_id": "9", "completed": "0"},
        {"id": "4", "patient_id": "2", "doctor_id": "2", "completed": "0"},
        {"id": "5", "patient_id": "2", "doctor_id": "10", "completed": "1"},
        {"id": "6", "patient_id": "2", "doctor_id": "7", "completed": "0"},
        {"id": "7", "patient_id": "3", "doctor_id": "3", "completed": "0"},
        {"id": "8", "patient_id": "3", "doctor_id": "4", "completed": "0"},
        {"id": "9", "patient_id": "3", "doctor_id": "1", "completed": "1"}
    ]
}