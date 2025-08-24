"use client"
import { Home2 } from '@/pub/assets/lawFirm2'
import DarkVeil from '@/reactBits/BGs/DarkVeil'
import Image from 'next/image'
import React, { useState } from 'react'
import { Scale, Shield, BookOpen, Gavel } from "lucide-react"
import Nav from './Nav'
import { Home } from '@/pub/assets/lowFirm'
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa"
import { MdDocumentScanner } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { TbPointerQuestion } from "react-icons/tb";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaTeamspeak } from "react-icons/fa";
import FirmPref from './FirmPref'
import Faq from '../Faq'

const Hero = () => {

  const features = [
    {
      icon: <Scale className=" text-white" />,
      head: "Proven Expertise",
      description: "Decades of experience providing trusted legal representation across diverse practice areas.",
    },
    {
      icon: <Shield className=" text-white " />,
      head: "Client Protection",
      description: "We safeguard client rights with integrity, ensuring security and peace of mind in every case.",
    },
    {
      icon: <BookOpen className=" text-white " />,
      head: "In-Depth Knowledge",
      description: "Our attorneys bring deep legal insight backed by continuous research and strategic thinking.",
    },
    {
      icon: <Gavel className=" text-white " />,
      head: "Strong Advocacy",
      description: "Committed to delivering clear guidance and firm representation in and out of the courtroom.",
    },
  ];

  return (
    <section className="relative ">
      {/*//& Animated background with Hero content */}
        <div className='relative w-full h-[100vh]'>
          <DarkVeil hueShift={15} noiseIntensity={0.2} scanlineIntensity={0} speed={0} scanlineFrequency={3} warpAmount={3} />
          {/*//& Horizontal blured NavBar & social icons */}
            <div className='flex flex-col gap-3 absolute top-8 right-8' >
              <div className='flex flex-col gap-8 rounded-2xl p-3 border border-white/50 bg-white/30 backdrop-blur-lg text-white' >
                {[<GoHomeFill/>,<MdDocumentScanner/>,<TbPointerQuestion/>,<FaTeamspeak/> ].map((linkIcon, idx) => (
                  <span key={idx} className='p-3 text-[23px] '>{linkIcon}</span>
                ))}
              </div>
              <div className='flex flex-col gap-4  rounded-2xl p-3 border border-white/50 bg-white/30 backdrop-blur-lg text-white' >
                {[ <FaLinkedin/>,<FaFacebookF/>,<FaInstagram/> ].map((socialIcon, idx) => (
                  <span key={idx} className='p-3 text-[23px] '>{socialIcon}</span>
                ))}
              </div>
            </div>
            <div className='flex absolute top-8 left-8 gap-8 rounded-2xl p-5 border border-white/50 bg-white/30 backdrop-blur-lg text-sky-400 ' >
              <h2 className='text-[20px] text-black font-black'>Firm Logo</h2>
            </div>
          {/*//& Content Container */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-[80%] mb-[150px] text-center space-y-6">
                <h1 className="text-6xl  font-bold ">
                  <span className="text-transparent" style={{ WebkitTextStroke: "2px #60A5FA " }}> Protecting </span>
                  <span className="text-white mx-3">Your Rights</span>
                  <span className="text-transparent" style={{ WebkitTextStroke: "2px #60A5FA " }}> Securing </span>
                  <span className="text-white ml-3">Your Future</span>
                </h1>
              </div>
            </div>
        </div>
        <Nav/>

      {/*//& FAQ Section with dark overlay */}
        <div className="relative w-full">
          <Image
            src={Home2.hero}
            alt="layout"
            fill
            className="absolute inset-0 object-cover -z-5"
          />
          <span className='absolute w-full h-full inset-0 -z-4 bg-gradient-to-b from-black via-black/60 to-black/50'/>
          <Faq />
        </div>

      <FirmPref/>
    </section>
  )
}

export default Hero