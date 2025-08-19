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

const page = () => {
  return (
    <div>
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
      <div className="relative">
        <Topper 
        className={''}
        direction = {"bottom"}
        shapeColor = {"#252B3D"}
        circleColor ={ "#252B3D"}
        iconColor = {"#ffff"}
        />
        <Overveiw/>
      </div>
      <PracticalRef/>
      <ProvenResults/>
      <ClientsSays/>
      <TeamRef/>
      <ContactRef/>
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
