import { about, Home } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import React from 'react'

const Story = () => {
  return (
    <div>
      <div className='flex flex-row justify-between bg-lf-g'>
        <div className='w-[35%] relative'>
          <Image src={about.stroy_1} alt={'story'}/>
          <span className='shadow-lg shadow-lf-dw/20 w-full h-full bg-black/50 backdrop-blur-[1px] absolute top-5 left-5 ' />
        </div>
        <div className='w-[55%] p-5 flex  flex-col gap-3 '>
          <p className='text-[30px] rounded-bl-md text-amber-200 relative p-3 border border-t-0 border-r-0 border-lf-dy ' >Our Story 
          </p>
          <p className='text-[20px] text-lf-w ' >Established in 2008, our law firm was founded on a simple but powerful principle: justice should be accessible, transparent, and uncompromising. Over the years, we have grown into a trusted legal partner for both individuals and businesses, providing counsel that is not only strategic but also deeply personal. </p>
        </div>
      </div>

      <div className='flex flex-row justify-between bg-lf-g pt-[50px]'>
        <div className='w-[55%] p-5 flex  flex-col gap-3 '>
          <p className='text-[30px] rounded-bl-md text-amber-200 relative p-3 border border-t-0 border-r-0 border-lf-dy ' >Our Mission
          </p>
          <p className='text-[20px] text-lf-w ' > Our mission is to combine deep legal expertise with genuine client advocacy. We believe every case deserves meticulous attention, clear communication, and tailored solutions. Whether navigating complex corporate matters or protecting personal rights, we are committed to standing by our clients with integrity and dedication.</p>
        </div>
        <div className='w-[35%] relative'>
          <Image src={about.stroy_3} alt={'story'}/>
          <span className='shadow-lg shadow-lf-dw/20 w-full h-full bg-black/50 backdrop-blur-[1px] absolute top-5 right-5 ' />
        </div>
      </div>

      <div className='flex flex-row justify-between bg-lf-g'>
        <div className='w-[35%] relative'>
          <Image src={about.stroy_2} alt={'story'}/>
          <span className='shadow-lg shadow-lf-dw/20 w-full h-full bg-black/50 backdrop-blur-[1px] absolute top-5 left-5 ' />
        </div>
        <div className='w-[55%] px-5 pt-[100px] flex  flex-col gap-3 '>
          <p className='text-[30px] rounded-bl-md text-amber-200 relative p-3 border border-t-0 border-r-0 border-lf-dy ' >Some of our Achievements
          </p>
          <p className='text-[20px] text-lf-w ' > With more than 15 years of proven experience, our firm has successfully handled hundreds of cases across diverse practice areas. We are proud to have represented clients in landmark disputes, guided corporations through high-value transactions, and earned recognition from respected legal institutions. Each achievement reflects our unwavering commitment to excellence and results.</p>
        </div>
      </div>
    </div>
  )
}

export default Story
            {/* <span className="absolute w-full h-[2px] left-0 bottom-0  bg-lf-dy" />
            <span className="absolute w-[2px] h-full left-0 bottom-0  bg-lf-dy" /> */}