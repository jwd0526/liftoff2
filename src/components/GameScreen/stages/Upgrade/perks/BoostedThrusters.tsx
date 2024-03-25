import React from "react";
interface IconProps {
  unlocked: boolean;
}

const BoostedThrusters: React.FC<IconProps> = ({ unlocked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2s-8 4.5-8 10h2a8 8 0 0 1 16 0h2c0-5.5-8-10-8-10zm-2 15 6 4V13h4l-6-4-6 4h4z" />
    </svg>
  );
};

export default BoostedThrusters;
