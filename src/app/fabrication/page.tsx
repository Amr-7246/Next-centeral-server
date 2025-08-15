'use client'
import React from 'react'
import Image from 'next/image'
import { fabrication } from '@/pub/assets'
import { FaTools, FaPhoneAlt, FaBrush } from 'react-icons/fa'
import Working from '@/components/Working'

const FabricationPage = () => {
  return (
    <div className="bg-bg text-textSecondary relative h-screen overflow-hidden">
      <Working/>
      {/* HERO SECTION */}
      <section className="relative bg-bg dark:bg-bg-dark py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
              Fabrication Services
            </h1>
            <p className="text-lg">
              From concept to completion, our skilled fabrication team delivers durable, reliable solutions.  
              We also provide drilling/tapping, blasting, painting, and premium powder coating to deliver
              ready-to-use parts.
            </p>
          </div>
          <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={fabrication.fabrication_1}
              alt="Fabrication Process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-12 px-6 md:px-16 bg-bg-dark dark:bg-surface-dark text-textInverted">
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
          <FaTools /> Our Capabilities
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: <FaTools />, text: 'Custom fabrication from concept to completion' },
            { icon: <FaBrush />, text: 'Premium powder coating for long-lasting finish' },
            { icon: <FaTools />, text: 'Drilling, tapping, and blasting services' },
            { icon: <FaBrush />, text: 'Professional painting services' },
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

      {/* CALL TO ACTION */}
      <section className="py-12 px-6 md:px-16 bg-bg dark:bg-bg-dark">
        <div className="max-w-4xl mx-auto text-center border border-border rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-text mb-4">Need Fabrication Services?</h3>
          <p className="mb-6">
            Call us today for all your laser cutting, folding, and fabrication needs.
          </p>
          <a
            href="tel:03552231"
            className="inline-flex items-center gap-3 bg-mainBtn text-secBtn px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            <FaPhoneAlt /> (03) 55 2231
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 px-6 md:px-16 bg-surface dark:bg-surface-dark text-textInverted">
        <h2 className="text-3xl font-semibold mb-8">Fabrication Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.values(fabrication).map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={img}
                alt={`Fabrication ${idx + 1}`}
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

export default FabricationPage
