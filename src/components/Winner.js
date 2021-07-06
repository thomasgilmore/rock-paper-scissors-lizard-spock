import React from 'react';
import './winner.css';

export default function Winner(props) {
    return (
        <div>
        <div className="containerDesktop">
            <div className="youPickedDiv">
                <h2 className="youPickedTitle">YOU PICKED</h2>
                <div className={props.playersChoice === "rock" ? "rockButtonBorderWinner" : props.playersChoice === "paper" ? "paperButtonBorderWinner" : "scissorButtonBorderWinner"} onClick={null}><button className={props.playersChoice === "rock" ? "rockButtonWinner" : props.playersChoice === "paper" ? "paperButtonWinner" : "scissorButtonWinner"}></button></div>
            </div>
            <div className="winnerIsDiv">
                <h1 className="winnerIsTitle">{props.playerIsWinner === true ? "YOU WIN" : props.computerIsWinner === true ? "YOU LOSE" : "TIE"}</h1>
                <button className="playAgainButton" onClick={props.playAgain}>PLAY AGAIN</button>
            </div>
            <div className="theHousePickedDiv">
                <h2 className="theHousePickedTitle">THE HOUSE PICKED</h2>
                <div className={props.computersChoice === "rock" ? "rockButtonBorderWinner" : props.computersChoice === "paper" ? "paperButtonBorderWinner" : "scissorButtonBorderWinner"} onClick={null}><button className={props.computersChoice === "rock" ? "rockButtonWinner" : props.computersChoice === "paper" ? "paperButtonWinner" : "scissorButtonWinner"}></button></div>
            </div>
        </div>
        <div className="containerMobile">
            <div className="youPickedDiv">
                <h2 className="youPickedTitle">YOU PICKED</h2>
                <div className={props.playersChoice === "rock" ? "rockButtonBorderWinner" : props.playersChoice === "paper" ? "paperButtonBorderWinner" : "scissorButtonBorderWinner"} onClick={null}><button className={props.playersChoice === "rock" ? "rockButtonWinner" : props.playersChoice === "paper" ? "paperButtonWinner" : "scissorButtonWinner"}></button></div>
            </div>
            <div className="theHousePickedDiv">
                <h2 className="theHousePickedTitle">THE HOUSE PICKED</h2>
                <div className={props.computersChoice === "rock" ? "rockButtonBorderWinner" : props.computersChoice === "paper" ? "paperButtonBorderWinner" : "scissorButtonBorderWinner"} onClick={null}><button className={props.computersChoice === "rock" ? "rockButtonWinner" : props.computersChoice === "paper" ? "paperButtonWinner" : "scissorButtonWinner"}></button></div>
            </div>
        </div>
        <div className="winnerIsDivMobile">
                <h1 className="winnerIsTitle">{props.playerIsWinner === true ? "YOU WIN" : props.computerIsWinner === true ? "YOU LOSE" : "TIE"}</h1>
                <button className="playAgainButton" onClick={props.playAgain}>PLAY AGAIN</button>
            </div>
        </div>
    )
}
