import { practicalArea } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import React from 'react'

const PowerPreview = () => {
  return (
    <section className='relative flex-center gap-10 h-[70vh] bg-white px-10 ' >

      <div className='rounded-lg w-[50%] h-[250px] overflow-hidden'>
        <Image className='' src={practicalArea.power_preview_1} alt={'power_preview'} />
      </div>

      <div className='rounded-lg w-[50%] h-[250px] p-5 bg-lf-db'>
        <h3 className='text-[30px] text-lf-dw mb-10' >Our wining point</h3>
        <p  className='text-center text-[20px] text-amber-200'  >Specializing in mission-critical advocacy, expertly navigating legal complexities and mitigating risks while balancing competing challenges. Adeptly handling the nuances of gray areas to ensure optimal outcomes.</p>
      </div>

    </section>
  )
}

export default PowerPreview
