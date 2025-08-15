'use client'
import React from 'react'
import Image from 'next/image'
import { cpabilities } from '@/pub/assets'
import { FaHandshake, FaIndustry, FaProjectDiagram } from 'react-icons/fa'
import Working from '@/components/Working'

const CapabilitiesPage = () => {
  return (
    <div className="bg-bg text-textSecondary relative h-screen">
      <Working/>
    
      {/* HERO SECTION */}
      <section className="relative bg-bg dark:bg-bg-dark py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
              Southern Engineering – Capacity & Capability
            </h1>
            <p className="text-lg">
              Ensuring Efficiency for Your Business.  
              We deliver precision components and sub-assemblies of unparalleled quality across Australia.
              Trusted by manufacturers nationwide, we work as an extension of your business—offering
              practical insights and clear communication every step of the way.  
              From concept to completion, we help shape your vision with the benefit of real-world
              manufacturing experience.
            </p>
          </div>
          <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={cpabilities.cpabilities_1}
              alt="Capabilities Overview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CORE VALUES / STRENGTHS */}
      <section className="py-12 px-6 md:px-16 bg-bg-dark dark:bg-surface-dark text-textInverted">
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
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
    </div>
  )
}

export default CapabilitiesPage
