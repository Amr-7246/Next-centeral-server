import React from 'react'
import Image from 'next/image'
import { Home } from '@/pub/assets/lowFirm'

const TruthtHook = () => {
  return (
    <div className='flex flex-row justify-between bg-lf-g pb-[100px]'>
      {/* Left Image */}
      <div className='w-[35%] relative'>
        <Image src={Home.hero} alt={'trust'} />
        <span className='shadow-lg shadow-lf-dw/20 w-full h-full bg-black/50 backdrop-blur-[1px] absolute top-5 left-5' />
      </div>

      {/* Right Content */}
      <div className='w-[55%] p-5 flex flex-col gap-5'>
        <p className='text-[30px] rounded-bl-md text-amber-200 relative p-3 border border-t-0 border-r-0 border-lf-dy'>
          Why Clients Trust Us
        </p>

        <p className='text-[20px] text-lf-w'>
          For over a decade, we have been the legal partner of choice for individuals and businesses seeking clarity in complex situations. 
          Our commitment to integrity, transparency, and proven results has earned us long-standing client relationships built on confidence and respect.
        </p>

        {/* CTAs */}
        <div className='flex gap-4 mt-3'>
          <button className='px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition'>
            Schedule Consultation
          </button>
          <button className='px-6 py-3 border border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition'>
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  )
}

export default TruthtHook
