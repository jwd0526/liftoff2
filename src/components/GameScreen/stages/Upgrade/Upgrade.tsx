import React from "react";
import "./Upgrade.css";
import UpgradePanel from "./UpgradePanel";
import classNames from "classnames";

const UPGRADE_TYPE: string[] = ["Thrusters", "Fuel Cell", "Hull"];

interface UpgradeProps {
  isGame: boolean;
}

const Lines: React.FC = () => {
  return (
    <>
      <div className="directional-line fuel-line">
        <div className="line fuel-l1" />
        <div className="line fuel-l2" />
      </div>
      <div className="directional-line thrusters-line">
        <div className="line thrusters-l1" />
        <div className="line thrusters-l2" />
      </div>
      <div className="directional-line hull-line">
        <div className="line hull-l1" />
        <div className="line hull-l2" />
      </div>
    </>
  );
};

const Upgrade: React.FC<UpgradeProps> = ({ isGame }) => {
  const visibleClass = classNames({
    show: isGame,
    hidden: !isGame,
  });

  return (
    <div className={`upgrade-container ${visibleClass} hidden`}>
      <Lines />
      <div className="upgrade-container">
        <UpgradePanel upgradeType={UPGRADE_TYPE[0]} />
        <UpgradePanel upgradeType={UPGRADE_TYPE[1]} />
        <UpgradePanel upgradeType={UPGRADE_TYPE[2]} />
      </div>
    </div>
  );
};

export default Upgrade;
