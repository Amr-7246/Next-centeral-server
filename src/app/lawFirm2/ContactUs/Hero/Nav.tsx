"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa"

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
    {/* Navigation Bar */}
    <div className={`fixed bottom-20 right-8 z-30 transition-all duration-300 ${isNavOpen ? 'w-64' : 'w-16'}`}>
      <div className="relative">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="absolute z-10 top-0 right-0 w-14 h-14 cursor-pointer bg-amber-200/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-amber-200/30 transition-all duration-300"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isNavOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {isNavOpen && (
          <div className="mt-20 bg-black/50 backdrop-blur-md rounded-2xl p-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              {['Home', 'Practice Area', 'FAQ', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/lawFirm2/${item.toLowerCase().replace(' ', '')}`}
                  className="text-white hover:text-amber-200 transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="flex justify-center space-x-4 pt-4 border-t border-white/20">
              <a href="#" className="text-white hover:text-amber-200 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-amber-200 transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-amber-200 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
    </>

  )
}

export default Nav