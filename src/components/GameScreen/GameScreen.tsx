import React from "react";
import "./GameScreen.css";

interface GameScreenProps {
  stage: React.FC;
}

const GameScreen: React.FC<GameScreenProps> = ({ stage: Stage }) => {
  return (
    <div className="game-container">
      <Stage />
    </div>
  );
};

export default GameScreen;
