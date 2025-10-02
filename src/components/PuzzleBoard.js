import React from 'react';
import './PuzzleBoard.css';
import Scream from '../images/scream.jpg';
import Cafe from '../images/cafe_terrace.jpg';

function PuzzleBoard() {
  return (
    <div className="PuzzleBoard">
      <div className="puzzle-images">
        <img src={Scream} alt="Scream" className="puzzle-image" />
        <img src={Cafe} alt="Cafe Terrace" className="puzzle-image" />
      </div>
    </div>
  );
}

export default PuzzleBoard;

