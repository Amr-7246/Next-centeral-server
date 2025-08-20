"use client"
import React from "react";
import { CheckCircle2, Star, Award, Briefcase } from "lucide-react";

const MeetMAC = () => {
  const successApproach = [
    {
      title: "Former Senior Approvals Officer",
      desc: "Direct experience evaluating and approving multi-million dollar contracts",
      icon: <Briefcase className="w-6 h-6 text-mac-dy" />,
    },
    {
      title: "Insider Knowledge",
      desc: "Understands the unwritten rules and real decision criteria",
      icon: <Star className="w-6 h-6 text-mac-dy" />,
    },
    {
      title: "Proven Track Record",
      desc: "Helped dozens of contractors win their first government contracts",
      icon: <Award className="w-6 h-6 text-mac-dy" />,
    },
  ];

  const specialties = [
    "Federal Contract Proposals",
    "Compliance & Risk Mitigation",
    "Past Performance Optimization",
    "Strategic Positioning",
  ];

  const stats = [
    { value: "30+", label: "Years in Government" },
    { value: "$500M+", label: "Contracts Reviewed" },
    { value: "1000+", label: "Proposals Evaluated" },
    { value: "95%", label: "Client Success Rate" },
  ];

  return (
    <div className="bg-gray-200 py-16">
      <div className="w-[90%] mx-auto max-w-6xl">
        {/* heading */}
        <h2 className="text-3xl font-bold text-mac-db mb-4">
          Meet MAC: Your Government Contracting Insider
        </h2>
        <p className="text-gray-700 mb-8 max-w-3xl">
          With over 30 years as a government approvals officer, MAC has reviewed
          thousands of proposals and witnessed firsthand what separates winners
          from losers in the government contracting world.
        </p>

        {/* quote */}
        <blockquote className="border-l-4 border-mac-dy pl-6 italic text-gray-800 mb-12">
          "I've seen too many excellent contractors fail simply because they
          didn't understand how government evaluation really works. My mission
          is to level the playing field by sharing the insider knowledge that
          makes the difference." — <span className="font-semibold">MAC</span>
        </blockquote>

        {/* strengths */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {successApproach.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="font-semibold text-lg text-mac-db">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* specialties */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-mac-dy mb-4">
            Specializes In:
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {specialties.map((sp, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="text-mac-db w-5 h-5" />
                {sp}
              </li>
            ))}
          </ul>
        </div>

        {/* impact stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((st, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-mac-db">{st.value}</p>
              <p className="text-gray-600">{st.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetMAC;
