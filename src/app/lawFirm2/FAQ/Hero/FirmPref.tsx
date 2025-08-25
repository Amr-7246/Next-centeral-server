import { IconicBtn } from '@/components/Buttons'
import { RiTeamFill } from "react-icons/ri";
import React from 'react'

const FirmPref = () => {
  return (
    <>
      {/*//& text content */}
        <div className=' pt-[100px] absolute left-0 top-[30%] border-l-2 border-white/50 h-[50%] w-[40vw] flex flex-col items-between justify-between'>
          <div>
            <p className="text-lf-dw text-[17px] w-full mx-auto border-b-2 border-white/50 p-5 text-center">
              Trusted legal advisors with decades of combined experience in business, family, and corporate law.
            </p>

            {/*//& Stats */}
            <div className="flex justify-center gap-8 p-5">
              <div className="text-center ">
                <p className="text-lf-dy text-[17px] font-bold">10,000+</p>
                <p className="text-white text-[15px]">Clients</p>
              </div>
              <div className="text-center ">
                <p className="text-lf-dy text-[17px] font-bold">15+</p>
                <p className="text-white text-[15px]">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-lf-dy text-[17px] font-bold ">8,000+</p>
                <p className="text-white text-[15px]">Resolved Cases</p>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default FirmPref
