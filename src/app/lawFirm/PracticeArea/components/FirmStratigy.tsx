"use client";

import React from "react";
import CardLine from "./CardLine";
import { Home } from "@/pub/assets/lowFirm"; // swap with your image sources

const practiceAreas = [
  {
    title: "Corporate & Commercial",
    pref: "Our corporate lawyers guide organizations of all sizes — from startups to multinational enterprises — with tailored advice on governance, compliance, and transactional strategy.",
    image: Home.hero,
  },
  {
    title: "Real Estate",
    pref: "From residential acquisitions to large-scale industrial developments, our real estate team delivers counsel on zoning, construction, financing, and all stages of property transactions.",
    image: Home.hero_2,
  },
  {
    title: "Litigation & Dispute Resolution",
    pref: "We represent clients in negotiations, mediations, arbitrations, and complex court disputes, always prioritizing strategic advocacy and cost-effective solutions.",
    image: Home.hero_3,
  },
  {
    title: "Insolvency & Restructuring",
    pref: "Businesses and lenders trust us to resolve financial distress efficiently — pursuing practical workouts in the boardroom or, where required, litigation in court.",
    image: Home.hero_4,
  },
  {
    title: "Wills, Estates & Trusts",
    pref: "Our team provides sensitive, forward-thinking guidance in estate planning, including drafting wills, setting up trusts, and ensuring smooth succession arrangements.",
    image: Home.layerMask_1,
  },
  {
    title: "Administrative Law",
    pref: "We bring deep experience before tribunals and regulatory boards, helping clients navigate compliance frameworks and advance their interests with precision.",
    image: Home.layerMask_2,
  },
  {
    title: "Taxation Law",
    pref: "From corporate reorganizations to long-term succession planning, we design tax strategies that protect assets, optimize business structures, and secure financial stability.",
    image: Home.layerMask_3,
  },
];

const FirmStratigy = () => {
  return (
    <section className="w-full py-20 bg-lf-g flex flex-col items-center gap-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Our Firm’s Strategic Practice Areas
      </h1>

      <div className="flex flex-col w-[90%] lg:w-[80%]">
        {practiceAreas.map((area, idx) => (
          <CardLine
            key={idx}
            title={area.title}
            pref={area.pref}
            image={area.image}
            right={idx % 2 === 1} // alternate left/right layout
          />
        ))}
      </div>
    </section>
  );
};

export default FirmStratigy;
