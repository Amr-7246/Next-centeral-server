import { svg_bg } from "@/pub/assets/lowFirm";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBalanceScale, FaGavel, FaHandshake } from "react-icons/fa";
import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-white pt-30 pb-6 min-h-screen relative">
      <Image src={svg_bg.svg_bg_2} alt="layout" fill className="absolute inset-0 object-cover -z-10" />

      <div className=" container w-full flex flex-col gap-10  ">
        {/* Brand header */}
          <div className="space-y-6 pl-10 w-[40%]">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl border-l-5 border-lf-dy  font-bold text-lf-dy pl-3">Firm Logo</h2>
            </div>
            <p className="text-white/80 leading-relaxed">
              Trusted advisors with proven experience in corporate, family, and
              criminal law. Your success is our definition of justice.
            </p>
          </div>

      {/*//& Main Content Grid */}
        <div className="min-h-[60vh] pt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-l-[1px] border-white/50 relative pl-20">
          <span className="absolute w-full left-0 top-[28%] h-[1px] bg-white/50 backdrop-blur-2xl" />
          {/* contact us */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-lf-dy">contact info</h2>
              </div>
              {/* Contact Info */}
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="p-2 bg-white/10 backdrop-blur-md rounded-full">
                    <FaMapMarkerAlt className="text-lf-dy" />
                  </span>
                  <span className="text-sm">123 Legal Street, City, Country</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="p-2 bg-white/10 backdrop-blur-md rounded-full">
                    <FaPhoneAlt className="text-lf-dy" />
                  </span>
                  <span className="text-sm">(123) 456-7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="p-2 bg-white/10 backdrop-blur-md rounded-full">
                    <FaEnvelope className="text-lf-dy" />
                  </span>
                  <span className="text-sm">info@firmlaw.com</span>
                </li>
              </ul>
            </div>
          {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-lf-dy">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Practice Areas", href: "/practice-areas" },
                  { name: "About Us", href: "/about" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lf-dy rounded-full" />
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-lf-dy transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          {/* Practice Areas */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-lf-dy">Practice Areas</h3>
              <ul className="space-y-3">
                {[
                  { name: "Corporate Law", icon: <FaBalanceScale /> },
                  { name: "Family Law", icon: <FaHandshake /> },
                  { name: "Criminal Defense", icon: <FaGavel /> },
                ].map((area) => (
                  <li key={area.name} className="flex items-center gap-3">
                    <span className="p-2 bg-white/10 backdrop-blur-md rounded-full text-lf-dy">
                      {area.icon}
                    </span>
                    <span className="text-white/80">{area.name}</span>
                  </li>
                ))}
              </ul>
            </div>

          {/* Newsletter & Social */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-lf-dy">Connect With Us</h3>
              <div className="space-y-4">
                <p className="text-white/80">Stay updated with our latest news and insights.</p>
                <div className="flex gap-4">
                  {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-lf-dy text-lf-dy hover:text-black transition-all duration-300"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 pt-8 border-t border-white/10 absolute bottom-5 left-5 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm p-2 ">
              © {new Date().getFullYear()} Firm Law. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/60 text-sm">
              <a href="#" className="hover:text-lf-dy transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-lf-dy transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Brand Text */}
      <p className=" hidden lg:block absolute text-[140px] font-black text-white/10 -right-[335px] top-[320px] -rotate-90 pointer-events-none select-none">
        FIRM Name
      </p>
      {/* Floating Brand Text */}
      <p className="  absolute text-[30px] font-black text-white right-[15vh] top-[10vh] ">
        FIRM logo
      </p>
    </footer>
  );
};

export default Footer;
