import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Topper from '@/components/Topper'
import DropList from './components/DropList'
import PowerPreview from './components/PowerPreview'
import ContactForm from '../ContactUs/components/ContactForm'

const page = () => {
  return (
    <div>
      <Hero/>
      <div className='bg-lf-w flex-center flex-col gap-3 h-[45vh] px-15 '>
        <h2 className='text-lf-db font-bold text-[30px] p-3 border-b border-lf-db '>Common Concerns Explained</h2>
        <p className='text-lf-b font-bold text-[20px] text-center '> Explore answers to the most common legal questions. Clear guidance to help you understand your options before speaking with our attorneys.</p>
      </div>
      <DropList/>
      <div className='pt-[250px]  bg-lf-g'>
        <div className=' flex-center'>
          <h2 className='relative z-10 text-amber-200 w-fit text-[30px] font-black border-b-[2px] border-amber-300 pb-[2px] '>  Still Have Questions . . . <span className='text-white'>Reach out and our legal team will provide the guidance you need.</span></h2>
        </div>
        <ContactForm/>
      </div>
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
