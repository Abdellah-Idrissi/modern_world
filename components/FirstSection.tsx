"use client"

import Image from "next/image";
import p1 from "../public/s1first.jpg"
import p2 from "../public/s1second.jpg"
import p3 from "../public/s1third.jpeg"
import p4 from "../public/s1fourth.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import { motion , useInView } from "framer-motion";
import { useRef } from "react";

export default function FirstSection() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const isInView1 = useInView(ref1)
  const isInView2 = useInView(ref2)
  const isInView3 = useInView(ref3)


  const parentVariants = {
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { type: "Inertia" } },
  }

  const item2 = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { type: "Inertia" , delay:0.5} },
  }

  const item3 = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { type: "Inertia" , delay:0.6} },
  }



  return (
    <section className=" px-5 sm:px-7 pt-16 pb-12 container mx-auto lg:max-w-[1280px]" id="architectures">

        <motion.div
          ref={ref1}
          animate={isInView1 ? "show" : "hidden"}
          variants={parentVariants}
          className="flex flex-col mb-14"
        >
          <motion.div variants={item}></motion.div>

          <motion.div variants={item} className="mb-5">
            <h2 className={`font-secondFont hidden lg:block text-[60px] text-center leading-none`}>Discover modern architectures</h2>
            <h2 className={`font-secondFont text-[40px] xm:text-[55px] md:text-[60px] text-center leading-none lg:hidden`}>Discover modern</h2>
            <h2 className={`font-secondFont text-[40px] xm:text-[55px] md:text-[60px] text-center leading-none lg:hidden`}>architectures</h2>
          </motion.div>

          <motion.p variants={item} className="text-[#252525cf] text-[14px] xm:text-[15px] md:text-[16px] text-center mx-auto max-w-[230px] xm:max-w-[265px] md:max-w-[285px]  lg:max-w-[550px]">Experience the seamless integration of creativity and aesthetics as architects push boundaries to create structures that captivate the eye and inspire the mind
          </motion.p>

        </motion.div>

        <div>
          <motion.div 
            ref={ref2}
            animate={isInView2 ? "show" : "hidden"}
            variants={item2}
          >
            <Image src={p1} alt="" className="mx-auto  h-[450px] object-cover rounded-3xl" placeholder="blur"  sizes="90vw"/>
          </motion.div>

          <motion.div 
            ref={ref3}
            animate={isInView3 ? "show" : "hidden"}
            variants={item3}
          >
            <div className="hidden sm:grid grid-cols-1 xm:grid-cols-3 grid-rows-1 gap-7 mt-7">
              <Image src={p2} alt="" priority={true} sizes="(min-width: 640px) 50vw , 0vw" placeholder="blur" className=" h-[340px] object-cover rounded-3xl "/>
              <Image src={p3} alt="" priority={true} sizes="(min-width: 640px) 50vw , 0vw" placeholder="blur" className=" h-[340px] object-cover rounded-3xl "/>
              <Image src={p4} alt="" priority={true} sizes="(min-width: 640px) 50vw , 0vw" placeholder="blur" className=" h-[340px] object-cover rounded-3xl "/>
            </div>

            <Swiper
              pagination={{
                dynamicBullets: true,
                clickable:true
              }}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper mt-7 sm:!hidden rounded-3xl"
            >
              <SwiperSlide>
                <Image src={p2} alt="" priority={true} sizes="(max-width: 640px) 97vw , 0vw" placeholder="blur" className=" h-[340px] object-cover rounded-3xl "/>
              </SwiperSlide>

              <SwiperSlide>
                <Image src={p3} alt="" priority={true} sizes="(max-width: 640px) 97vw , 0vw" placeholder="blur" className=" h-[340px] object-cover rounded-3xl "/>
              </SwiperSlide>

              <SwiperSlide>
                <Image src={p4} alt="" priority={true} sizes="(max-width: 640px) 97vw , 0vw" placeholder="blur" className=" h-[340px] object-cover rounded-3xl "/>
              </SwiperSlide>

            </Swiper>
          </motion.div>
        </div>

    </section>
  )
}
