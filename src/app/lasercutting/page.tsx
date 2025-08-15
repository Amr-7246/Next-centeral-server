'use client'
import { lazerCutting } from '@/pub/assets'
import Image from 'next/image'
import React from 'react'
import { FaIndustry, FaRulerCombined, FaCogs } from 'react-icons/fa'
import InfinityScrolling from './InfinityScrolling'
import Working from '@/components/Working'

const LaserCuttingPage = () => {
  return (
    <div className="bg-bg text-textSecondary relative h-screen">
      <Working/>
      {/* HERO SECTION */}
        <section className="relative bg-bg dark:bg-bg-dark py-12 md:py-20 px-6 md:px-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
                Laser Cutting Excellence
              </h1>
              <p className="text-lg">
                Our advanced laser cutting delivers flawless results, from intricate designs 
                to heavy-duty precision cuts. Tailored for both creative and industrial applications.
              </p>
            </div>
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={lazerCutting.lazer_cutting_1}
                alt="Laser Cutting Machine"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

      {/* SPECIFICATIONS */}
        <section className="py-12 px-6 md:px-16 bg-bg-dark dark:bg-surface-dark text-textInverted">
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <FaIndustry /> Cutting Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Stainless steel: up to 16mm',
              'Mild steel: up to 25mm',
              'Aluminium: up to 12mm',
              'Hardened steels: up to 25mm',
              'Galvanised steel: up to 3mm',
              'Corten steel: up to 6mm',
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-bg dark:bg-bg-dark p-5 rounded-lg shadow-md border border-border"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

      {/* CNC FOLDING */}
        <section className="py-12 px-6 md:px-16 bg-bg dark:bg-bg-dark">
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-3 text-text">
            <FaRulerCombined /> CNC Folding
          </h2>
          <p className="max-w-3xl mb-6">
            Achieve crisp lines and perfect angles with accurate CNC folding 
            tailored to your exact specifications. (Folding length, width, thickness specs to be added)
          </p>
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={lazerCutting.lazer_cutting_2}
              alt="CNC Folding"
              fill
              className="object-cover"
            />
          </div>
        </section>

      {/* GALLERY */}
        <section className="py-12 flex-col gap-5 bg-bg-dark text-textInverted">
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <FaCogs /> Project Gallery
          </h2>
            <InfinityScrolling leftToRight={true}/>
            <InfinityScrolling leftToRight={false}/>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.values(lazerCutting).map((img, idx) => (
              <div
                key={idx}
                className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-md"
              >
                <Image src={img} alt={`Laser Cutting ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default LaserCuttingPage
