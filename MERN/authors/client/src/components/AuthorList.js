import React from 'react';
import axios from 'axios';

export default ({authors}) => {

    return (

        <div>

            {authors.map((author, idx) => {
                return (
                    <p key={idx}>{author.name}</p>
                )
            })}
        </div>
    )
}