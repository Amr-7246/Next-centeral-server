"use client"
import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { home, lazerCutting } from "@/pub/assets"
import Image from "next/image"
import Link from "next/link"
import { FaCogs, FaDraftingCompass, FaIndustry } from "react-icons/fa"

gsap.registerPlugin(ScrollTrigger)

const scrollingItems = Object.values(lazerCutting)

const InfinityScrolling = ({leftToRight}) => {
  const wrapperRef = useRef(null)
  const trackRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".scroll-item")
      const totalWidth = items.length * 320 // 300px + gap
      const duration = 60

      if(leftToRight) {
        gsap.to(trackRef.current, {
          x: `+=${totalWidth / 2}`,
          duration,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth ),
          },
        })
      }else{
        gsap.to(trackRef.current, {
          x: `-=${totalWidth / 2}`,
          duration,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="w-full mx-auto my-10 relative overflow-hidden "
    >
      <div ref={trackRef} className="flex flex-row gap-[50px] w-fit">
        {[...Array(2)].flatMap(() =>
          Array.from({ length: 10 }).map((_, idx) => (
            <div
              className="scroll-item w-fit flex gap-[50px] justify-center items-center flex-shrink-0"
              key={idx + Math.random()}
            >
              {scrollingItems.map((item, index) => (
                <div
                  key={index}
                  className="w-[400px] h-[250px] shadow-lg overflow-hidden  shadow-black/20 border border-stone-300 rounded-xl flex flex-col items-center gap-4 hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="w-full relative overflow-hidden ">
                    <Image
                      src={item}
                      alt={`galary_${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default InfinityScrolling


                  // {/* Label + Icon */}
                  // <div className="flex items-center gap-2 font-semibold text-lg text-stone-800">
                  //   {item.reactIcon}
                  //   {item.label}
                  // </div>

                  // {/* Description */}
                  // {item.dis && (
                  //   <p className="px-3 text-sm text-stone-600 text-center">
                  //     {item.dis}
                  //   </p>
                  // )}

                  // {/* Link */}
                  // <Link href="/contact">
                  //   <button className="cursor-pointer mt-auto px-4 py-2 bg-stone-800 text-white rounded-lg text-sm hover:bg-stone-700 transition-colors">
                  //     Learn More
                  //   </button>
                  // </Link>