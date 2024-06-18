"use client";
import CountUp from "react-countup";

const statsLinks = [
    {
        num: 2,
        text: "Years of Experience"
    },
    {
        num: 7,
        text: "Projects"
    },
    {
        num: 8,
        text: "Technology mastered"
    },
    {
        num: 22,
        text: "Code Commit"
    },
]

function Stats() {
  return (
    <section className=" pt-4 pb-14 xl:pt-0 xl:pb-0 ">
      <div className=" container mx-auto" >
        <div className=" flex flex-wrap gap-6 lg:gap-8 xl:gap-12 max-w-[80vw] mx-auto xl:max-w-none ">
            {statsLinks.map((item, index)=>{
                return(
                    <div className=" flex-1 flex gap-4 items-center justify-center  xl:justify-start" key={index}>
                        <CountUp end={item.num} duration={5} delay={2} className=" text-4xl xl:text-6xl font-extrabold" />
                        <p className={` ${ item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 `} >{item.text}</p>
                    </div>
                )
            })}
        </div>
      </div>  
    </section>
  )
}

export default Stats