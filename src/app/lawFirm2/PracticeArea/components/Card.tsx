"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  cta?: string; 
}

const Card: React.FC<CardProps> = ({ title, description, image, cta = "Learn More" }) => {
  return (
    <div className="relative w-[95%] lg:w-full bg-black/70 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-center p-10 mx-auto">
      {/* Background */}
      <Image
        src={image}
        alt={title}
        fill
        className="absolute inset-0 object-cover opacity-40 "
      />

      {/* Content */}
      <div className="relative flex flex-col gap-6 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
          {title}
        </h2>

        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
          {description}
        </p>

        {cta && (
          <button className="mt-4 cursor-pointer w-fit px-6 py-3 rounded-xl bg-[#E6A61E] text-[#000349] font-semibold text-lg hover:bg-[#c98d15] transition-all">
            {cta}
          </button>
        )}
      </div>

      {/* Decorative corner accents */}
      <span className="absolute top-6 left-6 w-[120px] h-[4px] bg-[#E6A61E]" />
      <span className="absolute top-6 left-6 h-[120px] w-[4px] bg-[#E6A61E]" />
      <span className="absolute bottom-6 right-6 w-[120px] h-[4px] bg-[#E6A61E]" />
      <span className="absolute bottom-6 right-6 h-[120px] w-[4px] bg-[#E6A61E]" />
    </div>
  );
};

export default Card;
