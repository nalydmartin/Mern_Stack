import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [allBoxes, setAllBoxes] = useState([]);
    const [allColors, setAllColors] = useState("");

    const addColor = (e) => {
        e.preventDefault();
        setAllBoxes([...allBoxes, allColors]);
    }


    return (
        <div>
            <h1>{ allColors }</h1>
            <form onSubmit={addColor}>
                <input type="text" onChange={ (e) => {
                    setAllColors(e.target.value);
                }}/>
                <input type="submit" value="Add a new colored box!"/>
            </form>

            <div>
                { allBoxes.map( (thisColor, i) =>
                    <div className="box" key={i} style={{backgroundColor: thisColor}}></div>
                )}
            </div>
        </div>

    )

}


export default BoxGenerator;