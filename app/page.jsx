import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Coursework from "@/components/Coursework";
import Certificates from "@/components/Certificates";
import About from "@/components/About";

export default function Home() {
  return (
    <section className=" h-full ">
      <div className=" h-full container mt-8 mx-auto">
        <div className=" flex flex-col items-center justify-evenly xl:flex-row pt-8 xl:pb-24 ">

          <div className=" text-center xl:text-left order-2 xl:order-none"> 
            <h1 className=" h1 ">Hello I'm<br /> <span className=" text-accent">Athens Dubey</span></h1>
            <span className=" text-xl ">Software Dev | Gen AI Developer</span>
            <p className=" text-sm hidden md:block md:mt-8 mb-5 font-thin text-white/60">I'm a passionate software developer with a focus on building innovative solutions using cutting-edge technologies.</p>

            <div className=" flex flex-col mt-5 items-center  gap-4 xl:flex-row">
              <Link href="https://drive.google.com/drive/folders/1XyLRj3taX0dUeRAvWMlJgRCngWA6MeTj"  className=" bg-accent  text-black font-medium px-5 py-2 uppercasea rounded-lg flex items-center gap-2 "  >
                DOWNLOAD CV
                <FiDownload/>
              </Link>
              <div className=" mb-8 xl:mb-0"><Socials className="" containerStyles=" flex gap-6" iconStyles=" w-10 h-10 border border-accent rounded-md flex items-center justify-center text-accent text-2xl hover:bg-accent hover:text-primary hover:trasition-all duration-500 " /></div>
            </div>

          </div>
          <div className=" ml-0 xl:ml-16 mb-6 xl:mb-0 order-1 xl:order-none" > <Photo/> </div>
        </div>
        
      </div>
      <div className=" flex justify-evenly ">
      <Stats/>
      </div>

      <Projects />
      <Skills/>
      <Certificates/>
      <About />
    </section>
  );
}
