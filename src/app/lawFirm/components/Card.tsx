"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { IconicBtn } from "@/components/Buttons";
import { CiViewList } from "react-icons/ci";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  cta?: string; 
}

const Card: React.FC<CardProps> = ({ title, description, image, cta = "Learn More" }) => {
  return (
    <div className="relative w-[95%] lg:w-full bg-black/90 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-center p-20 mx-auto">
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

        <p className="text-lg md:text-xl text-amber-200 leading-relaxed max-w-2xl">
          {description}
        </p>

        {cta && (         
          <IconicBtn text={"Learn More"} icon={<CiViewList />} iconStyle={'bg-black text-white'} buttonColors={'bg-white text-black mx-auto '} />
          // <button className="mt-4 cursor-pointer w-fit px-6 py-3 rounded-xl text-white underline hover:border-white border border-transparent font-semibold text-lg  transition-all">
          //   {cta}
          // </button>
        )}
      </div>

      {/* Decorative corner accents */}

        {/* Top Left Corner Box */}
        <span className="w-[150px] rounded-tl-2xl absolute h-[80px] border border-b-0 border-r-0 border-white left-[30px] top-[30px]" />
      {/* Pulsing Dots */}
        <div className="w-fit absolute h-fit left-[28px] top-[150px] flex-center gap-2 flex-col">
          <span className="w-[10px] h-[10px] rounded-full bg-lf-w animate-pulse" />
          <span className="w-[10px] h-[10px] rounded-full bg-lf-w animate-pulse" />
          <span className="w-[10px] h-[10px] rounded-full bg-lf-w animate-pulse" />
        </div>

      {/* Small Motto */}
        <span className="text-[10px] text-lf-w font-bold absolute w-fit left-[185px] top-[23px]">
          THE FIRM NAME
        </span>

      {/* Bottom Right Corner Box */}
        <span className="w-[80px] rounded-br-2xl absolute h-[150px] border border-t-0 border-l-0 border-lf-dy right-[30px] bottom-[30px]" />

      {/* Small Motto */}
        <span className="text-[10px] text-lf-dy font-bold absolute w-fit right-[115px] bottom-[22px]">
          YOUR BEST CHOICE
        </span>

      {/* Pulsing Dots */}
        <div className="w-fit absolute h-fit right-[28px] bottom-[250px] flex-center gap-2 flex-col">
          <span className="w-[10px] h-[10px] rounded-full bg-lf-dy animate-pulse" />
          <span className="w-[10px] h-[10px] rounded-full bg-lf-dy animate-pulse" />
          <span className="w-[10px] h-[10px] rounded-full bg-lf-dy animate-pulse" />
        </div>
    </div>
  );
};

export default Card;
