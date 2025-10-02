import React, { useState } from 'react';
import './PuzzleBoard.css';
import Scream from '../images/scream.jpg';
import Cafe from '../images/cafe_terrace.jpg';
import PuzzleAction from './PuzzleAction';

function PuzzleBoard() {
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);

  const handleImageClick = (puzzleName) => {
    setSelectedPuzzle(puzzleName);
  };

  const handleBack = () => {
    setSelectedPuzzle(null);
  };

  // Ако е избрана слика, прикажи PuzzleAction компонентата
  if (selectedPuzzle) {
    return <PuzzleAction puzzleName={selectedPuzzle} onBack={handleBack} />;
  }

  // Основен екран со слики
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
          onClick={() => handleImageClick("Cafe Terrace")}
        />
      </div>
    </div>
  );
}

export default PuzzleBoard;
