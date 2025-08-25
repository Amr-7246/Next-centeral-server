import { about, Home } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import React from 'react'

const Story = () => {
  return (
    <div className="relative">
      {/* Story Timeline */}
      {/* <div className='absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-lf-dy to-transparent transform -translate-x-1/2'/> */}

      {/* Curved connecting lines */}
      <svg className="absolute left-0 top-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        <path
          d="M 30% 25% Q 50% 25%, 70% 25%"
          stroke="#E6A61E"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
        <path
          d="M 30% 75% Q 50% 75%, 70% 75%"
          stroke="#E6A61E"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
      </svg>

      {/* First Story Section */}
      <div className='flex flex-row justify-between bg-lf-g p-10'>
        <div className='w-[35%] relative group transition-all duration-500 hover:scale-105'>
          <Image src={about.stroy_1} alt={'Our Foundation'} className="rounded-lg shadow-xl"/>
          <span className='w-full h-full bg-black/50 backdrop-blur-[1px] absolute top-5 left-5 rounded-lg transition-all duration-500 group-hover:top-3 group-hover:left-3'/>
        </div>
        <div className='w-[55%] p-5 flex flex-col gap-5'>
          <div className="relative">
            <h3 className='text-[30px] text-amber-200 p-3 border-l-4 border-lf-dy pl-6'>
              Our Foundation
            </h3>
            <span className="absolute w-[50px] h-[50px] -left-6 top-1/2 transform -translate-y-1/2 bg-lf-g rounded-full border-2 border-lf-dy flex items-center justify-center text-lf-dy font-bold">1</span>
          </div>
          <p className='text-[20px] text-lf-w leading-relaxed'>
            Our mission is to combine deep legal expertise with genuine client advocacy. We believe every case deserves meticulous attention, clear communication, and tailored solutions. Whether navigating complex corporate matters or protecting personal rights, we are committed to standing by our clients with integrity and dedication.
          </p>
        </div>
      </div>

      {/* Middle Story Section */}
      <div className='flex flex-row-reverse justify-between bg-lf-g p-10'>
        <div className='w-[35%] relative group transition-all duration-500 hover:scale-105'>
          <Image src={about.stroy_3} alt={'Our Growth'} className="rounded-lg shadow-xl"/>
          <span className='w-full h-full bg-black/50 backdrop-blur-[1px] absolute top-5 right-5 rounded-lg transition-all duration-500 group-hover:top-3 group-hover:right-3'/>
        </div>
        <div className='w-[55%] p-5 flex flex-col gap-5'>
          <div className="relative">
            <h3 className='text-[30px] text-amber-200 p-3 border-l-4 border-lf-dy pl-6'>
              Our Evolution
            </h3>
            <span className="absolute w-[50px] h-[50px] -left-6 top-1/2 transform -translate-y-1/2 bg-lf-g rounded-full border-2 border-lf-dy flex items-center justify-center text-lf-dy font-bold">2</span>
          </div>
          <p className='text-[20px] text-lf-w leading-relaxed'>
            Through years of dedicated service, we've grown from a small practice to a respected legal institution. Our journey has been marked by landmark cases, strategic expansion, and an unwavering commitment to justice. Each milestone has strengthened our resolve to provide exceptional legal representation.
          </p>
        </div>
      </div>

      {/* Final Story Section */}
      <div className='flex flex-row justify-between bg-lf-g p-10'>
        <div className='w-[35%] relative group transition-all duration-500 hover:scale-105'>
          <Image src={about.stroy_2} alt={'Our Achievements'} className="rounded-lg shadow-xl"/>
          <span className='w-full h-full bg-black/50 backdrop-blur-[1px] absolute top-5 left-5 rounded-lg transition-all duration-500 group-hover:top-3 group-hover:left-3'/>
        </div>
        <div className='w-[55%] p-5 flex flex-col gap-5'>
          <div className="relative">
            <h3 className='text-[30px] text-amber-200 p-3 border-l-4 border-lf-dy pl-6'>
              Our Achievements
            </h3>
            <span className="absolute w-[50px] h-[50px] -left-6 top-1/2 transform -translate-y-1/2 bg-lf-g rounded-full border-2 border-lf-dy flex items-center justify-center text-lf-dy font-bold">3</span>
          </div>
          <p className='text-[20px] text-lf-w leading-relaxed'>
            With more than 15 years of proven experience, our firm has successfully handled hundreds of cases across diverse practice areas. We are proud to have represented clients in landmark disputes, guided corporations through high-value transactions, and earned recognition from respected legal institutions. Each achievement reflects our unwavering commitment to excellence and results.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Story
