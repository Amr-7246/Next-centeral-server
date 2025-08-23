import React from "react";
import { Scale, ShieldCheck, Briefcase, ArrowLeft, ArrowRight } from "lucide-react";
import { about } from "@/pub/assets/lowFirm";
import Image from "next/image";
import { ThreeDBtn } from "@/components/Buttons";

const TeamRef = () => {
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
      img: about.team_4, // replace with Envato image
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
      img: about.team_2,
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
      img: about.team_5,
    },
  ];

  return (
    <div className="w-full py-16 px-6 bg-lf-dw space-y-12">
      {/* Section Heading */}
      <div className="mb-[80px] flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-[22px] font-bold text-[#000349] relative pb-2">
          Meet Our Legal Team
          <span className="absolute w-full h-[2px] left-0 bottom-0 bg-[#E6A61E]" />
        </h2>
        <p className="text-[15px] text-[#252B3D] max-w-xl mt-3 md:mt-0 text-center">
          Our attorneys combine decades of proven experience with relentless dedication to protect our clients’ rights and interests.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-3 gap-8 px-[100px]">
        {team.map((member) => (
          <div
            key={member.id}
            className="relative flex flex-col items-center text-center space-y-4 bg-black rounded-xl pb-6 shadow-sm"
          >
            <div className="w-full h-[300px] overflow-hidden rounded-t-lg">
              <Image
                src={member.img}
                alt={member.name}
                className="object-cover "
              />
            </div>
            <h3 className="text-lg font-semibold text-lf-dw">{member.name}</h3>
            <p className="w-full text-sm font-medium text-lf-w px-6 flex justify-between" >
              <div className="flex text-sm space-x-3">{member.icons}</div>
              {member.role}
            </p>
            <p className="text-sm text-amber-200 px-5 ">
              {member.bio}
            </p>
            <div className="relative z-5">
              <ThreeDBtn text={"Read More"} buttonColors={"bg-lf-dy text-white"} spanColors={"bg-white"} />
            </div>
            {/* Decorative corners */}
            <span className="w-[120px] rounded-tl-2xl absolute h-[60px] border-2 border-b-0 border-r-0 border-[#E6A61E] -left-3 -top-5 " />
            <span className="w-[60px] rounded-br-2xl absolute h-[100px] border-2 border-t-0 border-l-0 border-black -right-3 -bottom-3" />
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
    </div>
  );
};

export default TeamRef ;
