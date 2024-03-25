import React, { useState } from "react";
import "./Upgrade.css";
import UpgradePanel from "./UpgradePanel";
import classNames from "classnames";
import AdvancedSensors from "./perks/AdvancedSensors";
import AerofoilStabilizers from "./perks/AerofoilStabilizers";
import BoostedThrusters from "./perks/BoostedThrusters";
import EnhancedNav from "./perks/EnhancedNav";
import HeatShielding from "./perks/HeatShielding";
import MagneticProbe from "./perks/MagneticProbe";

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

  const [perksUnlocked, setPerksUnlocked] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
    false,
  ]);

  const perks: React.ReactNode[] = [
    <AdvancedSensors unlocked={perksUnlocked[0]} />,
    <AerofoilStabilizers unlocked={perksUnlocked[1]} />,
    <BoostedThrusters unlocked={perksUnlocked[2]} />,
    <EnhancedNav unlocked={perksUnlocked[3]} />,
    <HeatShielding unlocked={perksUnlocked[4]} />,
    <MagneticProbe unlocked={perksUnlocked[5]} />,
  ];

  const handlePerkClick = (perk: React.ReactNode, index: number) => {};

  return (
    <div className={`upgrade-container ${visibleClass} hidden`}>
      <Lines />
      <div className="upgrade-container">
        <div className="perk-panel-box">
          <div className="perk-panel-content">
            <h1 className="perk-panel-header">PERKS</h1>
            <div className="perks-grid">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className={`perk-grid-element p${index + 1}`}
                  onClick={() => {
                    handlePerkClick(perk, index);
                  }}>
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </div>
        <UpgradePanel upgradeType={UPGRADE_TYPE[0]} />
        <UpgradePanel upgradeType={UPGRADE_TYPE[1]} />
        <UpgradePanel upgradeType={UPGRADE_TYPE[2]} />
      </div>
    </div>
  );
};

export default Upgrade;
