"use client"
import React from 'react'
import Hero from './components/Hero/Hero'
import OverView from './components/OverView'
import Footer from './components/Footer'
import ContactRef from './components/ContactRef'
import ClientsSays from './components/ClientsSays'
import TeamRef from './components/TeamRef'

const page = () => {
  return (
    <section className='overflow-hidden'>
      <Hero/>
      <OverView/>
      <ClientsSays/>
      <TeamRef/>
      <ContactRef/>
      <Footer/>
    </section>
  )
}

export default page