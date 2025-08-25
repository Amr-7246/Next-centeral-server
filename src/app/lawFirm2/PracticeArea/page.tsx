import React from 'react'
import Footer from '../components/Footer'
import Topper from '@/components/Topper'
import PowerPreview from './components/PowerPreview'
import FirmStratigy from './components/FirmStratigy'
import Quot from './components/Quot'
import Hero from './Hero/Hero'

const page = () => {
  return (
    <div  className="overflow-hidden ">
      <div className="relative">
        <Hero/>
        <Topper
        className={''}
        direction = {"bottom"}
        shapeColor = {"#D9D9E2"}
        circleColor ={ "#D9D9E2"}
        iconColor = {"#252B3D"}
        />
      </div>
      <PowerPreview />
      <FirmStratigy />
      <Quot />
      <div className="relative">
        <Topper
        className={''}
        direction = {"top"}
        shapeColor = {"#fff"}
        circleColor ={ "#fff"}
        iconColor = {"#252B3D"}
        />
        <Footer/>
      </div>
    </div>
  )
}

export default page
