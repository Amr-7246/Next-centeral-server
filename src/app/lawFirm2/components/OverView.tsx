import { IconicBtn } from '@/components/Buttons';
import { Home2 } from '@/pub/assets/lawFirm2';
import { Home } from '@/pub/assets/lowFirm';
import CardSwap, { Card } from '@/reactBits/Cards/CardSwap'
import Image from 'next/image';
import React from 'react'
import { CiViewList } from 'react-icons/ci';

const OverView = () => {
  const caseStudies = [
    {
      title: "Punished the IRS for Unlawful Targeting",
      description:
        "Sued and secured a settlement against the IRS for unlawfully targeting a nonprofit organization and leaking confidential taxpayer information.",
      image: Home.hero,
    },
    {
      title: "Defended Elon Musk and America PAC",
      description:
        "Won high-profile lawsuits brought by the Wisconsin Attorney General and Philadelphia District Attorney, generating coverage in every national newspaper.",
      image: Home.layerMask_1,
    },
    {
      title: "Struck Down Federal Campaign Finance Law",
      description:
        "Successfully represented a U.S. Senator before the U.S. Supreme Court, overturning limits on how much candidates can repay personal campaign loans.",
      image: Home.hero_4,
    },
    {
      title: "Defended a U.S. Senator in Criminal Investigation",
      description:
        "Successfully represented a U.S. Senator in a multi-year investigatory inquiry by the U.S. Department of Justice.",
      image: Home.layerMask_2,
    },
    {
      title: "Overturned Texas Super PAC Ban",
      description:
        "Won in federal district court and the Fifth Circuit on behalf of a political committee, ending the Texas Election Code’s unconstitutional ban on super PACs.",
      image: Home.hero_2,
    },
    {
      title: "Defended Daily Wire Commentator",
      description:
        "Successfully represented a prominent media personality in a defamation suit, preserving free speech in a high-profile dispute.",
      image: Home.hero_3,
    },
  ];
  return (
    <section className='relative min-h-screen flex justify-start items-center w-full'>
      <Image src={Home2.bg_1} alt={'bg'} className='absolute -z-5 inset-0 w-full h-full object-cover'/>
      <div className='flex-center flex-col gap-5 w-[45%] mt-20 '>
        <h2 className="text-4xl md:text-5xl font-bold text-white pb-5 w-[80%] flex justify-start border-b-5 border-amber-200 pl-3 ">the proven resutles</h2>
        <p className="text-[15px] md:text-[18px] text-lf-dw text-center w-[80%]">
          Precision. Dedication. Results. Discover the expertise that defines our legal practice
        </p>
      </div>
      <div className='absolute top-[70%] right-[10%]'>
        <CardSwap cardDistance={60} verticalDistance={70} delay={8000} pauseOnHover={true} >
        {/*//& Proven resultes Cards */}
          {caseStudies.map((item, idx) => (
            <Card
              key={idx}
              title={item.title}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="absolute inset-0 object-cover opacity-20 "
              />

              <div className="relative flex flex-col gap-6 z-10 py-10 px-5">
                <h2 className="text-[20px] text-center font-bold text-white flex items-center gap-3">
                  {item.title}
                </h2>

                <p className="text-[15px] text-amber-200 leading-relaxed max-w-2xl">
                  {item.description}
                </p>

              </div>
              <div className="absolute bottom-5 left-5">
                <IconicBtn text={"Learn More"} icon={<CiViewList />} iconStyle={'bg-black text-white'} buttonColors={'bg-white text-black mx-auto  '} />
              </div> 
            </Card>
          ))}
        </CardSwap>
      </div>
    </section>
  )
}

export default OverView
