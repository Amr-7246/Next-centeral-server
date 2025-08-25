import { practicalArea } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import React from 'react'

const PowerPreview = () => {
  return (
    <section className='relative h-[70vh] bg-gradient-to-br from-lf-dw via-lf-dw to-lf-db' >

      <div className='absolute top-[5%] left-[5%] transform hover:translate-x-2 transition-transform duration-300'>
        <h2 className='text-[30px] text-lf-b pl-3 border-l-[5px] border-amber-400 rounded-sm font-bold tracking-tight'>Practice Area</h2>
      </div>

      <div className='absolute top-[10%] rounded-xl right-[5%] w-[50%] h-[45vh] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500'>
        <Image 
          className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-700' 
          src={practicalArea.power_preview_1} 
          alt={'power_preview'} 
        />
      </div>

      <div className='absolute bottom-[17%] left-[5%] w-[55%] h-fit px-8 py-[80px] bg-gradient-to-br from-lf-g to-lf-g/90 rounded-xl shadow-2xl backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-500'>
        <h3 className='text-[32px] text-lf-dw mb-10 font-bold tracking-tight' >Our Winning Point</h3>
        <p className='text-center text-[20px] text-amber-200 leading-relaxed font-light'>
          Specializing in mission-critical advocacy, expertly navigating legal complexities and mitigating risks while balancing competing challenges. Adeptly handling the nuances of gray areas to ensure optimal outcomes.
        </p>
      </div>

    </section>
  )
}

export default PowerPreview
