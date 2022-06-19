import { useEffect, useState } from 'react';
import DoctorsListItem from './DoctorsListItem';

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
        {doctors.map((doctor) => <DoctorsListItem key={doctor.id} name={doctor.name}/>)} 
        </>
    );
}

export default DoctorsList;