import React, { ReactNode, useRef } from "react";
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
import PlayButton from "./PlayButton";
import launchAngle from "../../images/launch-angle.svg";

interface GameScreenProps {
  planet: string | null;
  children: ReactNode;
  isGame: boolean;
  gameStarted: boolean;
  onPlayClick: (perks: string) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({
  planet,
  children,
  isGame,
  gameStarted,
  onPlayClick,
}) => {
  const playButton = useRef<HTMLDivElement | null>(null);
  const gameClass = isGame && !gameStarted ? "game-on" : "game-off";
  let planetPercs: string;
  let planetComponent: ReactNode | null = null;

  const inGameClass = gameStarted ? "in-game" : "";

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
      <div
        style={planetPercs === "Upgrades" ? { opacity: 0 } : {}}
        className={`launch-guide-box ${gameClass} ${inGameClass}`}>
        <img
          className="launch-guide-img"
          src={launchAngle}
          alt="launch-guide"
        />
      </div>
      <div
        style={planetPercs === "Upgrades" ? { opacity: 0 } : {}}
        ref={playButton}
        className={`play-button ${gameClass} ${inGameClass}`}>
        <PlayButton
          onPlayClick={() => {
            onPlayClick(planetPercs);
          }}
        />
      </div>
      {isGame ? planetComponent : null}
      <div className={`planet-perks-box ${gameClass} ${inGameClass}`}>
        <p className="planet-perks">{planetPercs}</p>
      </div>

      {children}
    </div>
  );
};

export default GameScreen;
