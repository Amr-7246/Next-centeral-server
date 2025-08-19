"use client"
import React from 'react'
import WideNavbar from './WideNavbar';
import MobileNavbar from './MobileNavbar';

const GlobalNav = () => {
  return (
    <div className='z-50' >
      <WideNavbar/>
      <MobileNavbar/>
    </div>
)
}

export default GlobalNav
