import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import PuzzleBoard from './components/PuzzleBoard';
import PuzzleAction from './components/PuzzleAction';
import PreviewScreen from './components/PreviewScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Прв екран: главна игра / PuzzleBoard */}
          <Route path="/" element={<PuzzleBoard />} />
          
          {/* Втор екран: екран со Insert и Capture копчиња */}
          <Route path="/puzzle-action" element={<PuzzleAction />} />
          
          {/* Трет екран: preview на upload-ната слика */}
          <Route path="/preview" element={<PreviewScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
