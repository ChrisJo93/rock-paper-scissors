import React, { useState } from 'react';

export default function Game() {
  const [state, setState] = useState({
    player: '',
    opponent: '',
    won: false,
    newGame: false,
    playerScore: 0,
    opponentScore: 0,
  });

  const findWinner = () => {
    // compare hands using switch statements to handle ties or greater than situations.
    //run new game function
  };

  const opponentPick = () => {
    //Pick random hand at beginning of turn and store to state.
  };

  const handlePickEvent = () => {
    //   On selection, store to state and run findWinner function to compare hands.
  };

  const newGame = () => {
    //   reset game state and add to score
  };

  return null;
}
