import React from "react";
import "./GameScreen.css";

interface GameScreenProps {
  children: React.ReactNode;
}

const GameScreen: React.FC<GameScreenProps> = ({ children }) => {
  return <div className="game-container">{children}</div>;
};

export default GameScreen;
