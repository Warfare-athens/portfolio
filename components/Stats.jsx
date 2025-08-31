"use client";
import CountUp from "react-countup";

const statsLinks = [
    {
        num: 3,
        text: "Years of Experience"
    },
    {
        num: 15,
        text: "Repositories"
    },
    {
        num: 34,
        text: "Technologies"
    },
    {
        num: 710,
        text: "Code Commits"
    },
]

function Stats() {
  return (
    <section className=" pt-4 pb-14 xl:pt-0 xl:pb-0 ">
      <div className=" container mx-auto" >
        <div className=" flex flex-wrap gap-6 lg:gap-8 xl:gap-12 max-w-[80vw] mx-auto xl:max-w-none ">
            {statsLinks.map((item, index)=>{
                return(
                    <div className=" w-[calc(50%-12px)] lg:flex-1 flex gap-4 items-center justify-center  xl:justify-start" key={index}>
                        <CountUp end={item.num} duration={5} delay={2} className=" text-4xl xl:text-6xl font-extrabold" />
                        <p className={` ${ item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} text-sm sm:text-base leading-snug text-white/80 `} >{item.text}</p>
                    </div>
                )
            })}
        </div>
      </div>  
    </section>
  )
}

export default Stats
