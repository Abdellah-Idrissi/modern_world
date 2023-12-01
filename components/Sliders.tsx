import Image from "next/image";
import { useSwiper } from "swiper/react";

export default function Sliders() {
  const swiper = useSwiper();
  

  return <div className="absolute top-1/2 opacity-0 duration-200 group-hover:opacity-100 -translate-y-1/2 z-50 inset-x-0 flex justify-between ">

    <button
      className={`bg-black hover:bg-neutral-800 transition-colors duration-200 w-9 h-9 grid place-items-center`}
      onClick={() => {
        swiper.slidePrev()
      }}>
        <Image src={'/arrow.svg'} alt="arrow" width={24} height={24} className="-rotate-90 w-6 h-6 " />

    </button>
  
    <button
      className={`bg-black hover:bg-neutral-800 transition-colors duration-200 w-9 h-9 grid place-items-center `}
      onClick={() => {
        swiper.slideNext()
      }}>
        <Image src={'/arrow.svg'} alt="arrow" width={24} height={24} className="rotate-90 w-6 h-6  " />

    </button>
  </div>
  
}

