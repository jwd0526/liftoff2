import "./StartScreen.css";
import React, { useEffect, useState } from "react";
import PlanetImage from "../../components/PlanetImage";

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

  for (let i = 0; i < numStars; i++) {
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
    container.appendChild(star);
  }
};

const StartScreen: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const managePlanetClick = (planet: HTMLDivElement) => {
    const planetString = planet.classList[0].toString().split("-")[0];
    setSelectedPlanet(planetString);
    planet.classList.add("active-planet");
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
      <div className="star-container"></div>
      <div className="planets-container">
        {PLANETS.map((planet) => (
          <PlanetImage
            key={planet}
            planet={planet}
            scale={selectedPlanet === planet ? 3 : 1}
            onClick={managePlanetClick}
            isSelected={selectedPlanet === planet}
          />
        ))}
      </div>
    </div>
  );
};

export default StartScreen;
