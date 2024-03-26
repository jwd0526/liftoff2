import React from "react";

interface PlayButtonProps {
  onPlayClick: () => void;
  isGame: boolean;
  style: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onPlayClick, isGame }) => {
  return (
    <svg
      onClick={onPlayClick}
      visibility={isGame ? "visible" : "hidden"}
      width="100%"
      height="100%"
      viewBox="0 0 314 314"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_6)">
        <g filter="url(#filter0_d_1_6)">
          <path
            d="M7 7H307V307H7V216.76V97.24H122.5V216.76L226 157L122.5 97.24H7V7Z"
            fill="#CDEBFC"
          />
        </g>
        <g filter="url(#filter1_i_1_6)">
          <path
            d="M226 157L122.5 216.756L122.5 97.2442L226 157Z"
            fill="black"
            fill-opacity="0.01"
          />
        </g>
        <path
          d="M229 162.196L238 157L229 151.804L125.5 92.0481L116.5 86.8519V97.2442L116.5 216.756L116.5 227.148L125.5 221.952L229 162.196Z"
          stroke="black"
          stroke-width="12"
        />
      </g>
      <rect
        x="7"
        y="7"
        width="300"
        height="300"
        rx="80"
        stroke="black"
        stroke-width="13"
      />
      <defs>
        <filter
          id="filter0_d_1_6"
          x="3"
          y="7"
          width="308"
          height="308"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_6"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_1_6"
          x="110.5"
          y="76.4596"
          width="143.5"
          height="165.081"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="15" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_6" />
        </filter>
        <clipPath id="clip0_1_6">
          <rect x="7" y="7" width="300" height="300" rx="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlayButton;
