"use client";

import { FaHtml5 ,FaPython, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiNextdotjs} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; 
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"; 
import { motion } from "framer-motion";


const about = {
    title:"About me",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, alias.",
    info:[
        {
            fieldName:"srgr",
            fieldValue:"retwer"
        },
        {
            fieldName:"wert",
            fieldValue:"werter"
        },
        {
            fieldName:"srgr",
            fieldValue:"retwer"
        },
        {
            fieldName:"wert",
            fieldValue:"werter"
        },
        {
            fieldName:"srgr",
            fieldValue:"retwer"
        },
        {
            fieldName:"wert",
            fieldValue:"werter"
        },
        {
            fieldName:"srgr",
            fieldValue:"retwer"
        },
        {
            fieldName:"wert",
            fieldValue:"werter"
        },
        
        
    ]
}

const experience = {
    icon:"/assets/resume/badge.svg",
    title:"Experience",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, alias.",
    items:[
        {
            company:"samsung",
            position:"software developer 1",
            duration:"2022-2023"
        },
        {
            company:"samsung",
            position:"software developer 1",
            duration:"2022-2023"
        },
        {
            company:"samsung",
            position:"software developer 1",
            duration:"2022-2023"
        },
    ]
}

const education = {
    icon:"/assets/resume/cap.svg",
    title:"Education",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, alias.",
    items:[
        {
            istitution:"ShriRam Intitite of Information Technology",
            degree:"B-Tech(CSE)",
            duration:"2022-2026"
        },
        {
            istitution:"Delhi Public School",
            degree:"Higher Secondary Education",
            duration:"2016-2021"
        },
       
    ]
}

const skills = {
    title:"Skills",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, alias.",
    skillList:[
        {
            icon:<FaHtml5/>,
            name:"Html",
        },
        {
            icon:<FaJs/>,
            name:"JavaScript",
        },
        {
            icon:<FaNodeJs/>,
            name:"NodeJS",
        },
        {
            icon:<FaReact/>,
            name:"ReactJS",
        },
        {
            icon:<SiNextdotjs/>,
            name:"Next.js",
        },
        {
            icon:<FaPython/>,
            name:"Python",
        },
        {
            icon:<SiMongodb/>,
            name:"MongoDb",
        },
        {
            icon:<FaFigma/>,
            name:"Figma",
        },
    ]
}





function page() {
  return (
    <motion.div initial={{opacity:0}} className=" flex justify-center items-center min-h-[80vh] py-12 xl:py-0 " 
    animate={{ opacity:1 , transition:{ delay:"2.4" , duration:"0.4" , ease:"easeIn" }}}>

        <div className=" mx-auto container">

            <Tabs defaultValue="about" className=" flex flex-col xl:flex-row gap-[60px] ">

                <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 " >

                    <TabsTrigger value="about" >About me</TabsTrigger>
                    <TabsTrigger value="skills" >Skills</TabsTrigger>
                    <TabsTrigger value="experience" >Experience</TabsTrigger>
                    <TabsTrigger value="education" >Education</TabsTrigger>

                </TabsList>

                <div className=" min-h-[70vh] w-full">

                    <TabsContent className="w-full text-center xl:text-left " value="about">
                        <div className=" flex flex-col gap-[30px]">
                            <h3 className=" font-bold text-4xl ">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" >{about.description}</p>
                            <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                                {about.info.map((item,index) =>{
                                    return(
                                        <li key={index} className=" flex items-center justify-center xl:justify-start gap-4 " >
                                            <span className=" text-white/80 " >{item.fieldName} </span>
                                            <span className="text-xl" >{item.fieldValue} </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div> 
                    </TabsContent>

                    <TabsContent className="w-full h-full" value="skills">
                        <div className=" flex flex-col gap-[30px]">
                            <div className=" flex flex-col gap-[30px] text-center xl:text-left ">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 " >{skills.description} </p>
                            </div>
                            <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill,index)=>{
                                    return(
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>

                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                                        <div className="text-6xl group-hover:text-accent translate-all duration-300 ">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>         
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>

                    <TabsContent className="w-full" value="experience">
                        <div className=" flex flex-col gap-[30px] text-center xl:text-left ">
                            <h3 className=" text-4xl font-bold" >{experience.title}</h3>
                            <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0" > {experience.description} </p>
                            <ScrollArea className=" h-[400px] ">
                                <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item,index)=>{
                                        return(
                                            <li key={index} className="bg-[#232329] py-6 px-10 h-[184px] flex flex-col items-center justify-center lg:items-start gap-1 ">
                                                <span className="text-accent "> {item.duration} </span>
                                                <h3 className=" text-xl max-w-[260px] min-h[60px] text-center text-white lg:text-left " > {item.position} </h3>
                                                <div className=" flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                                                    <p className="text-white/80" >{item.company}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div> 
                    </TabsContent>

                    <TabsContent className="w-full" value="education">
                        <div className=" flex flex-col gap-[30px] text-center xl:text-left ">
                                <h3 className=" text-4xl font-bold" >{education.title}</h3>
                                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0" > {education.description} </p>
                                <ScrollArea className=" h-[400px] ">
                                    <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item,index)=>{
                                            return(
                                                <li key={index} className="bg-[#232329] py-6 px-10 h-[184px] flex flex-col items-center justify-center lg:items-start gap-1 ">
                                                    <span className="text-accent "> {item.duration} </span>
                                                    <h3 className=" text-xl max-w-[260px] min-h[60px] text-center text-white lg:text-left " > {item.degree} </h3>
                                                    <div className=" flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                                                        <p className="text-white/80" >{item.istitution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>  
                    </TabsContent>
                </div> 
            </Tabs>
        </div>
    </motion.div>
  )
}

export default page
