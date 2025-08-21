import React from "react";

interface SoloHexagoneProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  className?: string;
  imageUrl?: string|any; // ✅ background image
  maskText?: string; // ✅ optional masked text
  textColor?: string; // ✅ text color
  textSize?: number; // ✅ text size in px
  children?: React.ReactNode; // ✅ overlay custom elements
}

const SoloHexagone: React.FC<SoloHexagoneProps> = ({
  width = 256,
  height = 256,
  fill = "#000000",
  stroke = "#000000",
  className = "",
  imageUrl,
  maskText,
  textColor = "white",
  textSize = 16,
  children,
}) => {
  const maskId = "soloHexMask"; // unique mask id

  return (
    <div
      style={{ width, height }}
      className={`relative flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Define Mask */}
          <mask id={maskId} x="0" y="0" width="100%" height="100%">
            <rect width="100%" height="100%" fill="black" />
            <path d="M8 0L15 4V12L8 16L1 12V4L8 0Z" fill="white" />
          </mask>
        </defs>

        {/* Image or solid fill */}
        {imageUrl ? (
          <image
            href={imageUrl}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask={`url(#${maskId})`}
          />
        ) : (
          <rect
            width="100%"
            height="100%"
            fill={fill}
            stroke={stroke}
            mask={`url(#${maskId})`}
          />
        )}
      </svg>

      {/* Optional Masked Text */}
      {maskText && (
        <span
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ color: textColor, fontSize: textSize }}
        >
          {maskText}
        </span>
      )}

      {/* Custom Child Elements */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default SoloHexagone;
