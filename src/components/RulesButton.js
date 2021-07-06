import React from 'react';
import './rulesbutton.css';

export default function RulesButton(props) {
    return (
        <div className="rulesButtonDiv">
            <button className="rulesButton" onClick={props.rulesButtonClick}>RULES</button>
        </div>
    )
}
