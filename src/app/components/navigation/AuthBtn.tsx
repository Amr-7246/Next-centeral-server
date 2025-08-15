"use client"
import DropList from '@/components/DropList'
import { useUserInfoContext } from '@/context/userInfoContext'
import { logo, textContent } from '@/pub/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
const appContent = textContent 

const AuthBtn = () => {
  const { UserInfo : user } = useUserInfoContext()
    const [isOpen, setIsOpen] = React.useState(false);

    const sampleItems = [
      { id: '2', label: 'User Profile', value: user?._id ? `/auth/${user._id}` : '', icon: '👤' },
      { id: '1', label: 'Your Appointments', value: user?._id ? `/auth/${user._id}/appointments` : '' , icon: '📊' },
      { id: '5', label: 'Explor Our Doctors', value: '/doctors', icon: '📋'},
      { id: '6', label: 'Help Center', value: '/contact', icon: '❓' },
    ];

  return (
    <div>
      {
        user == null ?
          <div className='flex-center flex-row gap-2'>
          <Link href={appContent.navBar.login} className=' btn'>log In</Link>
          <Link href={appContent.navBar.signin} className='btn  hover:!via-black  hover:from-amber-300/30 hover:to-amber-300/30  from-amber-200/30 via-black to-amber-200/30 '>Sign Up</Link>
          </div>
        :
        <div className='flex-center !justify-between flex-row gap-2 px-4 py-1 bg-white rounded-xl'>
          <Image className=' w-[70px] rounded-full ' src={user.pictuer.imageURL == '' ? logo : user.pictuer.imageURL} alt={'personal pic'} />
          {/*//& Custom Styled DropList */}
            <div className="">
              <DropList
                title="Custom Style"
                setIsOpened={setIsOpen}
                IsOpened={isOpen}
                items={sampleItems}
                buttonClassName="border-left border-black h-full text-indigo-600 hover:text-indigo-300"
                listClassName="border-blue-500"
                onItemSelect={(item: any) => console.log('Custom styled selected:', item)}
                route={''}
              />
            </div>
        </div>
      }
    </div>
  )
}

export default AuthBtn
