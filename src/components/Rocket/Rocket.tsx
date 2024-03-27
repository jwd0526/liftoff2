import "./Rocket.css";
import RocketImg from "../../images/rocket.svg";

import React, { useEffect, useRef } from "react";
import classNames from "classnames";

interface RocketProps {
  isGame: boolean;
  gameStarted: boolean;
  getRocketObject: (rocketObject: HTMLDivElement) => void;
  onRocketClick: () => void;
}

const Rocket: React.FC<RocketProps> = ({
  gameStarted,
  isGame,
  getRocketObject,
  onRocketClick,
}) => {
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const isUpgrading = rocketRef.current?.classList.contains("upgrades");

  const currentClass = classNames({
    launched: gameStarted,
    orbiting: isGame && !isUpgrading && !gameStarted,
    "pre-launch": !isGame && !isUpgrading,
    upgrades: isGame && isUpgrading,
  });

  const imgBoxClass = classNames({
    "launched-img-box": gameStarted,
    "orbiting-img-box": isGame && !isUpgrading && !gameStarted,
    "pre-launch-img-box": !isGame && !isUpgrading,
    "upgrades-img-box": isGame && isUpgrading,
  });

  useEffect(() => {
    getRocketObject(rocketRef.current as HTMLDivElement);
  }, [getRocketObject]);

  return (
    <div ref={rocketRef} className={`rocket-container ${currentClass}`}>
      <div className={`rocket-img-box ${imgBoxClass}`}>
        <img
          className="rocket-img"
          src={RocketImg}
          alt="rocket"
          onClick={onRocketClick}
        />
      </div>
    </div>
  );
};

export default Rocket;
