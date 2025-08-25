import { Home } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import React from 'react'

const Quot = () => {
  return (
    <div className='relative min-h-[80vh] bg-gradient-to-br from-lf-w via-white to-amber-50' >
      <div className='absolute -top-20 left-0 w-[30%] bg-gradient-to-br from-black to-lf-g h-[500px] rounded-br-3xl shadow-2xl'></div>
      
      <div className='absolute top-20 left-20 w-[50%] h-[400px] overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500'>
        <Image 
          src={Home.hero} 
          alt={'Quote background'} 
          className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-700'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
      </div>
      
      <div className='absolute top-[10%] w-[40%] right-10 px-12 pt-[70px] transform hover:-translate-y-2 transition-transform duration-500'>
        <h2 className="text-[36px] text-center text-lf-g font-bold tracking-tight mb-8" >
          Lead With Clarity, Act With Certainty
        </h2>
        <p className="text-[20px] text-center text-lf-b leading-relaxed font-light" >
          The modern legal environment requires more than reactive defense; it calls for anticipatory guidance. Organizations must address rapid policy changes, evolving societal expectations, and intricate global disputes with strategies that align legal insight to commercial outcomes.
        </p>
      </div>
    </div>
  )
}

export default Quot