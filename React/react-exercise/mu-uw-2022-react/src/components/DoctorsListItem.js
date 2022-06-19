// We need two hooks, one to maintain state, and one to handle side effects

import { useState } from 'react';

function DoctorsListItem({name, id}) {

    const [details, setDetails] = useState(null);


    return (
        <div>
            <button onClick={() => {
        fetch(`http://localhost:5010/v1/doctor/${id}`)
            .then((res) => res.json())
            .then((res) => setDetails(res));
    }}>
        {name}
        </button>
            {details && (
            <div>
                <div>{details.specialty}</div>
            </div>
            )}
        </div>
    )
}

export default DoctorsListItem;