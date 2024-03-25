import React from "react";

interface IconProps {
  unlocked: boolean;
}

const MagneticProbe: React.FC<IconProps> = ({ unlocked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13 8v4h-3l4 4 4-4h-3V8h-2zm-1-6a7 7 0 0 1 7 7v2h2v4h-2v2a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7v-2H3v-4h2v-2a7 7 0 0 1 7-7h2z" />
    </svg>
  );
};

export default MagneticProbe;
