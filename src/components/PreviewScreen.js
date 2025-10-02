import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PreviewScreen.css";

function PreviewScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="preview-screen">
      <div className="preview-frame">
        <img
          src={location.state.image}
          alt="Uploaded"
          className="preview-image"
        />
        {/* Back копче внатре во рамката */}
        <button
          className="back-button"
          onClick={() => navigate("/puzzle-action")}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default PreviewScreen;
