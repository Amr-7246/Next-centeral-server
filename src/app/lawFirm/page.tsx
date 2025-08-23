import React from 'react'
import Hero from './components/Hero'
import Overveiw from './components/Overveiw'
import Footer from './components/Footer'
import Topper from '@/components/Topper'
import ProvenResults from './components/ProvenResults'
import PracticalRef from './components/PracticalRef'
import ClientsSays from './components/ClientsSays'
import TeamRef from './components/TeamRef'
import ContactRef from './components/ContactRef'
import Overveiw2 from './components/Overveiw2'

const page = () => {
  return (
    <div className="overflow-hidden ">
        <Hero/>
      {/* <div className="relative">
        <Topper
        className={''}
        direction = {"bottom"}
        shapeColor = {"#000"}
        circleColor ={ "#000"}
        iconColor = {"#ffff"}
        />
      </div> */}
      <div className="relative">
        <Topper
        className={''}
        direction = {"bottom"}
        shapeColor = {"#252B3D"}
        circleColor ={ "#252B3D"}
        iconColor = {"#ffff"}
        />
        <Overveiw2/>
      </div>
      <PracticalRef/>
      <ProvenResults/>
      <ClientsSays/>
      <TeamRef/>
      <ContactRef/>
      <Footer/>
    </div>
  )
}

export default page
