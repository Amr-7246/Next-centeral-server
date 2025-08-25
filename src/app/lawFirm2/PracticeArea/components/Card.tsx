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
    <div className="relative w-[95%] lg:w-full bg-black/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-center p-10 mx-auto transform hover:scale-[1.02] transition-all duration-500">
      {/* Background */}
      <Image
        src={image}
        alt={title}
        fill
        className="absolute inset-0 object-cover opacity-30 transition-transform duration-700 hover:scale-110"
      />

      {/* Content */}
      <div className="relative flex flex-col gap-6 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 tracking-tight">
          {title}
        </h2>

        <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl font-light">
          {description}
        </p>

        {cta && (
          <button className="mt-4 cursor-pointer w-fit px-6 py-3 rounded-xl bg-[#E6A61E] text-[#000349] font-semibold text-lg hover:bg-[#ffb937] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
