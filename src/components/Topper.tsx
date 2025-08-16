import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

type Props = {
  className?: string;
  direction?: "top" | "bottom";
  shapeColor?: string;   // SVG wave fill
  circleColor?: string;  // Circle background
  iconColor?: string;    // Icon color
};

const Topper: React.FC<Props> = ({
  className = "",
  direction = "bottom",
  shapeColor = "#000000",
  circleColor = "#000000",
  iconColor = "#ffffff",
}) => {
  return (
    <div
      className={`absolute z-5 w-full overflow-hidden ${direction === "top" ? "top-0" : "bottom-0"}`}
    >
      {/* SVG Shape with circular notch */}
      <svg
        className={`w-full h-[100px] ${direction === "top" ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          {/* mask to carve out the circle */}
          <mask id="wave-mask">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="50%" cy="0" r="45" fill="black" /> 
          </mask>
        </defs>

        <path
          fill={shapeColor}
          mask="url(#wave-mask)"
          d="M0,192L60,208C120,224,240,256,360,266.7C480,277,600,267,720,256C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L0,320Z"
        />
      </svg>

      {/* Circle aligned with the notch */}
      <span
        className={`absolute flex items-center justify-center
          w-[100px] h-[100px] rounded-full left-1/2 -translate-x-1/2  ${className}
          ${direction === "top" ? "hidden" : "-bottom-[45px]"}`}
        style={{ backgroundColor: circleColor }}
      >
        {direction === "top" ? (
          <FaChevronUp className="text-2xl" style={{ color: iconColor }} />
        ) : (
          <FaChevronDown className="text-2xl" style={{ color: iconColor }} />
        )}
      </span>
    </div>
  );
};

export default Topper;
