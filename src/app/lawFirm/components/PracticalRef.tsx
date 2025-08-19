import { Home } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import React from 'react'
import { ArrowRight, ArrowLeft } from "lucide-react";

const PracticalRef = () => {
  const finallCardStyles = true
    ? "absolute top-0 -right-5"
    : "absolute top-0 -left-5"

  const finallPStyles = true
    ? "absolute top-10 -left-5 text-amber-200"
    : "absolute top-10 -right-5 text-lf-w"

  return (
    <section className="bg-lf-g py-20 px-6 relative overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
          Our <span className="text-lf-dy">Practice Areas</span>
        </h2>
        <p className="text-lg md:text-xl text-lf-dw mt-4 max-w-2xl mx-auto">
          Precision. Dedication. Results. Discover the expertise that defines our legal practice.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative h-[300px] flex justify-center items-center">
        {/* Center Dots & Line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20">
          <div className="w-6 h-6 bg-white rounded-full border-2 border-lf-dy shadow-lg" />
        </div>
        <div className="absolute h-full left-1/2 top-0 -translate-x-1/2 z-10">
          <div className="w-2 h-full bg-lf-dw/40 rounded-full shadow-lg" />
        </div>

        {/* Card */}
        <div className={`${finallCardStyles} w-[50%] h-[220px] transition-all duration-500 `}>
          <div className="relative w-[95%] h-full lg:w-full bg-black/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-center p-10 mx-auto group">
            {/* Background Image */}
            <Image
              src={Home.hero_2}
              alt="Real Estate"
              fill
              className="absolute inset-0 object-cover opacity-40  transition-opacity"
            />

            {/* Content */}
            <div className="relative flex flex-col gap-4 z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                Real Estate
              </h2>
              <span className="text-sm text-lf-dw">
                Strategy, Transactions, Advocacy
              </span>
            </div>

            {/* Decorative Corners */}
            <span className="w-[150px] rounded-tl-2xl absolute h-[80px] border border-b-0 border-r-0 border-white left-[30px] top-[30px]" />
            <span className="w-[80px] rounded-br-2xl absolute h-[150px] border border-t-0 border-l-0 border-lf-dy right-[30px] bottom-[30px]" />

            {/* Small Mottos */}
            <span className="text-[10px] text-lf-w font-bold absolute w-fit left-[185px] top-[23px]">
              THE FIRM NAME
            </span>
            <span className="text-[10px] text-lf-dy font-bold absolute w-fit right-[115px] bottom-[22px]">
              YOUR BEST CHOICE
            </span>

            {/* Pulsing Dots */}
            <div className="w-fit absolute h-fit left-[28px] top-[150px] flex-center gap-2 flex-col">
              <span className="w-[10px] h-[10px] rounded-full bg-lf-w animate-pulse" />
              <span className="w-[10px] h-[10px] rounded-full bg-lf-w animate-pulse" />
              <span className="w-[10px] h-[10px] rounded-full bg-lf-w animate-pulse" />
            </div>
            <div className="w-fit absolute h-fit right-[28px] bottom-[250px] flex-center gap-2 flex-col">
              <span className="w-[10px] h-[10px] rounded-full bg-lf-dy animate-pulse" />
              <span className="w-[10px] h-[10px] rounded-full bg-lf-dy animate-pulse" />
              <span className="w-[10px] h-[10px] rounded-full bg-lf-dy animate-pulse" />
            </div>
          </div>
        </div>

        {/* Description Panel */}
        <div className={`${finallPStyles} text-[18px] lg:text-[20px] w-[50%] text-center px-6`}>
          From residential acquisitions to large-scale industrial developments,
          our real estate team delivers counsel on zoning, construction, financing,
          and all stages of property transactions.
          <br />
          <button className="underline text-lf-dy cursor-pointer mt-3 transition-colors ">
            Learn more
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-5 mt-16">
        <button className="flex-center p-3 w-10 h-10 bg-lf-b text-white rounded-full shadow-md  transition">
          <ArrowLeft />
        </button>
        <div className="flex gap-3">
          <span className="w-4 h-4 rounded-full bg-lf-dy" />
          <span className="w-4 h-4 rounded-full bg-white" />
          <span className="w-4 h-4 rounded-full bg-white" />
          <span className="w-4 h-4 rounded-full bg-white" />
          <span className="w-4 h-4 rounded-full bg-white" />
        </div>
        <button className="p-3 flex-center w-10 h-10 bg-lf-b text-white rounded-full shadow-md  transition">
          <ArrowRight/>
        </button>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 text-center text-lf-dw">
        <h2 className="text-lg">
          Just a little about our practice… see more from{" "}
          <span className="text-lf-dy underline cursor-pointer ">
            here
          </span>
        </h2>
      </div>
    </section>
  )
}

export default PracticalRef
