import React, { useRef } from "react";
import "./UpgradePanel.css";
import "./Lines.css";
import classNames from "classnames";
import infoButton from "../../../../../images/info-icon.svg";

interface UpgradePanelProps {
  upgradeType: string;
}

const UpgradePanel: React.FC<UpgradePanelProps> = ({ upgradeType }) => {
  const infoPanelRef = useRef<HTMLDivElement | null>(null);
  const infoImgRef = useRef<HTMLImageElement | null>(null);

  const panelClass = classNames({
    thrusters: upgradeType === "Thrusters",
    fuel: upgradeType === "Fuel Cell",
    hull: upgradeType === "Hull",
  });

  const handleInfoClick = () => {
    if (infoPanelRef.current?.classList.contains("hide-box")) {
      infoPanelRef.current?.classList.remove("hide-box");
    } else {
      infoPanelRef.current?.classList.add("hide-box");
    }
  };

  const getPanelDescription = (upgradeType: string): string => {
    switch (upgradeType) {
      case "Thrusters":
        return "THRUSTERS DESC";
      case "Fuel Cell":
        return "FUEL DESC";
      case "Hull":
        return "HULL DESC";
      default:
        return "BROKEN";
    }
  };

  const getPerkInfo = (upgradeType: string): string => {
    switch (upgradeType) {
      case "Thrusters":
        return "THRUSTERS INFO";
      case "Fuel Cell":
        return "FUEL INFO";
      case "Hull":
        return "HULL INFO";
      default:
        return "BROKEN";
    }
  };

  const panelDescription: string = getPanelDescription(upgradeType);
  const perkInfo: string = getPerkInfo(upgradeType);

  return (
    <div className={`upgrade-panel ${panelClass}-upgrade-box`}>
      <div className="info-button-box">
        <img
          ref={infoImgRef}
          className="info-img"
          src={infoButton}
          alt={`${panelClass} info`}
          onClick={handleInfoClick}
        />
      </div>
      <div
        ref={infoPanelRef}
        className={`info-panel ${panelClass}-info-panel hide-box`}>
        <p className={`info-content ${panelClass}-info-content`}>{perkInfo}</p>
      </div>
      <div className={`panel-content ${panelClass}-content`}>
        <h1 className={`panel-header ${panelClass}-header`}>
          {upgradeType.toUpperCase()}
        </h1>
        <p className={`panel-text ${panelClass}-description`}>
          {panelDescription}
        </p>
      </div>
    </div>
  );
};

export default UpgradePanel;
