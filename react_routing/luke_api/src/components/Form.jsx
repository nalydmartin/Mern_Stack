import { navigate } from '@reach/router';
import React, {useState} from 'react';

function Form() {

    const [optionType, setOptionType] = useState("people");
    const [optionID, setOptionID] = useState(0);

    function submitHandler() {
        // Send a fetch to get the specific optiontype and optionID
        
        navigate(`/${optionType}/${optionID}`);
    }
    
    return(
        <div>
            <h2>Luke Api</h2>

            <form onSubmit={submitHandler}>

                <label>Search for: </label>
                <select onChange={(e) => setOptionType(e.target.value)} name="" value={optionType}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <label>ID: </label>
                <input onChange={(e) => setOptionID(+e.target.value)} type="number"/>
                <button>Search</button>
            </form>
            <br/>

            <p>{optionType}: {optionID}</p>
        </div>
    )
}

export default Form;