import React, { useState } from 'react';

const PersonCard = props => {


    const [state, setState] = useState({
        clickCount: 0
    });

    const clickHandler = () => {
        console.log(state);
        setState({
            clickCount: state.clickCount + 1
        });
    }

    return (
        <div>
            <h1> { props.lastName }, { props.firstName}</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ clickHandler }>Click here { state.clickCount }</button>
        </div>
    );
}

export default PersonCard;