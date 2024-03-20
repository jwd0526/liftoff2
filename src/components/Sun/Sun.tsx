import React from "react";

const Sun: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#FFA500", stopOpacity: 1 }}
          />
        </radialGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="url(#grad1)"
        stroke="#FFE34E"
        strokeWidth="5"
      />
    </svg>
  );
};

export default Sun;
