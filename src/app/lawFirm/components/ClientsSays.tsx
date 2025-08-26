import { ThreeDBtn } from '@/components/Buttons';
import { Home } from '@/pub/assets/lowFirm';
import { Quote, Star, Award, Palette, Users, Gavel, Scale, UserCheck } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import FirmPref from './FirmPref';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Entrepreneur",
    feedback:
      "The firm guided me seamlessly through a complex corporate restructuring. Their foresight and legal acumen were pivotal in safeguarding my business interests.",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Small Business Owner",
    feedback:
      "From day one, I felt fully supported. They translated legal complexities into clear steps and ensured I made the right decisions at every stage.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Private Client",
    feedback:
      "They treated my concerns with empathy and delivered results with unmatched precision. Truly a team that blends humanity with professionalism.",
  },
  // {
  //   id: 4,
  //   name: "Michael Thompson",
  //   role: "Investor",
  //   feedback:
  //     "What impressed me most was their strategic mindset. Every move felt deliberate, protecting both my assets and my long-term vision.",
  // },
];

const ClientsSays = () => {
  return (
    <section className="relative py-20 px-6  h-[130vh]  ">
      <Image
        src={Home.hero_2}
        alt={"layerMask"}
        className="absolute -z-1 inset-0 w-full h-full object-cover "
      />
      {/*//& Logo */}
        <div className="font-bitcount z-10 py-3 absolute top-[12%] right-[5%] flex text-lf-dy font-bold text-[25px] flex-center gap-3">
          <span className=" rounded-full w-[50px] h-[50px] border-[10px] border-l-white border-r-lf-b border-t-lf-db border-b-lf-dy  " />
          firm logo
        </div>
        <div className='relative z-5'>
          <FirmPref />
        </div>
      <span className="absolute z-1 inset-0 w-full h-full bg-black/50 backdrop-blur-sm"/>
        <div className="relative flex-center flex-col w-full mt-[10vh] mb-[20vh]">

          <div className='relative overflow-hidden z-5 rounded-4xl w-[90%] h-[250px] flex  text-lf-dw '>
            <Image
              src={Home.hero}
              alt={"layerMask"}
              className="absolute z-1 inset-0 w-full h-full object-cover "
            />
            <div className='relative flex items-start justify-start p-5 flex-col gap-3 bg-black/85 w-full h-full z-2 '>
              <h2 className="z-2 pt-5 text-center text-lf-dy text-[27px] w-[90%] mx-auto">
                Our story is built on one principle . .
                When our clients succeed, so do we.
              </h2>
            </div>
          </div>
          <div className="absolute  bottom-2  left-15 z-5 flex justify-between items-center w-[30%] px-6 py-4 text-porc-lb">
            {/* Years of Practice */}
            <div className="flex flex-col items-center text-center px-4 border-l-1 border-white/50 first:border-none">
              <Scale className="w-6 h-6 text-lf-dy mb-2" />  {/* Justice Scales Icon */}
              <p className="text-sm font-bold">15+</p>
              <span className="text-[12px]">Years of Practice</span>
            </div>

            {/* Successful Cases */}
            <div className="flex flex-col items-center text-center px-4 border-l-1 border-white/50">
              <Gavel className="w-6 h-6 text-lf-dy mb-2" />  {/* Gavel Icon */}
              <p className="text-sm font-bold">2,500+</p>
              <span className="text-[12px]">Successful Cases</span>
            </div>

            {/* Trusted Clients */}
            <div className="flex flex-col items-center text-center px-4 border-l-1 border-white/50">
              <UserCheck className="w-6 h-6 text-lf-dy mb-2" />  {/* Verified Client Icon */}
              <p className="text-sm font-bold">5,000+</p>
              <span className="text-[12px]">Trusted Clients</span>
            </div>
          </div>
          {/*//& Testimonials Grid */}
          <div className="absolute -bottom-[100%] -right-[20%] w-[85%] z-5">
            <div className="grid md:grid-cols-4 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="relative bg-black/80 rounded-2xl shadow-xl px-6 pt-[60px] pb-8 flex flex-col justify-between space-y-4 overflow-hidden transition-all"
                >
                  {/* Icon */}
                  <Quote className="w-7 h-7 text-lf-dy absolute top-4 left-4 opacity-80" />

                  {/* Feedback */}
                  <p className="text-lf-w italic leading-relaxed z-10">
                    “{t.feedback}”
                  </p>

                  {/* Client Info */}
                  <div className="mt-3">
                    <h4 className="font-semibold text-lf-dy flex items-center gap-2">
                      {t.name}
                      <Award className="w-4 h-4 text-lf-dy" />
                    </h4>
                    <p className="text-sm text-lf-dw">{t.role}</p>
                  </div>

                  {/* Decorative corner accents */}
                  <span className="w-[150px] rounded-tl-2xl absolute h-[80px] border border-b-0 border-r-0 border-white left-0 top-0" />
                  <span className="w-[80px] rounded-br-2xl absolute h-[150px] border border-t-0 border-l-0 border-lf-dy right-0 bottom-0" />

                </div>
              ))}
            </div>
          </div>

        </div>
      {/*//& Markting Hook */}
        <div className='flex flex-center flex-col w-[30%] gap-8 absolute z-5 bottom-[10%] left-[3%] '>
          <p className='text-white text-[20px] text-center'>Protecting your rights with <span className='text-lf-dy'>strength and precision</span></p>
          <ThreeDBtn text={'Contact Us Now'} buttonColors={'bg-lf-dy text-black'} spanColors={'bg-white'}/>
        </div>
    </section>
  )
}

export default ClientsSays
