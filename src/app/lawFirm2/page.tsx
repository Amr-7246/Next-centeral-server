"use client"
import React from 'react'
import Hero from './components/Hero/Hero'
import OverView from './components/OverView'

const page = () => {
  return (
    <section className='overflow-hidden'>
      <Hero/>
      <OverView/>
    </section>
  )
}

export default page