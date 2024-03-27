import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import Rocket from "./components/Rocket";
import Sun from "./components/Sun";
import Planet from "./components/Planet";
import { planetType } from "./components/Planet/Planet";

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

const generateStars = (container: HTMLDivElement, numStars: number) => {
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

const App: React.FC = () => {
  const starContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [planetObject, setPlanetObject] = useState<HTMLElement | null>(null);
  const [rocketObject, setRocketObject] = useState<HTMLElement | null>(null);
  const [rocketBoxObject, setRocketBoxObject] = useState<HTMLElement | null>(
    null
  );
  const [isGame, setIsGame] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [angleFeedback, setAngleFeedback] = useState<string>("");

  const managePlanetClick = (planet: HTMLDivElement) => {
    setPlanetObject(planet.parentElement);
    const planetString = planet.classList[0].toString().split("-")[0];
    setSelectedPlanet(planetString);
    setIsGame(true);
    rocketObject?.classList.remove("upgrades");
    rocketBoxObject?.classList.remove("upgrades-img-box");
    rocketObject?.classList.remove("launched");
    rocketBoxObject?.classList.remove("launched-img-box");
    setGameStarted(false);
  };

  const manageRocketClick = () => {
    const upgradesBox: HTMLDivElement =
      rocketObject?.firstElementChild as HTMLDivElement;
    setRocketBoxObject(upgradesBox);
    rocketObject?.classList.remove("pre-launch");
    rocketObject?.classList.add("upgrades");
    rocketBoxObject?.classList.remove("pre-launch-img-box");
    rocketBoxObject?.classList.add("upgrades-img-box");
    setGameStarted(false);
    setIsGame(true);
  };

  const manageRightClick = () => {
    setIsGame(false);
    setSelectedPlanet(null);
    planetObject?.classList.remove("active");
    planetObject?.classList.add("inactive");
    rocketObject?.classList.remove("upgrades");
    rocketBoxObject?.classList.remove("upgrades-img-box");
    setGameStarted(false);
  };

  const getCurrentRotation = (el: Element): number => {
    const computedStyle = getComputedStyle(el);
    const matrixString = computedStyle.transform;
    const matrixValues = matrixString.match(/[-0-9.]+/g);
    if (matrixValues && matrixValues.length === 6) {
      const [a, b] = matrixValues.map(parseFloat);
      const rotation = Math.atan2(b, a);
      const rotationDegrees = rotation * (180 / Math.PI);
      return rotationDegrees;
    } else {
      return 0;
    }
  };

  const managePlayClick = (perks: string) => {
    setGameStarted(true);
    const angle = getCurrentRotation(rocketObject as Element) - 45;
    setAngleFeedback(
      angle > -5 && angle < 5
        ? "Perfect"
        : angle > -25 && angle < -5
        ? "Slightly Late"
        : angle > 5 && angle < 25
        ? "Slightly Early"
        : angle < -25
        ? "Late"
        : angle > 25
        ? "Early"
        : "Error"
    );
  };

  useEffect(() => {
    const starContainer = starContainerRef.current;
    const numStars = 40;
    if (starContainer) generateStars(starContainer, numStars);
  }, []);

  return (
    <div className="App">
      <div className="star-container" ref={starContainerRef} />
      <StartScreen isGame={isGame} onRightClick={manageRightClick}>
        <div
          className={`angle-feedback-box`}
          style={
            gameStarted ? { visibility: "visible" } : { visibility: "hidden" }
          }>
          <p className="angle-feedback">{angleFeedback}</p>
        </div>
        <GameScreen
          planet={selectedPlanet}
          isGame={isGame}
          onPlayClick={managePlayClick}
          gameStarted={gameStarted}>
          <Rocket
            gameStarted={gameStarted}
            isGame={isGame}
            getRocketObject={(rocketObject) => setRocketObject(rocketObject)}
            onRocketClick={manageRocketClick}
          />
        </GameScreen>
        <Sun isGame={isGame} />
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
      </StartScreen>
    </div>
  );
};

export default App;
