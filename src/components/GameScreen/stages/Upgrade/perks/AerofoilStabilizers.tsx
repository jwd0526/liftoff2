import React from "react";
interface IconProps {
  unlocked: boolean;
}

const AerofoilStabilizers: React.FC<IconProps> = ({ unlocked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M5 17a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4h2v-4a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v4h2v-4zm2-10h10a4 4 0 0 1 4 4v4h2v-4a6 6 0 0 0-6-6H7a6 6 0 0 0-6 6v4h2v-4a4 4 0 0 1 4-4z" />
    </svg>
  );
};

export default AerofoilStabilizers;
