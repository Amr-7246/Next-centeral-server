import { practicalArea } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import React from 'react'

const PowerPreview = () => {
  return (
    <section className='relative h-screen bg-lf-dw' >

      <div className='absolute top-[5%] left-[5%] '>
        <h2 className='text-[30px] text-lf-b'>Practic Area</h2>
      </div>

      <div className='absolute top-[10%] right-[5%] w-[50%] h-[45vh] overflow-hidden'>
        <Image className='' src={practicalArea.power_preview_1} alt={'power_preview'} />
      </div>

      <div className='absolute bottom-[15%] left-[5%] w-[55%] h-fit px-5 py-[80px] bg-lf-g'>
        <h3 className='text-[30px] text-lf-dw mb-10' >Our wining point</h3>
        <p  className='text-center text-[20px] text-amber-200'  >Specializing in mission-critical advocacy, expertly navigating legal complexities and mitigating risks while balancing competing challenges. Adeptly handling the nuances of gray areas to ensure optimal outcomes.</p>
      </div>

    </section>
  )
}

export default PowerPreview
