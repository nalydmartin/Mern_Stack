import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default (props) => {

    const [name, setName] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/new', {
            name
        })
        .then(res => {navigate('/')})
        .catch(err => console.log(err))
    }


    return (

        <>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Name</label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                </p>

                <button type="submit">Create New Author</button>
            </form>
        </>
    )

}