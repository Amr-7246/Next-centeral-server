import { lazerCutting, textContent } from '@/pub/assets'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaIndustry, FaCogs } from 'react-icons/fa'
import { FaDraftingCompass, FaShapes } from "react-icons/fa";
const content = textContent

const LazerHero = () => {
  return (
    <section className="relative min-h-screen w-full py-16 md:py-24 px-6 md:px-16 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={lazerCutting.lazer_cutting_1}
          alt="Laser Cutting Background"
          fill
          className="object-cover"
        />
        {/* Layer mask */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Icons scattered */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FaCogs className="absolute top-10 left-12 text-white/50 text-4xl animate-pulse" />
        <FaCogs className="absolute top-[40%] left-[50%] text-white/50 text-4xl animate-pulse" />
        <FaShapes className="absolute bottom-[20%] right-[50%] text-white/50 text-4xl animate-pulse" />
        <FaDraftingCompass className="absolute top-32 right-16 text-white/50 text-3xl animate-pulse" />
        <FaIndustry className="absolute bottom-16 left-20 text-white/50 text-5xl animate-pulse" />
        <FaShapes className="absolute bottom-24 right-24 text-white/50 text-4xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Laser Cutting Excellence
          </h1>
          <p className="text-lg md:text-xl font-light text-white/90 max-w-lg drop-shadow">
            Our advanced laser cutting delivers flawless results, from intricate designs
            to heavy-duty precision cuts. Tailored for both creative and industrial applications.
          </p>
          <div className='flex justify-start gap-3 mt-10'>
            <Link href={'/contact'} >
              <button className='btn_II'>contact us</button>
            </Link>
            <Link href={'/about'} >
              <button className='btn_I' >More About us</button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LazerHero