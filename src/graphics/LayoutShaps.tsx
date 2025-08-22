export const Dots = ({dotColor, shapS, DotsNum}:{dotColor:string, shapS:string, DotsNum:number}) => {
  return(
    <div className={` ${shapS} absolute overflow-hidden flex-center flex-wrap gap-3 `}>
      {Array.from({length:DotsNum}).map(( _ , idx ) => (
        <span key={idx} className={`w-4 h-4 rounded-full flex-center ${dotColor}`} >
          {/* <span className={`w-1 h-1 rounded-full bg-porc-lb`} /> */}
        </span>
      ))}
    </div>
  )
}
export const Lines = ({lineColor, shapS, linesNum}:{lineColor:string, shapS:string, linesNum:number}) => {
  return(
    <div className={` ${shapS} absolute overflow-hidden flex-center flex-wrap gap-3 `}>
      {Array.from({length:linesNum}).map(( _ , idx ) => (
        <span key={idx} style={{height: `${Math.random() * 400 }px` }} className={`w-2 rounded-md flex-center ${lineColor}`} >
        </span>
      ))}
    </div>
  )
}
