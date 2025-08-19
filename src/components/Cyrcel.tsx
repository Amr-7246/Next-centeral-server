import React from 'react'

const Cyrcel = ({position, color}:{position:any, color:any}) => {
  return (
    <div>
      {/*//& Decorative Circles */}
        <div className={`absolute ${position} z-[5] flex items-center justify-center pointer-events-none`} >
          <div className="absolute -top-[50px] right-0 rotate-45">
            {/* Small screens → 5 circles */}
            <div className="hidden sm:flex md:hidden relative">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className={`absolute rounded-full border ${color} `}
                  style={{
                    width: `${200 + i * 40}px`,
                    height: `${200 + i * 40}px`,
                  }}
                />
              ))}
            </div>

            {/* Medium screens → 8 circles */}
            <div className="hidden md:flex lg:hidden relative">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className={`absolute rounded-full border ${color} `}
                  style={{
                    width: `${300 + i * 50}px`,
                    height: `${300 + i * 50}px`,
                  }}
                />
              ))}
            </div>

            {/* Large screens → 12 circles */}
            <div className="hidden lg:flex">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className={`absolute rounded-full border ${color} `}
                  style={{
                    width: `${400 + i * 60}px`,
                    height: `${400 + i * 60}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cyrcel