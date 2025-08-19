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
      <nav  className=' bg-gray-900 shadow-lg fixed top-0 shadow-black/30 px-[20px] py-6 hidden border-b border-[var(--border)] lg:px-[50px] md:!flex !justify-between items-center gap-3 h-fit w-[100%] !mx-auto z-30'>
        {/*//& Logo */}
          <div className=' flex-center flex-row gap-1 text-[35px]'>
            <span className="text-amber-400">MAC</span>{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px white",
              }}
            >
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
