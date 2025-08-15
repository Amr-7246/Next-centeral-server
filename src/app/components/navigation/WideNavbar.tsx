"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import AuthBtn from './AuthBtn'
import { useUserInfoContext } from '@/context/userInfoContext'
import Image from 'next/image'
import { logo, textContent } from '@/pub/assets'

const WideNavbar = () => {
  const content = textContent
  const { UserInfo : user } = useUserInfoContext()
  const curentPath = usePathname()
  return (
    <div>
      <nav  className=' bg-inverted-bg shadow-lg fixed top-0 shadow-black/30 px-[20px] py-3 hidden border-b border-[var(--border)] lg:px-[50px] md:!flex !justify-between items-center gap-3 h-fit w-[100%] !mx-auto z-30'>
        {/*//& Logo */}
          <div className=' flex-center flex-row gap-3 '>
              <Link href={"/"} >
                  <Image className='w-[100px] cursor-pointer' src={logo} alt="logo" />
              </Link>
          </div>
        {/*//& Nav Links */}
          <div className='flex-center lg:gap-8 gap-4 text-text-inverted mr-[50px]'>
              {content.navBar.options.map((option, idx) => (
                option.name == 'Portfolio' && user == null  ?
                <Link  className={` hidden ${curentPath == (option.fake_href) ? '!text-text' : ''} hover:!text-text duration-500 cursor-pointer`} key={idx}  href={option.href}> {option.name} </Link>
                :
                <Link  className={`${curentPath == (option.fake_href) ? '!text-text' : ''} hover:!text-text duration-500 cursor-pointer`} key={idx}  href={option.href}> {option.name} </Link>
              ))}
          </div>
        {/*//& Auth Buttons */}
          {/* <AuthBtn/> */}
      </nav >
    </div>
  )
}

export default WideNavbar
