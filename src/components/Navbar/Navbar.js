import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="navbar">
        <h1>{props.message}</h1>
        <br/>
        <h1>Score: {props.currentScore} | Top Score: {props.topScore}</h1>
    </div>
)



export default Navbar;