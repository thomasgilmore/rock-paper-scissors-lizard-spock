import React from 'react';
import './playerschoice.css';
import backgroundPentagon from '../images/bg-pentagon.svg';

export default function PlayersChoice(props) {
    return (
        <div>
        <div className="backgroundPentagon">
        <img src={backgroundPentagon} className="backgroundPentagon" alt="backgroundPentagon" />
        </div>
        <div className="playersChoiceDiv">
            <div className="paperButtonBorder" onClick={props.paperButtonChoiceClick}><button className="paperButton"></button></div>
            <div className="rockButtonBorder" onClick={props.rockButtonChoiceClick}><button className="rockButton"></button></div>
            <div className="scissorButtonBorder" onClick={props.scissorsButtonChoiceClick}><button className="scissorButton"></button></div>
            <div className="lizardButtonBorder" onClick={props.rockButtonChoiceClick}><button className="lizardButton"></button></div>
            <div className="spockButtonBorder" onClick={props.scissorsButtonChoiceClick}><button className="spockButton"></button></div>
        </div>
        </div>
    )
}
