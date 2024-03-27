import React from "react";

interface IconProps {
  unlocked: boolean;
}

const EnhancedNav: React.FC<IconProps> = ({ unlocked }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="99" height="99" rx="1" stroke="black" />
      <circle
        cx="50.5"
        cy="47.5"
        r="33"
        stroke="black"
        strokeWidth="5"
        fill={unlocked ? `#CDEBFC0` : `black`}
      />
      <path
        d="M46.6666 44.5211L64.5354 30.5474L53.4323 50.3282L46.6666 44.5211Z"
        fill={unlocked ? `#CDEBFC` : `black`}
        stroke="black"
        strokeWidth="0.5"
      />
      <path
        d="M53.2228 50.7585L35.0201 65.1192L46.4551 44.9496L53.2228 50.7585Z"
        fill={unlocked ? `#FF0000` : `black`}
        stroke="black"
        strokeWidth="0.5"
      />
      <path
        d="M66.7728 64V49.5H74V64V64.5H74.5H87V71.5H74.5H74V72V86H66.7728V72V71.5H66.2728H53.5V64.5H66.2728H66.7728V64Z"
        fill={unlocked ? `#FF0000` : `black`}
        stroke="black"
      />
    </svg>
  );
};

export default EnhancedNav;
