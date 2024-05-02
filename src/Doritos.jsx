import React from 'react'
import { Link } from 'react-router-dom'
function Doritos() {
    console.log("DORITOS");
    return (
        <div>
            <h1>So crunchy, so cheesy!</h1>
            <h1><Link to="/">Back</Link></h1>
        </div>
    );
}

export default Doritos;