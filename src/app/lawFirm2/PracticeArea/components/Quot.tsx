import { Home } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import React from 'react'

const Quot = () => {
  return (
    <div className='relative min-h-[80vh] bg-lf-w ' >
      <div className='absolute -top-20 left-0 w-[30%] bg-black h-[500px]'></div>
      <div className='absolute top-20 left-20 w-[50%] h-[400px] overflow-hidden rounded-lg '>
        <Image src={Home.hero} alt={''} />
      </div>
      <div className='absolute top-[10%] w-[40%] right-10 px-10 pt-[70px] '>
        <h2 className="text-[30px] text-center text-lf-g" >Lead With Clarity, Act With Certainty</h2>
        <p  className="text-[20px] text-center text-lf-b" >The modern legal environment requires more than reactive defense; it calls for anticipatory guidance. Organizations must address rapid policy changes, evolving societal expectations, and intricate global disputes with strategies that align legal insight to commercial outcomes.</p>
      </div>
    </div>
  )
}

export default Quot