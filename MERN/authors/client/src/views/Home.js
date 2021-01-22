import React, {useState, useEffect} from 'react';
import axios from 'axios';

import AuthorList from '../components/AuthorList';


export default () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then(res => {
            setAuthors(res.data);
        })
    }, []);
    

    return (

        <div>
            <h1>Favorite Authors</h1>
            <p>We have quotes by:</p>
            <AuthorList authors={authors}/>
        </div>
        
    )


}