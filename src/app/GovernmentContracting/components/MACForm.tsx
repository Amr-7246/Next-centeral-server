"use client"
import React from "react";
import { BookOpen, CalendarDays, Zap } from "lucide-react";
import MACFooter from "./MACFooter";
import { Home } from "@/pub/assets/MAC";
import Image from "next/image";

const MACForm = () => {
  const successApproach = [
    {
      title: "Comprehensive Guide",
      desc: "Detailed solutions and real-world examples",
      icon: <BookOpen className="w-6 h-6 text-mac-dy" />,
    },
    {
      title: "Exclusive Webinar",
      desc: "Win a spot in our January 2026 masterclass",
      icon: <CalendarDays className="w-6 h-6 text-mac-dy" />,
    },
    {
      title: "Instant Access",
      desc: "Download immediately after signup",
      icon: <Zap className="w-6 h-6 text-mac-dy" />,
    },
  ];

  return (
    <div className="relative py-16 text-white">
      {/* background image with overlay */}
        <div className=" absolute inset-0">
          <Image
            src={Home.img_2}
            alt="Footer Background"
            fill
            className="object-cover"
          />
          <span className="absolute inset-0 bg-mac-db/97" />
        </div>

      <div className="w-[90%] mx-auto max-w-5xl text-center">
        {/* heading */}
        <h2 className="text-3xl font-bold mb-4">
          Don’t Let These Mistakes Cost You Another Contract
        </h2>
        <p className="text-gray-200 mb-10 max-w-3xl mx-auto">
          Get MAC's complete guide to avoiding the 3 critical mistakes that kill
          government contracts. Plus, enter to win a spot in our exclusive
          January 2026 webinar.
        </p>

        {/* benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {successApproach.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* form */}
        <form className="bg-white relative rounded-2xl shadow-md p-8 max-w-2xl mx-auto text-left">
          <h3 className="text-2xl font-bold text-mac-db mb-2">
            Get Your FREE Guide Now
          </h3>
          <p className="text-gray-600 mb-6">
            Join hundreds of contractors who've already transformed their
            proposal success rate.
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mac-dy"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mac-dy"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mac-dy"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-mac-dy text-white py-3 rounded-lg font-semibold text-lg shadow hover:bg-yellow-700 transition"
          >
            Get the Guide & Enter the Webinar
          </button>

          <p className="text-gray-500 text-xs mt-3 text-center">
            We respect your privacy. No spam, guaranteed.
          </p>
        </form>
      </div>
      <MACFooter/>
    </div>
  );
};

export default MACForm;
