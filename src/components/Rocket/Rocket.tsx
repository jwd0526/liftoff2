import React from "react";
import RocketImg from "../../images/rocket.svg";

interface RocketProps {
  launched: boolean;
  isGame: boolean;
}

const orbitStyle = (): React.CSSProperties[] => {
  return [
    {
      position: "absolute",
      width: "70vw",
      height: "70vw",
      top: "78vh",
      left: "13.5vw",
    },
    {
      position: "relative",
      width: "5vw",
      height: "5vw",
    },
    {
      width: "100%",
      height: "100%",
    },
  ];
};

const Rocket: React.FC<RocketProps> = ({ launched }) => {
  return (
    <div className="rocket-container orbiting" style={orbitStyle()[0]}>
      <div className="rocket-img-box" style={orbitStyle()[1]}>
        <img
          className="rocket-img"
          src={RocketImg}
          alt="rocket"
          style={orbitStyle()[2]}
        />
      </div>
    </div>
  );
};

export default Rocket;
