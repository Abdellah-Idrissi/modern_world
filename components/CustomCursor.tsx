"use client"

import { motion } from "framer-motion"
import useMousePosition from "./useMousePosition"
import { useEffect } from "react"


export default function CustomCursor() {

  const {x,y} = useMousePosition()

  const size = 13

  useEffect(()=> {
    console.clear()
  },[])


  return (
    <div className="cursor">
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] grid place-items-center bg-black `}
        animate={{
          y:`${y - (size/2)}px`,
          x: `${x - (size/2)}px`,
          width: '13px',
          height: '13px',
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.3}}
      >
      </motion.div>
    </div>
  )
}
