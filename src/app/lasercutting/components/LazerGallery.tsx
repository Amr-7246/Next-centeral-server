'use client'
import LayerMask from '@/app/components/LayerMask'
import { lazerCutting, logo, textContent } from '@/pub/assets'
import Image from 'next/image'
import React from 'react'
import {FaCogs } from 'react-icons/fa'
const content = textContent

const LazerGallery = () => {
  return (
    <section className="relative py-12 px-10 flex-col gap-5 bg-bg-dark text-bg">
      <LayerMask />
      <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
        <FaCogs /> Project Gallery
      </h2>
        {/* <InfinityScrolling leftToRight={true}/>
        <InfinityScrolling leftToRight={false}/> */}
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
      {/*//* Fotter */}
        <footer className='relative bg-bg-dark py-[50px] text-text-inverted'>

          {/* Top: Logo + About */}
          <div className='z-[2] w-full lg:w-[50%] mx-auto text-center mb-10 px-5'>
            <Image className="w-[150px] mx-auto" src={logo} alt="Southern Engineering logo" />
            <p className='text-[15px] lg:text-[18px] text-text mt-[10px]'>
              Southern Engineering have facilities in <strong>Adelaide</strong> and <strong>Melbourne</strong>.
              Southern Engineering welcome your inquiries.
            </p>
          </div>

          {/* Middle: Navigation + Contact */}
          <div className='z-[2] flex flex-col lg:flex-row justify-between px-[10%] gap-10'>

            {/* All Pages List */}
            <div className='flex flex-col gap-2 w-full lg:w-1/2'>
              <h2 className="text-text mb-3 pb-2 border-b border-border">Pages</h2>
              {content.navBar.options.map((link, idx) => (
                <a
                  key={idx}
                  className='hover:text-white text-text-inverted font-medium duration-300'
                  href={link.href}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact Details */}
            <div className='flex flex-col gap-2 w-full lg:w-1/2'>
              <h2 className="text-text mb-3 pb-2 border-b border-border">Contact</h2>
              <p><strong>Adelaide HQ</strong></p>
              <p>26 Short St</p>
              <p>Adelaide SA 5056</p>
              <p>Phone: <a href="tel:0886352621" className="hover:text-white">08 8635 2621</a></p>
              <p>Email: <a href="mailto:info@southernengineering.com" className="hover:text-white">Click here</a></p>
            </div>
          </div>
        </footer>
    </section>
  )
}

export default LazerGallery