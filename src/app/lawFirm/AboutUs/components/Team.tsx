"use client"
import { IconicBtn } from '@/components/Buttons';
import TiltedCard from '@/reactBits/TiltedCard/TiltedCard';
import { Scale, Briefcase, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import { PiThreadsLogoBold } from 'react-icons/pi';
import TeamRef from '../../components/TeamRef';

const Team = () => {
    const team = [
        {
          id: 1,
          name: "Alexander Wright",
          role: "Senior Partner – Corporate Law",
          bio: "With over 15 years of experience in corporate litigation, Alexander has guided multinational companies through complex legal landscapes.",
          icons: [
            <Scale key="1" className="w-6 h-6 text-[#E6A61E]" />,
            <Briefcase key="2" className="w-6 h-6 text-[#E6A61E]" />,
          ],
          img: "/assets/lowFirm/about/team_1.jpg", // replace with Envato image
        },
        {
          id: 2,
          name: "Victoria Hayes",
          role: "Family Law Specialist",
          bio: "Victoria is known for her compassionate yet strategic approach, ensuring families receive fair representation in sensitive cases.",
          icons: [
            <ShieldCheck key="1" className="w-6 h-6 text-[#E6A61E]" />,
            <Scale key="2" className="w-6 h-6 text-[#E6A61E]" />,
          ],
          img: "/assets/lowFirm/about/team_4.jpg",
        },
        {
          id: 3,
          name: "Daniel Carter",
          role: "Criminal Defense Attorney",
          bio: "Daniel’s reputation for precision and relentless defense has made him a trusted ally in high-stakes criminal cases.",
          icons: [
            <Briefcase key="1" className="w-6 h-6 text-[#E6A61E]" />,
            <ShieldCheck key="2" className="w-6 h-6 text-[#E6A61E]" />,
          ],
          img: "/assets/lowFirm/about/team_3.jpg",
        },
      ];
      return (
        <section className='min-h-screen flex-col gap-5 bg-white py-20 '>
          {/*//& Section Heading */}
            <div className="mb-[80px] px-10 flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-[22px] font-bold text-[#000349] relative pb-2">
                Meet Our Legal Team
                <span className="absolute w-full h-[2px] left-0 bottom-0 bg-[#E6A61E]" />
              </h2>
              <p className="text-[15px] text-[#252B3D] max-w-xl mt-3 md:mt-0 text-center">
                Our attorneys combine decades of proven experience with relentless dedication to protect our clients’ rights and interests.
              </p>
            </div>
          {/*//& Lawer card */}
            <div className='flex-center grid md:grid-cols-3 gap-8 px-[50px]'>
              {team.map((lawer, idx) =>(
                <div className='flex-center rounded-2xl overflow-hidden flex-col gap-5 bg-black relative p-5'>
                  <TiltedCard
                    // imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                    //@ts-ignore
                    imageSrc={lawer.img}
                    altText={lawer.name}
                    captionText={lawer.role}
                    containerHeight="450px"
                    containerWidth="400px"
                    imageHeight="450px"
                    imageWidth="400px"
                    rotateAmplitude={12}
                    scaleOnHover={1.09}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text text-white mt-8 ml-8 bg-black/50 backdrop-blur-2xl border border-white py-2 px-5 rounded-xl ">
                        {lawer.name}
                      </p>
                    }
                  />
                  <div className="p-5 flex flex-col gap-3">
                    {/* <h3 className="text-lg font-semibold text-lf-dw">{lawer.name}</h3> */}
                    <p className="w-full text-[20px] font-medium text-lf-dy px-6 flex-center " >
                      {/* <div className="flex text-sm space-x-3">{lawer.icons}</div> */}
                      {lawer.role}
                    </p>
                    <p className="text-sm text-lf-dw px-2 ">
                      {lawer.bio}
                    </p>
                    <div className="relative z-5 w-full flex-center">
                      <IconicBtn text={"Read More"} icon={<PiThreadsLogoBold />} iconStyle={'bg-black text-white'} buttonColors={'bg-white/50 backdrop-blure-2xl text-black'} />
                    </div>
                  </div>

                </div>
              ))}
            </div>
          {/* Navigation */}
            <div className="flex justify-center items-center gap-5 mt-16 py-2 bg-black/30 border border-black rounded-4xl w-[50%] mx-auto">
              <button className="flex-center p-3 w-10 h-10 bg-black text-white rounded-full shadow-md  transition">
                <ArrowLeft />
              </button>
              <div className="flex gap-3">
                <span className="w-4 h-4 rounded-full bg-black" />
                <span className="w-4 h-4 rounded-full bg-white" />
                <span className="w-4 h-4 rounded-full bg-white" />
                <span className="w-4 h-4 rounded-full bg-white" />
                <span className="w-4 h-4 rounded-full bg-white" />
              </div>
              <button className="p-3 flex-center w-10 h-10 bg-black text-white rounded-full shadow-md  transition">
                <ArrowRight/>
              </button>
            </div>
        </section>
  );
};

export default Team;
