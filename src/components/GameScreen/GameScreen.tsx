import React, { ReactNode } from "react";
import "./GameScreen.css";
import Upgrade from "./stages/Upgrade";
import Mercury from "./stages/Mercury";
import Venus from "./stages/Venus";
import Earth from "./stages/Earth";
import Mars from "./stages/Mars";
import Jupiter from "./stages/Jupiter";
import Saturn from "./stages/Saturn";
import Uranus from "./stages/Uranus";
import Neptune from "./stages/Neptune";

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
  let planetComponent: ReactNode | null = null;

  switch (planet) {
    case "mercury":
      planetPercs = "Mercury specific value";
      planetComponent = <Mercury />;
      break;
    case "venus":
      planetPercs = "Venus specific value";
      planetComponent = <Venus />;
      break;
    case "earth":
      planetPercs = "Earth specific value";
      planetComponent = <Earth />;
      break;
    case "mars":
      planetPercs = "Mars specific value";
      planetComponent = <Mars />;
      break;
    case "jupiter":
      planetPercs = "Jupiter specific value";
      planetComponent = <Jupiter />;
      break;
    case "saturn":
      planetPercs = "Saturn specific value";
      planetComponent = <Saturn />;
      break;
    case "uranus":
      planetPercs = "Uranus specific value";
      planetComponent = <Uranus />;
      break;
    case "neptune":
      planetPercs = "Neptune specific value";
      planetComponent = <Neptune />;
      break;
    default:
      planetPercs = "Upgrades";
      planetComponent = <Upgrade isGame={isGame} />;
      break;
  }

  return (
    <div className={"game-container"}>
      {isGame ? planetComponent : null}
      <div className={`planet-perks-box ${gameClass}`}>
        <p className="planet-perks">{planetPercs}</p>
      </div>
      {children}
    </div>
  );
};

export default GameScreen;
