import React from 'react';
import './playerschoice.css';
import backgroundTriangle from '../images/bg-triangle.svg';

export default function PlayersChoice(props) {
    return (
        <div>
        <div className="backgroundTriangle">
        <img src={backgroundTriangle} className="backgroundTriangle" alt="backgroundTriangle" />
        </div>
        <div className="playersChoiceDiv">
            <div className="paperButtonBorder" onClick={props.paperButtonChoiceClick}><button className="paperButton"></button></div>
            <div className="rockButtonBorder" onClick={props.rockButtonChoiceClick}><button className="rockButton"></button></div>
            <div className="scissorButtonBorder" onClick={props.scissorsButtonChoiceClick}><button className="scissorButton"></button></div>
        </div>
        </div>
    )
}
