import React from "react";
import Image from "next/image";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { porcalenProject } from "@/pub/assets/porcalen";
import { ThreeDBtn } from "@/components/Buttons";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex-center">
      {/* Background */}
      <Image
        src={porcalenProject.img_1}
        alt={"hero"}
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Hero Content */}
      <div className="relative flex-center overflow-hidden bg-black/70 w-[100%] h-[100%] ">
        <div className="relative z-5 w-[80%] h-[80%] flex flex-col gap-4 justify-center">
          <span
            style={{ color: "transparent", WebkitTextStroke: "2px #1D8ED9" }}
            className="text-[50px]"
          >
            Crafted with 
            <span
              style={{ color: "white", WebkitTextStroke: "1px white" }}
              className="text-white mx-3"
            >
              Passion, Designed 
            </span>
            for Living
          </span>
          <p className="text-lg md:text-xl text-lf-dw max-w-[650px]">
            {porcalenProject.porcalenTextContent.home.hero.subtext}
          </p>
          <div className="w-[75%] flex justify-start mt-[10px] gap-5 relative z-5">
            <ThreeDBtn text={"explor collections"} buttonColors={"bg-white shadow-white/40 text-black"} spanColors={"bg-black"} />
            <ThreeDBtn text={"contact us"} buttonColors={"bg-black shadow-black/40 text-white"} spanColors={"bg-white"} />
          </div>
        </div>

        {/*//& Luxury Decorations styles */}
          {/*//& Logo */}
            <div className="font-bitcount z-10 py-3 absolute top-5 left-15 flex text-porc-b font-bold text-[25px] flex-center gap-3">
              <span className=" rounded-full w-[50px] h-[50px] border-[10px] border-l-white border-r-porc-b border-t-porc-dw border-b-black  " />
              Ceramora
            </div>
          {/*//~ Navigation */}
          <nav className="absolute top-10 right-10 flex gap-8 text-lf-w font-medium text-md ">
            {porcalenProject.porcalenTextContent.navBar.options.map((item,idx) => (
              <Link
                key={idx}
                href={item.href}
                className={` ${idx == 0 ? "text-porc-b" : "" } hover:text-porc-b transition-colors duration-700`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="absolute top-0 -left-[30vh] rounded-full w-[100vh] h-[100vh] border-[100px] border-r-porc-b/30 border-t-porc-dw/30 border-b-black/30  " >

          </div>
          {/*//~ Social Media */}
            <div className="absolute bottom-[80px] right-[50px] flex flex-col gap-5 text-black text-xl">
              <a href="#" className="hover:text-lf bg-porc-b rounded-full p-3 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-lf bg-porc-b rounded-full p-3 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-lf bg-porc-b rounded-full p-3 transition-colors">
                <FaInstagram />
              </a>
            </div>
      </div>

    </section>
  );
};

export default Hero;

