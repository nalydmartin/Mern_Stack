import React, { useState, useEffect } from 'react';
// useState allows us to manage state and useEffect allows us to make a request on load
import axios from 'axios';
// For making API requests ^^

import {Link, navigate} from '@reach/router';


function Dashboard() { // Not taking any props because we are getting all the rentals

    const [rentals, setRentals] = useState([]);

    // Allows us to create side effects 
    useEffect(() => {

        axios.get('http://localhost:8000/api/rentals') // Returns a promise!
        .then( response => setRentals(response.data) ) // Coming from our controller 

    }, []) // Empty array means to only run useEffect on the first render.


    const likeHandler = (index) => {

        const rentalToUpdate = rentals[index]

        axios.put(`http://localhost:8000/api/rentals/${rentalToUpdate._id }/likes`)
        .then(res => {
            const updatedRental = res.data;

            const clonedRentals = rentals.slice(); // Avoid mutating the current array 

            clonedRentals[index] = updatedRental;

            setRentals(clonedRentals);
        })
    }


    const handleDelete = (rentalId) => {

        console.log("Delete was pushed.", rentalId)

        axios.delete(`http://localhost:8000/api/rentals/${rentalId}`)
        .then( () => {
            const filtered = rentals.filter(rental => rental._id !== rentalId); // Checks if the ids match (true or false)
            setRentals(filtered); // re-render the page upon deletion.
            alert('Rental successfully deleted!');
            
        })
    }


    return (
        <div>
            <h1>Rentals</h1>

            {rentals.map( (rental, idx) => (
                <div key={rental._id}>
                    <img src={rental.imageUrl} alt={rental.address} width="350px"></img>

                    <p>{rental.address}</p>
                    <p>{rental.propertyType}</p>
                    {rental.newConstruction ? <p><b>New Construction</b></p> : null}
                    <p>{rental.likes} Likes</p>

                    <button 
                        onClick={() => navigate(`/rentals/${rental._id}/edit`)}
                    >
                    Edit
                    </button>
                    <button
                    onClick={ () => likeHandler(idx)}
                    >Like</button>
                    <button onClick={() => handleDelete(rental._id)}>Delete</button>

                </div>
            ))}

            <Link to="/rentals/new">Create a new rental</Link>
        </div>
    )
}


export default Dashboard;