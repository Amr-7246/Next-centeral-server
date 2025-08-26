import React from "react";
import { Scale, Shield, BookOpen, Gavel } from "lucide-react";

const FirmPref = () => {
  const features = [
    {
      icon: <Scale className="" />,
      head: "Proven Expertise",
      description:
        "Decades of experience providing trusted legal representation across diverse practice areas.",
    },
    {
      icon: <Shield className="" />,
      head: "Client Protection",
      description:
        "We safeguard client rights with integrity, ensuring security and peace of mind in every case.",
    },
    {
      icon: <BookOpen className="" />,
      head: "In-Depth Knowledge",
      description:
        "Our attorneys bring deep legal insight backed by continuous research and strategic thinking.",
    },
    {
      icon: <Gavel className="" />,
      head: "Strong Advocacy",
      description:
        "Committed to delivering clear guidance and firm representation in and out of the courtroom.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 pb-12 pt-16 items-center relative">
      {/* Company Story */}
      <div className="w-[90%] flex-col flex">
        <h2 className="font-winky font-black z-2 text-center text-transparent bg-clip-text mt-5 bg-gradient-to-r from-amber-200 via-white to-amber-200 w-fit text-[36px] md:text-[44px] border-l-5 border-amber-200 pl-3">
          Advocating Justice Since 1985
        </h2>
        <p className="text-sky-200 w-[80%] text-[18px] md:text-[18px] mt-3">
          Founded on principles of trust and excellence, our law firm has guided
          clients through complex legal challenges with dedication, clarity, and
          professionalism.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[95%] absolute -top-[60%] ">
        {features.map((feature, index) => (
          <div key={index} className=" relative backdrop-blur-md bg-white/10 p-6 rounded-lg border border-white/80 text-white">
            <div className="flex flex-col items-center text-center">
              <span className='absolute top-3 left-3 bg-black/50 rounded-full border-white border text-[10px] p-2'>
                {feature.icon}
              </span>
              <h3 className="mt-4 text-lf-dy font-semibold">{feature.head}</h3>
              <p className="mt-2 text-white/80 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirmPref;
