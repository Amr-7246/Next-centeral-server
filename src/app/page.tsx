"use client"

import TextAnimator from '@/animations/TextAnimator'
import { home } from '@/pub/assets'
import Image from 'next/image'
import React from 'react'
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TextWithImg from "./components/TextWithImg";
import LayerMask from './components/LayerMask'
import Topper from '@/components/Topper'

export default function Page() {

  return (
    <div className=''>
      <Hero />
      <div className={`lg:p-[50px] mb-10 px-[15px] py-[50px] bg-bg-dark relative flex-center flex-col lg:flex-row h-fit gap-5`} >
        <LayerMask/>
        <TextAnimator
          text={"Southern Engineering helps you streamline production by delivering high-quality, ready-to-use components—allowing you to focus on what matters most: growing your business. We specialise in precision repeatability—delivering the same high-quality result time after time, ensuring a seamless fit in your production line . . . "}
          animation={"chuncks"}
          className={`text-bg text-lg`}/>
          <div className={`lg:w-[50%] md:w-[75%] w-full h-[350px] rounded-lg overflow-hidden`} >
            <Image className="" src={home.nextText_3} alt={'next text img'}  />
          </div>
          <Topper 
          className={''}
          direction = {"bottom"}
          shapeColor = {"#ffddc6"}
          circleColor ={ "#ffddc6"}
          iconColor = {"#000000"}
          />
      </div>
      <TextWithImg />
      <div className="relative">
          <Topper 
          className={''}
          direction = {"top"}
          shapeColor = {"#ffddc6"}
          circleColor ={ "#ffddc6"}
          iconColor = {"#000000"}
          />
      <Footer/>
      </div>
    </div>
  );
}
