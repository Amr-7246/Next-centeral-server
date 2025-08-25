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
      description: "Our clients' success is our top priority at every stage.",
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
      feedback: "The team provided exceptional guidance during my corporate case. Their professionalism and dedication were unmatched.",
      imgUrl: "/assets/lowFirm/about/team_1.jpg",
    },
    {
      id: 2,
      name: "James Carter",
      role: "Small Business Owner",
      feedback: "I felt protected and well-informed throughout my legal process. Truly a law firm that values its clients.",
      imgUrl: "/assets/lowFirm/about/team_2.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Private Client",
      feedback: "They handled my case with integrity and care. I would highly recommend them to anyone seeking reliable legal support.",
      imgUrl: "/assets/lowFirm/about/team_3.jpg",
    },
  ];

  return (
    <div className="w-full py-20 relative px-6 space-y-16 bg-gradient-to-b from-lf-g to-black">
      <Image
        src={svg_bg.svg_bg_3}
        alt="layout"
        fill
        className="absolute inset-0 object-cover opacity-20 -z-10"
      />

      {/* Core Values */}
      <div className="relative">
        <div className="my-10 px-5 flex flex-col md:flex-row justify-between items-center gap-10">
          <h2 className="text-[32px] md:text-[36px] font-bold w-fit text-lf-dy relative pb-2">
            Our Guiding Principles
            <span className="absolute w-full h-[2px] left-0 bottom-0 bg-lf-dy" />
          </h2>
          <p className="text-[18px] max-w-xl text-center md:text-right text-lf-w relative pb-2">
            The foundation of every case we handle is built on integrity, excellence, and trust
            <span className="absolute w-1/2 h-[2px] right-0 bottom-0 bg-lf-w" />
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="relative group flex flex-col items-center text-center space-y-4 backdrop-blur-md bg-lf-w/5 rounded-xl p-8 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:bg-lf-w/10"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-lf-g rounded-full flex items-center justify-center shadow-lg border-2 border-lf-dy">
                {value.icon}
              </div>

              <h3 className="text-xl font-semibold text-amber-200 mt-6">{value.title}</h3>
              <p className="text-sm text-lf-dw">{value.description}</p>

              <div className="absolute inset-0 border border-lf-dy/20 rounded-xl transition-all duration-500 group-hover:border-lf-dy/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-32">
        <h2 className="text-[32px] md:text-[36px] font-bold text-center text-lf-dy mb-16">
          Client Testimonials
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-lf-dy to-transparent mx-auto mt-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-lf-w/5 to-transparent backdrop-blur-sm rounded-xl p-8 shadow-xl"
              style={{
                transform: `translateY(${index % 2 === 0 ? "2rem" : "0"})`
              }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-lf-dy opacity-20 transform -scale-x-100" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-lf-dy transform transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={testimonial.imgUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-lf-dw text-sm italic">{testimonial.feedback}</p>
                <div>
                  <h4 className="text-amber-200 font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-lf-dw/80">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Borders */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-lf-dy rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-lf-dy rounded-br-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
