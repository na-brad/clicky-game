import React from "react";
import "./Car.css";

const Car = props => (
    <span onClick={() => props.check(props.id)}>
        <div className="click-item">
            <img alt={props.name} src={props.image} />
        </div>
    </span>
);

export default Car;
