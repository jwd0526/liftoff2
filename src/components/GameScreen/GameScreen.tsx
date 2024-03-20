import React from "react";
import "./GameScreen.css";
import { planetType } from "../Planet/Planet";

interface GameScreenProps {
  planet: planetType;
}

const GameScreen: React.FC<GameScreenProps> = ({ planet }) => {
  let planetPercs: string;
  switch (planet) {
    case "mercury":
      planetPercs = "Mercury specific value";
      break;
    case "venus":
      planetPercs = "Venus specific value";
      break;
    case "earth":
      planetPercs = "Earth specific value";
      break;
    case "mars":
      planetPercs = "Mars specific value";
      break;
    case "jupiter":
      planetPercs = "Jupiter specific value";
      break;
    case "saturn":
      planetPercs = "Saturn specific value";
      break;
    case "uranus":
      planetPercs = "Uranus specific value";
      break;
    case "neptune":
      planetPercs = "Neptune specific value";
      break;
    default:
      planetPercs = "default value";
      break;
  }
  return <div className="game-container"></div>;
};

export default GameScreen;
