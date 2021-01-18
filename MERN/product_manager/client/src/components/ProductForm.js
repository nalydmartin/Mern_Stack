import React, {useState} from 'react';
import axios from 'axios';

export default (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res => console.log("Response: ", res))
        .catch(err => console.log("Error: ", err))

    }

    return (
        <form onSubmit={submitHandler}>

            <p>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </p>

            <p>
                <label>Price</label>
                <input type="text" onChange={(e) => setPrice(e.target.value)} />
            </p>

            <p>
                <label>Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </p>

            <input type="submit" />
        </form>
    )
}