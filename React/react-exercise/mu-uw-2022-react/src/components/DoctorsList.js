import { useEffect, useState } from 'react';
import DoctorsListItem from './DoctorsListItem';
import AddDoctor from './AddDoctor';

function DoctorsList() {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/v1/doctors')
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);

    return (
        <>
        <h2>Doctors:</h2>
        {doctors.map((doctor) => <DoctorsListItem key={doctor.id} name={doctor.name} id={doctor.id}/>)} 
        <AddDoctor handleAddDoctor={(doctorName) => {

            // We do not push the doctor object onto the array because of immutability
            // Make a copy and add to the copy array

                const newDoctorList = [
                    ...doctors, {
                        id: new Date().getTime(),
                        name: doctorName
                    }
                ];
                setDoctors(newDoctorList);
            }} 
        />
        </>
    );
}

export default DoctorsList;