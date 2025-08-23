import React from "react";
import { Scale, Shield, BookOpen, Gavel } from "lucide-react";

const FirmPref = () => {
  const features = [
    {
      icon: <Scale className="w-8 h-8 text-black" />,
      head: "Proven Expertise",
      description:
        "Decades of experience providing trusted legal representation across diverse practice areas.",
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      head: "Client Protection",
      description:
        "We safeguard client rights with integrity, ensuring security and peace of mind in every case.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      head: "In-Depth Knowledge",
      description:
        "Our attorneys bring deep legal insight backed by continuous research and strategic thinking.",
    },
    {
      icon: <Gavel className="w-8 h-8 text-amber-200" />,
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
        {features.map((f, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/20 border-2 border-amber-300/50 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            {f.icon}
            <h3 className="mt-4 text-xl font-semibold text-amber-300">
              {f.head}
            </h3>
            <p className="mt-2 text-white text-center text-sm">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirmPref;
