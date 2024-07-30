"use client";
import { useState } from "react";

function WelcomeDialog({ onSelectGrid }: any) {
  const [selectedSize, setSelectedSize] = useState(3);

  const handleSelectChange = (event: any) => {
    setSelectedSize(parseInt(event.target.value));
  };

  const handleStartGame = () => {
    onSelectGrid(selectedSize);
  };

  return (
    <div className="welcome-dialog">
      <h2>Welcome to Tic-Tac-Toe Game</h2>
      <p>Select your grid size:</p>
      <select
        className="select"
        value={selectedSize}
        onChange={handleSelectChange}
      >
        <option value={3}>3x3</option>
        <option value={4}>4x4</option>
        <option value={5}>5x5</option>
      </select>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default WelcomeDialog;
