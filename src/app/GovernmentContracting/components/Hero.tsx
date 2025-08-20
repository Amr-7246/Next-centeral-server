import Topper from '@/components/Topper'
import { home, logo } from '@/pub/assets'
import { Home } from '@/pub/assets/MAC'
import Image from 'next/image'
import React from 'react'
import { FaCheckCircle, FaBookOpen, FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="relative w-full lg:min-h-[100vh] min-h-[100vh] mt-[-55px] text-white overflow-hidden flex items-center">
      {/*//& Background img Layer */}
      <div className="top-0  absolute z-2 w-full h-full ">
        <Image
          className="-rotate-90 w-[100%] min-h-[90vh] absolute top-[-80%] "
          src={Home.img_5}
          alt="background logo"
        />
      </div>

      {/*//& Overlay Mask */}
      <span className="absolute inset-0 z-3 w-full h-full bg-mac-db/96" />

      {/*//& Decorative Circles */}
        <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none">
          <div className="absolute -top-[50px] right-0 rotate-45">
            {/* Small screens → 5 circles */}
            <div className="hidden sm:flex md:hidden relative">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute rounded-full border border-white/20"
                  style={{
                    width: `${200 + i * 40}px`,
                    height: `${200 + i * 40}px`,
                  }}
                />
              ))}
            </div>

            {/* Medium screens → 8 circles */}
            <div className="hidden md:flex lg:hidden relative">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute rounded-full border border-white/30"
                  style={{
                    width: `${300 + i * 50}px`,
                    height: `${300 + i * 50}px`,
                  }}
                />
              ))}
            </div>

            {/* Large screens → 12 circles */}
            <div className="hidden lg:flex">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute rounded-full border border-white/40"
                  style={{
                    width: `${400 + i * 60}px`,
                    height: `${400 + i * 60}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>


      {/* Branding */}
        <div className="absolute z-4 bottom-10 lg:bottom-[20px] right-5 text-white font-extrabold text-4xl md:text-[50px] lg:text-[80px] tracking-tight">
          <span className="text-amber-400">MAC</span>{" "}
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white",
            }}
          >
            Consulting
          </span>
        </div>

      {/* Wave Topper */}
      <Topper
        className=""
        direction="bottom"
        shapeColor="#ffffff"
        circleColor="#ffffff"
        iconColor="#000000"
      />

      {/* Content */}
      <div className="relative z-5 container ml-5 px-6 md:px-12 max-w-4xl">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug mb-4">
          Stop Making These 3 Critical Mistakes in Government Contracting
        </h1>
        <p className="text-amber-200 text-lg md:text-xl mb-6">
          Learn from MAC&apos;s 30+ years as a former government approvals officer. Discover the insider
          secrets that can make or break your contract submissions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all"
          >
            <FaBookOpen /> Get the Guide
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-transparent border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all"
          >
            Learn More <FaArrowRight />
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm md:text-base font-medium">
          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-amber-400" /> 30+ Years Experience
          </span>
          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-amber-400" /> Former Government Officer
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
