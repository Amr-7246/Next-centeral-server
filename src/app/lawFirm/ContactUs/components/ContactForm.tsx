import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import { Home } from '@/pub/assets/lowFirm'

const ContactForm = () => {
  return (
    <div className=" w-full flex-center h-[100vh] p-8 bg-lf-g text-lf-dw py-[100px]">
      <div className='relative w-[90%] rounded-2xl p-5'>
        <div  className='absolute w-full h-full overflow-hidden inset-0 rounded-2xl '>
          <Image src={Home.hero_3} alt={''} />
        </div>
        <span className='absolute inset-0  rounded-2xl bg-black/80 ' />
        {/* //& Form it self */}
          <form className="space-y-4 bg-lf-db w-[40%] absolute -top-35  right-20 px-5 py-[50px] rounded-xl "  >
            <div>
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-b bg-black/30 border-[#D9D9E2]  p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A61E]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border-b bg-black/30 border-[#D9D9E2]  p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A61E]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full border-b bg-black/30 border-[#D9D9E2]  p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A61E]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#E6A61E] text-white font-medium py-3 px-6  hover:bg-[#c98c18] transition"
            >
              Send Message
            </button>
          </form>
        {/*//& Physical Branches */}
          <div className='relative z-5' >
            <h2 className="text-2xl font-semibold text-amber-200 mb-6 w-fit  border border-r-0 border-t-0 rounded-bl-lg p-3 border-amber-300 ">Our Nationwide Presence</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-300" />
                <span>New York – Attorneys and Compliance Specialists Available</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-300" />
                <span>Washington D.C. – Attorneys and Compliance Specialists Available</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-300" />
                <span>California – Senior Attorneys and Litigation Experts Available</span>
              </li>
            </ul>
          </div>
      </div>

    </div>
  )
}

export default ContactForm

      // {/* Top grid layout */}
      // <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
      //   {/* Contact Form */}
      //   <div>
      //     <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
      //     <form className="space-y-4">
      //       <div>
      //         <label className="block mb-1 text-sm font-medium">Full Name</label>
      //         <input
      //           type="text"
      //           placeholder="Your Name"
      //           className="w-full border-b bg-black/30 border-[#D9D9E2]  p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A61E]"
      //         />
      //       </div>
      //       <div>
      //         <label className="block mb-1 text-sm font-medium">Email</label>
      //         <input
      //           type="email"
      //           placeholder="your@email.com"
      //           className="w-full border-b bg-black/30 border-[#D9D9E2]  p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A61E]"
      //         />
      //       </div>
      //       <div>
      //         <label className="block mb-1 text-sm font-medium">Message</label>
      //         <textarea
      //           rows={4}
      //           placeholder="Write your message..."
      //           className="w-full border-b bg-black/30 border-[#D9D9E2]  p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A61E]"
      //         />
      //       </div>
      //       <button
      //         type="submit"
      //         className="bg-[#E6A61E] text-white font-medium py-3 px-6  hover:bg-[#c98c18] transition"
      //       >
      //         Send Message
      //       </button>
      //     </form>
      //   </div>

      //   {/*//& Physical Branches */}
      //   <div>
      //     <h2 className="text-2xl font-semibold text-white mb-6">Our Nationwide Presence</h2>
      //     <ul className="space-y-4">
      //       <li className="flex items-start space-x-3">
      //         <MapPin className="text-[#E6A61E]" />
      //         <span>New York – Attorneys and Compliance Specialists Available</span>
      //       </li>
      //       <li className="flex items-start space-x-3">
      //         <MapPin className="text-[#E6A61E]" />
      //         <span>Washington D.C. – Attorneys and Compliance Specialists Available</span>
      //       </li>
      //       <li className="flex items-start space-x-3">
      //         <MapPin className="text-[#E6A61E]" />
      //         <span>California – Senior Attorneys and Litigation Experts Available</span>
      //       </li>
      //       <li className="flex items-start space-x-3">
      //         <MapPin className="text-[#E6A61E]" />
      //         <span>Texas – Attorneys and Compliance Specialists Available</span>
      //       </li>
      //       <li className="flex items-start space-x-3">
      //         <MapPin className="text-[#E6A61E]" />
      //         <span>Florida – Attorneys Available</span>
      //       </li>
      //       <li className="flex items-start space-x-3">
      //         <MapPin className="text-[#E6A61E]" />
      //         <span>Illinois – Compliance Specialists Available</span>
      //       </li>
      //     </ul>
      //   </div>

      // </div>

  // {/* Bottom Socials & Contact Info
  // <div className="border-t border-[#D9D9E2] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
  //   {/* Social Media */}
  //   <div className="flex space-x-4">
  //     <a href="#" className="p-2 ll bg-[#000349] text-white hover:bg-[#0C1B63]">
  //       <Linkedin size={20} />
  //     </a>
  //     <a href="#" className="p-2 ll bg-[#000349] text-white hover:bg-[#0C1B63]">
  //       <Facebook size={20} />
  //     </a>
  //     <a href="#" className="p-2 ll bg-[#000349] text-white hover:bg-[#0C1B63]">
  //       <Instagram size={20} />
  //     </a>
  //   </div>

  //   {/* Contact Info */}
  //   <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
  //     <div className="flex items-center gap-2">
  //       <Mail className="text-[#E6A61E]" size={18} />
  //       <span>info@lawfirm.com</span>
  //     </div>
  //     <div className="flex items-center gap-2">
  //       <Phone className="text-[#E6A61E]" size={18} />
  //       <span>+20 123 456 789</span>
  //     </div>
  //   </div>
  // </div> */}