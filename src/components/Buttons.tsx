import React from 'react'



export const ThreeDBtn = ({text,icon, buttonColors, spanColors}:{text:string|any,icon?:any, buttonColors :string, spanColors:string} ) => {
  const butDefualt = buttonColors == "" ? "shadow-black/50 bg-black text-white" : ""
  const spanDefualt = spanColors == "" ? "bg-white" : ""
  return (
    <button className={`flex gap-3 px-10 py-3 w-fit shadow-lg ${butDefualt} relative ${buttonColors}`}>
      <span className={`absolute top-[6px] right-[6px] ${spanDefualt} w-full h-full -z-1  ${spanColors}`}  />   
      <span className='' >{icon}</span>
      {text}
    </button>
  )
}
