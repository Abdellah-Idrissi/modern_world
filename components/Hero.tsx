"use client"

import Image from "next/image";
import { motion , useInView } from "framer-motion";
import { useRef } from "react";


export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const fadeDownVariants = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { type: "Inertia" } },
  }

  return (
    <motion.div 
      className="bg-hero bg-cover bg-no-repeat h-screen bg-bottom px-5 sm:px-7 grid place-items-center relative "
      
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      variants={{
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
        <div className="flex flex-col gap-4 mb-[100px] " >
          <motion.div variants={fadeDownVariants}></motion.div>
          <motion.div className="text-center" variants={fadeDownVariants}>
            <h1 className={`font-secondFont text-[42px]  xm:text-[55px] sm:text-7xl md:text-8xl leading-none`}>Walk through the</h1>
            <h1 className={`font-secondFont text-[42px]  xm:text-[55px] sm:text-7xl md:text-8xl leading-none `}>modern world </h1>

          </motion.div>

          <motion.p variants={fadeDownVariants} className="text-[14px] px-6 xm:px-0 xm:text-[15px] sm:text-[16px] text-center max-w-[300px] xm:max-w-[340px] sm:max-w-[430px] md:max-w-[450px] mx-auto">
            In a world where every structure tells a unique story, we redefine architectural excellence by crafting modern, imaginative buildings that push the skyline&apos;s boundaries. Elevate your surroundings with our innovative approach to design.
          </motion.p>

          <motion.a href="/#architectures" ref={ref} variants={fadeDownVariants} className="mt-2 bg-black group text-white w-[100px] xm:w-[140px] h-[50px] relative mx-auto rounded-sm overflow-hidden transition-colors hover:opacity-90 ">
            <span className="transition-all duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-[120%]">Explore</span>

            <Image src={'/arrow.svg'} alt="arrow" width={24} height={24} className="rotate-180 w-6 h-6 opacity-0  transition-all duration-200 absolute left-1/2 top-[-30%] -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:top-1/2 " />
          </motion.a>

      </div>
    </motion.div>

  )
}