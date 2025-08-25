import { IconicBtn } from '@/components/Buttons'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { PiReadCvLogoFill } from "react-icons/pi";

interface props {
  image: string | StaticImageData,
  title: string
  pref: string
  cardS?: string
  right?: boolean
  PStyle?: string
  cta?: string
}

const CardLine = ({image, title, pref, cardS, right, PStyle, cta = " . . read More "}:props) => {
  const finallCardStyles = cardS ? cardS : right ? " absolute top-0 -right-5 " : " absolute top-0 -left-5 "
  const finallPStyles = PStyle ? PStyle : right ? " absolute top-10 -left-5 text-amber-200" : " absolute top-10 -right-5 text-lf-w "
  return (
    <div className='relative h-[300px] ' >
      {/*//& pining Dots */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20">
        <div className="w-6 h-6 bg-gradient-to-br from-white to-amber-200 rounded-full shadow-lg animate-pulse" />
      </div>
      <div className="absolute h-full left-1/2 top-0 -translate-x-1/2 z-10">
        <div className="w-[2px] h-full bg-gradient-to-b from-white via-amber-200 to-lf-dw/50 shadow-lg" />
      </div>
      {/*//& card */}
      <div className={`${finallCardStyles} w-[50%] h-[180px] transform hover:scale-[1.02] transition-all duration-500`}>
        <div className="relative w-[95%] h-full lg:w-full bg-black/95 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-center p-10 mx-auto backdrop-blur-sm">
          {/* Background */}
          <Image
            src={image}
            alt={title}
            fill
            className="absolute inset-0 object-cover opacity-20 "
          />
    
          {/* Content */}
          <div className="relative flex-center gap-6 z-10">
            <h2 className="text-3xl w-fit md:text-4xl font-bold text-white flex items-center gap-3 text-center ">
              {title}
            </h2>
          </div>

      {/* Decorative corner accents */}

        {/* Top Left Corner Box */}
        <span className="w-[150px] rounded-tl-2xl absolute h-[80px] border border-b-0 border-r-0 border-white left-[30px] top-[30px]" />
      {/* Pulsing Dots */}
        <div className="w-fit absolute h-fit left-[28px] top-[150px] flex-center gap-2 flex-col">
          <span className="w-[10px] h-[10px] rounded-full bg-lf-w animate-pulse" />
          <span className="w-[10px] h-[10px] rounded-full bg-lf-w animate-pulse" />
          <span className="w-[10px] h-[10px] rounded-full bg-lf-w animate-pulse" />
        </div>

      {/* Small Motto */}
        <span className="text-[10px] text-lf-w font-bold absolute w-fit left-[185px] top-[23px]">
          THE FIRM NAME
        </span>

      {/* Bottom Right Corner Box */}
        <span className="w-[80px] rounded-br-2xl absolute h-[150px] border border-t-0 border-l-0 border-lf-dy right-[30px] bottom-[30px]" />

      {/* Small Motto */}
        <span className="text-[10px] text-lf-dy font-bold absolute w-fit right-[115px] bottom-[22px]">
          YOUR BEST CHOICE
        </span>

      {/* Pulsing Dots */}
        <div className="w-fit absolute h-fit right-[28px] bottom-[250px] flex-center gap-2 flex-col">
          <span className="w-[10px] h-[10px] rounded-full bg-lf-dy animate-pulse" />
          <span className="w-[10px] h-[10px] rounded-full bg-lf-dy animate-pulse" />
          <span className="w-[10px] h-[10px] rounded-full bg-lf-dy animate-pulse" />
        </div>
        </div>
      </div>
      {/*//& pref */}
      <div className={` ${finallPStyles} flex-center flex-col gap-3 text-[20px]  w-[50%] text-center `}>
        {pref} <br />
        <span >
          <IconicBtn text={ cta } icon={<PiReadCvLogoFill/>} iconStyle={'bg-white text-black'} buttonColors={'bg-black text-white'} />
        </span>
      </div>

    </div>
  )
}

export default CardLine