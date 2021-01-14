import axios from 'axios';
import React, {useState} from 'react';


function Pokemon() {

    const [pokemon, setPokemon] = useState([]);

    function clickHandler() {
        
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807").then(response => {setPokemon(response.data.results)})
        .then(response => console.log(response))
        
    }

    return (
        <div>
            <h1>Axios Pokemon!</h1>

            <button onClick={clickHandler}>Show Me Pokemon</button>

            <ul>
                {pokemon.map((pokemon, idx) =>
                <li key={idx}>{pokemon.name}</li>
                )}
            </ul>
        </div>
    )

}




export default Pokemon;
