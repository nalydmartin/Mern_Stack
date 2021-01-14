import React from 'react';
import {Router, Link} from '@reach/router';


function General(props) {

    let param = props.thing;
    function paramCheck(props){
        
        if(isNaN(+props.thing) === true) {
            param = props.thing;
        } else {
            param = Number(props.thing);
        }
        return param;
    }

    return (
        <div>
            <h1>{typeof(paramCheck(props))}: {param}</h1>
            <Link to='/home'>Home</Link>
        </div>
    )
}

export default General;