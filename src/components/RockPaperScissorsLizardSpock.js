import React, { Component } from 'react';
import Heading from './Heading';
import logo from '../images/logo-bonus.svg';
import './rockpaperscissorslizardspock.css';
import PlayersChoice from './PlayersChoice';
import RulesButton from './RulesButton';
import Rules from './Rules';
import Winner from './Winner';

export default class RockPaperScissorsLizardSpock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            rulesOpen: false,
            playersChoice: '',
            playerChose: false,
            computersChoice: '',
            isTie: false,
            playerIsWinner: false,
            computerIsWinner: false
        };
        this.rulesButtonClick = this.rulesButtonClick.bind(this);
        this.closeButtonClick = this.closeButtonClick.bind(this);
        this.computersChoice = this.computersChoice.bind(this);
        this.winner = this.winner.bind(this);
        this.rockButtonChoiceClick = this.rockButtonChoiceClick.bind(this);
        this.paperButtonChoiceClick = this.paperButtonChoiceClick.bind(this);
        this.scissorsButtonChoiceClick = this.scissorsButtonChoiceClick.bind(this);
        this.lizardButtonChoiceClick = this.lizardButtonChoiceClick.bind(this);
        this.spockButtonChoiceClick = this.spockButtonChoiceClick.bind(this);
        this.playAgain = this.playAgain.bind(this);
    }

    rulesButtonClick() {
        this.state.rulesOpen ? this.setState({ rulesOpen: false }) : this.setState({ rulesOpen: true });
    }

    closeButtonClick() {
        this.setState({ rulesOpen: false });
    }

    computersChoice() {
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        if (randomNumber === 1) {
            return 'rock';
        } else if (randomNumber === 2) {
            return 'paper';
        } else if (randomNumber === 3) {
            return 'scissors';
        } else if (randomNumber === 4) {
            return 'lizard';
        } else {
            return 'spock';
        }
    }

    winner(playersChoice, computersChoice) {
        let score = this.state.score;
        let isTie = this.state.isTie;
        let playerIsWinner = this.state.playerIsWinner;
        let computerIsWinner = this.state.computerIsWinner;
        if (playersChoice === "rock") {
            if (computersChoice === "rock") {
                isTie = true;
            } else if (computersChoice === "paper") {
                score -= 1;
                computerIsWinner = true;
            } else if (computersChoice === "scissors") {
                score += 1;
                playerIsWinner = true;
            } else if (computersChoice === "lizard") {
                score += 1;
                playerIsWinner = true;
            } else if (computersChoice === "spock") {
                score -= 1;
                computerIsWinner = true;
            }
        } else if (playersChoice === "paper") {
            if (computersChoice === "rock") {
                score += 1;
                playerIsWinner = true;
            } else if (computersChoice === "paper") {
                isTie = true;
            } else if (computersChoice === "scissors") {
                score -= 1;
                computerIsWinner = true;
            } else if (computersChoice === "lizard") {
                score -= 1;
                computerIsWinner = true;
            } else if (computersChoice === "spock") {
                score += 1;
                playerIsWinner = true;
            }
        } else if (playersChoice === "scissors") {
            if (computersChoice === "rock") {
                score -= 1;
                computerIsWinner = true;
            } else if (computersChoice === "paper") {
                score += 1;
                playerIsWinner = true;
            } else if (computersChoice === "scissors") {
                isTie = true;
            } else if (computersChoice === "lizard") {
                score += 1;
                playerIsWinner = true;
            } else if (computersChoice === "spock") {
                score -= 1;
                computerIsWinner = true;
            }
        } else if (playersChoice === "lizard") {
            if (computersChoice === "rock") {
                score -= 1;
                computerIsWinner = true;
            } else if (computersChoice === "paper") {
                score += 1;
                playerIsWinner = true;
            } else if (computersChoice === "scissors") {
                score -= 1;
                computerIsWinner = true;
            } else if (computersChoice === "lizard") {
                isTie = true;
            } else if (computersChoice === "spock") {
                score += 1;
                playerIsWinner = true;
            }
        } else if (playersChoice === "spock") {
            if (computersChoice === "rock") {
                score += 1;
                playerIsWinner = true;
            } else if (computersChoice === "paper") {
                score -= 1;
                computerIsWinner = true;
            } else if (computersChoice === "scissors") {
                score += 1;
                playerIsWinner = true;
            } else if (computersChoice === "lizard") {
                score -= 1;
                computerIsWinner = true;
            } else if (computersChoice === "spock") {
                isTie = true;
            }
        }
        this.setState({ score, isTie, playerIsWinner, computerIsWinner });
    }

    rockButtonChoiceClick() {
        let playersChoice = 'rock';
        let computersChoice = this.computersChoice();
        this.winner(playersChoice, computersChoice);
        this.setState({ playersChoice, playerChose: true, computersChoice });
    }

    paperButtonChoiceClick() {
        let playersChoice = 'paper';
        let computersChoice = this.computersChoice();
        this.winner(playersChoice, computersChoice);
        this.setState({ playersChoice, playerChose: true, computersChoice });
    }

    scissorsButtonChoiceClick() {
        let playersChoice = 'scissors';
        let computersChoice = this.computersChoice();
        this.winner(playersChoice, computersChoice);
        this.setState({ playersChoice, playerChose: true, computersChoice});
    }

    lizardButtonChoiceClick() {
        let playersChoice = 'lizard';
        let computersChoice = this.computersChoice();
        this.winner(playersChoice, computersChoice);
        this.setState({ playersChoice, playerChose: true, computersChoice });
    }

    spockButtonChoiceClick() {
        let playersChoice = 'spock';
        let computersChoice = this.computersChoice();
        this.winner(playersChoice, computersChoice);
        this.setState({ playersChoice, playerChose: true, computersChoice});
    }

    playAgain() {
        console.log("working");
        this.setState({ playerChose: false, playerIsWinner: false, computerIsWinner: false, isTie: false });
    }

    render() {
        return (
            <div>
                <Heading img={logo} score={this.state.score} />
                {this.state.playerChose ? <Winner playersChoice={this.state.playersChoice}
                    computersChoice={this.state.computersChoice} 
                    isTie={this.state.isTie}
                    playerIsWinner={this.state.playerIsWinner}
                    computerIsWinner={this.state.computerIsWinner}
                    playAgain={this.playAgain} /> 
                    : 
                    <PlayersChoice rockButtonChoiceClick={this.rockButtonChoiceClick}
                    paperButtonChoiceClick={this.paperButtonChoiceClick}
                    scissorsButtonChoiceClick={this.scissorsButtonChoiceClick}
                    lizardButtonChoiceClick={this.lizardButtonChoiceClick}
                    spockButtonChoiceClick={this.spockButtonChoiceClick} />
                }
                <RulesButton rulesButtonClick={this.rulesButtonClick} />
                {this.state.rulesOpen ? <Rules closeButtonClick={this.closeButtonClick} /> : null}
            </div>
        )
    }
}
