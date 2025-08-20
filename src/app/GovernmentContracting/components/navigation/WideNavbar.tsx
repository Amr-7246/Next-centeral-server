"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import AuthBtn from './AuthBtn'
import { useUserInfoContext } from '@/context/userInfoContext'
import Image from 'next/image'
import textContent from "../../AppContent.json"

const WideNavbar = () => {
  const content = textContent
  const { UserInfo : user } = useUserInfoContext()
  const curentPath = usePathname()
  return (
    <div>
      <nav  className=' bg-mac-db shadow-lg fixed top-0 shadow-black/30 px-[20px] py-2 hidden border-b border-[var(--border)] lg:px-[50px] md:!flex !justify-between items-center gap-3 h-fit w-[100%] !mx-auto z-30'>
          {/*//& Logo */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-[32px] bg-black rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-xl">
                <span className="text-white">M</span>
                <span className="text-mac-dy">A</span>
                <span className="text-blue-900">C</span>
              </div>
                <span
                  className="text-[25px]"
                  style={{ color: "transparent", WebkitTextStroke: "1px white", }} >
                    Consulting
                </span>
            </div>
        {/*//& Nav Links */}
          <div className='flex-center lg:gap-8 gap-4 text-white mr-[50px]'>
              {content.navBar.options.map((option, idx) => (
                option.name == 'Portfolio' && user == null  ?
                <Link  className={` hidden ${curentPath == (option.fake_href) ? '!text-[#B8860B]' : ''} hover:!text-[#B8860B] duration-500 cursor-pointer`} key={idx}  href={option.href}> {option.name} </Link>
                :
                <Link  className={`${curentPath == (option.fake_href) ? '!text-[#B8860B]' : ''} hover:!text-[#B8860B] duration-500 cursor-pointer`} key={idx}  href={option.href}> {option.name} </Link>
              ))}
          </div>
        {/*//& Auth Buttons */}
          {/* <AuthBtn/> */}
      </nav >
    </div>
  )
}

export default WideNavbar
