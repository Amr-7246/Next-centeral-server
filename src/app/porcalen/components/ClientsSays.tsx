import { ThreeDBtn } from '@/components/Buttons';
import { Home } from '@/pub/assets/lowFirm';
import { porcalenProject } from '@/pub/assets/porcalen';
import { Quote, Star, Award, Palette, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Interior Designer",
    feedback:
      "The ceramic tiles exceeded my expectations — flawless finish, durable, and exactly what I needed to bring my client’s vision to life.",
  },
  {
    id: 2,
    name: "Aisha Khan",
    role: "Homeowner",
    feedback:
      "From browsing to delivery, the experience was smooth and professional. The tiles completely transformed my kitchen space.",
  },
  {
    id: 3,
    name: "David Smith",
    role: "Architect",
    feedback:
      "Their collection offers both variety and quality. I rely on them for projects that demand elegance and long-lasting materials.",
  },
];


const ClientsSays = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-black/80 h-screen ">
      <Image src={porcalenProject.img_3} alt={"layerMask"} className="absolute -z-1 inset-0 w-full h-full object-cover " />
      {/*//& Logo */}
        <div className="font-bitcount z-10 py-3 absolute top-5 left-15 flex text-porc-b font-bold text-[25px] flex-center gap-3">
          <span className=" rounded-full w-[50px] h-[50px] border-[10px] border-l-white border-r-porc-b border-t-porc-dw border-b-black  " />
          Ceramora
        </div>

      {/*//& fourest layer */}
        <div className="relative flex-center flex-col w-full mt-[10vh] mb-[20vh]">
          <div className='relative overflow-hidden z-5 rounded-4xl w-[90%] h-[250px] flex  text-lf-dw '>
            <Image
              src={porcalenProject.img_2}
              alt={"layerMask"}
              className="absolute z-1 inset-0 w-full h-full object-cover "
            />
            <div className='relative flex items-start justify-start p-5  flex-col gap-3 bg-black/40 backdrop-blur-sm w-full h-full z-2 '>
              <h2 className=" font-winky font-black z-2 text-center text-transparent bg-clip-text mt-5 bg-gradient-to-r from-sky-400 via-white to-sky-400 text-[30px] w-fit mx-auto">
                Our clients are the truest reflection of our work
              </h2>
            </div>
          </div>

          <div className="absolute bottom-10 left-15 z-5 flex justify-between items-center w-[30%] px-6 py-4 text-porc-lb">
            {/* Years of Expertise */}
            <div className="flex flex-col items-center text-center px-4 border-l-2 border-black first:border-none">
              <Award className="w-6 h-6 text-porc-db mb-2" />
              <p className="text-sm font-bold">10+</p>
              <span className="text-sm">Years of Expertise</span>
            </div>

            {/* Happy Clients */}
            <div className="flex flex-col items-center text-center px-4 border-l-2 border-black">
              <Users className="w-6 h-6 text-porc-db mb-2" />
              <p className="text-sm font-bold">5,000+</p>
              <span className="text-sm">Happy Clients</span>
            </div>

            {/* Unique Designs */}
            <div className="flex flex-col items-center text-center px-4 border-l-2 border-black">
              <Palette className="w-6 h-6 text-porc-db mb-2" />
              <p className="text-sm font-bold">100+</p>
              <span className="text-sm">Unique Designs</span>
            </div>
          </div>
          {/*//& Testimonials Grid */}
          <div className="absolute -bottom-[80%] -right-[20%] w-[85%] z-5">
            <div className="grid md:grid-cols-4 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="relative bg-black/80 rounded-2xl shadow-xl px-6 pt-[60px] pb-8 flex flex-col justify-between space-y-4 overflow-hidden transition-all"
                >
                  {/* Icon */}
                  <Quote className="w-7 h-7 text-porc-b absolute top-4 left-4 opacity-80" />

                  {/* Feedback */}
                  <p className="text-lf-w italic leading-relaxed z-10">
                    “{t.feedback}”
                  </p>

                  {/* Client Info */}
                  <div className="mt-3">
                    <h4 className="font-semibold text-porc-b flex items-center gap-2">
                      {t.name}
                      <Award className="w-4 h-4 text-porc-b" />
                    </h4>
                    <p className="text-sm text-lf-dw">{t.role}</p>
                  </div>

                  {/* Decorative corner accents */}
                  <span className="w-[150px] rounded-tl-2xl absolute h-[80px] border border-b-0 border-r-0 border-white left-0 top-0" />
                  <span className="w-[80px] rounded-br-2xl absolute h-[150px] border border-t-0 border-l-0 border-porc-b right-0 bottom-0" />

                </div>
              ))}
            </div>
          </div>
        </div>

      {/*//& Markting Hook */}
        <div className='flex flex-center flex-col w-[30%] gap-8 absolute z-5 bottom-[20%] left-[3%] '> 
          <p className='text-porc-db text-[20px] text-center'> Elevate your home with ceramics that <span className='text-white'> blend beauty and durability</span></p>
          <ThreeDBtn text={'Contact Us Now'} buttonColors={''} spanColors={''}/>
        </div>

    </section>
  )
}

export default ClientsSays

