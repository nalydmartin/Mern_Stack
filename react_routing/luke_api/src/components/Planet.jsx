import React, {useState, useEffect} from 'react';
import Form from './Form';
import axios from 'axios';

function Planet(props) {

    const {optionType, optionID} = props;
    const [planet, setPlanet] = useState({});
    const [err, setErr] = useState(null);

    useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${optionID}/`)
    .then(response => {setPlanet(response.data)})
    .catch((e) => {setErr("These aren't the droids you were looking for.")})
    }, [props]);
    

    function display() {
        return(
            <div>
                <h2>{planet.name}</h2>
                <p>Diameter: {planet.diameter}</p>
                <p>Climate: {planet.climate}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Population: {planet.population}</p>

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

export default Planet;