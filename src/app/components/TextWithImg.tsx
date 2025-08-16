"use client"

import TextAnimator from '@/animations/TextAnimator'
import { home } from '@/pub/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SecLayerMask from './SecLayerMask'
import InfinityScrolling from "./InfinityScrolling"


const scrollingItems = [
  { icon: home.scroller_1 , label: 'LAZER Cutting ' },
  { icon: home.scroller_2, label: 'LAZER Cutting ' },
  { icon: home.scroller_3, label: 'LAZER Cutting ' },
  { icon: home.scroller_4, label: 'LAZER Cutting ' },
  { icon: home.scroller_5, label: 'LAZER Cutting ' },
  { icon: home.scroller_6, label: 'LAZER Cutting ' },
  { icon: home.scroller_7, label: 'LAZER Cutting ' },
  { icon: home.scroller_8, label: 'LAZER Cutting ' },
  { icon: home.scroller_9, label: 'LAZER Cutting ' },
  { icon: home.scroller_10, label: 'LAZER Cutting ' },
]

const TextWithImg = () => {
  const textNextImg = "text-text text-lg"
  const textNextImgDiv = "flex-center flex-col lg:flex-row h-fit gap-3"
  const textNextImgImg = "lg:w-[50%] w-[90%] h-[450px] rounded-lg overflow-hidden"

  return (
    <div>
      {/*//& text baner  */}
        <div className='page relative min-h-[50vh] flex-center flex-col lg:gap-10 gap-5 p-5'>
          <SecLayerMask />
          <div className={`${textNextImgDiv} hidden`} >
            <TextAnimator
              text={"Southern Engineering helps you streamline production by delivering high-quality, ready-to-use components—allowing you to focus on what matters most: growing your business. We specialise in precision repeatability—delivering the same high-quality result time after time, ensuring a seamless fit in your production line . . . "}
              animation={"chuncks"}
              className={`${textNextImg}`}/>
              <div className={`${textNextImgImg}`} >
                <Image className="" src={home.nextText_3} alt={'next text img'}  />
              </div>
          </div>
          <div className={`${textNextImgDiv}`} >
              <div className={`${textNextImgImg}`} >
                <Image className="" src={home.nextText_2} alt={'next text img'}  />
              </div>
            <TextAnimator
              text={"With state-of-the-art laser cutting and CNC folding driven by the most efficient software available, we deliver exceptional accuracy, reduce waste, and eliminate rework.From precision laser cutting, CNC folding, and fabrication to expert drilling/tapping, blasting, painting, and premium powder coating, our full-service offering ensures your components arrive finished and ready to use . . ."}
              animation={"chuncks"}
              className={`${textNextImg} !text-black`}/>
          </div>
          <div className={`${textNextImgDiv}`} >
            <TextAnimator
              text={" We also kit and sort orders to help streamline your assembly process. Wherever you are in Australia, we take the hassle out of manufacturing. With facilities in Ballarat and Adelaide, we provide national reach with local commitment—ensuring on-time delivery and quality you can trust. Our clients stay with us for the long term because we’re more than a supplier—we’re a trusted manufacturing partner who helps businesses grow. Let Southern Engineering help you do the same. Contact us today to simplify your manufacturing and boost your productivity."}
              animation={"chuncks"}
              className={`${textNextImg}`}/>
              <div className={`${textNextImgImg}`} >
                <Image className="" src={home.nextText} alt={'next text img'}  />
              </div>
          </div>
        </div>
      {/*//& scrolling cards  */}
        <div className='flex-center gap-3 flex-col'>
          <h2 className='text-[25px] text-bg-dark' >Our Manufacturing Services</h2>
          <p className='text-[20px] text-bg-dark/50 text-center'  >Comprehensive solutions for your production needs</p>
          <InfinityScrolling scrollingItems={scrollingItems} />
        </div>
    </div>
  )
}

export default TextWithImg
