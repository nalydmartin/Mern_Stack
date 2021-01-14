import React from 'react';
import {Router, Link} from '@reach/router';


function Extra(props) {

    const word = props.word;
    const text = props.text;
    const bgColor = props.background;

    return (

        <h1 style={{'color': text, 'backgroundColor': bgColor}}>{word}</h1>
    )
}

export default Extra;