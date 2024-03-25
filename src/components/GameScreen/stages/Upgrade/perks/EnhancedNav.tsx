import React from "react";

interface IconProps {
  unlocked: boolean;
}

const EnhancedNav: React.FC<IconProps> = ({ unlocked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20 18.18l-1.4-1.39a8 8 0 1 0-2.12 2.12l1.39 1.4a10 10 0 1 1 2.13-2.13zm-1.42-9.74a6 6 0 1 0-8.49 8.49 6 6 0 0 0 8.49-8.49z" />
    </svg>
  );
};

export default EnhancedNav;
