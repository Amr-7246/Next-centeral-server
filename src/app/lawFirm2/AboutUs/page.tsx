import React from 'react'
import Footer from '../components/Footer'
import Topper from '@/components/Topper'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import TruthtHook from './components/TruthtHook'
import Team from './components/Team'
import Hero from './components/Hero/Hero'

const page = () => {
  return (
    <div  className="overflow-hidden ">
      <Hero/>
      <Story/>
      <Testimonials/>
      <Team/>
      <TruthtHook/>
      <div className="relative">
        <Topper
        className={''}
        direction = {"top"}
        shapeColor = {"#252B3D"}
        circleColor ={ "#252B3D"}
        iconColor = {"#000000"}
        />
        <Footer/>
      </div>
    </div>
  )
}

export default page
