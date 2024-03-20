import React, { useRef } from "react";
import "./PlanetImage.css";
import MercuryImg from "../../images/planet-mercury.svg";
import VenusImg from "../../images/planet-venus.svg";
import EarthImg from "../../images/planet-earth.svg";
import MarsImg from "../../images/planet-mars.svg";
import JupiterImg from "../../images/planet-jupiter.svg";
import SaturnImg from "../../images/planet-saturn.svg";
import UranusImg from "../../images/planet-uranus.svg";
import NeptuneImg from "../../images/planet-neptune.svg";

interface PlanetImageProps {
  planet: string;
  scale: number;
  onClick: (planet: HTMLDivElement) => void;
  isSelected: boolean;
}

const PlanetImage: React.FC<PlanetImageProps> = ({
  planet,
  onClick,
  isSelected,
}) => {
  let planetSrc;
  let planetScale = 1;
  let planetLeft;

  switch (planet) {
    case "mercury":
      planetSrc = MercuryImg;
      planetScale = 0.4;
      planetLeft = 10;
      break;
    case "venus":
      planetSrc = VenusImg;
      planetScale = 0.8;
      planetLeft = 16;
      break;
    case "earth":
      planetSrc = EarthImg;
      planetScale = 1;
      planetLeft = 24;
      break;
    case "mars":
      planetSrc = MarsImg;
      planetScale = 0.8;
      planetLeft = 33;
      break;
    case "jupiter":
      planetSrc = JupiterImg;
      planetScale = 2.5;
      planetLeft = 42;
      break;
    case "saturn":
      planetSrc = SaturnImg;
      planetScale = 2;
      planetLeft = 58;
      break;
    case "uranus":
      planetSrc = UranusImg;
      planetScale = 1.5;
      planetLeft = 72;
      break;
    case "neptune":
      planetSrc = NeptuneImg;
      planetScale = 1.5;
      planetLeft = 85;
      break;
  }

  const activeClass = isSelected ? "active" : "inactive";
  const planetRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={planetRef}
      className={`${planet}-img-box planet-img-box ${activeClass}`}
      style={{
        height: 100 * planetScale + "px",
        width: 100 * planetScale + "px",
        left: planetLeft + "vw",
      }}
      onClick={() => {
        if (planetRef.current) {
          onClick(planetRef.current);
        }
      }}>
      <img
        className={`${planet}-img planet-img`}
        src={planetSrc}
        alt={`${planet}`}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default PlanetImage;
