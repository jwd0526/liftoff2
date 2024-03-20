import "./StartScreen.css";
import React, { useEffect, useState } from "react";
import Planet from "../Planet";
import { planetType } from "../Planet/Planet";
import RightArrow from "../../images/rightArrow.svg";
import Sun from "../Sun";
import Rocket from "../Rocket";

const PLANETS = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

const generateStars = (container: HTMLElement, numStars: number) => {
  const containerRect = container.getBoundingClientRect();

  const stars = Array.from({ length: numStars }).map(() => {
    const star = document.createElement("div");
    star.classList.add("star");
    const starSize = Math.random() * (3 - 1) + 1; // Generate random size
    const starX = Math.random() * (containerRect.width - starSize); // Random X
    const starY = Math.random() * (containerRect.height - starSize); // Random Y
    star.style.left = `${starX}px`;
    star.style.top = `${starY}px`;
    star.style.opacity = (Math.random() * (0.7 - 0.2) + 0.2).toString(); // Generate random opacity
    star.style.width = `${starSize}px`;
    star.style.height = `${starSize}px`;
    return star;
  });

  container.append(...stars);
};

const StartScreen: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [planetObject, setPlanetObject] = useState<HTMLDivElement | null>(null);
  const [isGame, setIsGame] = useState<boolean>(false);

  const managePlanetClick = (planet: HTMLDivElement) => {
    setPlanetObject(planet);
    const planetString = planet.classList[0].toString().split("-")[0];
    setSelectedPlanet(planetString);
    setIsGame(true);
  };

  useEffect(() => {
    const starContainer = document.querySelector(
      ".star-container"
    ) as HTMLElement;
    const numStars = 40;

    generateStars(starContainer, numStars);
  }, []);

  return (
    <div className="start-container">
      <Rocket isGame launched />
      <div className="star-container"></div>
      <div
        className="sun-container"
        style={isGame ? { left: "-130vw" } : { left: "-100vw" }}>
        <Sun />
      </div>
      <div className="planets-container">
        {PLANETS.map((planet) => (
          <Planet
            key={planet}
            planet={planet as planetType}
            onClick={managePlanetClick}
            isSelected={selectedPlanet === planet}
            isGame={isGame}
          />
        ))}
      </div>
      <div className="right-img-box">
        <img
          className="right-img"
          src={RightArrow}
          alt="right"
          onClick={() => {
            setIsGame(false);
            setSelectedPlanet(null);
            planetObject?.classList.remove("active");
            planetObject?.classList.add("inactive");
          }}
        />
      </div>
    </div>
  );
};

export default StartScreen;
