'use client'
import React from 'react'
import Image from 'next/image'
import { fabrication } from '@/pub/assets'
import { FaTools, FaPhoneAlt, FaBrush } from 'react-icons/fa'
import { logo } from '@/pub/assets'
import textContent from "@/AppContent.json"
import LayerMask from '../components/LayerMask'
import SecLayerMask from '../components/SecLayerMask'
import Link from 'next/link'
const content = textContent

const FabricationPage = () => {
  return (
    <div className="bg-bg flex flex-col text-textSecondary ">
      {/* <Working/> */}
      {/* HERO SECTION */}
      <section className="relative h-fit z-[1] bg-bg dark:bg-bg-dark py-12 md:py-20 px-6 md:px-16">
        <SecLayerMask/>
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
        {/* SERVICES SECTION */}
        <section className="py-12 px-6 md:px-16 bg-bg ">
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
                className="bg-bg-dark text-bg dark:bg-bg-dark p-5 rounded-lg shadow-md border border-border flex flex-col gap-3"
              >
                <div className="text-bg text-3xl">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className=" py-12 px-6 md:px-16 bg-bg dark:bg-bg-dark">
          <div className=" mx-auto text-center  rounded-lg p-8 ">
            <h3 className="text-2xl font-bold text-text mb-4">Need Fabrication Services?</h3>
            <p className="mb-6">
              Call us today for all your laser cutting, folding, and fabrication needs.
            </p>
            <Link href="tel:03552231" >
              <button className="btn_II flex-center flex-row gap-3 !px-[10px] mx-auto" > <FaPhoneAlt /> (03) 55 2231</button>
            </Link>
          </div>
        </section>
      </section>


      {/* GALLERY */}
      <section className="relative py-12 px-6 md:px-16 bg-bg-dark  text-textInverted">
        <LayerMask />
        <h2 className="text-3xl text-bg font-semibold mb-8">Fabrication Gallery</h2>
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
        <footer className=' bg-bg-dark py-[50px] text-text-inverted'>

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
    </div>
  )
}

export default FabricationPage
