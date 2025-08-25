import { IconicBtn } from '@/components/Buttons'
import { RiTeamFill } from "react-icons/ri";
import React from 'react'

const FirmPref = () => {
  return (
    <>
      {/*//& text content */}
        <div className='pt-[100px] absolute left-0 top-[30%] border-l-2 border-sky-400/50 h-[50%] w-[40vw] flex flex-col items-between justify-between bg-gradient-to-r from-black/40 via-black/20 to-transparent backdrop-blur-sm'>
          <div>
            <p className="text-white text-xl font-light w-full mx-auto border-b border-sky-400/30 p-8 text-center leading-relaxed">
              Trusted legal advisors with decades of combined experience in business, family, and corporate law.
            </p>

            {/*//& Stats */}
            <div className="flex justify-center gap-12 p-8">
              <div className="text-center transform hover:scale-105 transition-transform">
                <p className="text-sky-400 text-3xl font-bold mb-2">10,000+</p>
                <p className="text-white text-lg font-medium">Satisfied Clients</p>
                <div className="w-12 h-1 bg-sky-400 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <p className="text-sky-400 text-3xl font-bold mb-2">15+</p>
                <p className="text-white text-lg font-medium">Years of Excellence</p>
                <div className="w-12 h-1 bg-sky-400 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <p className="text-sky-400 text-3xl font-bold mb-2">8,000+</p>
                <p className="text-white text-lg font-medium">Successful Cases</p>
                <div className="w-12 h-1 bg-sky-400 mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default FirmPref
