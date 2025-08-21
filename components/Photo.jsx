"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";

function Photo() {
  return (
    <div className=" w-full h-full relative">
        <motion.div initial={{opacity:0}} animate={{ opacity:1, transition:{delay:2, duration:0.4, ease:"easeInOut" } }}>
          <motion.div 
            initial={{opacity:0}} 
            animate={{ opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeInOut" }}} 
            className="absolute w-[270px] h-[270px] xl:w-[400px] xl:h-[400px] mix-blend-lighten rounded-full overflow-hidden shadow-2xl"
        >
            <Image  
                src='/viking.png' 
                priority 
                quality={100} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Viking portrait" 
                className="object-cover scale-110 hover:scale-125 transition-transform duration-500" 
            />
        </motion.div>
        </motion.div>

        <motion.svg className=" w-[272px] h-[272px] xl:ml xl:w-[401px] xl:h-[401px] " fill="transparent" viewBox="0 0 506 506" xmlns="https://www.w3.org/2000/svg"  >

            <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"   
            initial={{ strokeDasharray: "24 10 0 0" }} animate={{ strokeDasharray:["15 120 25 25" , "16 25 92 72" , "4 250 22 22" ], rotate:[120 , 360] }} 
            transition={{duration:20 , repeat:Infinity , repeatType:"reverse" }} />
 
        </motion.svg>
    </div>
  )
}

export default Photo