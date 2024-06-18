import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

export default function Home() {
  return (
    <section className=" h-full ">
      <div className=" h-full container mx-auto">
        <div className=" flex flex-col items-center justify-evenly xl:flex-row xl:pt-8 xl:pb-24 ">

          <div className=" text-center xl:text-left order-2 xl:order-none"> 
            <span className=" text-xl">SOFTWARE DEVELOPER</span>
            <h1 className=" h1 mb-6">Hello I'm<br /> <span className=" text-accent">Athens Dubey</span></h1>
            <p className=" max-w-[500px] mb-5 leading-relaxed text-sm lg:text-base text-white/80 ">
              Crafting elegant code to elevate your  experiences. I am proficient in various programming languages and Technologies.
            </p>
            <div className=" flex flex-col items-center gap-4 xl:flex-row">
              <Button  variant="outline" size="lg" className=" uppercasea flex items-center gap-2" ><Link href="https://docs.google.com/document/d/1zV1ZRUc0clLIi1bkoGEoHqC2Uxd8cTz-Cr3XHqcbAnY/edit#heading=h.ocvpswguxa6m">DOWNLOAD CV</Link><FiDownload/></Button>
              <div className=" mb-8 xl:mb-0"><Socials className="" containerStyles=" flex gap-6" iconStyles=" w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-2xl hover:bg-accent hover:text-primary hover:trasition-all duration-500 " /></div>
            </div>
          </div>
          <div className=" ml-0 xl:ml-16 mb-6 xl:mb-0 order-1 xl:order-none" > <Photo/> </div>
        </div>
        
      </div>
      <div className=" flex justify-evenly ">
      <Stats/>
      </div>
    </section>
  );
}
