import { Home } from '@/pub/assets/lowFirm';
import { Quote, Star, Award } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

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
    <section className="relative py-20 px-6 overflow-hidden bg-lf-b/80 h-screen ">
      <Image
        src={Home.hero_2}
        alt={"layerMask"}
        className="absolute -z-1 inset-0 w-full h-full object-cover "
      />
      {/*//& fourest layer */}
        <div className="relative flex-center flex-col w-full mt-[10vh] mb-[20vh]">

          <div className='relative overflow-hidden z-5 rounded-4xl w-[90%] h-[250px] flex  text-lf-dw '>
            <Image
              src={Home.hero_3}
              alt={"layerMask"}
              className="absolute z-1 inset-0 w-full h-full object-cover "
            />
            <div className='relative flex items-start justify-start p-5 flex-col gap-3 bg-black/90 w-full h-full z-2 '>
              <h2 className="z-2 text-center text-amber-200 text-[27px] w-[90%] mx-auto">
                Our story is built on one principle . . 
                When our clients succeed, so do we.  
              </h2>
            </div>
          </div>
          <div className="absolute bottom-10 left-15 z-5 text-center text-amber-300 text-[18px] w-[30%] ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <button className="underline text-center text-white ">Learn More</button>
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
                    <h4 className="font-semibold text-amber-200 flex items-center gap-2">
                      {t.name}
                      <Award className="w-4 h-4 text-lf-dy" />
                    </h4>
                    <p className="text-sm text-lf-dw">{t.role}</p>
                  </div>

                  {/* Decorative corner accents */}
                  <span className="w-[150px] rounded-tl-2xl absolute h-[80px] border border-b-0 border-r-0 border-white left-0 top-0" />
                  <span className="w-[80px] rounded-br-2xl absolute h-[150px] border border-t-0 border-l-0 border-lf-dy right-0 bottom-0" />

                  {/* Subtle background flair */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lf-dy/10 rounded-full blur-2xl z-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note
          <div className="absolute left-6 bottom-4 text-lf-dw">
            <p className="text-sm md:text-base">
              <Star /> Rated <span className="text-lf-dy font-bold">5/5</span> by over 200 satisfied clients.
            </p>
          </div> */}

        </div>

    </section>
  )
}

export default ClientsSays

      // {/* Section Intro
      // <div className="  text-center max-w-3xl mx-auto mb-16">
      //   <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
      //     Behind every <span className="text-lf-dy">success story</span> is trust
      //   </h2>
      //   <p className="text-lg md:text-xl text-lf-dw mt-4">
      //     Our clients’ words are a reflection of our ethos: 
      //     <span className="text-lf-dy"> unwavering commitment</span>, 
      //     strategic insight, and genuine care.  
      //     Here’s what they have to say:
      //   </p>
      // </div> */}