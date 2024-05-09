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
  onPlayClick: (perks: string[]) => void;
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
  let planetPercs: string[];
  let planetComponent: ReactNode | null = null;

  const inGameClass = gameStarted ? "in-game" : "";

  switch (planet) {
    case "mercury":
      planetPercs = ["Gravity: 3.7 m/s²", "Launch Velocity: 4.3 km/s"];
      planetComponent = <Mercury />;
      break;
    case "venus":
      planetPercs = ["Gravity: 8.87 m/s²", "Launch Velocity: 10.36 km/s"];
      planetComponent = <Venus />;
      break;
    case "earth":
      planetPercs = ["Gravity: 9.81 m/s²", "Launch Velocity: 11.19 km/s"];
      planetComponent = <Earth />;
      break;
    case "mars":
      planetPercs = ["Gravity: 3.71 m/s²", "Launch Velocity: 5.03 km/s"];
      planetComponent = <Mars />;
      break;
    case "jupiter":
      planetPercs = ["Gravity: 24.79 m/s²", "Launch Velocity: 59.5 km/s"];
      planetComponent = <Jupiter />;
      break;
    case "saturn":
      planetPercs = ["Gravity: 10.44 m/s²", "Launch Velocity: 35.5 km/s"];
      planetComponent = <Saturn />;
      break;
    case "uranus":
      planetPercs = ["Gravity: 8.69 m/s²", "Launch Velocity: 21.3 km/s"];
      planetComponent = <Uranus />;
      break;
    case "neptune":
      planetPercs = ["Gravity: 11.15 m/s²", "Launch Velocity: 23.5 km/s"];
      planetComponent = <Neptune />;
      break;
    default:
      planetPercs = ["Upgrades"];
      planetComponent = <Upgrade isGame={isGame} />;
      break;
  }

  return (
    <div className={"game-container"}>
      <div className="stats-container">
        <div className="stats-box">
          <p className="stats">Flight Information</p>
          <div className="planet-info">
            <p className="planet-name">Starting planet: {planet}</p>
            <p className="planet-grav">{planetPercs[0]}</p>
            <p className="planet-velo">{planetPercs[1]}</p>
            <div className="acitve-perks">Active Perks: </div>
          </div>
        </div>
      </div>
      <div
        style={planetPercs[0] === "Upgrades" ? { opacity: 0 } : {}}
        className={`launch-guide-box ${gameClass} ${inGameClass}`}>
        <img
          className="launch-guide-img"
          src={launchAngle}
          alt="launch-guide"
        />
      </div>
      <div
        style={planetPercs[0] === "Upgrades" ? { opacity: 0 } : {}}
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
        <p className="planet-perks">
          {planet ? planet.charAt(0).toUpperCase() + planet.slice(1) : null}
        </p>
      </div>

      {children}
    </div>
  );
};

export default GameScreen;
