import React from 'react';
import './rules.css';
import rulesImage from '../images/image-rules.svg';

export default function Rules(props) {
    return (
        <div className="rulesCard">
            <div className="titleAndCloseButton">
                <h1 className="rulesTitle">RULES</h1>
                <button className="closeButton" onClick={props.closeButtonClick}></button>
            </div>
            <img src={rulesImage} className="rulesImage" alt="rules" />
        </div>
    )
}
