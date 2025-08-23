import { IconicBtn } from '@/components/Buttons'
import { RiTeamFill } from "react-icons/ri";
import React from 'react'

const FirmPref = () => {
  return (
    <>
      {/*//& text content */}
        <div className='absolute left-0 top-[30%] border-l-2 border-white/50 h-[50%] w-[40vw] flex flex-col items-between justify-between'>
          <div>
            <p className="text-lf-dw text-[17px] w-full mx-auto border-b-2 border-white/50 p-5 text-center">
              Trusted legal advisors with decades of combined experience in business, family, and corporate law.
            </p>
            
            {/*//& Stats */}
            <div className="flex justify-center gap-8 p-5">
              <div className="text-center ">
                <p className="text-amber-200 text-[17px] font-bold">10,000+</p>
                <p className="text-white text-[15px]">Clients</p>
              </div>
              <div className="text-center ">
                <p className="text-amber-200 text-[17px] font-bold">15+</p>
                <p className="text-white text-[15px]">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-amber-200 text-[17px] font-bold ">8,000+</p>
                <p className="text-white text-[15px]">Resolved Cases</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="z-2 pb-2 pl-5 w-full text-center text-[23px] text-amber-200 border-b-2 border-white/50 ">
              Our definition of success is yours.
            </h2>
            <p className='text-[18px] text-center text-white p-5' >When you choose our firm, you are not just hiring a law firm. You are securing a partner with a strategic outlook. A partner that is as personally invested in your end goal as you are. And that makes a world of difference to both of us.</p>
          </div>
        </div>

        <div className='absolute bottom-10 right-10 w-[50%] flex flex-col gap-5' >
          <h2 className="z-2 pb-2 w-full text-center text-[23px] text-amber-200 border-b-2 border-white/50 ">
            Strength in unity. Excellence in every case
          </h2>
          <p className='text-[18px] text-center text-white' >Behind every client success stands a united team. Our attorneys bring together decades of combined expertise, diverse specializations, and relentless dedication—working as one to secure the strongest outcomes for you</p>
          <IconicBtn text={"Explor Out team"} icon={<RiTeamFill/>} iconStyle={'bg-black text-white'} buttonColors={'bg-white/50 text-black backdrop-blur-lg'}  />
        </div>
    </>
  )
}

export default FirmPref