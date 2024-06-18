"use client"
import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const servieces = [
  {
    num:"01",
    title:"Web Development",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam",
    href:"https://github.com/Warfare-athens"
  },
  {
    num:"01",
    title:"Programming",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam",
    href:""
  },
  {
    num:"01",
    title:"Ui/Ux",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam",
    href:"https://www.behance.net/WarfareAthens"
  },
  {
    num:"01",
    title:"SEO",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam",
    href:""
  }
]


const Services = () => {
  return (
    <section className=" min-h[80vh] flex flex-col justify-center py-12 xl:py-0 " >
      <div className=" mx:auto container">
        <motion.div initial={{opacity:1}} className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]" 
        animate={{ opacity:1 , transition:{ delay:"2.4" , duration:"0.4" , ease:"easeIn" }}} >

          {servieces.map((service, index)=>{
            return(
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group" >
                <div className=" w-full flex justify-between items-center ">

                  <div className=" text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">{service.num}</div>

                  <Link className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all 
                  duration-500 flex justify-center items-center -rotate-45 hover:-rotate-90" href={service.href}> 
                    <BsArrowDownRight className=" text-primary text-3xl"/> 
                  </Link>
                  </div>

                  <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>

                  <p className=" text-white/60">{service.desc}</p>

                  <div className=" border-white/80 w-full border-b"></div>

              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services