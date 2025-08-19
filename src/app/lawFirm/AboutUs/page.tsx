import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Topper from '@/components/Topper'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import TruthtHook from './components/TruthtHook'
import Team from './components/Team'

const page = () => {
  return (
    <div>
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
