import React, {useState, useEffect} from 'react';
import Form from './Form';
import axios from 'axios';

function People(props) {

    const {optionType, optionID} = props;
    const [person, setPerson] = useState({});
    const [err, setErr] = useState(null);

    useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${optionID}/`)
    .then(response => {setPerson(response.data)})
    .catch((e) => {setErr("These aren't the droids you were looking for.")})
    }, [props]);
    

    function display() {
        return(
            <div>
                <h2>{person.name}</h2>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Birthday: {person.birth_year}</p>
                <p>Gender: {person.gender}</p>
            </div>
        )
    }

    function errorNotFound() {

        return(
            <div>
                <h1>{err}</h1>
                <img src="https://pbs.twimg.com/media/EJn11zoUwAAjWc6.jpg"/>
            </div>
        )
    }

    return (
        <div>
            <Form />
            {err != null ? errorNotFound() : display()}
            
        </div>
    )
}

export default People;