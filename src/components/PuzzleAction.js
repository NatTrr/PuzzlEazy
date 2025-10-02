import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PuzzleAction.css';

function PuzzleAction() {
  const location = useLocation();
  const navigate = useNavigate();
  const puzzleName = location.state?.puzzleName || "Puzzle"; // зема име од првиот екран
  const fileInputRef = useRef(null);

  const handleInsert = () => {
    fileInputRef.current.click(); // отвори скриено input поле
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      navigate("/preview", { state: { image: imageURL } });
    }
  };

  const handleCapture = () => {
    alert(`Capture е кликнат за: ${puzzleName}`);
  };

  return (
    <div className="puzzle-action">
      {/* Името на избраната puzzle од првиот екран */}
      <h2>{puzzleName}</h2>

      <div className="action-buttons">
        <button onClick={handleInsert}>Insert</button>
        <button onClick={handleCapture}>Capture</button>
      </div>

      {/* Back копче ќе враќа на првиот екран */}
      <button className="back-button" onClick={() => navigate("/")}>Back</button>

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
