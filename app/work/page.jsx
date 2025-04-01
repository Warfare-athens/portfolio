"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent , TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects =[
    {
        num:"1",
        category:"School Management System",
        title:"School Management System",
        description:"fullstack project using latest technologies with modern UI/UX , highly Scalable.",
        stack:[{name:"Next.js"},{name:"TypeScript"},{name:"PostgresDB"},{name:"Backend"}],
        image:"/assets/work/school_management.png",
        live:"https://school-management-mocha-delta.vercel.app/",
        github:"https://github.com/Warfare-athens/school-management"
    },
    {
        num:"2",
        category:"HUME E-commerce",
        title:"HUME E-commerce",
        description:"fullstack project using latest technologies with modern UI/UX , highly Scalable.",
        stack:[{name:"MongoDB"},{name:"ReactJS"},{name:"ExpressJS"},{name:"NodeJS"}],
        image:"/assets/work/hume.png",
        live:"https://e-commerce-1-2gxs.onrender.com/",
        github:"https://github.com/Warfare-athens/e-commerce"
    },
    {
        num:"3",
        category:"Twitter / X",
        title:"Twitter , X",
        description:"fullstack project using latest technologies with modern UI/UX , highly Scalable.",
        stack:[{name:"MongoDB"},{name:"ReactJS"},{name:"ExpressJS"},{name:"NodeJS"}],
        image:"/assets/work/x2.png",
        live:"https://x-6yzs.onrender.com/",
        github:"https://github.com/Warfare-athens/X"
    },
    {
        num:"4",
        category:"Password generator",
        title:"project 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, molestias",
        stack:[{name:"ReactJS"},{name:"TailwindCSS"},{name:"JavaScript"}],
        image:"/assets/work/thumb4.png",
        live:"https://warfare-athens.github.io/Warfare_Password_Generator/",
        github:"https://github.com/Warfare-athens/Warfare_Password_Generator"
    },
    {
        num:"5",
        category:"Frontend website",
        title:"FrontEnd website",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, molestias",
        stack:[{name:"Html"},{name:"css"},{name:"JavaScript"}],
        image:"/assets/work/thumb1.png",
        live:"https://warfare-athens.github.io/WARFARE-Motors/",
        github:"https://github.com/Warfare-athens/WARFARE-Motors"
    },
    {
        num:"6",
        category:"fullstack website",
        title:"fulllf",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, molestias",
        stack:[{name:"ReactJS"},{name:"NodeJS"},{name:"ExpressJS"},{name:"EJS"}],
        image:"/assets/work/thumb2.png",
        live:"https://www.linkedin.com/posts/athens-dubey-54b059203_nodejs-mongodb-fullstackdevelopment-activity-7201422899348402176-1Q_Q?utm_source=share&utm_medium=member_desktop",
        github:"https://www.linkedin.com/posts/athens-dubey-54b059203_nodejs-mongodb-fullstackdevelopment-activity-7201422899348402176-1Q_Q?utm_source=share&utm_medium=member_desktop"
    },
    {
        num:"7",
        category:"Ui/Ux Design",
        title:"project 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, molestias",
        stack:[{name:"Figma"},{name:"Ui/Ux"}],
        image:"/assets/work/thumb3.png",
        live:"https://www.behance.net/WarfareAthens",
        github:""
    },
]


function Work() {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) =>{
        const currentIndex = swiper.activeIndex
        setProject(projects[currentIndex])
    }

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1 , transition:{ delay:2.4 , duration:0.4 , ease:"easeIn" }}}
     className=" min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 " >
        <div className=" container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
                    <div className=" flex flex-col h-[50%] gap-[30px]">
                        <div className=" text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project.num}
                        </div>

                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize  ">
                            {project.category}
                        </h2>

                        <p className="text-white/60 ">{project.description}</p>

                        <ul className=" flex gap-4"> 
                            {project.stack.map((item,index)=>{
                                return(
                                    <li key={index} className=" text-xl text-accent" >
                                        {item.name}
                                        {index !== project.stack.length -1 && ","}
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="border border-white/20"></div>

                        <div className=" flex items-center gap-4">
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100} >
                                    <Tooltip >
                                        <TooltipTrigger className=" w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group " >
                                            <BsArrowUpRight className=" text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100} >
                                    <Tooltip >
                                        <TooltipTrigger className=" w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group " >
                                            <BsGithub className=" text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" w-full xl:w-[50%]">
                    <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-[520px] mb-12" >
                        {projects.map((project,index)=>{
                            return(
                                <SwiperSlide key={index} className="w-full" >
                                    <div className=" h-[250px] sm:h-[460px] relative group flex justify-center items-center bg-pink-50/20 " >

                                        <div className=" relative w-full h-full ">
                                            <Image src={project.image}  fill={true} quality={100} alt="" priority={true} className=" object-contain" ></Image>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                        <WorkSliderBtns containerStyles=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] h-[44px] w-[44px] flex justify-center items-center transition-all " />
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Work