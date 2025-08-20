import { Home } from '@/pub/assets/lowFirm'
import Image from 'next/image'
import React from 'react'

const ContactRef = () => {
  return (
    <div className='relative'>
      {/* === Background Hero Image ===
          Role: Gives strong visual identity and sets a professional tone.
          Clients instantly feel trust and seriousness when landing here. */}
      <div className='absolute inset-0 -z-10'>
        <Image src={Home.hero_5} alt={'Professional legal consultation background'} className='w-full h-full object-cover' />
      </div>
      <span className='absolute bg-lf-db/80 inset-0 w-full h-full -z-1' />

      {/* === Left-Aligned Hook Message ===
          Role: Establishes authority & introduces the firm's core value.
          Should feel like the "first handshake" – confident and trustworthy. */}
      <div className='w-full flex justify-start p-10 max-w-3xl'>
        <div>
          <h2 className='text-3xl font-bold text-white mb-3'>
            Protecting Your Rights, Securing Your Future
          </h2>
          <p className='text-lg text-gray-200'>
            At <span className='font-semibold'>[Firm Name]</span>, our mission is clear: 
            to fight for your justice with expertise, dedication, and integrity.  
            We stand beside individuals and businesses navigating complex legal challenges, 
            ensuring every case is handled with precision and care.
          </p>
        </div>
      </div>

      {/* === Right-Aligned Action Section ===
          Role: Transition from trust → action.
          This is where you invite the visitor to reach out, turning interest into a lead. */}
      <div className='w-full flex justify-end p-10 max-w-3xl ml-auto'>
        <div>
          <h2 className='text-3xl font-bold text-white mb-3'>
            Ready to Defend What Matters Most?
          </h2>
          <p className='text-lg text-gray-200 mb-4'>
            Your next step is simple: connect with our experienced attorneys today.  
            Whether it’s corporate law, family matters, or criminal defense—our team 
            is ready to act fast and effectively for your case.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-2xl bg-yellow-500 text-black font-semibold shadow-md hover:bg-yellow-400 transition"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactRef
