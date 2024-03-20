import React, { useRef } from "react";
import "./Planet.css";
import MercuryImg from "../../images/planet-mercury.svg";
import VenusImg from "../../images/planet-venus.svg";
import EarthImg from "../../images/planet-earth.svg";
import MarsImg from "../../images/planet-mars.svg";
import JupiterImg from "../../images/planet-jupiter.svg";
import SaturnImg from "../../images/planet-saturn.svg";
import UranusImg from "../../images/planet-uranus.svg";
import NeptuneImg from "../../images/planet-neptune.svg";

export type planetType =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

interface PlanetProps {
  planet: planetType;
  onClick: (planet: HTMLDivElement) => void;
  isSelected: boolean;
  isGame: boolean;
}

const planetProperties = {
  mercury: { src: MercuryImg, scale: 0.4, left: 10, top: 15 },
  venus: { src: VenusImg, scale: 0.8, left: 16, top: 25 },
  earth: { src: EarthImg, scale: 1, left: 24, top: 35 },
  mars: { src: MarsImg, scale: 0.8, left: 33, top: 45 },
  jupiter: { src: JupiterImg, scale: 2.5, left: 42, top: 55 },
  saturn: { src: SaturnImg, scale: 2, left: 58, top: 65 },
  uranus: { src: UranusImg, scale: 1.5, left: 72, top: 75 },
  neptune: { src: NeptuneImg, scale: 1.5, left: 85, top: 85 },
};

const Planet: React.FC<PlanetProps> = ({
  planet,
  onClick,
  isSelected,
  isGame,
}) => {
  const {
    src: planetSrc,
    scale: planetScale,
    left: planetLeft,
    top: planetTop,
  } = planetProperties[planet] || {};

  const activeClass = `${isSelected ? "active" : "inactive"}`;

  const planetRef = useRef<HTMLDivElement | null>(null);

  const getSelectedStyle = (): React.CSSProperties => {
    return {};
  };

  const getGameStyle = (): React.CSSProperties => {
    return {
      height: "30px",
      width: "30px",
      left: "3vw",
      opacity: "0.2",
      top: `${planetTop}vh`,
    };
  };

  const getDefaultStyle = (): React.CSSProperties => {
    return {
      height: `${100 * planetScale}px`,
      width: `${100 * planetScale}px`,
      left: `${planetLeft}vw`,
      top: "auto",
    };
  };

  const planetStyle: React.CSSProperties = isSelected
    ? getSelectedStyle()
    : isGame
    ? getGameStyle()
    : getDefaultStyle();

  return (
    <div
      ref={planetRef}
      className={`${planet}-img-box planet-img-box ${activeClass}`}
      onClick={() => {
        if (planetRef.current) {
          onClick(planetRef.current);
        }
      }}
      style={planetStyle}
    >
      <img
        className={`${planet}-img planet-img`}
        src={planetSrc}
        alt={`${planet}`}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default Planet;
