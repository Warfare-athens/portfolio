"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent , TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import {BsArrowDownRight} from "react-icons/bs"
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link"


const projects = [
    {
        num:"1",
        title:"Crypto Airdrop claim",
        description:"AirDrop claim after the airdrop has already been closed.",
        stack:[{name:"NextJS"},{name:"Ether Scan"},{name:"Solidity"},{name:"EthersJS"}],
        image:"/assets/work/crypto_airdrop.png",
        live:"https://uniswap-airdrop-claim.vercel.app/",
        demo:"https://uniswap-airdrop-claim.vercel.app/",
        github:"https://github.com/Warfare-athens/uniswap-airdrop-claim"
    },
    {
        num:"2",
        title:"AI Resume ATS Score",
        description:"ATS System, Resume Score optimization tool using AI.",
        stack:[{name:"NextJS"},{name:"OpenAI"},{name:"MongoDB"},{name:"PutterJS"}],
        image:"/assets/work/resumind.png",
        live:"https://resume-analyzer-tau-plum.vercel.app/",
        demo:"https://resume-analyzer-tau-plum.vercel.app/",
        github:"https://github.com/Warfare-athens/resume-analyzer"
    },
{
        num:"3",
        title:"School Management System",
        description:"Admin, teacher and student management system with attendance, test, scores, announcements.",
        stack:[{name:"Next.js"},{name:"TypeScript"},{name:"PostgresDB"},{name:"Prisma"}],
        image:"/assets/work/school_management.png",
        live:"https://school-management-mocha-delta.vercel.app/",
        demo:"https://school-management-mocha-delta.vercel.app/",
        github:"https://github.com/Warfare-athens/school-management"
    },
    {
        num:"4",
        title:"HUME E-commerce",
        description:"fullstack End to end Production E-Commerce application.",
        stack:[{name:"MongoDB"},{name:"ReactJS"},{name:"ExpressJS"},{name:"NodeJS"}],
        image:"/assets/work/hume.png",
        live:"https://e-commerce-1-2gxs.onrender.com/",
        demo:"https://e-commerce-1-2gxs.onrender.com",
        github:"https://github.com/Warfare-athens/e-commerce"
    },
    {
        num:"5",
        title:"Twitter | X",
        description:"Full stack, highly Scalable, modern UI/UX Twitter clone.",
        stack:[{name:"MongoDB"},{name:"ReactJS"},{name:"ExpressJS"},{name:"NodeJS"}],
        image:"/assets/work/x2.png",
        live:"https://x-6yzs.onrender.com/",
        demo:"https://www.youtube.com/watch?v=2g1b0d3j4a8",
        github:"https://github.com/Warfare-athens/X"
    },

  
]




function Projects() {

  return (

    <section className=" min-h[80vh] mt flex flex-col justify-center py-12 xl:py-0 " >
      <div className=" mx:auto mt-4 md:mt-28 container">
        <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-accent via-white to-accent bg-clip-text mb-2">
                        PROJECTS
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full" />
                    
                </motion.div>   
        <motion.div initial={{opacity:1}} className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]" 
        animate={{ opacity:1 , transition:{ delay:"2.4" , duration:"0.4" , ease:"easeIn" }}} >

          {projects.map((project, index)=>{
            return(

              <div key={index} className="flex-1 flex flex-col  justify-center border-[1px] border-neutral-500 p-4 md:p-6 rounded-3xl  gap-3 md:gap-5 group" >
                <div className=" w-full flex justify-between items-center ">

                <div className=" text-4xl  font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                    {project.num}
                </div>

                <div className=" flex gap-4 ">
                    <Link className="w-[40px] h-[40px]  rounded-full bg-white hover:bg-accent transition-all 
                    duration-500 flex justify-center items-center -rotate-45 hover:-rotate-90" href={project.live}> 
                        <BsArrowDownRight className=" text-primary text-2xl"/> 
                    </Link>

                    <Link className="w-[40px] h-[40px]  rounded-full bg-white hover:bg-accent transition-all 
                    duration-500 flex justify-center items-center " href={project.demo}> 
                        <MdOutlineOndemandVideo className="  text-primary text-2xl "/> 
                    </Link>

                    <Link className="w-[40px] h-[40px]  rounded-full bg-white hover:bg-accent transition-all 
                    duration-500 flex justify-center items-center " href={project.github}> 
                        <FaGithub className="  text-primary text-2xl "/> 
                    </Link>
                </div>

                </div>

                <div className="relative w-full aspect-[16/9] bg-accent/10 rounded-lg hover:bg-accent transition-all duration-500 overflow-hidden">
                <Image 
                    src={project.image} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={project.title} 
                    className="object-cover rounded-lg" 
                />
                </div>

                  <h2 className=" text-2xl font-bold leading-none text-white  group-hover:text-accent transition-all duration-500">
                    {project.title}
                  </h2>

                <div className=" flex items-center gap-2 sm:gap-4 flex-wrap">
                    {project.stack.map((skill, index) => {
                        return(
                    <div key={index} className="  p-1 h-7  border-[1px]  border-neutral-500 rounded-md flex justify-evenly items-center    ">
                        <div className=" text-xs sm:text-sm  text-nowrap font-extralight  text-accent translate-all duration-300 ">{skill.name}</div>
                    </div>
                        )
                    })}
                </div>

                  <p className=" text-sm font-thin text-white/60">{project.description}</p>


              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects