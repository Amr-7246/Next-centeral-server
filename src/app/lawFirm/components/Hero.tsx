import React from "react";
import { Home } from "@/pub/assets/lowFirm";
import Image from "next/image";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex-center">
      {/* Background */}
      <Image
        src={Home.overveiw_1}
        alt={"hero"}
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <span className=" absolute inset-0 z-0 w-full h-full" />


      {/* Hero Content */}
      <div className="relative flex-center overflow-hidden bg-black/50 w-[95%] h-[85%] rounded-2xl shadow-lg">
        <Image
          src={Home.layerMask_1}
          alt={"layerMask"}
          className="absolute opacity-40 inset-0 w-full h-full object-cover -z-10"
        />
        <div className="w-[80%] h-[80%] flex flex-col gap-4 justify-center">
          <span
            style={{ color: "transparent", WebkitTextStroke: "4px #E6A61E ", }}
            className="text-[50px]"
          >
            Protecting Your 
            <span style={{ color: "white", WebkitTextStroke: "1px white ", }} className="text-white mx-3 ">Rights, Securing</span>
            Your Future
          </span>
          <p className="text-lg md:text-xl text-lf-dw max-w-[650px]">
            {Home.lowFirmTextContent.home.hero.subtext}
          </p>
        </div>

        {/*//& Frame Decorations */}        
        {/* Navigation */}
        <nav className="absolute top-6 right-10 flex gap-8 text-lf-w font-medium text-sm">
          {Home.lowFirmTextContent.navBar.options.map((item,idx) => (
            <Link
              key={idx}
              href={item.href}
              className={` hover:text-lf-dy transition-colors duration-700`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Bottom Right Corner Box */}
        <span className="w-[80px] rounded-br-2xl absolute h-[150px] border border-t-0 border-l-0 border-white right-[30px] bottom-[30px]" />

        {/* Small Motto */}
        <span className="text-[10px] text-lf-dy font-bold absolute w-fit right-[115px] bottom-[22px]">
          YOUR BEST CHOICE
        </span>

        {/* Pulsing Dots */}
        <div className="w-fit absolute h-fit right-[28px] bottom-[250px] flex-center gap-2 flex-col">
          <span className="w-[10px] h-[10px] rounded-full bg-white animate-pulse" />
          <span className="w-[10px] h-[10px] rounded-full bg-white animate-pulse" />
          <span className="w-[10px] h-[10px] rounded-full bg-white animate-pulse" />
        </div>

        {/* Top Left Corner Box */}
        <span className="w-[150px] rounded-tl-2xl absolute h-[80px] border border-b-0 border-r-0 border-white left-[30px] top-[30px]" />

        {/* Social Media */}
        <div className="absolute bottom-[30px] left-[30px] flex gap-5 text-black text-xl">
          <a href="#" className="hover:text-lf bg-lf-w rounded-full p-2 transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-lf bg-lf-w rounded-full p-2 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-lf bg-lf-w rounded-full p-2 transition-colors">
            <FaInstagram />
          </a>
        </div>

        {/* Left Vertical Line Accent */}
        <span className="absolute left-[15px] top-[100px] w-[2px] h-[200px] bg-lf-dy opacity-70" />

        {/* Right Vertical Line Accent */}
        <span className="absolute right-[15px] bottom-[120px] w-[2px] h-[180px] bg-lf-dy opacity-70" />

        {/* Top Horizontal Line Accent */}
        <span className="absolute top-[15px] left-[120px] w-[200px] h-[2px] bg-lf-dy opacity-70" />

        {/* Bottom Horizontal Line Accent */}
        <span className="absolute bottom-[15px] right-[120px] w-[250px] h-[2px] bg-lf-dy opacity-70" />

        {/* Decorative Text Vertical */}
        <span className="absolute rotate-90 text-[11px] tracking-[0.3em] font-bold text-lf-w -left-[55px] bottom-[125px]">
          LEGAL EXPERTISE
        </span>
      </div>

    </section>
  );
};

export default Hero;
