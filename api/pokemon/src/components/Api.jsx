import React, {useState} from 'react';

function Api() {

    const [pokemon, setPokemon] = useState([]);



    function handleClick( ) {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then(response => response.json())
        .then(response => {setPokemon(response.results)})
        console.log(pokemon);
    }

    return (

        <div>

            <h1>Pokemon!</h1>
            
            <button onClick={handleClick}>Fetch Pokemon</button>
            
            <ul>
                {pokemon.map((pokemon, index) =>
                <li style={{'listStyle': 'none'}} key={index}>{pokemon.id} {pokemon.name}</li>
                )}

            </ul>
        </div>

    )







}




export default Api;