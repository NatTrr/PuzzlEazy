import React from 'react';
import './PuzzleAction.css';

function PuzzleAction({ puzzleName, onBack }) {
  const handleInsert = () => {
    alert(`Insert е кликнат за: ${puzzleName}`);
  };

  const handleCapture = () => {
    alert(`Capture е кликнат за: ${puzzleName}`);
  };

  return (
    <div className="puzzle-action">
      <h2>{puzzleName}</h2>
      <div className="action-buttons">
        <button onClick={handleInsert}>Insert</button>
        <button onClick={handleCapture}>Capture</button>
      </div>
      <button className="back-button" onClick={onBack}>Back</button>
    </div>
  );
}

export default PuzzleAction;
