"use client";

import React from "react";
import Card from "./Card";
import { Home } from "@/pub/assets/lowFirm"; // for background images

const caseStudies = [
  {
    title: "Punished the IRS for Unlawful Targeting",
    description:
      "Sued and secured a settlement against the IRS for unlawfully targeting a nonprofit organization and leaking confidential taxpayer information.",
    image: Home.hero,
  },
  {
    title: "Defended Elon Musk and America PAC",
    description:
      "Won high-profile lawsuits brought by the Wisconsin Attorney General and Philadelphia District Attorney, generating coverage in every national newspaper.",
    image: Home.layerMask_1,
  },
  {
    title: "Struck Down Federal Campaign Finance Law",
    description:
      "Successfully represented a U.S. Senator before the U.S. Supreme Court, overturning limits on how much candidates can repay personal campaign loans.",
    image: Home.hero_4,
  },
  {
    title: "Defended a U.S. Senator in Criminal Investigation",
    description:
      "Successfully represented a U.S. Senator in a multi-year investigatory inquiry by the U.S. Department of Justice.",
    image: Home.layerMask_2,
  },
  // {
  //   title: "Won Dozens of Matters for Elected Officials",
  //   description:
  //     "Successfully defended dozens of U.S. Senators and Representatives in matters before federal and state agencies, as well as ethics committees.",
  //   image: Home.layerMask_3,
  // },
  // {
  //   title: "Defeated Missouri’s Gag Rule",
  //   description:
  //     "Successfully struck down Missouri’s deadline law that blocked groups from speaking out on elections without early registration.",
  //   image: Home.layerMask_4,
  // },
  {
    title: "Overturned Texas Super PAC Ban",
    description:
      "Won in federal district court and the Fifth Circuit on behalf of a political committee, ending the Texas Election Code’s unconstitutional ban on super PACs.",
    image: Home.hero_2,
  },
  {
    title: "Defended Daily Wire Commentator",
    description:
      "Successfully represented a prominent media personality in a defamation suit, preserving free speech in a high-profile dispute.",
    image: Home.hero_3,
  },
  // {
  //   title: "Won Congressional Recount by 39 Votes",
  //   description:
  //     "Represented a U.S. Congressman in a razor-thin recount (margin of < 2/10 of a percent), navigating a high-stakes, multi-county legal battle for victory.",
  //   image: Home.hero,
  // },
];

const ProvenResults = () => {
  return (
    <section className="w-full pt-20 pb-[200px] bg-lf-g flex flex-col items-center gap-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 w-[80%] flex justify-start border-l-5 border-amber-200 pl-3 ">
        Proven Results
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[90%] lg:w-[80%]">
        {caseStudies.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            description={item.description}
            image={item.image}
            cta="Learn More"
          />
        ))}
      </div>
    </section>
  );
};

export default ProvenResults;
