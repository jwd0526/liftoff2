import React, { useMemo, useRef } from "react";
import "./Rocket.css";
import RocketImg from "../../images/rocket.svg";

interface RocketProps {
  launched: boolean;
  isGame: boolean;
  onRocketClick: (rocketObject: HTMLDivElement) => void;
}

const Rocket: React.FC<RocketProps> = ({ launched, isGame, onRocketClick }) => {
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const isUpgrading = rocketRef.current?.classList.contains("upgrades");
  const currentClass = useMemo(() => {
    if (isGame && !isUpgrading) {
      return "orbiting";
    } else if (!isUpgrading) {
      return "pre-launch";
    } else {
      return "upgrades";
    }
  }, [isGame, isUpgrading]);

  const imgBoxClass = useMemo(() => {
    if (isGame && !isUpgrading) {
      return "orbiting-img-box";
    } else if (!isUpgrading) {
      return "pre-launch-img-box";
    } else {
      return "";
    }
  }, [isGame, isUpgrading]);

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
