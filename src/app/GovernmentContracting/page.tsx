import React from 'react'
import Hero from './components/Hero'
import GlobalNav from './components/navigation/GlobalNavBar'
import Mistakes from './components/Mistakes'
import MeetMAC from './components/MeetMAC'
import MACForm from './components/MACForm'
import MACFooter from './components/MACFooter'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <GlobalNav/>
      <Hero/>
      <Mistakes/>
      <MeetMAC/>
      <MACForm/>
    </div>
  )
}

export default page