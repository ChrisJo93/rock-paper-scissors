import React, { useState } from 'react';
import { rock, paper, scissors } from './assets/data';
import './game.css';

export default function Game() {
  const [state, setState] = useState({
    player: '',
    opponent: '',
    playerScore: 0,
    opponentScore: 0,
  });

  const findWinner = () => {
    // compare hands using switch statements to handle ties or greater than situations.
    //run new game function
  };

  const opponentPick = (hand) => {
    console.log(hand);
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
