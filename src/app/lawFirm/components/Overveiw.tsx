import Cyrcel from '@/components/Cyrcel';
import { about, Home } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import React from 'react'
import { FaBalanceScale, FaHandshake } from "react-icons/fa";

const Overveiw = () => {
  return (
    <section className='h-fit bg-lf-dw flex-center flex-col gap-10 p-5 overflow-hidden'>
      {/*//& firist layer */}
        <div className="relative flex-row gap-[50px] flex-center ">
          <div className='relative z-5 rounded-xl w-[40%] h-[500px] p-5 flex-center text-lf-dw '>
            <Image
              src={Home.overveiw_1}
              alt={"layerMask"}
              className="absolute z-1 inset-0 w-full h-full object-cover rounded-xl "
            />
            <span className='absolute z-1 inset-0 w-full h-full bg-black/50 rounded-xl ' />
            {/*//& content div */}
              <div className='h-fit z-5 w-[60vw] absolute top-[10%] -right-[50%] bg-black/80 backdrop-blur-md flex-center px-5 py-10' >
                <h2 className="z-2 text-[27px] text-amber-200 ">
                  Our definition of success is yours.
                </h2>
              </div>

          </div>
          <Cyrcel position={'bottom-[-70%] -right-[50%] z-0 rotate-90'} color={"border-gray-600/50 "}/>
          {/*//& side image Hook text */}
            <div className="z-5 relative  w-[55%] flex-center flex-col gap-5 h-full p-[30px] mt-[20vh] mr-[10vw]">
              <div className="absolute -top-[29%] right-0 ">
                <h2 className='text-[25px] rounded-br-md text-lf-b relative pb-3 px-3 border-[2px] border-t-0 border-l-0 border-lf-db '>We consider Your problem ours . . </h2>
              </div>
              <p className='text-[23px] text-center' >When you choose Ogilvie, you are not just hiring a law firm. You are securing a partner with a strategic outlook. A partner that is as personally invested in your end goal as you are. And that makes a world of difference to both of us.</p>
            </div>
          
        </div>
      {/*//& second layer */}
        <div className="relative flex flex-row gap-[50px] z-5">

          <Cyrcel position={'bottom-[-100%] -left-[50%] z-0 -rotate-90'} color={"border-gray-600/50 "}/>
          
          <div className="w-[40%] flex-center flex-col gap-5 h-[500px] p-[30px]">
            <p className='text-[27px] text-center' >Behind every client success stands a united team. Our attorneys bring together decades of combined expertise, diverse specializations, and relentless dedication—working as one to secure the strongest outcomes for you.  </p>
          </div>

          <div className='relative rounded-xl w-[50%] h-[500px] p-5 flex-center text-[60px] text-lf-dw '>
            <Image
              src={about.team_1}
              alt={"layerMask"}
              className="absolute z-1 inset-0 w-full h-full object-cover rounded-xl "
            />
            <div className='absolute rounded-xl flex-center p-10 bg-black/75 w-full h-full z-2 -top-10 -left-10 rouunded-xl'>
              <h2 className="z-2 text-center text-[40px] text-white ">
                Strength in unity. Excellence in every case.   
              </h2>
            </div>
          </div>

        </div>
      {/*//& theard layer */}
        <div className="relative flex-row gap-[50px] flex-center ">
          <div className='relative z-5 rounded-xl w-[40%] h-[500px] p-5 flex-center text-lf-dw '>
            <Image
              src={Home.overveiw_2}
              alt={"layerMask"}
              className="absolute z-1 inset-0 w-full h-full object-cover rounded-xl "
            />
            <span className='absolute z-1 inset-0 w-full h-full bg-black/50 rounded-xl ' />
            {/*//& content div */}
              <div className='h-fit z-5 w-[60vw] absolute top-[10%] -right-[50%] bg-black/80 backdrop-blur-md flex-center px-5 py-10' >
                <h2 className="z-2 text-[27px] text-amber-200 ">
                  We measure victory by the peace of mind we deliver.
                </h2>
              </div>

          </div>
          {/*//& side image Hook text */}
            <div className="z-5 relative  w-[55%] flex-center flex-col gap-5 h-full p-[30px] mt-[20vh] mr-[10vw]">
              <p className='text-[23px] text-center' >We don’t just handle cases—we safeguard futures. With us, you’ll find a legal team dedicated to protecting your rights, guiding your decisions, and standing firm beside you at every stage.  </p>
            </div>
          
        </div>
      {/*//& fourest layer */}
        <div className="relative flex-center flex-col w-full mt-[10vh] mb-[20vh]">

          <div className='relative overflow-hidden z-5 rounded-4xl w-[80%] h-[250px] flex-center text-lf-dw '>
            <Image
              src={Home.hero_3}
              alt={"layerMask"}
              className="absolute z-1 inset-0 w-full h-full object-cover "
            />
            <div className='relative flex-center flex-col gap-3 p-10 bg-black/90 w-full h-full z-2 '>
              <h2 className="z-2 text-center text-amber-200 text-[27px] w-[80%] mx-auto">
                Our story is built on one principle . . 
                When our clients succeed, so do we.  
              </h2>
              <button className="underline  text-center text-white text-[20px]">Learn More</button>
              <div className='text-whtie text-[20px] w-[50px] flex-center flex-col gap-2 absolute right-[5%]'>
                <span className='' >01</span>
                <span className='w-[2px] h-[50px] bg-white ' />
                <span className='' >02</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Overveiw