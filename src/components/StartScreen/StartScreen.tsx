import "./StartScreen.css";
import React, { useRef } from "react";
import RightArrow from "../../images/rightArrow.svg";

interface StartScreenProps {
  children: React.ReactNode;
  isGame: boolean;
  onRightClick: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({
  children,
  isGame,
  onRightClick,
}) => {
  const rightButtonRef = useRef<HTMLImageElement | null>(null);

  const isGameClass = `${isGame ? "show-button" : "hidden-button"}`;

  return (
    <>
      <div className="start-container">
        <div className={`right-img-box ${isGameClass}`}>
          <img
            ref={rightButtonRef}
            className="right-img"
            src={RightArrow}
            alt="right"
            onClick={onRightClick}
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default StartScreen;
