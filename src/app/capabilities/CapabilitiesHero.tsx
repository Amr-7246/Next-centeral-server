'use client'
import React from 'react'
import Image from 'next/image'
import { cpabilities } from '@/pub/assets'
import { FaHandshake, FaIndustry, FaProjectDiagram, FaShapes } from 'react-icons/fa'
import { FaCogs, FaTools, FaDraftingCompass } from "react-icons/fa";
import Link from 'next/link'

const CapabilitiesHero = () => {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-16 text-white h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={cpabilities.cpabilities_5}
          alt="Capabilities Background"
          fill
          className="object-cover"
        />
        {/* Layer Mask */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Southern Engineering – Capacity & Capability
          </h1>
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

export default CapabilitiesHero