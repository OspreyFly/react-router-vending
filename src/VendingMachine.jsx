import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <h1>Hello I'm a vending machine. What would you like to eat?</h1>
            <h1><Link to="/Doritos">Doritos</Link></h1>
            <h1><Link to="/Cheetos">Cheetos</Link></h1>
            <h1><Link to="/Pretzels">Pretzels</Link></h1>
        </div>
    );
}

export default VendingMachine;