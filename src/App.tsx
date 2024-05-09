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

const App: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [planetObject, setPlanetObject] = useState<HTMLElement | null>(null);
  const [rocketObject, setRocketObject] = useState<HTMLElement | null>(null);
  const [rocketBoxObject, setRocketBoxObject] = useState<HTMLElement | null>(
    null
  );
  const [rocketAnimation, setRocketAnimation] = useState<string>("unset");
  const [isGame, setIsGame] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [angleFeedback, setAngleFeedback] = useState<string>("");
  const [planetScale, setPlanetScale] = useState<number>(1);

  const farRef = useRef<HTMLDivElement | null>(null);
  const midRef = useRef<HTMLDivElement | null>(null);
  const nearRef = useRef<HTMLDivElement | null>(null);
  const starContainersRef = useRef<HTMLDivElement | null>(null);
  const [farTopVal, setFarTopVal] = useState<number>(0);
  const [midTopVal, setMidTopVal] = useState<number>(0);
  const [nearTopVal, setNearTopVal] = useState<number>(0);
  const farRef2 = useRef<HTMLDivElement | null>(null);
  const midRef2 = useRef<HTMLDivElement | null>(null);
  const nearRef2 = useRef<HTMLDivElement | null>(null);
  const [gameSpeed, setGameSpeed] = useState<number>(0.2);

  const managePlanetClick = (planet: HTMLDivElement, planetScale: number) => {
    setIsGame(true);
    setGameStarted(false);

    rocketObject?.classList.remove("upgrades");
    rocketBoxObject?.classList.remove("upgrades-img-box");
    rocketObject?.classList.remove("launched");
    rocketBoxObject?.classList.remove("launched-img-box");
    setPlanetObject(planet.parentElement);
    const planetString = planet.classList[0].toString().split("-")[0];
    setSelectedPlanet(planetString);
    const orbitDuration = -1 * Math.sqrt(planetScale) + 2.75;
    setPlanetScale(planetScale);
    setRocketAnimation(`orbit ${orbitDuration}s linear infinite forwards`);
  };

  const manageRocketClick = () => {
    rocketObject?.classList.remove("pre-launch");
    rocketObject?.classList.add("upgrades");
    rocketBoxObject?.classList.remove("pre-launch-img-box");
    rocketBoxObject?.classList.add("upgrades-img-box");
    setGameStarted(false);
    setIsGame(true);
    setRocketAnimation("unset");
  };

  const manageRightClick = () => {
    setIsGame(false);
    setSelectedPlanet(null);
    planetObject?.classList.remove("active");
    planetObject?.classList.add("inactive");
    rocketObject?.classList.remove("upgrades");
    rocketBoxObject?.classList.remove("upgrades-img-box");
    setGameStarted(false);
    setRocketAnimation("unset");
    rocketBoxObject?.style.setProperty("transform", "");
  };

  const getCurrentRotation = (el: Element): number => {
    const computedStyle = getComputedStyle(el);
    const matrixString = computedStyle.transform;
    console.log(matrixString);
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

  const managePlayClick = (perks: string[]) => {
    setGameStarted(true);
    const angle = getCurrentRotation(rocketObject as Element) - 45;
    console.log(angle);
    rocketBoxObject?.style.setProperty(
      "transform",
      `rotate(${-90 - angle}deg)`
    );

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

    rocketObject?.style.setProperty("animation-play-state", "paused");
  };

  useEffect(() => {
    rocketObject?.style.setProperty("animation", `${rocketAnimation}`);
  }, [rocketAnimation, rocketObject?.style]);

  const generateStars = (numStars: number, container: HTMLDivElement) => {
    const starContainer = container;
    const containerRect = starContainer.getBoundingClientRect();

    if (starContainer) {
      Array.from({ length: numStars }).map(() => {
        const star = document.createElement("div");
        star.className = "star";
        const starSize = Math.random() * (4 - 1) + 1;
        const starX = Math.random() * (containerRect.width - starSize);
        const starY = Math.random() * (containerRect.height - starSize);
        star.style.left = `${starX}px`;
        star.style.top = `${starY}px`;
        star.style.opacity = (Math.random() * (0.8 - 0.4) + 0.4).toString();
        star.style.width = `${starSize}px`;
        star.style.height = `${starSize}px`;

        starContainer.appendChild(star);
      });
    }
  };

  const resetStars = (container: HTMLDivElement) => {
    if (container) {
      container.innerHTML = "";
      generateStars(20, container);
    }
  };

  useEffect(() => {
    generateStars(20, nearRef.current as HTMLDivElement);
    generateStars(20, midRef.current as HTMLDivElement);
    generateStars(20, farRef.current as HTMLDivElement);
    generateStars(20, nearRef2.current as HTMLDivElement);
    generateStars(20, midRef2.current as HTMLDivElement);
    generateStars(20, farRef2.current as HTMLDivElement);
  }, []);

  useEffect(() => {
    if (gameStarted) {
      const starInterval = setInterval(() => {
        setFarTopVal((prevFarTopVal) => prevFarTopVal + 3 * gameSpeed);
        if (farTopVal >= 100) {
          setFarTopVal(-100);
          resetStars(farRef.current as HTMLDivElement);
        } else if (farTopVal == 0) {
          resetStars(farRef2.current as HTMLDivElement);
        }
        setMidTopVal((prevMidTopVal) => prevMidTopVal + 5 * gameSpeed);
        if (midTopVal >= 100) {
          setMidTopVal(-100);
          resetStars(midRef.current as HTMLDivElement);
        } else if (midTopVal == 0) {
          resetStars(midRef2.current as HTMLDivElement);
        }
        setNearTopVal((prevNearTopVal) => prevNearTopVal + 7 * gameSpeed);
        if (nearTopVal >= 100) {
          setNearTopVal(-100);
          resetStars(nearRef.current as HTMLDivElement);
        } else if (nearTopVal == 0) {
          resetStars(nearRef2.current as HTMLDivElement);
        }
      }, 1000 / 60);
      return () => {
        clearInterval(starInterval);
      };
    }
  }, [gameStarted, farTopVal, midTopVal, nearTopVal]);

  return (
    <div className="App">
      <div
        className="liftoff-overlay"
        style={
          gameStarted
            ? { animation: `liftoff-animation 1.7s linear forwards` }
            : { visibility: "hidden", zIndex: -1 }
        }>
        <div
          className={`angle-feedback-box`}
          style={
            gameStarted ? { visibility: "visible" } : { visibility: "hidden" }
          }>
          <p className="angle-feedback">{angleFeedback}</p>
        </div>
      </div>
      <div ref={starContainersRef} className="star-containers">
        <div
          ref={farRef}
          className="stars-container far-box"
          style={{ top: `${farTopVal}%` }}
        />
        <div
          ref={farRef2}
          className="stars-container far-box"
          style={
            farTopVal <= 0
              ? { top: `${farTopVal + 100}%` }
              : { top: `${farTopVal - 100}%` }
          }
        />
        <div
          ref={midRef}
          className="stars-container mid-box"
          style={{ top: `${midTopVal}%` }}
        />
        <div
          ref={midRef2}
          className="stars-container mid-box"
          style={
            midTopVal <= 0
              ? { top: `${midTopVal + 100}%` }
              : { top: `${midTopVal - 100}%` }
          }
        />
        <div
          ref={nearRef}
          className="stars-container near-box"
          style={{ top: `${nearTopVal}%` }}
        />
        <div
          ref={nearRef2}
          className="stars-container near-box"
          style={
            nearTopVal <= 0
              ? { top: `${nearTopVal + 100}%` }
              : { top: `${nearTopVal - 100}%` }
          }
        />
      </div>
      <StartScreen isGame={isGame} onRightClick={manageRightClick}>
        <GameScreen
          planet={selectedPlanet}
          isGame={isGame}
          onPlayClick={managePlayClick}
          gameStarted={gameStarted}>
          <Rocket
            gameStarted={gameStarted}
            isGame={isGame}
            getRocketObject={(rocketObject) => {
              setRocketObject(rocketObject);
              const rocketBox: HTMLDivElement =
                rocketObject?.firstElementChild as HTMLDivElement;
              setRocketBoxObject(rocketBox);
            }}
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
              gameStarted={gameStarted}
            />
          ))}
        </div>
      </StartScreen>
    </div>
  );
};

export default App;
