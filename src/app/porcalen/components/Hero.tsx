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
        <div className="w-[80%] h-[80%] flex flex-col gap-4 justify-center">
          <span
            style={{ color: "transparent", WebkitTextStroke: "2px #1D8ED9" }}
            className="text-[50px]"
          >
            Showcasing
            <span
              style={{ color: "white", WebkitTextStroke: "1px white" }}
              className="text-white mx-3"
            >
              Excellence,
            </span>
            Building Trust
          </span>
          <p className="text-lg md:text-xl text-lf-dw max-w-[650px]">
            {porcalenProject.porcalenTextContent.home.hero.subtext}
          </p>
          <div className="w-[75%] flex justify-start mt-[10px] gap-5 relative z-5">
            <ThreeDBtn text={"explor collections"} buttonColors={"bg-white shadow-white/40 text-black"} spanColors={"bg-black"} />
            <ThreeDBtn text={"contact us"} buttonColors={"bg-black shadow-black/40 text-white"} spanColors={"bg-white"} />
          </div>
        </div>

        {/*//& Frame Decorations */}
          {/*//~ Navigation */}
          <nav className="absolute top-10 right-10 flex gap-8 text-lf-w font-medium text-md ">
            {porcalenProject.porcalenTextContent.navBar.options.map((item,idx) => (
              <Link
                key={idx}
                href={item.href}
                className={` hover:text-porc-b transition-colors duration-700`}
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


          // {/*//~ Bottom Right Corner Box */}
          // <span className="w-[80px] absolute h-[150px] border border-t-0 border-l-0 border-white right-[30px] bottom-[80px]" />

          // {/*//~ Small Motto */}
          // <span className="text-[10px] text-porc-b font-bold absolute w-fit right-[115px] bottom-[72px]">
          //   YOUR BEST CHOICE
          // </span>

          // {/*//~ Pulsing Dots */}
          // <div className="w-fit absolute h-fit right-[28px] bottom-[300px] flex-center gap-2 flex-col">
          //   <span className="w-[10px] h-[10px] rounded-full bg-white animate-pulse" />
          //   <span className="w-[10px] h-[10px] rounded-full bg-white animate-pulse" />
          //   <span className="w-[10px] h-[10px] rounded-full bg-white animate-pulse" />
          // </div>

          // {/*//~ Top Left Corner Box */}
          // <span className="w-[150px] absolute h-[80px] border border-b-0 border-r-0 border-white left-[30px] top-[30px]" />

          // {/*//~ Social Media */}
          // <div className="absolute bottom-[80px] left-[30px] flex gap-5 text-black text-xl">
          //   <a href="#" className="hover:text-lf bg-lf-w rounded-full p-2 transition-colors">
          //     <FaLinkedin />
          //   </a>
          //   <a href="#" className="hover:text-lf bg-lf-w rounded-full p-2 transition-colors">
          //     <FaFacebookF />
          //   </a>
          //   <a href="#" className="hover:text-lf bg-lf-w rounded-full p-2 transition-colors">
          //     <FaInstagram />
          //   </a>
          // </div>

          // {/*//~ Left Vertical Line Accent */}
          // <span className="absolute left-[15px] top-[100px] w-[2px] h-[200px] bg-porc-b opacity-70" />

          // {/*//~ Right Vertical Line Accent */}
          // <span className="absolute right-[15px] bottom-[170px] w-[2px] h-[180px] bg-porc-b opacity-70" />

          // {/*//~ Top Horizontal Line Accent */}
          // <span className="absolute top-[15px] left-[120px] w-[200px] h-[2px] bg-porc-b opacity-70" />

          // {/*//~ Bottom Horizontal Line Accent */}
          // <span className="absolute bottom-[65px] right-[120px] w-[250px] h-[2px] bg-porc-b opacity-70" />

          // {/*//~ Decorative Text Vertical */}
          // <span className="absolute rotate-90 text-[11px] tracking-[0.3em] font-bold text-lf-w -left-[55px] bottom-[175px]">
          //   LEGAL EXPERTISE
          // </span>