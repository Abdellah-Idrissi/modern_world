"use client"
import { motion , useInView } from "framer-motion";
import { useRef } from "react"
import quotes from "../public/quotes.svg"
import Image from "next/image";

export default function ThirdSection() {
  const ref1 = useRef(null)
  const isInView1 = useInView(ref1,{once:true})
  const ref2 = useRef(null)
  const isInView2 = useInView(ref2,{once:true})

  const parentVariants = {
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { type: "Inertia" , delay:0.25 } },
  }

  const item2 = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { type: "Inertia" , delay:0.5 } },
  }

  return (
    <motion.section 
      className=" px-5 sm:px-7 pt-16 pb-12 container mx-auto lg:max-w-[1280px]"  
      id="testimonials"
    >

      <motion.div
          ref={ref1}
          animate={isInView1 ? "show" : "hidden"}
          variants={parentVariants}
          className="flex flex-col mb-14"
        >
          <motion.div variants={item}></motion.div>

          <motion.div variants={item} className="mb-5">
            <h2 className={`font-secondFont hidden lg:block text-[60px] text-center leading-none`}>Clients glittering testimonials</h2>
            <h2 className={`font-secondFont text-[38px] xm:text-[55px] md:text-[60px] text-center leading-[1.1] lg:hidden`}>Clients glittering</h2>
            <h2 className={`font-secondFont text-[38px] xm:text-[55px] md:text-[60px] text-center leading-[1.1] lg:hidden`}>testimonials</h2>
          </motion.div>

          <motion.p variants={item} className="text-[#252525cf] mt-1 text-[14px] xm:text-[15px] md:text-[16px] text-center mx-auto max-w-[230px]  xm:max-w-[265px] md:max-w-[290px]  lg:max-w-[560px]">The voices of satisfaction as clients share their experiences with our cutting-edge modern buildings and visionary architectures
          </motion.p>

      </motion.div>



      <motion.div           
        ref={ref2}
        animate={isInView2 ? "show" : "hidden"}
        variants={item2} 
        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-7"
      >

        <div className="h-[340px] xm:h-[380px] p-7 bg-[#F2F2F2] rounded-xl flex flex-col transform hover:scale-105 hover:rotate-2 transition-all duration-300  ">
          <Image src={quotes} alt="quotes" />
          <div className="flex-1 flex flex-col justify-between">
            <p className="font-medium text-[20px] xm:text-[25px] ">The agency&apos;s architects have a unique ability to capture the essence of modern living</p>
            <div>
              <p className="text-sm">Greg, Canada</p>
              <p className="text-xs text-[#252525cf]">on what he thinks about our architects</p>
            </div>
          </div>
        </div>

        <div className="h-[340px] xm:h-[380px] p-7 bg-[#F2F2F2] rounded-xl flex flex-col transform hover:scale-105 hover:rotate-2 transition-all duration-300  ">
          <Image src={quotes} alt="quotes" />
          <div className="flex-1 flex flex-col justify-between">
            <p className="font-medium text-[20px] xm:text-[25px] ">An agency that blends aesthetics and functionality in their modern buildings.</p>
            <div>
              <p className="text-sm">Sara, Italy</p>
              <p className="text-xs text-[#252525cf]">on how we blend aesthetics and functionality</p>
            </div>
          </div>
        </div>

        <div className="h-[340px] xm:h-[380px] p-7 bg-[#F2F2F2] rounded-xl flex flex-col transform hover:scale-105 hover:rotate-2 transition-all duration-300  ">
          <Image src={quotes} alt="quotes" />
          <div className="flex-1 flex flex-col justify-between">
            <p className="font-medium text-[20px] xm:text-[25px] ">With you guys, living in the future will be way more aesthetic than I thought.</p>
            <div>
              <p className="text-sm">Antony, Spain</p>
              <p className="text-xs text-[#252525cf]">on how aesthetic our buildings are</p>
            </div>
          </div>
        </div>

      </motion.div>


    </motion.section>
  )
}
