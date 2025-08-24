import React from "react";
import { ShieldCheck, Scale, Users, FileText, Quote } from "lucide-react";
import Image from "next/image";
import { svg_bg } from "@/pub/assets/lowFirm";

const Testimonials = () => {
  const coreValues = [
    {
      id: 1,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our legal practices.",
      icon: <ShieldCheck className="w-6 h-6 text-[#E6A61E]" />,
    },
    {
      id: 2,
      title: "Justice",
      description: "Committed to defending the rights of our clients with fairness.",
      icon: <Scale className="w-6 h-6 text-[#E6A61E]" />,
    },
    {
      id: 3,
      title: "Client Commitment",
      description: "Our clients’ success is our top priority at every stage.",
      icon: <Users className="w-6 h-6 text-[#E6A61E]" />,
    },
    {
      id: 4,
      title: "Confidentiality",
      description: "We safeguard sensitive client information with utmost discretion.",
      icon: <FileText className="w-6 h-6 text-[#E6A61E]" />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Entrepreneur",
      feedback:
        "The team provided exceptional guidance during my corporate case. Their professionalism and dedication were unmatched.",
    },
    {
      id: 2,
      name: "James Carter",
      role: "Small Business Owner",
      feedback:
        "I felt protected and well-informed throughout my legal process. Truly a law firm that values its clients.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Private Client",
      feedback:
        "They handled my case with integrity and care. I would highly recommend them to anyone seeking reliable legal support.",
    },
    {
      id: 4,
      name: "Sarah Mitchell",
      role: "Entrepreneur",
      feedback:
        "The team provided exceptional guidance during my corporate case. Their professionalism and dedication were unmatched.",
    },
    {
      id: 5,
      name: "James Carter",
      role: "Small Business Owner",
      feedback:
        "I felt protected and well-informed throughout my legal process. Truly a law firm that values its clients.",
    },
    {
      id: 6,
      name: "Emily Rodriguez",
      role: "Private Client",
      feedback:
        "They handled my case with integrity and care. I would highly recommend them to anyone seeking reliable legal support.",
    },
  ];

  return (
    <div className="w-full py-12 relative px-6 space-y-16 ">
      <Image
          src={svg_bg.svg_bg_3}
          alt="layout"
          fill
          className="absolute inset-0 object-cover -z-10"
        />
      {/* Core Values */}
      <div className="my-10 px-5 flex flex-row justify-between items-center" >
        <h2 className="text-[20px] w-fit text-lf-dy relative pb-2" >
          Our Guiding Principles
          <span className="absolute w-full h-[2px] left-0 bottom-0  bg-lf-dy" />
        </h2>
        <h2 className="text-[15px] w-fit text-lf-w relative pb-2" >
          The foundation of every case we handle is built on integrity, excellence, and trust
          <span className="absolute w-full h-[2px] left-0 bottom-0 bg-lf-w" />
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {coreValues.map((value) => (
          <div
            key={value.id}
            className="relative flex flex-col items-center text-center space-y-4 backdrop-blur-md bg-lf-w/10 rounded-xl p-6 shadow-sm"
          >
            <span className="absolute top-2 left-2 animate-pulse" >{value.icon}</span>
            <h3 className="text-lg font-semibold text-amber-200">{value.title}</h3>
            <p className="text-sm text-lf-dw">{value.description}</p>
            {/*//& Decorative corner accents */}

            {/* Top Left Corner Box */}
              <span className="w-[150px] rounded-tl-2xl absolute h-[80px] border border-b-0 border-r-0 border-white left-[0px] top-[0px]" />

            {/* Bottom Right Corner Box */}
              <span className="w-[80px] rounded-br-2xl absolute h-[120px] border border-t-0 border-l-0 border-lf-dy right-[0px] bottom-[0px]" />

          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mb-10 mt-[100px] px-5 flex flex-row justify-between items-center" >
        <h2 className="text-[20px] w-fit text-lf-dy relative pb-2" >
          Voices of Trust
          <span className="absolute w-full h-[2px] left-0 bottom-0  bg-lf-dy" />
        </h2>
        <h2 className="text-[15px] w-fit text-lf-w relative pb-2" >
          Our clients’ experiences are the strongest proof of our dedication and results
          <span className="absolute w-full h-[2px] left-0 bottom-0 bg-lf-w" />
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className= " backdrop-blur-md relative bg-lf-g/50 rounded-lg shadow px-6 pt-[50px] flex flex-col justify-between space-y-4" >
            <Quote className="w-6 h-6 text-[#E6A61E] absolute top-3 left-3 " />
            <p className="text-lf-w italic">“{t.feedback}”</p>
            <div className="mt-2">
              <h4 className="font-semibold text-amber-200">{t.name}</h4>
              <p className="text-sm text-lf-w">{t.role}</p>
            </div>
            {/*//& Decorative corner accents */}

            {/* Top Left Corner Box */}
              <span className="w-[150px] rounded-tl-2xl absolute h-[80px] border border-b-0 border-r-0 border-white left-[0px] top-[0px]" />

            {/* Bottom Right Corner Box */}
              <span className="w-[80px] rounded-br-2xl absolute h-[150px] border border-t-0 border-l-0 border-lf-dy right-[0px] bottom-[0px]" />

          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
