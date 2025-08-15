"use client"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaCog, FaLifeRing, FaStream } from "react-icons/fa"

gsap.registerPlugin(ScrollTrigger)

const SecLayerMask = () => {
  const textContainer = useRef<any>(null)
  const shapeRefs = useRef<any>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textContainer.current,
          start: "top 70%",
          end: "bottom top",
          scrub: 1,
        },
      })

      // X/Y motion scrapping
      tl.to(shapeRefs.current[0], { x: 150, y: -50, duration: 2, ease: "power2.inOut" }, 0)
      tl.to(shapeRefs.current[1], { x: -150, y: 80, duration: 2, ease: "power2.inOut" }, 0.2)
      tl.to(shapeRefs.current[2], { y: 120, duration: 2, ease: "power2.inOut" }, 0.4)
      tl.to(shapeRefs.current[3], { x: 200, duration: 2, ease: "power2.inOut" }, 0.6)
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={textContainer}
      className="absolute w-full h-full top-0 left-0 z-[-1] overflow-hidden"
    >
      <span
        ref={el => { shapeRefs.current[1] = el }}
        className="absolute top-[5%] left-[5%] text-stone-500/50 text-[150px]"
      >
        <FaLifeRing />
      </span>
      {/* Gear icon */}
      <span
        ref={el => { shapeRefs.current[0] = el }}
        className="absolute top-[50%] left-[45%] text-stone-500/50 text-[150px]"
      >
        <FaCog />
      </span>

      {/* Dashed-like ring */}
      <span
        ref={el => { shapeRefs.current[1] = el }}
        className="absolute top-[40%] left-[70%] text-stone-500/50 text-[150px]"
      >
        <FaLifeRing />
      </span>

      <span
        ref={el => { shapeRefs.current[0] = el }}
        className="absolute top-[20%] left-[10%] text-stone-500/50 text-[150px]"
      >
        <FaCog />
      </span>
      {/* Conveyor lines */}
      <span
        ref={el => { shapeRefs.current[2] = el }}
        className="absolute top-[60%] left-[20%] text-stone-500/50 text-[200px]"
      >
        <FaLifeRing />
      </span>
      
      {/* Dashed-like ring */}
      <span
        ref={el => { shapeRefs.current[1] = el }}
        className="absolute top-[90%] left-[50%] text-stone-500/50 text-[150px]"
      >
        <FaLifeRing />
      </span>

      {/* Dashed beam (stream icon for effect) */}
      <span
        ref={el => { shapeRefs.current[3] = el }}
        className="absolute top-[75%] left-[50%] text-stone-500/50 text-[200px]"
      >
        <FaStream />
      </span>
    </div>
  )
}

export default SecLayerMask
