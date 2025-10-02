import React from 'react';
import './PuzzleBoard.css';
import Scream from '../images/scream.jpg';
import Cafe from '../images/cafe_terrace.jpg';
import { useNavigate } from 'react-router-dom';

function PuzzleBoard() {
  const navigate = useNavigate();

  const handleImageClick = (puzzleName) => {
    // Преку navigate праќаме state до PuzzleAction
    navigate("/puzzle-action", { state: { puzzleName } });
  };

  return (
    <div className="PuzzleBoard">
      <div className="puzzle-images">
        <img 
          src={Scream} 
          alt="Scream" 
          className="puzzle-image" 
          onClick={() => handleImageClick("The Scream")}
        />
        <img 
          src={Cafe} 
          alt="Cafe Terrace" 
          className="puzzle-image" 
          onClick={() => handleImageClick("Café Terrace at Night")}
        />
      </div>
    </div>
  );
}

export default PuzzleBoard;
