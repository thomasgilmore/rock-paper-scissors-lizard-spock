import React from 'react';
import './heading.css';

export default function Heading(props) {
    return (
        <div className="headingDiv">
            <div className="card">
                <img src={props.img} className="logo" alt="logo" />
                <div className="scoreCard">
                    <p className="scoreText">SCORE</p>
                    <h1 className="score">{props.score}</h1>
                </div>
            </div>
        </div>
    )
}
