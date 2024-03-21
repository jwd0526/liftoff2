import React, { ReactNode } from "react";
import "./GameScreen.css";
import { planetType } from "../Planet/Planet";

interface GameScreenProps {
  planet: string | null;
  children: ReactNode;
  isGame: boolean;
}

const GameScreen: React.FC<GameScreenProps> = ({
  planet,
  children,
  isGame,
}) => {
  const gameClass = isGame ? "game-on" : "game-off";

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
      planetPercs = "Upgrades";
      break;
  }
  return (
    <div className={"game-container"}>
      <div className={`planet-perks-box ${gameClass}`}>
        <p className="planet-perks">{planetPercs}</p>
      </div>
      {children}
    </div>
  );
};

export default GameScreen;
