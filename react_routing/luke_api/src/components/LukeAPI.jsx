import React, {useState} from 'react';
import Form from './Form';

function LukeAPI(props) {

    const {optionType, optionID} = props;
    const [data, setData] = useState([]);

    fetch(`https://swapi.dev/api/${optionType}/${optionID}`)
    .then(response => response.json())
    .then(response => setData(response.results));


    return (
        <div>
            <Form />
            
            <h2>Does it work?</h2>

            <p>{data.optionType}: {data.optionID}</p>


        </div>
    )
}

export default LukeAPI;