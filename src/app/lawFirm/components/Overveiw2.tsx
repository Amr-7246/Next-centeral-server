//& random_image https://picsum.photos/400
import React from 'react'
import { TribelHexagone } from '../SVG/Shaps'
import SoloHexagone from '../SVG/SoloHexagone'
import { Home, svg_bg } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import { CuttedBtn, IconicBtn } from '@/components/Buttons'
import { AboutIcon } from '../SVG/icons/icons'
import { FcAbout } from "react-icons/fc";
import { CiViewList } from "react-icons/ci";

const Overveiw2 = () => {
  return (
    <div className='w-full min-h-screen relative flex flex-col gap-5'>
      <Image
          src={svg_bg.svg_bg_1}
          alt="layout"
          fill
          className="absolute inset-0 object-cover -z-10"
        />
      {/*//& firist layer */}
      <div className='flex-center w-full gap-8 px-5 pt-20' >

          <div className='w-[35%] text-white flex-center flex-col gap-3'>
            <h2 className="z-2 pb-2 w-full text-center text-[23px] text-amber-200 border-b-2 border-lf-dy ">
              Our definition of success is yours.
            </h2> 
            <p className='text-[18px] text-center' >When you choose our firm, you are not just hiring a law firm. You are securing a partner with a strategic outlook. A partner that is as personally invested in your end goal as you are. And that makes a world of difference to both of us.</p>
          </div>

          <div className='w-fit h-fit rotate-30 duration-700 flex-center ml-4 -mr-4'>
            <TribelHexagone
              width={350}
              height={350}
              imageUrl={"/assets/lowFirm/hero.jpg"}
              maskText=""
              textColor="yellow"
              textSize={24}
            />
          </div>

          <div className='w-[35%] text-amber-200 flex-center flex-col gap-3'>
            <h2 className="z-2 pb-2 w-full text-center text-[23px]  border-b-2 border-lf-dw text-white ">
              We measure victory by the peace of mind we deliver.
            </h2>
            <p className='text-[18px] text-center' >We don’t just handle cases—we safeguard futures. With us, you’ll find a legal team dedicated to protecting your rights, guiding your decisions, and standing firm beside you at every stage</p>
          </div>
      </div>
      {/*//& second layer */}
      <div className='flex-center gap-5 '>

        <div className=' w-fit h-fit duration-700'>
          <SoloHexagone
            width={350}
            height={350}
            imageUrl={"/assets/lowFirm/overveiw_2.jpg"}
            maskText=""
            textColor="yellow"
            textSize={24}
          />
        </div>

        <div className='w-[43%] text-white flex justify-between flex-col gap-3'>
          <h2 className="z-2 pb-2 w-full text-center text-[23px] text-amber-200 border-b-2 border-lf-dy  ">
            Strength in unity. Excellence in every case
          </h2>
          <p className='text-[18px] text-center' >Behind every client success stands a united team. Our attorneys bring together decades of combined expertise, diverse specializations, and relentless dedication—working as one to secure the strongest outcomes for you</p>
        </div>

        <div className=' w-fit h-fit duration-700'>
          <SoloHexagone
            width={350}
            height={350}
            imageUrl={"/assets/lowFirm/about/team_1.jpg"}
            maskText=""
            textColor="yellow"
            textSize={24}
          />
        </div>

      </div>
      {/*//& theird layer */}
      <div className="relative flex-center flex-col w-full mt-[10vh] mb-[20vh]">

        <div className='relative overflow-hidden z-5 rounded-4xl w-[70%] h-[250px] flex-center text-lf-dw '>
          <Image
            src={Home.hero_4}
            alt={"layerMask"}
            className="absolute z-1 inset-0 w-full h-full object-cover "
          />
          <div className='relative flex-center flex-col gap-3 p-10 bg-black/80 w-full h-full z-2 '>
            <h2 className="z-2 text-center text-amber-200 text-[27px] w-[80%] mx-auto">
              Our story is built on one principle . .
              When our clients succeed, so do we.
            </h2>
            <CuttedBtn
              text="Learn More"
              icon={<CiViewList />}
              iconStyle="text-black"
              buttonColors="bg-white text-black"
              textStyle="tracking-wide"
              svgStyle="text-white opacity-20"
            />
            {/* <CuttedBtn  text="Launch"  buttonColors="bg-gradient-to-r from-purple-600 to-pink-600 text-white" textStyle="tracking-widest" svgStyle="text-yellow-400 opacity-40"/> */}
            {/* <IconicBtn text={"Learn More"} icon={<CiViewList />} iconStyle={'bg-black text-white'} buttonColors={'bg-white text-black '} /> */}
            <div className='text-whtie text-[20px] w-[50px] flex-center flex-col gap-2 absolute right-[5%]'>
              <span className='' >01</span>
              <span className='w-[2px] h-[50px] bg-white ' />
              <span className='' >02</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overveiw2
