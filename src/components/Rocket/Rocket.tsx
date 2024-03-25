import "./Rocket.css";
import RocketImg from "../../images/rocket.svg";

import React, { useRef } from "react";
import classNames from "classnames";

interface RocketProps {
  launched: boolean;
  isGame: boolean;
  onRocketClick: (rocketObject: HTMLDivElement) => void;
}

const Rocket: React.FC<RocketProps> = ({ launched, isGame, onRocketClick }) => {
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const isUpgrading = rocketRef.current?.classList.contains("upgrades");

  const currentClass = classNames({
    orbiting: isGame && !isUpgrading,
    "pre-launch": !isGame && !isUpgrading,
    upgrades: isGame && isUpgrading,
  });

  const imgBoxClass = classNames({
    "orbiting-img-box": isGame && !isUpgrading,
    "pre-launch-img-box": !isGame && !isUpgrading,
    "upgrades-img-box": isGame && isUpgrading,
  });

  return (
    <div ref={rocketRef} className={`rocket-container ${currentClass}`}>
      <div className={`rocket-img-box ${imgBoxClass}`}>
        <img
          className="rocket-img"
          src={RocketImg}
          alt="rocket"
          onClick={() => {
            if (rocketRef.current) {
              onRocketClick(rocketRef.current);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Rocket;
