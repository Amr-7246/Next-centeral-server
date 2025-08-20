import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import { Home } from '@/pub/assets/lowFirm'
import { ThreeDBtn } from '@/components/Buttons'

const ContactForm = () => {
  return (
    <div className=" w-full flex-center h-[80vh] p-8 bg-porc-lb text-porc-b py-[100px]">
      <div className='relative w-[90%] rounded-2xl p-5'>
        <div  className='absolute w-full h-full overflow-hidden inset-0 rounded-2xl '>
          <Image src={Home.hero_3} alt={''} />
        </div>
        <span className='absolute inset-0  rounded-2xl bg-black/80 ' />
        {/* //& Form it self */}
          <form className="space-y-4 bg-black w-[40%] absolute -top-35 right-20 px-5 py-[50px] rounded-xl z-5 "  >
            <div>
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-b bg-white/30 border-[#D9D9E2] p-3 focus:outline-none focus:ring-2 focus:ring-porc-b"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border-b bg-white/30 border-[#D9D9E2] p-3 focus:outline-none focus:ring-2 focus:ring-porc-b"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full border-b bg-white/30 border-[#D9D9E2]  p-3 focus:outline-none focus:ring-2 focus:ring-porc-b"
              />
            </div>
            <ThreeDBtn text={"Send Message"} buttonColors={'bg-porc-b text-white font-medium hover:bg-porc-db transition'} spanColors={'bg-porc-lb'} />
          </form>
        {/*//& Physical Branches */}
          <div className='relative z-5' >
            <h2 className="text-2xl font-semibold text-porc-db mb-6 w-fit  border border-r-0 border-t-0 rounded-bl-lg p-3 border-white ">Our Nationwide Presence</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-porc-b" />
                <span className='text-white'>New York – Attorneys and Compliance Specialists Available</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-porc-b" />
                <span className='text-white'>Washington D.C. – Attorneys and Compliance Specialists Available</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-porc-b" />
                <span className='text-white'>California – Senior Attorneys and Litigation Experts Available</span>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default ContactForm

