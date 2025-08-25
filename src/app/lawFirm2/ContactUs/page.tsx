import React from 'react'
import Footer from '../components/Footer'
import Topper from '@/components/Topper'
import ContactForm from './components/ContactForm'
import Hero from './Hero/Hero'

const page = () => {
  return (
    <div  className="overflow-hidden ">
      <div className="relative">
        <Hero/>
        <Topper
        className={''}
        direction = {"bottom"}
        shapeColor = {"#252B3D"}
        circleColor ={ "#252B3D"}
        iconColor = {"#fff"}
        />
      </div>
      <ContactForm/>
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
