"use client"
import React from "react";

const MACFooter = () => {
  const links = [
    "The Guide",
    "About MAC",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
  ];

  return (
    <footer className="relative text-white ">

      <div className="relative w-[90%] mx-auto max-w-6xl py-16 grid md:grid-cols-3 gap-12">
        {/* logo + tagline */}
        <div>
          {/*//& Logo */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-[32px] bg-black rounded-full w-14 h-14 flex items-center justify-center font-extrabold text-xl">
                <span className="text-white">M</span>
                <span className="text-mac-dy">A</span>
                <span className="text-blue-900">C</span>
              </div>
                <span
                  className="text-[25px]"
                  style={{ color: "transparent", WebkitTextStroke: "1px white", }} >
                    Consulting
                </span>
            </div>
          <p className="text-gray-300">
            Government Contracting Experts
          </p>
          <p className="mt-4 text-gray-400 text-sm">
            Helping contractors win government contracts with insider knowledge
            and proven strategies from 30+ years in government approvals.
          </p>
        </div>

        {/* quick links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-mac-dy">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li
                key={i}
                className="hover:text-mac-dy cursor-pointer transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* contact info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-mac-dy">
            Contact Info
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>info@macconsulting.com</li>
            <li>(555) 123-4567</li>
          </ul>
        </div>
      </div>

      {/* copyright */}
      <div className="relative border-t border-white/20 py-6 text-center text-gray-400 text-sm">
        © 2025 MAC Consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default MACFooter;
