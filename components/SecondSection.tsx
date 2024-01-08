"use client"
import { motion , useInView } from "framer-motion"
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Sliders from "./Sliders";
import Image from "next/image";
import p1 from "../public/p1.jpg"
import p2 from "../public/p2.jpg"
import p3 from "../public/p3.jpg"
import p4 from "../public/p4.jpg"
import p5 from "../public/p5.jpg"
import p6 from "../public/p6.jpg"
import p7 from "../public/p7.jpg"
import p8 from "../public/p8.jpg"
import p9 from "../public/p9.jpg"
import p10 from "../public/p10.jpg"



export default function SecondSection() {
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
    show: { opacity: 1, y: 0, transition: { type: "Inertia" } },
  }

  const item2 = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { type: "Inertia" , delay:0.5 } },
  }



  return (
    <div className=" bg-[#F2F2F2] " id="buildings">
      <section className="container px-5 sm:px-7 pt-16 pb-12  mx-auto lg:max-w-[1280px]">
        
        <motion.div
            ref={ref1}
            animate={isInView1 ? "show" : "hidden"}
            variants={parentVariants}
            className="flex flex-col mb-14"
          >
            <motion.div variants={item}></motion.div>

            <motion.div variants={item} className="mb-5">
              <h2 className={`font-secondFont hidden lg:block text-[60px] text-center leading-none`}>Futuristic buildings worldwide</h2>
              <h2 className={`font-secondFont text-[38px] xm:text-[55px] md:text-[60px] text-center leading-[1.1] lg:hidden`}>Futuristic buildings</h2>
              <h2 className={`font-secondFont text-[38px] xm:text-[55px] md:text-[60px] text-center leading-[1.1] lg:hidden`}>worldwide</h2>
            </motion.div>

            <motion.p variants={item} className="text-[#252525cf]  text-[14px] xm:text-[15px] md:text-[16px] text-center mx-auto max-w-[270px] xm:max-w-[300px] md:max-w-[320px] lg:max-w-[560px]">In every corner of the world, we craft aesthetic buildings, each standing as a timeless work of art that captures the essence of modern and futuristic aesthetics
            </motion.p>

        </motion.div>

        <motion.div 
          ref={ref2}
          animate={isInView2 ? "show" : "hidden"}
          variants={item2}
        >
          <Swiper 
              breakpoints={{
                768: {
                  slidesPerView:2
                },
                1024: {
                  slidesPerView:3
                }
                
              }}

              spaceBetween={30}
              centeredSlides={true}
              navigation={true} 
              modules={[Navigation]}
              loop={true}
              className="mySwiper group "
            >

            <SwiperSlide className="relative">
              <Image src={p1} alt="" sizes="(min-width: 768px) 40vw , 95vw" priority={true} className="!h-[480px] !w-full md:!w-[388px] object-cover" placeholder={'blur'}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Cantardo House</p>
                  <p className="text-[15px] font-light">Marseille, France</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image src={p2} alt="" sizes="(min-width: 768px) 40vw , 95vw" priority={true} className="!h-[480px] !w-full md:!w-[388px] object-cover" placeholder={'blur'}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Meyer Cube</p>
                  <p className="text-[15px] font-light">Tokyo, Japan</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image src={p3} alt="" sizes="(min-width: 768px) 40vw , 95vw" priority={true} className="!h-[480px] !w-full md:!w-[388px] object-cover" placeholder={'blur'}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Triangles Stack</p>
                  <p className="text-[15px] font-light">Doha, Qatar</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image src={p4} alt="" sizes="(min-width: 768px) 40vw , 95vw" priority={true} className="!h-[480px] !w-full md:!w-[388px] object-cover" placeholder={'blur'}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Nebula Plaza</p>
                  <p className="text-[15px] font-light">Toronto, Canada</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image src={p5} alt="" sizes="(min-width: 768px) 40vw , 95vw" priority={true} className="!h-[480px] !w-full md:!w-[388px] object-cover" placeholder={'blur'}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Luxoria Apartments</p>
                  <p className="text-[15px] font-light">Berlin, Germany</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image src={p6} alt="" sizes="(min-width: 768px) 40vw , 95vw" priority={true} className="!h-[480px] !w-full md:!w-[388px] object-cover" placeholder={'blur'}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Elysium Skyscape</p>
                  <p className="text-[15px] font-light">Sydney, Australia</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image src={p7} alt="" sizes="(min-width: 768px) 40vw , 95vw" priority={true} className="!h-[480px] !w-full md:!w-[388px] object-cover" placeholder={'blur'}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Dimensional Dwellings</p>
                  <p className="text-[15px] font-light">Chicago, United States</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image src={p8} alt="" sizes="(min-width: 768px) 40vw , 95vw" priority={true} className="!h-[480px] !w-full md:!w-[388px] object-cover" placeholder={'blur'}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">The Apex Tower</p>
                  <p className="text-[15px] font-light">Sylvania, Cascadia</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image src={p9} alt="" sizes="(min-width: 768px) 40vw , 95vw" priority={true} className="!h-[480px] !w-full md:!w-[388px] object-cover" placeholder={'blur'}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Haven Residence</p>
                  <p className="text-[15px] font-light">Madrid, Spain</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image src={p10} alt="" sizes="(min-width: 768px) 40vw , 95vw" priority={true} className="!h-[480px] !w-full md:!w-[388px] object-cover" placeholder={'blur'}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[150px] text-white flex flex-col justify-end">
                <div className="p-5">
                  <p className="font-medium text-[22px]">Nebula Skyline</p>
                  <p className="text-[15px] font-light">Milan, Italy</p>
                </div>
              </div>
            </SwiperSlide>




            <Sliders />






          </Swiper>
        </motion.div>

      </section>
    </div>
  )
}
