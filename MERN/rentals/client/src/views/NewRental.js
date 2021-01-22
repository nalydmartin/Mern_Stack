
import axios from 'axios';
import React, {useState } from 'react';
import { navigate } from '@reach/router';

function NewRental() {

    const [address, setAddress] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [newConstruction, setNewConstruction] = useState(false); // Checkbox will bet set to unchecked.
    const [propertyType, setPropertyType] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(address, imageUrl, newConstruction, propertyType);
        // TODO: send info to the backend!
        
        setErrors([]); // Resets errors for user.

        // Returns a promise
        axios.post('http://localhost:8000/api/rentals', {
            address, 
            imageUrl, 
            newConstruction, 
            propertyType
        })
        .then(() => navigate('/rentals'))
        .catch(err => {
            // the algo that goes behind getting the errors from json!
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })

        // .catch(err => { // If there are errors, set them in the errors array to be presented on the page to the user.
        //     const errResponse = err.response.data.errors;
        //     const errArray = [];

        //     for(const key of Object.keys(errResponse)) {
        //         errArray.push(errResponse[key].message)
        //     }
        //     setErrors(errArray);
        //     console.log(errArray);
        // })
        
        // Having this outside the promise response would cause the function to navigate before the promise resolves...
        // navigate('/rentals');
    }


    return (
        <div>

            {errors.map( (err, idx) => 
            <p key={idx} style={{color: 'red', fontWeight: 'bold'}}>{err}</p>
            )}

            <h1>Add a rental!</h1>
            {/* By default on form submit will send a GET request to the same page.  */}
            <form onSubmit={handleSubmit}>

                <p>
                    <label>Address: </label>
                    <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
                </p>
                <p>
                    <label>Image URL: </label>
                    <input  type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                </p>
                <p>
                    <label>
                    New Construction:
                        <input type="checkbox" checked={newConstruction} onChange={e => setNewConstruction(e.target.checked)} />
                        </label>
                </p>
                <p>
                    <label>Property Type: </label>
                    
                    <select value={propertyType} onChange={e => setPropertyType(e.target.value)}>
                        <option>Select one:</option>
                        <option value="Single Family">Single Family</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Condo</option>
                    </select>
                </p>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewRental;