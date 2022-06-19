import {  useState } from 'react';

function AddDoctor(props) {
    const [doctorName, setDoctorName] = useState('');
    return (
        <div>
            <input 
                type="text" 
                value={doctorName} 
                onChange={(e) => {setDoctorName(e.target.value)}} 
            />
            <button onClick={() => props.handleAddDoctor(doctorName)}>Add doctor</button>
        </div>
    );
}

export default AddDoctor;