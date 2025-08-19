import React from 'react'
import Hero from './components/Hero'
import GlobalNav from './components/navigation/GlobalNavBar'
import Mistakes from './components/Mistakes'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <GlobalNav/>
      <Hero/>
      <Mistakes/>
    </div>
  )
}

export default page