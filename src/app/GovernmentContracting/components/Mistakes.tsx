"use client"
import React from "react";
import { AlertCircle } from "lucide-react";

const Mistakes = () => {
  const mistakes = [
    {
      title: "Failing to Understand the Real Decision Criteria",
      desc: "Most contractors focus on technical specifications while completely missing the underlying evaluation criteria that actually determine winners.",
      mestaks: [
        "Focusing solely on lowest price instead of best value proposition",
        "Misunderstanding the agency's true priorities and pain points",
        "Not addressing risk mitigation from the government's perspective",
      ],
    },
    {
      title: "Inadequate Past Performance Documentation",
      desc: "Your past performance isn't just a checkbox—it's the government's primary predictor of future success. Most contractors present this information poorly.",
      mestaks: [
        "Listing projects without showing measurable outcomes and results",
        "Failing to address relevance to the current opportunity",
        "Not providing proper context for challenges overcome and lessons learned",
      ],
    },
    {
      title: "Poor Compliance and Proposal Organization",
      desc: "Even the best technical solutions get rejected for compliance failures. Government evaluators have strict processes they must follow.",
      mestaks: [
        "Missing mandatory sections or failing to follow RFP instructions exactly",
        "Burying critical information where evaluators can't find it quickly",
        "Using contractor language instead of government terminology",
      ],
    },
  ];

  return (
    <div className="bg-white w-full py-16 relative">
      {/* floating buttons */}
      <span className="bg-mac-db text-white cursor-pointer w-[200px] p-3 text-center absolute left-0 top-0 border-r-[40px] rounded-r-full border-mac-db shadow-md">
        Chat bot
      </span>
      <span className="bg-mac-dy text-white cursor-pointer w-fit px-6 py-3 absolute right-0 top-0 border-l-[40px] rounded-l-full border-mac-dy shadow-md">
        Get Your FREE Guide
      </span>

      <div className="relative w-[90%] mx-auto">
        <h2 className="text-3xl font-bold text-mac-db mb-3">
          The Top 3 Mistakes That Kill Government Contracts
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          After 30+ years in government approvals, MAC has seen these same
          mistakes destroy countless promising proposals. Don’t let them destroy
          yours.
        </p>

        {/* mistakes list */}
        <div className="space-y-12">
          {mistakes.map((msk, idx) => (
            <div key={idx} className="p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-mac-dy mb-2">
                {msk.title}
              </h3>
              <p className="text-gray-700 mb-4">{msk.desc}</p>
              <ul className="space-y-2">
                {msk.mestaks.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-800">
                    <AlertCircle className="text-rose-400 w-5 h-5 mt-[2px]" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mistakes;
