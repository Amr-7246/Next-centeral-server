"use client"
import { Home2 } from '@/pub/assets/lawFirm2'
import DarkVeil from '@/reactBits/BGs/DarkVeil'
import Image from 'next/image'
import React, { useState } from 'react'
import { Scale, Shield, BookOpen, Gavel } from "lucide-react"
import Nav from './Nav'
import { Home } from '@/pub/assets/lowFirm'
import { FaLinkedin, FaFacebookF, FaInstagram, FaInfo } from "react-icons/fa"
import { MdDocumentScanner } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { TbPointerQuestion } from "react-icons/tb";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaTeamspeak } from "react-icons/fa";
import FirmPref from './FirmPref'

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
    <section className="relative">
      {/*//& Animated background with Hero content */}
        <div className='relative w-full h-[90vh]'>
          <DarkVeil hueShift={15} noiseIntensity={0.2} scanlineIntensity={0} speed={0} scanlineFrequency={3} warpAmount={3} />
          {/*//& Horizontal blured NavBar & social icons */}
            <div className='flex flex-col gap-6 absolute top-8 right-8' >
              <div className='flex flex-col gap-8 rounded-2xl px-3 py-6 border border-white/50 bg-white/30 backdrop-blur-lg text-white' >
                {[<GoHomeFill/>,<MdDocumentScanner/>,<TbPointerQuestion/>,<FaTeamspeak/>,<FaInfo/> ].map((linkIcon, idx) => (
                  <span key={idx} className={`p-3 text-[23px] ${idx == 0 ? "text-lf-dy" : "" }`}>{linkIcon}</span>
                ))}
              </div>
              <div className='flex flex-col gap-4  rounded-2xl px-3 py-6 border border-white/50 bg-white/30 backdrop-blur-lg text-white' >
                {[ <FaLinkedin/>,<FaFacebookF/>,<FaInstagram/> ].map((socialIcon, idx) => (
                  <span key={idx} className='p-3 text-[23px] '>{socialIcon}</span>
                ))}
              </div>
            </div>
            <div className='flex absolute top-8 left-8 gap-8 rounded-2xl p-5 border border-white/50 bg-white/30 backdrop-blur-lg text-sky-400 ' >
              <h2 className='text-[20px] text-white font-black'>Firm Logo</h2>
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

      {/*//& Image background with the Firm pref */}
        <div className='h-[90vh] w-full relative'>
          <Image
            src={Home2.hero_6}
            alt="layout"
            fill
            className="absolute inset-0 object-cover -z-5"
          />
          <span className='absolute w-full h-full inset-0 -z-4 bg-gradient-to-b from-black via-black/60 to-black/50'/>

          {/*//& Feature Cards */}
            <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[90%] grid grid-cols-4 gap-4 z-20">
              {features.map((feature, index) => (
                <div key={index} className=" relative backdrop-blur-md bg-white/10 p-6 rounded-lg border border-white/80 ">
                  <div className="flex flex-col items-center text-center">
                    <span className='absolute top-3 left-3 bg-black/50 rounded-full border-white border text-[12px] p-2'>
                      {feature.icon}
                    </span>
                    <h3 className="mt-4 text-lf-dy font-semibold">{feature.head}</h3>
                    <p className="mt-2 text-white/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          <Nav/>
        </div>

      <FirmPref/>
    </section>
  )
}

export default Hero
