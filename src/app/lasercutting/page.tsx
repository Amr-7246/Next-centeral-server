'use client'
import { lazerCutting, logo, textContent } from '@/pub/assets'
import Image from 'next/image'
import React from 'react'
import { FaIndustry, FaRulerCombined, FaCogs } from 'react-icons/fa'
import { FaDraftingCompass, FaShapes } from "react-icons/fa";
import InfinityScrolling from './InfinityScrolling'
import LayerMask from "../components/LayerMask"
import SecLayerMask from '../components/SecLayerMask'
import LazerHero from './components/LazerHero'
import LazerGallery from './components/LazerGallery'
const content = textContent

const LaserCuttingPage = () => {
  return (
    <div className="bg-bg text-textSecondary ">
      <LazerHero/>
      {/*//& CNC FOLDING */}
        <section className="relative py-12 px-6 md:px-16 bg-bg dark:bg-bg-dark">
          <SecLayerMask/>
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
          {/*//& SPECIFICATIONS */}
            <div className=" py-12 px-6 md:px-16 ">
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
                  className="relative bg-bg-dark p-5 rounded-lg text-bg shadow-md border border-border"
                  >
                    <LayerMask/>
                    {item}
                  </div>
                ))}
              </div>
            </div>
        </section>
        <LazerGallery/>
    </div>
  )
}

export default LaserCuttingPage
