import { svg_bg } from "@/pub/assets/lowFirm";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" relative text-white pt-[150px] pb-6  md:px-16 ">
      <Image
          src={svg_bg.svg_bg_2}
          alt="layout"
          fill
          className="absolute inset-0 object-cover -z-10"
        />
      <p className="absolute text-center -right-[185px] bottom-[151px] overflow-hidden text-[83px] -rotate-90 text-gray-500/30 font-black " >Firm Name</p>
      {/* 🔹 Decorative Absolute Boxes */}
      <div className="absolute top-[-5%] right-[10%] bg-lf-dw w-[30%] h-[140px] z-5 rounded-xl flex items-center justify-center">
        {/* Social Media inside Right Box */}
        <div className="flex gap-4 z-10">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6A61E] text-[#000349] hover:bg-[#c98d15] transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6A61E] text-[#000349] hover:bg-[#c98d15] transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6A61E] text-[#000349] hover:bg-[#c98d15] transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="absolute top-[-5%] left-[10%] bg-white w-[30%] h-[140px] z-5 rounded-xl flex flex-col items-center justify-center text-[#000349] font-semibold">
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
          <h2 className="text-2xl font-bold text-[#E6A61E]">firm Law</h2>
          <p className="text-sm text-white/80 leading-relaxed max-w-[400px]">
            Trusted advisors with proven experience in corporate, family, and
            criminal law. Your success is our definition of justice.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-center flex-col gap-3">
          <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="/" className="hover:text-[#E6A61E] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/practice-areas"
                className="hover:text-[#E6A61E] transition-colors"
              >
                Practice Areas
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#E6A61E] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-[#E6A61E] transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#E6A61E] transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="relative z-10 mt-10 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} firm name Law. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
