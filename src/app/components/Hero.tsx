"use client"

import TextAnimator from '@/animations/TextAnimator'
import { cpabilities, home } from '@/pub/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SecLayerMask from './SecLayerMask'
import LayerMask from "./LayerMask"

const Hero = () => {
  return (
    <div>
      {/*//& Hero baner  */}
        <div className=" overflow-hidden px-5 relative w-full bg-bg-dark h-screen flex flex-col gap-10" >
          {/* <LayerMask /> */}
          <div className="absolute inset-0">
            <Image
              src={home.hero}
              // src={cpabilities.cpabilities_5}
              alt="Capabilities Background"
              fill
              className="object-cover"
            />
            {/* Layer Mask */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
          {/* <div className='z-[2] relative shadow-lg shadow-stone-700 lg:w-[70%] w-[10%] overflow-hidden rounded-lg border border-white/20' >
            <Image src={home.hero} alt={'hero'} />
            <span className="bg-bg-dark/25 w-full h-full top-0 absolute z-5" />
          </div> */}
          <div className='z-[2] lg:w-[55%] w-[95%] pt-[160px] md:pl-10 flex flex-col justify-end gap-5' >
            <p className={"text-text-inverted lg:text-[30px] text-[22px] "} >
              Southern Engineering – Your Partner in Production Precision Laser Cutting, Folding & Fabrication Solutions <br />
              <Link href={'/contact'} >
                <button className='pl-5 text-white text-lg hover:underline cursor-pointer' >So . . . Just Let us work with you</button>
              </Link>
            </p>
            <div className='flex justify-start gap-3'>
              <Link href={'/capabilities'} >
                <button className='btn_II'>Capabilities</button>
              </Link>
              <Link href={'/about'} >
                <button className='btn_I' >About us</button>
              </Link>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Hero

  // {/*//& curvey footer */}
  //   {/* <div className='absolute w-full h-[100px]'>
  //     <span className=' w-full h-[100px]' />
  //     <span className=' w-[50px] h-[50px]' />
  //   </div> */}
