import React from "react";

interface IconProps {
  unlocked: boolean;
}

const HeatShielding: React.FC<IconProps> = ({ unlocked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2s-8 4.5-8 8v2c0 4.42 7.13 8 8 8s8-3.58 8-8v-2c0-3.5-8-8-8-8zm-2 10H7v2h3v3h2v-3h3v-2h-3V9h-2v3z" />
    </svg>
  );
};

export default HeatShielding;
