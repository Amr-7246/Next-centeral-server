import { porcalenProject } from "@/pub/assets/porcalen";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-[150px] pb-6 md:px-16 ">

      <div className="absolute top-[-5%] left-[10%] bg-white w-[30%] h-[140px] z-5 rounded-xl flex flex-col items-center justify-center text-black font-semibold">
        {/* Contact Info inside Left Box */}
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt /> 123 Legal Street, City, Country
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneAlt /> (123) 456-7890
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope /> info@ogilvielaw.com
          </li>
        </ul>
      </div>

      {/* 🔹 Main Section */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Brand / Logo + Description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-porc-b">Ogilvie Law</h2>
          <p className="text-sm text-white/80 leading-relaxed max-w-[400px]">
            Trusted advisors with proven experience in corporate, family, and
            criminal law. Your success is our definition of justice.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-center flex-col gap-3">
          <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
          {porcalenProject.porcalenTextContent.navBar.options.map((route, idx) => (
            <li key={idx}>
              <a href="#" className="hover:text-porc-b transition-colors">
                {route.name}
              </a>
            </li>
          ))}
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="relative z-10 mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Ogilvie Law. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
