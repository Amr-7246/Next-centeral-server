import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Topper from '@/components/Topper'
import ClientsSays from './components/ClientsSays'
import ContactForm from './components/ContactForm'
import FinalGalary from './components/Galary'
import CeracomaPref from './components/Pref'

const page = () => {
  return (
    <div>
      <div className="relative">
        <Hero/>
        <Topper
        className={''}
        direction = {"bottom"}
        shapeColor = {"#d9eeff"}
        circleColor ={ "#d9eeff"}
        iconColor = {"#000000"}
        />
      </div>
      <FinalGalary/>
      {/* <CeracomaPref/> */}
      <div className="relative">
        <Topper
        className={''}
        direction = {"bottom"}
        shapeColor = {"#d9eeff"}
        circleColor ={ "#d9eeff"}
        iconColor = {"#000000"}
        />
        <ClientsSays/>
      </div>
      <ContactForm/>
      <div className="relative">
        <Topper
        className={''}
        direction = {"top"}
        shapeColor = {"#d9eeff"}
        circleColor ={ "#d9eeff"}
        iconColor = {"#000000"}
        />
        <Footer/>
      </div>
    </div>
  )
}

export default page
