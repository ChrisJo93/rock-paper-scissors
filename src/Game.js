import React, { useState, useEffect } from 'react';
import { rock, paper, scissors } from './assets/data';
import './game.css';

export default function Game() {
  const [state, setState] = useState({
    player: '',
    opponent: '',
    playerScore: 0,
    opponentScore: 0,
  });

  useEffect(() => {
    console.log(state.opponent);
  });

  const findWinner = () => {
    // compare hands using switch statements to handle ties or greater than situations.
    //run new game function
    let player = state.player;
    let opp = state.opponent;

    switch (true) {
      //paper cases
      case player === 'paper' && opp === 'scissors':
        alert('You lose');
        newGame();
        break;
      case player === 'paper' && opp === 'paper':
        alert('Tied');
        newGame();
        break;
      case player === 'paper' && opp === 'rock':
        alert('You win!');
        newGame();
        break;
      //scissor cases
      case player === 'scissors' && opp === 'paper':
        alert('You win');
        newGame();
        break;
      case player === 'scissors' && opp === 'scissors':
        alert('Tied');
        newGame();
        break;
      case player === 'scissors' && opp === 'rock':
        alert('You lose');
        newGame();
        break;
      //rock cases
      case player === 'rock' && opp === 'scissors':
        alert('You win');
        newGame();
        break;
      case player === 'rock' && opp === 'rock':
        alert('Tied');
        newGame();
        break;
      case player === 'rock' && opp === 'paper':
        alert('You lose');
        newGame();
        break;
      default:
        return null;
    }
  };

  const randomHand = () => {
    return Math.floor(Math.random() * 3);
  };

  const opponentPick = (hand) => {
    const choices = ['scissors', 'rock', 'paper'];
    setState({ ...state, opponent: choices[randomHand()] });
  };

  const handlePickEvent = (e, hand) => {
    setState({ ...state, [hand]: [e.target.value] });
  };

  const newGame = () => {
    setState({ ...state, player: '', opponent: '' });
  };

  return (
    <div className="game_container">
      <div>
        <img
          src={scissors.image}
          className="cards"
          alt="Cards"
          onClick={() => opponentPick('scissors')}
        />
      </div>
      <div>
        <img
          src={rock.image}
          className="cards"
          alt="Cards"
          onClick={() => opponentPick('rock')}
        />
      </div>
      <div>
        <img
          src={paper.image}
          className="cards"
          alt="Cards"
          onClick={() => opponentPick('paper')}
        />
      </div>
    </div>
  );
}
