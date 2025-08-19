import React from "react";
import { Scale, ShieldCheck, Briefcase } from "lucide-react";
import { about } from "@/pub/assets/lowFirm";
import Image from "next/image";

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
    <div className="w-full py-16 px-6 bg-white space-y-12">
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
            className="relative flex flex-col items-center text-center space-y-4 bg-black/50 rounded-xl pb-6 shadow-sm"
          >
            <div className="w-full h-[300px] overflow-hidden rounded-t-lg">
              <Image
                src={member.img}
                alt={member.name}
                className="object-cover "
              />
            </div>
            <h3 className="text-lg font-semibold text-[#000349]">{member.name}</h3>
            <p className="text-sm font-medium text-[#0C1B63]">{member.role}</p>
            <p className="text-sm text-[#252B3D] px-5">{member.bio}</p>
            <div className="flex space-x-3">{member.icons}</div>

            {/* Decorative corners */}
            <span className="w-[120px] rounded-tl-2xl absolute h-[60px] border border-b-0 border-r-0 border-[#E6A61E] -left-3 -top-5 " />
            <span className="w-[60px] rounded-br-2xl absolute h-[100px] border border-t-0 border-l-0 border-[#000349] -right-3 -bottom-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamRef ;
