import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PuzzleAction.css';

function PuzzleAction() {
  const location = useLocation();
  const puzzleName = location.state?.puzzleName || "Puzzle"; // го зема името на сликата
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleInsert = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      navigate("/preview", { state: { image: imageURL, puzzleName } }); 
      // праќаме го puzzleName за да можеме да се враќаме правилно
    }
  };

  const handleCapture = () => {
    alert(`Capture е кликнат за: ${puzzleName}`);
  };

  return (
    <div className="puzzle-action">
      <h2>{puzzleName}</h2> {/* Прикажува името на избраната слика */}

      <div className="action-buttons">
        <button onClick={handleInsert}>Insert</button>
        <button onClick={handleCapture}>Capture</button>
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default PuzzleAction;
