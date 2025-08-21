import React from 'react'


interface TribelHexagoneProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  className?: string;
  imageUrl?: string | any ; // ✅ background image
  maskText?: string; // ✅ optional masked text
  textColor?: string; // ✅ text color
  textSize?: number; // ✅ text size in px
  children?: React.ReactNode; // ✅ to allow spans, <p>, custom overlays
}

export const TribelHexagone: React.FC<TribelHexagoneProps> = ({
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
  const maskId = "tribeMask"; // must be unique if multiple used on page

  return (
    <div
      style={{ width, height }}
      className={`relative flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 40.03 40.03"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Define Mask */}
          <mask id={maskId} x="0" y="0" width="100%" height="100%">
            {/* White = visible, Black = hidden */}
            <rect width="100%" height="100%" fill="black" />
            <path
              d="M34.408,10.246L23.48,10.367l-5.359,9.527l5.572,9.402l10.928-0.123l5.359-9.525L34.408,10.246z M33.661,27.551
              l-9.043,0.104l-4.61-7.781l4.434-7.883l9.043-0.102l4.609,7.779L33.661,27.551z"
              fill="white"
            />
            <path
              d="M16.549,18.932l5.357-9.527L16.334,0L5.406,0.125L0.049,9.65l5.57,9.402L16.549,18.932z M6.365,1.746l9.047-0.102
              l4.607,7.781l-4.432,7.883l-9.044,0.104L1.936,9.629L6.365,1.746z"
              fill="white"
            />
            <path
              d="M5.644,21.098l-5.358,9.525l5.57,9.406l10.93-0.123l5.357-9.527l-5.571-9.406L5.644,21.098z M15.823,38.283l-9.044,0.104
              L2.17,30.602l4.433-7.881l9.046-0.105l4.607,7.783L15.823,38.283z"
              fill="white"
            />
          </mask>
        </defs>

        {/* Image or fill background */}
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

      {/* Optional Masked Text Overlay */}
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

      // {/*//& Rounded Hexagone */}
      // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
      //   <path d="M500 950.8c-35.5 0-69.8-13-96.5-36.5l-72.4-63.8a146.2 146.2 0 0 0-50.2-29l-91.5-30.8a146.2 146.2 0 0 1-96.5-167L112 529c3.9-19.2 3.9-38.8 0-58l-19-94.6a146.2 146.2 0 0 1 96.4-167.1l91.5-30.8c18.6-6.3 35.5-16 50.2-29l72.4-63.8a145.9 145.9 0 0 1 193 0l72.4 63.8c14.7 13 31.6 22.7 50.2 29l91.5 30.8a146.2 146.2 0 0 1 96.5 167L888 471a146.3 146.3 0 0 0 0 58l19 94.6a146.2 146.2 0 0 1-96.4 167.1L719 821.5c-18.6 6.3-35.5 16-50.2 29l-72.4 63.8a145.9 145.9 0 0 1-96.5 36.5Z" fill="#0053F0">
      //   </path>
      // </svg>

