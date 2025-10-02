import React from 'react';
import './StartScreen.css';
import scream from '../images/scream.jpg';
import cafe from '../images/cafe_terrace.jpg';

function StartScreen({ onSelectPuzzle }) {
  return (
    <div className="start-screen">
      <h1>PuzzlEazy</h1>
      <div className="puzzle-options">
        <div className="puzzle-card" onClick={() => onSelectPuzzle('scream')}>
          <img src={scream} alt="Scream" />
          <p>Scream</p>
        </div>
        <div className="puzzle-card" onClick={() => onSelectPuzzle('cafe')}>
          <img src={cafe} alt="Café Terrace at Night" />
          <p>Café Terrace at Night</p>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
