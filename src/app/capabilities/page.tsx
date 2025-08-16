'use client'
import React from 'react'
import Image from 'next/image'
import { cpabilities } from '@/pub/assets'
import { FaHandshake, FaIndustry, FaProjectDiagram } from 'react-icons/fa'
import CapabilitiesHero from './CapabilitiesHero'
import Footer from '../components/Footer'
import LayerMask from '../components/LayerMask'
import Topper from '@/components/Topper'

const CapabilitiesPage = () => {
  return (
    <div className="bg-bg text-textSecondary">
      <CapabilitiesHero />

      {/* CORE VALUES / STRENGTHS */}
      <section className="relative overflow-hidden py-[100px] px-6 md:px-16 bg-bg-dark dark:bg-surface-dark text-textInverted">
        <LayerMask/>
          <p className="relative pl-5 text-lg md:text-xl font-light text-white/90 w-full my-10 drop-shadow">
            Ensuring Efficiency for Your Business.  
            We deliver precision components and sub-assemblies of unparalleled quality across Australia.  
            Trusted by manufacturers nationwide, we work as an extension of your business—offering practical insights and clear communication every step of the way.  
            From concept to completion, we help shape your vision with the benefit of real-world manufacturing experience.
            <span className='bg-text h-full w-[5px] rounded-l-md absolute left-0 top-0' ></span>
          </p>
        <h2 className="text-white/90 text-3xl font-semibold mb-8 flex items-center gap-3">
          <FaHandshake /> Why Partner With Us
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: <FaIndustry />, text: 'Unparalleled manufacturing precision' },
            { icon: <FaProjectDiagram />, text: 'From concept to completion support' },
            { icon: <FaHandshake />, text: 'Nationwide trust and long-term partnerships' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-bg dark:bg-bg-dark p-5 rounded-lg shadow-md border border-border flex flex-col gap-3"
            >
              <div className="text-mainBtn text-3xl">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 px-6 md:px-16 bg-bg dark:bg-bg-dark">
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3 text-text">
          Project Highlights
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.values(cpabilities).map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={img}
                alt={`Capabilities ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      <div className="relative">
        <Topper 
          className={''}
          direction = {"top"}
          shapeColor = {"#ffddc6"}
          circleColor ={ "#ffddc6"}
          iconColor = {"#000000"}
        />
        <Footer/>
      </div>
    </div>
  )
}

export default CapabilitiesPage
